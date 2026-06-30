import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Sparkles,
  CheckCircle2,
  Play,
  Monitor,
  Globe,
  Zap,
  Clock,
  Ticket,
  Bell,
  CreditCard,
  MapPin,
  Search,
  Shield,
  Wifi,
  BarChart2,
  BookOpen,
} from "lucide-react";

import homeImg       from "../assets/Ticket/home.png";
import eventImg      from "../assets/Ticket/events.png";
import loginImg    from "../assets/Ticket/signin.png";
import customersImg    from "../assets/Ticket/customers.png";
import venuesImg  from "../assets/Ticket/venues.png";
import vendorsImg       from "../assets/Ticket/vendors.png";
import controlImg       from "../assets/Ticket/controlpanel.png";

import heroImg       from "../assets/Cinematicketbooking.jpg";

const technologies = [
  { name: "React", icon: "⚛️", color: "#61dafb" },
  { name: "Node.js", icon: "🟢", color: "#3c873a" },
  { name: "Spring Boot", icon: "🚂", color: "#ffffff" },
  { name: "MySQL", icon: "🍃", color: "#47a248" },
  { name: "JWT", icon: "🔑", color: "#d63aff" },
  { name: "Bootstrap", icon: "💨", color: "#38bdf8" },
];

const screenshots = [
  {
    id: 1,
    title: "Home Page",
    url: homeImg,
    description: "Landing page with featured events and quick-search bar.",
  },
  {
    id: 2,
    title: "Event Listing",
    url: eventImg,
    description: "Filterable event grid with category tags and date sorting.",
  },
  {
    id: 3,
    title: "Seat Selection",
    url: venuesImg,
    description: "Interactive seating map with real-time availability updates.",
  },
  {
    id: 4,
    title: "Checkout",
    url: vendorsImg,
    description: "Stripe payment form with order summary and countdown timer.",
  },
  {
    id: 5,
    title: "Booking Confirmed",
    url: customersImg,
    description: "Confirmation screen with QR-code ticket and email receipt.",
  },
  {
    id: 6,
    title: "Booking Confirmed",
    url: loginImg,
    description: "Confirmation screen with QR-code ticket and email receipt.",
  },
  {
    id: 7,
    title: "Booking Confirmed",
    url: controlImg,
    description: "Confirmation screen with QR-code ticket and email receipt.",
  },
];

const projectStats = [
  { label: "Development Time", value: "3 Months", icon: <Calendar /> },
  { label: "Project Type", value: "2nd Year Project", icon: <BookOpen /> },
  { label: "Module", value: "OOP Concepts", icon: <BookOpen /> },
  { label: "Team Size", value: "1 Member", icon: <Users /> },
];

/* ─── component ─────────────────────────────────────────── */
const TicketBookingDetail = () => {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const thumbnailScrollRef = React.useRef(null);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveScreenshot((p) => (p + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const scrollThumbnails = (dir) => {
    if (thumbnailScrollRef.current)
      thumbnailScrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
  };

  return (
    <div ref={sectionRef} className="tb-root">
      {/* ── background ── */}
      <div className="tb-grid-bg" />
      <div className="tb-glow-1" />
      <div className="tb-glow-2" />

      <div className={`tb-inner ${isVisible ? "tb-in" : ""}`}>

        {/* ══════════════════ HERO ══════════════════ */}
        <section className="tb-hero">
          <div className="tb-hero-bg-img">
                <img src={heroImg} alt="" aria-hidden="true" className="tb-hero-bg-photo" />
                
            <div className="tb-hero-bg-fallback" />
            <div className="tb-hero-bg-overlay" />
          </div>

          <div className="tb-hero-content">
            <div className="tb-hero-left">
              <button className="tb-back-btn" onClick={() => navigate("/")}>
                <ArrowLeft size={16} />
                <span>Back to Projects</span>
              </button>

              <div className="tb-eyebrow">
                <span className="tb-eyebrow-line" />
                <Sparkles size={13} />
                <span>Full Stack Project · 2024</span>
                <Sparkles size={13} />
                <span className="tb-eyebrow-line" />
              </div>

              <h1 className="tb-hero-title">
                Real-Time Ticket
                <br />
                <em className="tb-title-em">Booking System</em>
              </h1>

              <p className="tb-hero-subtitle">
                A live event ticketing platform where seat availability updates
                instantly across all users — no refresh needed. Built with
                React, Node.js, and Socket.io.
              </p>

              {/* stat cards */}
              <div className="hd-hero-stats">
                {projectStats.map((s, i) => (
                  <div key={i} className="hd-stat-card">
                    <div className="hd-stat-icon">{s.icon}</div>
                    <div>
                      <div className="hd-stat-value">{s.value}</div>
                      <div className="hd-stat-label">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="tb-hero-pills">
                {["React", "Node.js", "Spring Boot", "MySQL"].map((t) => (
                  <span key={t} className="tb-pill">{t}</span>
                ))}
              </div>

              <div className="tb-hero-actions">
                <button
                  className="tb-btn-primary"
                  onClick={() => window.open("https://github.com/yasirunadeeshaa/REAL-TIME-TICKET-BOOKING-SYSTEM", "_blank")}
                >
                  <Github size={17} />
                  <span>Source Code</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ BODY ══════════════════ */}
        <div className="tb-body">

          {/* ── PROJECT DESCRIPTION + DETAILS ── */}
          <div className="tb-top-grid">

            {/* description card */}
            <div className="tb-card tb-card-desc">
              <p className="tb-eyebrow-sm">About the Project</p>
              <h2 className="tb-section-heading">What is it?</h2>
              <p className="tb-text">
                This is a real-time ticket booking application that lets users
                browse events, pick seats from a live seating map, and complete
                checkout — all while seeing exactly which seats other users
                are viewing or holding at that moment.
              </p>
              <p className="tb-text">
                The core challenge was preventing double-booking: when a user
                selects a seat, Socket.io broadcasts a lock to every connected
                client immediately. A 10-minute countdown timer holds the
                reservation; if checkout is abandoned the seat is released
                back to the pool automatically.
              </p>
              <p className="tb-text">
                The backend is a REST + WebSocket hybrid — HTTP endpoints
                handle CRUD operations for events and bookings, while a
                persistent Socket.io namespace streams seat-state changes
                in real time. JWT secures authenticated routes and Stripe
                handles payment processing with webhook confirmation.
              </p>
            </div>

            {/* details sidebar */}
            <div className="tb-card tb-card-details">
              <p className="tb-eyebrow-sm">Project Details</p>

              {[
                ["Type",     "Web Application"],
                ["Status",   <span className="tb-status-done"><span className="tb-status-dot"/>Completed</span>],
                ["Timeline", "3 Months · 2024"],
                ["Role",     "Full Stack Developer"],
                ["Category", "Course Work / Academic Project"],
              ].map(([label, val], i) => (
                <div key={i} className="tb-info-row">
                  <span className="tb-info-label">{label}</span>
                  <span className="tb-info-value">{val}</span>
                </div>
              ))}

              <div className="tb-divider-thin" />

              <p className="tb-eyebrow-sm" style={{ marginTop: 20 }}>Platform</p>
              <div className="tb-platform-row">
                {[["Web", <Monitor size={20}/>], ["Cloud", <Globe size={20}/>]].map(([n, icon], i) => (
                  <div key={i} className="tb-platform-item">
                    {icon}<span>{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── TECHNOLOGIES ── */}
          <div className="tb-card tb-card-full">
            <div className="tb-section-header">
              <p className="tb-eyebrow-sm">Stack</p>
              <h2 className="tb-section-heading">Technologies Used</h2>
            </div>
            <div className="tb-tech-grid">
              {technologies.map((t, i) => (
                <div key={i} className="tb-tech-card" style={{ "--tc": t.color }}>
                  <span className="tb-tech-indicator" />
                  <span className="tb-tech-icon">{t.icon}</span>
                  <span className="tb-tech-name">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
        {/* /tb-body */}

        {/* ══════════════════ SCREENSHOTS ══════════════════ */}
        <div className="tb-ss-section">
          <div className="tb-divider">
            <span className="tb-divider-line" />
            <span className="tb-divider-label">Application Preview</span>
            <span className="tb-divider-line" />
          </div>

          <h2 className="tb-section-heading tb-ss-heading">
            Explore the <em className="tb-em">Interface</em>
          </h2>
          <p className="tb-ss-sub">
            A walkthrough of every key screen in the booking flow.
          </p>

          {/* featured frame */}
          <div className="tb-ss-main">
            <div className="tb-browser-frame">
              <div className="tb-browser-bar">
                <div className="tb-browser-dots">
                  <span className="tb-dot tb-dot-r" />
                  <span className="tb-dot tb-dot-y" />
                  <span className="tb-dot tb-dot-g" />
                </div>
                <div className="tb-browser-url">ticketbooking.demo</div>
              </div>
              {screenshots[activeScreenshot].url ? (
                <img
                  src={screenshots[activeScreenshot].url}
                  alt={screenshots[activeScreenshot].title}
                  className="tb-ss-img"
                />
              ) : (
                <div className="tb-ss-placeholder">
                  <Ticket size={44} strokeWidth={1} color="rgba(124,140,248,0.25)" />
                  <span>{screenshots[activeScreenshot].title}</span>
                  <span className="tb-ss-placeholder-sub">
                    Add your screenshot to src/assets/Ticket/
                  </span>
                </div>
              )}
            </div>
            <div className="tb-ss-meta">
              <h3 className="tb-ss-title">{screenshots[activeScreenshot].title}</h3>
              <p className="tb-ss-desc">{screenshots[activeScreenshot].description}</p>
            </div>
          </div>

          {/* thumbnails */}
          <div className="tb-thumb-breakout">
            <div className="tb-thumb-row">
              <button className="tb-thumb-scroll-btn" onClick={() => scrollThumbnails("left")}>
                <ArrowLeft size={20} />
              </button>
              <div className="tb-thumb-track" ref={thumbnailScrollRef}>
                {screenshots.map((s, i) => (
                  <div
                    key={s.id}
                    className={`tb-thumb-card ${activeScreenshot === i ? "tb-thumb-active" : ""}`}
                    onClick={() => setActiveScreenshot(i)}
                  >
                    <div className="tb-thumb-img-wrap">
                      {s.url ? (
                        <img src={s.url} alt={s.title} className="tb-thumb-img" />
                      ) : (
                        <div className="tb-thumb-img-placeholder">
                          <Ticket size={22} strokeWidth={1} color="rgba(124,140,248,0.35)" />
                        </div>
                      )}
                      <div className="tb-thumb-overlay">
                        <Play size={18} className="tb-thumb-play" />
                      </div>
                    </div>
                    <div className="tb-thumb-label">
                      <span className="tb-thumb-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="tb-thumb-name">{s.title}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="tb-thumb-scroll-btn" onClick={() => scrollThumbnails("right")}>
                <ArrowLeft size={20} style={{ transform: "rotate(180deg)" }} />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ═══════════════════════ STYLES ═══════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── Root ── */
        .tb-root {
          position: relative; min-height: 100vh;
          background: #080c14; overflow: hidden;
          font-family: 'DM Sans', sans-serif; color: #f0f4ff;
        }

        /* ── Background ── */
        .tb-grid-bg {
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none; z-index: 0;
        }
        .tb-glow-1 {
          position: fixed; top: -180px; right: -160px;
          width: 680px; height: 680px;
          background: radial-gradient(circle, rgba(124,140,248,0.10) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: tb-drift1 20s ease-in-out infinite alternate;
        }
        .tb-glow-2 {
          position: fixed; bottom: -120px; left: -80px;
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(232,121,160,0.08) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: tb-drift2 25s ease-in-out infinite alternate;
        }
        @keyframes tb-drift1 { from{transform:translate(0,0)} to{transform:translate(-60px,50px)} }
        @keyframes tb-drift2 { from{transform:translate(0,0)} to{transform:translate(50px,-40px)} }

        /* ── Inner ── */
        .tb-inner {
          position: relative; z-index: 1;
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .tb-inner.tb-in { opacity: 1; transform: translateY(0); }

        /* ══════════ HERO ══════════ */
        .tb-hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center;
          padding: 120px 64px 80px; overflow: hidden;
        }
        .tb-hero-bg-img { position: absolute; inset: 0; z-index: 0; }
        .tb-hero-bg-fallback {
          width: 100%; height: 100%;
          background: linear-gradient(135deg, rgba(124,140,248,0.04) 50%, rgba(232,121,160,0.03) 50%);
        }
        .tb-hero-bg-photo {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center 30%;
          filter: blur(0px) brightness(0.82) saturate(0.7);
          transform: scale(1.06);
        }
        .tb-hero-bg-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(to bottom, rgba(8,12,20,0.35) 0%, rgba(8,12,20,0.80) 100%, #080c14 100%),
            linear-gradient(to right, rgba(8,12,20,0.55) 0%, transparent 70%);
        }
        .tb-hero-content {
          position: relative; z-index: 2;
          max-width: 880px; margin: 0 auto; width: 100%;
          display: flex; justify-content: center;
        }
        .tb-hero-left {
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
        }

        /* back btn */
        .tb-back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px; color: #94a3b8;
          font-size: 13px; font-weight: 600; cursor: pointer;
          transition: all 0.3s ease; align-self: center;
          margin-bottom: 32px; font-family: 'DM Sans', sans-serif;
        }
        .tb-back-btn:hover { background: rgba(255,255,255,0.10); color: #f0f4ff; transform: translateX(-4px); }

        /* eyebrow */
        .tb-eyebrow {
          display: flex; align-items: center; gap: 12px;
          font-size: 11px; font-weight: 600; letter-spacing: 3px;
          text-transform: uppercase; color: #a4acbb; margin-bottom: 24px;
          justify-content: center;
        }
        .tb-eyebrow-line { display: block; width: 32px; height: 1px; background: #4a5568; }
        .tb-eyebrow-sm {
          font-size: 10px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: #4a5568; margin-bottom: 10px;
        }

        /* title */
        .tb-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(42px, 5vw, 62px); font-weight: 400;
          line-height: 1.05; letter-spacing: -2px; color: #f0f4ff; margin-bottom: 24px;
        }
        .tb-title-em, .tb-em {
          font-style: italic;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .tb-hero-subtitle {
          font-size: 17px; line-height: 1.75; color: #a4a7ac;
          font-weight: 500; max-width: 560px; margin: 0 auto 28px;
        }

        /* pills */
        .tb-hero-pills { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 36px; justify-content: center; }
        .tb-pill {
          padding: 6px 14px;
          background: rgba(124,140,248,0.10);
          border: 1px solid rgba(124,140,248,0.22);
          border-radius: 50px; color: #a5b4fc;
          font-size: 12px; font-weight: 600; letter-spacing: 0.3px;
        }

        /* stat cards */
        .hd-hero-stats { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 36px; }
        .hd-stat-card {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 20px;
          background: rgba(11,17,32,0.75);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          backdrop-filter: blur(12px);
          transition: border-color 0.3s ease, transform 0.3s ease;
          flex: 1 1 160px;
        }
        .hd-stat-card:hover { border-color: rgba(124,140,248,0.35); transform: translateY(-3px); }
        .hd-stat-icon {
          width: 42px; height: 42px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(124,140,248,0.12); color: #7c8cf8; flex-shrink: 0;
        }
        .hd-stat-value {
          font-family: 'DM Serif Display', serif;
          font-size: 22px; font-weight: 400; color: #f0f4ff;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1; margin-bottom: 3px;
        }
        .hd-stat-label { font-size: 11px; color: #4a5568; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; }


        /* action buttons */
        .tb-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
        .tb-btn-primary, .tb-btn-secondary {
          position: relative; display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border: none; border-radius: 0; cursor: pointer;
          clip-path: polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);
          font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
          font-family: 'DM Sans', sans-serif; overflow: hidden; isolation: isolate;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .tb-btn-primary { background: #0d1424; color: #7dd3fc; box-shadow: inset 0 0 0 1px rgba(125,211,252,0.35); }
        .tb-btn-primary::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(100deg,#06b6d4,#7c3aed);
          transform: translateX(-101%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1); z-index: -1;
        }
        .tb-btn-primary:hover { color: #fff; box-shadow: none; }
        .tb-btn-primary:hover::before { transform: translateX(0); }
        .tb-btn-secondary { background: transparent; color: #c4b5fd; box-shadow: inset 0 0 0 1px rgba(196,181,253,0.4); }
        .tb-btn-secondary::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(100deg,#7c3aed,#ec4899);
          transform: translateX(-101%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1); z-index: -1;
        }
        .tb-btn-secondary:hover { color: #fff; box-shadow: none; }
        .tb-btn-secondary:hover::before { transform: translateX(0); }

        /* ══════════ BODY ══════════ */
        .tb-body {
          max-width: 1280px; margin: 0 auto;
          padding: 72px 64px 40px;
          display: flex; flex-direction: column; gap: 2px;
        }

        /* cards */
        .tb-card {
          background: #0b1120;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 36px;
          transition: background 0.3s ease;
        }
        .tb-card:hover { background: #0f1929; }
        .tb-card-full { border-radius: 20px; }

        /* top 2-col grid */
        .tb-top-grid {
          display: grid; grid-template-columns: 1.6fr 1fr;
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; overflow: hidden;
          margin-bottom: 2px;
        }
        .tb-card-desc  { border-radius: 0; border: none; }
        .tb-card-details { border-radius: 0; border: none; border-left: 1px solid rgba(255,255,255,0.05); }

        /* section header */
        .tb-section-header { margin-bottom: 32px; }
        .tb-section-heading {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(28px, 3vw, 38px); font-weight: 400;
          line-height: 1.1; letter-spacing: -1px; color: #f0f4ff;
          margin-bottom: 0;
        }
        .tb-text { font-size: 15px; color: #94a3b8; line-height: 1.8; margin-bottom: 16px; font-weight: 300; }
        .tb-text:last-child { margin-bottom: 0; }

        /* info rows */
        .tb-info-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .tb-info-row:last-of-type { border-bottom: none; }
        .tb-info-label { font-size: 11px; color: #4a5568; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .tb-info-value { font-size: 13px; color: #f0f4ff; font-weight: 600; }
        .tb-status-done { display: flex; align-items: center; gap: 7px; color: #86efac; }
        .tb-status-dot {
          width: 7px; height: 7px; border-radius: 50%; background: currentColor;
          animation: tb-pulse 2s ease-in-out infinite;
        }
        @keyframes tb-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }
        .tb-divider-thin { height: 1px; background: rgba(255,255,255,0.05); margin: 4px 0; }

        /* platform */
        .tb-platform-row { display: flex; gap: 10px; margin-top: 8px; }
        .tb-platform-item {
          flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 14px 10px;
          background: rgba(124,140,248,0.08); border: 1px solid rgba(124,140,248,0.18);
          border-radius: 12px; color: #a5b4fc; font-size: 12px; font-weight: 600;
          transition: all 0.3s ease;
        }
        .tb-platform-item:hover { background: rgba(124,140,248,0.15); transform: translateY(-3px); }

        /* tech grid */
        .tb-tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 2px;
          background: rgba(255,255,255,0.03);
          border-radius: 14px; overflow: hidden;
        }
        .tb-tech-card {
          display: flex; align-items: center; gap: 12px;
          padding: 16px 18px; background: #0d1525;
          transition: background 0.3s ease; position: relative; overflow: hidden;
        }
        .tb-tech-card:hover { background: #111d35; }
        .tb-tech-indicator {
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: var(--tc); opacity: 0; transition: opacity 0.3s ease;
        }
        .tb-tech-card:hover .tb-tech-indicator { opacity: 1; }
        .tb-tech-icon { font-size: 24px; flex-shrink: 0; }
        .tb-tech-name { font-size: 14px; font-weight: 600; color: #f0f4ff; }

        /* ══════════ SCREENSHOTS ══════════ */
        .tb-ss-section {
          max-width: 1280px; margin: 40px auto 0;
          padding: 0 64px 80px;
        }
        .tb-divider { display: flex; align-items: center; gap: 20px; margin-bottom: 32px; }
        .tb-divider-line { flex: 1; height: 1px; background: rgba(255,255,255,0.06); }
        .tb-divider-label { font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: #2d3748; white-space: nowrap; }
        .tb-ss-heading { text-align: center; margin-bottom: 10px; }
        .tb-ss-sub { font-size: 15px; color: #64748b; text-align: center; margin-bottom: 40px; font-weight: 300; }

        .tb-ss-main {
          background: #0b1120; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 28px; margin-bottom: 24px;
        }
        .tb-browser-frame { border-radius: 14px; overflow: hidden; background: #1e293b; margin-bottom: 20px; }
        .tb-browser-bar {
          display: flex; align-items: center; padding: 14px 18px;
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          border-bottom: 1px solid rgba(255,255,255,0.05); position: relative;
        }
        .tb-browser-dots { display: flex; gap: 7px; }
        .tb-dot { width: 11px; height: 11px; border-radius: 50%; }
        .tb-dot-r { background: #ff5f57; } .tb-dot-y { background: #febc2e; } .tb-dot-g { background: #28c840; }
        .tb-browser-url {
          position: absolute; left: 50%; transform: translateX(-50%);
          padding: 6px 18px; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08); border-radius: 6px;
          color: #64748b; font-size: 12px; font-family: 'Monaco', monospace;
        }
        .tb-ss-img { width: 100%; display: block; object-fit: contain; max-height: 520px; min-height: 300px; background: #0a0e1a; }
        .tb-ss-placeholder {
          width: 100%; min-height: 300px; max-height: 520px;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px;
          background: #0a0e1a; color: #4a5568; font-size: 14px; font-weight: 600;
        }
        .tb-ss-placeholder-sub { font-size: 11px; color: #2d3748; font-weight: 400; }
        .tb-ss-title { font-family: 'DM Serif Display', serif; font-size: 24px; color: #f0f4ff; margin-bottom: 8px; }
        .tb-ss-desc   { font-size: 14px; color: #64748b; line-height: 1.7; font-weight: 300; }

        /* thumbnails */
        .tb-thumb-breakout {
          position: relative;
          max-width: 1300px;
           padding: 0 24px; box-sizing: border-box;
        }
        .tb-thumb-row { display: flex; align-items: center; gap: 12px; }
        .tb-thumb-scroll-btn {
          flex-shrink: 0; width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(124,140,248,0.12); border: 1px solid rgba(124,140,248,0.25);
          color: #f0f4ff; cursor: pointer; transition: all 0.3s ease; font-family: 'DM Sans', sans-serif;
        }
        .tb-thumb-scroll-btn:hover { background: rgba(124,140,248,0.25); transform: scale(1.08); }
        .tb-thumb-track {
          display: flex; gap: 16px; overflow-x: auto; scroll-behavior: smooth;
          padding: 14px 6px; flex: 1;
          scrollbar-width: thin; scrollbar-color: rgba(124,140,248,0.4) rgba(255,255,255,0.05);
        }
        .tb-thumb-track::-webkit-scrollbar { height: 5px; }
        .tb-thumb-track::-webkit-scrollbar-track { background: rgba(255,255,255,0.04); border-radius: 10px; }
        .tb-thumb-track::-webkit-scrollbar-thumb { background: rgba(124,140,248,0.4); border-radius: 10px; }
        .tb-thumb-card { flex: 0 0 200px; cursor: pointer; transition: transform 0.3s ease; }
        .tb-thumb-card:hover { transform: translateY(-4px); }
        .tb-thumb-img-wrap {
          position: relative; border-radius: 12px; overflow: hidden;
          border: 2px solid rgba(255,255,255,0.06); aspect-ratio: 16/10;
          transition: border-color 0.3s ease;
        }
        .tb-thumb-active .tb-thumb-img-wrap { border-color: rgba(124,140,248,0.7); box-shadow: 0 0 0 3px rgba(124,140,248,0.18); }
        .tb-thumb-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .tb-thumb-card:hover .tb-thumb-img { transform: scale(1.05); }
        .tb-thumb-img-placeholder {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(11,17,32,0.9);
        }
        .tb-thumb-overlay {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, rgba(124,140,248,0.88), rgba(232,121,160,0.88));
          opacity: 0; transition: opacity 0.3s ease;
        }
        .tb-thumb-card:hover .tb-thumb-overlay { opacity: 1; }
        .tb-thumb-play { color: #fff; }
        .tb-thumb-label { display: flex; align-items: center; gap: 8px; margin-top: 10px; }
        .tb-thumb-num  { font-size: 12px; font-weight: 800; color: #7c8cf8; background: rgba(124,140,248,0.12); padding: 3px 8px; border-radius: 5px; font-family: 'Monaco', monospace; }
        .tb-thumb-name { font-size: 12px; font-weight: 600; color: #64748b; }
        .tb-thumb-active .tb-thumb-name { color: #a5b4fc; }

        /* ══════════ RESPONSIVE ══════════ */
        @media (max-width: 1100px) {
          .tb-hero { padding: 100px 40px 70px; }
          .tb-body, .tb-ss-section { padding-left: 40px; padding-right: 40px; }
          .tb-top-grid { grid-template-columns: 1fr; }
          .tb-card-details { border-left: none; border-top: 1px solid rgba(255,255,255,0.05); }
        }
        @media (max-width: 768px) {
          .tb-hero { padding: 80px 24px 60px; min-height: auto; }
          .tb-body, .tb-ss-section { padding-left: 24px; padding-right: 24px; }
          .tb-tech-grid { grid-template-columns: repeat(2, 1fr); }
          .tb-browser-url { display: none; }
          .tb-thumb-card { flex: 0 0 170px; }
        }
        @media (max-width: 480px) {
          .tb-hero-title { font-size: 36px; }
          .tb-hero-actions { flex-direction: column; }
          .tb-btn-primary, .tb-btn-secondary { width: 100%; justify-content: center; }
          .tb-tech-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default TicketBookingDetail;