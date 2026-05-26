import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Send,
  MapPin,
  Phone,
  Heart,
  ArrowUp,
  Code2,
  ChevronDown,
} from 'lucide-react';

const PortfolioFooter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setEmail('');
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const currentYear = new Date().getFullYear();

  const toggleSection = (key) => {
    if (!isMobile) return;
    setOpenSection((prev) => (prev === key ? null : key));
  };

  const footerLinks = {
    nav: {
      label: 'Navigation',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    svc: {
      label: 'Services',
      links: [
        { label: 'Web Development', href: '#web-dev' },
        { label: 'Mobile Apps', href: '#mobile' },
        { label: 'UI/UX Design', href: '#design' },
        { label: 'Consulting', href: '#consulting' },
        { label: 'Code Review', href: '#review' },
      ],
    },
    res: {
      label: 'Resources',
      links: [
        { label: 'Blog', href: '#blog' },
        { label: 'Case Studies', href: '#cases' },
        { label: 'Open Source', href: '#opensource' },
        { label: 'Documentation', href: '#docs' },
        { label: 'Tutorials', href: '#tutorials' },
      ],
    },
  };

  const socialLinks = [
    { icon: Github,   href: 'https://github.com/yasirunadeeshaa',                       label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/yasiru-nadeesha-aththanayaka/', label: 'LinkedIn' },
    { icon: Twitter,  href: 'https://twitter.com',                                       label: 'Twitter' },
    { icon: Mail,     href: 'mailto:yasiru@example.com',                                 label: 'Email' },
  ];

  return (
    <footer className="pf-footer">

      {/* Animated top border */}
      <div className="pf-top-border">
        <div className="pf-border-slide" />
      </div>

      <div className="pf-container">

        {/* ── CTA ── */}
        <div className="pf-cta">
          <div className="pf-cta-eyebrow">
            <span className="pf-eyebrow-line" />
            <span>Let's Connect</span>
            <span className="pf-eyebrow-line" />
          </div>
          <h2 className="pf-cta-title">
            Have a project <em className="pf-cta-em">in mind?</em><br />
            Let's create something <em className="pf-cta-em">amazing!</em>
          </h2>
          <p className="pf-cta-sub">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        {/* ── Main grid: brand | nav | svc | res | newsletter ── */}
        <div className="pf-grid">

          {/* Brand */}
          <div className="pf-brand-col">
            <div className="pf-brand-head">
              <div className="pf-brand-logo">
                <Code2 size={22} />
              </div>
              <span className="pf-brand-name">Yasiru Nadeesha</span>
            </div>
            <p className="pf-brand-tag">
              Crafting digital experiences with passion and precision. Turning
              ideas into reality, one line of code at a time.
            </p>
            <div className="pf-contact-list">
              <div className="pf-contact-item">
                <MapPin size={14} className="pf-ci-icon" />
                <span>Baththaramulla, Sri Lanka</span>
              </div>
              <div className="pf-contact-item">
                <Phone size={14} className="pf-ci-icon" />
                <span>+94 74 176 7063</span>
              </div>
              <div className="pf-contact-item">
                <Mail size={14} className="pf-ci-icon" />
                <span>yasiru@example.com</span>
              </div>
            </div>
          </div>

          {/* Nav / Services / Resources — each its own grid column on desktop,
              collapses to accordion on mobile */}
          {Object.entries(footerLinks).map(([key, section]) => {
            const isOpen = !isMobile || openSection === key;
            return (
              <div key={key} className="pf-link-col">
                <button
                  className="pf-acc-btn"
                  onClick={() => toggleSection(key)}
                  aria-expanded={isOpen}
                >
                  <span className="pf-col-title">{section.label}</span>
                  <ChevronDown
                    size={16}
                    className={`pf-chevron${isOpen ? ' pf-chevron-open' : ''}`}
                  />
                </button>
                <ul
                  className={`pf-link-list${isOpen ? ' pf-list-open' : ''}`}
                  aria-hidden={!isOpen}
                >
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="pf-footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Newsletter */}
          <div className="pf-newsletter-col">
            <p className="pf-col-title" style={{ marginBottom: 8 }}>Stay Updated</p>
            <p className="pf-newsletter-text">
              Subscribe to get the latest updates on projects, articles, and
              tech insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="pf-newsletter-form">
              <div className="pf-input-wrap">
                <Mail size={15} className="pf-input-icon" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="pf-newsletter-input"
                  required
                />
              </div>
              <button type="submit" className="pf-nl-btn" aria-label="Subscribe">
                <Send size={16} />
              </button>
            </form>
            {subscribed && <p className="pf-subscribed-msg">✓ You're subscribed!</p>}
            <div className="pf-social-row">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="pf-social-link"
                  aria-label={s.label}
                  title={s.label}
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

        </div>{/* /pf-grid */}

        {/* ── Bottom bar ── */}
        <div className="pf-bottom-bar">
          <p className="pf-copyright">
            © {currentYear} Yasiru Nadeesha. Made with{' '}
            <Heart size={13} className="pf-heart" /> in Sri Lanka
          </p>
          <div className="pf-bottom-links">
            <a href="#privacy" className="pf-bottom-link">Privacy Policy</a>
            <span className="pf-dot">•</span>
            <a href="#terms" className="pf-bottom-link">Terms of Service</a>
            <span className="pf-dot">•</span>
            <a href="#cookies" className="pf-bottom-link">Cookie Policy</a>
          </div>
        </div>

      </div>{/* /pf-container */}

      {/* Scroll to top */}
      <button className="pf-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowUp size={20} />
      </button>

      {/* BG glows */}
      <div className="pf-glow pf-glow-1" />
      <div className="pf-glow pf-glow-2" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;700;900&display=swap');

        .pf-footer {
          position: relative;
          background: linear-gradient(135deg, #0a0a18 0%, #12121f 50%, #0f1419 100%);
          color: white;
          overflow: hidden;
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        /* ── Animated top border ── */
        .pf-top-border {
          height: 1px;
          background: rgba(255,255,255,0.08);
          overflow: hidden;
        }
        .pf-border-slide {
          height: 100%;
          width: 40%;
          background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);
          animation: pfBorderSlide 3s ease-in-out infinite;
        }
        @keyframes pfBorderSlide {
          0%, 100% { transform: translateX(-150%); }
          50%       { transform: translateX(300%); }
        }

        /* ── Container ── */
        .pf-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* ── CTA ── */
        .pf-cta {
          text-align: center;
          padding: 64px 0 52px;
        }
        .pf-cta-eyebrow {
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
        .pf-eyebrow-line {
          display: block;
          width: 32px;
          height: 1px;
          background: #4a5568;
        }
        .pf-cta-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -1.5px;
          color: #f0f4ff;
          margin: 0 0 20px;
        }
        .pf-cta-em {
          font-style: italic;
          background: linear-gradient(120deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pf-cta-sub {
          color: #64748b;
          font-size: 16px;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 300;
        }

        /* ── Main grid ── */
        /* Desktop: brand(1.6fr) | nav(1fr) | svc(1fr) | res(1fr) | newsletter(1.4fr) */
        .pf-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr 1.4fr;
          gap: 40px;
          align-items: start;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 52px 0 48px;
        }

        /* ── Brand column ── */
        .pf-brand-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .pf-brand-logo {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: white;
        }
        .pf-brand-name {
          font-size: 18px;
          font-weight: 900;
          color: #f0f4ff;
        }
        .pf-brand-tag {
          color: #64748b;
          font-size: 13px;
          line-height: 1.75;
          margin: 0 0 20px;
          font-weight: 300;
        }
        .pf-contact-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .pf-contact-item {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          color: #94a3b8;
        }
        .pf-ci-icon { color: #667eea; flex-shrink: 0; }

        /* ── Link columns (nav / svc / res) ── */
        .pf-link-col {
          display: flex;
          flex-direction: column;
        }

        /* Desktop: button acts as a plain heading — no pointer, no chevron */
        .pf-acc-btn {
          width: 100%;
          background: none;
          border: none;
          padding: 0 0 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: default;
          pointer-events: none;
          color: white;
        }

        .pf-col-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #cbd5e1;
        }

        .pf-chevron {
          color: #475569;
          transition: transform 0.3s ease;
          flex-shrink: 0;
          display: none; /* hidden on desktop */
        }
        .pf-chevron-open {
          transform: rotate(180deg);
        }

        /* Desktop: list always visible, no animation needed */
        .pf-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .pf-footer-link {
          display: inline-block;
          padding: 6px 0;
          font-size: 14px;
          color: #64748b;
          text-decoration: none;
          font-weight: 300;
          transition: color 0.25s ease, transform 0.25s ease;
        }
        .pf-footer-link:hover {
          color: #a5b4fc;
          transform: translateX(4px);
        }

        /* ── Newsletter column ── */
        .pf-newsletter-col {
          display: flex;
          flex-direction: column;
        }
        .pf-newsletter-text {
          font-size: 13px;
          color: #64748b;
          margin: 0 0 16px;
          line-height: 1.7;
          font-weight: 300;
        }
        .pf-newsletter-form {
          display: flex;
          gap: 8px;
          margin-bottom: 14px;
        }
        .pf-input-wrap {
          position: relative;
          flex: 1;
          min-width: 0;
        }
        .pf-input-icon {
          position: absolute;
          left: 13px;
          top: 50%;
          transform: translateY(-50%);
          color: #475569;
          pointer-events: none;
        }
        .pf-newsletter-input {
          width: 100%;
          padding: 11px 12px 11px 38px;
          background: rgba(255,255,255,0.05);
          border: 1.5px solid rgba(255,255,255,0.08);
          border-radius: 50px;
          color: #f0f4ff;
          font-size: 13px;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.3s;
          font-family: inherit;
        }
        .pf-newsletter-input::placeholder { color: #3d4e63; }
        .pf-newsletter-input:focus { border-color: rgba(102,126,234,0.5); }
        .pf-nl-btn {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .pf-nl-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 24px rgba(102,126,234,0.4);
        }
        .pf-subscribed-msg {
          font-size: 12px;
          color: #6ee7b7;
          margin: 0 0 10px;
        }
        .pf-social-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 4px;
        }
        .pf-social-link {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.04);
          border: 1.5px solid rgba(255,255,255,0.08);
          border-radius: 50%;
          color: #94a3b8;
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
        }
        .pf-social-link:hover {
          background: rgba(102,126,234,0.2);
          border-color: rgba(102,126,234,0.4);
          transform: translateY(-3px);
        }

        /* ── Bottom bar ── */
        .pf-bottom-bar {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 24px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .pf-copyright {
          margin: 0;
          font-size: 13px;
          color: #475569;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .pf-heart {
          color: #ef4444;
          animation: pfHeartbeat 1.5s ease-in-out infinite;
        }
        @keyframes pfHeartbeat {
          0%, 100% { transform: scale(1); }
          25%       { transform: scale(1.3); }
          50%       { transform: scale(1); }
        }
        .pf-bottom-links {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .pf-bottom-link {
          font-size: 13px;
          color: #475569;
          text-decoration: none;
          transition: color 0.2s;
        }
        .pf-bottom-link:hover { color: #a5b4fc; }
        .pf-dot { color: #2d3748; font-size: 12px; }

        /* ── Scroll to top ── */
        .pf-scroll-top {
          position: fixed;
          bottom: 36px;
          right: 36px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 28px rgba(102,126,234,0.4);
          transition: transform 0.3s, box-shadow 0.3s;
          z-index: 999;
        }
        .pf-scroll-top:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 36px rgba(102,126,234,0.5);
        }

        /* ── Background glows ── */
        .pf-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .pf-glow-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(102,126,234,0.12), transparent 70%);
          top: -80px; right: -80px;
        }
        .pf-glow-2 {
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(118,75,162,0.1), transparent 70%);
          bottom: -60px; left: -60px;
        }

        /* ════════════════════════════════
           MOBILE  ≤ 900px
           Brand full-width, then 3 accordion
           sections, then newsletter
        ════════════════════════════════ */
        @media (max-width: 900px) {
          .pf-container { padding: 0 20px; }
          .pf-cta { padding: 48px 0 36px; }

          .pf-grid {
            grid-template-columns: 1fr;
            gap: 0;
            padding-bottom: 0;
          }

          /* Brand gets bottom border */
          .pf-brand-col {
            padding-bottom: 28px;
            border-bottom: 1px solid rgba(255,255,255,0.07);
            margin-bottom: 0;
          }

          /* Each link col becomes accordion row */
          .pf-link-col {
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }

          .pf-acc-btn {
            padding: 18px 0;
            cursor: pointer;
            pointer-events: auto;
          }

          .pf-chevron { display: block; }

          /* Collapsed by default on mobile */
          .pf-link-list {
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.35s ease, padding-bottom 0.35s ease;
          }
          .pf-list-open {
            max-height: 300px;
            padding-bottom: 12px;
          }

          /* Newsletter below accordions */
          .pf-newsletter-col {
            padding-top: 24px;
            padding-bottom: 24px;
          }

          .pf-bottom-bar {
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }

          .pf-scroll-top {
            bottom: 20px;
            right: 20px;
            width: 44px;
            height: 44px;
          }
        }

        @media (max-width: 1100px) and (min-width: 901px) {
          .pf-grid { gap: 28px; }
        }
      `}</style>
    </footer>
  );
};

export default PortfolioFooter;