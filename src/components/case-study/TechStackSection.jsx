import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const MotionSection = motion.section;

const variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function TechStackSection({ data, number }) {
  if (!data || data.length === 0) return null;
  return (
    <MotionSection className="case-section" variants={variants}>
      <div className="section-header">
        <p className="section-number">{number} / Technology</p>
        <h2 className="case-section-title">Tech Stack</h2>
      </div>
      <div className="tech-grid">
        {data.map(({ icon, label }) => (
          <span key={label} className="tech-badge">
            <Icon icon={icon} width={18} />{label}
          </span>
        ))}
      </div>
    </MotionSection>
  );
}
