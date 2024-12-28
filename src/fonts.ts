export const preloadFonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
  link.rel = 'stylesheet';
  link.onerror = () => {
    console.error('Failed to load the font. Please check the URL and ensure the request is valid.');
  };
  document.head.appendChild(link);
};
