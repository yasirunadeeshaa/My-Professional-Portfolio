import React, { useState, useEffect, useRef } from 'react';
import {
  Code2,
  Palette,
  Database,
  Server,
  GitBranch,
  Wrench,
  Sparkles,
} from 'lucide-react';

const SkillsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code2 size={22} />,
      accent: '#7c8cf8',
      number: '01',
      skills: ['Java', 'Python', 'JavaScript', 'SQL', 'PHP', 'JavaFX', 'Java Swing'],
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Palette size={22} />,
      accent: '#e879a0',
      number: '02',
      skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server size={22} />,
      accent: '#38bdf8',
      number: '03',
      skills: ['Express.js', 'Spring Boot', 'Node.js', 'Python Flask', 'Python Django'],
    },
    {
      id: 'database',
      title: 'Databases',
      icon: <Database size={22} />,
      accent: '#34d399',
      number: '04',
      skills: ['MySQL', 'MongoDB'],
    },
    {
      id: 'version',
      title: 'Version Control',
      icon: <GitBranch size={22} />,
      accent: '#fb923c',
      number: '05',
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'SourceTree'],
    },
    {
      id: 'tools',
      title: 'Dev Tools & Practices',
      icon: <Wrench size={22} />,
      accent: '#a78bfa',
      number: '06',
      skills: ['RESTful APIs', 'Postman', 'Agile', 'Docker', 'CI/CD'],
    },
  ];

  return (
    <div className="sk-root" ref={sectionRef}>

      {/* ── Shared background (matches PortfolioProjects) ── */}
      <div className="sk-grid-bg" />
      <div className="sk-glow-1" />
      <div className="sk-glow-2" />

      <div className={`sk-inner ${isVisible ? 'sk-in' : ''}`}>

        {/* ── Header (identical pattern to pj-header) ── */}
        <header className="sk-header">
          <div className="sk-eyebrow">
            <span className="sk-eyebrow-line" />
            <Sparkles size={14} style={{ color: '#4a5568' }} />
            <span>Technical Expertise</span>
            <Sparkles size={14} style={{ color: '#4a5568' }} />
            <span className="sk-eyebrow-line" />
          </div>
          <h2 className="sk-title">
            Skills &amp; <em className="sk-title-em">Proficiencies</em>
          </h2>
          <p className="sk-subtitle">
            A curated stack of technologies I use to engineer robust,
            scalable products — from UI to infrastructure.
          </p>
        </header>

        {/* ── Bento grid (same 2px gap trick as pp-main-grid) ── */}
        <div className="sk-grid">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.id}
              className={`sk-card ${activeCategory === cat.id ? 'sk-card--active' : ''}`}
              style={{
                '--accent': cat.accent,
                animationDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={() => setActiveCategory(cat.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Top bar — number + icon badge */}
              <div className="sk-card-topbar">
                <span className="sk-card-num">{cat.number}</span>
                <span className="sk-card-icon">{cat.icon}</span>
              </div>

              {/* Title */}
              <h3 className="sk-card-title">{cat.title}</h3>

              {/* Animated divider */}
              <div className="sk-card-divider">
                <span className="sk-card-divider-fill" />
              </div>

              {/* Tags — styled like pp-project-tag */}
              <div className="sk-tags">
                {cat.skills.map((skill, si) => (
                  <span
                    key={si}
                    className="sk-tag"
                    style={{ animationDelay: `${i * 0.08 + si * 0.04}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom-right accent dot */}
              <div className="sk-card-corner" />

              {/* Bottom gradient bar — identical to pp-card-border-gradient */}
              <div className="sk-card-bar" />
            </div>
          ))}
        </div>

        {/* ── Footer strip (identical to pj-footer-strip) ── */}
        <div className="sk-footer-strip">
          {['Continuous Learner', 'Open Source Contributor', 'Clean Code Advocate', 'Agile Practitioner', 'Problem Solver'].map((label, i, arr) => (
            <React.Fragment key={i}>
              <span className="sk-strip-item">{label}</span>
              {i < arr.length - 1 && <span className="sk-strip-dot">·</span>}
            </React.Fragment>
          ))}
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ══ Root & Background (exact match to pj-root) ══ */
        .sk-root {
          position: relative;
          min-height: 100vh;
          background: #080c14;
          overflow: hidden;
          padding: 100px 48px 80px;
          font-family: 'DM Sans', sans-serif;
        }

        .sk-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none;
        }

        .sk-glow-1 {
          position: absolute;
          top: -180px; left: -160px;
          width: 680px; height: 680px;
          background: radial-gradient(circle, rgba(124,140,248,0.10) 0%, transparent 70%);
          pointer-events: none;
          animation: sk-drift1 20s ease-in-out infinite alternate;
        }

        .sk-glow-2 {
          position: absolute;
          bottom: -120px; right: -80px;
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%);
          pointer-events: none;
          animation: sk-drift2 25s ease-in-out infinite alternate;
        }

        @keyframes sk-drift1 {
          from { transform: translate(0, 0); }
          to   { transform: translate(60px, 50px); }
        }
        @keyframes sk-drift2 {
          from { transform: translate(0, 0); }
          to   { transform: translate(-50px, -40px); }
        }

        /* ══ Inner wrapper (exact match to pj-inner) ══ */
        .sk-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .sk-inner.sk-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* ══ Header (exact match to pj-header) ══ */
        .sk-header {
          text-align: center;
          margin-bottom: 72px;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }

        .sk-eyebrow {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #4a5568;
          margin-bottom: 28px;
        }

        .sk-eyebrow-line {
          display: block;
          width: 32px; height: 1px;
          background: #4a5568;
        }

        .sk-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(52px, 6vw, 60px);
          font-weight: 400;
          line-height: 1.0;
          color: #f0f4ff;
          letter-spacing: -1.5px;
          margin-bottom: 24px;
        }

        .sk-title-em {
          font-style: italic;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sk-subtitle {
          margin: 0 auto;
          font-size: 17px;
          line-height: 1.75;
          color: #64748b;
          font-weight: 300;
          max-width: 540px;
        }

        /* ══ Bento grid (exact match to pp-main-grid / pp-sub-grid pattern) ══ */
        .sk-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 56px;
          width: 100%;
        }

        /* ══ Card (exact match to pp-project-card) ══ */
        .sk-card {
          position: relative;
          background: #0b1120;
          border: none;
          border-radius: 0;
          overflow: hidden;
          padding: 40px 36px;
          cursor: default;
          transition: background 0.35s ease;
          animation: sk-cardFadeIn 0.6s ease-out both;
        }

        @keyframes sk-cardFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sk-card:hover,
        .sk-card--active {
          background: #0f1929;
        }

        /* Top accent bar on hover — identical to pp-card-border-gradient logic but top */
        .sk-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sk-card--active::before {
          transform: scaleX(1);
        }

        /* Radial glow fill — same feel as project card hover */
        .sk-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at top left,
            color-mix(in srgb, var(--accent) 7%, transparent),
            transparent 65%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .sk-card--active::after {
          opacity: 1;
        }

        /* Bottom gradient bar — identical to pp-card-border-gradient */
        .sk-card-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(to right, var(--accent), color-mix(in srgb, var(--accent) 40%, #e879a0));
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .sk-card--active .sk-card-bar {
          opacity: 1;
        }

        /* ── Top bar row ── */
        .sk-card-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .sk-card-num {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #2d3748;
          font-variant-numeric: tabular-nums;
        }

        /* Icon badge — identical to pp-featured-badge structure but smaller */
        .sk-card-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 22%, transparent);
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .sk-card--active .sk-card-icon {
          transform: scale(1.08) rotate(4deg);
          background: color-mix(in srgb, var(--accent) 18%, transparent);
        }

        /* ── Title ── */
        .sk-card-title {
          font-family: 'DM Serif Display', serif;
          font-size: 18px;
          font-weight: 400;
          color: #cbd5e1;
          letter-spacing: -0.3px;
          margin-bottom: 20px;
          line-height: 1.25;
          transition: color 0.3s ease;
        }

        .sk-card--active .sk-card-title {
          color: #f0f4ff;
        }

        /* ── Animated divider ── */
        .sk-card-divider {
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;
        }

        .sk-card-divider-fill {
          position: absolute;
          top: 0; left: 0;
          height: 100%;
          width: 0%;
          background: var(--accent);
          opacity: 0.6;
          transition: width 0.5s ease;
        }

        .sk-card--active .sk-card-divider-fill {
          width: 100%;
        }

        /* ── Tags — exact match to pp-project-tag ── */
        .sk-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 8px;
        }

        .sk-tag {
          padding: 4px 10px;
          background: rgba(102,126,234,0.12);
          border: 1px solid rgba(102,126,234,0.25);
          border-radius: 20px;
          color: #a5b4fc;
          font-size: 11px;
          font-weight: 600;
          opacity: 0;
          animation: sk-tagIn 0.4s ease forwards;
          transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
        }

        @keyframes sk-tagIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }

        /* On hover: shift tags to the card's accent colour */
        .sk-card--active .sk-tag {
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          border-color: color-mix(in srgb, var(--accent) 28%, transparent);
          color: color-mix(in srgb, var(--accent) 85%, white);
        }

        /* ── Corner accent dot (identical to pj-cc-corner) ── */
        .sk-card-corner {
          position: absolute;
          bottom: 18px; right: 18px;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .sk-card--active .sk-card-corner {
          opacity: 0.65;
        }

        /* ══ Footer strip (exact match to pj-footer-strip) ══ */
        .sk-footer-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          padding: 52px 0 0;
        }

        .sk-strip-item {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #2d99c4;
          transition: color 0.3s ease;
        }

        .sk-strip-item:hover { color: #7e8592; }

        .sk-strip-dot {
          color: #1e293b;
          font-size: 18px;
          line-height: 1;
        }

        /* ══ Responsive (mirrors pj-root breakpoints) ══ */
        @media (max-width: 1100px) {
          .sk-root { padding: 80px 32px 60px; }
          .sk-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 900px) {
          .sk-root { padding: 70px 24px 60px; }
        }

        @media (max-width: 640px) {
          .sk-root { padding: 60px 16px 50px; }
          .sk-title { font-size: 44px; }
          .sk-grid {
            grid-template-columns: 1fr;
            border-radius: 16px;
          }
          .sk-card { padding: 32px 24px; }
          .sk-footer-strip { gap: 12px; }
        }
      `}</style>
    </div>
  );
};

export default SkillsPage;