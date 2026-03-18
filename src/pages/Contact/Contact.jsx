import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Layout from '../../components/Layout';
import Reveal from '../../components/Reveal';
import './Contact.css';

const SOCIALS = [
  { href: 'https://github.com/', label: 'GitHub', icon: 'lucide:github' },
  { href: 'https://linkedin.com/', label: 'LinkedIn', icon: 'lucide:linkedin' },
  { href: 'https://twitter.com/', label: 'Twitter', icon: 'mdi:twitter' },
];

const EMAIL = 'akabuezechris432@gmail.com';

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  const [toast, setToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setToast(true);
      setTimeout(() => setToast(false), 2000);
    });
  };

  return (
    <Layout>
      <section className="contact-hero">
        <Reveal delay={0.1}>
          <h1>Let's connect</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p>Feel free to reach out for collaborations, opportunities, or just a chat. I'll get back to you as soon as possible.</p>
        </Reveal>
      </section>

      <section className="contact-form-section">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" placeholder="Christian" required
                value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" placeholder="Santos" required
                value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
            </div>
          </div>
          <div className="form-group form-mb">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="hello@gmail.com" required
              value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="form-group form-mb">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Portfolio Collaboration"
              value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
          </div>
          <div className="form-group form-mb">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Tell me about your project or idea..." required
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
          </div>
          <div className="submit-btn">
            <button type="submit" className="btn btn-primary">
              Send message <Icon icon="lucide:send" width={16} />
            </button>
          </div>
        </form>
      </section>

      <section className="direct-section">
        <h2>Prefer Social?</h2>
        <div className="social-row">
          {SOCIALS.map(({ href, label, icon }) => (
            <a key={label} href={href} className="social-item-contact" aria-label={label}
              target="_blank" rel="noopener noreferrer">
              <Icon icon={icon} width={18} />{label}
            </a>
          ))}
          <div className="email-card">
            <Icon icon="lucide:mail" width={18} />
            <span className="email-text">{EMAIL}</span>
            <button className="copy-email" onClick={copyEmail} aria-label="Copy email">
              <Icon icon="lucide:copy" width={16} />
            </button>
          </div>
        </div>
      </section>

      <div className={`copy-toast${toast ? ' show' : ''}`}>Copied to clipboard!</div>
    </Layout>
  );
}
