// Service Worker for LeafTok - PWA and Performance Optimization
const CACHE_NAME = 'leaftok-v1.0.0';
const STATIC_CACHE_NAME = 'leaftok-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'leaftok-dynamic-v1.0.0';

// Assets to cache for offline functionality
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/assets/logo.png',
    '/assets/logo-light.png',
    '/assets/screenshot.png',
    '/assets/banner.png',
    '/assets/favicon.ico',
    '/assets/apple-touch-icon.png',
    '/assets/android-chrome-192x192.png',
    '/assets/android-chrome-512x512.png',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
    'https://fonts.gstatic.com'
];

// URLs that should always be fetched from network
const NETWORK_FIRST_URLS = [
    '/api/',
    '/blog/',
    'https://apps.apple.com/',
    'https://play.google.com/'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('[SW] Installing service worker...');

    event.waitUntil(
        Promise.all([
            caches.open(STATIC_CACHE_NAME).then((cache) => {
                console.log('[SW] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            }),
            self.skipWaiting()
        ])
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating service worker...');

    event.waitUntil(
        Promise.all([
            // Clean up old caches
            caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== STATIC_CACHE_NAME &&
                            cacheName !== DYNAMIC_CACHE_NAME &&
                            cacheName !== CACHE_NAME) {
                            console.log('[SW] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            self.clients.claim()
        ])
    );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-HTTP requests
    if (!request.url.startsWith('http')) {
        return;
    }

    // Handle different types of requests with appropriate strategies
    if (request.method === 'GET') {
        event.respondWith(handleGetRequest(request, url));
    }
});

// Handle GET requests with different caching strategies
async function handleGetRequest(request, url) {
    // Network first for dynamic content
    if (shouldUseNetworkFirst(url.pathname)) {
        return networkFirst(request);
    }

    // Cache first for static assets
    if (shouldUseCacheFirst(url.pathname)) {
        return cacheFirst(request);
    }

    // Stale while revalidate for HTML pages
    if (isHTMLRequest(request)) {
        return staleWhileRevalidate(request);
    }

    // Default to network first
    return networkFirst(request);
}

// Network first strategy - try network, fallback to cache
async function networkFirst(request) {
    try {
        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
            // Cache successful responses
            const cache = await caches.open(DYNAMIC_CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        console.log('[SW] Network failed, trying cache:', request.url);
        const cachedResponse = await caches.match(request);

        if (cachedResponse) {
            return cachedResponse;
        }

        // Return offline page for HTML requests
        if (isHTMLRequest(request)) {
            return caches.match('/index.html');
        }

        throw error;
    }
}

// Cache first strategy - try cache, fallback to network
async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
        return cachedResponse;
    }

    try {
        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
            const cache = await caches.open(STATIC_CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        console.log('[SW] Failed to fetch:', request.url);
        throw error;
    }
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request) {
    const cachedResponse = await caches.match(request);

    const networkResponsePromise = fetch(request).then((networkResponse) => {
        if (networkResponse.ok) {
            const cache = caches.open(DYNAMIC_CACHE_NAME);
            cache.then(c => c.put(request, networkResponse.clone()));
        }
        return networkResponse;
    }).catch(() => {
        console.log('[SW] Network failed for:', request.url);
    });

    return cachedResponse || networkResponsePromise;
}

// Helper functions
function shouldUseNetworkFirst(pathname) {
    return NETWORK_FIRST_URLS.some(pattern => pathname.startsWith(pattern));
}

function shouldUseCacheFirst(pathname) {
    return pathname.startsWith('/assets/') ||
           pathname.endsWith('.png') ||
           pathname.endsWith('.jpg') ||
           pathname.endsWith('.jpeg') ||
           pathname.endsWith('.gif') ||
           pathname.endsWith('.svg') ||
           pathname.endsWith('.ico') ||
           pathname.endsWith('.css') ||
           pathname.endsWith('.js');
}

function isHTMLRequest(request) {
    return request.headers.get('accept')?.includes('text/html');
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
    console.log('[SW] Background sync:', event.tag);

    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

async function doBackgroundSync() {
    // Handle any offline actions that need to be synced
    console.log('[SW] Performing background sync...');
    // Implementation would go here for offline form submissions, etc.
}

// Push notifications
self.addEventListener('push', (event) => {
    console.log('[SW] Push message received');

    const options = {
        body: event.data ? event.data.text() : 'New content available!',
        icon: '/assets/android-chrome-192x192.png',
        badge: '/assets/favicon-32x32.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '1'
        },
        actions: [
            {
                action: 'explore',
                title: 'Open LeafTok',
                icon: '/assets/favicon-32x32.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/assets/favicon-32x32.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('LeafTok', options)
    );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
    console.log('[SW] Notification click received.');

    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Performance monitoring
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({ version: CACHE_NAME });
    }
});

// Error handling
self.addEventListener('error', (event) => {
    console.error('[SW] Service worker error:', event.error);
});

// Unhandled promise rejection
self.addEventListener('unhandledrejection', (event) => {
    console.error('[SW] Unhandled promise rejection:', event.reason);
});

// Cache management - periodic cleanup
setInterval(() => {
    cleanupOldCaches();
}, 24 * 60 * 60 * 1000); // Daily cleanup

async function cleanupOldCaches() {
    try {
        const cacheNames = await caches.keys();
        const oldCaches = cacheNames.filter(name =>
            name.startsWith('leaftok-') &&
            name !== STATIC_CACHE_NAME &&
            name !== DYNAMIC_CACHE_NAME
        );

        await Promise.all(
            oldCaches.map(cacheName => caches.delete(cacheName))
        );

        console.log('[SW] Cleaned up old caches:', oldCaches);
    } catch (error) {
        console.error('[SW] Cache cleanup failed:', error);
    }
}

// Analytics and performance tracking
function trackEvent(eventName, data = {}) {
    // Send analytics data to your tracking service
    console.log('[SW] Tracking event:', eventName, data);
}

// Track service worker performance
trackEvent('sw_install', { version: CACHE_NAME });
