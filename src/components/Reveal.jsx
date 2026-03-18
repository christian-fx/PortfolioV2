import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0, width = "fit-content" }) {
  const MotionDiv = motion.div;
  
  return (
    <div style={{ position: "relative", overflow: "hidden", width }}>
      <MotionDiv
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </MotionDiv>
    </div>
  );
}
