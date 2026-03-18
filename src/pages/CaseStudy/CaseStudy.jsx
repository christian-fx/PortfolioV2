import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Layout from '../../components/Layout';
import './CaseStudy.css';

const TECH_STACK = [
  { icon: 'skill-icons:react-dark', label: 'React 18' },
  { icon: 'skill-icons:typescript', label: 'TypeScript' },
  { icon: 'skill-icons:nextjs-dark', label: 'Next.js 14' },
  { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
  { icon: 'skill-icons:react-dark', label: 'TanStack Query' },
  { icon: 'simple-icons:zustand', label: 'Zustand' },
  { icon: 'skill-icons:d3-dark', label: 'D3.js' },
  { icon: 'skill-icons:vercel-dark', label: 'Vercel Edge' },
  { icon: 'skill-icons:postgresql-dark', label: 'PostgreSQL' },
];

const RESULTS = [
  { number: '0.8s', label: 'Time to Interactive' },
  { number: '60', label: 'FPS During Updates' },
  { number: '-65%', label: 'Bounce Rate' },
  { number: '4.9★', label: 'User Rating' },
];

const GALLERY = [
  { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/94f1209d-354a-4bbf-8387-9d17992f8af2.jpg', alt: 'Dashboard Overview', caption: 'Main dashboard with portfolio overview' },
  { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/dbbf9b07-e2b2-46e4-9fe6-067c9dd31bbd.jpg', alt: 'Analytics View', caption: 'Detailed analytics with custom date ranges' },
  { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/2931f37a-6689-4bd4-86c9-9276f20d1539.jpg', alt: 'Mobile View', caption: 'Responsive mobile experience' },
  { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/d298266c-443a-4430-a988-7c164818a359.jpg', alt: 'Dark Mode', caption: 'Dark mode for reduced eye strain' },
];

export default function CaseStudy() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/works"><Icon icon="lucide:arrow-left" width={16} />Works</Link>
        <span className="separator">/</span>
        <span style={{ color: 'var(--muted-foreground)' }}>Fintech Dashboard</span>
      </nav>

      {/* Hero */}
      <section className="case-hero">
        <img
          src="https://storage.googleapis.com/banani-generated-images/generated-images/94f1209d-354a-4bbf-8387-9d17992f8af2.jpg"
          alt="Fintech Dashboard Hero"
          className="case-hero-image"
        />

        <div className="case-meta">
          {[
            { label: 'Client', value: 'FinanceFlow Inc.' },
            { label: 'Year', value: '2024' },
            { label: 'Role', value: 'Lead Frontend Developer' },
            { label: 'Duration', value: '4 Months' },
          ].map(({ label, value }) => (
            <div key={label} className="case-meta-item">
              <span className="case-meta-label">{label}</span>
              <span className="case-meta-value">{value}</span>
            </div>
          ))}
        </div>

        <h1 className="case-title">Fintech Dashboard</h1>
        <p className="case-subtitle">
          A comprehensive financial management platform enabling real-time portfolio tracking, expense
          analytics, and cryptocurrency monitoring for modern investors.
        </p>

        <div className="case-links">
          <a href="#" className="btn btn-primary"><Icon icon="lucide:external-link" width={16} />Live Site</a>
          <a href="#" className="btn"><Icon icon="lucide:github" width={16} />View Code</a>
        </div>
      </section>

      {/* 01 — Overview */}
      <section className="case-section">
        <div className="section-header">
          <p className="section-number">01 / Overview</p>
          <h2 className="case-section-title">Project Background</h2>
        </div>
        <div className="section-content">
          <p>FinanceFlow Inc. approached me to rebuild their legacy dashboard that was struggling with performance issues and poor user engagement. The existing platform, built with jQuery and outdated charting libraries, was experiencing 8-second load times and 40% bounce rates.</p>
          <p>The goal was to create a modern, performant dashboard that could handle real-time data streams while maintaining 60fps animations and sub-second initial load times. The platform needed to serve both retail investors managing personal portfolios and financial advisors overseeing multiple client accounts.</p>
        </div>
      </section>

      {/* 02 — Challenges */}
      <section className="case-section">
        <div className="section-header">
          <p className="section-number">02 / Challenges</p>
          <h2 className="case-section-title">Key Challenges</h2>
        </div>
        <div className="section-content">
          <p>The project presented several complex technical and design challenges that required careful architectural decisions and innovative solutions.</p>
        </div>
        <div className="challenge-grid">
          {[
            { icon: 'lucide:zap', title: 'Real-time Performance', desc: 'Handling 1000+ WebSocket updates per second without UI jank or memory leaks' },
            { icon: 'lucide:shield', title: 'Data Security', desc: 'Implementing bank-grade encryption while maintaining instant data access' },
            { icon: 'lucide:smartphone', title: 'Responsive Complexity', desc: 'Adapting dense financial data layouts for mobile without information loss' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="challenge-card">
              <div className="challenge-icon"><Icon icon={icon} width={24} /></div>
              <h3 className="challenge-title">{title}</h3>
              <p className="challenge-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 03 — Solution */}
      <section className="case-section">
        <div className="section-header">
          <p className="section-number">03 / Solution</p>
          <h2 className="case-section-title">Approach &amp; Implementation</h2>
        </div>
        <div className="section-content">
          <p>I architected a solution focused on incremental loading, virtualized rendering, and strategic state management to deliver a dashboard that feels instant regardless of data volume.</p>
        </div>
        <div className="solution-list">
          {[
            { num: '01', title: 'Virtualized Data Grids', desc: 'Implemented windowing techniques rendering only visible rows, reducing DOM nodes from 10,000 to 50. Combined with React Query\'s optimistic updates for perceived instant interactions.' },
            { num: '02', title: 'WebSocket Architecture', desc: 'Built a custom hook-based WebSocket manager with automatic reconnection, message batching, and priority queuing. Critical price updates render in 16ms, background analytics deferred to idle time.' },
            { num: '03', title: 'Adaptive Charting System', desc: 'Created a D3.js wrapper that automatically switches rendering modes—SVG for precision on desktop, Canvas for performance on mobile, WebGL for 10k+ point datasets.' },
            { num: '04', title: 'Edge-First Deployment', desc: 'Leveraged Vercel Edge Functions for API aggregation, reducing client-side requests from 12 to 1. Static dashboard shell loads in 200ms, data streams progressively enhance.' },
          ].map(({ num, title, desc }) => (
            <div key={num} className="solution-item">
              <div className="solution-number">{num}</div>
              <div className="solution-content">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — Tech Stack */}
      <section className="case-section">
        <div className="section-header">
          <p className="section-number">04 / Technology</p>
          <h2 className="case-section-title">Tech Stack</h2>
        </div>
        <div className="section-content">
          <p>Carefully selected technologies prioritizing type safety, developer experience, and runtime performance.</p>
        </div>
        <div className="tech-grid">
          {TECH_STACK.map(({ icon, label }) => (
            <span key={label} className="tech-badge">
              <Icon icon={icon} width={18} />{label}
            </span>
          ))}
        </div>
      </section>

      {/* 05 — Results */}
      <section className="case-section">
        <div className="section-header">
          <p className="section-number">05 / Results</p>
          <h2 className="case-section-title">Impact &amp; Metrics</h2>
        </div>
        <div className="section-content">
          <p>The rebuild delivered transformative improvements across all key performance indicators and user satisfaction metrics.</p>
        </div>
        <div className="results-grid">
          {RESULTS.map(({ number, label }) => (
            <div key={label} className="result-card">
              <div className="result-number">{number}</div>
              <div className="result-label">{label}</div>
            </div>
          ))}
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            Christian transformed our struggling platform into something our users genuinely love. The attention
            to performance details—down to optimizing re-renders for each cell in our data grids—showed
            engineering excellence we hadn't seen before. Our advisors now complete portfolio reviews in half the time.
          </p>
          <div className="testimonial-author">
            <img src="https://storage.googleapis.com/banani-generated-images/generated-images/d298266c-443a-4430-a988-7c164818a359.jpg" alt="Sarah Chen" className="author-avatar" />
            <div className="author-info">
              <h5>Sarah Chen</h5>
              <p>VP of Product, FinanceFlow Inc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — Gallery */}
      <section className="case-section">
        <div className="section-header">
          <p className="section-number">06 / Gallery</p>
          <h2 className="case-section-title">Screenshots</h2>
        </div>
        <div className="gallery-grid">
          {GALLERY.map(({ src, alt, caption }) => (
            <div key={alt} className="gallery-item">
              <img src={src} alt={alt} />
              <div className="gallery-caption">{caption}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Project */}
      <section className="next-project">
        <p className="next-label">Next Project</p>
        <h2 className="next-title">Aura E-Commerce</h2>
        <Link to="/case-study" className="btn btn-primary">
          View Case Study <Icon icon="lucide:arrow-right" width={16} />
        </Link>
      </section>
    </Layout>
  );
}
