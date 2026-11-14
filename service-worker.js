const CACHE = "winwill-attendance-v9";
const APP_CACHE_PREFIXES = ["winwill-attendance-", "winwill-theme-", "winwill-attendance-theme-"];
const FILES = ["./", "./index.html", "./manifest.json", "./service-worker.js", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE && APP_CACHE_PREFIXES.some(prefix => key.startsWith(prefix))).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate" || url.pathname.endsWith("/index.html")) {
    event.respondWith((async () => {
      try {
        const response = await fetch(request, { cache: "no-store" });
        if (response && response.ok) (await caches.open(CACHE)).put(request, response.clone());
        return response;
      } catch (error) {
        return (await caches.match(request)) || (await caches.match("./index.html"));
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    const response = await fetch(request);
    if (response && response.ok) (await caches.open(CACHE)).put(request, response.clone());
    return response;
  })());
});

\n// Activate a waiting update only after the user taps the in-app Update button.
self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});
