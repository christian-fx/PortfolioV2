import { useParams, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import SEO from '../../components/SEO';
import ProjectCard from '../../components/ProjectCard';
import Reveal from '../../components/Reveal';
import { PROJECTS } from '../../data/projects';
import './CaseStudy.css';

// Section Components
import OverviewSection from '../../components/case-study/OverviewSection';
import ChallengesSection from '../../components/case-study/ChallengesSection';
import SolutionSection from '../../components/case-study/SolutionSection';
import TechStackSection from '../../components/case-study/TechStackSection';
import ResultsSection from '../../components/case-study/ResultsSection';
import GallerySection from '../../components/case-study/GallerySection';
import SkeletonImage from '../../components/SkeletonImage';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;
const MotionSection = motion.section;

export default function CaseStudy() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  // 1. Not Found Fallback
  if (!project) {
    return (
      <>
        <SEO title="Project Not Found" />
        <section 
          className="case-hero" 
          style={{ 
            textAlign: 'center', 
            padding: '120px 20px', 
            minHeight: 'calc(100vh - 180px)', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}
        >
          <h1 className="case-title">Project Not Found</h1>
          <p className="case-subtitle" style={{ margin: '0 auto 32px' }}>
            The case study you are looking for doesn't exist or has been removed.
          </p>
          <div className="btn-tray">
            <Link to="/works" className="btn btn-primary">
              <Icon icon="lucide:arrow-left" width={16} /> Back to Works
            </Link>
          </div>
        </section>
      </>
    );
  }

  // 2. Placeholder for projects without a full case study
  if (!project.hasCaseStudy) {
    const otherProjects = PROJECTS.filter((p) => p.id !== id).slice(0, 2);

    return (
      <>
        <SEO
        title={`${project.title} - Coming Soon`}
        image={project.image}
        url={window.location.href}
        project={project}
        keywords={project.tags?.map(t => t.label).join(', ')}
      />
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
              <div className="btn-tray">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <Icon icon="lucide:external-link" width={16} /> Live Site
                </a>
              </div>
            )}
            {project.github && project.github !== '#' && (
              <div className="btn-tray">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                  <Icon icon="lucide:github" width={16} /> View Code
                </a>
              </div>
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
      </>
    );
  }

  // 3. Normalize Case Study Data Structure
  // This adapter function allows seamless transition between the legacy object structure
  // and the new customizable sections array structure without breaking existing data.
  const cs = project.caseStudy || {};
  let sections = cs.sections || [];
  
  if (sections.length === 0) {
    // Legacy mapping
    if (cs.overview) sections.push({ type: 'overview', content: cs.overview });
    if (cs.challenges) sections.push({ type: 'challenges', content: cs.challenges });
    if (cs.solution) sections.push({ type: 'solution', content: cs.solution });
    if (cs.techStack) sections.push({ type: 'tech-stack', content: cs.techStack });
    if (cs.results) sections.push({ type: 'results', content: cs.results });
    if (cs.gallery) sections.push({ type: 'gallery', content: cs.gallery });
  }

  return (
    <>
      <SEO
        title={project.title}
        description={project.description}
        image={project.image}
        url={window.location.href}
        project={project}
        keywords={project.tags?.map(t => t.label).join(', ')}
      />
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/works"><Icon icon="lucide:arrow-left" width={16} />Works</Link>
        <span className="separator">/</span>
        <span style={{ color: 'var(--muted-foreground)' }}>{project.title}</span>
      </nav>

      {/* Hero */}
      <section className="case-hero">
        <SkeletonImage 
          src={project.image} 
          alt={`${project.title} Interface Hero`}
          className="case-hero-image-wrapper"
          imgClassName="case-hero-image"
          aspectRatio="21/9"
          fetchPriority="high"
        />

        <MotionDiv 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {project.meta && (
            <div className="case-meta">
              {Object.entries(project.meta).map(([key, value]) => (
                <div key={key} className="case-meta-item">
                  <span className="case-meta-label">
                    {key === 'projectType' ? 'Type' : key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}
                  </span>
                  <span className="case-meta-value">{value}</span>
                </div>
              ))}
            </div>
          )}
        </MotionDiv>

        <Reveal delay={0.1}>
          <h1 className="case-title">{project.title}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="case-subtitle">{project.description}</p>
        </Reveal>

        <MotionDiv 
          className="case-links"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {project.live && project.live !== '#' && (
            <div className="btn-tray">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary" aria-label={`Visit ${project.title} Live Site`}>
                <Icon icon="lucide:external-link" width={16} /> Live Site
              </a>
            </div>
          )}
          {project.github && project.github !== '#' && (
            <div className="btn-tray">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn" aria-label={`View ${project.title} Source Code`}>
                <Icon icon="lucide:github" width={16} /> View Code
              </a>
            </div>
          )}
        </MotionDiv>
      </section>

      {/* Dynamic Sections Renderer */}
      <MotionDiv 
        className="case-study-sections"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {sections.map((section, index) => {
          const num = (index + 1).toString().padStart(2, '0');
          
          switch(section.type) {
            case 'overview': return <OverviewSection key={index} data={section.content} number={num} />;
            case 'challenges': return <ChallengesSection key={index} data={section.content} number={num} />;
            case 'solution': return <SolutionSection key={index} data={section.content} number={num} />;
            case 'tech-stack': return <TechStackSection key={index} data={section.content} number={num} />;
            case 'results': return <ResultsSection key={index} data={section.content} number={num} />;
            case 'gallery': return <GallerySection key={index} data={section.content} number={num} />;
            default: return null;
          }
        })}
      </MotionDiv>

      {/* Next Project */}
      {(() => {
        const currentIndex = PROJECTS.findIndex(p => p.id === id);
        const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
        return (
          <section className="next-project">
            <Reveal width="100%">
              <p className="next-label">Next Project</p>
              <h2 className="next-title">{nextProject.title}</h2>
              <div className="btn-tray">
                <Link to={`/case-study/${nextProject.id}`} className="btn btn-primary">
                  View Project <Icon icon="lucide:arrow-right" width={16} />
                </Link>
              </div>
            </Reveal>
          </section>
        );
      })()}
    </>
  );
}
