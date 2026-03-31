import { NavLink, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
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

  return (
    <div className="header-fixed-wrapper">
      <div className="container">
        <header className="header">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            <Icon icon={isDark ? 'lucide:sun' : 'lucide:moon-star'} width={22} height={22} />
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
                    {isActive && (
                      <MotionDiv 
                        layoutId="nav-active-pill" 
                        className="active-pill"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        style={{ bottom: '-4px' }}
                      />
                    )}
                  </NavLink>
                );
              })}
            </AnimatePresence>
          </nav>
        </header>
      </div>
    </div>
  );
}
