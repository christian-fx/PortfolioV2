import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import SEO from '../../components/SEO';
import './Resume.css';

export default function Resume() {
  return (
    <>
      <SEO 
        title="Resume | Christian Akabueze" 
        description="View the professional resume of Christian Akabueze." 
      />
      
      <div className="resume-viewer-page">
        <header className="resume-viewer-header">
           <Link to="/" className="resume-viewer-btn">
              <Icon icon="lucide:arrow-left" width={18} /> Back to Home
            </Link>
            
            <div className="resume-viewer-nav">
              <a 
                href="/My Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="resume-viewer-btn resume-viewer-btn-primary"
              >
                <Icon icon="lucide:download" width={18} /> Download PDF
              </a>
            </div>
        </header>

        <main className="resume-viewer-content">
          <iframe 
            loading="lazy" 
            className="resume-viewer-iframe"
            src="/My Resume.pdf" 
            title="Christian Akabueze Resume"
          >
          </iframe>
        </main>
      </div>
    </>
  );
}
