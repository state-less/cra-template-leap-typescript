
// Register event listener for the 'push' event.
self.addEventListener('push', function(event) {
  // Keep the service worker alive until the notification is created.
  var data = {};
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data = {title: 'Error', body: '[!] Server sent malformed JSON'}
    }
  }
  const {title, body} = data;
  event.waitUntil(
    // Show a notification with title 'ServiceWorker Cookbook' and body 'Alea iacta est'.
    self.registration.showNotification(title, {
      body,
    })
  );
});