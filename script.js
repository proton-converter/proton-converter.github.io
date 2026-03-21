
document.getElementById('tgButton').onclick = function() {
    window.location.href = 'https://t.me/warp_1_1_1_1';
}

document.getElementById('promoButton').onclick = function() {
    window.location.href = 'https://storage.googleapis.com/amnezia/amnezia.org?m-path=premium&arf=VG755WBZDBAPGGYM';
}

document.getElementById('warpButton').onclick = function() {
    window.location.href = 'https://my-other-projects.vercel.app/';
}

window.addEventListener('DOMContentLoaded', function() {
  // Восстанавливаем состояние всех контейнеров
  toggleAWG15Containers();
  toggleJunkContainer();
  replaceMobileText();
});

function toggleJunkContainer() {
  const nojunkEnabled = document.getElementById('nojunk').checked;
  const container2 = document.querySelector('.container2');
  const containerColumns = document.querySelector('.container-columns');
  
  if (nojunkEnabled && container2 && containerColumns) {
    container2.classList.add('hidden');
    // Убираем grid и position из container-columns
    containerColumns.style.display = 'block';
    containerColumns.style.position = 'static';
  } else if (container2 && containerColumns) {
    container2.classList.remove('hidden');
    // Восстанавливаем оригинальные стили
    containerColumns.style.display = '';
    containerColumns.style.position = '';
  }
}



function toggleAWG15Containers() {
  const awg15Enabled = document.getElementById('awg15').checked;
  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  const awg15Container = document.getElementById('15awg');
  const wiresockContainer = document.getElementById('15wiresock');
  
  // Сначала скрываем оба контейнера
  if (awg15Container) awg15Container.classList.add('hidden');
  if (wiresockContainer) wiresockContainer.classList.add('hidden');
  
  // Если AWG 1.5 включен, показываем соответствующий контейнер
  if (awg15Enabled) {
    if (selectedOption === 'clash' || selectedOption === 'awg') {
      if (awg15Container) awg15Container.classList.remove('hidden');
    } else if (selectedOption === 'karing') {
      if (wiresockContainer) wiresockContainer.classList.remove('hidden');
    }
  }
}

// Добавляем обработчики для радиокнопок и чекбокса awg15
document.querySelectorAll('input[name="option"]').forEach(radio => {
  radio.addEventListener('change', toggleAWG15Containers);
});

document.getElementById('awg15').addEventListener('change', toggleAWG15Containers);

/*
document.querySelectorAll('input[name="option"]').forEach(radio => {
  radio.addEventListener('change', function() {
    const musor1 = document.querySelector('.musor1');
    const musor2 = document.querySelector('.musor2');
    const containerColumns = document.querySelector('.container-columns');
    const container2 = document.querySelector('.container2');
    
    if (this.id === 'karing') {
      musor1.classList.add('hidden');
      musor2.classList.remove('hidden');
      containerColumns.classList.add('karing-active');
      container2.classList.add('karing-active');
	  
    } else {
      musor1.classList.remove('hidden');
      musor2.classList.add('hidden');
      containerColumns.classList.remove('karing-active');
      container2.classList.remove('karing-active');
    }
  });
});
*/
document.getElementById('wgFiles').addEventListener('change', function(e) {
    const files = e.target.files;
    const label = document.getElementById('fileUploadLabel');
    
    if (files.length === 0) {
        label.textContent = 'Выбрать файлы';
    } else {
        label.textContent = `Файлов выбрано: ${files.length}`;
    }
});
document.querySelector('.randombtn').onclick = function() {
  const jc = getRandomInt(1, 100);
  const jmin = getRandomInt(1, 200);
  const jmax = getRandomInt(jmin + 1, 201);
  
  document.getElementById('jc1').value = jc;
  document.getElementById('jmin1').value = jmin;
  document.getElementById('jmax1').value = jmax;
  document.getElementById('junk3').checked = true;
  convert()
};

document.querySelectorAll('.randombtn')[1].onclick = function() {
  // Генерация случайных значений для I1-I5
  const Hex = ['<b 0xce000000010897a297ecc34cd6dd000044d0ec2e2e1ea2991f467ace4222129b5a098823784694b4897b9986ae0b7280135fa85e196d9ad980b150122129ce2a9379531b0fd3e871ca5fdb883c369832f730e272d7b8b74f393f9f0fa43f11e510ecb2219a52984410c204cf875585340c62238e14ad04dff382f2c200e0ee22fe743b9c6b8b043121c5710ec289f471c91ee414fca8b8be8419ae8ce7ffc53837f6ade262891895f3f4cecd31bc93ac5599e18e4f01b472362b8056c3172b513051f8322d1062997ef4a383b01706598d08d48c221d30e74c7ce000cdad36b706b1bf9b0607c32ec4b3203a4ee21ab64df336212b9758280803fcab14933b0e7ee1e04a7becce3e2633f4852585c567894a5f9efe9706a151b615856647e8b7dba69ab357b3982f554549bef9256111b2d67afde0b496f16962d4957ff654232aa9e845b61463908309cfd9de0a6abf5f425f577d7e5f6440652aa8da5f73588e82e9470f3b21b27b28c649506ae1a7f5f15b876f56abc4615f49911549b9bb39dd804fde182bd2dcec0c33bad9b138ca07d4a4a1650a2c2686acea05727e2a78962a840ae428f55627516e73c83dd8893b02358e81b524b4d99fda6df52b3a8d7a5291326e7ac9d773c5b43b8444554ef5aea104a738ed650aa979674bbed38da58ac29d87c29d387d80b526065baeb073ce65f075ccb56e47533aef357dceaa8293a523c5f6f790be90e4731123d3c6152a70576e90b4ab5bc5ead01576c68ab633ff7d36dcde2a0b2c68897e1acfc4d6483aaaeb635dd63c96b2b6a7a2bfe042f6aed82e5363aa850aace12ee3b1a93f30d8ab9537df483152a5527faca21efc9981b304f11fc95336f5b9637b174c5a0659e2b22e159a9fed4b8e93047371175b1d6d9cc8ab745f3b2281537d1c75fb9451871864efa5d184c38c185fd203de206751b92620f7c369e031d2041e152040920ac2c5ab5340bfc9d0561176abf10a147287ea90758575ac6a9f5ac9f390d0d5b23ee12af583383d994e22c0cf42383834bcd3ada1b3825a0664d8f3fb678261d57601ddf94a8a68a7c273a18c08aa99c7ad8c6c42eab67718843597ec9930457359dfdfbce024afc2dcf9348579a57d8d3490b2fa99f278f1c37d87dad9b221acd575192ffae1784f8e60ec7cee4068b6b988f0433d96d6a1b1865f4e155e9fe020279f434f3bf1bd117b717b92f6cd1cc9bea7d45978bcc3f24bda631a36910110a6ec06da35f8966c9279d130347594f13e9e07514fa370754d1424c0a1545c5070ef9fb2acd14233e8a50bfc5978b5bdf8bc1714731f798d21e2004117c61f2989dd44f0cf027b27d4019e81ed4b5c31db347c4a3a4d85048d7093cf16753d7b0d15e078f5c7a5205dc2f87e330a1f716738dce1c6180e9d02869b5546f1c4d2748f8c90d9693cba4e0079297d22fd61402dea32ff0eb69ebd65a5d0b687d87e3a8b2c42b648aa723c7c7daf37abcc4bb85caea2ee8f55bec20e913b3324ab8f5c3304f820d42ad1b9f2ffc1a3af9927136b4419e1e579ab4c2ae3c776d293d397d575df181e6cae0a4ada5d67ecea171cca3288d57c7bbdaee3befe745fb7d634f70386d873b90c4d6c6596bb65af68f9e5121e67ebf0d89d3c909ceedfb32ce9575a7758ff080724e1ab5d5f43074ecb53a479af21ed03d7b6899c36631c0166f9d47e5e1d4528a5d3d3f744029c4b1c190cbfbad06f5f83f7ad0429fa9a2719c56ffe3783460e166de2d8>', '<b 0xc3000000010828cc76e6712c410c000044d0a2465e075ad0f01564ee338a44a2023493b8e15237b38843001050a4f4bf2a2cfb40695fe5ff42a70c0990053428d982902a32ca57e8b98909370223db26cd729039d5717f730c935603e2a1f7e452ebbeb6236f02198a9e5293322ab2895f935827f58ffe0a2ca638599a6218bc847fd5e1c801cd487cfb10d308156e7ce4c91cf522097cab6d079acc9e7ef18f231ee6ac13f7bd3d03db41dc27953d32d1aaa35932add5b567769a35fc7e3ec9175211afba7b945492b7f2e8b141c450585f09eb9c38a760b4f6fd36257830c47bd028f35ac1b00cbf6c59030d67363e28a8a2e70190a23fbcc10941537db75c01b82f8be3d0ba7fd0f9ab534a36dcefff49ecb9a63d3be1f14ab0376d4f9686fa6478816c183f07179778593821b89a035cfa92ec13c5cd2991180278ed125264fb3a512d0480a73d69218aad3477f2c741981da881a0146002435fd1f15a0c38715396ea6989b4275137f52ea5fd771e9dc0f552755062e21c996b36e97850bf70fce2f98d26837585d28219a7a30d0cc910ff04a920bb69c714c0142193f267d917aab11058f197a6a66cd752aff348d334186bf91a69843f3452b953fc732449c58dc8aa4bcac89aa661f90891da751978f17a62f7b8f847f440f7210dd05574dbd78e4feb4ac478f275f4044c7170f74221abdda3b8fc0c129ae35d3fabac349d81ba9042b4782819ea81665d06691195bd9e7abf6f0e065a092811e9ea5b113207ef06de5768ebe62e8ee94ae4beb5bc4f9996c2c70c7d620da7fedbb2b9709a45584b5ae0fdc1f746b4afc7f100bc2888611b46e2ac243e136bb100e9db3022f472aac8801e77d15960a031e3f8fea5cf8f8703bdb1357800adc802b702c547f4e5f75eb4b6e5eb9327876c77dcfb3baf696a276d6779ab337fc1aa0b03222a6acda0b04a4220f77fd04ce14f083445e55ff88260834582531d759683e1b2d8abc885664cfba1f49f9bdcf26fca845fde45a0ca08a90794cf70338f1031c5098664f10e830d5b3437c7c367c8a0faa16d81471111b616b2f710edfcab27f5f1a7a33daa20ea6e8e5dcd624c6d8f2c048543d025eb970a8eb8aa09c8b4d0be42d6426961a624e37366c21b7e6ca24d09aa3e46a03e3dfc09eafd9d213752b2ca903d11626eb672d5dc116507c6cd2e43f59a6c964937cd9d8f1e54b05f4486c780c46a5718a3baedf93a5cd9b374097bc6db16aa272b6e0a935b35c3f721e206804c45ec5b4a4dadfbb28a9bd08d4a1590f05ef21185c00f8ca250fb31fe549845d39b6ced2e64c00ad5dac27d550313ac778a981a8b5ce2290bb2d90a50717f004d66ff122a395bba9fc67d38bfbfd549389622431afd241ce7a0d755e7016ee37ada01b09e51f4f39aa3785cc162726d23ad98e1f6d1f4346bd221b7401334d89c07e1ede4aec076933ae6d39bddef5d76e7d1fe8053fb1aca8c35d61b60648c5a1487365b0ca365c1689d8fbfc2267f24cbf90474c92be350f5e664b01ef1c8538b25296d643ceed009cb5da29c0a451be67ef626237066946379385f9c79276117598cd462ac0221fe93a46034df330144f9ccfc5d8560e8df7b19849cf7d65b79f21d3f05f61496ac7da3ffaf87b14171cb7e959c3e98fdef862f7cbf9eaebae74b1c9b09d102bff1fc82e0cf32c96b4dcc5cba0d7d3555bc8a5c722965af0c0c2f0dbb24ca1cbde23cfcd39ce86ecffe102f48cf657833fe578e5439>', '<b 0xce000000010801bb8fd47f76e35a000044d0506fda47bd5feb11d112f0f4faac71f58212d234a6c10dba88715411aa0444f4797e1fcab030a5c527e7c7b8f995357a2adc0300aa89ee67d840dfa49fe175ade73ed5ff4e93a3478a6ac9b7a30aa423852a16bdc005dc1529d1531a7a721bdf9a374c54d0fbd847e4e1ab9b16f59f79bf47c2160493b8a6782ec37e418398fc4db3d2ca4315d4df833144246faa9fea16f41a9f4f71954f16e61c4a9335486044f196e202794dacb39e25cebfa95eb18d9cb576b5ca69062dbf7261b004ff46a36cf8ad32365b3e640c9e7247a4a620c6db308386f9d7ee36fb01fce5ca7dd1e47902c6013e695a3741c28a21af9c57274e009923e7028fc16cfdd3a0f4b2aa647798592271ff17307f629b5ee0b3f874305f1edd0c95ac81a7a965cf39062c70ed36d6e734e6f456266b52a02fa9f8ce4763832f75e6ebad3c75eb61e95e660347e3dcdcb41968370dbd6765ee4f80e020de0725b5847656db58fac5ddc097201f7178fd686020d492c8fe5bbd43d64335047976760c3fdabcc49a6b637660866afba983e657b1a05c64718a15c0599481a7d6ea923eacde9392dce535dde5584dff91b975246bac444972b98f95a54d9a50c94b07aef84cb538c6fd3808205120e6a0b64289a6e3934bc0847712ccf6b76ce725f0899e952c18c0b6743eb629e187a5a2457f1ac700cf7e53616fc239331e09c52265af4219d3bccd203f9af1d14554fc836a12df0076f71d7c7e38233239faf9a1d7ea77a09c602290a186e78ddf379ee353d51a3b12bbd3552362bd2f165a91c5a3e4c5d29f0a38dd295d9c1abbbce33b1a5a105c6fe409c674bac10aacff349229f40c8f27b4332564ae1cfdbf48807ee3d562f8793efa7e81f7dec9640f5a2d1be2d9cff30b7d247abdb4c2a7f5fb5ae24cc884416deac3b4f30b6031c820dd2c378a3b54746416b6963a52c7661953c36a03e96f3d3e039c8d97534f8643b23dea6fb2d57e243011b56e72a25f0872a699cabfc5154f1769888b289d001d108a24097c810be0029af7cf22d5a9ce2b5dd077a6ad46952387113af426f4ae9cfa2c6723d37510d31a9b2b2a3cb013badf5a9eec7337f311a128f3661233d23ee93c4f8677002081dd68be9ec0fd9dabb927bdf73dfb22a3ea670d27a47dd7c12aab429afe9b88b97431104fdd8bcdd7b3663f1e43414ced191d66be0570b3a84e7907aa6a46875364a7df197f10983fe8dc4be8beadba8f670fa58a3dd75c27c66880a1c0dcc947274d6d77113cbf39476d7a3826e491bcf592c30989fe00c00823180c014d0fa2bb535752f2c73bcd8a9e258cff0a5906574d1e710e9e232a9f5d8022b354d25d029fd9c9d7b2e039963b661ce28a1a69b58936fb66398be425ce895c2a1e9d6090bf3e1267a003b30093088d41520b549f03bca5b4ff5ba18b7edb10bb4747a5146aa6a261226736b2c4bb0074fe7a0b3d3af693081d28f014981444728a85f6e0d4aa6566bd748ef8416526e638446806fa36c18558b818517add83a59d442d20bc09dc492cbe563b36e1fa02f218ed6ec650ffe6303b161ab4094d048b2d9cda27a0ebbff818cca884faaa16ab3efbde753b96f672777a58d16322a540a73c74a8611eb64054f7334f33d960726de23fe0e53d564714f085e270d2167a45521aadbdc5fac6192c25559c1f8f9ca66984a29863e1f9f799541484a4f361ee95a7b1e49912d2e538e5016235c8f7d0bc93f5>','<b 0xc70000000108df2b1b6970a3feeb000044d0ed2f8959a3b417c660df11a4450acf495f1cc1769fd0a540acbe890d40b5fdca6a2a4e815be972b62c55b5bd0cabf1912e79770f5144aadf2489a8bba6cf68cc4db1d8cec0a6d8e855e3f2a799632d9e705f05a99f09ca1d392de1228e0433f5a56d58772076d1f6c1a91e470a970074b7055425d19244e6eb9757bc10287d0267e02fd2b825a849187f848c89e44b182be8563f5a489d5722b68f7c5c0bc76895f9dff4bd955160001012deb3439dd93fa282df25377e9d00c960b6e48f9ca55f0cc97b4f0d3f034956c9df7fafca1b0c4bd313fe576c4bfecb8205765509ecab8c442a4bd4c483374b9ef328b77caf063ee13db140f7946a3d61e0cb8b083b91991d08db544baff4678b327b015b95db8bc90e28d604d927a1da4392d23093a214ca713e65b66e87d7ffb88664f77167db4ac6560a4ebbee324ff964a9949149782dd5d49594aaddcb752ad1f6eafbb84360175bd9529e1467f53ffbe9044b40e0fee663e8c589893b3ceab34a777e81c5971e88cc923bf0203e6ff2414de93ba98dba342269c6230c2cbf3bd48ea0bfaebf19597957078540122e7c461d151f2a25d7148e2c4f599c95caca321aa02aea7e583b01b07fc89c9e3945fa0ac57d894621197549c4862259981074cf4d077896e676dded2504904f54e291591bcc1118ccb7618ae21b35620c4ec8f8f1a26c1adb5ad9c9b63fbc5795f1997f37ae9ac5467267e7a63e4b21f798b404e78db54d987700550495f2f95529223d7297a4d5857340285624510dbe60276acbb56ec535bb09ce6fe14aa4448d7d1e5b76fb8ae7839c23259d5abb576980dc8ad2b4baf2359c6398452e6615099e87f8b9ca234ee6857713d2319d36020ed040245bd435d50af58216e1a6afb89b1e23240ee6554307475da43962c955eabe87d19f3614c5b60a110da771dd49a47b521af4cf4d4a5e29be93c6c9601c44b6d6c21a750c56c2fec3c9b744ad8496a3fb640ae7ce5a625f78c2d20a38f09cbae8ef0d1e1516470c1bc9bd86ab5596026dda6967a165cc29bd274bc69e5d5250b4c2d77ea79b057083edad33bf94f4f8eb57c6578d987615f3b37b934e18fc6c76d1ce3361ec9aaea32a7acc40bf1939c1e928dbd6b1741486d3b87b37e1c77207f70debee025caa6c4d6605b2b76d42429895f7376230299e644361c6c4ac2769009016192ea88d7cd2fbd2263fe8a19e38edc562fc14cf207128a757a672daf53af301c12d1b2e7ca1ba3305613baa482845253bd7dd0394e8c8bfdfb4227ab7a22112ef2194161a6b92fb7eaadb6974246beee5e578d84182fbcfd24a05d11860a86e445d91cd2fb32c2913100a3657191ff17d6f02a8c554753ed07e9f0a6c944dc380ca3b1fa6a432db7d63c4235e9a473dbfbe09a7a9bc7713a95c9fedc3911ba0caa2f26e981eef132e58b395b904f8542824b7a3af44e40543a0ce227d88abedd936252a6c7f77d4c5d40906e6ff269b3aac3653260da037e65f8fea00d597f3ca9d082a36f07cbc209032b84b975034ea817da90e89bff1ce8b534dc8c3b1f9445454db7411c88bc3804925b3c2b6f7ecddc309d451cd6ade1b716f83990d37c1df0a44bdd9b49eebe8abe5d3294bfc14485e30823cd20cced0c1f4549a8c07e6c2161305ea92a6e45250305bf559f629f325d03e5d6482ea4bf5953ece20514374cda7878c955c51c5c6fd79e053d64e354b8c01858409e2fb928896>', '<b 0xc0000000010892b06b4ebbca0bc7000044d057c592e23d34c9c3deca7a7cd33a1db8a4f853b48ab16f04e3c7fd20807f9b80954c849cac06879170c668ce2055d423bda127002d560066c2687ff3b688125269defb288ece048019c9812c55fbb016cf95fd73fd428b1f2efdd7e10c174fd1e6757a347214b443105777429c8cddd2e1fc77856fc41cabfc4781eca3027ecd073c7e4dd4e688e47f3d5d4831a37d0059f89bdcf055f11184725db456dcda8d0d3ee0e2f5dd4ce6aa039099e95b8c966210cb35dd4f7437e6e68d64c0d5d33aef8523af522e03de47ea6bb43b8bf1a96fc16ff4fd76d8a4c338f88360f69aed686fd82be98f17abb94ac63a0d9210840a4528ef25f91e7a0d91b6223e9b06b75465c94dd7e28f4194d25bab33ec618813c614a654b9dd420c2729e0202fbaf26e11268b6e50f2287452c3c81dacef3d98db8b7f4144bf70d70f6d72614167509afc874843843cbb73b302997cdafadd41850b0cb99a0b272b06e2c0001e6fda4fee44036b62ce27aea485a39a33c48e0ce97a7977c76d140f7df98b1a1cc46631a905041c76682dd2a8e07ab784f92d44c172d13405c3d87232aa539187c38d82096c17f5ccf76299465be7d25e81cf4bab3092846f158bec336d661cdd232b41b91fb50610e9113bc355dd92e404b7d91b288069397627c723202860658d995e94d4fefc005dda2df80d757aa5bc7a233b4b5807ccf28ebefcf6f70f8c513c55d5e9ff658e51583a0e460724db85b1e61891638817793542d5520a1d2536e08ddda1c11ba28173d7371d0bf6dde4a3aa4b826af64d307d97d471f5665f328af478abc70b8cefc24a0a90a6ed5caae5c4ce25167598600333943731aea8324e985ada2ab7ab1ea428ff8d3ecf8b272690e5b0ea1c5b4aa827b812cc5dd0b970b18ac88061a44255f5f638651ba5286d1decb8596b26f87730cd5de955f54a331f15e0c3edfea2b354e8418ac5c113f9dab98cd3822d7bc72cf29511abcdd56712f270f15419d1bab3b7e4a9320f41849e42b7ce3717c38f3b207867714a808f4f964fd4e51440a607b6efcef650cc7719227376b165e929c382ca943527c66e274ae9da0840b8f91f2d581a92e0c013155b4395f4c459e5e5089f9c3638098763d9485223d96c20e964e5bbec40c6fd920d746539dbca1ffdf1fbdeefa2256e7c8622566bbcfa0b60a573a13b6452e6b7ffe312c43475563fa5227fd50d450c022a6b46fb0f43a432dd84390ee337f6107bde0f4aecf0d58b3be6a5fb2b0e65bea782202f05ff145fb2561cbb29a536cd40bbb9058b673501798484af393423d84756af0a9813ef355c09f3112b80cb785b567aa36d7055a08e475c369c1c750c7c937655486075145863d29424a2442d3ea935e04c21d486d9c476f969dbc862d8e72e50b1c9880703a892f1d78a56ac336ac43e0a73de92bbbbc6d27b15f8ede377a43d39ba6f3c78b68da50a1f12bd8066bb572673210c6971f59af59d7c17245968b7f0d2fe8e9f141aaf99e6de7e0e9208d7a6dc83b9d9846bb0d01684ba9f1c9cdf07698549566466c20fc7cf2c679fc7aedeac59f534cd68e2e9ce7181fd9137f38431e708627101f3bf76a849ba5add5cf33508c8858e0ac587050eaecdf7e479a88eba4cc08d22d0c37cf12ce115eb4ee7a99302692d5cff8446486db739fa5db193a798776f879aabdffe5a3df911f7eb0a7e9b01d1fb7fad1392c9e4be307c329f7120edb4186c457f58>'];
  const RandomHex = Hex[Math.floor(Math.random() * Hex.length)];
  
  // Заполняем только I1 по умолчанию, остальные оставляем пустыми
  document.getElementById('i1').value = RandomHex;
  document.getElementById('i2').value = '';
  document.getElementById('i3').value = '';
  document.getElementById('i4').value = '';
  document.getElementById('i5').value = '';
  
  convert();
};

document.querySelectorAll('.randombtn')[2].onclick = function() {
  const domains = ['apteka.ru', 'mail.ru', 'psbank.ru', 'lenta.ru', 'www.pochta.ru', 'rzd.ru', 'rutube.ru', 'gosuslugi.ru'];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  document.getElementById('id').value = randomDomain;
  
  convert();
};

/*
document.querySelector('.randombtn2').onclick = function() {
  const generateRandomPair = () => {
    const first = getRandomInt(1, 50);
    const second = getRandomInt(first + 1, 120);
    return `${first}-${second}`;
  };
  document.getElementById('fp1').value = generateRandomPair();
  document.getElementById('fps1').value = generateRandomPair();
  document.getElementById('fpd1').value = generateRandomPair();
  document.getElementById('fake3').checked = true;
  convert()
};*/

const COUNTRY_FLAGS = {
      'JP': '🇯🇵 JP',
      'US': '🇺🇸 US',
      'NL': '🇳🇱 NL',
      'DE': '🇩🇪 DE',
      'FR': '🇫🇷 FR',
      'GB': '🇬🇧 GB',
      'CA': '🇨🇦 CA',
      'AU': '🇦🇺 AU',
      'RO': '🇷🇴 RO',
	  'MX': '🇲🇽 MX',      
	  'NO': '🇳🇴 NO',      
	  'SG': '🇸🇬 SG',      
      'CH': '🇨🇭 CH',
      'PL': '🇵🇱 PL'
    };
let proxyList = [];
function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function generateAmneziaDefaults() {
  const selectedOption = document.querySelector('input[name="junk"]:checked').id;
  let jc, jmin, jmax;
  switch(selectedOption) {
    case 'junk1':
      jc = 3;
      jmin = 1;
      jmax = 3;
      break;
    case 'junk2':
      jc = 30;
      jmin = 10;
      jmax = 30;
      break;
    case 'junk3':
      jc = parseInt(document.getElementById('jc1').value) || 128;
      jmin = parseInt(document.getElementById('jmin1').value) || 1279;
      jmax = parseInt(document.getElementById('jmax1').value) || 1280;
      break;
    default:
      jc = 128;
      jmin = 1279;
      jmax = 1280;
  }

  if (jmax <= jmin) {
    jmax = jmin + 1;
  }

  return {
    jc: jc,
    jmin: jmin,
    jmax: jmax,
    s1: 0,
    s2: 0,
    h1: 1,
    h2: 2,
    h3: 3,
    h4: 4
  };
}

function parseWGConfig(text) {
  const config = { 
    interface: { amneziaOptions: {} },
    peers: []
  };
  let currentSection = null;
  let peerIndex = -1;

  const lines = text.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) continue;

    // Обработка секций
    if (line.startsWith('[') && line.endsWith(']')) {
      currentSection = line.slice(1, -1).toLowerCase();
      if (currentSection === 'peer') {
        peerIndex++;
        config.peers.push({ amneziaOptions: {} });
        
        // Проверяем следующую строку на наличие имени (комментария)
        if (i + 1 < lines.length) {
          const nextLine = lines[i + 1].trim();
          const nameMatch = nextLine.match(/^#\s*(.+)/);
          if (nameMatch) {
            config.peers[peerIndex].name = nameMatch[1].trim();
            i++; // Пропускаем обработанную строку с именем
          }
        }
      }
      continue;
    }

    // Парсинг ключ=значение
    const equalsIndex = line.indexOf('=');
    if (equalsIndex === -1) continue;

    const key = line.substring(0, equalsIndex).trim();
    const value = line.substring(equalsIndex + 1).trim();
    const cleanKey = key.toLowerCase();

    if (currentSection === 'interface') {
      if (['jc', 'jmin', 'jmax', 's1', 's2', 'h1', 'h2', 'h3', 'h4'].includes(cleanKey)) {
        config.interface.amneziaOptions[cleanKey] = value;
      } else {
        config.interface[cleanKey] = value;
      }
    } else if (currentSection === 'peer' && peerIndex >= 0) {
      const peer = config.peers[peerIndex];
      if (['jc', 'jmin', 'jmax', 's1', 's2', 'h1', 'h2', 'h3', 'h4'].includes(cleanKey)) {
        peer.amneziaOptions[cleanKey] = value;
      } else if (cleanKey === 'presharedkey') {
        peer.presharedKey = value;
      } else {
        peer[cleanKey] = value;
      }
    }
  }

  // Если имя не было найдено через комментарий после [Peer], пробуем извлечь из комментариев
  if (config.peers.length > 0 && !config.peers[0].name) {
    // Ищем любое вхождение # NL-FREE#43 в тексте
    const nameMatch = text.match(/#\s*(NL-FREE#?\d+)/);
    if (nameMatch) {
      config.peers[0].name = nameMatch[1];
    }
  }

  return config;
}

function convertToClashProxy(wgConfig, fileName) {
  const interfaceData = wgConfig.interface;
  const peerData = wgConfig.peers[0];
  const dnsList = interfaceData.dns ? interfaceData.dns.split(',').map(d => d.trim()) : [];
  const defaultAmnezia = generateAmneziaDefaults();
  let proxyName = peerData.name || fileName.replace('.conf', '');
  let originalName = proxyName;
  
  if (!proxyName) {
    proxyName = `Random_${Math.random().toString(36).substr(2, 5)}`;
  } else {
    proxyName = proxyName.replace(/FREE#?/g, '');
    proxyName = proxyName.replace(/-$/, '');
    
    const flagMatch = proxyName.match(/^([A-Z]{2})[-_]/);
    if (flagMatch && COUNTRY_FLAGS[flagMatch[1]]) {
      proxyName = proxyName.replace(flagMatch[1], COUNTRY_FLAGS[flagMatch[1]]);
    }
  }

  const addresses = interfaceData.address.split(',').map(addr => addr.trim());
  let ipv4 = '';
  let ipv6 = '';
  
  addresses.forEach(addr => {
    // Проверяем, содержит ли адрес двоеточие (признак IPv6)
    if (addr.includes(':')) {
      ipv6 = addr;
    } else {
      ipv4 = addr;
    }
  });

  const amneziaOptions = {};
  for (const key of ['jc', 'jmin', 'jmax', 's1', 's2', 'h1', 'h2', 'h3', 'h4']) {
    const interfaceValue = interfaceData.amneziaOptions[key];
    const peerValue = peerData.amneziaOptions[key];
    amneziaOptions[key] = interfaceValue || peerValue || defaultAmnezia[key];
  }

  return {
    name: proxyName,
    originalName: originalName,
    type: "wireguard",
    server: peerData.endpoint.split(':')[0],
    port: parseInt(peerData.endpoint.split(':')[1]),
    ip: interfaceData.address,
	ipv4: ipv4,
	ipv6: ipv6,
    private_key: interfaceData.privatekey,
    public_key: peerData.publickey,
    preshared_key: peerData.presharedKey, 
    allowed_ips: peerData.allowedips.split(',').map(ip => `'${ip.trim()}'`),
    udp: true,
    mtu: 1420,
    remote_dns_resolve: true,
    dns: dnsList,
    'amnezia-wg-option': amneziaOptions,
    isDefaultAmnezia: !(interfaceData.amneziaOptions.jc || peerData.amneziaOptions.jc)
  };
}

function generateAmneziaOptionsYAML(options) {
      const nojunkEnabled = document.getElementById('nojunk').checked;
	  const awg15Enabled = document.getElementById('awg15').checked;  
	  let yaml = '  amnezia-wg-option:\n';
	  if (nojunkEnabled) {} else {
      for (const [key, value] of Object.entries(options)) {
        yaml += `    ${key}: ${value}\n`;
      }}
	  if (awg15Enabled) {
		const i1 = document.getElementById('i1').value.trim() || '<b 0xce000000010897a297ecc34cd6dd000044d0ec2e2e1ea2991f467ace4222129b5a098823784694b4897b9986ae0b7280135fa85e196d9ad980b150122129ce2a9379531b0fd3e871ca5fdb883c369832f730e272d7b8b74f393f9f0fa43f11e510ecb2219a52984410c204cf875585340c62238e14ad04dff382f2c200e0ee22fe743b9c6b8b043121c5710ec289f471c91ee414fca8b8be8419ae8ce7ffc53837f6ade262891895f3f4cecd31bc93ac5599e18e4f01b472362b8056c3172b513051f8322d1062997ef4a383b01706598d08d48c221d30e74c7ce000cdad36b706b1bf9b0607c32ec4b3203a4ee21ab64df336212b9758280803fcab14933b0e7ee1e04a7becce3e2633f4852585c567894a5f9efe9706a151b615856647e8b7dba69ab357b3982f554549bef9256111b2d67afde0b496f16962d4957ff654232aa9e845b61463908309cfd9de0a6abf5f425f577d7e5f6440652aa8da5f73588e82e9470f3b21b27b28c649506ae1a7f5f15b876f56abc4615f49911549b9bb39dd804fde182bd2dcec0c33bad9b138ca07d4a4a1650a2c2686acea05727e2a78962a840ae428f55627516e73c83dd8893b02358e81b524b4d99fda6df52b3a8d7a5291326e7ac9d773c5b43b8444554ef5aea104a738ed650aa979674bbed38da58ac29d87c29d387d80b526065baeb073ce65f075ccb56e47533aef357dceaa8293a523c5f6f790be90e4731123d3c6152a70576e90b4ab5bc5ead01576c68ab633ff7d36dcde2a0b2c68897e1acfc4d6483aaaeb635dd63c96b2b6a7a2bfe042f6aed82e5363aa850aace12ee3b1a93f30d8ab9537df483152a5527faca21efc9981b304f11fc95336f5b9637b174c5a0659e2b22e159a9fed4b8e93047371175b1d6d9cc8ab745f3b2281537d1c75fb9451871864efa5d184c38c185fd203de206751b92620f7c369e031d2041e152040920ac2c5ab5340bfc9d0561176abf10a147287ea90758575ac6a9f5ac9f390d0d5b23ee12af583383d994e22c0cf42383834bcd3ada1b3825a0664d8f3fb678261d57601ddf94a8a68a7c273a18c08aa99c7ad8c6c42eab67718843597ec9930457359dfdfbce024afc2dcf9348579a57d8d3490b2fa99f278f1c37d87dad9b221acd575192ffae1784f8e60ec7cee4068b6b988f0433d96d6a1b1865f4e155e9fe020279f434f3bf1bd117b717b92f6cd1cc9bea7d45978bcc3f24bda631a36910110a6ec06da35f8966c9279d130347594f13e9e07514fa370754d1424c0a1545c5070ef9fb2acd14233e8a50bfc5978b5bdf8bc1714731f798d21e2004117c61f2989dd44f0cf027b27d4019e81ed4b5c31db347c4a3a4d85048d7093cf16753d7b0d15e078f5c7a5205dc2f87e330a1f716738dce1c6180e9d02869b5546f1c4d2748f8c90d9693cba4e0079297d22fd61402dea32ff0eb69ebd65a5d0b687d87e3a8b2c42b648aa723c7c7daf37abcc4bb85caea2ee8f55bec20e913b3324ab8f5c3304f820d42ad1b9f2ffc1a3af9927136b4419e1e579ab4c2ae3c776d293d397d575df181e6cae0a4ada5d67ecea171cca3288d57c7bbdaee3befe745fb7d634f70386d873b90c4d6c6596bb65af68f9e5121e67ebf0d89d3c909ceedfb32ce9575a7758ff080724e1ab5d5f43074ecb53a479af21ed03d7b6899c36631c0166f9d47e5e1d4528a5d3d3f744029c4b1c190cbfbad06f5f83f7ad0429fa9a2719c56ffe3783460e166de2d8>';
      const i2 = document.getElementById('i2').value.trim();
      const i3 = document.getElementById('i3').value.trim();
      const i4 = document.getElementById('i4').value.trim();
      const i5 = document.getElementById('i5').value.trim();  
		  
		 yaml += `    i1: ${i1}\n`;
      if (i2) yaml += `    i2: ${i2}\n`;
      if (i3) yaml += `    i3: ${i3}\n`;
      if (i4) yaml += `    i4: ${i4}\n`;
      if (i5) yaml += `    i5: ${i5}\n`;
	  }
      return yaml;
    }

function generateProxyGroups(proxies) {
  const groups = [];
  const protonProxies = [];
  const otherProxies = [];

  proxies.forEach(proxy => {
    const isProton = /(^|[_-])([A-Z]{2})([-_]FREE)?([#_-]|$)/i.test(proxy.originalName || proxy.name);
    
    if (isProton) {
      protonProxies.push(proxy.name);
    } else {
      otherProxies.push(proxy.name);
    }
  });

  if (protonProxies.length > 0) {
    groups.push(`
- name: Proton
  type: select
  icon: https://res.cloudinary.com/dbulfrlrz/image/upload/v1703162849/static/logos/icons/vpn_f9embt.svg
  proxies:
    - ${protonProxies.join('\n    - ')}
  url: 'http://speed.cloudflare.com/'
  unified-delay: true
  interval: 300`);
  }

  if (otherProxies.length > 0) {
    groups.push(`
- name: Other
  type: select
  icon: https://raw.githubusercontent.com/zaeboba/page/refs/heads/main/archive/amnezia.svg
  proxies:
    - ${otherProxies.join('\n    - ')}
  url: 'http://speed.cloudflare.com/'
  unified-delay: true
  interval: 300`);
  }

  return groups.join('\n');
}

function convert() {
  const files = document.getElementById('wgFiles').files;
  if (!files.length) return alert('Выберите файлы .conf');

  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  enableToggles();
  
  proxyList = [];
  document.getElementById('fileList').innerHTML = `Обрабатываются файлы: ${Array.from(files).map(f => f.name).join(', ')}`;
  let filesProcessed = 0;
  
  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = function() {
      try {
        const wgConfig = parseWGConfig(reader.result);
        const proxy = convertToClashProxy(wgConfig, file.name);
        proxyList.push(proxy);
        filesProcessed++;
        if (filesProcessed === files.length) {
          switch(selectedOption) {
            case 'clash':
              generateClashYaml();
              break;
            case 'awg':
              generateAWGYaml();
              break;
            case 'karing':
              generateAWGYaml();
              break;
            default:
              generateClashYaml();
          }
        }
      } catch (e) {
        alert(`Ошибка в файле ${file.name}: ${e.message}`);
        filesProcessed++; 
        if (filesProcessed === files.length) {
          generateClashYaml();
        }
      }
    };
    reader.onerror = function() {
      alert(`Ошибка чтения файла ${file.name}`);
      filesProcessed++;
      if (filesProcessed === files.length) {
        generateClashYaml();
      }
    };
    reader.readAsText(file);
  });
}

function generateClashYaml() {
  if (proxyList.length === 0) {
    alert('Не удалось обработать ни один файл');
    return;
  }




  const yamlProxies = proxyList.map(proxy => {
    let yaml = `- name: ${proxy.name}\n`;
    yaml += `  type: ${proxy.type}\n`;
    yaml += `  server: ${proxy.server}\n`;
    yaml += `  port: ${proxy.port}\n`;
    yaml += `  ip: ${proxy.ipv4}\n`;
	if (proxy.ipv6) {
    yaml += `  ipv6: ${proxy.ipv6}\n`;
    }
    yaml += `  private-key: ${proxy.private_key}\n`;
    yaml += `  public-key: ${proxy.public_key}\n`;
    yaml += `  allowed-ips: [${proxy.allowed_ips.join(', ')}]\n`;
	if (proxy.preshared_key) {
    yaml += `  pre-shared-key: ${proxy.preshared_key}\n`;}
    yaml += `  udp: ${proxy.udp}\n`;
    yaml += `  mtu: ${proxy.mtu}\n`;
    yaml += `  remote-dns-resolve: ${proxy.remote_dns_resolve}\n`;
    yaml += `  dns: [${proxy.dns.join(', ')}]\n`;
    yaml += generateAmneziaOptionsYAML(proxy['amnezia-wg-option'], proxy.isDefaultAmnezia);
    return yaml;
  }).join('\n');

  const proxyGroups = generateProxyGroups(proxyList);
  const fullYaml = `proxies:\n${yamlProxies}\nproxy-groups:${proxyGroups}`;
  
  document.getElementById('yamlOutput').value = fullYaml;
  document.getElementById('downloadBtn').classList.remove('hidden');
  document.getElementById('copyBtn').classList.remove('hidden');
  document.getElementById('btn-cont').classList.remove('hidden');
  document.getElementById('downloadBtn').onclick = () => downloadYAML(fullYaml, 'clash-config.yaml');
  document.getElementById('copyBtn').onclick = () => {
    navigator.clipboard.writeText(fullYaml)
      .then(() => alert('Конфиг скопирован в буфер обмена!'))
      .catch(err => alert('Не удалось скопировать: ', err));
  };
}

function generateAWGYaml() {
  if (proxyList.length === 0) {
    alert('Не удалось обработать ни один файл');
    return;
  }

  const awgConfigs = proxyList.map(proxy => generateSingleAWGConfig(proxy));
  const finalOutput = awgConfigs.join('\n\n');

  document.getElementById('yamlOutput').value = finalOutput;
  document.getElementById('downloadBtn').classList.remove('hidden');
  document.getElementById('downloadBtn').onclick = downloadAWGConfigs;
  document.getElementById('copyBtn').classList.remove('hidden');
  document.getElementById('btn-cont').classList.remove('hidden');
  document.getElementById('copyBtn').onclick = () => {
    navigator.clipboard.writeText(fullYaml)
      .then(() => alert('Конфиг скопирован в буфер обмена!'))
      .catch(err => alert('Не удалось скопировать: ', err));
  };
}

function generateKaringYaml() {
  if (proxyList.length === 0) {
    alert('Не удалось обработать ни один файл');
    return;
  }

  const fakeOption = document.querySelector('input[name="fake"]:checked').id;
  let fakePackets, fakePacketsSize, fakePacketsDelay;

  switch(fakeOption) {
    case 'fake1':
      fakePackets = "3";
      fakePacketsSize = "1";
      fakePacketsDelay = "3";
      break;
    case 'fake2':
      fakePackets = "1-10";
      fakePacketsSize = "10-30";
      fakePacketsDelay = "10-30";
      break;
    case 'fake3':
      fakePackets = document.getElementById('fp1').value || "5-10";
      fakePacketsSize = document.getElementById('fps1').value || "40-100";
      fakePacketsDelay = document.getElementById('fpd1').value || "20-250";
      break;
    default:
      fakePackets = "5-10";
      fakePacketsSize = "40-100";
      fakePacketsDelay = "20-250";
  }

  const outbounds = proxyList.map(proxy => ({
    "type": "wireguard",
    "tag": proxy.name,
    "local_address": [`${proxy.ip}/32`],
    "private_key": proxy.private_key,
    "peer_public_key": proxy.public_key,
    "mtu": proxy.mtu,
    "fake_packets": fakePackets,
    "fake_packets_size": fakePacketsSize,
    "fake_packets_delay": fakePacketsDelay,
    "fake_packets_mode": "m4",
    "server": proxy.server,
    "server_port": proxy.port
  }));
  const karingConfig = {
    "outbounds": outbounds
  };

  const fullYaml = JSON.stringify(karingConfig, null, 2);
  document.getElementById('yamlOutput').value = fullYaml;
  document.getElementById('downloadBtn').classList.remove('hidden');
  document.getElementById('copyBtn').classList.remove('hidden');
    document.getElementById('btn-cont').classList.remove('hidden');
  document.getElementById('downloadBtn').onclick = () => downloadYAML(fullYaml, 'karing-config.json');
  document.getElementById('copyBtn').onclick = () => {
    navigator.clipboard.writeText(fullYaml)
      .then(() => alert('Конфиг скопирован в буфер обмена!'))
      .catch(err => alert('Не удалось скопировать: ', err));
  };
}

function downloadYAML(yamlContent, fileName) {
  const blob = new Blob([yamlContent], { type: 'text/yaml; charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName || 'config.yaml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadAWGConfigs() {
  if (proxyList.length === 0) return;
  const downloadFrame = document.createElement('iframe');
  downloadFrame.style.display = 'none';
  document.body.appendChild(downloadFrame);
  proxyList.forEach((proxy, index) => {
    setTimeout(() => {
      const awgConfig = generateSingleAWGConfig(proxy);
      const fileName = getAWGFileName(proxy, index);
      
      const blob = new Blob([awgConfig], { type: 'application/x-config; charset=utf-8' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      downloadFrame.contentDocument.body.appendChild(link);
      link.click();
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 10000);
    }, 1000 * index);
  });
  setTimeout(() => {
    document.body.removeChild(downloadFrame);
  }, 1000 * proxyList.length + 1000);
}

function generateSingleAWGConfig(proxy) {
  const amneziaOptions = proxy['amnezia-wg-option'];
  const awg15Enabled = document.getElementById('awg15').checked;
  const nojunkEnabled = document.getElementById('nojunk').checked;
  
  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  
  let awgConfig = '';
  
  if (proxy.originalName) {
    awgConfig += `# ${proxy.originalName}\n`;
  } else {
    awgConfig += `# Безымянный конфиг\n`;
  }
  
  awgConfig += `[Interface]\n`;
  awgConfig += `PrivateKey = ${proxy.private_key}\n`;
  awgConfig += `Address = ${proxy.ip}\n`;
  
  if (proxy.dns && proxy.dns.length > 0) {
    awgConfig += `DNS = ${proxy.dns.join(', ')}\n`;
  }
  
  awgConfig += `MTU = ${proxy.mtu}\n`;
  if (nojunkEnabled) {} else {
  awgConfig += `S1 = 0\n`;
  awgConfig += `S2 = 0\n`;
  awgConfig += `Jc = ${amneziaOptions.jc}\n`;
  awgConfig += `Jmin = ${amneziaOptions.jmin}\n`;
  awgConfig += `Jmax = ${amneziaOptions.jmax}\n`;
  awgConfig += `H1 = ${amneziaOptions.h1}\n`;
  awgConfig += `H2 = ${amneziaOptions.h2}\n`;
  awgConfig += `H3 = ${amneziaOptions.h3}\n`;
  awgConfig += `H4 = ${amneziaOptions.h4}\n`;
  }
  if (awg15Enabled) {
	  if (selectedOption === 'awg') {
	  const i1 = document.getElementById('i1').value.trim() || '<b 0xce000000010897a297ecc34cd6dd000044d0ec2e2e1ea2991f467ace4222129b5a098823784694b4897b9986ae0b7280135fa85e196d9ad980b150122129ce2a9379531b0fd3e871ca5fdb883c369832f730e272d7b8b74f393f9f0fa43f11e510ecb2219a52984410c204cf875585340c62238e14ad04dff382f2c200e0ee22fe743b9c6b8b043121c5710ec289f471c91ee414fca8b8be8419ae8ce7ffc53837f6ade262891895f3f4cecd31bc93ac5599e18e4f01b472362b8056c3172b513051f8322d1062997ef4a383b01706598d08d48c221d30e74c7ce000cdad36b706b1bf9b0607c32ec4b3203a4ee21ab64df336212b9758280803fcab14933b0e7ee1e04a7becce3e2633f4852585c567894a5f9efe9706a151b615856647e8b7dba69ab357b3982f554549bef9256111b2d67afde0b496f16962d4957ff654232aa9e845b61463908309cfd9de0a6abf5f425f577d7e5f6440652aa8da5f73588e82e9470f3b21b27b28c649506ae1a7f5f15b876f56abc4615f49911549b9bb39dd804fde182bd2dcec0c33bad9b138ca07d4a4a1650a2c2686acea05727e2a78962a840ae428f55627516e73c83dd8893b02358e81b524b4d99fda6df52b3a8d7a5291326e7ac9d773c5b43b8444554ef5aea104a738ed650aa979674bbed38da58ac29d87c29d387d80b526065baeb073ce65f075ccb56e47533aef357dceaa8293a523c5f6f790be90e4731123d3c6152a70576e90b4ab5bc5ead01576c68ab633ff7d36dcde2a0b2c68897e1acfc4d6483aaaeb635dd63c96b2b6a7a2bfe042f6aed82e5363aa850aace12ee3b1a93f30d8ab9537df483152a5527faca21efc9981b304f11fc95336f5b9637b174c5a0659e2b22e159a9fed4b8e93047371175b1d6d9cc8ab745f3b2281537d1c75fb9451871864efa5d184c38c185fd203de206751b92620f7c369e031d2041e152040920ac2c5ab5340bfc9d0561176abf10a147287ea90758575ac6a9f5ac9f390d0d5b23ee12af583383d994e22c0cf42383834bcd3ada1b3825a0664d8f3fb678261d57601ddf94a8a68a7c273a18c08aa99c7ad8c6c42eab67718843597ec9930457359dfdfbce024afc2dcf9348579a57d8d3490b2fa99f278f1c37d87dad9b221acd575192ffae1784f8e60ec7cee4068b6b988f0433d96d6a1b1865f4e155e9fe020279f434f3bf1bd117b717b92f6cd1cc9bea7d45978bcc3f24bda631a36910110a6ec06da35f8966c9279d130347594f13e9e07514fa370754d1424c0a1545c5070ef9fb2acd14233e8a50bfc5978b5bdf8bc1714731f798d21e2004117c61f2989dd44f0cf027b27d4019e81ed4b5c31db347c4a3a4d85048d7093cf16753d7b0d15e078f5c7a5205dc2f87e330a1f716738dce1c6180e9d02869b5546f1c4d2748f8c90d9693cba4e0079297d22fd61402dea32ff0eb69ebd65a5d0b687d87e3a8b2c42b648aa723c7c7daf37abcc4bb85caea2ee8f55bec20e913b3324ab8f5c3304f820d42ad1b9f2ffc1a3af9927136b4419e1e579ab4c2ae3c776d293d397d575df181e6cae0a4ada5d67ecea171cca3288d57c7bbdaee3befe745fb7d634f70386d873b90c4d6c6596bb65af68f9e5121e67ebf0d89d3c909ceedfb32ce9575a7758ff080724e1ab5d5f43074ecb53a479af21ed03d7b6899c36631c0166f9d47e5e1d4528a5d3d3f744029c4b1c190cbfbad06f5f83f7ad0429fa9a2719c56ffe3783460e166de2d8>';
      const i2 = document.getElementById('i2').value.trim();
      const i3 = document.getElementById('i3').value.trim();
      const i4 = document.getElementById('i4').value.trim();
      const i5 = document.getElementById('i5').value.trim();
      
      awgConfig += `I1 = ${i1}\n`;

     if (i2) {
        awgConfig += `I2 = ${i2}\n`;
      }
      if (i3) {
        awgConfig += `I3 = ${i3}\n`;
      }
      if (i4) {
        awgConfig += `I4 = ${i4}\n`;
      }
      if (i5) {
        awgConfig += `I5 = ${i5}\n`;
      }

   } else if (selectedOption === 'karing') {
	  const idValue = document.getElementById('id').value.trim() || 'apteka.ru';
      const ipValue = document.getElementById('ip').value || 'quic';
      const ibValue = document.getElementById('ib').value || 'firefox';
	  awgConfig += `Id = ${idValue}\n`;
      awgConfig += `Ip = ${ipValue}\n`;
      awgConfig += `Ib = ${ibValue}\n`;
    }
  }
  awgConfig += `\n[Peer]\n`;
  awgConfig += `PublicKey = ${proxy.public_key}\n`;
  if (proxy.preshared_key) {
  awgConfig += `PresharedKey = ${proxy.preshared_key}\n`;}
  awgConfig += `AllowedIPs = ${proxy.allowed_ips.join(', ').replace(/'/g, '')}\n`;
  awgConfig += `Endpoint = ${proxy.server}:${proxy.port}\n`;
  
  return awgConfig;
}

function getAWGFileName(proxy, index) {
  if (proxy.originalName) {
    const cleanedName = proxy.originalName.replace(/-FREE/g, '');
    return `${cleanedName.replace(/[^a-z0-9]/gi, '_')}.conf`;
  }
  return `config_${index + 1}.conf`;
}

function fallbackDownload(proxies) {
  proxies.forEach((proxy, index) => {
    const awgConfig = generateSingleAWGConfig(proxy);
    const fileName = getAWGFileName(proxy, index);
    
    const blob = new Blob([awgConfig], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100 * index);
  });
}

function replaceMobileText() {
    if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) return;

    // Заменяем подписи к полям ввода
    const labels = document.querySelectorAll('.musor2 .jc');
    labels[0].previousSibling.textContent = "fake_packets = ";
    labels[1].previousSibling.textContent = "fake_packets_size = ";
    labels[2].previousSibling.textContent = "fake_packets_delay = ";
}

// Вызываем при загрузке и при изменении размера окна
window.addEventListener('DOMContentLoaded', replaceMobileText);
window.addEventListener('resize', replaceMobileText);

function enableToggles() {
  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  const awg15Toggle = document.getElementById('awg15');
  const nojunkToggle = document.getElementById('nojunk');
  awg15Toggle.disabled = false;
  nojunkToggle.disabled = false;
  
  toggleAWG15Containers();
  toggleJunkContainer();
}

['awg15', 'nojunk', 'clash', 'awg', 'karing', 'fake1', 'fake2', 'fake3', 'junk1', 'junk2', 'junk3', 'i1', 'i2', 'i3', 'i4', 'i5', 'id', 'ip', 'ib'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', function() {
		
        if (!this.disabled) {
            // Если изменился awg15 или option, обновляем видимость контейнеров
            if (id === 'awg15' || id === 'clash' || id === 'awg' || id === 'karing') {
                toggleAWG15Containers();
            }
			if (id === 'nojunk') {
                toggleJunkContainer();
            }
            convert();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Получаем все textarea с классом jc
const textareas = document.querySelectorAll('.jc');
    
    textareas.forEach(textarea => {
        textarea.addEventListener('keydown', function(e) {
            // Если нажата клавиша Enter без Shift
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault(); // Отменяем стандартное поведение (перенос строки)
                this.blur();
            }
        });
    });
});

// Открытие modal
document.querySelector('.genbtn')?.addEventListener('click', function() {
    const modal = document.getElementById('Modal');
    if (modal) {
        modal.style.display = 'block';
    }
});

// Закрытие модального окна при клике на крестик
function closeModal() {
    const modal = document.getElementById('Modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Закрытие модального окна при клике вне его области
window.addEventListener('click', function(event) {
    const modal = document.getElementById('Modal');
    if (modal && event.target === modal) {
        modal.style.display = 'none';
    }
});

// Обработчик для кнопки подтверждения в модальном окне
const selectDomainBtn = document.getElementById('selectDomain');
if (selectDomainBtn) {
    selectDomainBtn.addEventListener('click', async function() {
    const domainInput = document.getElementById('domain');
    const domain = domainInput.value.trim();
    
    if (domain) {
        const i1 = await generateI1FromDomain(domain);
		document.getElementById('i1').value = i1;
        closeModal();
        convert();
		
    } else {
        alert('Пожалуйста, введите домен');
    }
});
}

