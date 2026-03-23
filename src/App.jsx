import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import PageLoader from './components/PageLoader';
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
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    if (!isInitialLoading && GA_MEASUREMENT_ID) {
      // Initialize GA4 only after the initial splash is gone
      ReactGA.initialize(GA_MEASUREMENT_ID);
    }
  }, [isInitialLoading]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <AnimatePresence>
        {isInitialLoading ? (
          <PageLoader key="initial-loader" onComplete={() => setIsInitialLoading(false)} />
        ) : (
          <div
            key="app-content"
            style={{ animation: 'fadeIn 0.5s ease-out forwards' }}
          >
            <Suspense fallback={null}>
              <AnimatedRoutes />
            </Suspense>
          </div>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}
