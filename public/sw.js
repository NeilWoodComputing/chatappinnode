

self.addEventListener("fetch", function(event){

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