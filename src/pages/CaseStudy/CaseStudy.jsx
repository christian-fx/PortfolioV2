import { useParams, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import { PROJECTS } from '../../data/projects';
import './CaseStudy.css';

export default function CaseStudy() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  // 1. Not Found Fallback
  if (!project) {
    return (
      <Layout>
        <section className="case-hero" style={{ textAlign: 'center', padding: '120px 0' }}>
          <h1 className="case-title">Project Not Found</h1>
          <p className="case-subtitle" style={{ margin: '0 auto 32px' }}>
            The case study you are looking for doesn't exist or has been removed.
          </p>
          <Link to="/works" className="btn btn-primary">
            <Icon icon="lucide:arrow-left" width={16} /> Back to Works
          </Link>
        </section>
      </Layout>
    );
  }

  // 2. Placeholder for projects without a full case study
  if (!project.hasCaseStudy) {
    const otherProjects = PROJECTS.filter((p) => p.id !== id).slice(0, 2);

    return (
      <Layout>
        <nav className="breadcrumb">
          <Link to="/works"><Icon icon="lucide:arrow-left" width={16} />Works</Link>
          <span className="separator">/</span>
          <span style={{ color: 'var(--muted-foreground)' }}>{project.title}</span>
        </nav>

        <section className="case-hero" style={{ textAlign: 'center', padding: '80px 0 120px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <Icon icon="lucide:construction" width={48} style={{ color: 'var(--muted-foreground)' }} />
          </div>
          <h1 className="case-title">Case Study Coming Soon</h1>
          <p className="case-subtitle" style={{ margin: '0 auto 32px' }}>
            I am currently writing the detailed case study for {project.title}.
            In the meantime, you can check out the live site or explore my other works.
          </p>
          <div className="case-links" style={{ justifyContent: 'center' }}>
            {project.live && project.live !== '#' && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Icon icon="lucide:external-link" width={16} /> Live Site
              </a>
            )}
            {project.github && project.github !== '#' && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                <Icon icon="lucide:github" width={16} /> View Code
              </a>
            )}
          </div>
        </section>

        <section className="case-section">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <h2 className="case-section-title">View Other Works</h2>
          </div>
          <div className="work-grid">
            {otherProjects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </section>
      </Layout>
    );
  }

  // 3. Full Case Study Rendering
  const cs = project.caseStudy || {};

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/works"><Icon icon="lucide:arrow-left" width={16} />Works</Link>
        <span className="separator">/</span>
        <span style={{ color: 'var(--muted-foreground)' }}>{project.title}</span>
      </nav>

      {/* Hero */}
      <section className="case-hero">
        <img
          src={project.image}
          alt={`${project.title} Hero`}
          className="case-hero-image"
        />

        {project.meta && (
          <div className="case-meta">
            {Object.entries(project.meta).map(([key, value]) => (
              <div key={key} className="case-meta-item">
                <span className="case-meta-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                <span className="case-meta-value">{value}</span>
              </div>
            ))}
          </div>
        )}

        <h1 className="case-title">{project.title}</h1>
        <p className="case-subtitle">{project.description}</p>

        <div className="case-links">
          {project.live && project.live !== '#' && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Icon icon="lucide:external-link" width={16} /> Live Site
            </a>
          )}
          {project.github && project.github !== '#' && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
              <Icon icon="lucide:github" width={16} /> View Code
            </a>
          )}
        </div>
      </section>

      {/* 01 — Overview */}
      {cs.overview && (
        <section className="case-section">
          <div className="section-header">
            <p className="section-number">01 / Overview</p>
            <h2 className="case-section-title">Project Background</h2>
          </div>
          <div className="section-content">
            {Array.isArray(cs.overview)
              ? cs.overview.map((para, i) => <p key={i}>{para}</p>)
              : <p>{cs.overview}</p>}
          </div>
        </section>
      )}

      {/* 02 — Challenges */}
      {cs.challenges && cs.challenges.length > 0 && (
        <section className="case-section">
          <div className="section-header">
            <p className="section-number">02 / Challenges</p>
            <h2 className="case-section-title">Key Challenges</h2>
          </div>
          <div className="challenge-grid">
            {cs.challenges.map(({ icon, title, desc }) => (
              <div key={title} className="challenge-card">
                <div className="challenge-icon"><Icon icon={icon} width={24} /></div>
                <h3 className="challenge-title">{title}</h3>
                <p className="challenge-desc">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 03 — Solution */}
      {cs.solution && cs.solution.length > 0 && (
        <section className="case-section">
          <div className="section-header">
            <p className="section-number">03 / Solution</p>
            <h2 className="case-section-title">Approach &amp; Implementation</h2>
          </div>
          <div className="solution-list">
            {cs.solution.map(({ title, desc }, index) => {
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
      )}

      {/* 04 — Tech Stack */}
      {cs.techStack && cs.techStack.length > 0 && (
        <section className="case-section">
          <div className="section-header">
            <p className="section-number">04 / Technology</p>
            <h2 className="case-section-title">Tech Stack</h2>
          </div>
          <div className="tech-grid">
            {cs.techStack.map(({ icon, label }) => (
              <span key={label} className="tech-badge">
                <Icon icon={icon} width={18} />{label}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* 05 — Results */}
      {cs.results && (
        <section className="case-section">
          <div className="section-header">
            <p className="section-number">05 / Results</p>
            <h2 className="case-section-title">Impact &amp; Metrics</h2>
          </div>
          
          {cs.results.metrics && cs.results.metrics.length > 0 && (
            <div className="results-grid">
              {cs.results.metrics.map(({ number, label }) => (
                <div key={label} className="result-card">
                  <div className="result-number">{number}</div>
                  <div className="result-label">{label}</div>
                </div>
              ))}
            </div>
          )}

          {cs.results.testimonial && (
            <div className="testimonial">
              <p className="testimonial-text">{cs.results.testimonial.text}</p>
              <div className="testimonial-author">
                <img
                  src={cs.results.testimonial.avatar}
                  alt={cs.results.testimonial.name}
                  className="author-avatar"
                />
                <div className="author-info">
                  <h5>{cs.results.testimonial.name}</h5>
                  <p>{cs.results.testimonial.role}</p>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* 06 — Gallery */}
      {cs.gallery && cs.gallery.length > 0 && (
        <section className="case-section">
          <div className="section-header">
            <p className="section-number">06 / Gallery</p>
            <h2 className="case-section-title">Screenshots</h2>
          </div>
          <div className="gallery-grid">
            {cs.gallery.map(({ src, alt, caption }) => (
              <div key={alt} className="gallery-item">
                <img src={src} alt={alt} />
                <div className="gallery-caption">{caption}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Next Project */}
      {(() => {
        const currentIndex = PROJECTS.findIndex(p => p.id === id);
        const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
        return (
          <section className="next-project">
            <p className="next-label">Next Project</p>
            <h2 className="next-title">{nextProject.title}</h2>
            <Link to={`/case-study/${nextProject.id}`} className="btn btn-primary">
              View Project <Icon icon="lucide:arrow-right" width={16} />
            </Link>
          </section>
        );
      })()}
    </Layout>
  );
}
