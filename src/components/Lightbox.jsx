import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';

const MotionDiv = motion.div;
const MotionButton = motion.button;
const MotionP = motion.p;

export default function Lightbox({ isOpen, onClose, src, alt }) {
  // Prevent scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionDiv
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            cursor: 'zoom-out'
          }}
          onClick={onClose}
        >
          {/* Close Button */}
          <MotionButton
            className="lightbox-close"
            onClick={onClose}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: '18px',
              letterSpacing: '0.05em'
            }}
          >
             CLOSE <Icon icon="lucide:x" width={24} />
          </MotionButton>

          <MotionDiv
            className="lightbox-content"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
              }}
            />
          </MotionDiv>
          
          {alt && (
            <MotionP
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                marginTop: '16px',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '14px',
                fontFamily: '"Google Sans Flex", sans-serif'
              }}
            >
              {alt}
            </MotionP>
          )}
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
