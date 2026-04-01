import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Mail } from 'lucide-react';
import './Footer.css';

const SOCIAL_LINKS = [
  { href: 'https://github.com/christian-fx', label: 'GitHub', icon: 'lucide:github' },
  { href: 'https://www.linkedin.com/in/tochukwu-akabueze-bb2b46391', label: 'LinkedIn', icon: 'lucide:linkedin' },
  { href: 'https://x.com/too_chi_', label: 'Twitter', icon: 'tabler:brand-x' },
  { href: 'mailto:akabuezechris432@gmail.com', label: 'Email', icon: 'lucide:mail' },
];



function getRomanYear(year) {
  const romanMap = {
    M: 1000, CM: 900, D: 500, CD: 400,
    C: 100, XC: 90, L: 50, XL: 40,
    X: 10, IX: 9, V: 5, IV: 4,
    I: 1
  };
  let result = '';
  let y = year;
  for (let key in romanMap) {
    while (y >= romanMap[key]) {
      result += key;
      y -= romanMap[key];
    }
  }
  return result;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const romanYear = getRomanYear(currentYear);

  return (
    <footer className="footer-main">
      <div className="footer-content">

        {/* Right: Socials */}
        <div className="footer-right">
          <div className="footer-socials">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-item"
                aria-label={label}
              >
                <span style={{ width: 18, height: 18, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  {icon === 'lucide:mail' ? <Mail width={18} /> : <Icon icon={icon} width={18} />}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Left: Brand / Roman Year */}
        <div className="footer-left">
          <p className="copyright-text">
            © {romanYear} • <span className="footer-brand">CHRISTIAN AKABUEZE</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
