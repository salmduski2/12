// Import Workbox (https://developers.google.com/web/tools/workbox/)
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

/*
  Precache Manifest
  Change revision as soon as file content changed
*/
self.__WB_MANIFEST = [
  {
    url: 'framework7/css/framework7.bundle.min.css'
  },
  {
    url: 'framework7/js/framework7.bundle.min.js'
  },
  {
    url: 'css/app.css'
  },
  {
    url: 'css/icons.css'
  },
  {
    url: 'js/routes.js'
  },
  {
    url: 'js/badge.js',
  },
  {
    url: 'js/app.js'
  },
  {
    url: 'js/link.js',
  },
  // Fonts
  {
    url: 'fonts/Framework7Icons-Regular.woff2'
  },
  {
    url: 'fonts/Framework7Icons-Regular.woff'
  },
  {
    url: 'fonts/Framework7Icons-Regular.eot'
  },
  {
    url: 'fonts/Framework7Icons-Regular.ttf'
  },
  {
    url: 'fonts/MaterialIcons-Regular.woff2'
  },
  {
    url: 'fonts/MaterialIcons-Regular.woff'
  },
  {
    url: 'fonts/MaterialIcons-Regular.ttf'
  },
  {
    url: 'fonts/MaterialIcons-Regular.eot'
  },
  // Icons
  {
    url: 'assets/icons/128x128.png'
  },
  {
    url: 'assets/icons/144x144.png'
  },
  {
    url: 'assets/icons/152x152.png'
  },
  {
    url: 'assets/icons/192x192.png'
  },
  {
    url: 'assets/icons/256x256.png'
  },
  {
    url: 'assets/icons/512x512.png'
  },
  {
    url: 'assets/icons/favicon.png'
  },
  {
    url: 'assets/icons/apple-touch-icon.png'
  },
];

/*
  Enable precaching
  It is better to comment next line during development
*/
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);
