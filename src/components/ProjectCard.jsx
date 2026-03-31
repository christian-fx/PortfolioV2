import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import SkeletonImage from './SkeletonImage';

import { motion } from 'framer-motion';

const MotionArticle = motion.article;

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
    <div className="work-card-tray">
      <MotionArticle
        className="work-card"
        whileHover={{
          y: -6, // Increased distance slightly for impact
          scale: 1.015,
          rotateX: -1,
          rotateY: 1,
          zIndex: 10
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          mass: 0.6
        }}
      >
        {(status === 'in-development' || status === 'In Development') && (
          <div className="dev-ribbon-wrapper">
            <div className="dev-ribbon-content">
              <span>In Development • In Development • In Development •</span>
              <span>In Development • In Development • In Development •</span>
            </div>
          </div>
        )}
        <div className="image-tray">
          <SkeletonImage src={image} alt={`${title} Preview`} link={caseStudyLink} />
        </div>
        <div className="work-meta">
          <div className="work-header">
            <h3 className="work-title">{title}</h3>
            <div className="work-links">
              {live && live !== '#' && (
                <a href={live} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label={`Visit ${title} Live Site`}>
                  <Icon icon="lucide:external-link" width={16} />
                </a>
              )}
              {github && github !== '#' && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label={`View ${title} Source Code`}>
                  <Icon icon="lucide:github" width={16} />
                </a>
              )}
            </div>
          </div>
          <p className="work-desc">{description}</p>
          <div className="work-tags">
            <span className="tech-stacks-label">Tech Stacks</span>
            {tags.map((tag) => (
              <span key={tag.label} className="work-tag">
                <Icon icon={tag.icon} width={12} />
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
      </MotionArticle>
    </div>
  );
}
