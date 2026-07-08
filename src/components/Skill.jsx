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
      icon: <Code2 size={19} />,
      accent: '#7c8cf8',
      number: '01',
      skills: ['Java', 'Python', 'JavaScript', 'SQL', 'PHP', 'JavaFX', 'Java Swing'],
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Palette size={19} />,
      accent: '#e879a0',
      number: '02',
      skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server size={19} />,
      accent: '#38bdf8',
      number: '03',
      skills: ['Express.js', 'Spring Boot', 'Node.js', 'Python Flask', 'Python Django'],
    },
    {
      id: 'database',
      title: 'Databases',
      icon: <Database size={19} />,
      accent: '#34d399',
      number: '04',
      skills: ['MySQL', 'MongoDB'],
    },
    {
      id: 'version',
      title: 'Version Control',
      icon: <GitBranch size={19} />,
      accent: '#fb923c',
      number: '05',
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'SourceTree'],
    },
    {
      id: 'tools',
      title: 'Dev Tools & Practices',
      icon: <Wrench size={19} />,
      accent: '#a78bfa',
      number: '06',
      skills: ['RESTful APIs', 'Postman', 'Agile', 'Docker', 'CI/CD'],
    },
  ];

  const maxSkills = Math.max(...skillCategories.map(c => c.skills.length));

  const coreStack = [
    { name: 'React.js', level: 5, accent: '#e879a0' },
    { name: 'Java', level: 5, accent: '#7c8cf8' },
    { name: 'Spring Boot', level: 4, accent: '#38bdf8' },
    { name: 'Node.js / Express', level: 4, accent: '#34d399' },
    { name: 'MySQL', level: 4, accent: '#34d399' },
    { name: 'Git', level: 5, accent: '#fb923c' },
  ];

  const learningNow = [
    { name: 'Docker', accent: '#38bdf8' },
    { name: 'Kubernetes', accent: '#7c8cf8' },
    { name: 'Terraform', accent: '#a78bfa' },
    { name: 'AWS', accent: '#fb923c' },
    { name: 'CI/CD Pipelines', accent: '#34d399' },
  ];

  const inProduction = [
    { tech: 'React + Tailwind CSS', usedIn: 'Portfolio, Aththanayaka Supermart, Wedify, NexusPOS, HealthNexus', accent: '#e879a0' },
    { tech: 'Java + JavaFX', usedIn: 'Real-Time Ticket Booking System (multi-threaded Producer-Consumer)', accent: '#7c8cf8' },
    { tech: 'Java — core arrays', usedIn: 'Plane Ticket Booking System', accent: '#7c8cf8' },
    { tech: 'Spring Boot + MySQL', usedIn: 'Hotel Management System', accent: '#38bdf8' },
  ];

  const credentials = [
    { label: 'BEng (Hons) Software Engineering', sub: 'University of Westminster' },
    { label: '4COSC005W', sub: 'Programming — Java, standard arrays' },
    { label: '5COSC019C', sub: 'Concurrent Programming — JavaFX, threads' },
  ];


  return (
    <div className="sk-root" ref={sectionRef}>

      {/* ── Shared background ── */}
      <div className="sk-grid-bg" />
      <div className="sk-glow-1" />
      <div className="sk-glow-2" />

      <div className={`sk-inner ${isVisible ? 'sk-in' : ''}`}>

        {/* ── Header ── */}
        <header className="sk-header">
          <div className="sk-eyebrow">
            <span className="sk-eyebrow-line" />
            <Sparkles size={13} />
            <span>Technical Expertise</span>
            <Sparkles size={13} />
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

        {/* ── Ledger grid — hairline-separated, editorial ── */}
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
              <span className="sk-card-ghost" aria-hidden="true">{cat.number}</span>

              {/* Top row — mono index + icon badge */}
              <div className="sk-card-topbar">
                <span className="sk-card-num">{cat.number}</span>
                <span className="sk-card-icon">{cat.icon}</span>
              </div>

              <h3 className="sk-card-title">{cat.title}</h3>

              <div className="sk-card-divider">
                <span className="sk-card-divider-fill" />
              </div>

              {/* Skill chips */}
              <div className="sk-tags">
                {cat.skills.map((skill, si) => (
                  <span
                    key={si}
                    className="sk-tag"
                    style={{ animationDelay: `${i * 0.07 + si * 0.035}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Breadth indicator — quiet, data-driven footer */}
              <div className="sk-card-footer">
                <span className="sk-card-count">{String(cat.skills.length).padStart(2, '0')} tools</span>
                <span className="sk-card-meter">
                  <span
                    className="sk-card-meter-fill"
                    style={{ width: `${(cat.skills.length / maxSkills) * 100}%` }}
                  />
                </span>
              </div>

              <div className="sk-card-bar" />
            </div>
          ))}
        </div>

        {/* ── Below-grid sections — continues the ledger numbering ── */}
        <div className="sk-below">

          {/* 07 — Core Stack */}
          <section className="sk-sub">
            <div className="sk-sub-head">
              <span className="sk-sub-num">07</span>
              <h3 className="sk-sub-title">Core Stack</h3>
              <span className="sk-sub-hint">what I reach for by default</span>
            </div>
            <div className="sk-core-list">
              {coreStack.map((s) => (
                <div key={s.name} className="sk-core-row" style={{ '--accent': s.accent }}>
                  <span className="sk-core-name">{s.name}</span>
                  <span className="sk-core-dots">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`sk-core-dot ${i < s.level ? 'sk-core-dot--filled' : ''}`} />
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 08 — Currently Learning */}
          <section className="sk-sub">
            <div className="sk-sub-head">
              <span className="sk-sub-num">08</span>
              <h3 className="sk-sub-title">Currently Learning</h3>
              <span className="sk-sub-hint">next stops on the road to DevOps</span>
            </div>
            <div className="sk-learning-row">
              {learningNow.map((s) => (
                <span key={s.name} className="sk-learning-chip" style={{ '--accent': s.accent }}>
                  <span className="sk-learning-pulse" />
                  {s.name}
                </span>
              ))}
            </div>
          </section>

          {/* 09 — In Production */}
          <section className="sk-sub">
            <div className="sk-sub-head">
              <span className="sk-sub-num">09</span>
              <h3 className="sk-sub-title">In Production</h3>
              <span className="sk-sub-hint">where the stack actually shipped</span>
            </div>
            <div className="sk-prod-list">
              {inProduction.map((row) => (
                <div key={row.tech} className="sk-prod-row" style={{ '--accent': row.accent }}>
                  <span className="sk-prod-tech">{row.tech}</span>
                  <span className="sk-prod-used">{row.usedIn}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 10 — Academic & Credentials */}
          <section className="sk-sub sk-sub--last">
            <div className="sk-sub-head">
              <span className="sk-sub-num">10</span>
              <h3 className="sk-sub-title">Credentials</h3>
              <span className="sk-sub-hint">the formal record</span>
            </div>
            <div className="sk-cred-row">
              {credentials.map((c) => (
                <div key={c.label} className="sk-cred-badge">
                  <span className="sk-cred-label">{c.label}</span>
                  <span className="sk-cred-sub">{c.sub}</span>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* ── Footer strip ── */}
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
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        /* ══ Root & Background ══ */
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

        /* ══ Inner wrapper ══ */
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

        /* ══ Header ══ */
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
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #4a5568;
          margin-bottom: 28px;
        }
        .sk-eyebrow svg { color: #4a5568; }

        .sk-eyebrow-line {
          display: block;
          width: 32px; height: 1px;
          background: #4a5568;
        }

        .sk-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(48px, 6vw, 58px);
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
          font-size: 16px;
          line-height: 1.75;
          color: #64748b;
          font-weight: 300;
          max-width: 520px;
        }

        /* ══ Ledger grid — hairline dividers, no card chrome ══ */
        .sk-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(255,255,255,0.07);
          border-left: 1px solid rgba(255,255,255,0.07);
          margin-bottom: 56px;
          width: 100%;
        }

        /* ══ Card ══ */
        .sk-card {
          position: relative;
          background: transparent;
          overflow: hidden;
          padding: 38px 34px 30px;
          cursor: default;
          border-right: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          transition: background 0.35s ease;
          animation: sk-cardFadeIn 0.6s ease-out both;
        }

        @keyframes sk-cardFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sk-card:hover,
        .sk-card--active {
          background: color-mix(in srgb, var(--accent) 4%, #0b1120);
        }

        /* Ghost numeral watermark */
        .sk-card-ghost {
          position: absolute;
          top: 4px; right: 16px;
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: 76px;
          line-height: 1;
          color: var(--accent);
          opacity: 0.05;
          pointer-events: none;
          user-select: none;
          transition: opacity 0.35s ease;
        }
        .sk-card--active .sk-card-ghost { opacity: 0.09; }

        /* Top accent bar on hover */
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

        /* Bottom gradient bar */
        .sk-card-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(to right, var(--accent), color-mix(in srgb, var(--accent) 40%, #e879a0));
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .sk-card--active .sk-card-bar {
          opacity: 1;
        }

        /* ── Top bar row ── */
        .sk-card-topbar {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
        }

        .sk-card-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.5px;
          color: #475569;
          font-variant-numeric: tabular-nums;
        }

        .sk-card-icon {
          width: 38px; height: 38px;
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
          position: relative;
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

        /* ── Tags ── */
        .sk-tags {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 22px;
        }

        .sk-tag {
          padding: 4px 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          color: #94a3b8;
          font-size: 11px;
          font-weight: 500;
          opacity: 0;
          animation: sk-tagIn 0.4s ease forwards;
          transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
        }

        @keyframes sk-tagIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }

        .sk-card--active .sk-tag {
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          border-color: color-mix(in srgb, var(--accent) 28%, transparent);
          color: color-mix(in srgb, var(--accent) 85%, white);
        }

        /* ── Breadth footer — quiet data strip ── */
        .sk-card-footer {
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sk-card-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.5px;
          color: #3f4b5e;
          white-space: nowrap;
          transition: color 0.3s ease;
        }
        .sk-card--active .sk-card-count { color: #64748b; }
        .sk-card-meter {
          position: relative;
          flex: 1;
          height: 2px;
          border-radius: 2px;
          background: rgba(255,255,255,0.06);
          overflow: hidden;
        }
        .sk-card-meter-fill {
          display: block;
          height: 100%;
          background: var(--accent);
          opacity: 0.55;
          transition: opacity 0.3s ease;
        }
        .sk-card--active .sk-card-meter-fill { opacity: 1; }

        /* ══ Below-grid sections ══ */
        .sk-below {
          border-top: 1px solid rgba(255,255,255,0.07);
          margin-bottom: 8px;
        }

        .sk-sub {
          padding: 34px 4px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 24px;
        }
        .sk-sub--last { border-bottom: none; }

        .sk-sub-head {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .sk-sub-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          color: #475569;
        }
        .sk-sub-title {
          font-family: 'DM Serif Display', serif;
          font-size: 20px;
          font-weight: 400;
          color: #f0f4ff;
          letter-spacing: -0.3px;
        }
        .sk-sub-hint {
          font-size: 12px;
          font-weight: 300;
          color: #64748b;
        }

        /* Core Stack */
        .sk-core-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px 40px;
          align-content: center;
        }
        .sk-core-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .sk-core-name {
          font-size: 13px;
          font-weight: 500;
          color: #cbd5e1;
        }
        .sk-core-dots {
          display: flex;
          gap: 5px;
          flex: 0 0 auto;
        }
        .sk-core-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
        }
        .sk-core-dot--filled {
          background: var(--accent);
          box-shadow: 0 0 6px color-mix(in srgb, var(--accent) 60%, transparent);
        }

        /* Currently Learning */
        .sk-learning-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-content: center;
        }
        .sk-learning-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 20px;
          border: 1px dashed color-mix(in srgb, var(--accent) 40%, transparent);
          background: color-mix(in srgb, var(--accent) 6%, transparent);
          color: color-mix(in srgb, var(--accent) 85%, white);
          font-size: 12px;
          font-weight: 500;
        }
        .sk-learning-pulse {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent);
          animation: sk-learningPulse 1.8s ease-in-out infinite;
        }
        @keyframes sk-learningPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(1.5); }
        }

        /* In Production */
        .sk-prod-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          justify-content: center;
        }
        .sk-prod-row {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 16px;
          align-items: baseline;
          padding-left: 12px;
          border-left: 2px solid color-mix(in srgb, var(--accent) 40%, transparent);
        }
        .sk-prod-tech {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--accent);
        }
        .sk-prod-used {
          font-size: 12.5px;
          color: #94a3b8;
          font-weight: 300;
          line-height: 1.5;
        }

        /* Credentials */
        .sk-cred-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-content: center;
        }
        .sk-cred-badge {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 12px 16px;
          border-radius: 10px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          min-width: 200px;
        }
        .sk-cred-label {
          font-size: 12.5px;
          font-weight: 600;
          color: #e2e8f0;
        }
        .sk-cred-sub {
          font-size: 11px;
          font-weight: 300;
          color: #64748b;
        }

        /* ══ Footer strip ══ */
        .sk-footer-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          padding: 52px 0 0;
        }

        .sk-strip-item {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #64748b;
          transition: color 0.3s ease;
        }

        .sk-strip-item:hover { color: #a5b4fc; }

        .sk-strip-dot {
          color: #1e293b;
          font-size: 18px;
          line-height: 1;
        }

        /* ══ Reduced motion ══ */
        @media (prefers-reduced-motion: reduce) {
          .sk-inner, .sk-card, .sk-tag, .sk-glow-1, .sk-glow-2, .sk-learning-pulse { animation: none !important; transition: none !important; }
        }

        /* ══ Responsive ══ */
        @media (max-width: 1100px) {
          .sk-root { padding: 80px 32px 60px; }
          .sk-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 900px) {
          .sk-root { padding: 70px 24px 60px; }
          .sk-sub { grid-template-columns: 1fr; gap: 14px; }
          .sk-core-list { grid-template-columns: 1fr; }
          .sk-prod-row { grid-template-columns: 1fr; gap: 4px; }
        }

        @media (max-width: 640px) {
          .sk-root { padding: 60px 16px 50px; }
          .sk-title { font-size: 42px; }
          .sk-grid {
            grid-template-columns: 1fr;
          }
          .sk-card { padding: 30px 22px; }
          .sk-card-ghost { font-size: 56px; }
          .sk-sub { padding: 26px 0; }
          .sk-footer-strip { gap: 12px; }
        }
      `}</style>
    </div>
  );
};

export default SkillsPage;