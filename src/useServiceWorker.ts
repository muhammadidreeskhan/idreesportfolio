
// ...existing code...

navigator.serviceWorker.register('/service-worker.js')
  .then(registration => {
    console.log('ServiceWorker registration successful');
  })
  .catch(error => {
    console.error('ServiceWorker registration failed:', error);
  });

// Ensure the icon URL is correct and accessible
const manifestLink = document.querySelector('link[rel="manifest"]');
if (manifestLink) {
  manifestLink.href = manifestLink.href.replace('https://idrees-portfolio.vercel.app', 'http://localhost:3001');
}