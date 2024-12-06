import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Preload = () => {
  const location = useLocation();

  useEffect(() => {
    // Preload critical routes
    const preloadRoutes = () => {
      const routes = [
        () => import('../pages/Index'),
        () => import('../pages/About'),
        () => import('../pages/Projects'),
      ];

      routes.forEach(route => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'script';
        link.href = route().then(module => module.default);
        document.head.appendChild(link);
      });
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
        document.head.appendChild(link);
      });
    };

    preloadRoutes();
    preloadImages();
  }, [location]);

  return null;
};

export default Preload;
