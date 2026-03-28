import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import PageLoader from './components/PageLoader';
import Layout from './components/Layout';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home/Home'));
const Works = lazy(() => import('./pages/Works/Works'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const CaseStudy = lazy(() => import('./pages/CaseStudy/CaseStudy'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

import { ModalProvider } from './context/ModalContext';

function AnimatedRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
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

  const handleLoaderComplete = () => {
    sessionStorage.setItem('hasVisited', 'true');
    setIsInitialLoading(false);
  };

  return (
    <ModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Analytics />
        <SpeedInsights />
        
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
    </ModalProvider>
  );
}
