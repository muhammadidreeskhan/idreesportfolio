import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AnimatedCursor from "./components/AnimatedCursor";
import AnimatedBackground from "./components/AnimatedBackground";
import { useEffect } from "react";
import { initSmoothScroll } from "./utils/scroll";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import WebProjects from "./pages/WebProjects";
import MobileProjects from "./pages/MobileProjects";
import UIUXProjects from "./pages/UIUXProjects";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import ErrorBoundary from "./components/ErrorBoundary";
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize smooth scrolling
    initSmoothScroll();

    // Optimize performance by disabling pointer events during scroll
    let scrollTimeout: NodeJS.Timeout;
    const html = document.documentElement;

    const handleScroll = () => {
      if (!html.classList.contains('is-scrolling')) {
        html.classList.add('is-scrolling');
      }
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        html.classList.remove('is-scrolling');
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ThemeProvider>
              <AuthProvider>
                <TooltipProvider>
                  <div className="min-h-screen bg-background transition-colors duration-300 will-change-transform">
                    <AnimatedCursor />
                    <AnimatedBackground />
                    <Toaster />
                    <Sonner />
                    <BrowserRouter>
                      <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/web" element={
                          <ProtectedRoute>
                            <WebProjects />
                          </ProtectedRoute>
                        } />
                        <Route path="/projects/mobile" element={
                          <ProtectedRoute>
                            <MobileProjects />
                          </ProtectedRoute>
                        } />
                        <Route path="/projects/ui" element={
                          <ProtectedRoute>
                            <UIUXProjects />
                          </ProtectedRoute>
                        } />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                      </Routes>
                    </BrowserRouter>
                  </div>
                </TooltipProvider>
              </AuthProvider>
            </ThemeProvider>
          </NextThemesProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;