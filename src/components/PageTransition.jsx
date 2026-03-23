import { motion } from 'framer-motion';

/**
 * Premium Page Transition
 */
export default function PageTransition({ children }) {
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.98 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1] // Quintic out (premium feeling)
      }}
    >
      {children}
    </MotionDiv>
  );
}
