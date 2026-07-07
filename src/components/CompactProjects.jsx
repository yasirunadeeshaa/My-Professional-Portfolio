import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Eye,
  Play,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────
   Data — same shape as COMPACT_PROJECTS in PortfolioProjects,
   plus an `image` field (required now that the card shows a
   thumbnail, same as pp-sub-card). Swap these imports for your
   real screenshots — placeholders shown below.
───────────────────────────────────────────────────────── */

import portfolioImg from "../assets/moreProjects/portfolioHero.png";
import supermartImg from "../assets/moreProjects/aththanayakaHero.png";
import ecoImg from "../assets/moreProjects/Sustainable.jpg";
import studentImg from "../assets/moreProjects/student.webp";
import algoImg from "../assets/moreProjects/algorithm.jpg";
import healthDemoImg from "../assets/moreProjects/healthHero.png";
import posDemoImg from "../assets/moreProjects/posHero.png";
import wedifyDemoImg from "../assets/moreProjects/weddingHero.webp";
import hotelImg from "../assets/moreProjects/hotel.jpg";

const COMPACT_PROJECTS = [
  {
    id: 9,
    title: "Portfolio",
    status: "Live",
    link: "yasirunadeeshaaththanayaka.netlify.app",
    statusColor: "#34d399",
    description:
      "Personal portfolio website showcasing projects, skills, and experience with a modern, responsive design. Built as a living document of the tech stack, the design system, and the freelance and coursework projects behind it.",
    tags: ["React", "Tailwind CSS"],
    accent: "#38bdf8",
    image: portfolioImg,
    detailPage: null,
  },
  {
    id: 10,
    title: "Business Website",
    status: "Live",
    link: "aththanayakasupermart.lk",
    statusColor: "#34d399",
    description:
      "Responsive business website for a Sri Lankan natural food supplier, with a bilingual English/Sinhala toggle, multi-language support, accessibility compliance, and SEO optimisation.",
    tags: ["React", "Tailwind CSS"],
    accent: "#a78bfa",
    image: supermartImg,
    detailPage: null,
  },
  {
    id: 11,
    title: "Eco-Friendly Sustainable System",
    status: "First year project",
    link: null,
    statusColor: "#38bdf8",
    description:
      "A sustainable system that promotes eco-friendly practices and resource management, integrating IoT sensors and data analytics for real-time environmental monitoring.",
    tags: ["HTML", "JavaScript", "CSS"],
    accent: "#2e6277",
    image: ecoImg,
    detailPage: null,
  },
  {
    id: 12,
    title: "Student Management System",
    status: "First year project",
    link: null,
    statusColor: "#34d399",
    description:
      "A student management system that allows users to manage student results and view them through a clean, user-friendly interface.",
    tags: ["Python"],
    accent: "#e879a0",
    image: studentImg,
    detailPage: null,
  },
  {
    id: 13,
    title: "Algorithm Visualizer",
    status: "Developed in 2023",
    link: null,
    statusColor: "#34d399",
    description:
      "Finds max flow in graphs using the Ford-Fulkerson algorithm, with a visual representation of augmenting paths and residual networks as they update.",
    tags: ["Ford Fulkerson", "Java"],
    accent: "#34d399",
    image: algoImg,
    detailPage: "/projects/algorithm",
  },
  {
    id: 14,
    title: "HealthNexus Demo",
    status: "Live",
    link: "health-nexus.netlify.app",
    statusColor: "#34d399",
    description:
      "Final year project demo site for a healthcare management system with AI-powered diagnostics, patient tracking, and telemedicine capabilities.",
    tags: ["React", "Tailwind CSS", "MailJs"],
    accent: "#4cc9da",
    image: healthDemoImg,
    detailPage: "https://health-nexus.netlify.app",
  },
  {
    id: 15,
    title: "NexusPOS Demo",
    status: "Live",
    link: "pos-system-pro.netlify.app",
    statusColor: "#38bdf8",
    description:
      "Demo website for a point-of-sale system with inventory management, sales tracking, and reporting features built on top of the core POS platform.",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    accent: "#7c8cf8",
    image: posDemoImg,
    detailPage: "/projects/ecommerce",
  },
  {
    id: 16,
    title: "Wedify Demo",
    status: "Live",
    link: "wedify.netlify.app",
    statusColor: "#34d399",
    description:
      "Demo website for a wedding management system with vendor management, budget tracking, and guest RSVP automation.",
    tags: ["React", "Tailwind CSS"],
    accent: "#a78bfa",
    image: wedifyDemoImg,
    detailPage: "/projects/wedding",
  },
  {
    id: 17,
    title: "Hotel Management System",
    status: "Completed",
    link: null,
    statusColor: "#34d399",
    description:
      "A real-time business intelligence platform for hotel operations, with customisable widgets, data visualisation, and automated reporting.",
    tags: ["Spring Boot", "MySQL", "Practice project"],
    accent: "#a78bfa",
    image: hotelImg,
    detailPage: null,
  },
];

const AUTOPLAY_MS = 4600;

// Fixed sizing for the tab-card strip — deterministic math, no DOM
// measurement, so the bar never drifts left/right between renders.
const CARD_WIDTH = 108;
const CARD_GAP = 16;
const STEP = CARD_WIDTH + CARD_GAP;
const WRAP_WIDTH = 920; // shows the active card + neighbours on each side

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
const HOME_MIN = TOTAL; // start of the middle copy
const HOME_MAX = TOTAL * 2 - 1; // end of the middle copy
const EXTENDED_PROJECTS = Array.from(
  { length: REPEAT },
  () => COMPACT_PROJECTS,
).flat();

const mod = (n, m) => ((n % m) + m) % m;

export default function CompactProjectsShowcase() {
  const [trackIndex, setTrackIndex] = useState(HOME_MIN); // absolute position in EXTENDED_PROJECTS
  const [noAnim, setNoAnim] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const restartAutoplay = () => {
    clearInterval(intervalRef.current);
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setTrackIndex((t) => t + 1); // always forward, never wraps back
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    restartAutoplay();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  // After the slide finishes moving, if we've drifted into the
  // first or last copy, silently re-center into the middle copy.
  const handleTrackTransitionEnd = (e) => {
    if (e.propertyName !== "transform") return;
    if (trackIndex > HOME_MAX || trackIndex < HOME_MIN) {
      setNoAnim(true);
      setTrackIndex((t) => t - Math.floor((t - HOME_MIN) / TOTAL) * TOTAL);
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

  // Click a dot / index-row / arrow (logical project index 0..8) —
  // always advance forward around the circle to reach it.
  const goToLogical = useCallback((logicalIndex) => {
    setTrackIndex((t) => {
      const current = mod(t, TOTAL);
      const delta = mod(logicalIndex - current, TOTAL);
      return t + delta;
    });
    restartAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const step = useCallback((dir) => {
    setTrackIndex((t) => t + dir);
    restartAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keyboard navigation while the section has focus/hover.
  useEffect(() => {
    const onKey = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  const activeLogical = mod(trackIndex, TOTAL);
  const project = COMPACT_PROJECTS[activeLogical];
  const idx = String(activeLogical + 1).padStart(2, "0");
  const totalStr = String(TOTAL).padStart(2, "0");
  const trackOffset = WRAP_WIDTH / 2 - CARD_WIDTH / 2 - trackIndex * STEP;

  const handleOpen = () => {
    if (project.detailPage) {
      if (/^https?:\/\//.test(project.detailPage)) {
        window.open(project.detailPage, "_blank", "noopener,noreferrer");
      } else {
        navigate(project.detailPage);
      }
    }
  };

  return (
    <div
      ref={sectionRef}
      className="cps-root"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="cps-grid-bg" />
      <div className="cps-glow-1" />
      <div className="cps-glow-2" />

      <div className={`cps-inner ${isVisible ? "cps-in" : ""}`}>
        {/* ── Header ── */}
        <header className="cps-header">
          <div className="cps-eyebrow">
            <span className="cps-eyebrow-line" />
            <Sparkles size={13} />
            <span>Field Notes &amp; Side Builds</span>
            <Sparkles size={13} />
            <span className="cps-eyebrow-line" />
          </div>
          <h2 className="cps-title">
            The <em className="cps-title-em">Archive</em>
          </h2>
          <p className="cps-subtitle">
            Nine smaller builds, coursework, and demos — catalogued below.
            Browse the rail, jump the index, or just let it run.
          </p>
        </header>

        {/* ── Tab rail (fixed-width row of cards, infinite loop) ── */}
        <div className="cps-rail-row">
          <button
            className="cps-rail-nav"
            onClick={() => step(-1)}
            aria-label="Previous project"
          >
            <ArrowLeft size={16} />
          </button>

          <div className="cps-card-tabs-wrap" style={{ width: WRAP_WIDTH }}>
            <div
              className="cps-card-tabs-track"
              onTransitionEnd={handleTrackTransitionEnd}
              style={{
                gap: CARD_GAP,
                transform: `translateX(${trackOffset}px)`,
                transition: noAnim ? "none" : undefined,
              }}
            >
              {EXTENDED_PROJECTS.map((p, extIndex) => {
                const distance = Math.abs(extIndex - trackIndex);
                const opacity =
                  distance === 0
                    ? 1
                    : distance === 1
                      ? 0.62
                      : distance === 2
                        ? 0.36
                        : 0.2;
                const isActive = extIndex === trackIndex;
                const logical = mod(extIndex, TOTAL);

                return (
                  <button
                    key={`${p.id}-${extIndex}`}
                    className={`cps-card-tab ${isActive ? "cps-card-tab-active" : ""}`}
                    style={{ "--pa": p.accent, width: CARD_WIDTH, opacity }}
                    onClick={() => goToPosition(extIndex)}
                  >
                    <div className="cps-card-tab-inner">
                      <div className="cps-card-tab-thumb">
                        {p.image && (
                          <img src={p.image} alt={p.title} loading="lazy" />
                        )}
                        <span className="cps-card-tab-num">
                          {String(logical + 1).padStart(2, "0")}
                        </span>
                      </div>
                      {isActive && (
                        <span
                          key={`prog-${extIndex}`}
                          className="cps-card-tab-progress"
                        >
                          <span
                            className="cps-card-tab-progress-fill"
                            style={{
                              background: p.accent,
                              animationDuration: `${AUTOPLAY_MS}ms`,
                              animationPlayState: paused ? "paused" : "running",
                            }}
                          />
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            className="cps-rail-nav"
            onClick={() => step(1)}
            aria-label="Next project"
          >
            <ArrowRight size={16} />
          </button>
        </div>

        {/* ── Main editorial panel ── */}
        <div
          className="cps-panel"
          style={{ "--pa": project.accent, "--sc": project.statusColor }}
        >
          {/* Index rail — table-of-contents style project list */}
          <nav className="cps-index-rail" aria-label="Project index">
            {COMPACT_PROJECTS.map((p, i) => (
              <button
                key={p.id}
                className={`cps-index-row ${activeLogical === i ? "cps-index-row-active" : ""}`}
                style={{ "--ia": p.accent }}
                onClick={() => goToLogical(i)}
              >
                <span className="cps-index-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="cps-index-label">{p.title}</span>
                <span className="cps-index-bar" />
              </button>
            ))}
          </nav>

          {/* Content column */}
          <div className="cps-content" key={project.id}>
            <span className="cps-ghost-num" aria-hidden="true">
              {idx}
            </span>

            <div className="cps-step-eyebrow">
              <span className="cps-step-dot" />
              {idx} / {totalStr}
            </div>

            <h3 className="cps-panel-title">{project.title}</h3>
            <p className="cps-panel-desc">{project.description}</p>

            <div className="cps-meta-col">
              <span className="cps-status-pill">
                <span className="cps-status-dot" />
                {project.status}
                {project.link && (
                  <>
                    <span className="cps-status-sep">|</span>
                    <a
                      href={/^https?:\/\//.test(project.link) ? project.link : `https://${project.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cps-status-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.link}
                    </a>
                  </>
                )}
              </span>

              <div className="cps-tech-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="cps-tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.detailPage && (
              <button className="cps-action-btn" onClick={handleOpen}>
                <span>View project</span>
                <ArrowUpRight size={15} />
              </button>
            )}

            {/* mobile-only compact index dots */}
            <div className="cps-dots">
              {COMPACT_PROJECTS.map((p, i) => (
                <button
                  key={p.id}
                  className={`cps-dot ${activeLogical === i ? "cps-dot-active" : ""}`}
                  style={{
                    background: activeLogical === i ? p.accent : undefined,
                    boxShadow:
                      activeLogical === i
                        ? `0 0 10px ${p.accent}60`
                        : undefined,
                  }}
                  onClick={() => goToLogical(i)}
                  aria-label={`Show ${p.title}`}
                />
              ))}
            </div>
          </div>

          {/* Visual column */}
          <div className="cps-visual">
            <div
              className="cps-card"
              key={`card-${project.id}`}
              onMouseEnter={() => setCardHovered(true)}
              onMouseLeave={() => setCardHovered(false)}
            >
              <div className="cps-card-image-container">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="cps-card-image"
                  />
                )}
                <div
                  className={`cps-card-overlay ${cardHovered ? "cps-active" : ""}`}
                >
                  <button className="cps-card-overlay-btn" onClick={handleOpen}>
                    <Eye size={15} />
                    <span>Preview</span>
                  </button>
                </div>
              </div>

              <div className="cps-card-content">
                <h4 className="cps-card-title">{project.title}</h4>
                <p className="cps-card-desc">{project.description}</p>

                <div className="cps-card-tags">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="cps-card-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="cps-card-action-btn" onClick={handleOpen}>
                  <Play size={13} />
                  <span>View Project</span>
                </button>
              </div>

              <div className="cps-card-border-gradient" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

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
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #4a5568;
          margin-bottom: 28px;
        }
        .cps-eyebrow svg { color: #4a5568; }
        .cps-eyebrow-line { display: block; width: 32px; height: 1px; background: #4a5568; }
        .cps-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(44px, 5.5vw, 58px);
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
          max-width: 480px;
        }

        /* ── Rail row (nav arrows + strip) ── */
        .cps-rail-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin-bottom: 44px;
        }
        .cps-rail-nav {
          flex: 0 0 auto;
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.02);
          color: #64748b;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: border-color 0.25s ease, color 0.25s ease, background 0.25s ease;
        }
        .cps-rail-nav:hover { border-color: #7c8cf8; color: #f0f4ff; background: rgba(124,140,248,0.08); }

        .cps-card-tabs-wrap {
          position: relative;
          margin: 0 auto;
          padding: 10px 0 20px;
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
          transition: opacity 0.45s ease;
        }

        .cps-card-tab-inner {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.35s ease,
                      outline-color 0.35s ease;
          outline: 1px solid rgba(255,255,255,0.08);
          outline-offset: -1px;
        }
        .cps-card-tab-active .cps-card-tab-inner {
          transform: translateY(-10px) scale(1.1);
          outline: 1.5px solid var(--pa);
          box-shadow: 0 14px 30px color-mix(in srgb, var(--pa) 30%, transparent);
          z-index: 5;
        }

        .cps-card-tab-thumb {
          position: relative;
          width: 100%; height: 100%;
          background: linear-gradient(135deg, color-mix(in srgb, var(--pa) 16%, #0b1120), #0b1120);
        }
        .cps-card-tab-thumb img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: saturate(0.85);
          transition: filter 0.35s ease;
        }
        .cps-card-tab-active .cps-card-tab-thumb img { filter: saturate(1.05); }
        .cps-card-tab-thumb::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.55) 100%);
        }
        .cps-card-tab-num {
          position: absolute;
          left: 7px; bottom: 6px;
          z-index: 1;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.5px;
          color: rgba(255,255,255,0.85);
        }

        .cps-card-tab-progress {
          position: absolute;
          bottom: -8px; left: 6px; right: 6px;
          height: 2px;
          border-radius: 2px;
          background: rgba(255,255,255,0.08);
          overflow: hidden;
        }
        .cps-card-tab-progress-fill {
          display: block;
          height: 100%;
          width: 0%;
          animation-name: cps-tabProgress;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
        @keyframes cps-tabProgress { from { width: 0%; } to { width: 100%; } }

        /* ── Main editorial panel ── */
        .cps-panel {
          display: grid;
          grid-template-columns: 200px 1fr 300px;
          gap: 8px;
          align-items: stretch;
          max-width: 1120px;
          margin: 0 auto 0;
          border-top: 1px solid rgba(255,255,255,0.07);
        }

        /* Index rail */
        .cps-index-rail {
          display: flex;
          flex-direction: column;
          border-right: 1px solid rgba(255,255,255,0.07);
          padding-right: 22px;
        }
        .cps-index-row {
          position: relative;
          display: flex;
          align-items: baseline;
          gap: 10px;
          padding: 13px 0;
          background: none;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          cursor: pointer;
          text-align: left;
          font-family: 'DM Sans', sans-serif;
        }
        .cps-index-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #475569;
          transition: color 0.25s ease;
          flex: 0 0 auto;
        }
        .cps-index-label {
          font-size: 12.5px;
          font-weight: 500;
          color: #64748b;
          line-height: 1.3;
          transition: color 0.25s ease;
        }
        .cps-index-bar {
          position: absolute;
          left: -23px; top: 0; bottom: 0;
          width: 2px;
          background: var(--ia);
          transform: scaleY(0);
          transform-origin: center;
          transition: transform 0.3s ease;
        }
        .cps-index-row:hover .cps-index-label { color: #94a3b8; }
        .cps-index-row-active .cps-index-num { color: var(--ia); }
        .cps-index-row-active .cps-index-label { color: #f0f4ff; }
        .cps-index-row-active .cps-index-bar { transform: scaleY(1); }

        /* Content column */
        .cps-content {
          position: relative;
          padding: 8px 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
          animation: cps-contentIn 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        @keyframes cps-contentIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cps-ghost-num {
          position: absolute;
          top: -18px; right: 8px;
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: 108px;
          line-height: 1;
          color: var(--pa);
          opacity: 0.07;
          pointer-events: none;
          user-select: none;
        }
        .cps-step-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 1.5px;
          color: #64748b;
          margin-bottom: 18px;
          width: fit-content;
        }
        .cps-step-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--pa);
          animation: cps-pulseDot 2s ease-in-out infinite;
        }
        @keyframes cps-pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.4); }
        }
        .cps-panel-title {
          position: relative;
          font-family: 'DM Serif Display', serif;
          font-size: clamp(28px, 3vw, 38px);
          font-weight: 400;
          letter-spacing: -0.6px;
          color: #f0f4ff;
          line-height: 1.1;
          margin-bottom: 14px;
        }
        .cps-panel-desc {
          position: relative;
          font-size: 14.5px;
          color: #94a3b8;
          line-height: 1.75;
          font-weight: 300;
          margin-bottom: 20px;
          max-width: 46ch;
        }
        .cps-meta-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 22px;
        }

        .cps-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .cps-tech-tag {
          padding: 4px 10px;
          background: color-mix(in srgb, var(--pa) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--pa) 25%, transparent);
          border-radius: 20px;
          color: var(--pa);
          font-size: 10px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
        }
        .cps-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 600;
          color: #94a3b8;
          flex-wrap: wrap;
        }

        .cps-status-sep {
          color: #334155;
          font-weight: 400;
        }

        .cps-status-link {
          color: var(--pa);
          text-decoration: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2px;
          transition: color 0.25s ease, text-decoration-color 0.25s ease;
          text-decoration: underline;
          text-decoration-color: transparent;
          text-underline-offset: 2px;
        }

        .cps-status-link:hover {
          color: #f0f4ff;
          text-decoration-color: currentColor;
        }
        .cps-status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sc); flex: 0 0 auto; }
        .cps-tag-inline {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #475569;
          padding-left: 14px;
          border-left: 1px solid rgba(255,255,255,0.1);
        }

        .cps-action-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          padding: 12px 20px;
          border: none;
          background: #0d1424;
          color: #e5edff;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.14);
          clip-path: polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.3px;
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
        .cps-action-btn svg { transition: transform 0.3s ease; }
        .cps-action-btn:hover svg { transform: translate(2px, -2px); }

        .cps-dots { display: none; gap: 8px; align-items: center; margin-top: 20px; }
        .cps-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }
        .cps-dot-active { width: 20px; border-radius: 4px; }

        /* Visual column */
        .cps-visual {
          display: flex;
          align-items: center;
          padding: 20px 4px 20px 22px;
          border-left: 1px solid rgba(255,255,255,0.07);
        }
        .cps-card {
          position: relative;
          width: 100%;
          background: #0b1120;
          border-radius: 14px;
          overflow: hidden;
          animation: cps-cardIn 0.5s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes cps-cardIn {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .cps-card-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .cps-card-image {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .cps-card:hover .cps-card-image { transform: scale(1.06); }
        .cps-card-overlay {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, rgba(8,12,20,0.15), rgba(8,12,20,0.75));
        }
        .cps-card-overlay.cps-active { opacity: 1; }
        .cps-card-overlay-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 16px;
          background: #f0f4ff;
          color: #0a0e1a;
          border: none;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.3px;
          cursor: pointer;
          border-radius: 999px;
          transition: transform 0.25s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .cps-card-overlay-btn:hover { transform: scale(1.05); }

        .cps-card-content { padding: 16px 16px 18px; }
        .cps-card-title {
          font-family: 'DM Serif Display', serif;
          font-size: 14px;
          font-weight: 400;
          color: #f0f4ff;
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
          -webkit-line-clamp: 3;
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
          height: 2px;
          background: var(--pa);
          opacity: 0.55;
        }

        @media (prefers-reduced-motion: reduce) {
          .cps-inner, .cps-content, .cps-card,
          .cps-glow-1, .cps-glow-2, .cps-step-dot { animation: none !important; transition: none !important; }
        }

        @media (max-width: 1080px) {
          .cps-panel { grid-template-columns: 170px 1fr 260px; }
        }

        @media (max-width: 900px) {
          .cps-card-tabs-wrap { width: 100% !important; max-width: 620px; }
          .cps-panel {
            grid-template-columns: 1fr;
            border-top: none;
          }
          .cps-index-rail { display: none; }
          .cps-content { border-top: 1px solid rgba(255,255,255,0.07); padding: 28px 4px; }
          .cps-visual { border-left: none; border-top: 1px solid rgba(255,255,255,0.07); padding: 24px 4px; }
          .cps-visual .cps-card { max-width: 320px; margin: 0 auto; }
          .cps-dots { display: flex; }
          .cps-ghost-num { font-size: 84px; top: -6px; right: 0; }
        }

        @media (max-width: 640px) {
          .cps-root { padding: 60px 16px 50px; }
          .cps-title { font-size: 38px; }
          .cps-rail-nav { display: none; }
          .cps-card-tabs-wrap { max-width: 320px; }
        }
      `}</style>
    </div>
  );
}
