import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Mail, Loader2, CheckCircle, Send, Check, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../components/SEO';
import Reveal from '../../components/Reveal';
import './Contact.css';

const SOCIALS = [
  { href: 'https://github.com/christian-fx', label: 'GitHub', icon: 'lucide:github' },
  { href: 'https://www.linkedin.com/in/tochukwu-akabueze-bb2b46391', label: 'LinkedIn', icon: 'lucide:linkedin' },
  { href: 'https://x.com/too_chi_', label: 'Twitter', icon: 'tabler:brand-x' },
];

const MotionSection = motion.section;

const EMAIL = 'akabuezechris432@gmail.com';

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [toast, setToast] = useState(false);
  const formRef = useRef();
  
  const MotionDiv = motion.div;
  const MotionForm = motion.form;

  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.message.trim()) newErrors.message = 'Please enter a message';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus('sending');


    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    /* Development fallback so UI works before you configure EmailJS */
    if (SERVICE_ID === 'YOUR_SERVICE_ID') {
      setTimeout(() => {
        setStatus('success');
        setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      }, 1500);
      return;
    }

    /* Live Submission */
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setToast(true);
      setTimeout(() => setToast(false), 2000);
    });
  };

  return (
    <>
      <SEO 
        title="Contact" 
        description="Get in touch with Christian Akabueze for frontend engineering roles, freelance collaborations, or product design inquiries."
      />
      <section className="contact-hero">
        <Reveal delay={0.1}>
          <h1>Let's connect</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p>Feel free to reach out for collaborations, opportunities, or just a chat. I'll get back to you as soon as possible.</p>
        </Reveal>
      </section>

      <section className="contact-form-section">
        <MotionForm 
          key="contact-form"
          ref={formRef} 
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
        <div className="form-row">
          <div className={`form-group ${errors.firstName ? 'has-error' : ''}`}>
            <label htmlFor="firstName">First name</label>
            <div className="input-wrap">
              <input type="text" id="firstName" name="firstName" placeholder="Christian"
                value={form.firstName} onChange={e => handleChange('firstName', e.target.value)} />
            </div>
            {errors.firstName && <span className="error-text">{errors.firstName}</span>}
          </div>
          <div className={`form-group ${errors.lastName ? 'has-error' : ''}`}>
            <label htmlFor="lastName">Last name</label>
            <div className="input-wrap">
              <input type="text" id="lastName" name="lastName" placeholder="Akabueze"
                value={form.lastName} onChange={e => handleChange('lastName', e.target.value)} />
            </div>
            {errors.lastName && <span className="error-text">{errors.lastName}</span>}
          </div>
        </div>
        <div className={`form-group form-mb ${errors.email ? 'has-error' : ''}`}>
          <label htmlFor="email">Email</label>
          <div className="input-wrap">
            <input type="email" id="email" name="email" placeholder="hello@gmail.com"
              value={form.email} onChange={e => handleChange('email', e.target.value)} />
          </div>
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <div className="form-group form-mb">
          <label htmlFor="subject">Subject</label>
          <div className="input-wrap">
            <input type="text" id="subject" name="subject" placeholder="Portfolio Collaboration"
              value={form.subject} onChange={e => handleChange('subject', e.target.value)} />
          </div>
        </div>
        <div className={`form-group form-mb ${errors.message ? 'has-error' : ''}`}>
          <label htmlFor="message">Message</label>
          <div className="input-wrap">
            <textarea id="message" name="message" placeholder="Tell me about your project or idea..."
              value={form.message} onChange={e => handleChange('message', e.target.value)} />
          </div>
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>
              <div className="submit-btn" style={{ marginTop: '24px' }}>
                <div className="btn-tray">
                  <button type="submit" className={`btn btn-primary ${status === 'success' ? 'btn-success' : ''}`} disabled={status === 'sending' || status === 'success'}>
                    {status === 'sending' && 'Sending...'}
                    {status === 'success' && 'Sent Successfully'}
                    {status === 'idle' && 'Send message'}
                    {status === 'error' && 'Send message'}
                    {status === 'sending' && <Loader2 width={16} className="btn-spinner" />}
                    {status === 'success' && <CheckCircle width={16} />}
                    {(status === 'idle' || status === 'error') && <Send width={16} />}
                  </button>
                </div>
                {status === 'error' && <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '12px' }}>Failed to send. Please try again or email me directly.</p>}
              </div>
            </MotionForm>
      </section>

      <section className="direct-section">
        <Reveal delay={0.1}>
          <h2>Prefer Social?</h2>
        </Reveal>
        <motion.div 
          className="social-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {SOCIALS.map(({ href, label, icon }) => (
            <div key={label} className="btn-tray">
              <motion.a 
                href={href} 
                className="social-item-contact" 
                aria-label={label}
                target="_blank" 
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <span style={{ width: 18, height: 18, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon icon={icon} width={18} />
                </span>
                {label}
              </motion.a>
            </div>
          ))}
          <motion.div 
            className="email-card"
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <Mail width={18} />
            <span className="email-text">{EMAIL}</span>
            <button className="copy-email" onClick={copyEmail} aria-label="Copy email">
              {toast ? <Check width={16} color="var(--success)" /> : <Copy width={16} color="currentColor" />}
            </button>
          </motion.div>
        </motion.div>
      </section>

      <div className={`copy-toast${toast ? ' show' : ''}`}>Copied to clipboard!</div>
    </>
  );
}
