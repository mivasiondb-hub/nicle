// Generated into dist/sw.js at build time by integrations/service-worker.mjs.
const CACHE = 'nicle-__VERSION__';
const PRECACHE = __PRECACHE_MANIFEST__;
const CONCURRENCY = 8;
// Content-hashed paths never change, so an earlier cache can be reused across deploys.
const IMMUTABLE = /^\/(_assets|fonts)\//;

async function store(cache, url) {
  if (IMMUTABLE.test(url)) {
    const previous = await caches.match(url);
    if (previous) return cache.put(url, previous);
  }
  const response = await fetch(url, { cache: 'reload' });
  if (!response.ok) throw new Error(`Precache failed for ${url}: ${response.status}`);
  // A response that followed a redirect cannot be served for a navigation.
  const servable = response.redirected
    ? new Response(await response.blob(), {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      })
    : response;
  return cache.put(url, servable);
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      const queue = [...PRECACHE];
      const worker = async () => {
        while (queue.length) await store(cache, queue.shift());
      };
      await Promise.all(Array.from({ length: CONCURRENCY }, worker));
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(names.filter((name) => name !== CACHE).map((name) => caches.delete(name)));
      await self.clients.claim();
    })()
  );
});

function cacheKey(url) {
  const { pathname } = url;
  return pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

async function respond(request, url) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(cacheKey(url));
  if (cached) return cached;
  try {
    return await fetch(request);
  } catch (error) {
    const home = request.mode === 'navigate' ? await cache.match('/') : undefined;
    if (home) return home;
    throw error;
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || url.pathname === '/sw.js') return;
  event.respondWith(respond(request, url));
});
