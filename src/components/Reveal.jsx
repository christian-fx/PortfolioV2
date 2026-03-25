import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0, width = "fit-content" }) {
  const MotionDiv = motion.div;
  
  return (
    <div style={{ position: "relative", overflow: "hidden", width }}>
      <MotionDiv
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </MotionDiv>
    </div>
  );
}
