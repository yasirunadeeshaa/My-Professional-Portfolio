import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowRight,
  MapPin,
  Phone,
  Heart,
  ArrowUp,
  Sparkles,
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
      number: '01',
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
      number: '02',
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
      number: '03',
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

      <div className="pf-grid-bg" />
      <div className="pf-glow pf-glow-1" />
      <div className="pf-glow pf-glow-2" />

      <div className="pf-container">

        {/* ── CTA ── */}
        <div className="pf-cta">
          <div className="pf-cta-eyebrow">
            <span className="pf-eyebrow-line" />
            <Sparkles size={13} />
            <span>Let's Connect</span>
            <Sparkles size={13} />
            <span className="pf-eyebrow-line" />
          </div>
          <h2 className="pf-cta-title">
            Have a project <em className="pf-cta-em">in mind?</em><br />
            Let's create something <em className="pf-cta-em">amazing.</em>
          </h2>
          <p className="pf-cta-sub">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a href="mailto:yasiru@example.com" className="pf-cta-btn">
            <span>Send a message</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* ── Main grid: brand | nav | svc | res | newsletter ── */}
        <div className="pf-grid">

          {/* Brand */}
          <div className="pf-brand-col">
            <div className="pf-brand-head">
              <div className="pf-brand-mark">Y.</div>
              <span className="pf-brand-name">Yasiru Nadeesha</span>
            </div>
            <p className="pf-brand-tag">
              Full Stack Developer building toward DevOps — clean architecture
              paired with intuitive, considered UX.
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
                  <span className="pf-col-title">
                    <span className="pf-col-num">{section.number}</span>
                    {section.label}
                  </span>
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
            <p className="pf-col-title" style={{ marginBottom: 10 }}>
              <span className="pf-col-num">04</span>Stay Updated
            </p>
            <p className="pf-newsletter-text">
              Subscribe to get the latest updates on projects, articles, and
              tech insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="pf-newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="pf-newsletter-input"
                required
              />
              <button type="submit" className="pf-nl-btn" aria-label="Subscribe">
                <ArrowRight size={15} />
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
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

        </div>{/* /pf-grid */}

        {/* ── Bottom bar ── */}
        <div className="pf-bottom-bar">
          <p className="pf-copyright">
            © {currentYear} Yasiru Nadeesha. Made with{' '}
            <Heart size={12} className="pf-heart" /> in Sri Lanka
          </p>
          <div className="pf-bottom-links">
            <a href="#privacy" className="pf-bottom-link">Privacy Policy</a>
            <span className="pf-dot">·</span>
            <a href="#terms" className="pf-bottom-link">Terms of Service</a>
            <span className="pf-dot">·</span>
            <a href="#cookies" className="pf-bottom-link">Cookie Policy</a>
          </div>
        </div>

      </div>{/* /pf-container */}

      {/* Scroll to top */}
      <button className="pf-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowUp size={17} />
      </button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .pf-footer {
          position: relative;
          background: #080c14;
          color: white;
          overflow: hidden;
          font-family: 'DM Sans', system-ui, sans-serif;
          border-top: 1px solid rgba(255,255,255,0.07);
        }

        .pf-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none;
        }

        .pf-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .pf-glow-1 {
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(124,140,248,0.10), transparent 70%);
          top: -140px; right: -120px;
        }
        .pf-glow-2 {
          width: 460px; height: 460px;
          background: radial-gradient(circle, rgba(232,121,160,0.08), transparent 70%);
          bottom: -100px; left: -80px;
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
          padding: 88px 0 56px;
        }
        .pf-cta-eyebrow {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #4a5568;
          margin-bottom: 28px;
        }
        .pf-cta-eyebrow svg { color: #4a5568; }
        .pf-eyebrow-line {
          display: block;
          width: 32px;
          height: 1px;
          background: #4a5568;
        }
        .pf-cta-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -1.5px;
          color: #f0f4ff;
          margin: 0 0 20px;
        }
        .pf-cta-em {
          font-style: italic;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pf-cta-sub {
          color: #64748b;
          font-size: 16px;
          max-width: 480px;
          margin: 0 auto 32px;
          line-height: 1.8;
          font-weight: 300;
        }
        .pf-cta-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 14px 26px;
          border: none;
          background: #0d1424;
          color: #e5edff;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.14);
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.3px;
          text-decoration: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          isolation: isolate;
          transition: color 0.3s ease, box-shadow 0.3s ease;
        }
        .pf-cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, #7c8cf8, #e879a0);
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          z-index: -1;
        }
        .pf-cta-btn:hover { color: #ffffff; box-shadow: inset 0 0 0 1px rgba(255,255,255,0); }
        .pf-cta-btn:hover::before { transform: translateX(0); }
        .pf-cta-btn svg { transition: transform 0.3s ease; }
        .pf-cta-btn:hover svg { transform: translate(2px, -2px); }

        /* ── Main grid ── */
        .pf-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr 1.4fr;
          gap: 40px;
          align-items: start;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 52px 0 48px;
        }

        /* ── Brand column ── */
        .pf-brand-head {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 16px;
        }
        .pf-brand-mark {
          width: 42px;
          height: 42px;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: 19px;
          color: #7c8cf8;
          background: rgba(124,140,248,0.06);
        }
        .pf-brand-name {
          font-size: 16px;
          font-weight: 600;
          color: #f0f4ff;
          letter-spacing: -0.2px;
        }
        .pf-brand-tag {
          color: #64748b;
          font-size: 13px;
          line-height: 1.8;
          margin: 0 0 22px;
          font-weight: 300;
          max-width: 30ch;
        }
        .pf-contact-list {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }
        .pf-contact-item {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          color: #94a3b8;
        }
        .pf-ci-icon { color: #7c8cf8; flex-shrink: 0; }

        /* ── Link columns (nav / svc / res) ── */
        .pf-link-col {
          display: flex;
          flex-direction: column;
        }

        .pf-acc-btn {
          width: 100%;
          background: none;
          border: none;
          padding: 0 0 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: default;
          pointer-events: none;
          color: white;
        }

        .pf-col-title {
          display: flex;
          align-items: baseline;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #cbd5e1;
        }
        .pf-col-num {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 500;
          letter-spacing: 1px;
          color: #475569;
          text-transform: none;
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
          margin: 0 0 18px;
          line-height: 1.7;
          font-weight: 300;
        }
        .pf-newsletter-form {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          margin-bottom: 14px;
          border-bottom: 1px solid rgba(255,255,255,0.14);
          padding-bottom: 8px;
          transition: border-color 0.3s ease;
        }
        .pf-newsletter-form:focus-within { border-color: #7c8cf8; }
        .pf-newsletter-input {
          flex: 1;
          min-width: 0;
          padding: 6px 0;
          background: none;
          border: none;
          color: #f0f4ff;
          font-size: 13.5px;
          outline: none;
          font-family: inherit;
        }
        .pf-newsletter-input::placeholder { color: #3d4e63; }
        .pf-nl-btn {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          background: none;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 50%;
          color: #94a3b8;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }
        .pf-nl-btn:hover {
          border-color: #7c8cf8;
          color: #7c8cf8;
          transform: translateX(2px);
        }
        .pf-subscribed-msg {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          color: #34d399;
          margin: 0 0 10px;
        }
        .pf-social-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 6px;
        }
        .pf-social-link {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          color: #64748b;
          transition: border-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }
        .pf-social-link:hover {
          border-color: #7c8cf8;
          color: #f0f4ff;
          transform: translateY(-2px);
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
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #475569;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .pf-heart {
          color: #e879a0;
          animation: pfHeartbeat 1.8s ease-in-out infinite;
        }
        @keyframes pfHeartbeat {
          0%, 100% { transform: scale(1); }
          25%       { transform: scale(1.25); }
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
        .pf-dot { color: #2d3748; font-size: 14px; }

        /* ── Scroll to top ── */
        .pf-scroll-top {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 44px;
          height: 44px;
          background: #0d1424;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 50%;
          color: #94a3b8;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
          z-index: 999;
        }
        .pf-scroll-top:hover {
          border-color: #7c8cf8;
          color: #f0f4ff;
          transform: translateY(-3px);
        }

        @media (prefers-reduced-motion: reduce) {
          .pf-heart { animation: none !important; }
        }

        /* ════════════════════════════════
           MOBILE  ≤ 900px
           Brand full-width, then 3 accordion
           sections, then newsletter
        ════════════════════════════════ */
        @media (max-width: 900px) {
          .pf-container { padding: 0 20px; }
          .pf-cta { padding: 64px 0 40px; }

          .pf-grid {
            grid-template-columns: 1fr;
            gap: 0;
            padding-bottom: 0;
          }

          .pf-brand-col {
            padding-bottom: 28px;
            border-bottom: 1px solid rgba(255,255,255,0.07);
            margin-bottom: 0;
          }

          .pf-link-col {
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }

          .pf-acc-btn {
            padding: 18px 0;
            cursor: pointer;
            pointer-events: auto;
          }

          .pf-chevron { display: block; }

          .pf-link-list {
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.35s ease, padding-bottom 0.35s ease;
          }
          .pf-list-open {
            max-height: 300px;
            padding-bottom: 12px;
          }

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
            width: 42px;
            height: 42px;
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