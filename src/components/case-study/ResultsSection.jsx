export default function ResultsSection({ data, number }) {
  if (!data) return null;
  return (
    <section className="case-section">
      <div className="section-header">
        <p className="section-number">{number} / Results</p>
        <h2 className="case-section-title">Impact &amp; Metrics</h2>
      </div>
      
      {data.metrics && data.metrics.length > 0 && (
        <div className="results-grid">
          {data.metrics.map(({ number: stat, label }) => {
            const isText = /[a-zA-Z]{3,}/.test(stat) || stat.length > 4;
            return (
              <div key={label} className="result-card">
                <div className={`result-number ${isText ? 'text-metric' : ''}`}>{stat}</div>
                <div className="result-label">{label}</div>
              </div>
            );
          })}
        </div>
      )}

      {data.testimonial && (
        <div className="testimonial">
          <p className="testimonial-text">{data.testimonial.text}</p>
          <div className="testimonial-author">
            <img
              src={data.testimonial.avatar}
              alt={data.testimonial.name}
              className="author-avatar"
              loading="lazy" 
              decoding="async"
            />
            <div className="author-info">
              <h5>{data.testimonial.name}</h5>
              <p>{data.testimonial.role}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
