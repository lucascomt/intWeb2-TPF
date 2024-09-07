//Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v1.1';
//Add list of files to cache here.
const FILES_TO_CACHE = [
    'offline.html',
    'index.html',
    'form.html',
    'photos.html',
    'projet.html',
    'fonts/DMSerifText-Regular.tff',
    'fonts/GreyQo-Regular.tff',
    'fonts/Oswald-Regular.tff',
    'js/script.js',
    'js/service-worker.js',
    'medias/photos/2010/1.jpg',
    'medias/photos/2010/2.jpg',
    'medias/photos/2010/3.jpg',
    'medias/photos/2010/4.jpg',
    'medias/photos/2010/5.jpg',
    'medias/photos/2010/6.jpg',
    'medias/photos/2010/7.jpg',
    'medias/photos/2010/8.jpg',
    'medias/photos/2010/9.jpg',
    'medias/photos/2022/1.jpg',
    'medias/photos/2022/2.jpg',
    'medias/photos/2022/3.jpg',
    'medias/photos/2022/4.jpg',
    'medias/photos/2022/5.jpg',
    'medias/photos/2022/6.jpg',
    'medias/photos/2022/7.jpg',
    'medias/photos/2022/8.jpg',
    'medias/photos/2022/9.jpg',
    'medias/photos/2022/10.jpg',
    'medias/photos/2022/11.jpg',
    'medias/photos/2022/12.jpg',
    'medias/photos/2022/13.jpg',
    'medias/photos/2022/14.jpg',
    'medias/photos/2022/15.jpg',
    'medias/photos/2022/16.jpg',
    'medias/photos/2022/17.jpg',
    'medias/photos/2022/18.jpg',
    'medias/photos/2023/1.jpg',
    'medias/photos/2023/2.jpg',
    'medias/photos/2023/3.jpg',
    'medias/photos/2023/4.jpg',
    'medias/photos/2023/5.jpg',
    'medias/photos/2023/6.jpg',
    'medias/photos/2023/7.jpg',
    'medias/photos/2024/1.jpg',
    'medias/photos/2024/2.jpg',
    'medias/photos/2024/3.jpg',
    'medias/photos/2024/4.jpg',
    'medias/photos/2024/5.jpg',
    'medias/photos/2024/6.jpg',
    'medias/photos/2024/7.jpg',
    'medias/photos/2024/8.jpg',
    'medias/photos/2024/9.jpg',
    'medias/photos/2024/10.jpg',
    'medias/photos/2024/11.jpg',
    'medias/photos/ete/1.jpg',
    'medias/photos/hiver/1.jpg',
    'medias/photos/hiver/450569405_451024244516007_7950576319105711829_n.jpg',
    'medias/photos/hiver/450676403_3667981886790210_7102307800968277694_n.jpg',
    'medias/photos/hiver/450781222_835910738117648_1078639921587855241_n.jpg',
    'medias/photos/yolande.webp',
    'medias/photos/terre_familiale.webp',
    'style/css/style.css'
];
self.addEventListener('install', (evt) => {
 console.log('[ServiceWorker] Install');
 // Precache static resources here.
 self.skipWaiting();
});
self.addEventListener('activate', (evt) => {
 console.log('[ServiceWorker] Activate');
 //Remove previous cached data from disk.
 self.clients.claim();
});
self.addEventListener('fetch', (evt) => {
 console.log('[ServiceWorker] Fetch', evt.request.url);
 //Add fetch event handler here.
});