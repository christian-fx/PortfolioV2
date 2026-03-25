import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import PageLoader from './components/PageLoader';
import Layout from './components/Layout';
import ReactGAPackage from 'react-ga4';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home/Home'));
const Works = lazy(() => import('./pages/Works/Works'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const CaseStudy = lazy(() => import('./pages/CaseStudy/CaseStudy'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const ReactGA = ReactGAPackage.default || ReactGAPackage;
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID;

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/works" element={<PageTransition><Works /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/case-study/:id" element={<PageTransition><CaseStudy /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(() => {
    return !sessionStorage.getItem('hasVisited');
  });

  useEffect(() => {
    if (!isInitialLoading && GA_MEASUREMENT_ID) {
      // Initialize GA4 only after the initial splash is gone
      ReactGA.initialize(GA_MEASUREMENT_ID);
    }
  }, [isInitialLoading]);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('hasVisited', 'true');
    setIsInitialLoading(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <AnimatePresence>
        {isInitialLoading && (
          <PageLoader key="initial-loader" onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>

      <div
        key="app-content"
        style={{ 
          opacity: isInitialLoading ? 0 : 1,
          visibility: isInitialLoading ? 'hidden' : 'visible',
          transition: 'opacity 0.8s ease-in-out'
        }}
      >
        <Layout>
          <Suspense fallback={null}>
            <AnimatedRoutes />
          </Suspense>
        </Layout>
      </div>
    </BrowserRouter>
  );
}
