export default function GallerySection({ data, number }) {
  if (!data || data.length === 0) return null;
  return (
    <section className="case-section">
      <div className="section-header">
        <p className="section-number">{number} / Gallery</p>
        <h2 className="case-section-title">Screenshots</h2>
      </div>
      <div className="gallery-grid">
        {data.map(({ src, alt, caption }) => (
          <div key={alt} className="gallery-item">
            <img src={src} alt={alt} loading="lazy" decoding="async" />
            <div className="gallery-caption">{caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
