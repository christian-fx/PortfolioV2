import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';

const PROJECTS = [
  {
    title: 'Fintech Dashboard',
    description: 'A clean dashboard for tracking daily expenses, managing portfolios, and monitoring crypto assets.',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/94f1209d-354a-4bbf-8387-9d17992f8af2.jpg',
    tags: [
      { icon: 'skill-icons:react-dark', label: 'React' },
      { icon: 'skill-icons:typescript', label: 'TypeScript' },
      { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind' },
    ],
  },
  {
    title: 'Aura E-Commerce',
    description: 'Headless storefront with dynamic routing, cart management, and seamless Stripe integration.',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/dbbf9b07-e2b2-46e4-9fe6-067c9dd31bbd.jpg',
    tags: [
      { icon: 'skill-icons:nextjs-dark', label: 'Next.js' },
      { icon: 'simple-icons:zustand', label: 'Zustand' },
      { icon: 'simple-icons:framer', label: 'Framer Motion' },
    ],
  },
  {
    title: 'Nexus Platform',
    description: 'Landing page and auth flow for a B2B SaaS platform focused on async collaboration.',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/2931f37a-6689-4bd4-86c9-9276f20d1539.jpg',
    tags: [
      { icon: 'skill-icons:vuejs-dark', label: 'Vue 3' },
      { icon: 'skill-icons:sass', label: 'Sass' },
      { icon: 'vscode-icons:file-type-firebase', label: 'Firebase' },
    ],
  },
  {
    title: 'Studio Agency',
    description: 'Portfolio for a creative agency with scroll-led storytelling and 3D.',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/d298266c-443a-4430-a988-7c164818a359.jpg',
    tags: [
      { icon: 'skill-icons:javascript', label: 'Vanilla JS' },
      { icon: 'skill-icons:threejs-dark', label: 'Three.js' },
      { icon: 'simple-icons:greensock', label: 'GSAP' },
    ],
  },
  {
    title: 'Health Tracker',
    description: 'Wellness application for tracking fitness goals, nutrition, and mental health metrics.',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/94f1209d-354a-4bbf-8387-9d17992f8af2.jpg',
    tags: [
      { icon: 'skill-icons:react-dark', label: 'React Native' },
      { icon: 'skill-icons:typescript', label: 'TypeScript' },
      { icon: 'skill-icons:supabase-dark', label: 'Supabase' },
    ],
  },
  {
    title: 'Design System',
    description: 'A comprehensive design system with 50+ components, accessibility-first, and dark mode support.',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/2931f37a-6689-4bd4-86c9-9276f20d1539.jpg',
    tags: [
      { icon: 'skill-icons:storybook', label: 'Storybook' },
      { icon: 'skill-icons:react-dark', label: 'React' },
      { icon: 'skill-icons:figma-dark', label: 'Figma' },
    ],
  },
];

export default function Works() {
  return (
    <Layout>
      <nav className="breadcrumb">
        <Link to="/"><Icon icon="lucide:arrow-left" width={16} />Back to Home</Link>
        <span className="separator">/</span>
        <span style={{ color: 'var(--muted-foreground)' }}>Works</span>
      </nav>

      <h1 className="section-title">Works</h1>

      <section className="work-section" style={{ animationDelay: '0.1s' }}>
        <div className="work-grid">
          {PROJECTS.map((p) => <ProjectCard key={p.title} {...p} />)}
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
