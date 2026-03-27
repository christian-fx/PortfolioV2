import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import Navbar from '../components/Navbar';

export default function Layout({ children }) {
  const { progress, showBackToTop, scrollToTop } = useScrollProgress();
  const location = useLocation();
  const isResumePage = location.pathname === '/resume';

  return (
    <>
      {!isResumePage && (
        <div 
          className="scroll-progress" 
          style={{ 
            transform: `scaleX(${progress / 100})`,
            transformOrigin: 'left',
            width: '100%'
          }} 
        />
      )}
      {!isResumePage && (
        <button
          className={`back-to-top${showBackToTop ? ' visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <Icon icon="lucide:arrow-up" width={24} />
        </button>
      )}
      {!isResumePage && <Navbar />}
      <div className={isResumePage ? "resume-viewer-container" : "container"}>
        {children}
      </div>
    </>
  );
}
