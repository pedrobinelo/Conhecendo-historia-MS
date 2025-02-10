var GHPATH = '/Conhecendo-historia-MS';
var APP_PREFIX = 'MS-history-pwa';
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_01';
var URLS = [
    `${GHPATH}/`,
    `${GHPATH}/index.html`,
    `${GHPATH}/page1.html`,
    `${GHPATH}/quiz.html`,
    `${GHPATH}/assets/css/global.css`,
    `${GHPATH}/assets/css/home.css`,
    `${GHPATH}/assets/css/page1.css`,
    `${GHPATH}/assets/css/quiz.css`,
    `${GHPATH}/assets/fonts/futura.ttf`,
    `${GHPATH}/assets/fonts/swiss.ttf`,
    `${GHPATH}/assets/fonts/trebuc.ttf`,
    `${GHPATH}/assets/js/quiz.js`,
    `${GHPATH}/assets/js/modal.js`,
    `${GHPATH}/assets/img/home_photo.png`,
    `${GHPATH}/assets/img/q2.png`,
    `${GHPATH}/assets/img/q3.png`,
    `${GHPATH}/assets/img/4.png`,
    `${GHPATH}/assets/img/5.png`,
    `${GHPATH}/assets/img/6.jpg`,
    `${GHPATH}/assets/img/7.jpg`,
    `${GHPATH}/assets/img/8.png`,
    `${GHPATH}/assets/img/9.png`,
    `${GHPATH}/assets/img/10.jpg`,
    `${GHPATH}/assets/img/11.jpg`,
    `${GHPATH}/assets/img/12.1.png`,
    `${GHPATH}/assets/img/13.jpg`,
    `${GHPATH}/assets/img/14.jpg`,
    `${GHPATH}/assets/img/15.png`,
    `${GHPATH}/assets/img/logo_facom.svg`,
    `${GHPATH}/assets/img/logo-ufms.svg`,
    `${GHPATH}/assets/img/apple-icon-180.png`,
    `${GHPATH}/assets/img/museu_icon-192.png`,
    `${GHPATH}/assets/img/museu_icon-512.png`,
    `${GHPATH}/assets/img/Logo-museu.png`,
    `${GHPATH}/manifest.json`,
]
