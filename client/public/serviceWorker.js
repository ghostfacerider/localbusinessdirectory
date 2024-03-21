let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntill(
    caches.open(cacheData).then((cache) => {
      Cache.addAll([
        "/static/js/bundle.js",
        "/static/js/jquery.min.js",
        "/static/js/popper.min.js",
        "/static/js/boothstrap.min.js",
        "/index.html",
        "/",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      if (resp) {
        return resp;
      }
    })
  );
});
