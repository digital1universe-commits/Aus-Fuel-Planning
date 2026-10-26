// Fuel & Holding — offline cache. Serves the app from cache first, refreshes in the background when online.
const CACHE='fuel-holding-v22.20';
const SHELL=['./','./index.html','./worksheet.html','./manifest.webmanifest','./icon-180.png','./icon-512.png'];
// shell files are fetched past the browser HTTP cache (GitHub Pages allows a 10-minute max-age) so an update really is the new version
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL.map(u=>new Request(u,{cache:'reload'})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  // the printable sheet page is network-first (always current when online), cache as the offline fallback
  if(/worksheet\.html(\?|#|$)/.test(e.request.url)){
    e.respondWith(fetch(e.request,{cache:'no-cache'}).then(r=>{if(r&&r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return r;}).catch(()=>caches.match(e.request,{ignoreSearch:true})));
    return;
  }
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(cached=>{
    const net=fetch(e.request,{cache:'no-cache'}).then(r=>{if(r&&r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return r;}).catch(()=>cached);
    return cached||net;
  }));
});
