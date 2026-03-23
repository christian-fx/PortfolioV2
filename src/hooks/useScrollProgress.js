import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let requestRunning = null;

    const update = () => {
      if (requestRunning) return;

      requestRunning = requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const height = scrollHeight - clientHeight;
        
        const nextProgress = height > 0 ? (scrollTop / height) * 100 : 0;
        
        // Precision check: Only update if change is > 0.2% to reduce re-renders
        setProgress(prev => {
          if (Math.abs(prev - nextProgress) > 0.2) return nextProgress;
          return prev;
        });

        const nearBottom = scrollHeight - (scrollTop + clientHeight) < 800;
        setShowBackToTop(nearBottom);
        
        requestRunning = null;
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      if (requestRunning) cancelAnimationFrame(requestRunning);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return { progress, showBackToTop, scrollToTop };
}
