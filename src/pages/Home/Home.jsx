import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import Reveal from '../../components/Reveal';
import { PROJECTS } from '../../data/projects';
import './Home.css';

const SOCIAL_LINKS = [
  { href: 'https://github.com/', label: 'GitHub', icon: 'lucide:github', name: 'GitHub' },
  { href: 'https://linkedin.com/', label: 'LinkedIn', icon: 'lucide:linkedin', name: 'LinkedIn' },
  { href: 'https://twitter.com/', label: 'Twitter', icon: 'fa-brands:x-twitter', name: 'Twitter' },
  { href: 'mailto:akabuezechris432@gmail.com', label: 'Email', icon: 'lucide:mail', name: 'Email' },
];

const STACK = [
  { icon: 'skill-icons:html', name: 'HTML5' },
  { icon: 'skill-icons:css', name: 'CSS3' },
  { icon: 'skill-icons:javascript', name: 'JavaScript' },
  { icon: 'skill-icons:react-dark', name: 'React' },
  { icon: 'skill-icons:nextjs-dark', name: 'Next.js' },
  { icon: 'skill-icons:typescript', name: 'TypeScript' },
  { icon: 'skill-icons:tailwindcss-dark', name: 'Tailwind' },
  { icon: 'vscode-icons:file-type-firebase', name: 'Firebase' },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-profile-row">
          <img src="/christian.JPG" alt="Christian" className="profile-image" />
          <div className="hero-heading-group">
            <Reveal delay={0.1}>
              <p className="hero-role">I'm</p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="hero-title">Christian.</h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="hero-role">A Frontend Developer.</p>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.4}>
          <p className="hero-subtitle">
            I design and build clean front-end experiences with a strong focus on clarity,
            performance, accessibility, and minimalist visual systems that feel effortless to use.
          </p>
        </Reveal>

        <div className="hero-social-block">
          <p className="hero-social-label">Here are my socials</p>
          <div className="hero-social-row">
            <div className="hero-socials">
              {SOCIAL_LINKS.map(({ href, label, icon, name }) => (
                <a key={label} href={href} className="social-item" aria-label={label}>
                  <Icon icon={icon} width={18} />
                  <span className="social-name">{name}</span>
                </a>
              ))}
            </div>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                <Icon icon="lucide:hand" width={16} /> Say Hello
              </Link>
              <a href="#" className="btn">
                Resume <Icon icon="lucide:file-text" width={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="work-section">
        <h2 className="section-title">Selected Projects</h2>
        <div className="work-grid">
          {PROJECTS.slice(0, 4).map((p) => <ProjectCard key={p.id} {...p} />)}
        </div>
        <div className="view-more-wrap">
          <Link to="/works" className="btn">View More <Icon icon="lucide:arrow-right" width={16} /></Link>
        </div>
      </section>

      {/* Stack */}
      <section className="stack-section">
        <h2 className="section-title">Tech Stack</h2>
        <div className="stack-grid">
          {STACK.map(({ icon, name }) => (
            <div key={name} className="stack-card">
              <div className="stack-icon-wrap"><Icon icon={icon} width={32} /></div>
              <span className="stack-name">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
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
