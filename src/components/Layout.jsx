import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import Navbar from '../components/Navbar';

export default function Layout({ children }) {
  const { progress, showBackToTop, scrollToTop } = useScrollProgress();

  return (
    <>
      <div 
        className="scroll-progress" 
        style={{ 
          transform: `scaleX(${progress / 100})`,
          transformOrigin: 'left',
          width: '100%'
        }} 
      />
      <button
        className={`back-to-top${showBackToTop ? ' visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <Icon icon="lucide:arrow-up" width={24} />
      </button>
      <Navbar />
      <div className="container">
        {children}
      </div>
    </>
  );
}
