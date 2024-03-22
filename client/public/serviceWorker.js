let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/static/js/jquery.min.js",
        "/static/js/popper.min.js",
        "/static/js/boothstrap.min.js",
        "/static/js/slick.js",
        "/static/js/jquery.magnific-popup.min.js",
        "/static/js/dropzone.js",
        "/static/js/counterup.js",
        "/static/js/lightbox.js",
        "/static/js/moment.min.js",
        "/static/js/daterangepicker.js",
        "/static/js/jQuery.style.switcher.js",
        "/static/js/custom.js",
        "/assets/css/plugins/animation.css",
        "/assets/css/plugins/bootstrap.min.css",
        "/assets/css/plugins/slick.css",
        "/assets/css/plugins/slick-theme.css",
        "/assets/css/plugins/dropzone.css",
        "/assets/css/plugins/magnificpopup.css",
        "/assets/css/plugins/date-picker.css",
        "/assets/css/plugins/themify.css",
        "/assets/css/plugins/line-icon.css",
        "/assets/css/plugins/iconfont.css",
        "/assets/css/plugins/font-awesome.css",
        "/assets/css/plugins/flaticon.css",
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
