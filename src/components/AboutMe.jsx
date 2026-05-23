import React, { useState, useEffect, useRef } from 'react';
import {
  Briefcase,
  GraduationCap,
  Target,
  Award,
  Code2,
  BookOpen,
  Coffee,
  Globe,
  Users,
  Heart,
} from 'lucide-react';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
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

  const experiences = [
    {
      role: 'Associate Software Engineer',
      company: 'GeniusSoft PVT (LTD)',
      period: '2026 March – Present',
      description: 'Leading development of enterprise web applications and mentoring junior developers.',
      achievements: ['Built microservices architecture', 'Improved performance by 40%'],
    },
    {
      role: 'Intern Software Developer',
      company: 'GeniusSoft PVT (LTD)',
      period: '2025 September – 2026 February',
      description: 'Developed and maintained multiple client projects using modern web technologies.',
      achievements: ['Delivered 15+ projects', 'Worked with POS systems', 'Reduced bugs by 60%'],
    }
  ];

  const education = [
    {
      degree: 'B.Eng (Hons) Software Engineering',
      institution: 'University of Westminster UK',
      period: '2021 - 2027',
      gpa: '3.1 / 4.0',
      accent: '#a78bfa',
      accentAlpha: 'rgba(167,139,250,',
      highlights: ["Dean's List", 'Best Final Year Project', 'Programming Club President'],
    },
    {
      degree: 'Professional Certificate in Machine Learning',
      institution: 'Informatics Institute of Technology (IIT) - Sri Lanka',
      period: '2024',
      gpa: null,
      accent: '#fb923c',
      accentAlpha: 'rgba(251,146,60,',
      highlights: ['Professional Level', 'AI / ML', 'System Design'],
    },
  ];

  const interests = [
    { icon: <Code2 size={22} />, label: 'Coding', color: '#7c8cf8' },
    { icon: <BookOpen size={22} />, label: 'Reading', color: '#e879a0' },
    { icon: <Coffee size={22} />, label: 'Coffee', color: '#fbbf24' },
    { icon: <Globe size={22} />, label: 'Travel', color: '#34d399' },
    { icon: <Users size={22} />, label: 'Hackathons', color: '#38bdf8' },
    { icon: <Heart size={22} />, label: 'Open Source', color: '#f87171' },
  ];

  const miniCards = [
    {
      id: 'exp-card',
      num: '02',
      title: 'G.C.E. Advanced Level (A/L) Mathematics Stream',
      accent: '#38bdf8',
      items: [
        { company: 'Combined Maths', period: '' },
        { company: 'Physics', period: '' },
        { company: 'Chemistry', period: '' },
      ],
    },
    {
      id: 'edu-card',
      num: '03',
      title: 'Memberships & Societies',
      accent: '#a78bfa',
      items: [
        { company: 'Member of IEEE', period: '' },
        { company: 'Robotics Club', period: '' },
      ],
    },
  ];

  return (
    <div ref={sectionRef} className="ab-root">
      <div className="ab-grid-bg" />
      <div className="ab-glow-1" />
      <div className="ab-glow-2" />

      <div className={`ab-inner ${isVisible ? 'ab-in' : ''}`}>

        {/* Header */}
        <header className="ab-header">
          <div className="ab-eyebrow">
            <span className="ab-eyebrow-line" />
            <span>Get To Know More</span>
            <span className="ab-eyebrow-line" />
          </div>
          <h2 className="ab-title">
            About <em className="ab-title-em">Me</em>
          </h2>
          <p className="ab-subtitle">
            Passionate developer with a love for creating elegant solutions to complex problems
          </p>
        </header>

        {/* Layout */}
        <div className="ab-layout">

          {/* LEFT */}
          <div className="ab-left">

            {/* Profile card */}
            <div className="ab-profile-card">
              <div className="ab-name">A. Yasiru Nadeesha Aththanayaka</div>
              <div className="ab-role">Full Stack Developer</div>
              <p className="ab-bio">
                I'm a passionate full stack developer who loves turning ideas into reality through code.
                With expertise in modern web technologies, I create scalable and user-friendly applications.
              </p>

              {/* Interests */}
              <div className="ab-interests">
                <div className="ab-interests-label">Interests &amp; Hobbies</div>
                <div className="ab-interests-grid">
                  {interests.map((interest, i) => (
                    <div
                      key={i}
                      className="ab-interest-item"
                      style={{ '--ic': interest.color }}
                    >
                      <span className="ab-interest-icon">{interest.icon}</span>
                      <span className="ab-interest-label">{interest.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mini cards */}
            {miniCards.map((card) => (
              <div
                key={card.id}
                className={`ab-mini-card ${activeCard === card.id ? 'ab-mini-card--active' : ''}`}
                style={{ '--mc': card.accent }}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="ab-mc-topbar">
                  <span className="ab-mc-num">{card.num}</span>
                  <span className="ab-mc-icon">
                    {card.id === 'exp-card'
                      ? <Briefcase size={18} />
                      : <GraduationCap size={18} />}
                  </span>
                </div>
                <div className="ab-mc-title">{card.title}</div>
                <div className="ab-mc-divider">
                  <span className="ab-mc-divider-fill" />
                </div>
                <div className="ab-mc-items">
                  {card.items.map((item, i) => (
                    <div key={i} className="ab-mc-item">
                      <span className="ab-mc-dot" />
                      <span className="ab-mc-company">{item.company}</span>
                      <span className="ab-mc-period">{item.period}</span>
                    </div>
                  ))}
                </div>
                <div className="ab-mc-corner" />
              </div>
            ))}

          </div>

          {/* RIGHT */}
          <div className="ab-right">

            {/* Tab nav */}
            <div className="ab-tab-nav">
              <button
                className={`ab-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                style={{ '--ta': '#38bdf8' }}
                onClick={() => setActiveTab('experience')}
              >
                <Briefcase size={18} />
                <span>Experience</span>
              </button>
              <button
                className={`ab-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                style={{ '--ta': '#a78bfa' }}
                onClick={() => setActiveTab('education')}
              >
                <GraduationCap size={18} />
                <span>Education</span>
              </button>
            </div>

            {/* Tab content */}
            <div className="ab-tab-content">

              {/* Experience */}
              {activeTab === 'experience' && (
                <div className="ab-tab-panel fade-in">
                  <div className="ab-panel-header">
                    <div className="ab-panel-icon" style={{ '--pi': '#38bdf8' }}>
                      <Briefcase size={22} />
                    </div>
                    <div>
                      <div className="ab-panel-title">Work Experience</div>
                      <div className="ab-panel-sub">My professional journey and career milestones</div>
                    </div>
                  </div>

                  <div className="ab-timeline">
                    {experiences.map((exp, i) => (
                      <div key={i} className="ab-t-item">
                        <div className="ab-t-dot" />
                        <span className="ab-t-period">{exp.period}</span>
                        <div className="ab-t-role">{exp.role}</div>
                        <div className="ab-t-company">{exp.company}</div>
                        <p className="ab-t-desc">{exp.description}</p>
                        <div className="ab-t-tags">
                          {exp.achievements.map((a, j) => (
                            <span key={j} className="ab-t-tag">
                              <Target size={12} />
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education */}
              {activeTab === 'education' && (
                <div className="ab-tab-panel fade-in">
                  <div className="ab-panel-header">
                    <div className="ab-panel-icon" style={{ '--pi': '#a78bfa' }}>
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <div className="ab-panel-title">Education &amp; Certifications</div>
                      <div className="ab-panel-sub">Academic background and professional certifications</div>
                    </div>
                  </div>

                  <div className="ab-edu-grid">
                    {education.map((edu, i) => (
                      <div
                        key={i}
                        className="ab-edu-card"
                        style={{ '--ea': edu.accent, '--eaa': edu.accentAlpha }}
                      >
                        <div className="ab-edu-icon">
                          <GraduationCap size={26} />
                        </div>
                        <div className="ab-edu-body">
                          <div className="ab-edu-degree">{edu.degree}</div>
                          <div className="ab-edu-inst">{edu.institution}</div>
                          <div className="ab-edu-badges">
                            <span className="ab-edu-period">{edu.period}</span>
                            {edu.gpa && <span className="ab-edu-gpa">GPA: {edu.gpa}</span>}
                          </div>
                          <div className="ab-edu-highlights">
                            {edu.highlights.map((h, j) => (
                              <span key={j} className="ab-edu-hl">
                                <Award size={12} />
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div className="ab-footer-strip">
          {['Continuous Learner', 'Open Source Contributor', 'Clean Code Advocate', 'Agile Practitioner', 'Problem Solver'].map((label, i, arr) => (
            <React.Fragment key={i}>
              <span className="ab-strip-item">{label}</span>
              {i < arr.length - 1 && <span className="ab-strip-dot">·</span>}
            </React.Fragment>
          ))}
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ab-root {
          min-height: 100vh;
          background: #080c14;
          position: relative;
          overflow: hidden;
          padding: 100px 48px 80px;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Background ── */
        .ab-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none;
        }

        .ab-glow-1 {
          position: absolute;
          top: -200px; left: -200px;
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(124,140,248,0.12) 0%, transparent 70%);
          pointer-events: none;
          animation: ab-drift1 18s ease-in-out infinite alternate;
        }

        .ab-glow-2 {
          position: absolute;
          bottom: -150px; right: -100px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(52,211,153,0.09) 0%, transparent 70%);
          pointer-events: none;
          animation: ab-drift2 22s ease-in-out infinite alternate;
        }

        @keyframes ab-drift1 {
          from { transform: translate(0, 0); }
          to   { transform: translate(80px, 60px); }
        }
        @keyframes ab-drift2 {
          from { transform: translate(0, 0); }
          to   { transform: translate(-60px, -40px); }
        }

        /* ── Inner ── */
        .ab-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .ab-inner.ab-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Header ── */
        .ab-header {
          margin-bottom: 72px;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .ab-eyebrow {
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

        .ab-eyebrow-line {
          display: block;
          width: 32px; height: 1px;
          background: #4a5568;
        }

        .ab-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(52px, 6vw, 60px);
          font-weight: 400;
          line-height: 1.0;
          color: #f0f4ff;
          letter-spacing: -1.5px;
          margin-bottom: 24px;
        }

        .ab-title-em {
          font-style: italic;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ab-subtitle {
          margin: 0 auto;
          font-size: 17px;
          line-height: 1.75;
          color: #64748b;
          font-weight: 300;
          max-width: 520px;
        }

        /* ── Layout ── */
        .ab-layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 24px;
          align-items: start;
          margin-bottom: 0;
        }

        /* ── Left side (bento stack) ── */
        .ab-left {
          display: flex;
          flex-direction: column;
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          overflow: hidden;
        }

        /* Profile card */
        .ab-profile-card {
          padding: 36px 32px;
          background: #0b1120;
          position: relative;
          overflow: hidden;
        }

        .ab-profile-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: #7c8cf8;
        }

        .ab-profile-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top left, rgba(124,140,248,0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        .ab-avatar-ring {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(124,140,248,0.25), rgba(232,121,160,0.25));
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Serif Display', serif;
          font-size: 28px;
          font-style: italic;
          color: #a5b4fc;
          border: 1px solid rgba(124,140,248,0.3);
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .ab-name {
          font-family: 'DM Serif Display', serif;
          font-size: 20px;
          color: #f0f4ff;
          letter-spacing: -0.5px;
          margin-bottom: 6px;
          position: relative;
          z-index: 1;
        }

        .ab-role {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #7c8cf8;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .ab-bio {
          font-size: 13px;
          line-height: 1.8;
          color: #64748b;
          font-weight: 300;
          position: relative;
          z-index: 1;
        }

        /* Interests */
        .ab-interests {
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.06);
          position: relative;
          z-index: 1;
        }

        .ab-interests-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #2d3748;
          margin-bottom: 16px;
        }

        .ab-interests-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .ab-interest-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 7px;
          padding: 14px 8px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          transition: all 0.3s ease;
          color: var(--ic);
        }

        .ab-interest-item:hover {
          background: rgba(255,255,255,0.06);
          transform: translateY(-3px);
        }

        .ab-interest-label {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 500;
        }

        /* Mini cards */
        .ab-mini-card {
          padding: 28px 32px;
          background: #0b1120;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: background 0.35s ease;
        }

        .ab-mini-card:hover {
          background: #0f1929;
        }

        .ab-mini-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--mc);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ab-mini-card--active::before {
          transform: scaleX(1);
        }

        .ab-mini-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top left, color-mix(in srgb, var(--mc) 8%, transparent), transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .ab-mini-card--active::after {
          opacity: 1;
        }

        .ab-mc-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        .ab-mc-num {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #2d3748;
        }

        .ab-mc-icon {
          width: 36px; height: 36px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--mc);
          background: color-mix(in srgb, var(--mc) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--mc) 20%, transparent);
          transition: transform 0.3s ease;
        }

        .ab-mini-card--active .ab-mc-icon {
          transform: scale(1.08) rotate(4deg);
        }

        .ab-mc-title {
          font-size: 15px;
          font-weight: 500;
          color: #cbd5e1;
          margin-bottom: 14px;
          transition: color 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .ab-mini-card--active .ab-mc-title {
          color: #f0f4ff;
        }

        .ab-mc-divider {
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin-bottom: 14px;
          position: relative;
          overflow: hidden;
        }

        .ab-mc-divider-fill {
          position: absolute;
          top: 0; left: 0;
          height: 100%;
          width: 0%;
          background: var(--mc);
          opacity: 0.6;
          transition: width 0.5s ease;
        }

        .ab-mini-card--active .ab-mc-divider-fill {
          width: 100%;
        }

        .ab-mc-items {
          display: flex;
          flex-direction: column;
          gap: 9px;
          position: relative;
          z-index: 1;
        }

        .ab-mc-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
        }

        .ab-mc-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--mc);
          opacity: 0.6;
          flex-shrink: 0;
        }

        .ab-mc-company {
          color: #94a3b8;
          font-weight: 500;
          flex: 1;
        }

        .ab-mc-period {
          font-size: 11px;
          color: #2d3748;
          margin-left: auto;
        }

        .ab-mc-corner {
          position: absolute;
          bottom: 16px; right: 16px;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--mc);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .ab-mini-card--active .ab-mc-corner {
          opacity: 0.7;
        }

        /* ── Right side ── */
        .ab-right {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        /* Tab nav */
        .ab-tab-nav {
          display: flex;
          gap: 0;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 22px;
        }

        .ab-tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 18px 22px;
          background: transparent;
          border: none;
          color: #4a5568;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.3px;
          position: relative;
        }

        .ab-tab-btn::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--ta);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .ab-tab-btn:hover {
          color: #94a3b8;
          background: rgba(255,255,255,0.03);
        }

        .ab-tab-btn.active {
          color: #f0f4ff;
          background: #0f1929;
        }

        .ab-tab-btn.active::after {
          transform: scaleX(1);
        }

        /* Tab content area */
        .ab-tab-content {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          overflow: hidden;
          flex: 1;
        }

        .ab-tab-panel {
          padding: 40px;
          background: #0b1120;
          min-height: 520px;
        }

        .fade-in {
          animation: ab-fadein 0.45s ease;
        }

        @keyframes ab-fadein {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Panel header */
        .ab-panel-header {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 36px;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .ab-panel-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--pi);
          background: color-mix(in srgb, var(--pi) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--pi) 22%, transparent);
          flex-shrink: 0;
        }

        .ab-panel-title {
          font-family: 'DM Serif Display', serif;
          font-size: 26px;
          color: #f0f4ff;
          letter-spacing: -0.5px;
          margin-bottom: 4px;
        }

        .ab-panel-sub {
          font-size: 13px;
          color: #4a5568;
          font-weight: 300;
        }

        /* ── Experience timeline ── */
        .ab-timeline {
          position: relative;
          padding-left: 28px;
        }

        .ab-timeline::before {
          content: '';
          position: absolute;
          left: 0; top: 8px; bottom: 8px;
          width: 1px;
          background: linear-gradient(180deg, rgba(56,189,248,0.5), rgba(124,140,248,0.3));
        }

        .ab-t-item {
          position: relative;
          margin-bottom: 40px;
        }

        .ab-t-item:last-child {
          margin-bottom: 0;
        }

        .ab-t-dot {
          position: absolute;
          left: -34px; top: 4px;
          width: 12px; height: 12px;
          border-radius: 50%;
          background: #38bdf8;
          border: 2px solid #080c14;
          box-shadow: 0 0 0 1px rgba(56,189,248,0.4);
        }

        .ab-t-period {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(56,189,248,0.1);
          border: 1px solid rgba(56,189,248,0.2);
          border-radius: 20px;
          color: #7dd3fc;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .ab-t-role {
          font-size: 19px;
          font-weight: 500;
          color: #f0f4ff;
          margin-bottom: 4px;
          letter-spacing: -0.2px;
        }

        .ab-t-company {
          font-size: 14px;
          color: #38bdf8;
          font-weight: 500;
          margin-bottom: 10px;
        }

        .ab-t-desc {
          font-size: 13px;
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 14px;
          font-weight: 300;
        }

        .ab-t-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .ab-t-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: rgba(52,211,153,0.08);
          border: 1px solid rgba(52,211,153,0.18);
          border-radius: 20px;
          color: #6ee7b7;
          font-size: 12px;
          font-weight: 500;
        }

        /* ── Education ── */
        .ab-edu-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ab-edu-card {
          display: flex;
          gap: 22px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 28px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .ab-edu-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--ea), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .ab-edu-card:hover {
          background: rgba(255,255,255,0.05);
        }

        .ab-edu-card:hover::before {
          opacity: 1;
        }

        .ab-edu-icon {
          flex-shrink: 0;
          width: 56px; height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ea);
          background: color-mix(in srgb, var(--ea) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--ea) 22%, transparent);
        }

        .ab-edu-body {
          flex: 1;
        }

        .ab-edu-degree {
          font-size: 17px;
          font-weight: 500;
          color: #f0f4ff;
          margin-bottom: 6px;
          letter-spacing: -0.2px;
        }

        .ab-edu-inst {
          font-size: 13px;
          color: #64748b;
          margin-bottom: 12px;
          font-weight: 300;
        }

        .ab-edu-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 0;
        }

        .ab-edu-period {
          display: inline-block;
          padding: 4px 12px;
          background: color-mix(in srgb, var(--ea) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--ea) 22%, transparent);
          border-radius: 20px;
          color: var(--ea);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .ab-edu-gpa {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(251,191,36,0.1);
          border: 1px solid rgba(251,191,36,0.2);
          border-radius: 20px;
          color: #fcd34d;
          font-size: 11px;
          font-weight: 600;
        }

        .ab-edu-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 14px;
        }

        .ab-edu-hl {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 4px 11px;
          background: color-mix(in srgb, var(--ea) 8%, transparent);
          border: 1px solid color-mix(in srgb, var(--ea) 18%, transparent);
          border-radius: 20px;
          color: var(--ea);
          font-size: 11px;
          font-weight: 500;
        }

        /* ── Footer strip ── */
        .ab-footer-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          padding: 52px 0 0;
          margin-top: 8px;
        }

        .ab-strip-item {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #2d3748;
          transition: color 0.3s ease;
        }

        .ab-strip-item:hover {
          color: #4a5568;
        }

        .ab-strip-dot {
          color: #1e293b;
          font-size: 18px;
          line-height: 1;
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .ab-root { padding: 80px 32px 60px; }
          .ab-layout { grid-template-columns: 300px 1fr; gap: 20px; }
        }

        @media (max-width: 900px) {
          .ab-root { padding: 70px 28px 60px; }
          .ab-layout { grid-template-columns: 1fr; gap: 24px; }
          .ab-tab-panel { padding: 28px; }
        }

        @media (max-width: 640px) {
          .ab-root { padding: 60px 18px 50px; }
          .ab-title { font-size: 44px; }
          .ab-tab-btn span { display: none; }
          .ab-interests-grid { grid-template-columns: repeat(2, 1fr); }
          .ab-edu-card { flex-direction: column; }
          .ab-tab-panel { padding: 22px; min-height: auto; }
          .ab-footer-strip { gap: 12px; }
        }
      `}</style>
    </div>
  );
};

export default AboutMe;