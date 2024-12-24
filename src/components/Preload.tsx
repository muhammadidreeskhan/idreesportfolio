import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Preload = () => {
  const location = useLocation();

  useEffect(() => {
    // Preload critical routes
    const preloadRoutes = async () => {
      const routes = [
        () => import('../pages/Index'),
        () => import('../pages/About'),
        () => import('../pages/Projects'),
      ];

      for (const route of routes) {
        try {
          await route();
          const link = document.createElement('link');
          link.rel = 'modulepreload';
          link.href = `/${route.toString().split("'")[1]}.js`;
          document.head.appendChild(link);
        } catch (error) {
          console.error('Error preloading route:', error);
        }
      }
    };

    // Preload critical images
    const preloadImages = () => {
      const criticalImages = [
        '/assets/images/profile.jpg',
        '/assets/images/hero-bg.jpg',
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.type = src.endsWith('.jpg') ? 'image/jpeg' : 'image/png';
        document.head.appendChild(link);
      });
    };

    preloadRoutes();
    preloadImages();
  }, [location]);

  return null;
};

export default Preload;
