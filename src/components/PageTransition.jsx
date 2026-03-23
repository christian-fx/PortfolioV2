import { motion } from 'framer-motion';

/**
 * Premium Page Transition
 */
export default function PageTransition({ children }) {
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        duration: 0.3, 
        ease: "easeOut"
      }}
    >
      {children}
    </MotionDiv>
  );
}
