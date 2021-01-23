import "regenerator-runtime";
import Cachehelper from "./utils/cache-helper";

const { assets } = global.serviceWorkerOption;


self.addEventListener("install", event => {
    event.waitUntil(Cachehelper.cachingAppShell([...assets, './']));
});

self.addEventListener("activate", event => {
    event.waitUntil(Cachehelper.deleteOldCache());
});

self.addEventListener("fetch", event => {
    event.respondWith(Cachehelper.revalidateCache(event.request));
});