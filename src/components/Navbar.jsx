import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="header-fixed-wrapper">
      <div className="container">
        <header className="header">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            <Icon icon={isDark ? 'lucide:sun' : 'lucide:moon-star'} width={22} height={22} />
          </button>
          <nav className="header-nav">
            <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Home</NavLink>
            <NavLink to="/works" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Works</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Contact</NavLink>
          </nav>
        </header>
      </div>
    </div>
  );
}
