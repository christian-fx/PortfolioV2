import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import './NotFound.css';

const MotionSection = motion.section;

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" />
      <MotionSection 
        className="not-found-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1 
          className="not-found-title"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          404
        </motion.h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-desc">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            <Icon icon="lucide:home" width={16} /> Back to Home
          </Link>
          <Link to="/works" className="btn">
            View Projects <Icon icon="lucide:folder-open" width={16} />
          </Link>
        </div>
      </MotionSection>
    </>
  );
}
