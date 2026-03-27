import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import SEO from '../../components/SEO';
import ProjectCard from '../../components/ProjectCard';
import Reveal from '../../components/Reveal';
import CallToAction from '../../components/CallToAction';
import { PROJECTS } from '../../data/projects';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['All', ...new Set(PROJECTS.map(p => p.category))];
const MotionDiv = motion.div;

export default function Works() {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <>
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

      {/* Filter Tabs */}
      <section className="filter-section">
        <div className="filter-container">
          <div className="filter-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
                {filter === cat && (
                  <motion.div 
                    layoutId="active-pill" 
                    className="active-pill"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
          <div className="filter-fade-right" />
        </div>
      </section>

      <section className="work-section">
        <MotionDiv 
          layout 
          className="work-grid"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => (
              <MotionDiv
                layout
                key={p.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 260, 
                  damping: 25,
                  delay: idx * 0.05 
                }}
              >
                <ProjectCard {...p} />
              </MotionDiv>
            ))}
          </AnimatePresence>
        </MotionDiv>
      </section>

      <CallToAction withReveal={true} />
    </>
  );
}
