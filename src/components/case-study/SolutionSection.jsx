export default function SolutionSection({ data, number }) {
  if (!data || data.length === 0) return null;
  return (
    <section className="case-section">
      <div className="section-header">
        <p className="section-number">{number} / Solution</p>
        <h2 className="case-section-title">Approach &amp; Implementation</h2>
      </div>
      <div className="solution-list">
        {data.map(({ title, desc }, index) => {
          const num = (index + 1).toString().padStart(2, '0');
          return (
            <div key={title} className="solution-item">
              <div className="solution-number">{num}</div>
              <div className="solution-content">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
