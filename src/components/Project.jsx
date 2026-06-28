import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ExternalLink, Github, Play, Sparkles, Zap, Eye,
  Star, TrendingUp, ArrowUpRight,
} from 'lucide-react';
import health from '../assets/doctor1.jpg';
import student from '../assets/students.jpg';
import analyse from '../assets/analyse.jpg';
import ecommerce from '../assets/e-commerce.avif';
import wedding from '../assets/wedding.jpg';
import planeTicket from '../assets/TicketBooking.jpg';
import CinemaTicket from '../assets/Cinematicketbooking.jpg';
import hotel from '../assets/hotelmanagement.webp';
import product from '../assets/productorder.jpg';

/* ─── 3 MAIN projects (row 1 — large, hero-style cards) ─── */
const MAIN_PROJECTS = [
  {
    id: 1,
    title: 'HealthCare Application',
    featured: true,
    status: 'In Development',
    description: 'Advanced healthcare management system with AI-powered diagnostics, patient tracking, and telemedicine capabilities.',
    image: health,
    tags: ['Spring Boot','React', 'Flutter', 'AI/ML', 'MySQL'],
    metrics: { users: '10K+', rating: '4.9', performance: '98%' },
    links: { live: 'https://health-nexus.netlify.app', github: '#' },
    color: 'pp-gradient-blue-cyan',
    detailPage: '/projects/healthcare',
  },
  {
    id: 2,
    title: 'Wedding Manage Application',
    featured: true,
    status: 'Live',
    description: 'End-to-end wedding planning platform with vendor management, budget tracking, and guest RSVP automation.',
    image: wedding,
    tags: ['React', 'Express.js', 'Node.js', 'MySQL'],
    metrics: { users: '25K+', rating: '4.8', performance: '95%' },
    links: { live: 'https://wedify.netlify.app', github: '#' },
    color: 'pp-gradient-purple-pink',
    detailPage: '/projects/wedding',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    featured: true,
    status: 'Live',
    description: 'Full-featured online marketplace with real-time inventory, payment integration, and advanced analytics dashboard.',
    image: ecommerce,
    tags: ['React', 'Spring Boot', 'FastAPI', 'MySQL'],
    metrics: { users: '25K+', rating: '4.8', performance: '95%' },
    links: { live: 'https://pos-system-pro.netlify.app', github: '#' },
    color: 'pp-gradient-purple-pink',
    detailPage: '/projects/ecommerce',
  },
];

/* ─── 5 SUB projects (row 2 — compact, secondary cards) ─── */
const SUB_PROJECTS = [
  {
    id: 4,
    title: 'University Management System',
    status: 'Live',
    description: 'Comprehensive university management platform covering enrollment, attendance, grades, and parent communication portals.',
    image: student,
    tags: ['JavaFX', 'Java', 'MySQL', 'JasperReports'],
    metrics: { users: '8K+', rating: '4.7', performance: '93%' },
    links: { live: '#', github: '#' },
    color: 'pp-gradient-green-emerald',
    detailPage: '/projects/student-management',
  },
  {
    id: 5,
    title: 'Real Time ticket Booking System',
    status: 'Live',
    description: 'Real-time ticket booking system with automated availability checks, payment processing, and confirmation emails.',
    image: CinemaTicket,
    tags: ['Spring Boot', 'React', 'MySQL'],
    metrics: { users: '15K+', rating: '4.7', performance: '92%' },
    links: { live: '#', github: '#' },
    color: 'pp-gradient-green-emerald',
    detailPage: '/projects/ticket-booking',
  },
  {
    id: 6,
    title: 'Product Order System',
    status: 'Live',
    description: 'Dynamic content management system for creative professionals with drag-and-drop builder and SEO optimisation.',
    image: product,
    tags: ['Spring Boot', 'MySQL'],
    metrics: { users: '8K+', rating: '4.9', performance: '97%' },
    links: { live: '#', github: '#' },
    color: 'pp-gradient-orange-red',
    detailPage: null,
  },
  {
    id: 7,
    title: 'Hotel Management System',
    status: 'Live',
    description: 'Cross-platform productivity app with team collaboration, time tracking, and intelligent task prioritisation.',
    image: hotel,
    tags: ['Spring Boot', 'React', 'MySQL'],
    metrics: { users: '20K+', rating: '4.6', performance: '94%' },
    links: { live: '#', github: '#' },
    color: 'pp-gradient-indigo-purple',
    detailPage: '/projects/task-management',
  },
  {
    id: 8,
    title: 'Plane Ticket Booking System',
    status: 'Live',
    description: 'Real-time business intelligence platform with customisable widgets, data visualisation, and automated reporting.',
    image: planeTicket,
    tags: ['Java', 'Second Year Project'],
    metrics: { users: '12K+', rating: '4.8', performance: '96%' },
    links: { live: '#', github: '#' },
    color: 'pp-gradient-yellow-orange',
    detailPage: null,
  },
];

const COMPACT_PROJECTS = [
  {
    id: 9,
    title: 'Portfolio',
    status: 'Live',
    statusColor: '#34d399',
    description: 'Personal portfolio website showcasing projects, skills, and experience with a modern, responsive design.',
    tags: ['React', 'Tailwind CSS'],
    accent: '#38bdf8',
    detailPage: null,
  },
  {
    id: 10,
    title: 'Business Website',
    status: 'Live - aththanayakasupermart.lk',
    statusColor: '#34d399',
    description: 'Responsive business website template with multi-language support, accessibility compliance, and SEO optimisation.',
    tags: ['React', 'Tailwind CSS'],
    accent: '#a78bfa',
    detailPage: null,
  },
  {
    id: 11,
    title: 'Eco-Friendly Sustainable System',
    status: 'First year project',
    statusColor: '#38bdf8',
    description: 'Develop a sustainable system that promotes eco-friendly practices and resource management, integrating IoT sensors and data analytics for real-time monitoring.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    accent: '#fbbf24',
    detailPage: null,
  },
  {
    id: 12,
    title: 'Student management System',
    status: 'First year project',
    statusColor: '#34d399',
    description: 'Create a student management system that allows users to manage student results and view them in a user-friendly interface.',
    tags: ['Python'],
    accent: '#e879a0',
    detailPage: null,
  },
  {
    id: 13,
    title: 'Algorithm Visualizer',
    status: 'Developed in 2023',
    statusColor: '#34d399',
    description: 'Fine max flow in graphs using Ford-Fulkerson algorithm with visual representation of augmenting paths and residual networks.',
    tags: ['Ford Fulkerson', 'Java'],
    accent: '#34d399',
    detailPage: null,
  },
  {
    id: 14,
    title: 'HEALTHNEXUS Demo Website',
    status: 'Live -> health-nexus.netlify.app',
    statusColor: '#34d399',
    description: 'Final year project demo website for healthcare management system with AI-powered diagnostics, patient tracking, and telemedicine capabilities.',
    tags: ['React', 'Tailwind CSS', 'MailJs'],
    accent: '#fb923c',
    detailPage: null,
  },
  {
    id: 15,
    title: 'NexusPOS Demo Website',
    status: 'Live -> pos-system-pro.netlify.app',
    statusColor: '#38bdf8',
    description: 'Demo website for point-of-sale system with inventory management, sales tracking, and reporting features.',
    tags: ['React', 'Tailwind CSS', 'Chart.js'],
    accent: '#7c8cf8',
    detailPage: null,
  },
  {
    id: 16,
    title: 'Wedify Demo Website',
    status: 'Live -> wedify.netlify.app',
    statusColor: '#34d399',
    description: 'Demo website for wedding management system with vendor management, budget tracking, and guest RSVP automation.',
    tags: ['React', 'Tailwind CSS'],
    accent: '#a78bfa',
    detailPage: null,
  },
];

/* ══════════════════════════════════════════════════════ */
const PortfolioProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleViewProject = (project) => {
    if (project.detailPage) navigate(project.detailPage);
  };

  return (
    <div ref={sectionRef} className="pj-root">

      {/* ── shared background (matches AboutMe) ── */}
      <div className="pj-grid-bg" />
      <div className="pj-glow-1" />
      <div className="pj-glow-2" />

      <div className={`pj-inner ${isVisible ? 'pj-in' : ''}`}>

        {/* ── Header ── */}
        <header className="pj-header">
          <div className="pj-eyebrow">
            <span className="pj-eyebrow-line" />
            <Sparkles size={14} style={{ color: '#4a5568' }} />
            <span>Portfolio Showcase</span>
            <Sparkles size={14} style={{ color: '#4a5568' }} />
            <span className="pj-eyebrow-line" />
          </div>
          <h2 className="pj-title">
            Featured <em className="pj-title-em">Projects</em>
          </h2>
          <p className="pj-subtitle">
            Innovative solutions built with precision. Each project is a distinct challenge met
            with clean architecture and thoughtful user experience.
          </p>
        </header>

        {/* ── ROW 1 — 3 Main Project Cards ── */}
        <div className="pp-main-grid">
          {MAIN_PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="pp-project-card pp-main-card"
              style={{ animationDelay: `${index * 0.08}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured badge */}
              <div className="pp-status-badge-container">
                {project.featured && (
                  <span className="pp-featured-badge">
                    <Star size={14} />
                    Featured
                  </span>
                )}
              </div>

              {/* Image */}
              <div className="pp-project-image-container pp-main-image-container">
                <img src={project.image} alt={project.title} className="pp-project-image" />
                <div className={`pp-image-overlay ${hoveredProject === project.id ? 'pp-active' : ''}`}>
                  <div className="pp-overlay-gradient" />
                  <div className="pp-overlay-actions">
                    <button
                      className="pp-overlay-btn pp-primary"
                      onClick={() => handleViewProject(project)}
                    >
                      <Eye size={18} />
                      <span>View Project</span>
                    </button>
                    <div className="pp-overlay-icon-btns">
                      <button className="pp-overlay-icon-btn"><ExternalLink size={18} /></button>
                      <button className="pp-overlay-icon-btn"><Github size={18} /></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pp-project-content">
                <h3 className="pp-project-title pp-main-title">{project.title}</h3>
                <p className="pp-project-description">{project.description}</p>

                <div className="pp-project-metrics">
                  <div className="pp-metric-item">
                    <TrendingUp size={16} className="pp-metric-icon" />
                    <span className="pp-metric-label">Users:</span>
                    <span className="pp-metric-value">{project.metrics.users}</span>
                  </div>
                  <div className="pp-metric-item">
                    <Star size={16} className="pp-metric-icon" />
                    <span className="pp-metric-label">Rating:</span>
                    <span className="pp-metric-value">{project.metrics.rating}</span>
                  </div>
                  <div className="pp-metric-item">
                    <Zap size={16} className="pp-metric-icon" />
                    <span className="pp-metric-label">Performance:</span>
                    <span className="pp-metric-value">{project.metrics.performance}</span>
                  </div>
                </div>

                <div className="pp-project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="pp-project-tag">{tag}</span>
                  ))}
                </div>

                <div className="pp-project-actions">
                  <button
                    className="pp-action-btn pp-primary pp-equal-btn"
                    onClick={() => handleViewProject(project)}
                  >
                    <Play size={18} />
                    <span>View Project</span>
                  </button>
                  <button
                    className="pp-action-btn pp-demo-btn pp-equal-btn"
                    onClick={() => project.links?.live && window.open(project.links.live, '_blank')}
                  >
                    <ExternalLink size={18} />
                    <span>View Demo</span>
                  </button>
                </div>
              </div>

              <div className={`pp-card-border-gradient ${project.color}`} />
            </div>
          ))}
        </div>

        {/* ── ROW 2 — 5 Sub Project Cards (compact) ── */}
        <div className="pp-sub-grid">
          {SUB_PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="pp-project-card pp-sub-card"
              style={{ animationDelay: `${(index + 3) * 0.08}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <div className="pp-project-image-container pp-sub-image-container">
                <img src={project.image} alt={project.title} className="pp-project-image" />
                <div className={`pp-image-overlay ${hoveredProject === project.id ? 'pp-active' : ''}`}>
                  <div className="pp-overlay-gradient" />
                  <div className="pp-overlay-actions">
                    <button
                      className="pp-overlay-btn pp-primary pp-sub-overlay-btn"
                      onClick={() => handleViewProject(project)}
                    >
                      <Eye size={16} />
                      <span>View</span>
                    </button>
                    <div className="pp-overlay-icon-btns">
                      <button className="pp-overlay-icon-btn pp-sub-icon-btn"><ExternalLink size={15} /></button>
                      <button className="pp-overlay-icon-btn pp-sub-icon-btn"><Github size={15} /></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pp-project-content pp-sub-content">
                <h3 className="pp-project-title pp-sub-title">{project.title}</h3>
                <p className="pp-project-description pp-sub-desc">{project.description}</p>

                <div className="pp-project-tags pp-sub-tags">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="pp-project-tag pp-sub-tag">{tag}</span>
                  ))}
                </div>

                <div className="pp-project-actions pp-sub-actions">
                  <button
                    className="pp-action-btn pp-primary pp-sub-action-btn pp-sub-full-btn"
                    onClick={() => handleViewProject(project)}
                  >
                    <Play size={15} />
                    <span>View Project</span>
                  </button>
                </div>
              </div>

              <div className={`pp-card-border-gradient ${project.color}`} />
            </div>
          ))}
        </div>

        {/* ── Section divider ── */}
        <div className="pj-section-divider">
          <span className="pj-sd-line" />
          <span className="pj-sd-label">More Projects</span>
          <span className="pj-sd-line" />
        </div>

        {/* ── Auto-scroll infinite marquee ── */}
        <div
          className="pj-marquee-wrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fade edges */}
          <div className="pj-fade-left" />
          <div className="pj-fade-right" />

          {/* Marquee track — cards duplicated for seamless loop */}
          <div className={`pj-marquee-track ${isPaused ? 'pj-paused' : ''}`}>
            {[...COMPACT_PROJECTS, ...COMPACT_PROJECTS].map((project, i) => {
              const idx = String(project.id).padStart(2, '0');
              return (
                <div
                  key={i}
                  className="pj-card-compact"
                  style={{ '--pa': project.accent, '--sc': project.statusColor }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => handleViewProject(project)}
                >
                  <div className="pj-cc-top">
                    <div className="pj-cc-icon">{idx}</div>
                    <div className="pj-cc-arrow"><ArrowUpRight size={15} /></div>
                  </div>
                  <div className="pj-cc-title">{project.title}</div>
                  <p className="pj-cc-desc">{project.description}</p>
                  <div className="pj-cc-tags">
                    {project.tags.map(t => (
                      <span key={t} className="pj-cc-tag">{t}</span>
                    ))}
                  </div>
                  <div className="pj-cc-status">
                    <span className="pj-cc-status-dot" />
                    {project.status}
                  </div>
                  <div className="pj-cc-corner" />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Footer strip ── */}
        <div className="pj-footer-strip">
          {['16 Projects', 'Clean Architecture', 'Responsive Design', 'Open Source', 'Always Iterating'].map((label, i, arr) => (
            <React.Fragment key={i}>
              <span className="pj-strip-item">{label}</span>
              {i < arr.length - 1 && <span className="pj-strip-dot">·</span>}
            </React.Fragment>
          ))}
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ═══ Root & Background (matches AboutMe) ═══ */
        .pj-root {
          position: relative;
          min-height: 100vh;
          background: #080c14;
          overflow: hidden;
          padding: 100px 48px 80px;
          font-family: 'DM Sans', sans-serif;
        }

        .pj-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none;
        }

        .pj-glow-1 {
          position: absolute;
          top: -180px; right: -160px;
          width: 680px; height: 680px;
          background: radial-gradient(circle, rgba(124,140,248,0.10) 0%, transparent 70%);
          pointer-events: none;
          animation: pj-drift1 20s ease-in-out infinite alternate;
        }

        .pj-glow-2 {
          position: absolute;
          bottom: -120px; left: -80px;
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(232,121,160,0.08) 0%, transparent 70%);
          pointer-events: none;
          animation: pj-drift2 25s ease-in-out infinite alternate;
        }

        @keyframes pj-drift1 {
          from { transform: translate(0,0); }
          to   { transform: translate(-60px,50px); }
        }
        @keyframes pj-drift2 {
          from { transform: translate(0,0); }
          to   { transform: translate(50px,-40px); }
        }

        /* ═══ Inner wrapper ═══ */
        .pj-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .pj-inner.pj-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* ═══ Header (matches AboutMe header) ═══ */
        .pj-header {
          text-align: center;
          margin-bottom: 72px;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }

        .pj-eyebrow {
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

        .pj-eyebrow-line {
          display: block;
          width: 32px; height: 1px;
          background: #4a5568;
        }

        .pj-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(52px, 6vw, 60px);
          font-weight: 400;
          line-height: 1.0;
          color: #f0f4ff;
          letter-spacing: -1.5px;
          margin-bottom: 24px;
        }

        .pj-title-em {
          font-style: italic;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pj-subtitle {
          margin: 0 auto;
          font-size: 17px;
          line-height: 1.75;
          color: #64748b;
          font-weight: 300;
          max-width: 540px;
        }

        /* ═══ ROW 1 — Main projects grid (3 large cards) ═══ */
        .pp-main-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 16px;
          width: 100%;
        }

        /* ═══ ROW 2 — Sub projects grid (5 compact cards) ═══ */
        .pp-sub-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 56px;
          width: 100%;
        }

        .pp-project-card {
          position: relative;
          background: #0b1120;
          border: none;
          border-radius: 0;
          overflow: hidden;
          transition: background 0.35s ease;
          animation: pp-cardFadeIn 0.6s ease-out both;
        }

        @keyframes pp-cardFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pp-project-card:hover {
          background: #0f1929;
        }

        .pp-status-badge-container {
          position: absolute;
          top: 20px; left: 20px; right: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 3;
        }

        .pp-featured-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: rgba(251, 191, 36, 0.2);
          border: 1px solid rgba(251, 191, 36, 0.4);
          border-radius: 50px;
          color: #fcd34d;
          font-size: 13px;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .pp-project-image-container {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        /* Main row gets a taller hero image */
        .pp-main-image-container {
          height: 240px;
        }

        /* Sub row gets a shorter, compact image */
        .pp-sub-image-container {
          height: 140px;
        }

        .pp-project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .pp-project-card:hover .pp-project-image {
          transform: scale(1.1);
        }

        .pp-image-overlay {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pp-image-overlay.pp-active { opacity: 1; }

        .pp-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(102,126,234,0.9), rgba(118,75,162,0.9));
        }

        .pp-overlay-actions {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }

        .pp-overlay-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 30px;
          background: #0a0e1a;
          color: #ffffff;
          border: none;
          border-radius: 0;
          clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          font-family: 'DM Sans', sans-serif;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);
        }

        .pp-overlay-btn:hover {
          transform: scale(1.04);
          background: #ffffff;
          color: #0a0e1a;
          box-shadow: 0 10px 28px rgba(0,0,0,0.35);
        }

        .pp-sub-overlay-btn {
          padding: 10px 18px;
          font-size: 11px;
          gap: 7px;
          clip-path: polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px);
        }

        .pp-overlay-icon-btns {
          display: flex;
          gap: 12px;
        }

        .pp-overlay-icon-btn {
          width: 46px; height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(10,14,26,0.55);
          border: none;
          border-radius: 0;
          clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
          color: #ffffff;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          backdrop-filter: blur(10px);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.45);
        }

        .pp-overlay-icon-btn:hover {
          background: #ffffff;
          color: #0a0e1a;
          transform: scale(1.08) rotate(-4deg);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0);
        }

        .pp-sub-icon-btn {
          width: 34px; height: 34px;
        }

        .pp-project-content { padding: 20px 22px 26px; }

        .pp-sub-content {
          padding: 16px 16px 18px;
        }

        .pp-project-title {
          font-family: 'DM Serif Display', serif;
          font-size: 18px;
          font-weight: 400;
          color: white;
          margin-bottom: 8px;
          line-height: 1.25;
          letter-spacing: -0.3px;
        }

        .pp-main-title {
          font-size: 20px;
        }

        .pp-sub-title {
          font-size: 14px;
          margin-bottom: 6px;
        }

        .pp-project-description {
          font-size: 12px;
          color: #94a3b8;
          line-height: 1.65;
          margin-bottom: 14px;
          font-weight: 300;
        }

        .pp-sub-desc {
          font-size: 11px;
          line-height: 1.55;
          margin-bottom: 10px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .pp-project-metrics {
          display: flex;
          gap: 12px;
          padding: 12px 0;
          margin-bottom: 14px;
          border-top: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          flex-wrap: wrap;
        }

        .pp-metric-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
        }

        .pp-metric-icon { color: #667eea; }
        .pp-metric-label { color: #64748b; }
        .pp-metric-value { color: white; font-weight: 700; }

        .pp-project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 18px;
        }

        .pp-sub-tags {
          margin-bottom: 12px;
        }

        .pp-project-tag {
          padding: 4px 10px;
          background: rgba(102,126,234,0.12);
          border: 1px solid rgba(102,126,234,0.25);
          border-radius: 20px;
          color: #a5b4fc;
          font-size: 11px;
          font-weight: 600;
        }

        .pp-sub-tag {
          padding: 3px 8px;
          font-size: 9px;
        }

        .pp-project-actions {
          display: flex;
          gap: 10px;
        }

        .pp-action-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border: none;
          border-radius: 0;
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          isolation: isolate;
        }

        .pp-action-btn.pp-primary {
          flex: 1;
          background: #0d1424;
          color: #7dd3fc;
          box-shadow: inset 0 0 0 1px rgba(125,211,252,0.35);
        }

        .pp-action-btn.pp-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, #06b6d4, #7c3aed);
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          z-index: -1;
        }

        .pp-action-btn.pp-primary:hover {
          color: #ffffff;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0);
        }

        .pp-action-btn.pp-primary:hover::before {
          transform: translateX(0);
        }

        .pp-equal-btn {
          flex: 1 1 0;
        }

        .pp-action-btn.pp-demo-btn {
          background: transparent;
          color: #c4b5fd;
          box-shadow: inset 0 0 0 1px rgba(196,181,253,0.4);
        }

        .pp-action-btn.pp-demo-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, #7c3aed, #ec4899);
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          z-index: -1;
        }

        .pp-action-btn.pp-demo-btn:hover {
          color: #ffffff;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0);
        }

        .pp-action-btn.pp-demo-btn:hover::before {
          transform: translateX(0);
        }

        .pp-sub-action-btn {
          padding: 9px 14px;
          font-size: 10px;
          clip-path: polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px);
        }

        .pp-sub-full-btn {
          flex: 1;
          width: 100%;
        }

        .pp-card-border-gradient {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 4px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .pp-project-card:hover .pp-card-border-gradient { opacity: 1; }

        .pp-gradient-blue-cyan   { background: linear-gradient(to right, #3b82f6, #06b6d4); }
        .pp-gradient-purple-pink { background: linear-gradient(to right, #a855f7, #ec4899); }
        .pp-gradient-green-emerald { background: linear-gradient(to right, #10b981, #059669); }
        .pp-gradient-orange-red  { background: linear-gradient(to right, #f97316, #ef4444); }
        .pp-gradient-indigo-purple { background: linear-gradient(to right, #6366f1, #a855f7); }
        .pp-gradient-yellow-orange { background: linear-gradient(to right, #eab308, #f97316); }

        /* ═══ Section divider ═══ */
        .pj-section-divider {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 32px;
        }

        .pj-sd-line {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.06);
        }

        .pj-sd-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #2d3748;
          white-space: nowrap;
        }

        /* ═══ Full-width infinite auto-scroll marquee ═══ */
        .pj-marquee-wrap {
          position: relative;
          width: 100vw;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          overflow: hidden;
          padding: 8px 0 20px;
        }

        .pj-fade-left,
        .pj-fade-right {
          position: absolute;
          top: 0; bottom: 0;
          width: 120px;
          pointer-events: none;
          z-index: 5;
        }

        .pj-fade-left {
          left: 0;
          background: linear-gradient(to right, #080c14 0%, transparent 100%);
        }

        .pj-fade-right {
          right: 0;
          background: linear-gradient(to left, #080c14 0%, transparent 100%);
        }

        .pj-marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: pj-marquee 40s linear infinite;
        }

        .pj-marquee-track.pj-paused {
          animation-play-state: paused;
        }

        @keyframes pj-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ═══ Compact card (marquee item) ═══ */

        .pj-card-compact {
          flex: 0 0 280px;
          width: 280px;
          background: #0b1120;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          padding: 28px 24px;
          transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
          user-select: none;
        }

        .pj-card-compact:hover {
          background: #0f1929;
          border-color: color-mix(in srgb, var(--pa) 35%, transparent);
          box-shadow: 0 0 0 1px color-mix(in srgb, var(--pa) 15%, transparent);
        }

        .pj-card-compact::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--pa);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        .pj-card-compact:hover::before { transform: scaleX(1); }

        .pj-cc-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .pj-cc-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--pa) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--pa) 22%, transparent);
          color: var(--pa);
          font-size: 13px;
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-weight: 400;
          transition: transform 0.3s ease;
        }

        .pj-card-compact:hover .pj-cc-icon {
          transform: scale(1.06) rotate(3deg);
        }

        .pj-cc-arrow {
          width: 30px; height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.07);
          color: #2d3748;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .pj-card-compact:hover .pj-cc-arrow {
          border-color: var(--pa);
          color: var(--pa);
          transform: translate(2px,-2px);
        }

        .pj-cc-title {
          font-family: 'DM Serif Display', serif;
          font-size: 17px;
          font-weight: 400;
          color: #f0f4ff;
          letter-spacing: -0.3px;
          margin-bottom: 10px;
          line-height: 1.25;
        }

        .pj-cc-desc {
          font-size: 12px;
          line-height: 1.75;
          color: #6b6e74;
          font-weight: 600;
          margin-bottom: 18px;
          flex: 1;
        }

        .pj-cc-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 18px;
        }

        .pj-cc-tag {
          padding: 3px 10px;
          background: color-mix(in srgb, var(--pa) 8%, transparent);
          border: 1px solid color-mix(in srgb, var(--pa) 18%, transparent);
          border-radius: 20px;
          color: var(--pa);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .pj-cc-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 800;
          color: #2f7380;
          letter-spacing: 0.5px;
          margin-top: auto;
        }

        .pj-cc-status-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--sc);
        }

        .pj-cc-corner {
          position: absolute;
          bottom: 14px; right: 14px;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--pa);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .pj-card-compact:hover .pj-cc-corner { opacity: 0.6; }

        /* ═══ Footer strip ═══ */
        .pj-footer-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          padding: 52px 0 0;
        }

        .pj-strip-item {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #2d3748;
          transition: color 0.3s ease;
        }

        .pj-strip-item:hover { color: #4a5568; }

        .pj-strip-dot {
          color: #1e293b;
          font-size: 18px;
          line-height: 1;
        }

        /* ═══ Responsive ═══ */
        @media (max-width: 1100px) {
          .pj-root { padding: 80px 32px 60px; }
          .pp-main-grid { grid-template-columns: repeat(2, 1fr); }
          .pp-sub-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 900px) {
          .pj-root { padding: 70px 24px 60px; }
          .pp-main-grid { grid-template-columns: repeat(2, 1fr); }
          .pp-sub-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .pj-root { padding: 60px 16px 50px; }
          .pj-title { font-size: 44px; }
          .pp-main-grid { grid-template-columns: 1fr; }
          .pp-sub-grid { grid-template-columns: 1fr; }
          .pp-project-metrics { flex-wrap: wrap; gap: 10px; }
          .pj-card-compact { flex: 0 0 240px; width: 240px; }
        }
      `}</style>
    </div>
  );
};

export default PortfolioProjects;