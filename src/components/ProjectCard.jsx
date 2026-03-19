import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState, useRef, useEffect } from 'react';

/* ─── SkeletonImage helper ─── */
function SkeletonImage({ src, alt, link }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  // Fallback for cached images that might have completely loaded instantly
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      // eslint-disable-next-line
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="work-image-wrapper">
      <div 
        className="skeleton-image" 
        style={{ opacity: isLoaded ? 0 : 1, transition: 'opacity 0.5s ease', pointerEvents: isLoaded ? 'none' : 'auto' }} 
      />
      <Link to={link}>
        <img 
          ref={imgRef} 
          src={src} 
          alt={alt} 
          loading="lazy" 
          onLoad={() => setIsLoaded(true)}
          className={isLoaded ? 'loaded' : ''}
        />
      </Link>
    </div>
  );
}

export default function ProjectCard({ id, title, description, tags, image, github, live, status }) {
  const caseStudyLink = `/case-study/${id}`;

  const getStatusColor = () => {
    if (status === 'Completed') return '#10b981'; // Premium muted green
    if (status === 'In Development' || status === 'in-development') return '#f59e0b'; // Premium refined amber
    if (status === 'Planning') return '#8b5cf6'; // Premium soft purple
    return '#10b981'; // default green
  };

  const formattedStatus = status === 'in-development' ? 'In Development' : (status || 'Completed');

  return (
    <article className="work-card">
      <SkeletonImage src={image} alt={title} link={caseStudyLink} />
      <div className="work-meta">
        <div className="work-header">
          <h3 className="work-title">{title}</h3>
          <div className="work-links">
            {github && github !== '#' && (
              <a href={github} className="work-link-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Icon icon="lucide:github" width={18} />
              </a>
            )}
            {live && live !== '#' && (
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
          <div className="project-status">
            <span className="status-dot-premium" style={{ backgroundColor: getStatusColor() }} />
            {formattedStatus}
          </div>
          <Link to={caseStudyLink} className="view-details">
            View Details<Icon icon="lucide:arrow-up-right" width={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
