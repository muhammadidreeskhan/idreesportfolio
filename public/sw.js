const CACHE_NAME = 'idrees-portfolio-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';
const FONT_CACHE = 'font-v1';
const IMAGE_CACHE = 'image-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

const CACHE_STRATEGIES = {
  static: STATIC_CACHE,
  dynamic: DYNAMIC_CACHE,
  font: FONT_CACHE,
  image: IMAGE_CACHE
};

// Allowed domains for caching
const ALLOWED_DOMAINS = [
  self.location.hostname,
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'images.unsplash.com'
];

// Helper function to check if URL should be cached
const shouldCache = (url) => {
  try {
    const urlObj = new URL(url);
    return (urlObj.protocol === 'http:' || urlObj.protocol === 'https:') && 
           ALLOWED_DOMAINS.some(domain => urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`));
  } catch {
    return false;
  }
};

// Helper function to determine cache strategy
const getCacheStrategy = (request) => {
  const url = new URL(request.url);
  
  if (STATIC_ASSETS.includes(url.pathname)) {
    return 'static';
  }
  if (url.hostname.includes('fonts.')) {
    return 'font';
  }
  if (url.pathname.includes('/images/') || url.hostname.includes('unsplash.com')) {
    return 'image';
  }
  return 'dynamic';
};

// Install service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(STATIC_ASSETS))
  );
});

// Activate service worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (!Object.values(CACHE_STRATEGIES).includes(key)) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Fetch resources
self.addEventListener('fetch', event => {
  // Skip non-GET requests and non-HTTP/HTTPS URLs
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }

  const strategy = getCacheStrategy(event.request);
  const cacheName = CACHE_STRATEGIES[strategy];

  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }

          return fetch(event.request.clone())
            .then(response => {
              if (!response || response.status !== 200 || !shouldCache(event.request.url)) {
                return response;
              }

              cache.put(event.request, response.clone());
              return response;
            })
            .catch(() => {
              if (strategy === 'image') {
                return cache.match('/assets/images/placeholder.svg');
              }
              return new Response('Not found', { status: 404 });
            });
        })
      )
  );
});
