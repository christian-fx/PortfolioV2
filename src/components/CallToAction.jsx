import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Reveal from './Reveal';

export default function CallToAction({ withReveal = false }) {
  const content = (
    <div className="cta-panel">
      <div className="cta-copy">
        <p className="cta-eyebrow">Open for selected collaborations</p>
        <h2 className="cta-title">Let's build a product people remember.</h2>
        <p className="cta-text">
          Available for freelance projects, long-term front-end roles, and design-driven digital
          products that need clarity, speed, and craft.
        </p>
      </div>
      <div className="btn-tray">
        <Link to="/contact" className="btn btn-inverse">
          Start a Project <Icon icon="lucide:arrow-right" width={18} />
        </Link>
      </div>
    </div>
  );

  return (
    <section className="cta-section" style={withReveal ? { animationDelay: '0.2s' } : undefined}>
      {withReveal ? (
        <Reveal width="100%">
          {content}
        </Reveal>
      ) : (
        content
      )}
    </section>
  );
}
