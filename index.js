if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('https://aramoscoren.github.io/teste/sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}
