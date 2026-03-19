import { Icon } from '@iconify/react';

export default function ChallengesSection({ data, number }) {
  if (!data || data.length === 0) return null;
  return (
    <section className="case-section">
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
    </section>
  );
}
