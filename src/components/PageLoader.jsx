import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const PageLoader = () => {
  return (
    <div style={{
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--background)',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      <MotionDiv
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          height: '2px',
          backgroundColor: 'var(--accent)',
        }}
      />
    </div>
  );
};

export default PageLoader;
