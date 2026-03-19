export default function OverviewSection({ data, number }) {
  if (!data) return null;
  return (
    <section className="case-section">
      <div className="section-header">
        <p className="section-number">{number} / Overview</p>
        <h2 className="case-section-title">Project Background</h2>
      </div>
      <div className="section-content">
        {Array.isArray(data)
          ? data.map((para, i) => <p key={i}>{para}</p>)
          : <p>{data}</p>}
      </div>
    </section>
  );
}
