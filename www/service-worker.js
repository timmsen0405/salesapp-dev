// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v2';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
    'index.html',
    './', // Alias for index.html
    'pages/404.html',
    'pages/customer-cp.html',
    'pages/shipto-cp.html',
    'pages/quotation-cp.html',
    'assets/icons/128x128.png',
    'assets/icons/144x144.png',
    'assets/icons/192x192.png',
    'assets/icons/256x256.png',
    'assets/icons/512x512.png',
    'assets/icons/apple-touch-icon.png',
    'assets/icons/favicon.png',
    'fonts/MaterialIcons-Regular.woff2',
    'css/app.css',
    'css/icons.css',
    'js/app.js',
    'js/routes.js',
    'framework7/js/framework7.bundle.min.js',
    'framework7/css/framework7.bundle.min.css',
    'fonts/Framework7Icons-Regular.eot',
    'fonts/Framework7Icons-Regular.ttf',
    'fonts/Framework7Icons-Regular.woff2',
    'fonts/MaterialIcons-Regular.eot',
    'fonts/MaterialIcons-Regular.ttf',
    'fonts/MaterialIcons-Regular.woff',
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(PRECACHE)
            .then(cache => cache.addAll(PRECACHE_URLS))
            .then(self.skipWaiting())
    );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
    // Skip cross-origin requests, like those for Google Analytics.
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return caches.open(RUNTIME).then(cache => {
                    return fetch(event.request).then(response => {
                        // Put a copy of the response in the runtime cache.
                        return cache.put(event.request, response.clone()).then(() => {
                            return response;
                        });
                    });
                });
            })
        );
    }
});


// Listen for "notificationclose" event --> can be used for site interaction anaölytics 
self.addEventListener('notificationclose', function (e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;

    console.log('Closed notification: ' + primaryKey);
});

// Listen for "notificationclick" event to trigger further actions
self.addEventListener('notificationclick', function (e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;
    var action = e.action;

    if (action === 'close') {
        notification.close();
    } else {
        clients.openWindow('/');
        notification.close();
    }
});

// Push event listening & handling with possibility of data receipt and usage
self.addEventListener('push', function (e) {
    var body;

    if (e.data) {
        body = e.data.text();
    } else {
        body = 'Push message no payload';
    }

    var options = {
        body: body,
        icon: 'assets/icons/512x512.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            { action: 'explore', title: 'Explore this new world' },
            { action: 'close', title: 'I don\'t want any of this' },
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});
