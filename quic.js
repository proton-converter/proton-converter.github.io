const c = window.crypto.subtle;
let quicHmacKey = null;

/**
 * @param {string|ArrayBuffer|null} data
 */
function quicStr8(data) {
    if (!data) return new ArrayBuffer(1);
    const input = (typeof data === 'string') ? new TextEncoder().encode(data) : new Uint8Array(data);
    const result = new Uint8Array(input.byteLength + 1);
    const view = new DataView(result.buffer);
    view.setUint8(0, input.byteLength);
    result.set(input, 1);
    return result.buffer;
}
/**
 * @param {string|ArrayBuffer|null} data
 */
function quicStr16(data) {
    if (!data) return new ArrayBuffer(2);
    const input = (typeof data === 'string') ? new TextEncoder().encode(data) : new Uint8Array(data);
    const result = new Uint8Array(input.byteLength + 2);
    const view = new DataView(result.buffer);
    view.setUint16(0, input.byteLength, false);
    result.set(input, 2);
    return result.buffer;
}

/**
 * @param {number} x
 */
function quicVarint(x) {
    let result;
    if (x < 0x40) {
        return new Uint8Array([x]).buffer;
    } else if (x < 0x4000) {
        result = new Uint8Array(2);
        new DataView(result.buffer).setUint16(0, x, false);
        result[0] = result[0] | 0x40;
    } else if (x < 0x40000000) {
        result = new Uint8Array(4);
        new DataView(result.buffer).setUint32(0, x, false);
        result[0] = result[0] | 0x80;
    } else {
        result = new Uint8Array(8);
        new DataView(result.buffer).setBigUint64(0, BigInt(x), false);
        result[0] = result[0] | 0xC0;
    }
    return result.buffer;
}
/**
 * @param {number} x
 */
function quicVarintLength(x) {
    if (x < 0x40) {
        return 1;
    } else if (x < 0x4000) {
        return 2;
    } else if (x < 0x40000000) {
        return 4;
    } else {
        return 8;
    }
}

/**
 * @param {ArrayBuffer|Uint8Array} buffer 
 */
function quicU8a(buffer) {
    if (buffer instanceof Uint8Array) {
        return buffer;
    }
    return new Uint8Array(buffer);
}

/**
 * @param {ArrayBuffer|Uint8Array} buffer 
 */
function quicToHex(buffer) {
    const arr = quicU8a(buffer);
    if (arr.toHex) {
        return arr.toHex();
    } else {
        return [...arr].map(x => x.toString(16).padStart(2, '0')).join('');
    }
}

/**
 * @param {(ArrayBuffer | Uint8Array)[]} buffers 
 * @param {number} allocateBefore
 * @param {number} allocateAfter
 */
function quicConcatBuffers(buffers, allocateBefore = 0, allocateAfter = 0) {
    const buffersU8a = buffers.map((buffer) => quicU8a(buffer));
    const totalLength = buffersU8a.reduce(
        (a, buffer) => a + buffer.byteLength,
        allocateBefore + allocateAfter
    );
    const result = new Uint8Array(totalLength);
    let offset = allocateBefore;
    for (const buffer of buffersU8a) {
        result.set(buffer, offset);
        offset += buffer.byteLength;
    }
    return result.buffer;
}

/**
 * @param {ArrayBuffer|Uint8Array} dst
 * @param {ArrayBuffer|Uint8Array} src
 * @param {number} offset
 */
function quicCopyBuffer(dst, src, offset = 0) {
    quicU8a(dst).set(quicU8a(src), offset);
    return src.byteLength;
}
/**
 * @param {ArrayBuffer|Uint8Array} dst
 * @param {ArrayBuffer|Uint8Array} src
 * @param {number} dstOffset
 * @param {number} srcOffset
 * @param {number} length
 */
function quicXorBuffer(dst, src, dstOffset, srcOffset, length) {
    const dstU = quicU8a(dst);
    const srcU = quicU8a(src);
    for (let i = 0; i < length; i++) {
        dstU[dstOffset + i] ^= srcU[srcOffset + i];
    }
}

/**
 * @param {CryptoKey|ArrayBuffer} key
 * @param {ArrayBuffer} buffer
 */
async function quicHmac(key, buffer) {
    const cryptoKey = (key instanceof CryptoKey) ? key : await c.importKey('raw', key, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    return c.sign('HMAC', cryptoKey, buffer);
}

async function quicInitHmacKey() {
    const quicSalt = new Uint8Array([
        0x38, 0x76, 0x2c, 0xf7, 0xf5, 0x59, 0x34, 0xb3, 0x4d, 0x17,
        0x9a, 0xe6, 0xa4, 0xc8, 0x0c, 0xad, 0xcc, 0xbb, 0x7f, 0x0a,
    ]);
    quicHmacKey = await c.importKey('raw', quicSalt, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
}
/**
 * @param {CryptoKey|ArrayBuffer} key
 * @param {number} length
 * @param {string} label
 * @param {string} context
 */
async function quicDeriveSecret(key, length, label, context = '') {
    const dataBuffer = quicConcatBuffers([
        quicStr8('tls13 ' + label),
        quicStr8(context),
        new Uint8Array([0x01]),
    ], 2);
    const view = new DataView(dataBuffer);
    // note: length here is not buffer length, but external one
    view.setUint16(0, length, false);
    const hmac = await quicHmac(key, dataBuffer);
    return hmac.slice(0, length);
}
/**
 * @param {CryptoKey|ArrayBuffer} key
 * @param {ArrayBuffer} payload
 * @param {ArrayBuffer} iv
 * @param {ArrayBuffer} aad
 */
async function quicEncryptPayload(key, payload, iv, aad) {
    const cryptoKey = (key instanceof CryptoKey) ? key : await c.importKey('raw', key, { name: 'AES-GCM', length: 128 }, false, ['encrypt']);
    return c.encrypt({ name: 'AES-GCM', iv: iv, additionalData: aad, tagLength: 128 }, cryptoKey, payload);
}
/**
 * @param {CryptoKey|ArrayBuffer} key
 * @param {ArrayBuffer} sample
 */
async function quicDeriveHpMask(key, sample) {
    // ECB is not implemented in Subtle, so we just use single block with zero IV
    const cryptoKey = (key instanceof CryptoKey) ? key : await c.importKey('raw', key, { name: 'AES-CBC', length: 128 }, false, ['encrypt']);
    return c.encrypt({ name: 'AES-CBC', iv: new ArrayBuffer(16) }, cryptoKey, sample);
}
/**
 * @param {number} dcidLength
 * @param {number} scidLength
 * @param {number} tokenLength
 * @param {number} pknLength
 * @param {number} payload
 * @param {number} padto
 */
function quicMeasureLengths(dcidLength, scidLength, tokenLength, pknLength, payloadLength, padto = 0) {
    const baseHeaderLength = 8 + dcidLength + scidLength + tokenLength + pknLength;
    const tagLength = 16;
    let paddingLength = 0;

    const getLengthByteSize = () => quicVarintLength(pknLength + payloadLength + paddingLength + tagLength);
    const getOverallLength = () => baseHeaderLength + getLengthByteSize() + payloadLength + paddingLength + tagLength;

    let overallLength = getOverallLength();
    if (overallLength < padto) {
        paddingLength = padto - overallLength;
        // Adjust padding down if it's too big due to length byte got bigger
        while (paddingLength && (getOverallLength() > padto)) {
            paddingLength--;
        }
        // But it can accidentaly underflow, just nudge 1 step back
        if (getOverallLength() < padto) {
            paddingLength++;
        }
        overallLength = getOverallLength();
    }
    // extra safety (tail starting from pkn must be at least 20 bytes hor hp key derivation)
    if (pknLength + payloadLength + paddingLength + tagLength < 20) {
        paddingLength = 20 - pknLength - payloadLength - tagLength;
        overallLength = getOverallLength();
    }
    const headerLength = baseHeaderLength + getLengthByteSize();

    return {
        'total': overallLength,
        'header': headerLength,
        'padding': paddingLength,
    };
}
/**
 * @param {ArrayBuffer} dcid
 * @param {ArrayBuffer} scid
 * @param {ArrayBuffer} token
 * @param {ArrayBuffer} pkn
 * @param {ArrayBuffer} payload
 * @param {number} padto
 */
async function quicInitial(dcid, scid, token, pkn, payload, padto) {
    const lengths = quicMeasureLengths(dcid.byteLength, scid.byteLength, token.byteLength, pkn.byteLength, payload.byteLength, padto);
    // Create header buffer
    const header = quicConcatBuffers([
        new Uint8Array([0xC0 | (pkn.byteLength - 1), 0, 0, 0, 1]),
        quicStr8(dcid),
        quicStr8(scid),
        quicStr8(token),
        quicVarint(pkn.byteLength + payload.byteLength + lengths.padding + 16),
        pkn,
    ]);
    // Derive keys
    if (!quicHmacKey) await quicInitHmacKey();
    const initSecret = await quicHmac(quicHmacKey, dcid);
    const clientSecret = await quicDeriveSecret(initSecret, 32, 'client in');
    const quicKey = await quicDeriveSecret(clientSecret, 16, 'quic key');
    const quicIv = await quicDeriveSecret(clientSecret, 12, 'quic iv');
    const quicHp = await quicDeriveSecret(clientSecret, 16, 'quic hp');
    // Xor nonce with PKN
    quicXorBuffer(quicIv, pkn, 12 - pkn.byteLength, 0, pkn.byteLength);
    // Create padded payload buffer and encrypt it
    const paddedPayload = quicConcatBuffers([payload], 0, lengths.padding);
    const encryptedPayload = await quicEncryptPayload(quicKey, paddedPayload, quicIv, header);
    // Header Prorection
    const mask = new Uint8Array(await quicDeriveHpMask(quicHp, encryptedPayload.slice(4 - pkn.byteLength, 20 - pkn.byteLength)));
    mask[0] &= 0x0f;
    quicXorBuffer(header, mask, 0, 0, 1);
    quicXorBuffer(header, mask, header.byteLength - pkn.byteLength, 1, pkn.byteLength);
    // Generate resulting buffer
    return quicConcatBuffers([header, encryptedPayload]);
}
/**
 * @param {ArrayBuffer} data
 * @param {number} offset
 */
function quicCryptoFrame(data, offset = 0) {
    return quicConcatBuffers([
        new Uint8Array([0x06]),
        quicVarint(offset),
        quicVarint(data.byteLength),
        data,
    ]);
}
/**
 * @param {number} code
 * @param {ArrayBuffer} content
 */
function quicTlsExt(code, content) {
    const length = content.byteLength;
    const result = quicConcatBuffers([content], 4);
    const view = new DataView(result);
    view.setUint16(0, code, false);
    view.setUint16(2, length, false);
    return result;
}
/**
 * @param {string} sni
 */
function quicTlsExtSni(sni) {
    const sniBuffer = quicStr16(sni);
    const extBuffer = quicConcatBuffers([sniBuffer], 3);
    const view = new DataView(extBuffer);
    view.setUint16(0, sniBuffer.byteLength + 1, false);
    view.setUint8(2, 0);
    return quicTlsExt(0, extBuffer);
}
/**
 * @param {string} sni
 * @param {ArrayBuffer?} predefinedRandom
 */
function quicTlsClientHelloSniOnly(sni, predefinedRandom = null) {
    const randomBytes = new Uint8Array(predefinedRandom ?? new ArrayBuffer(32));
    if (!predefinedRandom) window.crypto.getRandomValues(randomBytes);
    const payload = quicConcatBuffers([
        new Uint8Array([0x03, 0x03]),
        randomBytes,
        new Uint8Array([0, 0, 0, 0]),
        quicStr16(quicTlsExtSni(sni)),
    ], 4);
    const view = new DataView(payload);
    view.setUint32(0, payload.byteLength - 4, false);
    view.setUint8(0, 0x01);
    return payload;
}

function zebra(buffer, parts, includeFirst = true) {
    let include = includeFirst;
    let offset = 0;
    let result = '';
    for (let part of parts) {
        if (include) {
            result += `<b 0x${quicToHex(buffer.slice(offset, offset + part))}>`;
        } else {
            result += `<r ${part}>`;
        }
        offset += part;
        include = !include;
    }
    return result;
}

let lastSni = null;
async function generate(force = false) {
    const sniInput = document.getElementById('sni');
    const sni = sniInput.value || sniInput.placeholder;
    if (!force && sni === lastSni) return;
    lastSni = sni;
    const dcid = new Uint8Array(1);
    window.crypto.getRandomValues(dcid);
    const scid = new Uint8Array(0);
    const token = new Uint8Array(0);
    const pkn = new Uint8Array([0]);
    const clientHello = quicTlsClientHelloSniOnly(sni);
    const payload = quicCryptoFrame(clientHello);
    const packet = await quicInitial(dcid, scid, token, pkn, payload, 0);
    const i1 = zebra(packet, [31, 22, packet.byteLength - 69, 16]);
    document.getElementById('outputAmnezia').value = i1;
    document.getElementById('outputRaw').value = quicToHex(packet);
    document.getElementById('outputSni').innerText = sni;
}

let inputTimeout = null;
function updatesni() {
    clearTimeout(inputTimeout);
    inputTimeout = setTimeout(() => {
        generate();
    }, 16);
}

// Экспортируем функции в глобальную область для использования в других скриптах

window.generateI1FromDomain = async function(domain) {
    try {
        const dcid = new Uint8Array(1);
        window.crypto.getRandomValues(dcid);
        const scid = new Uint8Array(0);
        const token = new Uint8Array(0);
        const pkn = new Uint8Array([0]);
        const clientHello = quicTlsClientHelloSniOnly(domain);
        const payload = quicCryptoFrame(clientHello);
        const packet = await quicInitial(dcid, scid, token, pkn, payload, 0);
//        return zebra(packet, [31, 22, packet.byteLength - 69, 16]);
		  return `<b 0x${quicToHex(packet)}>`
    } catch (error) {
        console.error('Ошибка генерации I1:', error);
        return null;
    }
};