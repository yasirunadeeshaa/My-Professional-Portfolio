import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Users,
  Sparkles,
  CheckCircle2,
  Play,
  Monitor,
  GraduationCap,
  BookOpen,
  DollarSign,
  Clock,
  FileText,
  Database,
  Shield,
  BarChart2,
  Layers,
  GitBranch,
  Terminal,
  UserCheck,
} from "lucide-react";

import homeImg from "../assets/university/mainmenu.png";
import studentsImg from "../assets/university/studentmanagement.png";
import lecturersImg from "../assets/university/lecturermanagement.png";
import lecturerDetailsImg from "../assets/university/lecturerdetails.png";
import coursesImg from "../assets/university/coursemanagement.png";
import studentsImg2 from "../assets/university/coursesmanage.png";
import lecturersImg2 from "../assets/university/lecturermanage.png";
import lectPayImg2 from "../assets/university/lecturerPayment.png";
import reportsImg from "../assets/university/reports.png";
import report1 from "../assets/university/report1.png";
import report2 from "../assets/university/report3.png";
import report3 from "../assets/university/report5.png";
import report4 from "../assets/university/report4.png";

import heroImg from "../assets/university/dashboard.png";

const technologies = [
  { name: "Java", icon: "☕", color: "#f89820" },
  { name: "JavaFX", icon: "🖥️", color: "#61dafb" },
  { name: "MySQL", icon: "🗄️", color: "#38bdf8" },
  { name: "JasperReports", icon: "📊", color: "#e879a0" },
  { name: "JDBC", icon: "🔌", color: "#a78bfa" },
  { name: "Scene Builder", icon: "🎨", color: "#34d399" },
];

const screenshots = [
  {
    id: 1,
    title: "Dashboard",
    url: heroImg,
    description:
      "The main dashboard shown after login, summarizing student, lecturer, and course counts at a glance.",
  },
  {
    id: 2,
    title: "Student Registration & Enrolment",
    url: studentsImg,
    description:
      "Register new students and enrol or withdraw them from individual courses, with existing records available for updates.",
  },
  {
    id: 3,
    title: "Courses Registration & Assignment",
    url: coursesImg,
    description:
      "Register new courses and assign students to them, with validation against duplicate or invalid entries.",
  },
  {
    id: 4,
    title: "Lecturer Registration & Management",
    url: lecturersImg,
    description:
      "Register new lecturers and manage their assigned courses, working hours, and salary details.",
  },
  {
    id: 5,
    title: "Lecturer Details & Payment",
    url: lecturerDetailsImg,
    description:
      "View detailed lecturer profiles alongside their payment information and calculated salary.",
  },
  {
    id: 6,
    title: "Lecturer Payment & Salary Calculation",
    url: lectPayImg2,
    description:
      "Log lecturer working hours and automatically calculate salary figures, stored back to MySQL for reporting.",
  },
  {
    id: 7,
    title: "Lecturer Management",
    url: lecturersImg2,
    description:
      "Browse and manage existing lecturer records, including their course assignments and working hours.",
  },
  {
    id: 8,
    title: "Course Management",
    url: studentsImg2,
    description:
      "Browse and manage existing course records, including enrolled students and assigned lecturers.",
  },
  {
    id: 9,
    title: "Reports Overview",
    url: reportsImg,
    description:
      "A central view for generating and accessing all JasperReports-powered reports across the system.",
  },
  {
    id: 10,
    title: "Student Report",
    url: report1,
    description:
      "A printable PDF report listing student details and their enrolled courses, generated via JasperReports.",
  },
  {
    id: 11,
    title: "Course Report",
    url: report2,
    description:
      "A printable PDF report listing course details along with enrolled students and assigned lecturers.",
  },
  {
    id: 12,
    title: "Lecturer Payment Details Report",
    url: report3,
    description:
      "A printable PDF report detailing lecturer working hours and calculated salary payments.",
  },
  {
    id: 13,
    title: "Students By Courses Report",
    url: report4,
    description:
      "A printable PDF report grouping enrolled students by their respective courses.",
  },
];

const projectStats = [
  { label: "Modules", value: "3 Core Entities", icon: <Layers /> },
  { label: "Reports", value: "Jasper-Powered", icon: <FileText /> },
  { label: "Database", value: "MySQL", icon: <Database /> },
  { label: "Team Size", value: "1 Member", icon: <Users /> },
];

/* ─── component ─────────────────────────────────────────── */
const UniversityManagementDetail = () => {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const thumbnailScrollRef = React.useRef(null);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setIsVisible(true);
      },
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
    <div ref={sectionRef} className="um-root">
      {/* ── background ── */}
      <div className="um-grid-bg" />
      <div className="um-glow-1" />
      <div className="um-glow-2" />

      <div className={`um-inner ${isVisible ? "um-in" : ""}`}>
        {/* ══════════════════ HERO ══════════════════ */}
        <section className="um-hero">
          <div className="um-hero-bg-img">
            {/* <img src={heroImg} alt="" aria-hidden="true" className="um-hero-bg-photo" /> */}
            <div className="um-hero-bg-fallback" />
            <div className="um-hero-bg-overlay" />
          </div>

          <div className="um-hero-content">
            <div className="um-hero-left">
              <button className="um-back-btn" onClick={() => navigate("/")}>
                <ArrowLeft size={16} />
                <span>Back to Projects</span>
              </button>

              <div className="um-eyebrow">
                <span className="um-eyebrow-line" />
                <Sparkles size={13} />
                <span>Desktop Application · Database Systems</span>
                <Sparkles size={13} />
                <span className="um-eyebrow-line" />
              </div>

              <h1 className="um-hero-title">
                University
                <br />
                <em className="um-title-em">Management System</em>
              </h1>

              <p className="um-hero-subtitle">
                A JavaFX desktop application backed by MySQL for running the
                academic side of a university — students, lecturers, and courses
                in one place — with polished, print-ready reports generated
                through JasperReports for every entity in the system.
              </p>

              {/* stat cards */}
              <div className="um-hero-stats">
                {projectStats.map((s, i) => (
                  <div key={i} className="um-stat-card">
                    <div className="um-stat-icon">{s.icon}</div>
                    <div>
                      <div className="um-stat-value">{s.value}</div>
                      <div className="um-stat-label">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="um-hero-pills">
                {["Java", "JavaFX", "MySQL", "JDBC", "JasperReports"].map(
                  (t) => (
                    <span key={t} className="um-pill">
                      {t}
                    </span>
                  ),
                )}
              </div>

              <div className="um-hero-actions">
                <button
                  className="um-btn-primary"
                  onClick={() =>
                    window.open(
                      "https://github.com/yasirunadeeshaa/UNIVERSITY-MANAGEMENT-SYSTEM",
                      "_blank",
                    )
                  }
                >
                  <Github size={17} />
                  <span>Source Code</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ BODY ══════════════════ */}
        <div className="um-body">
          {/* ── PROJECT DESCRIPTION + DETAILS ── */}
          <div className="um-top-grid">
            {/* description card */}
            <div className="um-card um-card-desc">
              <p className="um-eyebrow-sm">About the Project</p>
              <h2 className="um-section-heading">What is it?</h2>
              <p className="um-text">
                A desktop application built with <strong>JavaFX</strong> and a{" "}
                <strong>MySQL</strong> backend to manage the day-to-day academic
                records of a university. The system is organized around three
                core entities — <code className="um-code-inline">Student</code>,{" "}
                <code className="um-code-inline">Lecturer</code>, and{" "}
                <code className="um-code-inline">Course</code> — each with its
                own CRUD screens wired to the database through JDBC.
              </p>
              <p className="um-text">
                Students are managed alongside their course enrolments, so a
                student record tracks which courses they're registered for and
                can be updated as enrolments change. Lecturers are managed with
                their assigned working hours and salary details, letting the
                system keep both academic workload and payroll information in
                one consistent record per lecturer.
              </p>
              <p className="um-text">
                Every entity in the system — students, lecturers, courses, and
                lecturer salaries — can be exported into a formatted report
                using <strong>JasperReports</strong>. Report templates are
                designed separately and filled at runtime with live query
                results, so the generated PDFs always reflect the current state
                of the database rather than a static snapshot.
              </p>
              <p className="um-text">
                The application follows a layered structure — JavaFX controllers
                for the UI, a DAO layer for MySQL access via JDBC, and a
                reporting layer that hands query results off to JasperReports
                for rendering — keeping the interface, data access, and report
                generation cleanly separated.
              </p>
            </div>

            {/* details sidebar */}
            <div className="um-card um-card-details">
              <p className="um-eyebrow-sm">Project Details</p>

              {[
                ["Type", "Desktop Application"],
                [
                  "Status",
                  <span className="um-status-done">
                    <span className="um-status-dot" />
                    Completed
                  </span>,
                ],
                ["Database", "MySQL"],
                ["Reporting", "JasperReports"],
                ["Role", "Solo Developer"],
                ["Category", "University Coursework"],
              ].map(([label, val], i) => (
                <div key={i} className="um-info-row">
                  <span className="um-info-label">{label}</span>
                  <span className="um-info-value">{val}</span>
                </div>
              ))}

              <div className="um-divider-thin" />

              <p className="um-eyebrow-sm" style={{ marginTop: 20 }}>
                Core Modules
              </p>
              <div className="um-lo-list">
                <div className="um-lo-item">
                  Student records &amp; course enrolment
                </div>
                <div className="um-lo-item">
                  Lecturer profiles, hours &amp; salary
                </div>
                <div className="um-lo-item">
                  Course creation &amp; assignment
                </div>
                <div className="um-lo-item">
                  JasperReports-driven PDF exports
                </div>
              </div>

              <div className="um-divider-thin" />

              <p className="um-eyebrow-sm" style={{ marginTop: 20 }}>
                Platform
              </p>
              <div className="um-platform-row">
                {[
                  ["Desktop", <Monitor size={20} />],
                  ["MySQL DB", <Database size={20} />],
                ].map(([n, icon], i) => (
                  <div key={i} className="um-platform-item">
                    {icon}
                    <span>{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── TECHNOLOGIES ── */}
          <div className="um-card um-card-full">
            <div className="um-section-header">
              <p className="um-eyebrow-sm">Stack</p>
              <h2 className="um-section-heading">Technologies Used</h2>
            </div>
            <div className="um-tech-grid">
              {technologies.map((t, i) => (
                <div
                  key={i}
                  className="um-tech-card"
                  style={{ "--tc": t.color }}
                >
                  <span className="um-tech-indicator" />
                  <span className="um-tech-icon">{t.icon}</span>
                  <span className="um-tech-name">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── ARCHITECTURE ── */}
          <div className="um-card um-card-full">
            <div className="um-section-header">
              <p className="um-eyebrow-sm">System Design</p>
              <h2 className="um-section-heading">
                Architecture &amp; Key Modules
              </h2>
            </div>
            <div className="um-arch-grid">
              <div className="um-arch-card">
                <div className="um-arch-icon">
                  <GraduationCap size={20} />
                </div>
                <h3 className="um-arch-title">Student Module</h3>
                <p className="um-arch-desc">
                  Handles student CRUD and links each student to their enrolled
                  courses.
                </p>
              </div>
              <div className="um-arch-card">
                <div className="um-arch-icon">
                  <UserCheck size={20} />
                </div>
                <h3 className="um-arch-title">Lecturer Module</h3>
                <p className="um-arch-desc">
                  Manages lecturer profiles, assigned courses, working hours,
                  and salary records.
                </p>
              </div>
              <div className="um-arch-card">
                <div className="um-arch-icon">
                  <BookOpen size={20} />
                </div>
                <h3 className="um-arch-title">Course Module</h3>
                <p className="um-arch-desc">
                  Creates and edits course records, tying together enrolled
                  students and assigned lecturers.
                </p>
              </div>
              <div className="um-arch-card">
                <div className="um-arch-icon">
                  <Database size={20} />
                </div>
                <h3 className="um-arch-title">DAO Layer</h3>
                <p className="um-arch-desc">
                  JDBC-based data access objects mediating all reads and writes
                  to MySQL.
                </p>
              </div>
              <div className="um-arch-card">
                <div className="um-arch-icon">
                  <FileText size={20} />
                </div>
                <h3 className="um-arch-title">JasperReports Engine</h3>
                <p className="um-arch-desc">
                  Fills .jrxml report templates with live query results and
                  exports them as PDF.
                </p>
              </div>
              <div className="um-arch-card">
                <div className="um-arch-icon">
                  <DollarSign size={20} />
                </div>
                <h3 className="um-arch-title">Payroll Calculation</h3>
                <p className="um-arch-desc">
                  Derives lecturer salary figures from logged working hours for
                  reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /um-body */}

        {/* ══════════════════ SCREENSHOTS ══════════════════ */}
        <div className="um-ss-section">
          <div className="um-divider">
            <span className="um-divider-line" />
            <span className="um-divider-label">Application Preview</span>
            <span className="um-divider-line" />
          </div>

          <h2 className="um-section-heading um-ss-heading">
            Explore the <em className="um-em">Interface</em>
          </h2>
          <p className="um-ss-sub">
            A walkthrough of student, lecturer, and course management, plus
            JasperReports output.
          </p>

          {/* featured frame */}
          <div className="um-ss-main">
            <div className="um-browser-frame">
              <div className="um-browser-bar">
                <div className="um-browser-dots">
                  <span className="um-dot um-dot-r" />
                  <span className="um-dot um-dot-y" />
                  <span className="um-dot um-dot-g" />
                </div>
                <div className="um-browser-url">UniversityManagementSystem</div>
              </div>
              {screenshots[activeScreenshot].url ? (
                <img
                  src={screenshots[activeScreenshot].url}
                  alt={screenshots[activeScreenshot].title}
                  className="um-ss-img"
                />
              ) : (
                <div className="um-ss-placeholder">
                  <GraduationCap
                    size={44}
                    strokeWidth={1}
                    color="rgba(124,140,248,0.25)"
                  />
                  <span>{screenshots[activeScreenshot].title}</span>
                  <span className="um-ss-placeholder-sub">
                    Add your screenshot to src/assets/University/
                  </span>
                </div>
              )}
            </div>
            <div className="um-ss-meta">
              <h3 className="um-ss-title">
                {screenshots[activeScreenshot].title}
              </h3>
              <p className="um-ss-desc">
                {screenshots[activeScreenshot].description}
              </p>
            </div>
          </div>

          {/* thumbnails */}
          <div className="um-thumb-breakout">
            <div className="um-thumb-row">
              <button
                className="um-thumb-scroll-btn"
                onClick={() => scrollThumbnails("left")}
              >
                <ArrowLeft size={20} />
              </button>
              <div className="um-thumb-track" ref={thumbnailScrollRef}>
                {screenshots.map((s, i) => (
                  <div
                    key={s.id}
                    className={`um-thumb-card ${activeScreenshot === i ? "um-thumb-active" : ""}`}
                    onClick={() => setActiveScreenshot(i)}
                  >
                    <div className="um-thumb-img-wrap">
                      {s.url ? (
                        <img
                          src={s.url}
                          alt={s.title}
                          className="um-thumb-img"
                        />
                      ) : (
                        <div className="um-thumb-img-placeholder">
                          <GraduationCap
                            size={22}
                            strokeWidth={1}
                            color="rgba(124,140,248,0.35)"
                          />
                        </div>
                      )}
                      <div className="um-thumb-overlay">
                        <Play size={18} className="um-thumb-play" />
                      </div>
                    </div>
                    <div className="um-thumb-label">
                      <span className="um-thumb-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="um-thumb-name">{s.title}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="um-thumb-scroll-btn"
                onClick={() => scrollThumbnails("right")}
              >
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
        .um-root {
          position: relative; min-height: 100vh;
          background: #080c14; overflow: hidden;
          font-family: 'DM Sans', sans-serif; color: #f0f4ff;
        }

        /* ── Background ── */
        .um-grid-bg {
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none; z-index: 0;
        }
        .um-glow-1 {
          position: fixed; top: -180px; right: -160px;
          width: 680px; height: 680px;
          background: radial-gradient(circle, rgba(124,140,248,0.10) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: um-drift1 20s ease-in-out infinite alternate;
        }
        .um-glow-2 {
          position: fixed; bottom: -120px; left: -80px;
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: um-drift2 25s ease-in-out infinite alternate;
        }
        @keyframes um-drift1 { from{transform:translate(0,0)} to{transform:translate(-60px,50px)} }
        @keyframes um-drift2 { from{transform:translate(0,0)} to{transform:translate(50px,-40px)} }

        /* ── Inner ── */
        .um-inner {
          position: relative; z-index: 1;
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .um-inner.um-in { opacity: 1; transform: translateY(0); }

        /* ══════════ HERO ══════════ */
        .um-hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center;
          padding: 120px 64px 80px; overflow: hidden;
        }
        .um-hero-bg-img { position: absolute; inset: 0; z-index: 0; }
        .um-hero-bg-fallback {
          width: 100%; height: 100%;
          background: linear-gradient(135deg, rgba(124,140,248,0.06) 70%, rgba(56,189,248,0.04) 100%);
        }
        .um-hero-bg-photo {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center 30%;
          filter: blur(0px) brightness(0.82) saturate(0.7);
          transform: scale(1.06);
        }
        .um-hero-bg-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(to bottom, rgba(8,12,20,0.35) 0%, rgba(8,12,20,0.80) 100%, #080c14 100%),
            linear-gradient(to right, rgba(8,12,20,0.55) 0%, transparent 70%);
        }
        .um-hero-content {
          position: relative; z-index: 2;
          max-width: 880px; margin: 0 auto; width: 100%;
          display: flex; justify-content: center;
        }
        .um-hero-left {
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
        }

        /* back btn */
        .um-back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px; color: #94a3b8;
          font-size: 13px; font-weight: 600; cursor: pointer;
          transition: all 0.3s ease; align-self: center;
          margin-bottom: 32px; font-family: 'DM Sans', sans-serif;
        }
        .um-back-btn:hover { background: rgba(255,255,255,0.10); color: #f0f4ff; transform: translateX(-4px); }

        /* eyebrow */
        .um-eyebrow {
          display: flex; align-items: center; gap: 12px;
          font-size: 11px; font-weight: 600; letter-spacing: 3px;
          text-transform: uppercase; color: #a4acbb; margin-bottom: 24px;
          justify-content: center;
        }
        .um-eyebrow-line { display: block; width: 32px; height: 1px; background: #4a5568; }
        .um-eyebrow-sm {
          font-size: 10px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: #4a5568; margin-bottom: 10px;
        }

        /* title */
        .um-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(42px, 5vw, 62px); font-weight: 400;
          line-height: 1.05; letter-spacing: -2px; color: #f0f4ff; margin-bottom: 24px;
        }
        .um-title-em, .um-em {
          font-style: italic;
          background: linear-gradient(120deg, #7c8cf8, #38bdf8);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .um-hero-subtitle {
          font-size: 17px; line-height: 1.75; color: #a4a7ac;
          font-weight: 500; max-width: 560px; margin: 0 auto 28px;
        }

        /* pills */
        .um-hero-pills { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 36px; justify-content: center; }
        .um-pill {
          padding: 6px 14px;
          background: rgba(124,140,248,0.10);
          border: 1px solid rgba(124,140,248,0.22);
          border-radius: 50px; color: #a5b4fc;
          font-size: 12px; font-weight: 600; letter-spacing: 0.3px;
        }

        /* stat cards */
        .um-hero-stats { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 36px; }
        .um-stat-card {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 20px;
          background: rgba(11,17,32,0.75);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          backdrop-filter: blur(12px);
          transition: border-color 0.3s ease, transform 0.3s ease;
          flex: 1 1 160px;
        }
        .um-stat-card:hover { border-color: rgba(124,140,248,0.35); transform: translateY(-3px); }
        .um-stat-icon {
          width: 42px; height: 42px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(124,140,248,0.12); color: #7c8cf8; flex-shrink: 0;
        }
        .um-stat-value {
          font-family: 'DM Serif Display', serif;
          font-size: 22px; font-weight: 400; color: #f0f4ff;
          background: linear-gradient(120deg, #7c8cf8, #38bdf8);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1; margin-bottom: 3px;
        }
        .um-stat-label { font-size: 11px; color: #4a5568; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; }

        /* action buttons */
        .um-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
        .um-btn-primary, .um-btn-secondary {
          position: relative; display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border: none; border-radius: 0; cursor: pointer;
          clip-path: polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);
          font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
          font-family: 'DM Sans', sans-serif; overflow: hidden; isolation: isolate;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .um-btn-primary { background: #0d1424; color: #7dd3fc; box-shadow: inset 0 0 0 1px rgba(125,211,252,0.35); }
        .um-btn-primary::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(100deg,#06b6d4,#7c3aed);
          transform: translateX(-101%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1); z-index: -1;
        }
        .um-btn-primary:hover { color: #fff; box-shadow: none; }
        .um-btn-primary:hover::before { transform: translateX(0); }
        .um-btn-secondary { background: transparent; color: #c4b5fd; box-shadow: inset 0 0 0 1px rgba(196,181,253,0.4); }
        .um-btn-secondary::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(100deg,#7c3aed,#ec4899);
          transform: translateX(-101%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1); z-index: -1;
        }
        .um-btn-secondary:hover { color: #fff; box-shadow: none; }
        .um-btn-secondary:hover::before { transform: translateX(0); }

        /* ══════════ BODY ══════════ */
        .um-body {
          max-width: 1280px; margin: 0 auto;
          padding: 72px 64px 40px;
          display: flex; flex-direction: column; gap: 24px;
        }

        /* cards */
        .um-card {
          background: #0b1120;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 36px;
          transition: background 0.3s ease;
        }
        .um-card:hover { background: #0f1929; }
        .um-card-full { border-radius: 20px; }

        /* top 2-col grid */
        .um-top-grid {
          display: grid; grid-template-columns: 1.6fr 1fr;
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; overflow: hidden;
        }
        .um-card-desc  { border-radius: 0; border: none; }
        .um-card-details { border-radius: 0; border: none; border-left: 1px solid rgba(255,255,255,0.05); }

        /* section header */
        .um-section-header { margin-bottom: 32px; }
        .um-section-heading {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(28px, 3vw, 38px); font-weight: 400;
          line-height: 1.1; letter-spacing: -1px; color: #f0f4ff;
          margin-bottom: 0;
        }
        .um-text { font-size: 15px; color: #94a3b8; line-height: 1.8; margin-bottom: 16px; font-weight: 300; }
        .um-text:last-child { margin-bottom: 0; }
        .um-code-inline {
          font-family: 'Monaco', monospace; font-size: 13px;
          background: rgba(124,140,248,0.10); color: #a5b4fc;
          padding: 2px 6px; border-radius: 5px;
        }

        /* info rows */
        .um-info-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
          gap: 12px;
        }
        .um-info-row:last-of-type { border-bottom: none; }
        .um-info-label { font-size: 11px; color: #4a5568; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; white-space: nowrap; }
        .um-info-value { font-size: 13px; color: #f0f4ff; font-weight: 600; text-align: right; }
        .um-status-done { display: flex; align-items: center; gap: 7px; color: #86efac; }
        .um-status-dot {
          width: 7px; height: 7px; border-radius: 50%; background: currentColor;
          animation: um-pulse 2s ease-in-out infinite;
        }
        @keyframes um-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }
        .um-divider-thin { height: 1px; background: rgba(255,255,255,0.05); margin: 4px 0; }

        /* learning outcomes / core modules */
        .um-lo-list { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
        .um-lo-item {
          position: relative; padding-left: 16px;
          font-size: 12.5px; color: #94a3b8; line-height: 1.5; font-weight: 400;
        }
        .um-lo-item::before {
          content: ''; position: absolute; left: 0; top: 7px;
          width: 5px; height: 5px; border-radius: 50%;
          background: #7c8cf8;
        }

        /* platform */
        .um-platform-row { display: flex; gap: 10px; margin-top: 8px; }
        .um-platform-item {
          flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 14px 10px;
          background: rgba(124,140,248,0.08); border: 1px solid rgba(124,140,248,0.18);
          border-radius: 12px; color: #a5b4fc; font-size: 12px; font-weight: 600;
          transition: all 0.3s ease;
        }
        .um-platform-item:hover { background: rgba(124,140,248,0.15); transform: translateY(-3px); }

        /* tech grid */
        .um-tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 2px;
          background: rgba(255,255,255,0.03);
          border-radius: 14px; overflow: hidden;
        }
        .um-tech-card {
          display: flex; align-items: center; gap: 12px;
          padding: 16px 18px; background: #0d1525;
          transition: background 0.3s ease; position: relative; overflow: hidden;
        }
        .um-tech-card:hover { background: #111d35; }
        .um-tech-indicator {
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: var(--tc); opacity: 0; transition: opacity 0.3s ease;
        }
        .um-tech-card:hover .um-tech-indicator { opacity: 1; }
        .um-tech-icon { font-size: 24px; flex-shrink: 0; }
        .um-tech-name { font-size: 14px; font-weight: 600; color: #f0f4ff; }

        /* architecture grid */
        .um-arch-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
          gap: 16px;
        }
        .um-arch-card {
          padding: 22px;
          background: #0d1525;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 14px;
          transition: all 0.3s ease;
        }
        .um-arch-card:hover { background: #111d35; border-color: rgba(124,140,248,0.25); transform: translateY(-3px); }
        .um-arch-icon {
          width: 40px; height: 40px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(124,140,248,0.12); color: #7c8cf8; margin-bottom: 14px;
        }
        .um-arch-title { font-size: 15px; font-weight: 700; color: #f0f4ff; margin-bottom: 8px; font-family: 'Monaco', monospace; }
        .um-arch-desc { font-size: 13px; color: #64748b; line-height: 1.65; font-weight: 300; }

        /* ══════════ SCREENSHOTS ══════════ */
        .um-ss-section {
          max-width: 1280px; margin: 40px auto 0;
          padding: 0 64px 80px;
        }
        .um-divider { display: flex; align-items: center; gap: 20px; margin-bottom: 32px; }
        .um-divider-line { flex: 1; height: 1px; background: rgba(255,255,255,0.06); }
        .um-divider-label { font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: #2d3748; white-space: nowrap; }
        .um-ss-heading { text-align: center; margin-bottom: 10px; }
        .um-ss-sub { font-size: 15px; color: #64748b; text-align: center; margin-bottom: 40px; font-weight: 300; }

        .um-ss-main {
          background: #0b1120; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 28px; margin-bottom: 24px;
        }
        .um-browser-frame { border-radius: 14px; overflow: hidden; background: #1e293b; margin-bottom: 20px; }
        .um-browser-bar {
          display: flex; align-items: center; padding: 14px 18px;
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          border-bottom: 1px solid rgba(255,255,255,0.05); position: relative;
        }
        .um-browser-dots { display: flex; gap: 7px; }
        .um-dot { width: 11px; height: 11px; border-radius: 50%; }
        .um-dot-r { background: #ff5f57; } .um-dot-y { background: #febc2e; } .um-dot-g { background: #28c840; }
        .um-browser-url {
          position: absolute; left: 50%; transform: translateX(-50%);
          padding: 6px 18px; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08); border-radius: 6px;
          color: #64748b; font-size: 12px; font-family: 'Monaco', monospace;
        }
        .um-ss-img { width: 100%; display: block; object-fit: contain; max-height: 520px; min-height: 300px; background: #0a0e1a; }
        .um-ss-placeholder {
          width: 100%; min-height: 300px; max-height: 520px;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px;
          background: #0a0e1a; color: #4a5568; font-size: 14px; font-weight: 600;
        }
        .um-ss-placeholder-sub { font-size: 11px; color: #2d3748; font-weight: 400; }
        .um-ss-title { font-family: 'DM Serif Display', serif; font-size: 24px; color: #f0f4ff; margin-bottom: 8px; }
        .um-ss-desc   { font-size: 14px; color: #64748b; line-height: 1.7; font-weight: 300; }

        /* thumbnails */
        .um-thumb-breakout {
          position: relative;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          padding: 0 40px;
          box-sizing: border-box;
        }
        .um-thumb-row { display: flex; align-items: center; gap: 12px; }
        .um-thumb-scroll-btn {
          flex-shrink: 0; width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(124,140,248,0.12); border: 1px solid rgba(124,140,248,0.25);
          color: #f0f4ff; cursor: pointer; transition: all 0.3s ease; font-family: 'DM Sans', sans-serif;
        }
        .um-thumb-scroll-btn:hover { background: rgba(124,140,248,0.25); transform: scale(1.08); }
        .um-thumb-track {
          display: flex; gap: 16px; overflow-x: auto; scroll-behavior: smooth;
          padding: 14px 6px; flex: 1;
          scrollbar-width: thin; scrollbar-color: rgba(124,140,248,0.4) rgba(255,255,255,0.05);
        }
        .um-thumb-track::-webkit-scrollbar { height: 5px; }
        .um-thumb-track::-webkit-scrollbar-track { background: rgba(255,255,255,0.04); border-radius: 10px; }
        .um-thumb-track::-webkit-scrollbar-thumb { background: rgba(124,140,248,0.4); border-radius: 10px; }
        .um-thumb-card { flex: 0 0 200px; cursor: pointer; transition: transform 0.3s ease; }
        .um-thumb-card:hover { transform: translateY(-4px); }
        .um-thumb-img-wrap {
          position: relative; border-radius: 12px; overflow: hidden;
          border: 2px solid rgba(255,255,255,0.06); aspect-ratio: 16/10;
          transition: border-color 0.3s ease;
        }
        .um-thumb-active .um-thumb-img-wrap { border-color: rgba(124,140,248,0.7); box-shadow: 0 0 0 3px rgba(124,140,248,0.18); }
        .um-thumb-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .um-thumb-card:hover .um-thumb-img { transform: scale(1.05); }
        .um-thumb-img-placeholder {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(11,17,32,0.9);
        }
        .um-thumb-overlay {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, rgba(124,140,248,0.88), rgba(56,189,248,0.88));
          opacity: 0; transition: opacity 0.3s ease;
        }
        .um-thumb-card:hover .um-thumb-overlay { opacity: 1; }
        .um-thumb-play { color: #fff; }
        .um-thumb-label { display: flex; align-items: center; gap: 8px; margin-top: 10px; }
        .um-thumb-num  { font-size: 12px; font-weight: 800; color: #7c8cf8; background: rgba(124,140,248,0.12); padding: 3px 8px; border-radius: 5px; font-family: 'Monaco', monospace; }
        .um-thumb-name { font-size: 12px; font-weight: 600; color: #64748b; }
        .um-thumb-active .um-thumb-name { color: #a5b4fc; }

        /* ══════════ RESPONSIVE ══════════ */
        @media (max-width: 1100px) {
          .um-hero { padding: 100px 40px 70px; }
          .um-body, .um-ss-section { padding-left: 40px; padding-right: 40px; }
          .um-top-grid { grid-template-columns: 1fr; }
          .um-card-details { border-left: none; border-top: 1px solid rgba(255,255,255,0.05); }
        }
        @media (max-width: 768px) {
          .um-hero { padding: 80px 24px 60px; min-height: auto; }
          .um-body, .um-ss-section { padding-left: 24px; padding-right: 24px; }
          .um-tech-grid { grid-template-columns: repeat(2, 1fr); }
          .um-arch-grid { grid-template-columns: 1fr; }
          .um-browser-url { display: none; }
          .um-thumb-card { flex: 0 0 170px; }
        }
        @media (max-width: 480px) {
          .um-hero-title { font-size: 36px; }
          .um-hero-actions { flex-direction: column; }
          .um-btn-primary, .um-btn-secondary { width: 100%; justify-content: center; }
          .um-tech-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default UniversityManagementDetail;
