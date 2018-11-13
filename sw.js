importScripts('https://aramoscoren.github.io/teste/serviceworker-cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('coren-sp').then(function(cache) {
     return cache.addAll([
       'https://aramoscoren.github.io/teste/',
       'https://aramoscoren.github.io/teste/index.html'
     ]);
   })
 );
});
