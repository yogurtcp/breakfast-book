// Breakfast Book service worker: offline app shell + cached recipe photos.
const VERSION = "v9";
const SHELL = `bb-shell-${VERSION}`;
const IMAGES = "bb-img-v1";
const SHELL_FILES = [
  "./",
  "index.html",
  "styles.css",
  "app.js",
  "data.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(SHELL).then((c) => c.addAll(SHELL_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("bb-shell-") && k !== SHELL).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Recipe photos from Wikimedia Commons: cache-first.
  if (url.hostname.endsWith("wikimedia.org")) {
    e.respondWith(
      caches.open(IMAGES).then(async (cache) => {
        const hit = await cache.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok || res.type === "opaque") cache.put(req, res.clone()).catch(() => {});
        return res;
      })
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  // App shell: network first (so updates show up right away), cache as the offline fallback.
  e.respondWith(
    caches.open(SHELL).then(async (cache) => {
      try {
        const res = await fetch(req, { cache: "no-cache" });
        if (res.ok) cache.put(req, res.clone());
        return res;
      } catch (_) {
        const hit = await cache.match(req, { ignoreSearch: true });
        if (hit) return hit;
        if (req.mode === "navigate") return cache.match("index.html");
        return Response.error();
      }
    })
  );
});
