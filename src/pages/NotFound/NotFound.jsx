import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Layout from '../../components/Layout';
import './NotFound.css';

export default function NotFound() {
  return (
    <Layout>
      <section className="not-found-section">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-desc">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            <Icon icon="lucide:home" width={16} /> Back to Home
          </Link>
          <Link to="/works" className="btn">
            View Projects <Icon icon="lucide:folder-open" width={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
