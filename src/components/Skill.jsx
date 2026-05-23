import React, { useState, useEffect, useRef } from 'react';
import {
  Code2,
  Palette,
  Database,
  Server,
  GitBranch,
  Wrench,
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
      skills: ['Java', 'Python', 'JavaScript', 'SQL', 'PHP', 'JavaFx', 'java Swing  '],
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
      {/* Background grid */}
      <div className="sk-grid-bg" />
      <div className="sk-glow-1" />
      <div className="sk-glow-2" />

      <div className={`sk-inner ${isVisible ? 'sk-in' : ''}`}>

        {/* Header */}
        <header className="sk-header">
          <div className="sk-eyebrow">
            <span className="sk-eyebrow-line" />
            <span>Technical Expertise</span>
            <span className="sk-eyebrow-line" />
          </div>
          <h1 className="sk-title">
            Skills &<br />
            <em className="sk-title-em">Proficiencies</em>
          </h1>
          <p className="sk-subtitle">
            A curated stack of technologies I use to engineer robust,
            scalable products — from UI to infrastructure.
          </p>
        </header>

        {/* Skills bento grid */}
        <div className="sk-grid">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.id}
              className={`sk-card ${activeCategory === cat.id ? 'sk-card--active' : ''}`}
              style={{
                '--accent': cat.accent,
                animationDelay: `${i * 0.07}s`,
              }}
              onMouseEnter={() => setActiveCategory(cat.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Top bar */}
              <div className="sk-card-topbar">
                <span className="sk-card-num">{cat.number}</span>
                <span className="sk-card-icon">{cat.icon}</span>
              </div>

              {/* Title */}
              <h3 className="sk-card-title">{cat.title}</h3>

              {/* Divider */}
              <div className="sk-card-divider">
                <span className="sk-card-divider-fill" />
              </div>

              {/* Tags */}
              <div className="sk-tags">
                {cat.skills.map((skill, si) => (
                  <span
                    key={si}
                    className="sk-tag"
                    style={{ animationDelay: `${i * 0.07 + si * 0.04}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Corner accent */}
              <div className="sk-card-corner" />
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <div className="sk-footer-strip">
          {['Continuous Learner', 'Open Source Contributor', 'Clean Code Advocate', 'Agile Practitioner', 'Problem Solver'].map((label, i) => (
            <React.Fragment key={i}>
              <span className="sk-strip-item">{label}</span>
              {i < 4 && <span className="sk-strip-dot">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .sk-root {
          min-height: 100vh;
          background: #080c14;
          position: relative;
          overflow: hidden;
          padding: 100px 48px 80px;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Background ── */
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
          top: -200px;
          left: -200px;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(124,140,248,0.12) 0%, transparent 70%);
          pointer-events: none;
          animation: sk-drift1 18s ease-in-out infinite alternate;
        }

        .sk-glow-2 {
          position: absolute;
          bottom: -150px;
          right: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(52,211,153,0.09) 0%, transparent 70%);
          pointer-events: none;
          animation: sk-drift2 22s ease-in-out infinite alternate;
        }

        @keyframes sk-drift1 {
          from { transform: translate(0, 0); }
          to   { transform: translate(80px, 60px); }
        }
        @keyframes sk-drift2 {
          from { transform: translate(0, 0); }
          to   { transform: translate(-60px, -40px); }
        }

        /* ── Inner wrapper ── */
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

        /* ── Header ── */
        .sk-header {
          margin-bottom: 72px;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .sk-eyebrow {
          justify-content: center;
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #4a5568;
          margin-bottom: 28px;
        }

        .sk-eyebrow-line {
          display: block;
          width: 32px;
          height: 1px;
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
          max-width: 520px;
        }

        /* ── Grid ── */
        .sk-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 2px;
        }

        /* ── Card ── */
        .sk-card {
          position: relative;
          padding: 40px 36px;
          background: #0b1120;
          transition: background 0.35s ease;
          cursor: default;
          overflow: hidden;
          opacity: 0;
          animation: sk-fadeUp 0.55s ease forwards;
        }

        @keyframes sk-fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sk-card--active {
          background: #0f1929;
        }

        /* Top accent bar on hover */
        .sk-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        .sk-card--active::before {
          transform: scaleX(1);
        }

        /* Subtle glow fill */
        .sk-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top left, color-mix(in srgb, var(--accent) 8%, transparent), transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .sk-card--active::after {
          opacity: 1;
        }

        /* Top bar row */
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

        .sk-card-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .sk-card--active .sk-card-icon {
          transform: scale(1.08) rotate(4deg);
          background: color-mix(in srgb, var(--accent) 18%, transparent);
        }

        /* Title */
        .sk-card-title {
          font-size: 17px;
          font-weight: 500;
          color: #cbd5e1;
          letter-spacing: -0.2px;
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }

        .sk-card--active .sk-card-title {
          color: #f0f4ff;
        }

        /* Divider */
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

        /* Tags */
        .sk-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .sk-tag {
          display: inline-block;
          padding: 5px 13px;
          font-size: 13px;
          font-weight: 500;
          color: #94a3b8;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 6px;
          letter-spacing: 0.1px;
          transition: all 0.25s ease;
          opacity: 0;
          animation: sk-tagIn 0.4s ease forwards;
        }

        @keyframes sk-tagIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }

        .sk-card--active .sk-tag {
          color: color-mix(in srgb, var(--accent) 80%, white);
          background: color-mix(in srgb, var(--accent) 8%, transparent);
          border-color: color-mix(in srgb, var(--accent) 22%, transparent);
        }

        /* Corner accent dot */
        .sk-card-corner {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .sk-card--active .sk-card-corner {
          opacity: 0.7;
        }

        /* ── Footer strip ── */
        .sk-footer-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          padding: 28px 0 0;
        }

        .sk-strip-item {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #2d3748;
          transition: color 0.3s ease;
        }

        .sk-strip-item:hover {
          color: #4a5568;
        }

        .sk-strip-dot {
          color: #1e293b;
          font-size: 18px;
          line-height: 1;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .sk-root { padding: 80px 32px 60px; }
          .sk-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .sk-root { padding: 60px 20px 50px; }
          .sk-grid { grid-template-columns: 1fr; border-radius: 16px; }
          .sk-card { padding: 32px 28px; }
          .sk-title { font-size: 44px; }
          .sk-footer-strip { gap: 12px; }
        }
      `}</style>
    </div>
  );
};

export default SkillsPage;