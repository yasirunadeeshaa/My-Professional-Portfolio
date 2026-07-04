import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Eye, Play } from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   Data — same shape as COMPACT_PROJECTS in PortfolioProjects,
   plus an `image` field (required now that the card shows a
   thumbnail, same as pp-sub-card). Swap these imports for your
   real screenshots — placeholders shown below.
───────────────────────────────────────────────────────── */

import portfolioImg   from '../assets/moreProjects/portfolioHero.png';
import supermartImg   from '../assets/moreProjects/aththanayakaHero.png';
import ecoImg         from '../assets/moreProjects/Sustainable.jpg';
import studentImg     from '../assets/moreProjects/student.webp';
import algoImg        from '../assets/moreProjects/algorithm.jpg';
import healthDemoImg  from '../assets/moreProjects/healthHero.png';
import posDemoImg     from '../assets/moreProjects/posHero.png';
import wedifyDemoImg  from '../assets/moreProjects/weddingHero.webp';
import hotelImg       from '../assets/moreProjects/hotel.jpg';

const COMPACT_PROJECTS = [
  {
    id: 9,
    title: 'Portfolio',
    status: 'Live',
    statusColor: '#34d399',
    description: 'Personal portfolio website showcasing projects, skills, and experience with a modern, responsive design. Built as a living document of the tech stack, the design system, and the freelance and coursework projects behind it.',
    tags: ['React', 'Tailwind CSS'],
    accent: '#38bdf8',
    image: portfolioImg,
    detailPage: null,
  },
  {
    id: 10,
    title: 'Business Website',
    status: 'Live - aththanayakasupermart.lk',
    statusColor: '#34d399',
    description: 'Responsive business website for a Sri Lankan natural food supplier, with a bilingual English/Sinhala toggle, multi-language support, accessibility compliance, and SEO optimisation.',
    tags: ['React', 'Tailwind CSS'],
    accent: '#a78bfa',
    image: supermartImg,
    detailPage: null,
  },
  {
    id: 11,
    title: 'Eco-Friendly Sustainable System',
    status: 'First year project',
    statusColor: '#38bdf8',
    description: 'A sustainable system that promotes eco-friendly practices and resource management, integrating IoT sensors and data analytics for real-time environmental monitoring.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    accent: '#fbbf24',
    image: ecoImg,
    detailPage: null,
  },
  {
    id: 12,
    title: 'Student management System',
    status: 'First year project',
    statusColor: '#34d399',
    description: 'A student management system that allows users to manage student results and view them through a clean, user-friendly interface.',
    tags: ['Python'],
    accent: '#e879a0',
    image: studentImg,
    detailPage: null,
  },
  {
    id: 13,
    title: 'Algorithm Visualizer',
    status: 'Developed in 2023',
    statusColor: '#34d399',
    description: 'Finds max flow in graphs using the Ford-Fulkerson algorithm, with a visual representation of augmenting paths and residual networks as they update.',
    tags: ['Ford Fulkerson', 'Java'],
    accent: '#34d399',
    image: algoImg,
    detailPage: '/projects/algorithm',
  },
  {
    id: 14,
    title: 'HEALTHNEXUS Demo Website',
    status: 'Live -> health-nexus.netlify.app',
    statusColor: '#34d399',
    description: 'Final year project demo site for a healthcare management system with AI-powered diagnostics, patient tracking, and telemedicine capabilities.',
    tags: ['React', 'Tailwind CSS', 'MailJs'],
    accent: '#fb923c',
    image: healthDemoImg,
    detailPage: 'https://health-nexus.netlify.app',
  },
  {
    id: 15,
    title: 'NexusPOS Demo Website',
    status: 'Live -> pos-system-pro.netlify.app',
    statusColor: '#38bdf8',
    description: 'Demo website for a point-of-sale system with inventory management, sales tracking, and reporting features built on top of the core POS platform.',
    tags: ['React', 'Tailwind CSS', 'Chart.js'],
    accent: '#7c8cf8',
    image: posDemoImg,
    detailPage: '/projects/ecommerce',
  },
  {
    id: 16,
    title: 'Wedify Demo Website',
    status: 'Live -> wedify.netlify.app',
    statusColor: '#34d399',
    description: 'Demo website for a wedding management system with vendor management, budget tracking, and guest RSVP automation.',
    tags: ['React', 'Tailwind CSS'],
    accent: '#a78bfa',
    image: wedifyDemoImg,
    detailPage: '/projects/wedding',
  },
  {
    id: 17,
    title: 'Hotel Management System',
    status: 'Completed',
    statusColor: '#34d399',
    description: 'A real-time business intelligence platform for hotel operations, with customisable widgets, data visualisation, and automated reporting.',
    tags: ['Spring Boot', 'MySQL', 'Practice project'],
    accent: '#a78bfa',
    image: hotelImg,
    detailPage: null,
  },
];

const AUTOPLAY_MS = 4200;

// Fixed sizing for the tab-card strip — deterministic math, no DOM
// measurement, so the bar never drifts left/right between renders.
const CARD_WIDTH = 120;
const CARD_GAP = 14;
const STEP = CARD_WIDTH + CARD_GAP;
const WRAP_WIDTH = 920; // shows the active card + 3 neighbours on each side

/* ── Infinite-circle carousel setup ──────────────────────
   We render REPEAT copies of the 9 cards back to back so the
   strip always has real cards to slide into. `trackIndex` only
   ever moves forward (or the short way to a target) — it never
   snaps backward. Once it drifts into the first or last copy,
   we silently (no transition) shift it back by exactly one full
   set (TOTAL). Because every copy holds identical data, that
   shift is 100% invisible to the eye — it just looks like the
   strip keeps flowing 1→9→1→9 forever.
───────────────────────────────────────────────────────── */
const TOTAL = COMPACT_PROJECTS.length;
const REPEAT = 3;
const HOME_MIN = TOTAL;            // start of the middle copy
const HOME_MAX = TOTAL * 2 - 1;    // end of the middle copy
const EXTENDED_PROJECTS = Array.from({ length: REPEAT }, () => COMPACT_PROJECTS).flat();

const mod = (n, m) => ((n % m) + m) % m;

/* ── Language / technology usage, aggregated from the tags above ── */
const LANG_ACCENTS = ['#7c8cf8', '#34d399', '#38bdf8', '#e879a0', '#fbbf24', '#a78bfa', '#fb923c'];
const LANGUAGE_STATS = (() => {
  const counts = new Map();
  COMPACT_PROJECTS.forEach(p => {
    p.tags.forEach(tag => counts.set(tag, (counts.get(tag) || 0) + 1));
  });
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([name, count], i) => ({ name, count, accent: LANG_ACCENTS[i % LANG_ACCENTS.length] }));
})();

export default function CompactProjectsShowcase() {
  const [trackIndex, setTrackIndex] = useState(HOME_MIN); // absolute position in EXTENDED_PROJECTS
  const [noAnim, setNoAnim] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const restartAutoplay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTrackIndex(t => t + 1); // always forward, never wraps back
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    restartAutoplay();
    return () => clearInterval(intervalRef.current);
  }, []);

  // After the slide finishes moving, if we've drifted into the
  // first or last copy, silently re-center into the middle copy.
  const handleTrackTransitionEnd = (e) => {
    if (e.propertyName !== 'transform') return;
    if (trackIndex > HOME_MAX || trackIndex < HOME_MIN) {
      setNoAnim(true);
      setTrackIndex(t => t - Math.floor((t - HOME_MIN) / TOTAL) * TOTAL);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setNoAnim(false));
      });
    }
  };

  // Click directly on a visible tab card — jump straight there
  // (short hop forward or back, whichever it actually is on screen).
  const goToPosition = (extIndex) => {
    setTrackIndex(extIndex);
    restartAutoplay();
  };

  // Click a dot / timeline node (logical project index 0..8) —
  // always advance forward around the circle to reach it.
  const goToLogical = (logicalIndex) => {
    const current = mod(trackIndex, TOTAL);
    const delta = mod(logicalIndex - current, TOTAL);
    setTrackIndex(t => t + delta);
    restartAutoplay();
  };

  const activeLogical = mod(trackIndex, TOTAL);
  const project = COMPACT_PROJECTS[activeLogical];
  const idx = String(activeLogical + 1).padStart(2, '0');
  const trackOffset = WRAP_WIDTH / 2 - CARD_WIDTH / 2 - trackIndex * STEP;

  const handleOpen = () => {
    if (project.detailPage) navigate(project.detailPage);
  };

  return (
    <div ref={sectionRef} className="cps-root">
      <div className="cps-grid-bg" />
      <div className="cps-glow-1" />
      <div className="cps-glow-2" />

      <div className={`cps-inner ${isVisible ? 'cps-in' : ''}`}>

        {/* ── Header ── */}
        <header className="cps-header">
          <div className="cps-eyebrow">
            <span className="cps-eyebrow-line" />
            <Sparkles size={14} style={{ color: '#4a5568' }} />
            <span>Side Projects &amp; Experiments</span>
            <Sparkles size={14} style={{ color: '#4a5568' }} />
            <span className="cps-eyebrow-line" />
          </div>
          <h2 className="cps-title">
            More <em className="cps-title-em">Builds</em>
          </h2>
          <p className="cps-subtitle">
            Smaller projects, coursework, and demos — walk through them one at a time,
            or jump straight to the one you're curious about.
          </p>
        </header>

        {/* ── Tab bar (fixed-width row of square cards, infinite loop) ── */}
        <div className="cps-card-tabs-wrap" style={{ width: WRAP_WIDTH }}>
          <div
            className="cps-card-tabs-track"
            onTransitionEnd={handleTrackTransitionEnd}
            style={{
              gap: CARD_GAP,
              transform: `translateX(${trackOffset}px)`,
              transition: noAnim ? 'none' : undefined,
            }}
          >
            {EXTENDED_PROJECTS.map((p, extIndex) => {
              const distance = Math.abs(extIndex - trackIndex);
              let filter = 'none';
              let opacity = 1;
              if (distance === 1) { filter = 'blur(0.5px)'; opacity = 0.75; }
              else if (distance === 2) { filter = 'blur(1.5px)'; opacity = 0.5; }
              else if (distance >= 3) { filter = 'blur(2px)'; opacity = 1.28; }

              const isActive = extIndex === trackIndex;
              const logical = mod(extIndex, TOTAL);

              return (
                <button
                  key={`${p.id}-${extIndex}`}
                  className={`cps-card-tab ${isActive ? 'cps-card-tab-active' : ''}`}
                  style={{ '--pa': p.accent, width: CARD_WIDTH, filter, opacity }}
                  onClick={() => goToPosition(extIndex)}
                >
                  <div className="cps-card-tab-inner">
                    <div className="cps-card-tab-thumb">
                      {p.image ? (
                        <img src={p.image} alt={p.title} />
                      ) : (
                        <span className="cps-card-tab-thumb-idx">{String(logical + 1).padStart(2, '0')}</span>
                      )}
                    </div>
                    <div className="cps-card-tab-title">{p.title}</div>
                    {isActive && (
                      <span key={`prog-${extIndex}`} className="cps-card-tab-progress">
                        <span className="cps-card-tab-progress-fill" style={{ background: p.accent }} />
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Main one-by-one panel ── */}
        <div className="cps-panel" key={project.id} style={{ '--pa': project.accent, '--sc': project.statusColor }}>

          {/* Left: full description */}
          <div className="cps-panel-left">
            <div className="cps-step-eyebrow">
              <span className="cps-step-dot" />
              Project {idx} of {String(TOTAL).padStart(2, '0')}
            </div>

            <h3 className="cps-panel-title">{project.title}</h3>
            <p className="cps-panel-desc">{project.description}</p>

            <div className="cps-status-row">
              <span className="cps-status-dot" />
              {project.status}
            </div>

            {project.detailPage && (
              <div className="cps-actions">
                <button className="cps-action-btn" onClick={handleOpen}>
                  <Play size={15} />
                  <span>View Details</span>
                </button>
              </div>
            )}

            {/* dot navigation */}
            <div className="cps-dots">
              {COMPACT_PROJECTS.map((p, i) => (
                <button
                  key={p.id}
                  className={`cps-dot ${activeLogical === i ? 'cps-dot-active' : ''}`}
                  style={{
                    background: activeLogical === i ? p.accent : undefined,
                    boxShadow: activeLogical === i ? `0 0 10px ${p.accent}60` : undefined,
                  }}
                  onClick={() => goToLogical(i)}
                  aria-label={`Show ${p.title}`}
                />
              ))}
            </div>
          </div>

          {/* Right: sub-project-style card (same size/pattern as pp-sub-card) */}
          <div className="cps-panel-right">
            <div className="cps-connector">
              <span className="cps-connector-line" />
              <span className="cps-connector-dot" />
            </div>

            <div
              className="cps-card"
              onMouseEnter={() => setCardHovered(true)}
              onMouseLeave={() => setCardHovered(false)}
            >
              {/* Image */}
              <div className="cps-card-image-container">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="cps-card-image" />
                ) : (
                  <div className="cps-card-image-fallback">
                    <span className="cps-card-image-fallback-idx">{idx}</span>
                  </div>
                )}
                <div className={`cps-card-overlay ${cardHovered ? 'cps-active' : ''}`}>
                  <div className="cps-card-overlay-gradient" />
                  <button className="cps-card-overlay-btn" onClick={handleOpen}>
                    <Eye size={16} />
                    <span>View</span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="cps-card-content">
                <h4 className="cps-card-title">{project.title}</h4>
                <p className="cps-card-desc">{project.description}</p>

                <div className="cps-card-tags">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="cps-card-tag">{tag}</span>
                  ))}
                </div>

                <button className="cps-card-action-btn" onClick={handleOpen}>
                  <Play size={14} />
                  <span>View Project</span>
                </button>
              </div>

              <div className="cps-card-border-gradient" />
            </div>
          </div>
        </div>

      </div>

      {/* ── Language / tech usage marquee — full width, auto-scrolling ── */}
      <div className={`cps-lang-marquee-wrap ${isVisible ? 'cps-in' : ''}`}>
        <div className="cps-lang-marquee-track">
          {[...LANGUAGE_STATS, ...LANGUAGE_STATS].map((l, i) => (
            <div key={`${l.name}-${i}`} className="cps-lang-card" style={{ '--la': l.accent }}>
              <span className="cps-lang-dot" />
              <span className="cps-lang-name">{l.name}</span>
              <span className="cps-lang-count">{l.count} {l.count === 1 ? 'project' : 'projects'}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .cps-root {
          position: relative;
          min-height: 100vh;
          background: #080c14;
          overflow: hidden;
          padding: 100px 48px 80px;
          font-family: 'DM Sans', sans-serif;
        }

        .cps-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none;
        }

        .cps-glow-1 {
          position: absolute;
          top: -180px; right: -160px;
          width: 680px; height: 680px;
          background: radial-gradient(circle, rgba(124,140,248,0.10) 0%, transparent 70%);
          pointer-events: none;
          animation: cps-drift1 20s ease-in-out infinite alternate;
        }
        .cps-glow-2 {
          position: absolute;
          bottom: -120px; left: -80px;
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(232,121,160,0.08) 0%, transparent 70%);
          pointer-events: none;
          animation: cps-drift2 25s ease-in-out infinite alternate;
        }
        @keyframes cps-drift1 { from { transform: translate(0,0); } to { transform: translate(-60px,50px); } }
        @keyframes cps-drift2 { from { transform: translate(0,0); } to { transform: translate(50px,-40px); } }

        .cps-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .cps-inner.cps-in { opacity: 1; transform: translateY(0); }

        /* ── Header ── */
        .cps-header {
          text-align: center;
          margin-bottom: 56px;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }
        .cps-eyebrow {
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
        .cps-eyebrow-line { display: block; width: 32px; height: 1px; background: #4a5568; }
        .cps-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(44px, 5.5vw, 56px);
          font-weight: 400;
          line-height: 1.0;
          color: #f0f4ff;
          letter-spacing: -1.5px;
          margin-bottom: 20px;
        }
        .cps-title-em {
          font-style: italic;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cps-subtitle {
          margin: 0 auto;
          font-size: 16px;
          line-height: 1.75;
          color: #64748b;
          font-weight: 300;
          max-width: 520px;
        }

        /* ── Tab bar — fixed-width strip, active card centered + popped ── */
        .cps-card-tabs-wrap {
          position: relative;
          margin: 0 auto 40px;
          padding: 34px 0 22px;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
        }

        .cps-card-tabs-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
          will-change: transform;
        }

        .cps-card-tab {
          position: relative;
          flex: 0 0 auto;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: filter 0.45s ease, opacity 0.45s ease;
        }

        .cps-card-tab-inner {
          position: relative;
          background: #0b1120;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          overflow: hidden;
          transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.35s ease,
                      border-color 0.35s ease;
        }
        .cps-card-tab-active .cps-card-tab-inner {
          transform: translateY(-18px) scale(1.16);
          border-color: var(--pa);
          box-shadow: 0 16px 32px color-mix(in srgb, var(--pa) 35%, transparent);
          z-index: 5;
        }

        .cps-card-tab-thumb {
          width: 100%;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, color-mix(in srgb, var(--pa) 16%, #0b1120), #0b1120);
        }
        .cps-card-tab-thumb img {
          width: 100%; height: 100%;
          object-fit: cover;
        }
        .cps-card-tab-thumb-idx {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: 22px;
          color: var(--pa);
          opacity: 0.85;
        }

        .cps-card-tab-title {
          padding: 9px 8px 11px;
          font-size: 10.5px;
          font-weight: 600;
          color: #64748b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
          transition: color 0.3s ease;
        }
        .cps-card-tab-active .cps-card-tab-title { color: #f0f4ff; }

        .cps-card-tab-progress {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: rgba(255,255,255,0.08);
          overflow: hidden;
        }
        .cps-card-tab-progress-fill {
          height: 100%;
          animation: cps-tabProgress 4.2s linear;
        }
        @keyframes cps-tabProgress { from { width: 0%; } to { width: 100%; } }

        /* ── Main panel ── */
        .cps-panel {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 48px;
          align-items: center;
          max-width: 940px;
          margin: 0 auto 48px;
          animation: cps-panelSwitch 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        @keyframes cps-panelSwitch {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cps-panel-left { display: flex; flex-direction: column; }
        .cps-step-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #64748b;
          margin-bottom: 20px;
          width: fit-content;
        }
        .cps-step-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--pa);
          animation: cps-pulseDot 2s ease-in-out infinite;
        }
        @keyframes cps-pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.4); }
        }
        .cps-panel-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(30px, 3.4vw, 42px);
          font-weight: 400;
          letter-spacing: -0.8px;
          color: #f0f4ff;
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .cps-panel-desc {
          font-size: 15px;
          color: #94a3b8;
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 24px;
        }
        .cps-status-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 600;
          color: #64748b;
          margin-bottom: 28px;
        }
        .cps-status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sc); }

        .cps-actions { margin-bottom: 24px; }
        .cps-action-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          border: none;
          background: #0d1424;
          color: #7dd3fc;
          box-shadow: inset 0 0 0 1px rgba(125,211,252,0.35);
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          isolation: isolate;
          transition: color 0.3s ease, box-shadow 0.3s ease;
        }
        .cps-action-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, var(--pa), #ec4899);
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          z-index: -1;
        }
        .cps-action-btn:hover { color: #ffffff; box-shadow: inset 0 0 0 1px rgba(255,255,255,0); }
        .cps-action-btn:hover::before { transform: translateX(0); }

        .cps-dots { display: flex; gap: 8px; align-items: center; }
        .cps-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }
        .cps-dot-active { width: 24px; border-radius: 4px; }

        /* Right: card (matches pp-sub-card size/pattern) */
        .cps-panel-right { position: relative; display: flex; justify-content: center; }
        .cps-connector {
          position: absolute;
          left: -28px; top: 50%;
          transform: translateY(-50%);
          display: flex; flex-direction: column; align-items: center;
          z-index: 2;
        }
        .cps-connector-line {
          width: 2px; height: 60px;
          background: linear-gradient(180deg, var(--pa), transparent);
        }
        .cps-connector-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: var(--pa);
          margin-top: -2px;
          box-shadow: 0 0 16px var(--pa);
        }

        .cps-card {
          position: relative;
          width: 100%;
          max-width: 300px;
          background: #0b1120;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px;
          overflow: hidden;
          transition: background 0.35s ease, transform 0.4s ease;
          animation: cps-cardIn 0.5s cubic-bezier(0.34,1.56,0.64,1);
        }
        .cps-card:hover { background: #0f1929; }
        @keyframes cps-cardIn {
          from { opacity: 0; transform: scale(0.96) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        .cps-card-image-container {
          position: relative;
          width: 100%;
          height: 140px;
          overflow: hidden;
        }
        .cps-card-image {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .cps-card:hover .cps-card-image { transform: scale(1.08); }
        .cps-card-image-fallback {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          background:
            linear-gradient(135deg, color-mix(in srgb, var(--pa) 16%, #0b1120), #0b1120);
        }
        .cps-card-image-fallback-idx {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: 40px;
          color: var(--pa);
          opacity: 0.85;
        }
        .cps-card-overlay {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cps-card-overlay.cps-active { opacity: 1; }
        .cps-card-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, color-mix(in srgb, var(--pa) 70%, #7c3aed), color-mix(in srgb, var(--pa) 40%, #ec4899));
          opacity: 0.9;
        }
        .cps-card-overlay-btn {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 18px;
          background: #0a0e1a;
          color: #ffffff;
          border: none;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          cursor: pointer;
          clip-path: polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);
          transition: all 0.3s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .cps-card-overlay-btn:hover { background: #ffffff; color: #0a0e1a; }

        .cps-card-content { padding: 16px 16px 18px; }
        .cps-card-title {
          font-family: 'DM Serif Display', serif;
          font-size: 14px;
          font-weight: 400;
          color: white;
          margin-bottom: 6px;
          line-height: 1.25;
        }
        .cps-card-desc {
          font-size: 11px;
          color: #94a3b8;
          line-height: 1.55;
          margin-bottom: 10px;
          font-weight: 300;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .cps-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }
        .cps-card-tag {
          padding: 3px 8px;
          background: color-mix(in srgb, var(--pa) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--pa) 25%, transparent);
          border-radius: 20px;
          color: var(--pa);
          font-size: 9px;
          font-weight: 600;
        }
        .cps-card-action-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          width: 100%;
          padding: 9px 14px;
          border: none;
          background: #0d1424;
          color: #7dd3fc;
          box-shadow: inset 0 0 0 1px rgba(125,211,252,0.35);
          clip-path: polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          isolation: isolate;
          transition: color 0.3s ease, box-shadow 0.3s ease;
        }
        .cps-card-action-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, var(--pa), #ec4899);
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          z-index: -1;
        }
        .cps-card-action-btn:hover { color: #ffffff; box-shadow: inset 0 0 0 1px rgba(255,255,255,0); }
        .cps-card-action-btn:hover::before { transform: translateX(0); }

        .cps-card-border-gradient {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: var(--pa);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .cps-card:hover .cps-card-border-gradient { opacity: 1; }



        /* ── Language usage marquee — breaks out to full viewport width ── */
        .cps-lang-marquee-wrap {
          position: relative;
          width: 100vw;
          margin: 56px calc(50% - 50vw) 0;
          padding: 22px 0;
          overflow: hidden;
          background: #0b1120;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s;
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%);
        }
        .cps-lang-marquee-wrap.cps-in { opacity: 1; transform: translateY(0); }

        .cps-lang-marquee-track {
          display: flex;
          width: max-content;
          gap: 14px;
          animation: cps-marquee 32s linear infinite;
        }
        .cps-lang-marquee-wrap:hover .cps-lang-marquee-track { animation-play-state: paused; }

        @keyframes cps-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .cps-lang-card {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: #0d1424;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 999px;
          white-space: nowrap;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .cps-lang-card:hover {
          border-color: color-mix(in srgb, var(--la) 50%, transparent);
          transform: translateY(-2px);
        }
        .cps-lang-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--la);
          box-shadow: 0 0 8px var(--la);
          flex-shrink: 0;
        }
        .cps-lang-name {
          font-size: 13px;
          font-weight: 600;
          color: #f0f4ff;
        }
        .cps-lang-count {
          font-size: 11px;
          font-weight: 500;
          color: #64748b;
          padding-left: 8px;
          border-left: 1px solid rgba(255,255,255,0.1);
        }

        @media (max-width: 640px) {
          .cps-lang-card { padding: 10px 16px; }
          .cps-lang-name { font-size: 12px; }
        }
        @media (max-width: 1024px) {
          .cps-panel { grid-template-columns: 1fr; gap: 36px; }
          .cps-connector { display: none; }
          .cps-panel-right { justify-content: flex-start; }
        }
        @media (max-width: 960px) {
          .cps-card-tabs-wrap { width: 100% !important; max-width: 620px; }
        }
        @media (max-width: 640px) {
          .cps-root { padding: 60px 16px 50px; }
          .cps-title { font-size: 38px; }
          .cps-card-tabs-wrap { max-width: 320px; }
          .cps-card { max-width: 100%; }
        }
      `}</style>
    </div>
  );
}