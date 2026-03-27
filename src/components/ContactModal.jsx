import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import './ContactModal.css';

const CONTACT_OPTIONS = [
  { id: 'whatsapp', label: 'WhatsApp', icon: 'mingcute:whatsapp-fill', color: '#25D366' },
  { id: 'twitter', label: 'Twitter (X)', icon: 'tabler:brand-x', color: '#000000', link: 'https://x.com/too_chi_' },
  { id: 'linkedin', label: 'LinkedIn', icon: 'lucide:linkedin', color: '#0A66C2', link: 'https://www.linkedin.com/in/tochukwu-akabueze-bb2b46391' },
  { id: 'email', label: 'Email', icon: 'lucide:mail', color: '#EA4335' }
];

const PHONENUMBER = '+234 706 078 9848';
const EMAIL = 'akabuezechris432@gmail.com';
const MotionDiv = motion.div;

export default function ContactModal({ isOpen, onClose }) {
  const [activeView, setActiveView] = useState('menu');
  const [waMessage, setWaMessage] = useState('');
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
      const timer = setTimeout(() => {
        setActiveView('menu');
        setWaMessage('');
        setCopied(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWaSend = () => {
    const encoded = encodeURIComponent(waMessage);
    const cleanNumber = PHONENUMBER.replace(/[^\d+]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encoded}`, '_blank');
  };

  const renderContent = () => {
    if (activeView === 'menu') {
      return (
        <MotionDiv 
          key="menu"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="modal-view"
        >
          <h2 className="modal-title">Say Hello</h2>
          <p className="modal-subtitle">How would you like to connect today?</p>
          <div className="modal-options">
            {CONTACT_OPTIONS.map(opt => (
              <div key={opt.id} className="btn-tray" style={{ width: '100%' }}>
                <button 
                  className="btn"
                  style={{ width: '100%', justifyContent: 'flex-start', padding: '12px 16px', fontSize: '16px' }}
                  onClick={() => {
                    if (opt.link) {
                      window.open(opt.link, '_blank');
                    } else {
                      setActiveView(opt.id);
                    }
                  }}
                >
                  <Icon icon={opt.icon} width={18} style={{ color: opt.id === 'twitter' || opt.id === 'email' ? 'currentColor' : opt.color }} />
                  <span style={{ flex: 1, textAlign: 'left' }}>{opt.label}</span>
                  <Icon icon="lucide:arrow-right" width={16} />
                </button>
              </div>
            ))}
          </div>
        </MotionDiv>
      );
    }

    if (activeView === 'whatsapp') {
      return (
        <MotionDiv
          key="whatsapp"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="modal-view"
        >
          <div className="btn-tray" style={{ alignSelf: 'flex-start', marginBottom: '20px' }}>
            <button className="btn" onClick={() => setActiveView('menu')} style={{ padding: '8px 12px' }}>
              <Icon icon="lucide:arrow-left" width={14} /> Back
            </button>
          </div>
          <h2 className="modal-title">WhatsApp</h2>
          <div className="modal-copy-box">
            <span className="modal-copy-text">{PHONENUMBER}</span>
            <button className="modal-copy-icon" onClick={() => handleCopy(PHONENUMBER)}>
              <Icon icon={copied ? "lucide:check" : "lucide:copy"} width={16} color={copied ? "var(--success)" : "currentColor"} />
            </button>
          </div>
          <textarea 
            className="modal-textarea" 
            placeholder="Hey Christian, I have a project for you..."
            value={waMessage}
            onChange={(e) => setWaMessage(e.target.value)}
          />
          <div className="btn-tray" style={{ width: '100%', marginTop: 'auto' }}>
            <button className="btn btn-primary" style={{ width: '100%', padding: '12px' }} onClick={handleWaSend} disabled={!waMessage.trim()}>
              Send on WhatsApp <Icon icon="lucide:send" width={16} />
            </button>
          </div>
        </MotionDiv>
      );
    }
    
    if (activeView === 'email') {
      return (
        <MotionDiv
          key="email"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="modal-view"
        >
          <div className="btn-tray" style={{ alignSelf: 'flex-start', marginBottom: '20px' }}>
            <button className="btn" onClick={() => setActiveView('menu')} style={{ padding: '8px 12px' }}>
              <Icon icon="lucide:arrow-left" width={14} /> Back
            </button>
          </div>
          <h2 className="modal-title">Email</h2>
          <div className="modal-copy-box">
            <span className="modal-copy-text">{EMAIL}</span>
            <button className="modal-copy-icon" onClick={() => handleCopy(EMAIL)}>
              <Icon icon={copied ? "lucide:check" : "lucide:copy"} width={16} color={copied ? "var(--success)" : "currentColor"} />
            </button>
          </div>
          <div className="btn-tray" style={{ width: '100%', marginTop: 'auto' }}>
            <button className="btn btn-primary" style={{ width: '100%', padding: '12px' }} onClick={() => window.location.href = `mailto:${EMAIL}`}>
              Open Mail App <Icon icon="lucide:external-link" width={16} />
            </button>
          </div>
        </MotionDiv>
      )
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionDiv 
          className="modal-backdrop"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          onClick={onClose}
        >
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn outside" onClick={onClose} aria-label="Close modal">
              <Icon icon="lucide:x" width={18} />
            </button>
            <MotionDiv 
              className="contact-modal"
              style={{ originX: 1, originY: 0 }}
              initial={{ y: "-50vh", opacity: 0, scale: 0.5, rotateX: 20 }}
              animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0, y: -40 }}
              transition={{ type: "spring", damping: 16, stiffness: 200 }}
            >
              <div className="modal-content-wrapper">
              <AnimatePresence mode="wait">
                {renderContent()}
              </AnimatePresence>
            </div>
            </MotionDiv>
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
