import { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Sun, MoonStar } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { path: '/', label: 'Home', end: true },
  { path: '/works', label: 'Works', end: false },
  { path: '/about', label: 'About', end: false },
  { path: '/contact', label: 'Contact', end: false },
];

const MotionDiv = motion.div;

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down - hide
        document.documentElement.classList.add('header-hidden');
      } else {
        setIsVisible(true); // Scrolling up - show
        document.documentElement.classList.remove('header-hidden');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <MotionDiv 
      className="header-fixed-wrapper"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="container">
        <header className="header">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
              {isDark ? <Sun width={22} height={22} /> : <MoonStar width={22} height={22} />}
            </button>
          <nav className="header-nav">
            <AnimatePresence>
              {NAV_LINKS.map(link => {
                const isActive = link.end 
                  ? location.pathname === link.path 
                  : location.pathname.startsWith(link.path);

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.end}
                    aria-current={isActive ? 'page' : undefined}
                    className={`nav-link${isActive ? ' active' : ''}`}
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </AnimatePresence>
          </nav>
        </header>
      </div>
    </MotionDiv>
  );
}
