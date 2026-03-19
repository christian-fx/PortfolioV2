import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const MotionSection = motion.section;

const variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function ChallengesSection({ data, number }) {
  if (!data || data.length === 0) return null;
  return (
    <MotionSection className="case-section" variants={variants}>
      <div className="section-header">
        <p className="section-number">{number} / Challenges</p>
        <h2 className="case-section-title">Key Challenges</h2>
      </div>
      <div className="challenge-grid">
        {data.map(({ icon, title, desc }) => (
          <div key={title} className="challenge-card">
            <div className="challenge-icon"><Icon icon={icon} width={24} /></div>
            <h3 className="challenge-title">{title}</h3>
            <p className="challenge-desc">{desc}</p>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
