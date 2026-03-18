import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useRef } from 'react';

/* ─── SkeletonImage helper ─── */
function SkeletonImage({ src, alt }) {
  const imgRef = useRef(null);

  const handleLoad = () => {
    if (imgRef.current) {
      imgRef.current.classList.add('loaded');
      const skeleton = imgRef.current.closest('.work-image-wrapper')?.querySelector('.skeleton-image');
      if (skeleton) {
        skeleton.style.opacity = '0';
        setTimeout(() => skeleton.remove(), 500);
      }
    }
  };

  return (
    <div className="work-image-wrapper">
      <div className="skeleton-image" />
      <Link to="/case-study">
        <img ref={imgRef} src={src} alt={alt} loading="lazy" onLoad={handleLoad} />
      </Link>
    </div>
  );
}

export default function ProjectCard({ title, description, tags, image, github, live, caseStudyLink = '/case-study' }) {
  return (
    <article className="work-card">
      <SkeletonImage src={image} alt={title} />
      <div className="work-meta">
        <div className="work-header">
          <h3 className="work-title">{title}</h3>
          <div className="work-links">
            {github && (
              <a href={github} className="work-link-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Icon icon="lucide:github" width={18} />
              </a>
            )}
            {live && (
              <a href={live} className="work-link-icon" aria-label="Live site" target="_blank" rel="noopener noreferrer">
                <Icon icon="lucide:globe" width={18} />
              </a>
            )}
          </div>
        </div>
        <p className="work-desc">{description}</p>
        <div className="work-tags">
          <span className="tech-stacks-label">Tech Stacks</span>
          {tags.map((tag) => (
            <span key={tag.label} className="work-tag">
              <Icon icon={tag.icon} width={14} />
              {tag.label}
            </span>
          ))}
        </div>
        <div className="work-footer">
          <div className="completed-status"><span className="green-dot" />Completed</div>
          <Link to={caseStudyLink} className="view-details">
            View Details<Icon icon="lucide:arrow-up-right" width={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
