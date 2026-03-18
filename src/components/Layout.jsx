import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  const { progress, showBackToTop, scrollToTop } = useScrollProgress();

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
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
        <Footer />
      </div>
    </>
  );
}
