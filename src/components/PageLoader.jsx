import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MotionDiv = motion.div;
const MotionSpan = motion.span;

const PageLoader = ({ onComplete, minimal = false }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (minimal) return;

    const duration = 500; // 0.5 seconds
    const interval = 25;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete?.(), 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete, minimal]);

  if (minimal) {
    return null;
  }

  return (
    <MotionDiv
      key="loader-wrapper"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        backdropFilter: 'blur(3px)',
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999
      }}
    >
      <MotionDiv
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}
        exit={{
          scale: 4,
          filter: "blur(40px)",
          opacity: 0
        }}
        transition={{
          duration: 0.7,
          ease: "easeIn"
        }}
      >
        <div style={{ width: '60%', maxWidth: '200px', height: '60px', position: 'relative' }}>
          <svg
            viewBox="0 0 400 60"
            fill="none"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', strokeWidth: 2, stroke: 'var(--foreground)' }}
          >
            {/* Background faint line */}
            <path
              d="M 0 30 L 400 30"
              stroke="var(--border)"
              strokeDasharray="4 4"
              opacity="0.3"
            />
            {/* Animated EKG Line */}
            <motion.path
              d="M 0 30 L 50 30 L 60 10 L 70 50 L 80 30 L 150 30 L 160 5 L 175 55 L 190 30 L 260 30 L 270 15 L 280 45 L 290 30 L 400 30"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ ease: "linear" }}
              stroke="var(--foreground)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <MotionSpan
          style={{
            fontFamily: 'var(--font-family-mono)',
            fontSize: '12px',
            color: 'var(--muted-foreground)',
            fontWeight: 500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Initializing
        </MotionSpan>

        <MotionSpan
          style={{
            fontFamily: 'var(--font-family-mono)',
            fontSize: '24px',
            color: 'var(--foreground)',
            fontWeight: 700,
            letterSpacing: '0.2em'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {Math.round(progress)}%
        </MotionSpan>
      </MotionDiv>
    </MotionDiv>
  );
};

export default PageLoader;
