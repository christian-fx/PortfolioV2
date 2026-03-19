import { motion } from 'framer-motion';

const MotionSection = motion.section;

const variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function OverviewSection({ data, number }) {
  if (!data) return null;
  return (
    <MotionSection className="case-section" variants={variants}>
      <div className="section-header">
        <p className="section-number">{number} / Overview</p>
        <h2 className="case-section-title">Project Background</h2>
      </div>
      <div className="section-content">
        {Array.isArray(data)
          ? data.map((para, i) => <p key={i}>{para}</p>)
          : <p>{data}</p>}
      </div>
    </MotionSection>
  );
}
