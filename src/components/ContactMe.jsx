import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Clock,
  Globe,
  AlertCircle,
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    setError('Please fill in all required fields.');
    return;
  }

  setIsSubmitting(true);
  setError('');

  try {

    // Email TO YOU
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'No subject',
        message: formData.message,
        time: new Date().toLocaleString('en-US', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    // AUTO REPLY TO USER
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
      {
        to_name: formData.name,
        to_email: formData.email,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => setIsSubmitted(false), 5000);

  } catch (err) {
    console.error('EmailJS error:', err);
    setError('Failed to send message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    { icon: Mail,   title: 'Email',        content: 'a.y.nadeeshaaththanayaka@gmail.com', link: 'mailto:a.y.nadeeshaaththanayaka@gmail.com', color: '#7c8cf8' },
    { icon: Phone,  title: 'Phone',        content: '+94 76 287 3746',    link: 'tel:+94762873746',          color: '#e879a0' },
    { icon: MapPin, title: 'Location',     content: 'Colombo, Sri Lanka', link: null,                        color: '#34d399' },
    { icon: Clock,  title: 'Availability', content: 'Mon – Fri, 9AM – 6PM', link: null,                     color: '#fbbf24' },
  ];

  const socialLinks = [
    { icon: Github,   href: 'https://github.com',    label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com',  label: 'LinkedIn' },
    { icon: Twitter,  href: 'https://twitter.com',   label: 'Twitter' },
    { icon: Globe,    href: 'https://portfolio.com', label: 'Portfolio' },
  ];

  const stripItems = [
    'Let\'s Collaborate',
    'Open to Opportunities',
    'Remote Friendly',
    'Quick Turnaround',
    'Professional',
  ];

  return (
    <div ref={sectionRef} className="ct-root">
      <div className="ct-grid-bg" />
      <div className="ct-glow-1" />
      <div className="ct-glow-2" />

      <div className={`ct-inner ${isVisible ? 'ct-in' : ''}`}>

        {/* ── Header ── */}
        <header className="ct-header">
          <div className="ct-eyebrow">
            <span className="ct-eyebrow-line" />
            <span>Get In Touch</span>
            <span className="ct-eyebrow-line" />
          </div>
          <h2 className="ct-title">
            Let's Work <em className="ct-title-em">Together</em>
          </h2>
          <p className="ct-subtitle">
            Have a project in mind or just want to chat? Drop me a message and
            I'll get back to you as soon as possible.
          </p>
        </header>

        {/* ── Layout ── */}
        <div className="ct-layout">

          {/* LEFT — Form */}
          <div className="ct-form-wrap">
            <div className="ct-form-inner">

              {/* Panel header */}
              <div className="ct-panel-header">
                <div className="ct-panel-icon">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <div className="ct-panel-title">Send a Message</div>
                  <div className="ct-panel-sub">Fill in the form and I'll respond within 24 hours</div>
                </div>
              </div>

              {/* Alerts */}
              {isSubmitted && (
                <div className="ct-alert ct-alert-success">
                  <CheckCircle size={20} />
                  <div>
                    <strong>Message sent!</strong>
                    <p>Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              )}
              {error && (
                <div className="ct-alert ct-alert-error">
                  <AlertCircle size={20} />
                  <div>
                    <strong>Error</strong>
                    <p>{error}</p>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate>
                <div className="ct-form-row">
                  <div className="ct-form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="ct-form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="ct-form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                  />
                </div>

                <div className="ct-form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="ct-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="ct-spinner" />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT — Info stack */}
          <div className="ct-right">

            {/* Contact info cards */}
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={i}
                  className="ct-info-card"
                  style={{ '--ic': info.color }}
                >
                  <div className="ct-ic-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="ct-ic-label">{info.title}</div>
                    <div className="ct-ic-val">
                      {info.link
                        ? <a href={info.link}>{info.content}</a>
                        : info.content}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Social links */}
            <div className="ct-social-wrap">
              <div className="ct-social-label">Connect With Me</div>
              <div className="ct-social-grid">
                {socialLinks.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={i}
                      href={s.href}
                      className="ct-social-item"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={18} />
                      <span>{s.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response card */}
            <div className="ct-response-card">
              <div className="ct-resp-num">01</div>
              <div className="ct-resp-title">Quick Response Guaranteed</div>
              <div className="ct-resp-divider">
                <span className="ct-resp-fill" />
              </div>
              <p className="ct-resp-body">
                I typically respond within 24 hours during business days.
                Looking forward to connecting with you.
              </p>
              <div className="ct-resp-tag">
                <CheckCircle size={11} />
                Always available for great projects
              </div>
            </div>

          </div>
        </div>

        {/* ── Footer strip ── */}
        <div className="ct-footer-strip">
          {stripItems.map((label, i, arr) => (
            <React.Fragment key={i}>
              <span className="ct-strip-item">{label}</span>
              {i < arr.length - 1 && <span className="ct-strip-dot">·</span>}
            </React.Fragment>
          ))}
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Root ── */
        .ct-root {
          min-height: 100vh;
          background: #080c14;
          position: relative;
          overflow: hidden;
          padding: 100px 48px 80px;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Background ── */
        .ct-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none;
        }

        .ct-glow-1 {
          position: absolute;
          top: -200px; left: -200px;
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(124,140,248,0.12) 0%, transparent 70%);
          pointer-events: none;
          animation: ct-drift1 18s ease-in-out infinite alternate;
        }

        .ct-glow-2 {
          position: absolute;
          bottom: -150px; right: -100px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(52,211,153,0.09) 0%, transparent 70%);
          pointer-events: none;
          animation: ct-drift2 22s ease-in-out infinite alternate;
        }

        @keyframes ct-drift1 {
          from { transform: translate(0, 0); }
          to   { transform: translate(80px, 60px); }
        }
        @keyframes ct-drift2 {
          from { transform: translate(0, 0); }
          to   { transform: translate(-60px, -40px); }
        }

        /* ── Inner wrapper ── */
        .ct-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .ct-inner.ct-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Header ── */
        .ct-header {
          margin-bottom: 72px;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .ct-eyebrow {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #4a5568;
          margin-bottom: 28px;
        }

        .ct-eyebrow-line {
          display: block;
          width: 32px; height: 1px;
          background: #4a5568;
        }

        .ct-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(52px, 6vw, 60px);
          font-weight: 400;
          line-height: 1.0;
          color: #f0f4ff;
          letter-spacing: -1.5px;
          margin-bottom: 24px;
        }

        .ct-title-em {
          font-style: italic;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ct-subtitle {
          margin: 0 auto;
          font-size: 17px;
          line-height: 1.75;
          color: #64748b;
          font-weight: 300;
          max-width: 520px;
        }

        /* ── Layout grid ── */
        .ct-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 24px;
          align-items: start;
          margin-bottom: 0;
        }

        /* ── Form panel ── */
        .ct-form-wrap {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          overflow: hidden;
        }

        .ct-form-inner {
          padding: 40px;
          background: #0b1120;
          position: relative;
        }

        .ct-form-inner::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: #7c8cf8;
        }

        /* Panel header */
        .ct-panel-header {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 36px;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .ct-panel-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7c8cf8;
          background: rgba(124,140,248,0.1);
          border: 1px solid rgba(124,140,248,0.22);
          flex-shrink: 0;
        }

        .ct-panel-title {
          font-family: 'DM Serif Display', serif;
          font-size: 26px;
          color: #f0f4ff;
          letter-spacing: -0.5px;
          margin-bottom: 4px;
        }

        .ct-panel-sub {
          font-size: 13px;
          color: #8a8e96;
          font-weight: 300;
        }

        /* Alerts */
        .ct-alert {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 20px;
          border-radius: 12px;
          margin-bottom: 28px;
          font-size: 13px;
          animation: ct-fadein 0.4s ease;
        }

        .ct-alert strong {
          display: block;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 3px;
        }

        .ct-alert p {
          margin: 0;
          font-weight: 300;
          opacity: 0.85;
        }

        .ct-alert-success {
          background: rgba(52,211,153,0.08);
          border: 1px solid rgba(52,211,153,0.2);
          color: #6ee7b7;
        }

        .ct-alert-error {
          background: rgba(248,113,113,0.08);
          border: 1px solid rgba(248,113,113,0.2);
          color: #fca5a5;
        }

        @keyframes ct-fadein {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Form fields */
        .ct-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .ct-form-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }

        .ct-form-group label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #9aabc9;
        }

        .ct-form-group input,
        .ct-form-group textarea {
          padding: 14px 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          color: #f0f4ff;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          outline: none;
          transition: all 0.3s ease;
        }

        .ct-form-group input::placeholder,
        .ct-form-group textarea::placeholder {
          color: #737981;
        }

        .ct-form-group input:focus,
        .ct-form-group textarea:focus {
          background: rgba(124,140,248,0.06);
          border-color: rgba(124,140,248,0.35);
        }

        .ct-form-group textarea {
          resize: vertical;
          min-height: 130px;
        }

        /* Submit button */
        .ct-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 16px 36px;
          background: linear-gradient(120deg, rgba(124,140,248,0.15), rgba(232,121,160,0.12));
          border: 1px solid rgba(124,140,248,0.3);
          border-radius: 12px;
          color: #a5b4fc;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.3px;
        }

        .ct-submit-btn:hover:not(:disabled) {
          background: rgba(124,140,248,0.2);
          border-color: rgba(124,140,248,0.5);
          color: #f0f4ff;
          transform: translateY(-2px);
        }

        .ct-submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        /* Spinner */
        .ct-spinner {
          width: 18px; height: 18px;
          border: 2px solid rgba(165,180,252,0.3);
          border-top-color: #a5b4fc;
          border-radius: 50%;
          animation: ct-spin 0.8s linear infinite;
          flex-shrink: 0;
        }

        @keyframes ct-spin {
          to { transform: rotate(360deg); }
        }

        /* ── Right column ── */
        .ct-right {
          display: flex;
          flex-direction: column;
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          overflow: hidden;
        }

        /* Info cards */
        .ct-info-card {
          padding: 22px 28px;
          background: #0b1120;
          display: flex;
          align-items: center;
          gap: 18px;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease;
        }

        .ct-info-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--ic);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ct-info-card:hover {
          background: #0f1929;
        }

        .ct-info-card:hover::before {
          transform: scaleX(1);
        }

        .ct-ic-icon {
          width: 42px; height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ic);
          background: color-mix(in srgb, var(--ic) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--ic) 20%, transparent);
          flex-shrink: 0;
        }

        .ct-ic-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #45829b;
          margin-bottom: 4px;
        }

        .ct-ic-val {
          font-size: 14px;
          color: #94a3b8;
          font-weight: 400;
        }

        .ct-ic-val a {
          color: var(--ic);
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .ct-ic-val a:hover {
          opacity: 0.8;
        }

        /* Social links */
        .ct-social-wrap {
          padding: 28px;
          background: #0b1120;
        }

        .ct-social-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #559eb1;
          margin-bottom: 16px;
        }

        .ct-social-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .ct-social-item {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 13px 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          text-decoration: none;
          color: #6f7885;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .ct-social-item:hover {
          background: rgba(255,255,255,0.06);
          color: #f0f4ff;
          transform: translateY(-2px);
        }

        /* Response card */
        .ct-response-card {
          padding: 28px;
          background: #0b1120;
          position: relative;
          overflow: hidden;
        }

        .ct-response-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at bottom right, rgba(52,211,153,0.06) 0%, transparent 60%);
          pointer-events: none;
        }

        .ct-resp-num {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #8596b4;
          margin-bottom: 10px;
        }

        .ct-resp-title {
          font-size: 15px;
          font-weight: 500;
          color: #cbd5e1;
          margin-bottom: 10px;
        }

        .ct-resp-divider {
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin-bottom: 12px;
          position: relative;
          overflow: hidden;
        }

        .ct-resp-fill {
          position: absolute;
          top: 0; left: 0;
          height: 100%;
          width: 60%;
          background: #34d399;
          opacity: 0.5;
        }

        .ct-resp-body {
          font-size: 13px;
          color: #828fa5;
          font-weight: 300;
          line-height: 1.7;
          margin: 0;
          position: relative;
          z-index: 1;
        }

        .ct-resp-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 11px;
          background: rgba(52,211,153,0.08);
          border: 1px solid rgba(52,211,153,0.18);
          border-radius: 20px;
          color: #6ee7b7;
          font-size: 11px;
          font-weight: 500;
          margin-top: 14px;
          position: relative;
          z-index: 1;
        }

        /* ── Footer strip ── */
        .ct-footer-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          padding: 52px 0 0;
          margin-top: 8px;
        }

        .ct-strip-item {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #3b879e;
          transition: color 0.3s ease;
        }

        .ct-strip-item:hover {
          color: #4a5568;
        }

        .ct-strip-dot {
          color: #1e293b;
          font-size: 18px;
          line-height: 1;
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .ct-root { padding: 80px 32px 60px; }
          .ct-layout { grid-template-columns: 1fr 340px; gap: 20px; }
        }

        @media (max-width: 900px) {
          .ct-root { padding: 70px 28px 60px; }
          .ct-layout { grid-template-columns: 1fr; }
          .ct-form-inner { padding: 28px; }
        }

        @media (max-width: 640px) {
          .ct-root { padding: 60px 18px 50px; }
          .ct-title { font-size: 44px; }
          .ct-form-row { grid-template-columns: 1fr; }
          .ct-social-grid { grid-template-columns: 1fr; }
          .ct-footer-strip { gap: 12px; }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;