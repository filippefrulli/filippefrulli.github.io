'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "1ee9fbae4f3fa7a018dcfdb9c2a77db2",
"/": "1ee9fbae4f3fa7a018dcfdb9c2a77db2",
"CNAME": "cf17e08d384fefb1ed88b0d1a7b301e6",
"main.dart.js": "7cfca133aca1c34cf940066477398397",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/ORIG_HEAD": "db7a4c2a4c006d22aaf1fb4cae017c9e",
".git/config": "513cdb3c3e4d9e2e37f0bd4ce86bc4d4",
".git/objects/61/4b3e82879a7b608c91dd8359d695b19b869ff3": "c2224279b8a912e7883d18d5c79b10a8",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/3e/69cf636c91d78862727d20aa4c0ef7a2a8660b": "36bbb8d4f9c11eede1f09594a888b334",
".git/objects/3e/cd0679167288b25db2205c723c4b1a14325fe7": "4c3cce5bf1c9657fa7636e268b09793b",
".git/objects/6a/6027efb2dffe1d62b5bcc19c58b769a367a30e": "7e217f991afbe9816c17dd590788bd38",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3d/8c47f8a2e687a9999c9372eea1d67702f77186": "3a6b1db2abe7049fdd5ff2b1c3519867",
".git/objects/58/b15cd4a49c421a6a9668b583de2a80933af424": "328c71abc130e04aeedc4c330090c239",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/5a/c3788057397e26f3204944bb84bf6c60c174e0": "c8f2e4d734252e2c63c7e6818d0e9254",
".git/objects/33/582753774ff035c96dd11607487e9b9ea28aaf": "1456c8c62362a4e839cdef3e03638114",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/02/e8b33d4e7540ca14fb43ffdbe722e581d36332": "3a6887542b4dba826a79fba5bed71d65",
".git/objects/b2/2782efc34df5fcf8b2ea122f7c02fecfa8cd1c": "b79017c77e0668bb35e9a5de45d565c5",
".git/objects/b2/e0c6622f00cc0b11a707d4bfc8f0a21eaa07c6": "31f1de77637bcc6825a5dffbf25cc445",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a5/352a8ac45a4237039c47582f04d695ec34d4ac": "a760dc8b4511f4436f7db9f100420062",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/b4a00cdf3452961c39ee4ed02afa65626a6b49": "513648cbf2bf595f32bb554a8e61b728",
".git/objects/ab/3694798733aa1f16898a515268fb83c8916873": "5bed1012472a1b8f12c8b49e8c56d60b",
".git/objects/ab/1774307f8e1716c5a61cfbd504715d86cf8336": "8bf986610432068d4ce9c9ef814f2cd7",
".git/objects/ab/5f4f4e40256fe573d49e20e6485a5b30c74978": "7074ff01fa7dbb513aad14a33611c48a",
".git/objects/e5/fb4cdb02bc76cb6a2e5265f326c1472462683f": "57efb7ed398b3b8f39c4f1c753eddd97",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e2/1544cd8c501197bd01bad245557a3e057c8853": "6b0e1ac4c8f8e24a5e94ff76f6f2e403",
".git/objects/f4/5c75bc24df44843fb262e6eb6b2adcff6b5bc3": "40af6d2995fac4e9142869f25acf7d3b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/e404550369262d58ce44c99d2cf7ff8a9dfc03": "3d712fa60d6848d80509f4d5724dff5f",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/e3/35cf1ddf79552d6530b8e3b243719e3c34fb7b": "8e08611580d90d407df21f628668e88b",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/c8/b776a1dd4ad2cbe063441944ebfa48d9982f4c": "30bae352f73d392e1fa69ba8e654ee81",
".git/objects/ec/fa78ad8276f3c2977576cf72e67206cfa02def": "35bef10e24f016b22009bde8ceadceb6",
".git/objects/ec/a4ac7a5288ce4e9f5082d925b2a89395af226b": "1f63081f6b85cdd760ca45f1a26f850e",
".git/objects/18/e2ff634e012c2d3ac0e380b2a7a16fc8b1d1a3": "b73dec0762cd2729f8eb4cb4dc31ba8b",
".git/objects/4b/99f8ebe17379312a0aedb5e45d40d1148da430": "f06e4a5e0d546e32cfde2b1e93650608",
".git/objects/7c/bb72aca581607da1f8d56e700df362181064fd": "45e1a104358cc5bc43301c72587641b9",
".git/objects/45/80c2d30b49e6ab041d8e017d6648dd9d26da53": "395a5fbc9492aba59623042eae1ef02e",
".git/objects/80/3b2c2e84f72e443592cce0f11c167d4403bacf": "2e84eaf75d5f54d11857a6127ca66961",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/10/9884dc81e636e147e91d586e1b56c200c9ccc3": "ad78d0f8853e10d8d173466f33e06d40",
".git/objects/10/c9fc7df74dafc1c4a89739a28caf6cfe51e2a4": "64a8d04ab6290127e164a62fecca874c",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/43/dc261224ecfa6798b527c20ef64f5bd7c0344f": "3f83e4b5515caf1dfab6cb13c08bbc2f",
".git/objects/43/1b58adcee1240996c614cb33e987c2a15b4ca5": "a09a716702714224d54d8a3ceede0650",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/6c627554c402b647fceccc554cfd2a0ee2c018": "b12b439c2b954d72214b09bc6c7e07c3",
".git/objects/5c/5c64eca03ddb311b65c623a4e83d3763853778": "f353b884e9f624a95f877f938e483e1f",
".git/objects/5d/d31d412eb633e80e15d0c1b6d98f7a96468726": "b171083ef74929dbff12fc02b368afd1",
".git/objects/5d/704c150bc96a112f0f0c1fde160ff389b2b0f4": "d0659c30e1c7e3de539a38e58652cc01",
".git/objects/53/75b3ccd95ad8b701ad04affd86c206b5a83ad2": "370b56f4bc4a79724593030ba5e52fec",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/71351c66262c44797b934ead8bb08bb140a371": "645726ff4ae2685d329b3aed26bdd847",
".git/objects/37/cd72560e19959b810c9b2ea35fb7beb481d178": "0aa5f681c9bbed8c16a88e0698ed1d16",
".git/objects/37/a1f720e40c563aad3b8b9ff75b32321277792a": "5d1235dc68f43c6a1a390285151322e0",
".git/objects/99/b485126e589ce4a62c5ef78d99440a9f62947b": "11d7d438f5eff5964cc49bef0fa05fe4",
".git/objects/52/ee99713429a36415cde5cc981ddebee06d6b22": "17bfd6180db261da0ade813d229c3df5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/692313fb0c6539685a2dad09c3f325bc2bf391": "2dc369f507e998550eaf51a78a0eb88d",
".git/objects/a7/6ca153543f39b43b47b89d7056c926b5ac23a0": "1610718bfa23e55e3499eceb0ffeb29f",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/d916603c6207577461c9735186a71fcab74932": "f5d8969ed2568fe42c80425a3e3aabdb",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/e96cf16e089424be197e769d066b515773f6e1": "494191a4f7ef3d1b56bf079f718ee476",
".git/objects/ff/d6072f70d1749b09198b08607e7bed3b519b64": "22bf08dcd8f018447fd43932e95e1390",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/f6/1d741bd27b35101b978ebdf12005d095a849fc": "a91bae6dbf81389b45a65927a251f7b4",
".git/objects/f8/d804556463a702c8ffd6fc9349a0e33112df52": "b97a79839774a10ff98c4c645ccb64cb",
".git/objects/e0/495d1a6c866ac735abb3f10f498bc7cda425c5": "d040bb042dab3c1cb132499d2dfa8f81",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/41/b9cc9df051250ee665d3b0017a266806be913e": "0d5250afdce4e43d2c99afe22fa187a2",
".git/objects/77/c486c2f4b3de49a9371e486c2759ba2947e3c2": "342a6f66de67e888bbde2dd39f211bee",
".git/objects/77/72db51ea37cf4eee36af0363934b544f9cff18": "4568c06833fdba73c418ff66285e989f",
".git/objects/1d/d6fbdd3e6d1009ba4083151dd4d1d278cae410": "6ba238b1f205b8b3987a848c0888cfba",
".git/objects/82/d877f6df5af4cf1cac574bd48194d983639df9": "29e6c93dfd9cc1111beb0b51c8f0fba6",
".git/objects/13/1f3acaa252a863c3b694d0f522ea750aebd81c": "eed35917566bae72d1c532b2464680d3",
".git/objects/7a/f6b49e6e4c8435b22547872bb6337e9f44c3d3": "2aa669e696a5021bdab09ec272b3e19f",
".git/objects/7a/8900352b125b9c90d521f3d4cc2e5d8537629b": "f3f717d7eed53b89466d8ca632280e52",
".git/objects/8e/e9915de0aef1c23b7d8805513ae67aa7cb8e34": "2307d679f7e996290cd8cad7b489b7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1717de0a14a97361a750a28aff57a027",
".git/logs/refs/heads/main": "8d7d25eb22b8d7cdbe96fcb0b7646028",
".git/logs/refs/remotes/origin/main": "e10248082a89d54f1ed11cc1e1e55876",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3087b9e2dc797fc48da7c391fe62a6b8",
".git/refs/remotes/origin/main": "3087b9e2dc797fc48da7c391fe62a6b8",
".git/index": "521172b23c0a713c50cf5c3e58aef4e3",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "966b4b4ce1c77ca592c9023b3a9c9adc",
".git/FETCH_HEAD": "3ad255e41994a98e455c1ee7a4278f73",
"assets/AssetManifest.json": "e9a536a9e244b1153d688e008b6a16dc",
"assets/NOTICES": "ffecf9bd9487387baa0cd0a1e64ef8b2",
"assets/FontManifest.json": "a74c8549905503c5a8dff227738559a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "422f6677f5300b0e7db2f1c0b00f74d8",
"assets/fonts/JuliusSansOne-Regular.ttf": "c329e5ef44c14805147f954cd66d05c0",
"assets/fonts/MaterialIcons-Regular.otf": "7703a7b2d2208dd8835fda586d1070ce",
"assets/assets/bmw_group_logo.jpeg": "c2ade8217b4f72caf8701665289c4e87",
"assets/assets/pimco.jpeg": "80c2436842b2955ebd5389fd94f03fce",
"assets/assets/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/publication.png": "319df0d1d7e9e8668d32d83c7a8486dd",
"assets/assets/dentific.png": "e0f7f1c71d3e30b1a069c8630b7299f0",
"assets/assets/linkedin.png": "d374b1a974d1afcf8633c39108cbb827",
"assets/assets/watch-next.png": "76d18cc49dfb577dfb32eff85453bc00",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
