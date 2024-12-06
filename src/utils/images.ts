interface ImageConfig {
  width: number;
  height: number;
  quality?: number;
}

export const getUnsplashUrl = (keywords: string[], config: ImageConfig) => {
  const { width, height, quality = 80 } = config;
  const baseUrl = 'https://images.unsplash.com/photo-';
  const fallbackImageId = '1461749280684-dccba0e8454d'; // Replace with your fallback image ID
  
  // Construct URLs with proper formatting
  const mainUrl = `${baseUrl}${fallbackImageId}?w=${width}&h=${height}&q=${quality}&fit=crop&auto=format`;
  
  return {
    src: mainUrl,
    srcSet: `${mainUrl}&w=${width} 1x, ${mainUrl}&w=${width * 2} 2x`,
    placeholder: `${mainUrl}&w=50&blur=20`, // Low quality placeholder
  };
};

// Only preload images that are visible in the viewport
export const preloadCriticalImages = () => {
  // Create an intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = img.dataset.src;
          document.head.appendChild(link);
          
          // Load the image
          img.src = img.dataset.src;
          delete img.dataset.src;
          
          // Stop observing this image
          observer.unobserve(img);
        }
      }
    });
  });

  // Observe all images with data-src attribute
  document.querySelectorAll('img[data-src]').forEach(img => {
    observer.observe(img);
  });
};
