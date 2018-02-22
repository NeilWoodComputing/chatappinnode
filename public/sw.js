

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(res) {
        return res;
      }));
});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open("servicecache").then(function(cache) {
      return cache.addAll(
        [
			'views/pages/index.ejs',
			'views/pages/db.ejs',
			'views/partials/header.ejs',
			'views/partials/nav.ejs',

			'public/manifest.json',
			'public/fonts/LexieReadale-Regular.ejs'




        ]
      );
    })
  );
});