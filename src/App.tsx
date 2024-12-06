import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import { HelmetProvider } from 'react-helmet-async';
import { useServiceWorker } from "./hooks/useServiceWorker";
import { preloadFonts } from "./utils/fonts";
import { preloadCriticalImages } from "./utils/images";
import { measureWebVitals, reportToAnalytics } from "./utils/performance";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider as NextThemes } from "next-themes";
import { TooltipProvider } from "./components/ui/tooltip";

// Lazy load components with prefetch
const lazyWithPrefetch = (factory: () => Promise<any>) => {
  const Component = lazy(factory);
  Component.preload = factory;
  return Component;
};

// Lazy load page components
const Index = lazyWithPrefetch(() => import("./pages/Index"));
const About = lazyWithPrefetch(() => import("./pages/About"));
const Projects = lazyWithPrefetch(() => import("./pages/Projects"));
const Contact = lazyWithPrefetch(() => import("./pages/Contact"));
const Services = lazyWithPrefetch(() => import("./pages/Services"));
const Blog = lazyWithPrefetch(() => import("./pages/Blog"));
const BlogPost = lazyWithPrefetch(() => import("./pages/BlogPost"));

// Loading component with skeleton
const PageLoader = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="space-y-4 w-full max-w-2xl p-4">
      <div className="h-8 bg-gray-200 rounded animate-pulse" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
      </div>
    </div>
  </div>
);

const App = () => {
  useServiceWorker();

  useEffect(() => {
    // Load critical resources in order of priority
    Promise.resolve()
      .then(() => preloadFonts())
      .then(() => preloadCriticalImages())
      .then(() => {
        // Start performance monitoring
        measureWebVitals(reportToAnalytics);
        
        // Prefetch other routes
        Index.preload();
        About.preload();
      })
      .catch(console.error);
  }, []);

  return (
    <HelmetProvider>
      <NextThemes attribute="class" defaultTheme="dark" enableSystem>
        <ThemeProvider defaultTheme="dark" storageKey="idrees-theme">
          <BrowserRouter>
            <ErrorBoundary>
              <TooltipProvider>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </Suspense>
                <Toaster />
              </TooltipProvider>
            </ErrorBoundary>
          </BrowserRouter>
        </ThemeProvider>
      </NextThemes>
    </HelmetProvider>
  );
};

export default App;