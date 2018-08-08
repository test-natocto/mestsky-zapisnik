importScripts('/mestsky-zapisnik/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "mestsky-zapisnik",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/mestsky-zapisnik/_nuxt/5adfef0a391c52ad1cec.css",
    "revision": "df7aaf5089a9872cd505b82dc1ccef44"
  },
  {
    "url": "/mestsky-zapisnik/_nuxt/d5c9401c425bc2a6b20f.js",
    "revision": "b33dfa47d6d64b8a7883de34eab80aa2"
  },
  {
    "url": "/mestsky-zapisnik/_nuxt/dbbf86f6174b02a148ac.js",
    "revision": "32e8a2e0c2f622902167206778e5d3bb"
  },
  {
    "url": "/mestsky-zapisnik/_nuxt/e2bdec920a01098460cf.js",
    "revision": "734d6a929348c24da81bc2f687c3ddf7"
  },
  {
    "url": "/mestsky-zapisnik/_nuxt/f0cfdc3821fc19792273.js",
    "revision": "f14a18ec5dd40b37461a40059f0eb592"
  },
  {
    "url": "/mestsky-zapisnik/_nuxt/fec81252910a7995ab77.js",
    "revision": "c7fc277707d41bcecd7a5889e40a4a99"
  }
])


workboxSW.router.registerRoute(new RegExp('/mestsky-zapisnik/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/mestsky-zapisnik/.*'), workboxSW.strategies.networkFirst({}), 'GET')

