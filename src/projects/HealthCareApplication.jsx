import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Award,
  Zap,
  Code2,
  Sparkles,
  CheckCircle2,
  Play,
  Download,
  Monitor,
  Smartphone,
  Globe,
  Lock,
  TrendingUp,
  Activity,
  FileText,
  MessageSquare,
  Bell,
  Shield,
  Building2,
  Key,
  BadgeCheck,
  Star,
} from "lucide-react";

// Import all images
import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/Health/HealthcareHero.png";
import doctor3 from "../assets/Health/HealthNexus.png";
import heroImg from "../assets/Health/Hero1.png";
import partners from "../assets/Health/partners.png";
import doorstep from "../assets/Health/doorstep.png";
import doctorDashboard from "../assets/Health/doctordashboard.png";
import doctorAnalytics from "../assets/Health/doctoranalytics.png";
import calendarImg from "../assets/Health/calendar.png";
import myPatient from "../assets/Health/mypatient.png";
import goals from "../assets/Health/goals.png";
import booking from "../assets/Health/booking.png";
import accessPage from "../assets/Health/access page.png";
import services from "../assets/Health/services.png";
import reviewRating from "../assets/Health/reviewand rating.png";
import vendors from "../assets/Health/vendors.png";
import vitalAnalyse from "../assets/Health/vitalanalyse.png";

/* ─── data ─────────────────────────────────────────────────── */
const technologies = [
  { name: "React", category: "Frontend", icon: "⚛️", color: "#61dafb" },
  { name: "Vue.js", category: "Frontend", icon: "💚", color: "#42b883" },
  { name: "Java", category: "Backend", icon: "☕", color: "#007396" },
  { name: "Python", category: "Backend", icon: "🐍", color: "#3776ab" },
  { name: "Spring Boot", category: "Backend", icon: "🍃", color: "#6db33f" },
  { name: "MySQL", category: "Database", icon: "🐬", color: "#4479a1" },
  { name: "MongoDB", category: "Database", icon: "🍃", color: "#47a248" },
  { name: "Redis", category: "Database", icon: "🔴", color: "#dc382d" },
  { name: "Redux", category: "State Management", icon: "🔄", color: "#764abc" },
  { name: "Socket.io", category: "Real-time", icon: "🔌", color: "#888888" },
  { name: "WebRTC", category: "Real-time", icon: "📹", color: "#888888" },
  { name: "MQTT", category: "Real-time", icon: "📡", color: "#660066" },
  {
    name: "GraphQL Subscriptions",
    category: "Real-time",
    icon: "⚡",
    color: "#e10098",
  },
  { name: "Docker", category: "DevOps", icon: "🐳", color: "#2496ed" },
  { name: "Kubernetes", category: "DevOps", icon: "⚓", color: "#326ce5" },
  { name: "Jenkins", category: "DevOps", icon: "🔧", color: "#d24939" },
  { name: "GitHub Actions", category: "DevOps", icon: "🚀", color: "#2088ff" },
  { name: "Terraform", category: "DevOps", icon: "🏗️", color: "#7b42bc" },
  { name: "AWS", category: "Cloud", icon: "☁️", color: "#ff9900" },
  { name: "Azure", category: "Cloud", icon: "☁️", color: "#0089d6" },
  { name: "Google Cloud", category: "Cloud", icon: "☁️", color: "#4285f4" },
  { name: "Netlify", category: "Cloud", icon: "💎", color: "#00c7b7" },
  { name: "Stripe", category: "Payments", icon: "💳", color: "#635bff" },
  { name: "PayPal", category: "Payments", icon: "💰", color: "#00457c" },
  { name: "Bootstrap", category: "Styling", icon: "🅱️", color: "#7952b3" },
  {
    name: "Styled Components",
    category: "Styling",
    icon: "💅",
    color: "#db7093",
  },
  { name: "Jest", category: "Testing", icon: "🃏", color: "#c21325" },
  { name: "Git", category: "Version Control", icon: "📚", color: "#f05032" },
  { name: "GitHub", category: "Version Control", icon: "🐙", color: "#7c8cf8" },
  { name: "Vite", category: "Build Tools", icon: "⚡", color: "#646cff" },
];

const features = [
  {
    title: "AI-Powered Health Predictions",
    description:
      "Machine learning algorithms analyse patient data to predict future health risks like diabetes and provide personalised preventive care recommendations.",
    icon: <Sparkles />,
    color: "#7c8cf8",
  },
  {
    title: "Comprehensive Patient Management",
    description:
      "Complete medical records including immunisation history, medications, allergies, lab reports, and vital signs with interactive trend visualisation.",
    icon: <Users />,
    color: "#a78bfa",
  },
  {
    title: "Smart Appointment System",
    description:
      "Seamless appointment booking connecting patients with doctors, automated reminders and calendar integration.",
    icon: <Calendar />,
    color: "#e879a0",
  },
  {
    title: "Health Analytics Dashboard",
    description:
      "Interactive graphs displaying vital signs trends over time, helping patients and doctors track health progress effectively.",
    icon: <Activity />,
    color: "#38bdf8",
  },
  {
    title: "AI Medical Report Reader",
    description:
      "Intelligent document analysis that automatically processes and extracts key insights from medical reports.",
    icon: <FileText />,
    color: "#34d399",
  },
  {
    title: "JWT Authentication System",
    description:
      "Secure token-based authentication ensuring protected access to sensitive medical data with automatic session management.",
    icon: <Key />,
    color: "#a78bfa",
  },
  {
    title: "Doctor Verification System",
    description:
      "Robust credential verification for healthcare providers, ensuring only qualified and licensed medical professionals access the platform.",
    icon: <BadgeCheck />,
    color: "#a78bfa",
  },
  {
    title: "Real-Time Messaging System",
    description:
      "Secure in-app messaging between patients and healthcare providers for quick consultations, follow-ups, and medical queries.",
    icon: <MessageSquare />,
    color: "#e879a0",
  },
  {
    title: "Smart Notifications",
    description:
      "Automated alerts for appointments, medication reminders, test results, and important health updates.",
    icon: <Bell />,
    color: "#7c8cf8",
  },
  {
    title: "Multi-Role Access System",
    description:
      "Role-based access control for Admin, Doctor, Patient, and Vendors with secure authentication and permissions.",
    icon: <Shield />,
    color: "#a78bfa",
  },
  {
    title: "Vendor Management",
    description:
      "Integrated system for managing pharmacies, hospitals, and laboratories, streamlining healthcare service coordination.",
    icon: <Building2 />,
    color: "#38bdf8",
  },
  {
    title: "Secure Data Storage",
    description:
      "HIPAA-compliant encrypted storage with comprehensive audit trails ensuring patient data privacy and security.",
    icon: <Lock />,
    color: "#34d399",
  },
];

const screenshots = [
  {
    id: 1,
    title: "Healthcare Website",
    url: heroImg,
    description:
      "Modern landing page showcasing healthcare services with intuitive navigation and hero section.",
  },
  {
    id: 2,
    title: "HealthNexus Partners",
    url: partners,
    description:
      "Overview of our partner organisations and their contributions to the HealthNexus platform.",
  },
  {
    id: 3,
    title: "Doorstep Services",
    url: doorstep,
    description:
      "Modern landing page showcasing healthcare services with intuitive navigation and hero section.",
  },
  {
    id: 4,
    title: "Doctor Dashboard",
    url: doctorDashboard,
    description:
      "Comprehensive overview of appointments, patient statistics, and daily schedule for healthcare providers.",
  },
  {
    id: 5,
    title: "Doctor Analytics",
    url: doctorAnalytics,
    description:
      "Advanced analytics displaying patient trends, consultation metrics, and performance insights.",
  },
  {
    id: 6,
    title: "Doctor Schedule Calendar",
    url: calendarImg,
    description:
      "Interactive calendar for managing appointments, availability, and scheduling consultations.",
  },
  {
    id: 7,
    title: "My Patients",
    url: myPatient,
    description:
      "Complete patient management interface with medical history, records, and treatment plans.",
  },
  {
    id: 8,
    title: "Health Goals",
    url: goals,
    description:
      "Patient health goal tracking system with progress visualisation and milestone achievements.",
  },
  {
    id: 9,
    title: "Booking Dashboard",
    url: booking,
    description:
      "Seamless appointment booking interface with doctor selection and time slot availability.",
  },
  {
    id: 10,
    title: "Access Settings",
    url: accessPage,
    description:
      "Role-based access control panel for managing user permissions and security settings.",
  },
  {
    id: 11,
    title: "Health Nexus Services",
    url: services,
    description:
      "Comprehensive overview of healthcare services, specialisations, and medical offerings.",
  },
  {
    id: 12,
    title: "Review and Rating",
    url: reviewRating,
    description:
      "Patient feedback system displaying doctor ratings, reviews, and testimonials.",
  },
  {
    id: 13,
    title: "HealthNexus Vendors",
    url: vendors,
    description:
      "Vendor management portal for pharmacies, laboratories, and hospital partnerships.",
  },
  {
    id: 14,
    title: "Vital Signs Analytics",
    url: vitalAnalyse,
    description:
      "Real-time vital signs monitoring with interactive graphs and health trend analysis.",
  },
];

const projectStats = [
  { label: "Development Time", value: "18 Months", icon: <Calendar /> },
  { label: "Team Size", value: "1 Member", icon: <Users /> },
  { label: "Target Users", value: "10,000+", icon: <TrendingUp /> },
];

const achievements = [
  "Featured in TechCrunch Healthcare Section",
  "99.9% Uptime Achievement",
  "HIPAA Compliance Certified",
  "ISO 27001 Security Standard",
];

/* ─── component ─────────────────────────────────────────────── */
const HealthcareProjectDetail = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const thumbnailScrollRef = React.useRef(null);
  const sectionRef = React.useRef(null);

  /* intersection → fade-in */
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

  /* auto-advance screenshots */
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
    <div ref={sectionRef} className="hd-root">
      {/* ── shared background (matches PortfolioProjects) ── */}
      <div className="hd-grid-bg" />
      <div className="hd-glow-1" />
      <div className="hd-glow-2" />

      <div className={`hd-inner ${isVisible ? "hd-in" : ""}`}>
        {/* ════════════════════ HERO ════════════════════ */}
        <section className="hd-hero">
          {/* blurred background image */}
          <div className="hd-hero-bg-img">
            <img
              src={doctor2}
              alt=""
              aria-hidden="true"
              className="hd-hero-bg-photo"
            />
            <div className="hd-hero-bg-overlay" />
          </div>

          <div className="hd-hero-content">
            {/* left column */}
            <div className="hd-hero-left">
              <button className="hd-back-btn" onClick={() => navigate("/")}>
                <ArrowLeft size={16} />
                <span>Back to Projects</span>
              </button>

              <div className="hd-eyebrow">
                <span className="hd-eyebrow-line" />
                <Sparkles size={13} />
                <span>Final Year Project · 2026</span>
                <Sparkles size={13} />
                <span className="hd-eyebrow-line" />
              </div>

              <h1 className="hd-hero-title">
                Next-Generation
                <br />
                <em className="hd-title-em">Healthcare Platform</em>
              </h1>

              <p className="hd-hero-subtitle">
                Transforming patient care through AI-powered diagnostics,
                predictive health analytics, and seamless telemedicine
                integration built for the future of healthcare delivery.
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

              <div className="hd-hero-actions">
                <button
                  className="hd-btn-primary"
                  onClick={() =>
                    window.open("https://health-nexus.netlify.app", "_blank")
                  }
                >
                  <ExternalLink size={17} />
                  <span>View Live Demo</span>
                </button>
                <button className="hd-btn-secondary">
                  <Github size={17} />
                  <span>Source Code</span>
                </button>
              </div>
            </div>

            {/* right column — image */}
            <div className="hd-hero-right">
              <div className="hd-hero-img-wrap">
                <img
                  src={doctor3}
                  alt="Healthcare Platform"
                  className="hd-hero-img"
                />
                <div className="hd-img-glow" />
                <div className="hd-img-border" />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ STICKY TABS ════════════ */}
        <div className="hd-tabs-bar">
          {["overview", "features", "technologies", "documentation"].map(
            (tab) => (
              <button
                key={tab}
                className={`hd-tab ${activeTab === tab ? "hd-tab-active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ),
          )}
        </div>

        {/* ════════════ CONTENT ════════════ */}
        <div className="hd-content">
          {/* ── OVERVIEW ── */}
          {activeTab === "overview" && (
            <section className="hd-section hd-fade-in">
              <h2 className="hd-section-title">Project Overview</h2>
              <div className="hd-overview-grid">
                {/* main */}
                <div className="hd-bento-card">
                  <p className="hd-text">
                    The Healthcare Application is a comprehensive digital health
                    platform designed to bridge the gap between healthcare
                    providers, patients, and medical vendors. Built as my final
                    year project, this system integrates artificial
                    intelligence, secure data management, and real-time
                    analytics to deliver a seamless healthcare ecosystem for all
                    stakeholders.
                  </p>
                  <h3 className="hd-sub-title">Problem Statement</h3>
                  <p className="hd-text">
                    Traditional healthcare systems struggle with fragmented
                    patient data, limited accessibility to medical records,
                    inefficient appointment management, and lack of predictive
                    health insights. Healthcare providers often lack
                    comprehensive patient history during consultations, while
                    patients have limited visibility into their health trends
                    and future risk factors.
                  </p>
                  <h3 className="hd-sub-title">Solution</h3>
                  <p className="hd-text">
                    Our platform provides an integrated healthcare ecosystem
                    with three user roles: Admin, Doctor, and Patient, along
                    with vendor management for pharmacies, hospitals, and
                    laboratories. Patients can easily book appointments and
                    access their complete medical history visualised through
                    interactive graphs showing vital signs trends over time.
                  </p>
                  <p className="hd-text">
                    The system leverages machine learning to analyse patient
                    health data and predict potential health risks, such as
                    diabetes development within the next year, providing
                    personalised preventive care recommendations.
                  </p>
                  <h3 className="hd-sub-title">Technical Highlights</h3>
                  <div className="hd-highlights">
                    {[
                      "Server-Side Rendering (SSR) with Next.js for optimal SEO and performance",
                      "Microservices architecture with independent scaling capabilities",
                      "Redis caching layer reducing database load by 70%",
                      "GraphQL API for efficient data fetching and reduced payload sizes",
                      "Progressive Web App (PWA) with offline capabilities",
                      "Automated CI/CD pipeline with zero-downtime deployments",
                    ].map((h, i) => (
                      <div key={i} className="hd-highlight-item">
                        <CheckCircle2 size={17} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* sidebar */}
                <div className="hd-sidebar">
                  {/* project details */}
                  <div className="hd-bento-card hd-bento-sm">
                    <h3 className="hd-card-title">Project Details</h3>
                    {[
                      [
                        "Status",
                        <span className="hd-status-live">
                          <span className="hd-status-dot" />
                          In Development
                        </span>,
                      ],
                      ["Timeline", "Jan 2024 – Present"],
                      ["Role", "Full Stack Developer"],
                      ["Category", "Healthcare, AI/ML"],
                    ].map(([label, val], i) => (
                      <div key={i} className="hd-info-row">
                        <span className="hd-info-label">{label}</span>
                        <span className="hd-info-value">{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* platform */}
                  <div className="hd-bento-card hd-bento-sm">
                    <h3 className="hd-card-title">Platform Support</h3>
                    <div className="hd-platform-row">
                      {[
                        ["Web", <Monitor size={22} />],
                        ["Mobile", <Smartphone size={22} />],
                        ["Cloud", <Globe size={22} />],
                      ].map(([name, icon], i) => (
                        <div key={i} className="hd-platform-item">
                          {icon}
                          <span>{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* achievements */}
                  <div className="hd-bento-card hd-bento-sm">
                    <h3 className="hd-card-title">Future Achievements</h3>
                    {achievements.map((a, i) => (
                      <div key={i} className="hd-achievement-item">
                        <Award
                          size={15}
                          style={{ color: "#fcd34d", flexShrink: 0 }}
                        />
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ── FEATURES ── */}
          {activeTab === "features" && (
            <section className="hd-section hd-fade-in">
              <h2 className="hd-section-title">
                Core <em className="hd-em">Features</em>
              </h2>
              <p className="hd-section-desc">
                A full-featured healthcare ecosystem built around the real needs
                of patients, doctors, and administrators.
              </p>
              <div className="hd-features-grid">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="hd-feature-card"
                    style={{ "--fa": f.color }}
                  >
                    <div className="hd-feature-icon">{f.icon}</div>
                    <h3 className="hd-feature-title">{f.title}</h3>
                    <p className="hd-feature-desc">{f.description}</p>
                    <div className="hd-feature-glow" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── TECHNOLOGIES ── */}
          {activeTab === "technologies" && (
            <section className="hd-section hd-fade-in">
              <h2 className="hd-section-title">
                Technology <em className="hd-em">Stack</em>
              </h2>
              <p className="hd-section-desc">
                Built with modern, scalable technologies ensuring high
                performance, security, and maintainability.
              </p>
              <div className="hd-tech-grid">
                {technologies.map((t, i) => (
                  <div
                    key={i}
                    className="hd-tech-card"
                    style={{ "--tc": t.color }}
                  >
                    <span className="hd-tech-indicator" />
                    <span className="hd-tech-icon">{t.icon}</span>
                    <div>
                      <div className="hd-tech-name">{t.name}</div>
                      <div className="hd-tech-cat">{t.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── DOCUMENTATION ── */}
          {activeTab === "documentation" && (
            <section className="hd-section hd-fade-in">
              <h2 className="hd-section-title">
                Technical <em className="hd-em">Documentation</em>
              </h2>
              <p className="hd-section-desc">
                Comprehensive technical documentation including architecture
                diagrams, database schemas, and sequence flows.
              </p>
              <div className="hd-docs-grid">
                {[
                  {
                    icon: "🏗️",
                    title: "System Architecture",
                    desc: "Complete system architecture with frontend, backend, and infrastructure layers.",
                    url: "/public/docs/healthcare-architecture-diagram.html",
                  },
                  {
                    icon: "🗄️",
                    title: "Database Schema",
                    desc: "Detailed database design with entity relationships and table structures.",
                    url: "/public/docs/healthcare-database-schema.html",
                  },
                  {
                    icon: "🔄",
                    title: "Sequence Diagrams",
                    desc: "Visual workflows for registration, booking, consultations, and prescriptions.",
                    url: "/public/docs/healthcare-sequence-diagrams.html",
                  },
                ].map((d, i) => (
                  <div key={i} className="hd-doc-card">
                    <div className="hd-doc-icon">{d.icon}</div>
                    <h3 className="hd-doc-title">{d.title}</h3>
                    <p className="hd-doc-desc">{d.desc}</p>
                    <button
                      className="hd-btn-secondary"
                      onClick={() => window.open(d.url, "_blank")}
                    >
                      <FileText size={16} />
                      <span>View Document</span>
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* ════════════ SCREENSHOTS ════════════ */}
        <div className="hd-ss-section hd-fade-in">
          {/* section divider */}
          <div className="hd-divider">
            <span className="hd-divider-line" />
            <span className="hd-divider-label">Application Overview</span>
            <span className="hd-divider-line" />
          </div>

          <h2
            className="hd-section-title"
            style={{ textAlign: "center", marginBottom: 8 }}
          >
            Explore the <em className="hd-em">Interface</em>
          </h2>
          <p
            className="hd-section-desc"
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            Explore the intuitive interface and powerful features of our
            healthcare platform.
          </p>

          {/* featured frame */}
          <div className="hd-ss-main">
            <div className="hd-browser-frame">
              <div className="hd-browser-bar">
                <div className="hd-browser-dots">
                  <span className="hd-dot hd-dot-r" />
                  <span className="hd-dot hd-dot-y" />
                  <span className="hd-dot hd-dot-g" />
                </div>
                <div className="hd-browser-url">healthcare-app.demo</div>
              </div>
              <img
                src={screenshots[activeScreenshot].url}
                alt={screenshots[activeScreenshot].title}
                className="hd-ss-img"
              />
            </div>
            <div className="hd-ss-meta">
              <h3 className="hd-ss-title">
                {screenshots[activeScreenshot].title}
              </h3>
              <p className="hd-ss-desc">
                {screenshots[activeScreenshot].description}
              </p>
            </div>
          </div>

          {/* thumbnail row */}
          <div className="hd-thumb-breakout">
          <div className="hd-thumb-row">
            <button
              className="hd-thumb-scroll-btn"
              onClick={() => scrollThumbnails("left")}
            >
              <ArrowLeft size={20} />
            </button>
            <div className="hd-thumb-track" ref={thumbnailScrollRef}>
              {screenshots.map((s, i) => (
                <div
                  key={s.id}
                  className={`hd-thumb-card ${activeScreenshot === i ? "hd-thumb-active" : ""}`}
                  onClick={() => setActiveScreenshot(i)}
                >
                  <div className="hd-thumb-img-wrap">
                    <img src={s.url} alt={s.title} className="hd-thumb-img" />
                    <div className="hd-thumb-overlay">
                      <Play size={18} className="hd-thumb-play" />
                    </div>
                  </div>
                  <div className="hd-thumb-label">
                    <span className="hd-thumb-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="hd-thumb-name">{s.title}</span>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="hd-thumb-scroll-btn"
              onClick={() => scrollThumbnails("right")}
            >
              <ArrowLeft size={20} style={{ transform: "rotate(180deg)" }} />
            </button>
          </div>
          </div>
        </div>

        {/* ════════════ CTA ════════════ */}
        <section className="hd-cta">
          <div className="hd-cta-inner">
            <div
              className="hd-eyebrow"
              style={{ justifyContent: "center", marginBottom: 20 }}
            >
              <span className="hd-eyebrow-line" />
              <Sparkles size={13} />
              <span>Let's Connect</span>
              <Sparkles size={13} />
              <span className="hd-eyebrow-line" />
            </div>
            <h2 className="hd-cta-title">
              Interested in <em className="hd-em">Learning More?</em>
            </h2>
            <p className="hd-cta-desc">
              Get in touch to discuss this project in detail or explore
              collaboration opportunities.
            </p>
            <button
              className="hd-btn-primary"
              onClick={() =>
                window.open("https://health-nexus.netlify.app/", "_blank")
              }
            >
              <ExternalLink size={17} />
              <span>Visit Platform</span>
            </button>
          </div>
        </section>

        {/* ════════════ FOOTER STRIP ════════════ */}
        <div className="hd-footer-strip">
          {[
            "Healthcare",
            "AI/ML",
            "Spring Boot",
            "React",
            "Final Year Project",
          ].map((l, i, arr) => (
            <React.Fragment key={i}>
              <span className="hd-strip-item">{l}</span>
              {i < arr.length - 1 && <span className="hd-strip-dot">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* hd-inner */}

      {/* ═══════════════════════════ STYLES ═══════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── Root ─────────────────────────────────── */
        .hd-root {
          position: relative;
          min-height: 100vh;
          background: #080c14;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          color: #f0f4ff;
        }

        /* ── Shared background (matches PortfolioProjects) ── */
        .hd-grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none;
          z-index: 0;
        }
        .hd-glow-1 {
          position: fixed; top: -180px; right: -160px;
          width: 680px; height: 680px;
          background: radial-gradient(circle, rgba(124,140,248,0.10) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: hd-drift1 20s ease-in-out infinite alternate;
        }
        .hd-glow-2 {
          position: fixed; bottom: -120px; left: -80px;
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(232,121,160,0.08) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: hd-drift2 25s ease-in-out infinite alternate;
        }
        @keyframes hd-drift1 { from{transform:translate(0,0)} to{transform:translate(-60px,50px)} }
        @keyframes hd-drift2 { from{transform:translate(0,0)} to{transform:translate(50px,-40px)} }

        /* ── Inner ─────────────────────────────────── */
        .hd-inner {
          position: relative; z-index: 1;
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .hd-inner.hd-in { opacity: 1; transform: translateY(0); }

        /* ════════════ HERO ════════════ */
        .hd-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 64px 80px;
          overflow: hidden;
        }

        /* blurred bg image */
        .hd-hero-bg-img {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hd-hero-bg-photo {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 30%;
          filter: blur(-4px) brightness(0.22) saturate(0.7);
          transform: scale(1.06); /* hide blur edges */
        }
        .hd-hero-bg-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(to bottom, rgba(8,12,20,0.45) 0%, rgba(8,12,20,0.80) 120%, #080c14 10%),
            linear-gradient(to right,  rgba(8,12,20,0.55) 0%, transparent 70%);
        }

        .hd-hero-content {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto; width: 100%;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .hd-hero-left { display: flex; flex-direction: column; gap: 0; }

        /* back btn */
        .hd-back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px;
          color: #94a3b8; font-size: 13px; font-weight: 600;
          cursor: pointer; transition: all 0.3s ease;
          align-self: flex-start;
          margin-bottom: 32px;
          font-family: 'DM Sans', sans-serif;
        }
        .hd-back-btn:hover { background: rgba(255,255,255,0.10); color: #f0f4ff; transform: translateX(-4px); }

        /* eyebrow (matches PortfolioProjects) */
        .hd-eyebrow {
          display: flex; align-items: center; gap: 12px;
          font-size: 11px; font-weight: 600; letter-spacing: 3px;
          text-transform: uppercase; color: #a4acbb;
          margin-bottom: 24px;
        }
        .hd-eyebrow-line { display: block; width: 32px; height: 1px; background: #4a5568; }

        /* title */
        .hd-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(46px, 5.5vw, 66px);
          font-weight: 400; line-height: 1.05;
          letter-spacing: -2px;
          color: #f0f4ff;
          margin-bottom: 24px;
        }
        .hd-title-em, .hd-em {
          font-style: italic;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* subtitle */
        .hd-hero-subtitle {
          font-size: 17px; line-height: 1.75; color: #a4a7ac;
          font-weight: 500; max-width: 520px; margin-bottom: 40px;
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

        /* action buttons (match pp-action-btn) */
        .hd-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .hd-btn-primary, .hd-btn-secondary {
          position: relative; display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border: none; border-radius: 0; cursor: pointer;
          clip-path: polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);
          font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
          font-family: 'DM Sans', sans-serif; overflow: hidden; isolation: isolate;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .hd-btn-primary {
          background: #0d1424; color: #7dd3fc;
          box-shadow: inset 0 0 0 1px rgba(125,211,252,0.35);
        }
        .hd-btn-primary::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(100deg,#06b6d4,#7c3aed);
          transform: translateX(-101%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1); z-index: -1;
        }
        .hd-btn-primary:hover { color: #fff; box-shadow: none; }
        .hd-btn-primary:hover::before { transform: translateX(0); }
        .hd-btn-secondary {
          background: transparent; color: #c4b5fd;
          box-shadow: inset 0 0 0 1px rgba(196,181,253,0.4);
        }
        .hd-btn-secondary::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(100deg,#7c3aed,#ec4899);
          transform: translateX(-101%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1); z-index: -1;
        }
        .hd-btn-secondary:hover { color: #fff; box-shadow: none; }
        .hd-btn-secondary:hover::before { transform: translateX(0); }

        /* hero right — image */
        /* hero right — image */
.hd-hero-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hd-hero-img-wrap {
  position: relative;
  width: 100%;
  max-width: 680px;
  border-radius: 20px;
  overflow: hidden;
  background: transparent;
}
.hd-hero-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 20px;
  position: relative;
  z-index: 2;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
  transition: transform 0.5s ease;
  background: transparent;
}
.hd-hero-img:hover {
  transform: translateY(-8px) scale(1.02);
}
  
        .hd-hero-img:hover { transform: translateY(-8px) scale(1.02); }
        .hd-img-glow {
          position: absolute; inset: -30px;
          background: radial-gradient(circle, rgba(124,140,248,0.35) 0%, rgba(232,121,160,0.25) 50%, transparent 70%);
          filter: blur(50px); z-index: 1; opacity: 0.7;
          animation: hd-glow-pulse 4s ease-in-out infinite;
        }
        @keyframes hd-glow-pulse { 0%,100%{opacity:0.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.05)} }
        .hd-img-border {
          position: absolute; inset: -2px; border-radius: 28px; z-index: 1;
          background: linear-gradient(135deg,#7c8cf8,#e879a0,#38bdf8);
          background-size: 300% 300%; opacity: 0.25;
          animation: hd-border-spin 8s ease infinite;
        }
        @keyframes hd-border-spin { 0%{background-position:0 50%} 50%{background-position:100% 50%} 100%{background-position:0 50%} }

        /* floating cards */
        .hd-float-card {
          position: absolute; display: flex; align-items: center; gap: 12px;
          padding: 14px 18px;
          background: rgba(11,17,32,0.92);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 14px; backdrop-filter: blur(14px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 3;
          animation: hd-float 3s ease-in-out infinite;
        }
        .hd-fc-1 { top: 10%; right: -8%; animation-delay: 0s; }
        .hd-fc-2 { bottom: 14%; left: -8%; animation-delay: 1.5s; }
        @keyframes hd-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .hd-fc-label { font-size: 11px; color: #4a5568; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .hd-fc-value  { font-size: 18px; font-weight: 700; color: #f0f4ff; margin-top: 2px; }

        /* ════════════ TABS BAR ════════════ */
        .hd-tabs-bar {
          position: sticky; top: 0; z-index: 100;
          background: rgba(8,12,20,0.90);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          display: flex; gap: 4px;
          padding: 0 64px;
          max-width: 100%;
          overflow-x: auto;
        }
        .hd-tab {
          padding: 20px 28px; background: transparent; border: none;
          color: #4a5568; font-size: 14px; font-weight: 600; letter-spacing: 0.5px;
          cursor: pointer; transition: color 0.25s ease; white-space: nowrap;
          position: relative; font-family: 'DM Sans', sans-serif;
          text-transform: uppercase;
        }
        .hd-tab:hover { color: #94a3b8; }
        .hd-tab-active { color: #f0f4ff; }
        .hd-tab-active::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #7c8cf8, #e879a0);
          border-radius: 2px 2px 0 0;
        }

        /* ════════════ CONTENT WRAPPER ════════════ */
        .hd-content {
          max-width: 1280px; margin: 0 auto;
          padding: 72px 64px 40px;
        }
        .hd-section { margin-bottom: 80px; }
        .hd-fade-in { animation: hd-fadein 0.55s ease-out; }
        @keyframes hd-fadein { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }

        /* shared typography */
        .hd-section-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(40px, 4.5vw, 52px);
          font-weight: 400; line-height: 1.05;
          letter-spacing: -1.5px; color: #f0f4ff;
          margin-bottom: 16px;
        }
        .hd-section-desc { font-size: 16px; color: #64748b; font-weight: 300; line-height: 1.75; margin-bottom: 48px; max-width: 640px; }
        .hd-sub-title { font-family: 'DM Serif Display', serif; font-size: 22px; color: #f0f4ff; margin: 28px 0 12px; }
        .hd-text { font-size: 15px; color: #94a3b8; line-height: 1.8; margin-bottom: 20px; font-weight: 300; }
        .hd-card-title { font-family: 'DM Serif Display', serif; font-size: 18px; color: #f0f4ff; margin-bottom: 20px; }

        /* ── bento card (matches .pp-project-card) ── */
        .hd-bento-card {
          background: #0b1120;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 32px;
          transition: background 0.3s ease;
        }
        .hd-bento-card:hover { background: #0f1929; }
        .hd-bento-sm { padding: 24px; }

        /* overview 2-col grid */
        .hd-overview-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 2px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 24px; overflow: hidden; }
        .hd-sidebar { display: flex; flex-direction: column; gap: 2px; }

        /* highlights */
        .hd-highlights { display: flex; flex-direction: column; gap: 10px; margin-top: 16px; }
        .hd-highlight-item {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 14px; background: rgba(124,140,248,0.06);
          border-left: 2px solid rgba(124,140,248,0.4);
          border-radius: 6px; color: #94a3b8; font-size: 14px; line-height: 1.6;
        }
        .hd-highlight-item svg { color: #7c8cf8; flex-shrink: 0; margin-top: 2px; }

        /* info rows */
        .hd-info-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .hd-info-row:last-child { border-bottom: none; }
        .hd-info-label { font-size: 12px; color: #4a5568; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .hd-info-value { font-size: 13px; color: #f0f4ff; font-weight: 600; }
        .hd-status-live { display: flex; align-items: center; gap: 7px; color: #86efac; }
        .hd-status-dot {
          width: 7px; height: 7px; border-radius: 50%; background: currentColor;
          animation: hd-pulse 2s ease-in-out infinite;
        }
        @keyframes hd-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }

        /* platform */
        .hd-platform-row { display: flex; gap: 10px; margin-top: 4px; }
        .hd-platform-item {
          flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 14px 10px;
          background: rgba(124,140,248,0.08); border: 1px solid rgba(124,140,248,0.18);
          border-radius: 12px; color: #a5b4fc; font-size: 12px; font-weight: 600;
          transition: all 0.3s ease;
        }
        .hd-platform-item:hover { background: rgba(124,140,248,0.15); transform: translateY(-3px); }

        /* achievements */
        .hd-achievement-item {
          display: flex; align-items: center; gap: 10px;
          padding: 12px; margin-bottom: 8px;
          background: rgba(251,191,36,0.07); border: 1px solid rgba(251,191,36,0.15);
          border-radius: 10px; color: #fcd34d; font-size: 13px; font-weight: 600;
        }
        .hd-achievement-item:last-child { margin-bottom: 0; }

        /* ── FEATURES GRID ── */
        .hd-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px; overflow: hidden;
        }
        .hd-feature-card {
          position: relative; background: #0b1120;
          padding: 28px 26px; overflow: hidden;
          transition: background 0.35s ease;
          border-bottom: 4px solid transparent;
        }
        .hd-feature-card:hover { background: #0f1929; border-bottom-color: var(--fa); }
        .hd-feature-icon {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          background: color-mix(in srgb, var(--fa) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--fa) 22%, transparent);
          color: var(--fa); margin-bottom: 18px;
          transition: transform 0.3s ease;
        }
        .hd-feature-card:hover .hd-feature-icon { transform: scale(1.08) rotate(4deg); }
        .hd-feature-title { font-family: 'DM Serif Display', serif; font-size: 18px; color: #f0f4ff; margin-bottom: 10px; }
        .hd-feature-desc  { font-size: 13px; color: #64748b; line-height: 1.7; font-weight: 300; }
        .hd-feature-glow  {
          position: absolute; inset: 0; pointer-events: none; opacity: 0;
          background: radial-gradient(circle at 0% 100%, color-mix(in srgb, var(--fa) 12%, transparent), transparent 60%);
          transition: opacity 0.4s ease;
        }
        .hd-feature-card:hover .hd-feature-glow { opacity: 1; }

        /* ── TECH GRID ── */
        .hd-tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px; overflow: hidden;
        }
        .hd-tech-card {
          display: flex; align-items: center; gap: 14px;
          padding: 20px 20px; background: #0b1120;
          transition: background 0.3s ease;
          position: relative; overflow: hidden;
        }
        .hd-tech-card:hover { background: #0f1929; }
        .hd-tech-indicator {
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: var(--tc); opacity: 0; transition: opacity 0.3s ease;
        }
        .hd-tech-card:hover .hd-tech-indicator { opacity: 1; }
        .hd-tech-icon { font-size: 28px; flex-shrink: 0; }
        .hd-tech-name { font-size: 15px; font-weight: 600; color: #f0f4ff; margin-bottom: 3px; }
        .hd-tech-cat  { font-size: 11px; color: #4a5568; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }

        /* ── DOCS GRID ── */
        .hd-docs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px; overflow: hidden;
        }
        .hd-doc-card {
          background: #0b1120; padding: 36px 28px; text-align: center;
          transition: background 0.35s ease;
          border-bottom: 4px solid transparent;
        }
        .hd-doc-card:hover { background: #0f1929; border-bottom-color: #7c8cf8; }
        .hd-doc-icon { font-size: 44px; margin-bottom: 16px; }
        .hd-doc-title { font-family: 'DM Serif Display', serif; font-size: 22px; color: #f0f4ff; margin-bottom: 10px; }
        .hd-doc-desc  { font-size: 14px; color: #64748b; line-height: 1.6; margin-bottom: 24px; font-weight: 300; }

        /* ════════════ SCREENSHOTS ════════════ */
        .hd-ss-section {
          max-width: 1280px; margin: 0 auto;
          padding: 0 64px 80px;
        }

        /* divider (matches PortfolioProjects) */
        .hd-divider { display: flex; align-items: center; gap: 20px; margin-bottom: 40px; }
        .hd-divider-line { flex: 1; height: 1px; background: rgba(255,255,255,0.06); }
        .hd-divider-label { font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: #2d3748; white-space: nowrap; }

        .hd-ss-main {
          background: #0b1120;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 28px;
          margin-bottom: 24px;
        }
        .hd-browser-frame { border-radius: 14px; overflow: hidden; background: #1e293b; margin-bottom: 24px; }
        .hd-browser-bar {
          display: flex; align-items: center;
          padding: 14px 18px;
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative;
        }
        .hd-browser-dots { display: flex; gap: 7px; }
        .hd-dot { width: 11px; height: 11px; border-radius: 50%; }
        .hd-dot-r { background: #ff5f57; } .hd-dot-y { background: #febc2e; } .hd-dot-g { background: #28c840; }
        .hd-browser-url {
          position: absolute; left: 50%; transform: translateX(-50%);
          padding: 6px 18px; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 6px; color: #64748b; font-size: 12px;
          font-family: 'Monaco', monospace;
        }
        .hd-ss-img { width: 100%; display: block; object-fit: contain; max-height: 560px; min-height: 320px; background: #0a0e1a; }
        .hd-ss-title { font-family: 'DM Serif Display', serif; font-size: 26px; color: #f0f4ff; margin-bottom: 10px; }
        .hd-ss-desc   { font-size: 14px; color: #64748b; line-height: 1.7; font-weight: 300; }

        /* thumbnail row */
        .hd-thumb-row { display: flex; align-items: center; gap: 12px;}
        .hd-thumb-scroll-btn {
          flex-shrink: 0; width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(124,140,248,0.12); border: 1px solid rgba(124,140,248,0.25);
          color: #f0f4ff; cursor: pointer; transition: all 0.3s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .hd-thumb-breakout {
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          width: 100vw;
          padding: 0 24px;
          box-sizing: border-box;
        }
        .hd-thumb-scroll-btn:hover { background: rgba(124,140,248,0.25); transform: scale(1.08); }
        .hd-thumb-track {
          display: flex; gap: 16px; overflow-x: auto; scroll-behavior: smooth;
          padding: 14px 6px; flex: 1;
          scrollbar-width: thin; scrollbar-color: rgba(124,140,248,0.4) rgba(255,255,255,0.05);
        }
        .hd-thumb-track::-webkit-scrollbar { height: 5px; }
        .hd-thumb-track::-webkit-scrollbar-track { background: rgba(255,255,255,0.04); border-radius: 10px; }
        .hd-thumb-track::-webkit-scrollbar-thumb { background: rgba(124,140,248,0.4); border-radius: 10px; }
        .hd-thumb-card { flex: 0 0 220px; cursor: pointer; transition: transform 0.3s ease; }
        .hd-thumb-card:hover { transform: translateY(-4px); }
        .hd-thumb-img-wrap {
          position: relative; border-radius: 12px; overflow: hidden;
          border: 2px solid rgba(255,255,255,0.06); aspect-ratio: 16/10;
          transition: border-color 0.3s ease;
        }
        .hd-thumb-active .hd-thumb-img-wrap { border-color: rgba(124,140,248,0.7); box-shadow: 0 0 0 3px rgba(124,140,248,0.18); }
        .hd-thumb-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .hd-thumb-card:hover .hd-thumb-img { transform: scale(1.05); }
        .hd-thumb-overlay {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, rgba(124,140,248,0.88), rgba(232,121,160,0.88));
          opacity: 0; transition: opacity 0.3s ease;
        }
        .hd-thumb-card:hover .hd-thumb-overlay { opacity: 1; }
        .hd-thumb-play { color: #fff; }
        .hd-thumb-label { display: flex; align-items: center; gap: 8px; margin-top: 10px; }
        .hd-thumb-num  { font-size: 12px; font-weight: 800; color: #7c8cf8; background: rgba(124,140,248,0.12); padding: 3px 8px; border-radius: 5px; font-family: 'Monaco', monospace; }
        .hd-thumb-name { font-size: 12px; font-weight: 600; color: #64748b; }
        .hd-thumb-active .hd-thumb-name { color: #a5b4fc; }

        /* ════════════ CTA ════════════ */
        .hd-cta {
          background: #0b1120;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 100px 64px;
          text-align: center;
          position: relative; overflow: hidden;
        }
        .hd-cta::before {
          content: ''; position: absolute; top: -120px; left: 50%;
          transform: translateX(-50%);
          width: 500px; height: 400px;
          background: radial-gradient(circle, rgba(124,140,248,0.10) 0%, transparent 70%);
          pointer-events: none;
        }
        .hd-cta-inner { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }
        .hd-cta-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(40px, 4vw, 54px);
          font-weight: 400; letter-spacing: -1.5px; color: #f0f4ff;
          margin-bottom: 18px; line-height: 1.05;
        }
        .hd-cta-desc { font-size: 16px; color: #64748b; line-height: 1.75; font-weight: 300; margin-bottom: 36px; }

        /* ════════════ FOOTER STRIP ════════════ */
        .hd-footer-strip {
          display: flex; align-items: center; justify-content: center;
          flex-wrap: wrap; gap: 16px; padding: 40px 64px;
        }
        .hd-strip-item {
          font-size: 11px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; color: #2d3748; transition: color 0.3s ease;
        }
        .hd-strip-item:hover { color: #4a5568; }
        .hd-strip-dot { color: #1e293b; font-size: 16px; line-height: 1; }

        /* ════════════ RESPONSIVE ════════════ */
        @media (max-width: 1100px) {
          .hd-hero { padding: 100px 40px 70px; }
          .hd-content, .hd-ss-section { padding-left: 40px; padding-right: 40px; }
          .hd-tabs-bar { padding: 0 40px; }
          .hd-overview-grid { grid-template-columns: 1fr; }
          .hd-hero-content { grid-template-columns: 1fr; gap: 48px; }
          .hd-hero-right { order: -1; }
          .hd-hero-img-wrap { max-width: 380px; margin: 0 auto; }
        }
        @media (max-width: 768px) {
          .hd-hero { padding: 80px 24px 60px; min-height: auto; }
          .hd-content, .hd-ss-section, .hd-cta, .hd-footer-strip { padding-left: 24px; padding-right: 24px; }
          .hd-tabs-bar { padding: 0 24px; }
          .hd-hero-stats { flex-direction: column; }
          .hd-features-grid { grid-template-columns: 1fr; }
          .hd-tech-grid { grid-template-columns: 1fr; }
          .hd-float-card { display: none; }
          .hd-ss-section { padding-bottom: 60px; }
          .hd-thumb-card { flex: 0 0 180px; }
          .hd-browser-url { display: none; }
        }
        @media (max-width: 480px) {
          .hd-hero-title { font-size: 38px; }
          .hd-section-title { font-size: 34px; }
          .hd-cta-title { font-size: 34px; }
          .hd-hero-actions { flex-direction: column; }
          .hd-btn-primary, .hd-btn-secondary { width: 100%; justify-content: center; }
          .hd-docs-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default HealthcareProjectDetail;
