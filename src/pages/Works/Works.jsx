import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ProjectCard from '../../components/ProjectCard';
import Reveal from '../../components/Reveal';
import { PROJECTS } from '../../data/projects';


export default function Works() {
  return (
    <Layout>
      <SEO 
        title="Works" 
        description="Explore the project portfolio of Christian Akabueze, featuring modern web applications, e-commerce platforms, and high-performance digital products."
      />
      <nav className="breadcrumb">
        <Link to="/"><Icon icon="lucide:arrow-left" width={16} />Back to Home</Link>
        <span className="separator">/</span>
        <span style={{ color: 'var(--muted-foreground)' }}>Works</span>
      </nav>

      <Reveal width="100%">
        <h1 className="section-title">Works</h1>
      </Reveal>

      <section className="work-section" style={{ animationDelay: '0.1s' }}>
        <div className="work-grid">
          {PROJECTS.map((p) => <ProjectCard key={p.id} {...p} />)}
        </div>
      </section>

      <section className="cta-section" style={{ animationDelay: '0.2s' }}>
        <div className="cta-panel">
          <div className="cta-copy">
            <p className="cta-eyebrow">Open for selected collaborations</p>
            <h2 className="cta-title">Let's build a product people remember.</h2>
            <p className="cta-text">
              Available for freelance projects, long-term front-end roles, and design-driven digital
              products that need clarity, speed, and craft.
            </p>
          </div>
          <Link to="/contact" className="btn btn-inverse">
            Start a Project <Icon icon="lucide:arrow-right" width={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
