// Minimaler Service Worker. Er speichert nichts offline (die Planung soll ja
// immer frisch von Firebase kommen), sondern sorgt nur dafür, dass Browser
// die Seite als "richtige" installierbare App erkennen.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
