'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "9f3fca5e5e10e27f97ae1e0a09f3b713",
"/": "9f3fca5e5e10e27f97ae1e0a09f3b713",
"main.dart.js": "0d66a6dcb9c7c85584fa653f3cb6b7c1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c798a3907d9350da6c45508a16bc08e9",
"assets/LICENSE": "90aff5f74b3971e7b3fc87085f52108d",
"assets/images/ios_1.jpeg": "01244aa09e124bc709246cff433c6497",
"assets/images/android_1.png": "11641e2be6d8123ef3000fff40052a07",
"assets/images/android_2.png": "89302c012707a09318e49816b80c57bf",
"assets/images/android_3.png": "02463c4156d5aefa585ddb6e3f738c98",
"assets/images/screen3.png": "aad6e56db0b0971569cfdb94c21dee70",
"assets/images/ios_6.jpeg": "aa8b5630276aece1ed9054c127ddd282",
"assets/images/appstore.png": "0a02e4b5765990397d327e6b2bd26122",
"assets/images/ios_4.jpeg": "5ae8e6db3989a2b6311466c6012460ba",
"assets/images/screen.png": "b4dbd1cbdcf37bd98dae8bab260fcf1f",
"assets/images/screen_two.png": "f297bbc469b4f0d54f10603b6d63ab4b",
"assets/images/ios_5.jpeg": "4e5bb244efea3761f5c49f6a4628c9ce",
"assets/images/playstore.png": "b1362222e5a989962c3bbf396eceaef4",
"assets/images/ios_2.jpeg": "3f50f098721cbf85a9b8106068d90ed1",
"assets/images/ios_3.jpeg": "e7f8003faa4c3f3a30ef192c47f92dd1",
"assets/AssetManifest.json": "c69a5130213af745e515e55e035f71c2",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
