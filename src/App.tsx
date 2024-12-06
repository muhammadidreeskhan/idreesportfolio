import { lazy, Suspense, useEffect, useState } from "react";
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
import { PageLoader, ComponentLoader } from "./components/ui/loader";

// Lazy load components with loading state
const lazyWithPrefetch = (factory: () => Promise<any>, minDelay = 500) => {
  const Component = lazy(() => 
    Promise.all([
      factory(),
      new Promise(resolve => setTimeout(resolve, minDelay))
    ]).then(([module]) => module)
  );
  Component.preload = factory;
  return Component;
};

// Lazy load page components
const Index = lazyWithPrefetch(() => import("./pages/Index"));
const About = lazyWithPrefetch(() => import("./pages/About"));
const Projects = lazyWithPrefetch(() => import("./pages/Projects"));
const Services = lazyWithPrefetch(() => import("./pages/Services"));
const Contact = lazyWithPrefetch(() => import("./pages/Contact"));
const Blog = lazyWithPrefetch(() => import("./pages/Blog"));
const BlogPost = lazyWithPrefetch(() => import("./pages/BlogPost"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useServiceWorker();

  useEffect(() => {
    // Load critical resources in order of priority
    Promise.all([
      preloadFonts(),
      preloadCriticalImages(),
      Index.preload(),
      About.preload()
    ])
      .then(() => {
        // Start performance monitoring
        measureWebVitals(reportToAnalytics);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <HelmetProvider>
      <NextThemes attribute="class" defaultTheme="dark" enableSystem>
        <ThemeProvider defaultTheme="dark" storageKey="idrees-theme">
          <BrowserRouter>
            <ErrorBoundary>
              <TooltipProvider>
                <Suspense fallback={<ComponentLoader />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
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