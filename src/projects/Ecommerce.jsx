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
  ShoppingCart,
  BarChart3,
  Package,
  CreditCard,
  Receipt,
  UserCheck,
  RefreshCw,
  Layers,
  Database,
  Printer,
  Search,
  Tag,
  Wallet,
} from "lucide-react";

// ─── Import your screenshots here ───────────────────────────
import dashboardImg from "../assets/ECommerce/mainmenu.png";
import invoice from "../assets/ECommerce/invoice.png";
import payment from "../assets/ECommerce/payment.png";
import category from "../assets/ECommerce/category.png";
import product from "../assets/ECommerce/product.png";
import login from "../assets/ECommerce/login.png";
import customer from "../assets/ECommerce/customer.png";
import supplier from "../assets/ECommerce/supplier.png";
import report from "../assets/ECommerce/image2.png";

import demohero from "../assets/ECommerce/demohero.png";
import posHeroBg from "../assets/e-commerce.avif";
import rightimage from "../assets/ECommerce/lapandtab.png";

// ─── Placeholder screenshots (replace with real imports) ─────
const placeholderScreenshots = [
  {
    id: 1,
    title: "Main Dashboard",
    url: demohero,
    description:
      "Central control panel showing real-time sales, revenue metrics, and daily transaction summaries.",
  },
  {
    id: 2,
    title: "Sales Register",
    url: login,
    description:
      "Intuitive checkout interface for fast product scanning, quantity adjustment, and payment processing.",
  },
  {
    id: 3,
    title: "Inventory Management",
    url: dashboardImg,
    description:
      "Complete stock control with low-stock alerts, reorder tracking, and supplier management.",
  },
  {
    id: 4,
    title: "Customer Management",
    url: invoice,
    description:
      "Customer profiles with purchase history, loyalty points, and advance payment account balances.",
  },
  {
    id: 5,
    title: "Sales Reports",
    url: payment,
    description:
      "Detailed sales analytics with date-range filters, product breakdowns, and profit margin charts.",
  },
  {
    id: 6,
    title: "Product Catalogue",
    url: category,
    description:
      "Comprehensive product listing with categories, pricing tiers, barcode support, and stock levels.",
  },
  {
    id: 7,
    title: "Returns & Refunds",
    url: product,
    description:
      "Streamlined return processing with reason tracking, partial refunds, and inventory restoration.",
  },
  {
    id: 8,
    title: "Recharge Accounts",
    url: customer,
    description:
      "Customer advance payment recharge system with auto-generated account IDs and balance ledger.",
  },
  {
    id: 9,
    title: "Receipt Printing",
    url: supplier,
    description:
      "Thermal receipt generation with store branding, itemised billing, and payment method breakdown.",
  },
  {
    id: 10,
    title: "User Access Control",
    url: report,
    description:
      "Role-based access panel for Admin, Cashier, and Manager roles with audit logs.",
  },
];

/* ─── data ─────────────────────────────────────────────────── */
const technologies = [
  { name: "Java", category: "Backend", icon: "☕", color: "#007396" },
  { name: "React", category: "Frontend", icon: "🖼️", color: "#0073b5" },
  { name: "NetBeans IDE", category: "Tooling", icon: "🛠️", color: "#1b6ac6" },
  { name: "MySQL", category: "Database", icon: "🐬", color: "#4479a1" },
  { name: "JDBC", category: "Database", icon: "🔗", color: "#4479a1" },
  { name: "Maven", category: "Build Tools", icon: "📦", color: "#c71a36" },
  {
    name: "iReport / JasperReports",
    category: "Reporting",
    icon: "📊",
    color: "#e67e22",
  },
  { name: "Git", category: "Version Control", icon: "📚", color: "#f05032" },
  { name: "GitHub", category: "Version Control", icon: "🐙", color: "#7c8cf8" },
  { name: "Hibernate / JPA", category: "ORM", icon: "🏗️", color: "#59666c" },
  {
    name: "DAO Pattern",
    category: "Architecture",
    icon: "🔄",
    color: "#8e44ad",
  },
  {
    name: "MVC Architecture",
    category: "Architecture",
    icon: "🧩",
    color: "#2980b9",
  },
  {
    name: "Singleton Pattern",
    category: "Design Pattern",
    icon: "🔑",
    color: "#16a085",
  },
  {
    name: "Observer Pattern",
    category: "Design Pattern",
    icon: "👁️",
    color: "#27ae60",
  },
  { name: "BCrypt", category: "Security", icon: "🔒", color: "#e74c3c" },
  { name: "Log4j", category: "Logging", icon: "📋", color: "#b7950b" },
];

const features = [
  {
    title: "Smart Sales Register",
    description:
      "Fast-checkout interface with barcode scanning, quantity management, discount application, and real-time cart total calculation for efficient point-of-sale transactions.",
    icon: <ShoppingCart />,
    color: "#7c8cf8",
  },
  {
    title: "Inventory Management",
    description:
      "Complete stock control system with low-stock threshold alerts, automatic reorder notifications, supplier tracking, and product category management.",
    icon: <Package />,
    color: "#38bdf8",
  },
  {
    title: "Customer Advance Accounts",
    description:
      "Prepaid customer account system with auto-generated unique IDs (counterId × 10,000,000), balance tracking, and full ledger history for recharge transactions.",
    icon: <Wallet />,
    color: "#e879a0",
  },
  {
    title: "Multi-Payment Support",
    description:
      "Flexible payment processing covering cash, advance account deductions, split payments, and change calculation with receipt generation for each transaction type.",
    icon: <CreditCard />,
    color: "#34d399",
  },
  {
    title: "Sales Analytics & Reports",
    description:
      "Comprehensive reporting suite with daily, weekly, and monthly breakdowns, top-selling products, profit margin analysis, and JasperReports-powered PDF exports.",
    icon: <BarChart3 />,
    color: "#a78bfa",
  },
  {
    title: "Returns & Refund Processing",
    description:
      "Streamlined return workflow with reason classification, partial refund support, inventory auto-restoration, and audit trail for every returned transaction.",
    icon: <RefreshCw />,
    color: "#7c8cf8",
  },
  {
    title: "Role-Based Access Control",
    description:
      "Granular permission system for Admin, Manager, and Cashier roles, controlling access to sales, reports, inventory, and user management modules.",
    icon: <UserCheck />,
    color: "#e879a0",
  },
  {
    title: "Product Catalogue",
    description:
      "Rich product management with barcode, category, supplier, cost price, selling price, and stock quantity — supporting both individual and bulk updates.",
    icon: <Tag />,
    color: "#38bdf8",
  },
  {
    title: "Receipt & Invoice Printing",
    description:
      "Thermal printer integration with customisable store branding, itemised billing, tax breakdowns, and payment method details on every generated receipt.",
    icon: <Printer />,
    color: "#34d399",
  },
  {
    title: "Real-Time Dashboard",
    description:
      "At-a-glance business overview displaying today's revenue, transaction count, top products, low-stock warnings, and recent activity feed.",
    icon: <Activity />,
    color: "#a78bfa",
  },
  {
    title: "Search & Filter Engine",
    description:
      "Instant product and customer search with multi-field filtering by name, barcode, category, or account ID — reducing checkout time significantly.",
    icon: <Search />,
    color: "#7c8cf8",
  },
  {
    title: "Secure Data Layer",
    description:
      "BCrypt-hashed credentials, parameterised SQL queries preventing injection attacks, encrypted session tokens, and comprehensive action logging via Log4j.",
    icon: <Shield />,
    color: "#e879a0",
  },
];

const screenshots = placeholderScreenshots;

const projectStats = [
  { label: "Development Time", value: "6 Months", icon: <Calendar /> },
  { label: "Team Size", value: "1 Member", icon: <Users /> },
  { label: "Modules Built", value: "12+", icon: <Layers /> },
];

const achievements = [
  "Full DAO + MVC architecture separation",
  "Zero SQL injection vulnerabilities",
  "Thermal printer integration",
  "Multi-role access control system",
];

/* ─── component ─────────────────────────────────────────────── */
const POSProjectDetail = () => {
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
    <div ref={sectionRef} className="pd-root">
      {/* ── shared background ── */}
      <div className="pd-grid-bg" />
      <div className="pd-glow-1" />
      <div className="pd-glow-2" />

      <div className={`pd-inner ${isVisible ? "pd-in" : ""}`}>
        {/* ════════════════════ HERO ════════════════════ */}
        <section className="pd-hero">
          {/* blurred background image — swap src when you have a hero image */}
          <div className="pd-hero-bg-img">
            <img
              src={posHeroBg}
              alt=""
              aria-hidden="true"
              className="pd-hero-bg-photo"
            />
            <div className="pd-hero-bg-overlay" />
          </div>

          <div className="pd-hero-content">
            {/* left column */}
            <div className="pd-hero-left">
              <button className="pd-back-btn" onClick={() => navigate("/")}>
                <ArrowLeft size={16} />
                <span>Back to Projects</span>
              </button>

              <div className="pd-eyebrow">
                <span className="pd-eyebrow-line" />
                <Sparkles size={13} />
                <span>Java Desktop App · 2024</span>
                <Sparkles size={13} />
                <span className="pd-eyebrow-line" />
              </div>

              <h1 className="pd-hero-title">
                Enterprise-Grade
                <br />
                <em className="pd-title-em">POS System</em>
              </h1>

              <p className="pd-hero-subtitle">
                A full-featured point-of-sale platform built in Java with
                NetBeans, powering retail operations through intelligent
                inventory control, customer account management, and real-time
                sales analytics.
              </p>

              {/* stat cards */}
              <div className="pd-hero-stats">
                {projectStats.map((s, i) => (
                  <div key={i} className="pd-stat-card">
                    <div className="pd-stat-icon">{s.icon}</div>
                    <div>
                      <div className="pd-stat-value">{s.value}</div>
                      <div className="pd-stat-label">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pd-hero-actions">
                <button
                  className="pd-btn-secondary"
                  onClick={() => window.open("https://github.com/", "_blank")}
                >
                  <Github size={17} />
                  <span>Source Code</span>
                </button>
                <button
                  className="pd-btn-primary"
                  onClick={() =>
                    window.open("https://pos-system-pro.netlify.app", "_blank")
                  }
                >
                  <ExternalLink size={17} />
                  <span>View Live Demo</span>
                </button>
              </div>
            </div>

            {/* right column — hero visual */}
            <div className="pd-hero-right">
              <div className="pd-hero-img-wrap">
                <div className="pd-hero-placeholder">
                  <img
                    src={rightimage}
                    alt="POS System"
                    className="pd-hero-img"
                  />
                </div>
                <div className="pd-img-glow" />
                <div className="pd-img-border" />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ STICKY TABS ════════════ */}
        <div className="pd-tabs-bar">
          {["overview", "features", "technologies"].map(
            (tab) => (
              <button
                key={tab}
                className={`pd-tab ${activeTab === tab ? "pd-tab-active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ),
          )}
        </div>

        {/* ════════════ CONTENT ════════════ */}
        <div className="pd-content">
          {/* ── OVERVIEW ── */}
          {activeTab === "overview" && (
            <section className="pd-section pd-fade-in">
              <h2 className="pd-section-title">Project Overview</h2>
              <div className="pd-overview-grid">
                {/* main */}
                <div className="pd-bento-card">
                  <p className="pd-text">
                    The POS System (com.officialgenius.pos) is a comprehensive
                    desktop-based point-of-sale application built in Java using
                    the NetBeans IDE. Designed for small-to-medium retail
                    businesses, it handles the complete sales lifecycle — from
                    product cataloguing and inventory tracking to checkout,
                    payment, and receipt printing — all within a single,
                    cohesive application.
                  </p>
                  <h3 className="pd-sub-title">Problem Statement</h3>
                  <p className="pd-text">
                    Small retail businesses often rely on manual cash registers
                    or fragmented spreadsheet systems that offer no real-time
                    inventory visibility, no customer account management, and no
                    actionable sales reporting. This leads to stock
                    discrepancies, revenue leakage, and slow checkout
                    experiences that frustrate both staff and customers.
                  </p>
                  <h3 className="pd-sub-title">Solution</h3>
                  <p className="pd-text">
                    This system provides an all-in-one offline desktop solution
                    built on a clean MVC + DAO architecture. The application
                    supports three user roles — Admin, Manager, and Cashier —
                    each with controlled module access. Core workflows include
                    fast barcode-driven checkout, multi-payment support (cash
                    and advance account deduction), and a customer recharge
                    account system with auto-generated unique IDs.
                  </p>
                  <p className="pd-text">
                    A dedicated reporting suite backed by JasperReports delivers
                    PDF-exportable daily and monthly sales summaries, product
                    performance breakdowns, and profit margin calculations —
                    giving business owners the insights they need to make
                    informed decisions without any external tools.
                  </p>
                  <h3 className="pd-sub-title">Technical Highlights</h3>
                  <div className="pd-highlights">
                    {[
                      "Full DAO interface + implementation separation for clean data access across all 12+ modules",
                      "Auto-generated customer account primary keys using counterId × 10,000,000 formula",
                      "Enum-driven attribute mapping (e.g. RechargeCustomerAttributes) for type-safe SQL column references",
                      "BCrypt password hashing with parameterised JDBC queries preventing SQL injection",
                      "JasperReports integration for thermal receipt printing and PDF report exports",
                      "Observer pattern for real-time dashboard metric updates across connected panels",
                    ].map((h, i) => (
                      <div key={i} className="pd-highlight-item">
                        <CheckCircle2 size={17} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* sidebar */}
                <div className="pd-sidebar">
                  {/* project details */}
                  <div className="pd-bento-card pd-bento-sm">
                    <h3 className="pd-card-title">Project Details</h3>
                    {[
                      [
                        "Status",
                        <span className="pd-status-live">
                          <span className="pd-status-dot" />
                          Completed
                        </span>,
                      ],
                      ["Timeline", "Jun 2024 – Dec 2024"],
                      ["Role", "Full Stack Developer"],
                      ["Category", "Desktop, Retail, Java"],
                    ].map(([label, val], i) => (
                      <div key={i} className="pd-info-row">
                        <span className="pd-info-label">{label}</span>
                        <span className="pd-info-value">{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* platform */}
                  <div className="pd-bento-card pd-bento-sm">
                    <h3 className="pd-card-title">Platform Support</h3>
                    <div className="pd-platform-row">
                      {[
                        ["Desktop", <Monitor size={22} />],
                        ["Windows", <Database size={22} />],
                        ["Offline", <Shield size={22} />],
                      ].map(([name, icon], i) => (
                        <div key={i} className="pd-platform-item">
                          {icon}
                          <span>{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* achievements */}
                  <div className="pd-bento-card pd-bento-sm">
                    <h3 className="pd-card-title">Architecture Highlights</h3>
                    {achievements.map((a, i) => (
                      <div key={i} className="pd-achievement-item">
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
            <section className="pd-section pd-fade-in">
              <h2 className="pd-section-title">
                Core <em className="pd-em">Features</em>
              </h2>
              <p className="pd-section-desc">
                A full-featured retail ecosystem covering every touchpoint from
                checkout to analytics, built for real-world shop operations.
              </p>
              <div className="pd-features-grid">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="pd-feature-card"
                    style={{ "--fa": f.color }}
                  >
                    <div className="pd-feature-icon">{f.icon}</div>
                    <h3 className="pd-feature-title">{f.title}</h3>
                    <p className="pd-feature-desc">{f.description}</p>
                    <div className="pd-feature-glow" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── TECHNOLOGIES ── */}
          {activeTab === "technologies" && (
            <section className="pd-section pd-fade-in">
              <h2 className="pd-section-title">
                Technology <em className="pd-em">Stack</em>
              </h2>
              <p className="pd-section-desc">
                Built entirely in Java with a well-structured DAO + MVC
                architecture, backed by MySQL for robust offline data
                persistence.
              </p>
              <div className="pd-tech-grid">
                {technologies.map((t, i) => (
                  <div
                    key={i}
                    className="pd-tech-card"
                    style={{ "--tc": t.color }}
                  >
                    <span className="pd-tech-indicator" />
                    <span className="pd-tech-icon">{t.icon}</span>
                    <div>
                      <div className="pd-tech-name">{t.name}</div>
                      <div className="pd-tech-cat">{t.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* ════════════ SCREENSHOTS ════════════ */}
        <div className="pd-ss-section pd-fade-in">
          <div className="pd-divider">
            <span className="pd-divider-line" />
            <span className="pd-divider-label">Application Overview</span>
            <span className="pd-divider-line" />
          </div>

          <h2
            className="pd-section-title"
            style={{ textAlign: "center", marginBottom: 8 }}
          >
            Explore the <em className="pd-em">Interface</em>
          </h2>
          <p
            className="pd-section-desc"
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            Navigate through every module of the POS system — from checkout to
            inventory and reporting.
          </p>

          {/* featured frame */}
          <div className="pd-ss-main">
            <div className="pd-browser-frame">
              <div className="pd-browser-bar">
                <div className="pd-browser-dots">
                  <span className="pd-dot pd-dot-r" />
                  <span className="pd-dot pd-dot-y" />
                  <span className="pd-dot pd-dot-g" />
                </div>
                <div className="pd-browser-url">com.officialgenius.pos</div>
              </div>
              {screenshots[activeScreenshot].url ? (
                <img
                  src={screenshots[activeScreenshot].url}
                  alt={screenshots[activeScreenshot].title}
                  className="pd-ss-img"
                />
              ) : (
                <div className="pd-ss-placeholder">
                  <ShoppingCart
                    size={48}
                    strokeWidth={1}
                    color="rgba(124,140,248,0.3)"
                  />
                  <span>{screenshots[activeScreenshot].title}</span>
                  <span className="pd-ss-placeholder-sub">
                    Add your screenshot to src/assets/POS/
                  </span>
                </div>
              )}
            </div>
            <div className="pd-ss-meta">
              <h3 className="pd-ss-title">
                {screenshots[activeScreenshot].title}
              </h3>
              <p className="pd-ss-desc">
                {screenshots[activeScreenshot].description}
              </p>
            </div>
          </div>

          {/* thumbnail row */}
          <div className="pd-thumb-breakout">
            <div className="pd-thumb-row">
              <button
                className="pd-thumb-scroll-btn"
                onClick={() => scrollThumbnails("left")}
              >
                <ArrowLeft size={20} />
              </button>
              <div className="pd-thumb-track" ref={thumbnailScrollRef}>
                {screenshots.map((s, i) => (
                  <div
                    key={s.id}
                    className={`pd-thumb-card ${activeScreenshot === i ? "pd-thumb-active" : ""}`}
                    onClick={() => setActiveScreenshot(i)}
                  >
                    <div className="pd-thumb-img-wrap">
                      {s.url ? (
                        <img
                          src={s.url}
                          alt={s.title}
                          className="pd-thumb-img"
                        />
                      ) : (
                        <div className="pd-thumb-img-placeholder">
                          <ShoppingCart
                            size={24}
                            strokeWidth={1}
                            color="rgba(124,140,248,0.4)"
                          />
                        </div>
                      )}
                      <div className="pd-thumb-overlay">
                        <Play size={18} className="pd-thumb-play" />
                      </div>
                    </div>
                    <div className="pd-thumb-label">
                      <span className="pd-thumb-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="pd-thumb-name">{s.title}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="pd-thumb-scroll-btn"
                onClick={() => scrollThumbnails("right")}
              >
                <ArrowLeft size={20} style={{ transform: "rotate(180deg)" }} />
              </button>
            </div>
          </div>
        </div>

        {/* ════════════ CTA ════════════ */}
        <section className="pd-cta">
          <div className="pd-cta-inner">
            <div
              className="pd-eyebrow"
              style={{ justifyContent: "center", marginBottom: 20 }}
            >
              <span className="pd-eyebrow-line" />
              <Sparkles size={13} />
              <span>Let's Connect</span>
              <Sparkles size={13} />
              <span className="pd-eyebrow-line" />
            </div>
            <h2 className="pd-cta-title">
              Interested in <em className="pd-em">Learning More?</em>
            </h2>
            <p className="pd-cta-desc">
              Get in touch to discuss the architecture, explore a live demo, or
              collaborate on similar retail solutions.
            </p>
            <button
              className="pd-btn-primary"
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
        <div className="pd-footer-strip">
          {[
            "Java",
            "MySQL",
            "NetBeans",
            "DAO Pattern",
            "MVC",
            "Retail POS",
          ].map((l, i, arr) => (
            <React.Fragment key={i}>
              <span className="pd-strip-item">{l}</span>
              {i < arr.length - 1 && <span className="pd-strip-dot">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════ STYLES ═══════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── Root ─────────────────────────────────── */
        .pd-root {
          position: relative;
          min-height: 100vh;
          background: #080c14;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          color: #f0f4ff;
        }

        /* ── Shared background ── */
        .pd-grid-bg {
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none; z-index: 0;
        }
        .pd-glow-1 {
          position: fixed; top: -180px; right: -160px;
          width: 680px; height: 680px;
          background: radial-gradient(circle, rgba(124,140,248,0.10) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: pd-drift1 20s ease-in-out infinite alternate;
        }
        .pd-glow-2 {
          position: fixed; bottom: -120px; left: -80px;
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(232,121,160,0.08) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: pd-drift2 25s ease-in-out infinite alternate;
        }
        @keyframes pd-drift1 { from{transform:translate(0,0)} to{transform:translate(-60px,50px)} }
        @keyframes pd-drift2 { from{transform:translate(0,0)} to{transform:translate(50px,-40px)} }

        /* ── Inner ── */
        .pd-inner {
          position: relative; z-index: 1;
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .pd-inner.pd-in { opacity: 1; transform: translateY(0); }

        /* ════════════ HERO ════════════ */
        .pd-hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center;
          padding: 120px 64px 80px; overflow: hidden;
        }
        .pd-hero-bg-img { position: absolute; inset: 0; z-index: 0; }
        .pd-hero-bg-fallback {
          width: 100%; height: 100%;
          background: linear-gradient(135deg, rgba(124,140,248,0.04) 0%, rgba(232,121,160,0.03) 100%);
        }
        .pd-hero-bg-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(to bottom, rgba(8,12,20,0.30) 0%, rgba(8,12,20,0.75) 100%, #080c14 100%),
            linear-gradient(to right, rgba(8,12,20,0.50) 0%, transparent 70%);
        }
        .pd-hero-content {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1.15fr 1fr;
          gap: 80px; align-items: center;
        }
        .pd-hero-left { display: flex; flex-direction: column; gap: 0; }

        /* back btn */
        .pd-back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px; color: #94a3b8;
          font-size: 13px; font-weight: 600; cursor: pointer;
          transition: all 0.3s ease; align-self: flex-start;
          margin-bottom: 32px; font-family: 'DM Sans', sans-serif;
        }
        .pd-back-btn:hover { background: rgba(255,255,255,0.10); color: #f0f4ff; transform: translateX(-4px); }

        /* eyebrow */
        .pd-eyebrow {
          display: flex; align-items: center; gap: 12px;
          font-size: 11px; font-weight: 600; letter-spacing: 3px;
          text-transform: uppercase; color: #a4acbb; margin-bottom: 24px;
        }
        .pd-eyebrow-line { display: block; width: 32px; height: 1px; background: #4a5568; }
        .pd-hero-bg-photo {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 30%;
          filter: blur(0px) brightness(0.42) saturate(0.7);
          transform: scale(1.06) scaleX(-1);
        }
        /* title */
        .pd-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(46px, 5.5vw, 66px); font-weight: 400;
          line-height: 1.05; letter-spacing: -2px; color: #f0f4ff; margin-bottom: 24px;
        }
        .pd-title-em, .pd-em {
          font-style: italic;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        /* subtitle */
        .pd-hero-subtitle {
          font-size: 17px; line-height: 1.75; color: #a4a7ac;
          font-weight: 500; max-width: 520px; margin-bottom: 40px;
        }

        /* stat cards */
        .pd-hero-stats { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 36px; }
        .pd-stat-card {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 20px;
          background: rgba(11,17,32,0.75);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; backdrop-filter: blur(12px);
          transition: border-color 0.3s ease, transform 0.3s ease;
          flex: 1 1 160px;
        }
        .pd-stat-card:hover { border-color: rgba(124,140,248,0.35); transform: translateY(-3px); }
        .pd-stat-icon {
          width: 42px; height: 42px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(124,140,248,0.12); color: #7c8cf8; flex-shrink: 0;
        }
        .pd-stat-value {
          font-family: 'DM Serif Display', serif; font-size: 22px;
          font-weight: 400; color: #f0f4ff;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1; margin-bottom: 3px;
        }
        .pd-stat-label { font-size: 11px; color: #4a5568; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; }

        /* action buttons */
        .pd-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .pd-btn-primary, .pd-btn-secondary {
          position: relative; display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border: none; border-radius: 0; cursor: pointer;
          clip-path: polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);
          font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
          font-family: 'DM Sans', sans-serif; overflow: hidden; isolation: isolate;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .pd-btn-primary {
          background: #0d1424; color: #7dd3fc;
          box-shadow: inset 0 0 0 1px rgba(125,211,252,0.35);
        }
        .pd-btn-primary::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(100deg,#06b6d4,#7c3aed);
          transform: translateX(-101%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1); z-index: -1;
        }
        .pd-btn-primary:hover { color: #fff; box-shadow: none; }
        .pd-btn-primary:hover::before { transform: translateX(0); }
        .pd-btn-secondary {
          background: transparent; color: #c4b5fd;
          box-shadow: inset 0 0 0 1px rgba(196,181,253,0.4);
        }
        .pd-btn-secondary::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(100deg,#7c3aed,#ec4899);
          transform: translateX(-101%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1); z-index: -1;
        }
        .pd-btn-secondary:hover { color: #fff; box-shadow: none; }
        .pd-btn-secondary:hover::before { transform: translateX(0); }

        /* hero right */
        .pd-hero-right {
          position: relative; display: flex;
          align-items: center; justify-content: center;
        }
        .pd-hero-img-wrap {
          position: relative; width: 100%; max-width: 680px;
          border-radius: 20px; overflow: hidden; background: transparent;
        }
        .pd-hero-img {
          width: 100%; height: auto; display: block; object-fit: cover;
          border-radius: 20px; position: relative; z-index: 2;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
          transition: transform 0.5s ease; background: transparent;
        }
        .pd-hero-img:hover { transform: translateY(-8px) scale(1.02); }
        .pd-hero-placeholder {
          width: 100%; min-height: 360px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 16px;
          background: rgba(11,17,32,0.8);
          border: 1px dashed rgba(124,140,248,0.2);
          border-radius: 20px; position: relative; z-index: 2;
        }
        .pd-placeholder-label {
          font-size: 12px; color: #4a5568; font-weight: 600;
          letter-spacing: 0.5px; text-align: center;
        }
        .pd-img-glow {
          position: absolute; inset: -30px;
          background: radial-gradient(circle, rgba(124,140,248,0.35) 0%, rgba(232,121,160,0.25) 50%, transparent 70%);
          filter: blur(50px); z-index: 1; opacity: 0.7;
          animation: pd-glow-pulse 4s ease-in-out infinite;
        }
        @keyframes pd-glow-pulse { 0%,100%{opacity:0.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.05)} }
        .pd-img-border {
          position: absolute; inset: -2px; border-radius: 28px; z-index: 1;
          background: linear-gradient(135deg,#7c8cf8,#e879a0,#38bdf8);
          background-size: 300% 300%; opacity: 0.25;
          animation: pd-border-spin 8s ease infinite;
        }
        @keyframes pd-border-spin { 0%{background-position:0 50%} 50%{background-position:100% 50%} 100%{background-position:0 50%} }

        /* ════════════ TABS BAR ════════════ */
        .pd-tabs-bar {
          position: sticky; top: 0; z-index: 100;
          background: rgba(8,12,20,0.90); backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          display: flex; gap: 4px; padding: 0 64px; overflow-x: auto;
        }
        .pd-tab {
          padding: 20px 28px; background: transparent; border: none;
          color: #4a5568; font-size: 14px; font-weight: 600; letter-spacing: 0.5px;
          cursor: pointer; transition: color 0.25s ease; white-space: nowrap;
          position: relative; font-family: 'DM Sans', sans-serif; text-transform: uppercase;
        }
        .pd-tab:hover { color: #94a3b8; }
        .pd-tab-active { color: #f0f4ff; }
        .pd-tab-active::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #7c8cf8, #e879a0);
          border-radius: 2px 2px 0 0;
        }

        /* ════════════ CONTENT WRAPPER ════════════ */
        .pd-content { max-width: 1280px; margin: 0 auto; padding: 72px 64px 40px; }
        .pd-section { margin-bottom: 80px; }
        .pd-fade-in { animation: pd-fadein 0.55s ease-out; }
        @keyframes pd-fadein { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }

        /* typography */
        .pd-section-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(40px, 4.5vw, 52px); font-weight: 400;
          line-height: 1.05; letter-spacing: -1.5px; color: #f0f4ff; margin-bottom: 16px;
        }
        .pd-section-desc { font-size: 16px; color: #64748b; font-weight: 300; line-height: 1.75; margin-bottom: 48px; max-width: 640px; }
        .pd-sub-title { font-family: 'DM Serif Display', serif; font-size: 22px; color: #f0f4ff; margin: 28px 0 12px; }
        .pd-text { font-size: 15px; color: #94a3b8; line-height: 1.8; margin-bottom: 20px; font-weight: 300; }
        .pd-card-title { font-family: 'DM Serif Display', serif; font-size: 18px; color: #f0f4ff; margin-bottom: 20px; }

        /* bento card */
        .pd-bento-card {
          background: #0b1120; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 32px; transition: background 0.3s ease;
        }
        .pd-bento-card:hover { background: #0f1929; }
        .pd-bento-sm { padding: 24px; }

        /* overview grid */
        .pd-overview-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 4px;  overflow: hidden; }
        .pd-sidebar { display: flex; flex-direction: column; gap: 2px; }

        /* highlights */
        .pd-highlights { display: flex; flex-direction: column; gap: 10px; margin-top: 16px; }
        .pd-highlight-item {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 14px; background: rgba(124,140,248,0.06);
          border-left: 2px solid rgba(124,140,248,0.4);
          border-radius: 6px; color: #94a3b8; font-size: 14px; line-height: 1.6;
        }
        .pd-highlight-item svg { color: #7c8cf8; flex-shrink: 0; margin-top: 2px; }

        /* info rows */
        .pd-info-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .pd-info-row:last-child { border-bottom: none; }
        .pd-info-label { font-size: 12px; color: #4a5568; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .pd-info-value { font-size: 13px; color: #f0f4ff; font-weight: 600; }
        .pd-status-live { display: flex; align-items: center; gap: 7px; color: #86efac; }
        .pd-status-dot {
          width: 7px; height: 7px; border-radius: 50%; background: currentColor;
          animation: pd-pulse 2s ease-in-out infinite;
        }
        @keyframes pd-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }

        /* platform */
        .pd-platform-row { display: flex; gap: 10px; margin-top: 4px; }
        .pd-platform-item {
          flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 14px 10px;
          background: rgba(124,140,248,0.08); border: 1px solid rgba(124,140,248,0.18);
          border-radius: 12px; color: #a5b4fc; font-size: 12px; font-weight: 600;
          transition: all 0.3s ease;
        }
        .pd-platform-item:hover { background: rgba(124,140,248,0.15); transform: translateY(-3px); }

        /* achievements */
        .pd-achievement-item {
          display: flex; align-items: center; gap: 10px;
          padding: 12px; margin-bottom: 8px;
          background: rgba(251,191,36,0.07); border: 1px solid rgba(251,191,36,0.15);
          border-radius: 10px; color: #fcd34d; font-size: 13px; font-weight: 600;
        }
        .pd-achievement-item:last-child { margin-bottom: 0; }

        /* features grid */
        .pd-features-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2px; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06); border-radius: 24px; overflow: hidden;
        }
        .pd-feature-card {
          position: relative; background: #0b1120; padding: 28px 26px; overflow: hidden;
          transition: background 0.35s ease; border-bottom: 4px solid transparent;
        }
        .pd-feature-card:hover { background: #0f1929; border-bottom-color: var(--fa); }
        .pd-feature-icon {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          background: color-mix(in srgb, var(--fa) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--fa) 22%, transparent);
          color: var(--fa); margin-bottom: 18px; transition: transform 0.3s ease;
        }
        .pd-feature-card:hover .pd-feature-icon { transform: scale(1.08) rotate(4deg); }
        .pd-feature-title { font-family: 'DM Serif Display', serif; font-size: 18px; color: #f0f4ff; margin-bottom: 10px; }
        .pd-feature-desc  { font-size: 13px; color: #64748b; line-height: 1.7; font-weight: 300; }
        .pd-feature-glow  {
          position: absolute; inset: 0; pointer-events: none; opacity: 0;
          background: radial-gradient(circle at 0% 100%, color-mix(in srgb, var(--fa) 12%, transparent), transparent 60%);
          transition: opacity 0.4s ease;
        }
        .pd-feature-card:hover .pd-feature-glow { opacity: 1; }

        /* tech grid */
        .pd-tech-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 2px; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06); border-radius: 24px; overflow: hidden;
        }
        .pd-tech-card {
          display: flex; align-items: center; gap: 14px;
          padding: 20px 20px; background: #0b1120;
          transition: background 0.3s ease; position: relative; overflow: hidden;
        }
        .pd-tech-card:hover { background: #0f1929; }
        .pd-tech-indicator {
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: var(--tc); opacity: 0; transition: opacity 0.3s ease;
        }
        .pd-tech-card:hover .pd-tech-indicator { opacity: 1; }
        .pd-tech-icon { font-size: 28px; flex-shrink: 0; }
        .pd-tech-name { font-size: 15px; font-weight: 600; color: #f0f4ff; margin-bottom: 3px; }
        .pd-tech-cat  { font-size: 11px; color: #4a5568; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }

        /* docs grid */
        .pd-docs-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2px; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06); border-radius: 24px; overflow: hidden;
        }
        .pd-doc-card {
          background: #0b1120; padding: 36px 28px; text-align: center;
          transition: background 0.35s ease; border-bottom: 4px solid transparent;
        }
        .pd-doc-card:hover { background: #0f1929; border-bottom-color: #7c8cf8; }
        .pd-doc-icon { font-size: 44px; margin-bottom: 16px; }
        .pd-doc-title { font-family: 'DM Serif Display', serif; font-size: 22px; color: #f0f4ff; margin-bottom: 10px; }
        .pd-doc-desc  { font-size: 14px; color: #64748b; line-height: 1.6; margin-bottom: 24px; font-weight: 300; }

        /* ════════════ SCREENSHOTS ════════════ */
        .pd-ss-section { max-width: 1280px; margin: 0 auto; padding: 0 64px 80px; }
        .pd-divider { display: flex; align-items: center; gap: 20px; margin-bottom: 40px; }
        .pd-divider-line { flex: 1; height: 1px; background: rgba(255,255,255,0.06); }
        .pd-divider-label { font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: #2d3748; white-space: nowrap; }

        .pd-ss-main {
          background: #0b1120; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 28px; margin-bottom: 24px;
        }
        .pd-browser-frame { border-radius: 14px; overflow: hidden; background: #1e293b; margin-bottom: 24px; }
        .pd-browser-bar {
          display: flex; align-items: center; padding: 14px 18px;
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          border-bottom: 1px solid rgba(255,255,255,0.05); position: relative;
        }
        .pd-browser-dots { display: flex; gap: 7px; }
        .pd-dot { width: 11px; height: 11px; border-radius: 50%; }
        .pd-dot-r { background: #ff5f57; } .pd-dot-y { background: #febc2e; } .pd-dot-g { background: #28c840; }
        .pd-browser-url {
          position: absolute; left: 50%; transform: translateX(-50%);
          padding: 6px 18px; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08); border-radius: 6px;
          color: #64748b; font-size: 12px; font-family: 'Monaco', monospace;
        }
        .pd-ss-img { width: 100%; display: block; object-fit: contain; max-height: 560px; min-height: 320px; background: #0a0e1a; }
        .pd-ss-placeholder {
          width: 100%; min-height: 320px; max-height: 560px;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px;
          background: #0a0e1a; color: #4a5568; font-size: 14px; font-weight: 600;
        }
        .pd-ss-placeholder-sub { font-size: 11px; color: #2d3748; font-weight: 400; }
        .pd-ss-title { font-family: 'DM Serif Display', serif; font-size: 26px; color: #f0f4ff; margin-bottom: 10px; }
        .pd-ss-desc   { font-size: 14px; color: #64748b; line-height: 1.7; font-weight: 300; }

        /* thumbnail row */
        .pd-thumb-breakout {
          position: relative; left: 50%; right: 50%;
          margin-left: -50vw; margin-right: -50vw;
          width: 100vw; padding: 0 24px; box-sizing: border-box;
        }
        .pd-thumb-row { display: flex; align-items: center; gap: 12px; }
        .pd-thumb-scroll-btn {
          flex-shrink: 0; width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(124,140,248,0.12); border: 1px solid rgba(124,140,248,0.25);
          color: #f0f4ff; cursor: pointer; transition: all 0.3s ease; font-family: 'DM Sans', sans-serif;
        }
        .pd-thumb-scroll-btn:hover { background: rgba(124,140,248,0.25); transform: scale(1.08); }
        .pd-thumb-track {
          display: flex; gap: 16px; overflow-x: auto; scroll-behavior: smooth;
          padding: 14px 6px; flex: 1;
          scrollbar-width: thin; scrollbar-color: rgba(124,140,248,0.4) rgba(255,255,255,0.05);
        }
        .pd-thumb-track::-webkit-scrollbar { height: 5px; }
        .pd-thumb-track::-webkit-scrollbar-track { background: rgba(255,255,255,0.04); border-radius: 10px; }
        .pd-thumb-track::-webkit-scrollbar-thumb { background: rgba(124,140,248,0.4); border-radius: 10px; }
        .pd-thumb-card { flex: 0 0 220px; cursor: pointer; transition: transform 0.3s ease; }
        .pd-thumb-card:hover { transform: translateY(-4px); }
        .pd-thumb-img-wrap {
          position: relative; border-radius: 12px; overflow: hidden;
          border: 2px solid rgba(255,255,255,0.06); aspect-ratio: 16/10;
          transition: border-color 0.3s ease;
        }
        .pd-thumb-active .pd-thumb-img-wrap { border-color: rgba(124,140,248,0.7); box-shadow: 0 0 0 3px rgba(124,140,248,0.18); }
        .pd-thumb-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .pd-thumb-card:hover .pd-thumb-img { transform: scale(1.05); }
        .pd-thumb-img-placeholder {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(11,17,32,0.9);
        }
        .pd-thumb-overlay {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, rgba(124,140,248,0.88), rgba(232,121,160,0.88));
          opacity: 0; transition: opacity 0.3s ease;
        }
        .pd-thumb-card:hover .pd-thumb-overlay { opacity: 1; }
        .pd-thumb-play { color: #fff; }
        .pd-thumb-label { display: flex; align-items: center; gap: 8px; margin-top: 10px; }
        .pd-thumb-num  { font-size: 12px; font-weight: 800; color: #7c8cf8; background: rgba(124,140,248,0.12); padding: 3px 8px; border-radius: 5px; font-family: 'Monaco', monospace; }
        .pd-thumb-name { font-size: 12px; font-weight: 600; color: #64748b; }
        .pd-thumb-active .pd-thumb-name { color: #a5b4fc; }

        /* ════════════ CTA ════════════ */
        .pd-cta {
          background: #0b1120;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 100px 64px; text-align: center; position: relative; overflow: hidden;
        }
        .pd-cta::before {
          content: ''; position: absolute; top: -120px; left: 50%; transform: translateX(-50%);
          width: 500px; height: 400px;
          background: radial-gradient(circle, rgba(124,140,248,0.10) 0%, transparent 70%);
          pointer-events: none;
        }
        .pd-cta-inner { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }
        .pd-cta-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(40px, 4vw, 54px); font-weight: 400;
          letter-spacing: -1.5px; color: #f0f4ff; margin-bottom: 18px; line-height: 1.05;
        }
        .pd-cta-desc { font-size: 16px; color: #64748b; line-height: 1.75; font-weight: 300; margin-bottom: 36px; }

        /* ════════════ FOOTER STRIP ════════════ */
        .pd-footer-strip {
          display: flex; align-items: center; justify-content: center;
          flex-wrap: wrap; gap: 16px; padding: 40px 64px;
        }
        .pd-strip-item {
          font-size: 11px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; color: #2d3748; transition: color 0.3s ease;
        }
        .pd-strip-item:hover { color: #4a5568; }
        .pd-strip-dot { color: #1e293b; font-size: 16px; line-height: 1; }

        /* ════════════ RESPONSIVE ════════════ */
        @media (max-width: 1100px) {
          .pd-hero { padding: 100px 40px 70px; }
          .pd-content, .pd-ss-section { padding-left: 40px; padding-right: 40px; }
          .pd-tabs-bar { padding: 0 40px; }
          .pd-overview-grid { grid-template-columns: 1fr; }
          .pd-hero-content { grid-template-columns: 1fr; gap: 48px; }
          .pd-hero-right { order: -1; }
          .pd-hero-img-wrap { max-width: 380px; margin: 0 auto; }
        }
        @media (max-width: 768px) {
          .pd-hero { padding: 80px 24px 60px; min-height: auto; }
          .pd-content, .pd-ss-section, .pd-cta, .pd-footer-strip { padding-left: 24px; padding-right: 24px; }
          .pd-tabs-bar { padding: 0 24px; }
          .pd-hero-stats { flex-direction: column; }
          .pd-features-grid { grid-template-columns: 1fr; }
          .pd-tech-grid { grid-template-columns: 1fr; }
          .pd-ss-section { padding-bottom: 60px; }
          .pd-thumb-card { flex: 0 0 180px; }
          .pd-browser-url { display: none; }
        }
        @media (max-width: 480px) {
          .pd-hero-title { font-size: 38px; }
          .pd-section-title { font-size: 34px; }
          .pd-cta-title { font-size: 34px; }
          .pd-hero-actions { flex-direction: column; }
          .pd-btn-primary, .pd-btn-secondary { width: 100%; justify-content: center; }
          .pd-docs-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default POSProjectDetail;
