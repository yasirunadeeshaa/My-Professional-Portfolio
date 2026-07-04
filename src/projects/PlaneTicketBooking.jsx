import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  Calendar,
  Users,
  Sparkles,
  Monitor,
  Terminal,
  BookOpen,
  Search,
  Armchair,
  XCircle,
  ListChecks,
  Receipt,
} from "lucide-react";

const technologies = [
  { name: "Java", icon: "☕", color: "#f89820" },
  { name: "OOP", icon: "🧩", color: "#7c8cf8" },
  { name: "Arrays", icon: "🗃️", color: "#e879a0" },
  { name: "File I/O", icon: "📄", color: "#38bdf8" },
];

const projectStats = [
  { label: "Development Time", value: "5 Weeks", icon: <Calendar /> },
  { label: "Module", value: "Software Development", icon: <BookOpen /> },
  { label: "Coursework Weight", value: "50%", icon: <BookOpen /> },
  { label: "Team Size", value: "1 Member", icon: <Users /> },
];

const features = [
  {
    icon: <Armchair size={20} />,
    title: "Buy a Seat",
    desc: "Books a seat by row letter and column number, validates against a 2D seating array, and saves passenger details to a ticket file.",
  },
  {
    icon: <XCircle size={20} />,
    title: "Cancel a Seat",
    desc: "Releases a booked seat back to the pool, removes the linked ticket record, and deletes its saved file.",
  },
  {
    icon: <Search size={20} />,
    title: "Find First Available Seat",
    desc: "Scans every row to report the first open seat in the plane.",
  },
  {
    icon: <Monitor size={20} />,
    title: "Seating Plan View",
    desc: "Prints the full seating chart to the console using O for available and X for sold seats.",
  },
  {
    icon: <Receipt size={20} />,
    title: "Ticket & Sales Report",
    desc: "Lists every issued ticket with passenger info and totals all ticket sales.",
  },
  {
    icon: <ListChecks size={20} />,
    title: "Search Ticket",
    desc: "Looks up a specific seat by row and column and prints its ticket and passenger details.",
  },
];

const codeSnippet = `planeseat = new int[4][];
planeseat[0] = new int[14];   // Row A
planeseat[1] = new int[12];   // Row B
planeseat[2] = new int[12];   // Row C
planeseat[3] = new int[14];   // Row D

if (colomn_number <= 5) {
    ticket_price = 200;
} else if (colomn_number >= 6 && colomn_number <= 9) {
    ticket_price = 180;
} else {
    ticket_price = 150;
}`;

const cliOutput = `** WELCOME TO THE PLANE MANAGEMENT APPLICATION. **
**************************************************
*                  MENU OPTIONS                  *
**************************************************
     1) Buy a seat.
     2) Cancel a seat.
     3) Find first available seat.
     4) Show seating plan.
     5) Print tickets information and total sales.
     6) Search ticket.
     0) Quit.
**************************************************
PLEASE SELECT AN OPTION - : 1
ENTER ROW LETTER     : A
ENTER COLUMN NUMBER  : 3
ENTER YOUR NAME      : Hasindu
ENTER YOUR SURNAME   : Aththanayaka
ENTER YOUR E-MAIL    : hasindu@email.com
YOUR BOOKING SUCCESFULL.....
YOUR BOOKED SEAT - A3

PLEASE SELECT AN OPTION - : 4
THE SEATING PLAN.
AVAILABLE SEATS = O
SOLD SEATS      = X
O O X O O O O O O O O O O O
O O O O O O O O O O O O
O O O O O O O O O O O O
O O O O O O O O O O O O O O

PLEASE SELECT AN OPTION - : 5
TICKET AND PERSON INFORMATION :
Ticket [1] - ROW 1 COLOMN 3.
* TICKET INFORMATION- A 3 200   * PERSON INFORMATION-  Hasindu Aththanayaka hasindu@email.com
TICKET PRICE OF THE TICKETS= £200

PLEASE SELECT AN OPTION - : 0
**** EXITING THE PROGRAMME. *****
GOOD BYE. ! HAVE A NICE JOURNEY...`;

/* ─── component ─────────────────────────────────────────── */
const PlaneTicketBookingDetail = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("output");
  const navigate = useNavigate();
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="pl-root">
      {/* ── background ── */}
      <div className="pl-grid-bg" />
      <div className="pl-glow-1" />
      <div className="pl-glow-2" />

      <div className={`pl-inner ${isVisible ? "pl-in" : ""}`}>

        {/* ══════════════════ HERO ══════════════════ */}
        <section className="pl-hero">
          <div className="pl-hero-content">
            <div className="pl-hero-left">
              <button className="pl-back-btn" onClick={() => navigate("/")}>
                <ArrowLeft size={16} />
                <span>Back to Projects</span>
              </button>

              <div className="pl-eyebrow">
                <span className="pl-eyebrow-line" />
                <Sparkles size={13} />
                <span>Software Development II Coursework · 2024</span>
                <Sparkles size={13} />
                <span className="pl-eyebrow-line" />
              </div>

              <h1 className="pl-hero-title">
                Plane Ticket
                <br />
                <em className="pl-title-em">Booking System</em>
              </h1>

              <p className="pl-hero-subtitle">
                A console-based seat reservation system for a private plane,
                built in pure Java for the 4COSC005W Software Development II
                coursework at the University of Westminster. Manages a 4-row,
                up-to-14-seat layout with row/seat validation, tiered
                pricing, passenger records, and persistent ticket files.
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

              <div className="pl-hero-pills">
                {["Java", "OOP", "Arrays", "File Handling"].map((t) => (
                  <span key={t} className="pl-pill">{t}</span>
                ))}
              </div>

              <div className="pl-hero-actions">
                <button
                  className="pl-btn-primary"
                  onClick={() => window.open("https://github.com/yasirunadeeshaa/Plane-Ticket-Managemnt-System", "_blank")}
                >
                  <Github size={17} />
                  <span>Source Code</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ BODY ══════════════════ */}
        <div className="pl-body">

          {/* ── PROJECT DESCRIPTION + DETAILS ── */}
          <div className="pl-top-grid">

            {/* description card */}
            <div className="pl-card pl-card-desc">
              <p className="pl-eyebrow-sm">About the Project</p>
              <h2 className="pl-section-heading">What is it?</h2>
              <p className="pl-text">
                Built for the <strong>4COSC005W Software Development II</strong>{" "}
                coursework, this program was commissioned by a fictional
                company managing a private plane that needed a Java
                application to track and manage seat reservations. The
                aircraft has 4 rows (A–D) of between 12 and 14 seats each,
                with three pricing zones by seat colour: front-row aisle
                seats at £200, middle "premium" seats at £180, and the
                remaining seats at £150.
              </p>
              <p className="pl-text">
                The brief required everything to run from a single entry
                point — a menu-driven console loop offering seven options:
                buy a seat, cancel a seat, find the first available seat,
                show the seating plan, print ticket info and total sales,
                search a ticket, or quit. Every seat starts available (0)
                and flips to sold (1) once booked, tracked entirely with
                standard Java arrays — dynamic structures like{" "}
                <code className="pl-code-inline">ArrayList</code> were
                explicitly disallowed by the spec.
              </p>
              <p className="pl-text">
                Booking a seat collects the passenger's name, surname, and
                email, validates the email format, and calculates the ticket
                price from the seat's column. Each successful booking is
                written to its own ticket text file (e.g.{" "}
                <code className="pl-code-inline">A2.txt</code>), and
                cancelling a seat removes both the in-memory record and its
                saved file.
              </p>
              <p className="pl-text">
                The project is structured around three core classes: a main{" "}
                <code className="pl-code-inline">PlaneManagement</code> class
                driving the menu and seat logic, a{" "}
                <code className="pl-code-inline">Ticket</code> class handling
                ticket data and file persistence, and a{" "}
                <code className="pl-code-inline">person</code> class storing
                passenger details — applying fundamental OOP concepts like
                encapsulation, constructors, getters/setters, and object
                composition (a <code className="pl-code-inline">Ticket</code>{" "}
                holds a <code className="pl-code-inline">Person</code>).
              </p>
            </div>

            {/* details sidebar */}
            <div className="pl-card pl-card-details">
              <p className="pl-eyebrow-sm">Project Details</p>

              {[
                ["Type",     "Console Application"],
                ["Status",   <span className="pl-status-done"><span className="pl-status-dot"/>Completed</span>],
                ["Module",   "4COSC005W · Software Dev II"],
                ["Weighting", "50% of module mark"],
                ["Deadline", "18 Mar 2024"],
                ["Role",     "Solo Developer"],
                ["Category", "University Coursework"],
              ].map(([label, val], i) => (
                <div key={i} className="pl-info-row">
                  <span className="pl-info-label">{label}</span>
                  <span className="pl-info-value">{val}</span>
                </div>
              ))}

              <div className="pl-divider-thin" />

              <p className="pl-eyebrow-sm" style={{ marginTop: 20 }}>Learning Outcomes</p>
              <div className="pl-lo-list">
                <div className="pl-lo-item">Algorithms &amp; data structures (arrays)</div>
                <div className="pl-lo-item">OOP — classes &amp; objects</div>
                <div className="pl-lo-item">Sorting &amp; searching logic</div>
                <div className="pl-lo-item">Basic requirements gathering</div>
              </div>

              <div className="pl-divider-thin" />

              <p className="pl-eyebrow-sm" style={{ marginTop: 20 }}>Platform</p>
              <div className="pl-platform-row">
                <div className="pl-platform-item">
                  <Terminal size={20} /><span>CLI</span>
                </div>
                <div className="pl-platform-item">
                  <Monitor size={20} /><span>Desktop</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── TECHNOLOGIES ── */}
          <div className="pl-card pl-card-full">
            <div className="pl-section-header">
              <p className="pl-eyebrow-sm">Stack</p>
              <h2 className="pl-section-heading">Technologies Used</h2>
            </div>
            <div className="pl-tech-grid">
              {technologies.map((t, i) => (
                <div key={i} className="pl-tech-card" style={{ "--tc": t.color }}>
                  <span className="pl-tech-indicator" />
                  <span className="pl-tech-icon">{t.icon}</span>
                  <span className="pl-tech-name">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── FEATURES ── */}
          <div className="pl-card pl-card-full">
            <div className="pl-section-header">
              <p className="pl-eyebrow-sm">Menu Options</p>
              <h2 className="pl-section-heading">Core Features</h2>
            </div>
            <div className="pl-feature-grid">
              {features.map((f, i) => (
                <div key={i} className="pl-feature-card">
                  <div className="pl-feature-icon">{f.icon}</div>
                  <h3 className="pl-feature-title">{f.title}</h3>
                  <p className="pl-feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CODE & CLI PREVIEW (replaces screenshots — console app) ── */}
          <div className="pl-card pl-card-full">
            <div className="pl-section-header">
              <p className="pl-eyebrow-sm">Under the Hood</p>
              <h2 className="pl-section-heading">See It Run</h2>
            </div>

            <div className="pl-tab-row">
              <button
                className={`pl-tab-btn ${activeTab === "output" ? "pl-tab-active" : ""}`}
                onClick={() => setActiveTab("output")}
              >
                <Terminal size={15} />
                <span>CLI Output</span>
              </button>
              <button
                className={`pl-tab-btn ${activeTab === "code" ? "pl-tab-active" : ""}`}
                onClick={() => setActiveTab("code")}
              >
                <BookOpen size={15} />
                <span>Source Snippet</span>
              </button>
            </div>

            <div className="pl-code-frame">
              <div className="pl-code-bar">
                <div className="pl-code-dots">
                  <span className="pl-dot pl-dot-r" />
                  <span className="pl-dot pl-dot-y" />
                  <span className="pl-dot pl-dot-g" />
                </div>
                <div className="pl-code-filename">
                  {activeTab === "output" ? "terminal — java PlaneManagement" : "PlaneManagement.java"}
                </div>
              </div>
              <pre className={`pl-code-block ${activeTab === "output" ? "pl-cli-block" : ""}`}>
                <code>{activeTab === "output" ? cliOutput : codeSnippet}</code>
              </pre>
            </div>

            <p className="pl-text" style={{ marginTop: 18 }}>
              As a console-only application, the project has no graphical
              screens to preview — the tab above shows exactly what running
              <code className="pl-code-inline"> java PlaneManagement</code> in
              a terminal looks like: booking seat A3, viewing the seating
              plan, and printing ticket and sales info.
            </p>
          </div>

        </div>
        {/* /pl-body */}

      </div>

      {/* ═══════════════════════ STYLES ═══════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── Root ── */
        .pl-root {
          position: relative; min-height: 100vh;
          background: #080c14; overflow: hidden;
          font-family: 'DM Sans', sans-serif; color: #f0f4ff;
        }

        /* ── Background ── */
        .pl-grid-bg {
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none; z-index: 0;
        }
        .pl-glow-1 {
          position: fixed; top: -180px; right: -160px;
          width: 680px; height: 680px;
          background: radial-gradient(circle, rgba(124,140,248,0.10) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: pl-drift1 20s ease-in-out infinite alternate;
        }
        .pl-glow-2 {
          position: fixed; bottom: -120px; left: -80px;
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(232,121,160,0.08) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: pl-drift2 25s ease-in-out infinite alternate;
        }
        @keyframes pl-drift1 { from{transform:translate(0,0)} to{transform:translate(-60px,50px)} }
        @keyframes pl-drift2 { from{transform:translate(0,0)} to{transform:translate(50px,-40px)} }

        /* ── Inner ── */
        .pl-inner {
          position: relative; z-index: 1;
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .pl-inner.pl-in { opacity: 1; transform: translateY(0); }

        /* ══════════ HERO ══════════ */
        .pl-hero {
          position: relative; min-height: 70vh;
          display: flex; align-items: center;
          padding: 120px 64px 80px; overflow: hidden;
        }
        .pl-hero-content {
          position: relative; z-index: 2;
          max-width: 880px; margin: 0 auto; width: 100%;
          display: flex; justify-content: center;
        }
        .pl-hero-left {
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
        }

        /* back btn */
        .pl-back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px; color: #94a3b8;
          font-size: 13px; font-weight: 600; cursor: pointer;
          transition: all 0.3s ease; align-self: center;
          margin-bottom: 32px; font-family: 'DM Sans', sans-serif;
        }
        .pl-back-btn:hover { background: rgba(255,255,255,0.10); color: #f0f4ff; transform: translateX(-4px); }

        /* eyebrow */
        .pl-eyebrow {
          display: flex; align-items: center; gap: 12px;
          font-size: 11px; font-weight: 600; letter-spacing: 3px;
          text-transform: uppercase; color: #a4acbb; margin-bottom: 24px;
          justify-content: center;
        }
        .pl-eyebrow-line { display: block; width: 32px; height: 1px; background: #4a5568; }
        .pl-eyebrow-sm {
          font-size: 10px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: #4a5568; margin-bottom: 10px;
        }

        /* title */
        .pl-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(42px, 5vw, 62px); font-weight: 400;
          line-height: 1.05; letter-spacing: -2px; color: #f0f4ff; margin-bottom: 24px;
        }
        .pl-title-em, .pl-em {
          font-style: italic;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .pl-hero-subtitle {
          font-size: 17px; line-height: 1.75; color: #a4a7ac;
          font-weight: 500; max-width: 560px; margin: 0 auto 28px;
        }

        /* pills */
        .pl-hero-pills { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 36px; justify-content: center; }
        .pl-pill {
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
        .pl-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
        .pl-btn-primary {
          position: relative; display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border: none; border-radius: 0; cursor: pointer;
          clip-path: polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);
          font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
          font-family: 'DM Sans', sans-serif; overflow: hidden; isolation: isolate;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          background: #0d1424; color: #7dd3fc; box-shadow: inset 0 0 0 1px rgba(125,211,252,0.35);
        }
        .pl-btn-primary::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(100deg,#06b6d4,#7c3aed);
          transform: translateX(-101%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1); z-index: -1;
        }
        .pl-btn-primary:hover { color: #fff; box-shadow: none; }
        .pl-btn-primary:hover::before { transform: translateX(0); }

        /* ══════════ BODY ══════════ */
        .pl-body {
          max-width: 1280px; margin: 0 auto;
          padding: 40px 64px 90px;
          display: flex; flex-direction: column; gap: 24px;
        }

        /* cards */
        .pl-card {
          background: #0b1120;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 36px;
          transition: background 0.3s ease;
        }
        .pl-card:hover { background: #0f1929; }
        .pl-card-full { border-radius: 20px; }

        /* top 2-col grid */
        .pl-top-grid {
          display: grid; grid-template-columns: 1.6fr 1fr;
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; overflow: hidden;
        }
        .pl-card-desc  { border-radius: 0; border: none; }
        .pl-card-details { border-radius: 0; border: none; border-left: 1px solid rgba(255,255,255,0.05); }

        /* section header */
        .pl-section-header { margin-bottom: 32px; }
        .pl-section-heading {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(28px, 3vw, 38px); font-weight: 400;
          line-height: 1.1; letter-spacing: -1px; color: #f0f4ff;
          margin-bottom: 0;
        }
        .pl-text { font-size: 15px; color: #94a3b8; line-height: 1.8; margin-bottom: 16px; font-weight: 300; }
        .pl-text:last-child { margin-bottom: 0; }
        .pl-code-inline {
          font-family: 'Monaco', monospace; font-size: 13px;
          background: rgba(124,140,248,0.10); color: #a5b4fc;
          padding: 2px 6px; border-radius: 5px;
        }

        /* info rows */
        .pl-info-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .pl-info-row:last-of-type { border-bottom: none; }
        .pl-info-label { font-size: 11px; color: #4a5568; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .pl-info-value { font-size: 13px; color: #f0f4ff; font-weight: 600; }
        .pl-status-done { display: flex; align-items: center; gap: 7px; color: #86efac; }
        .pl-status-dot {
          width: 7px; height: 7px; border-radius: 50%; background: currentColor;
          animation: pl-pulse 2s ease-in-out infinite;
        }
        @keyframes pl-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }
        .pl-divider-thin { height: 1px; background: rgba(255,255,255,0.05); margin: 4px 0; }

        /* learning outcomes */
        .pl-lo-list { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
        .pl-lo-item {
          position: relative; padding-left: 16px;
          font-size: 12.5px; color: #94a3b8; line-height: 1.5; font-weight: 400;
        }
        .pl-lo-item::before {
          content: ''; position: absolute; left: 0; top: 7px;
          width: 5px; height: 5px; border-radius: 50%;
          background: #7c8cf8;
        }

        /* platform */
        .pl-platform-row { display: flex; gap: 10px; margin-top: 8px; }
        .pl-platform-item {
          flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 14px 10px;
          background: rgba(124,140,248,0.08); border: 1px solid rgba(124,140,248,0.18);
          border-radius: 12px; color: #a5b4fc; font-size: 12px; font-weight: 600;
          transition: all 0.3s ease;
        }
        .pl-platform-item:hover { background: rgba(124,140,248,0.15); transform: translateY(-3px); }

        /* tech grid */
        .pl-tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 2px;
          background: rgba(255,255,255,0.03);
          border-radius: 14px; overflow: hidden;
        }
        .pl-tech-card {
          display: flex; align-items: center; gap: 12px;
          padding: 16px 18px; background: #0d1525;
          transition: background 0.3s ease; position: relative; overflow: hidden;
        }
        .pl-tech-card:hover { background: #111d35; }
        .pl-tech-indicator {
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: var(--tc); opacity: 0; transition: opacity 0.3s ease;
        }
        .pl-tech-card:hover .pl-tech-indicator { opacity: 1; }
        .pl-tech-icon { font-size: 24px; flex-shrink: 0; }
        .pl-tech-name { font-size: 14px; font-weight: 600; color: #f0f4ff; }

        /* feature grid */
        .pl-feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
          gap: 16px;
        }
        .pl-feature-card {
          padding: 22px;
          background: #0d1525;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 14px;
          transition: all 0.3s ease;
        }
        .pl-feature-card:hover { background: #111d35; border-color: rgba(124,140,248,0.25); transform: translateY(-3px); }
        .pl-feature-icon {
          width: 40px; height: 40px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(124,140,248,0.12); color: #7c8cf8; margin-bottom: 14px;
        }
        .pl-feature-title { font-size: 15px; font-weight: 700; color: #f0f4ff; margin-bottom: 8px; }
        .pl-feature-desc { font-size: 13px; color: #64748b; line-height: 1.65; font-weight: 300; }

        /* tabs */
        .pl-tab-row { display: flex; gap: 10px; margin-bottom: 18px; }
        .pl-tab-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50px; color: #64748b;
          font-size: 12px; font-weight: 700; letter-spacing: 0.4px;
          text-transform: uppercase; cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.25s ease;
        }
        .pl-tab-btn:hover { background: rgba(255,255,255,0.08); color: #cbd5e1; }
        .pl-tab-active {
          background: rgba(124,140,248,0.14);
          border-color: rgba(124,140,248,0.4);
          color: #a5b4fc;
        }

        /* code frame */
        .pl-code-frame { border-radius: 14px; overflow: hidden; background: #1e293b; }
        .pl-code-bar {
          display: flex; align-items: center; gap: 14px; padding: 14px 18px;
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .pl-code-dots { display: flex; gap: 7px; }
        .pl-dot { width: 11px; height: 11px; border-radius: 50%; }
        .pl-dot-r { background: #ff5f57; } .pl-dot-y { background: #febc2e; } .pl-dot-g { background: #28c840; }
        .pl-code-filename { color: #64748b; font-size: 12px; font-family: 'Monaco', monospace; }
        .pl-code-block {
          margin: 0; padding: 24px; background: #0a0e1a;
          color: #c4cad6; font-family: 'Monaco', monospace;
          font-size: 13px; line-height: 1.8; overflow-x: auto;
          max-height: 480px; overflow-y: auto;
        }
        .pl-cli-block { color: #4ade80; }
        .pl-code-block::-webkit-scrollbar { width: 6px; height: 6px; }
        .pl-code-block::-webkit-scrollbar-thumb { background: rgba(124,140,248,0.3); border-radius: 10px; }

        /* ══════════ RESPONSIVE ══════════ */
        @media (max-width: 1100px) {
          .pl-hero { padding: 100px 40px 60px; }
          .pl-body { padding-left: 40px; padding-right: 40px; }
          .pl-top-grid { grid-template-columns: 1fr; }
          .pl-card-details { border-left: none; border-top: 1px solid rgba(255,255,255,0.05); }
        }
        @media (max-width: 768px) {
          .pl-hero { padding: 80px 24px 50px; min-height: auto; }
          .pl-body { padding-left: 24px; padding-right: 24px; }
          .pl-tech-grid { grid-template-columns: repeat(2, 1fr); }
          .pl-feature-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .pl-hero-title { font-size: 36px; }
          .pl-btn-primary { width: 100%; justify-content: center; }
          .pl-tech-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default PlaneTicketBookingDetail;