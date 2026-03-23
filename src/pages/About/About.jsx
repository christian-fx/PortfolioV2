import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Reveal from '../../components/Reveal';
import './About.css';

/* ─────────────────────────────────────────────  DATA */

const EXPERIENCES = [
  {
    role: 'Freelance Frontend Developer',
    company: 'Independent Projects',
    date: '2023 — Present',
    desc: 'Building clean, scalable front-end solutions for clients across web and product design.',
  },
  {
    role: 'Learning & Certification',
    company: 'FreeCodeCamp',
    date: '',
    desc: 'Completed front-end projects and earned certification.',
    link: { href: 'https://www.freecodecamp.org/certification/christian-fx/javascript-v9', label: 'View Certificates' },
  },
];

const QUESTIONS = [
  {
    num: '01 / 06',
    question: 'What does success look like for this project?',
    answer: 'I need to understand your core objectives—whether that\'s conversion rates, user engagement, or brand perception. This shapes every technical decision I make, from animation complexity to performance budgets.',
  },
  {
    num: '02 / 06',
    question: 'Who is your primary user, and what frustrates them?',
    answer: 'Empathy drives interface design. Knowing your users\' pain points helps me prioritize features, simplify workflows, and create intuitive navigation patterns that actually solve problems.',
  },
  {
    num: '03 / 06',
    question: 'What is your realistic timeline and budget?',
    answer: 'Transparency prevents scope creep. I use this to recommend the right approach—whether that\'s an MVP for quick validation or a polished product for market launch. Constraints breed creativity.',
  },
  {
    num: '04 / 06',
    question: 'How will we measure progress and quality?',
    answer: 'I establish clear milestones and feedback loops early. This includes code review schedules, demo cadence, and performance benchmarks (Lighthouse scores, accessibility audits) to ensure we stay aligned.',
  },
  {
    num: '05 / 06',
    question: 'What existing tech stack or constraints must I respect?',
    answer: 'Legacy systems, CMS requirements, or team expertise matter. I architect solutions that integrate smoothly with your infrastructure rather than forcing incompatible technologies that create technical debt.',
  },
  {
    num: '06 / 06',
    question: 'What happens after launch?',
    answer: 'I build for maintainability. Understanding your long-term plans—whether that\'s scaling, adding features, or handoff to an internal team—influences documentation, component structure, and deployment strategy.',
  },
];

const TECH_ITEMS = [
  { icon: 'skill-icons:react-dark', label: 'React' },
  { icon: 'skill-icons:typescript', label: 'TypeScript' },
  { icon: 'skill-icons:nodejs-dark', label: 'Node.js' },
  { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind' },
  { icon: 'skill-icons:vuejs-dark', label: 'Vue' },
  { icon: 'skill-icons:svelte', label: 'Svelte' },
  { icon: 'skill-icons:figma-dark', label: 'Figma' },
];

/* ─────────────────────────────────────────────  COMPONENTS */

function FlipCard({ num, question, answer, flipped, onFlip }) {
  return (
    <div className={`question-card${flipped ? ' flipped' : ''}`} onClick={onFlip}>
      <div className="question-card-inner">
        <div className="question-card-front">
          <div className="question-number">{num}</div>
          <div className="question-text">{question}</div>
          <div className="question-icon"><Icon icon="lucide:flip-horizontal" width={20} /></div>
        </div>
        <div className="question-card-back">
          <div className="question-answer-label">Why I Ask</div>
          <div className="question-answer">{answer}</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────  PAGE */

export default function About() {
  const [activeCard, setActiveCard] = useState(null);

  const handleFlip = (idx) => setActiveCard(prev => prev === idx ? null : idx);
  return (
    <Layout>
      <SEO title="About" />
      {/* Hero */}
      <section className="about-hero">
        <Reveal delay={0.1}>
          <h1 className="hero-name">I'm Christian.</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="hero-title-about">A Front End Developer.</h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="hero-summary">
            I build scalable, performant, and accessible front-end architectures. Specializing in minimal
            interfaces, I focus on writing clean code that bridges the gap between design and robust engineering.
          </p>
        </Reveal>
        <div className="hero-actions-about">
          <Link to="/contact" className="btn btn-primary">
            Say Hello <Icon icon="lucide:hand" width={16} />
          </Link>
          <a href="#" className="btn">
            Resume <Icon icon="lucide:file-text" width={16} />
          </a>
        </div>
      </section>

      {/* About Me */}
      <section className="about-me-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-me-copy">
          <p className="about-me-text">
            I'm a front-end developer focused on crafting clean digital experiences that feel intentional
            from the first interaction to the last detail. My work balances structure, speed, and visual restraint.
          </p>
          <p className="about-me-text">
            I enjoy turning complex product ideas into simple interfaces, building scalable component systems,
            and shipping responsive experiences that stay consistent across devices.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="experience-section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {EXPERIENCES.map((exp) => (
            <div key={exp.role} className="experience-item">
              <div className="experience-header">
                <span className="experience-role">{exp.role}</span>
                {exp.date && <span className="experience-date">{exp.date}</span>}
              </div>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-desc">
                {exp.desc}
                {exp.link && (
                  <> <a href={exp.link.href} target="_blank" rel="noopener noreferrer">{exp.link.label}</a></>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Discovery Questions — Flip Cards */}
      <section className="questions-section">
        <div className="questions-header">
          <h2 className="section-title">Discovery Questions</h2>
          <p className="questions-subtitle">
            Key questions I ask to ensure clarity, alignment, and a smooth collaboration on every project.
            Flip each card to see my process and know what to expect when working together.
          </p>
        </div>
        <div className="questions-grid">
          {QUESTIONS.map((q, i) => (
            <FlipCard
              key={q.num}
              num={q.num}
              question={q.question}
              answer={q.answer}
              flipped={activeCard === i}
              onFlip={() => handleFlip(i)}
            />
          ))}
        </div>
        <div className="question-hint">
          <Icon icon="lucide:mouse-pointer-2" width={16} />
          <span>Click any card to flip and reveal</span>
        </div>
      </section>

      {/* Tech Marquee */}
      <section className="tech-section">
        <div className="tech-marquee">
          <div className="tech-track">
            {/* Doubled for seamless loop */}
            {[...TECH_ITEMS, ...TECH_ITEMS].map((item, i) => (
              <div key={i} className="tech-item">
                <Icon icon={item.icon} width={18} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
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
