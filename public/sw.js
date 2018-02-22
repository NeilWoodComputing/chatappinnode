

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open("servicecache").then(function(cache) {
      return cache.addAll(
        [
          '/index.ejs'
        ]
      );
    })
  );
});