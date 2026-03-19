import { Icon } from '@iconify/react';

export default function TechStackSection({ data, number }) {
  if (!data || data.length === 0) return null;
  return (
    <section className="case-section">
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
    </section>
  );
}
