import { motion } from 'framer-motion';

/**
 * Premium Page Transition
 */
export default function PageTransition({ children }) {
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </MotionDiv>
  );
}
