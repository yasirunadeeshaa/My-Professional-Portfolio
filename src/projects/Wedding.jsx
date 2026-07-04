import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, ExternalLink, Github, Calendar, Users, Award,
  Heart, Sparkles, CheckCircle2, Play, Download,
  Monitor, Smartphone, Globe, Lock, TrendingUp, Activity,
  Camera, Bell, DollarSign, MessageCircle, MapPin,
} from 'lucide-react';

// Import Wedding Desktop Screenshots
import weddingHero   from '../assets/wedding.jpg';
import weddingHero2   from '../assets/Wedding/lapimage.png';
import vendors       from '../assets/Wedding/vendors.png';
import adminPortal   from '../assets/Wedding/AdminPortal.png';
import testimonials  from '../assets/Wedding/says.png';
import successStories from '../assets/Wedding/Wedstory.png';
import weddingTrends from '../assets/Wedding/trends.png';
import winterWedding from '../assets/Wedding/winter.png';
import summerWedding from '../assets/Wedding/Summer.png';
import springWedding from '../assets/Wedding/Spring.png';
import autumnWedding from '../assets/Wedding/Autumn.png';

// Import Wedding Mobile Screenshots
import mobile01 from '../assets/Wedding/01.png';
import mobile02 from '../assets/Wedding/02.png';
import mobile03 from '../assets/Wedding/03.png';
import mobile04 from '../assets/Wedding/04.png';
import mobile05 from '../assets/Wedding/05.png';
import mobile06 from '../assets/Wedding/06.png';
import mobile07 from '../assets/Wedding/07.png';
import mobile08 from '../assets/Wedding/08.png';
import mobile09 from '../assets/Wedding/09.png';
import mobile10 from '../assets/Wedding/10.png';
import mobile11 from '../assets/Wedding/11.png';
import mobile12 from '../assets/Wedding/12.png';
import mobile13 from '../assets/Wedding/13.png';
import mobile14 from '../assets/Wedding/14.png';
import mobile15 from '../assets/Wedding/15.png';
import mobile16 from '../assets/Wedding/16.png';
import mobile17 from '../assets/Wedding/17.png';
import mobile18 from '../assets/Wedding/18.png';

/* ─── data ─────────────────────────────────────────────────── */
const technologies = [
  { name: 'React',        category: 'Frontend',          icon: '⚛️', color: '#61dafb' },
  { name: 'Node.js',      category: 'Backend',           icon: '🟢', color: '#68a063' },
  { name: 'MongoDB',      category: 'Database',          icon: '🍃', color: '#47a248' },
  { name: 'Express.js',   category: 'Backend',           icon: '⚡', color: '#888888' },
  { name: 'Redux',        category: 'State Management',  icon: '🔄', color: '#764abc' },
  { name: 'Socket.io',    category: 'Real-time',         icon: '🔌', color: '#888888' },
  { name: 'Stripe',       category: 'Payments',          icon: '💳', color: '#635bff' },
  { name: 'AWS S3',       category: 'Storage',           icon: '☁️', color: '#ff9900' },
  { name: 'Twilio',       category: 'Communication',     icon: '📱', color: '#f22f46' },
  { name: 'Google Maps',  category: 'Location',          icon: '🗺️', color: '#4285f4' },
];

const features = [
  {
    title: 'Vendor Management',
    description: 'Comprehensive vendor directory with profiles, portfolios, reviews, and real-time availability tracking for photographers, caterers, venues, and more.',
    icon: <Users />, color: '#7c8cf8',
  },
  {
    title: 'Event Planning Tools',
    description: 'Interactive timeline builder, checklist management, and task assignments with automated reminders and progress tracking.',
    icon: <Calendar />, color: '#e879a0',
  },
  {
    title: 'Guest Management',
    description: 'Digital RSVP system, seating arrangements, dietary preferences tracking, and automated guest communication.',
    icon: <MessageCircle />, color: '#38bdf8',
  },
  {
    title: 'Budget Tracker',
    description: 'Real-time expense tracking, vendor payment scheduling, budget allocation tools, and financial reporting dashboard.',
    icon: <DollarSign />, color: '#a78bfa',
  },
  {
    title: 'Photo Gallery',
    description: 'Cloud-based photo and video storage with AI-powered organisation, sharing capabilities, and collaborative albums.',
    icon: <Camera />, color: '#34d399',
  },
  {
    title: 'Live Notifications',
    description: 'Real-time updates for guests, vendor confirmations, payment reminders, and event changes via SMS and email.',
    icon: <Bell />, color: '#e879a0',
  },
  {
    title: 'Location & Venues',
    description: 'Interactive map-based venue discovery with capacity filters, photo tours, and instant enquiry tools.',
    icon: <MapPin />, color: '#7c8cf8',
  },
  {
    title: 'Secure Payments',
    description: 'End-to-end encrypted payment processing with split billing, deposit scheduling, and instant receipts.',
    icon: <Lock />, color: '#38bdf8',
  },
];

const webScreenshots = [
  { id:1,  title:'Wedding Planning Platform Hero',       url: weddingHero,    description:'Main landing page featuring elegant wedding planning services and vendor showcase.' },
  { id:2,  title:'Vendors Directory',                    url: vendors,        description:'Comprehensive directory of wedding vendors including photographers, caterers, and venues.' },
  { id:3,  title:'Admin Portal',                         url: adminPortal,    description:'Administrative dashboard for managing vendors, bookings, users, and analytics.' },
  { id:4,  title:'Testimonials',                         url: testimonials,   description:'Customer testimonials and reviews highlighting successful wedding planning experiences.' },
  { id:5,  title:'Success Stories',                      url: successStories, description:'Real couples sharing their wedding journey and experiences with the platform.' },
  { id:6,  title:'Wedding Trends',                       url: weddingTrends,  description:'Latest wedding trends, themes, colour palettes, and style inspirations.' },
  { id:7,  title:'Winter Season Weddings',               url: winterWedding,  description:'Winter-themed ideas featuring cosy venues, seasonal décor, and cold-weather planning tips.' },
  { id:8,  title:'Summer Season Weddings',               url: summerWedding,  description:'Summer wedding inspiration with outdoor venues, bright florals, and warm-weather ideas.' },
  { id:9,  title:'Spring Season Weddings',               url: springWedding,  description:'Spring themes featuring blooming gardens, pastel colours, and fresh seasonal arrangements.' },
  { id:10, title:'Autumn Season Weddings',               url: autumnWedding,  description:'Fall concepts with rich colours, rustic venues, and harvest-inspired decorations.' },
];

const mobileScreenshots = [
  { id:1,  title:'Mobile Home',           url: mobile01, description:'Home screen with quick access to vendors, planning tools, and upcoming tasks.' },
  { id:2,  title:'Sign In',               url: mobile02, description:'Secure login interface for couples to access their personalised dashboard.' },
  { id:3,  title:'Sign Up',               url: mobile03, description:'Registration page for new users to create their wedding planning account.' },
  { id:4,  title:'Vendors Page',          url: mobile04, description:'Mobile vendor browsing with categories and search filters for easy discovery.' },
  { id:5,  title:'Florist Page',          url: mobile05, description:'Browse florists with portfolios, pricing, and availability information.' },
  { id:6,  title:'Florist Details',       url: mobile06, description:'Detailed florist profile showing services, gallery, reviews, and booking options.' },
  { id:7,  title:'Photographer Page',     url: mobile07, description:'Explore wedding photographers with portfolio previews and client testimonials.' },
  { id:8,  title:'Photographer Details',  url: mobile08, description:'Complete photographer profile with full portfolio, pricing packages, and contact info.' },
  { id:9,  title:'Entertainment Page',    url: mobile09, description:'Find DJs, bands, and entertainment services for your celebration.' },
  { id:10, title:'Entertainment Details', url: mobile10, description:'Detailed entertainment vendor profile with music samples and equipment list.' },
  { id:11, title:'Vehicle Page',          url: mobile11, description:'Browse wedding transportation including luxury cars and vintage vehicles.' },
  { id:12, title:'Vehicle Details',       url: mobile12, description:'Vehicle rental details with photos, specs, pricing, and availability calendar.' },
  { id:13, title:'Dressing Page',         url: mobile13, description:'Discover bridal boutiques, groom attire, and wedding fashion services.' },
  { id:14, title:'Dressing Details',      url: mobile14, description:'Bridal shop profile showcasing dress collections and fitting services.' },
  { id:15, title:'Locations',             url: mobile15, description:'Browse wedding venues and ceremony locations with photos and capacity info.' },
  { id:16, title:'Location Details',      url: mobile16, description:'Venue details including amenities, floor plans, and booking availability.' },
  { id:17, title:'Payment',               url: mobile17, description:'Secure payment screen for vendor bookings and service deposits.' },
  { id:18, title:'Payment Methods',       url: mobile18, description:'Select payment method including credit cards, digital wallets, and bank transfers.' },
];

const projectStats = [
  { label:'Development Time',      value:'12 Months', icon:<Calendar /> },
  { label:'Team Size',             value:'1 Member',  icon:<Users /> },
  { label:'Target Active Couples', value:'5,000+',    icon:<Heart /> },
  { label:'Target Vendor Partners',value:'500+',      icon:<Award /> },
];

const achievements = [
  'End-to-end encrypted data storage',
  'Multi-currency payment processing',
  'Real-time vendor availability sync',
  'Mobile-first responsive design',
];

/* ─── component ─────────────────────────────────────────────── */
const WeddingProjectDetail = () => {
  const [activeTab, setActiveTab]                     = useState('overview');
  const [activeWebScreenshot, setActiveWebScreenshot] = useState(0);
  const [activeMobileScreenshot, setActiveMobileScreenshot] = useState(0);
  const [isVisible, setIsVisible]                     = useState(false);
  const navigate = useNavigate();

  const webThumbRef    = React.useRef(null);
  const mobileThumbRef = React.useRef(null);
  const sectionRef     = React.useRef(null);

  /* intersection → fade-in */
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.05 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* auto-advance */
  useEffect(() => {
    const w = setInterval(() => setActiveWebScreenshot(p => (p + 1) % webScreenshots.length), 5000);
    const m = setInterval(() => setActiveMobileScreenshot(p => (p + 1) % mobileScreenshots.length), 4500);
    return () => { clearInterval(w); clearInterval(m); };
  }, []);

  const scrollThumbs = (dir, ref) => {
    if (ref.current) ref.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  return (
    <div ref={sectionRef} className="wd-root">
      {/* ── shared background ── */}
      <div className="wd-grid-bg" />
      <div className="wd-glow-1" />
      <div className="wd-glow-2" />

      <div className={`wd-inner ${isVisible ? 'wd-in' : ''}`}>

        {/* ════════════════════ HERO ════════════════════ */}
        <section className="wd-hero">
          <div className="wd-hero-bg-img">
            <img src={weddingHero} alt="" aria-hidden="true" className="wd-hero-bg-photo" />
            <div className="wd-hero-bg-overlay" />
          </div>

          <div className="wd-hero-content">
            <div className="wd-hero-left">
              <button className="wd-back-btn" onClick={() => navigate('/')}>
                <ArrowLeft size={16} /><span>Back to Projects</span>
              </button>

              <div className="wd-eyebrow">
                <span className="wd-eyebrow-line" />
                <Sparkles size={13} />
                <span>Full Stack Project · 2023</span>
                <Sparkles size={13} />
                <span className="wd-eyebrow-line" />
              </div>

              <h1 className="wd-hero-title">
                Complete Wedding<br />
                <em className="wd-title-em">Management Platform</em>
              </h1>

              <p className="wd-hero-subtitle">
                Revolutionising wedding planning through intelligent vendor matching,
                real-time collaboration, budget tracking, and seamless guest management
                for the perfect celebration.
              </p>

              <div className="wd-hero-stats">
                {projectStats.map((s, i) => (
                  <div key={i} className="wd-stat-card">
                    <div className="wd-stat-icon">{s.icon}</div>
                    <div>
                      <div className="wd-stat-value">{s.value}</div>
                      <div className="wd-stat-label">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="wd-hero-actions">
                <button className="wd-btn-primary" onClick={() => window.open('https://wedify.netlify.app/', '_blank')}>
                  <ExternalLink size={17} /><span>View Live Demo</span>
                </button>
                <button className="wd-btn-secondary">
                  <Github size={17} /><span>Source Code</span>
                </button>
              </div>
            </div>

            <div className="wd-hero-right">
              <div className="wd-hero-img-wrap">
                <img src={weddingHero2} alt="Wedding Platform" className="wd-hero-img" />
                <div className="wd-img-glow" />
                <div className="wd-img-border" />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ STICKY TABS ════════════ */}
        <div className="wd-tabs-bar">
          {['overview', 'features', 'technologies'].map(tab => (
            <button
              key={tab}
              className={`wd-tab ${activeTab === tab ? 'wd-tab-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* ════════════ CONTENT ════════════ */}
        <div className="wd-content">

          {/* ── OVERVIEW ── */}
          {activeTab === 'overview' && (
            <section className="wd-section wd-fade-in">
              <h2 className="wd-section-title">Project Overview</h2>
              <div className="wd-overview-grid">
                <div className="wd-bento-card">
                  <p className="wd-text">
                    The Wedding Management System is a comprehensive digital platform designed to simplify
                    and streamline every aspect of wedding planning. From vendor selection to guest
                    management, budget tracking to event coordination, our platform brings together all
                    the tools couples need to plan their perfect day.
                  </p>
                  <h3 className="wd-sub-title">Problem Statement</h3>
                  <p className="wd-text">
                    Wedding planning is complex, stressful, and time-consuming. Couples struggle with
                    vendor coordination, budget management, guest tracking, and timeline organisation.
                    Traditional methods involve spreadsheets, multiple apps, and endless email chains,
                    leading to confusion and missed details.
                  </p>
                  <h3 className="wd-sub-title">Solution</h3>
                  <p className="wd-text">
                    Our platform provides an all-in-one solution that centralises wedding planning.
                    With intelligent vendor matching, automated task management, real-time collaboration,
                    and integrated payment processing, couples can plan their entire wedding from a
                    single intuitive platform across web and mobile.
                  </p>
                  <h3 className="wd-sub-title">Technical Highlights</h3>
                  <div className="wd-highlights">
                    {[
                      'MERN stack with real-time Socket.io communication layer',
                      'JWT-based authentication with role-specific dashboards',
                      'Stripe payment integration with split billing and deposits',
                      'AWS S3 cloud storage for photos and vendor media',
                      'Twilio SMS notifications for guests and vendor alerts',
                      'Google Maps API for interactive venue discovery',
                    ].map((h, i) => (
                      <div key={i} className="wd-highlight-item">
                        <CheckCircle2 size={17} /><span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="wd-sidebar">
                  <div className="wd-bento-card wd-bento-sm">
                    <h3 className="wd-card-title">Project Details</h3>
                    {[
                      ['Status',   <span className="wd-status-live"><span className="wd-status-dot"/>Live &amp; Active</span>],
                      ['Timeline', 'Jun 2023 – Dec 2023'],
                      ['Role',     'Lead Developer'],
                      ['Category', 'Event Tech, SaaS'],
                    ].map(([label, val], i) => (
                      <div key={i} className="wd-info-row">
                        <span className="wd-info-label">{label}</span>
                        <span className="wd-info-value">{val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="wd-bento-card wd-bento-sm">
                    <h3 className="wd-card-title">Platform Support</h3>
                    <div className="wd-platform-row">
                      {[['Web', <Monitor size={22}/>], ['Mobile', <Smartphone size={22}/>], ['Cloud', <Globe size={22}/>]].map(([name, icon], i) => (
                        <div key={i} className="wd-platform-item">{icon}<span>{name}</span></div>
                      ))}
                    </div>
                  </div>

                  <div className="wd-bento-card wd-bento-sm">
                    <h3 className="wd-card-title">Key Achievements</h3>
                    {achievements.map((a, i) => (
                      <div key={i} className="wd-achievement-item">
                        <Award size={15} style={{ color:'#fcd34d', flexShrink:0 }} />
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ── FEATURES ── */}
          {activeTab === 'features' && (
            <section className="wd-section wd-fade-in">
              <h2 className="wd-section-title">Core <em className="wd-em">Features</em></h2>
              <p className="wd-section-desc">
                A full-featured wedding ecosystem built around the real needs of couples, vendors, and administrators.
              </p>
              <div className="wd-features-grid">
                {features.map((f, i) => (
                  <div key={i} className="wd-feature-card" style={{'--fa': f.color}}>
                    <div className="wd-feature-icon">{f.icon}</div>
                    <h3 className="wd-feature-title">{f.title}</h3>
                    <p className="wd-feature-desc">{f.description}</p>
                    <div className="wd-feature-glow" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── TECHNOLOGIES ── */}
          {activeTab === 'technologies' && (
            <section className="wd-section wd-fade-in">
              <h2 className="wd-section-title">Technology <em className="wd-em">Stack</em></h2>
              <p className="wd-section-desc">
                Built with modern, scalable technologies ensuring reliability, performance, and exceptional user experience.
              </p>
              <div className="wd-tech-grid">
                {technologies.map((t, i) => (
                  <div key={i} className="wd-tech-card" style={{'--tc': t.color}}>
                    <span className="wd-tech-indicator" />
                    <span className="wd-tech-icon">{t.icon}</span>
                    <div>
                      <div className="wd-tech-name">{t.name}</div>
                      <div className="wd-tech-cat">{t.category}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Architecture */}
              <div style={{ marginTop: 60 }}>
                <h3 className="wd-sub-title">System Architecture</h3>
                <div className="wd-arch-card">
                  {[
                    ['Frontend Layer',  'React, Redux, Socket.io Client, Tailwind CSS, React Router'],
                    ['API Gateway',     'Express.js, JWT Authentication, Rate Limiting, CORS'],
                    ['Business Logic',  'Node.js Services, Stripe Integration, Twilio SMS, Email Services'],
                    ['Data Layer',      'MongoDB, Redis Cache, AWS S3, CloudFront CDN'],
                  ].map(([title, content], i, arr) => (
                    <React.Fragment key={i}>
                      <div className="wd-arch-layer">
                        <div className="wd-arch-layer-title">{title}</div>
                        <div className="wd-arch-layer-content">{content}</div>
                      </div>
                      {i < arr.length - 1 && <div className="wd-arch-arrow">↓</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>

        {/* ════════════ WEB SCREENSHOTS ════════════ */}
        <div className="wd-ss-section wd-fade-in">
          <div className="wd-divider">
            <span className="wd-divider-line" />
            <span className="wd-divider-label">Web Application Overview</span>
            <span className="wd-divider-line" />
          </div>
          <h2 className="wd-section-title" style={{ textAlign:'center', marginBottom:8 }}>
            Explore the <em className="wd-em">Web Interface</em>
          </h2>
          <p className="wd-section-desc" style={{ textAlign:'center', marginBottom:48 }}>
            Full-featured desktop experience for comprehensive wedding planning.
          </p>

          <div className="wd-ss-main">
            <div className="wd-browser-frame">
              <div className="wd-browser-bar">
                <div className="wd-browser-dots">
                  <span className="wd-dot wd-dot-r"/><span className="wd-dot wd-dot-y"/><span className="wd-dot wd-dot-g"/>
                </div>
                <div className="wd-browser-url">wedding-planner.app</div>
              </div>
              <img src={webScreenshots[activeWebScreenshot].url} alt={webScreenshots[activeWebScreenshot].title} className="wd-ss-img" />
            </div>
            <div className="wd-ss-meta">
              <h3 className="wd-ss-title">{webScreenshots[activeWebScreenshot].title}</h3>
              <p className="wd-ss-desc">{webScreenshots[activeWebScreenshot].description}</p>
            </div>
          </div>

          <div className="wd-thumb-breakout">
            <div className="wd-thumb-row">
              <button className="wd-thumb-scroll-btn" onClick={() => scrollThumbs('left', webThumbRef)}>
                <ArrowLeft size={20} />
              </button>
              <div className="wd-thumb-track" ref={webThumbRef}>
                {webScreenshots.map((s, i) => (
                  <div
                    key={s.id}
                    className={`wd-thumb-card ${activeWebScreenshot === i ? 'wd-thumb-active' : ''}`}
                    onClick={() => setActiveWebScreenshot(i)}
                  >
                    <div className="wd-thumb-img-wrap">
                      <img src={s.url} alt={s.title} className="wd-thumb-img" />
                      <div className="wd-thumb-overlay"><Play size={18} className="wd-thumb-play" /></div>
                    </div>
                    <div className="wd-thumb-label">
                      <span className="wd-thumb-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="wd-thumb-name">{s.title}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="wd-thumb-scroll-btn" onClick={() => scrollThumbs('right', webThumbRef)}>
                <ArrowLeft size={20} style={{ transform:'rotate(180deg)' }} />
              </button>
            </div>
          </div>
        </div>

        {/* ════════════ MOBILE SCREENSHOTS ════════════ */}
        <div className="wd-ss-section wd-fade-in" style={{ paddingTop: 0 }}>
          <div className="wd-divider">
            <span className="wd-divider-line" />
            <span className="wd-divider-label">Mobile Application Overview</span>
            <span className="wd-divider-line" />
          </div>
          <h2 className="wd-section-title" style={{ textAlign:'center', marginBottom:8 }}>
            Plan On the <em className="wd-em">Go</em>
          </h2>
          <p className="wd-section-desc" style={{ textAlign:'center', marginBottom:48 }}>
            Intuitive mobile interface keeps couples connected to every detail wherever they are.
          </p>

          {/* Mobile featured frame */}
          <div className="wd-ss-main wd-ss-mobile-main">
            <div className="wd-mobile-frame-wrap">
              <div className="wd-mobile-frame">
                <div className="wd-mobile-notch" />
                <img
                  src={mobileScreenshots[activeMobileScreenshot].url}
                  alt={mobileScreenshots[activeMobileScreenshot].title}
                  className="wd-mobile-img"
                />
              </div>
            </div>
            <div className="wd-ss-meta">
              <h3 className="wd-ss-title">{mobileScreenshots[activeMobileScreenshot].title}</h3>
              <p className="wd-ss-desc">{mobileScreenshots[activeMobileScreenshot].description}</p>
            </div>
          </div>

          <div className="wd-thumb-breakout">
            <div className="wd-thumb-row">
              <button className="wd-thumb-scroll-btn" onClick={() => scrollThumbs('left', mobileThumbRef)}>
                <ArrowLeft size={20} />
              </button>
              <div className="wd-thumb-track" ref={mobileThumbRef}>
                {mobileScreenshots.map((s, i) => (
                  <div
                    key={s.id}
                    className={`wd-thumb-card wd-thumb-mobile ${activeMobileScreenshot === i ? 'wd-thumb-active' : ''}`}
                    onClick={() => setActiveMobileScreenshot(i)}
                  >
                    <div className="wd-thumb-img-wrap wd-thumb-img-wrap-mobile">
                      <img src={s.url} alt={s.title} className="wd-thumb-img" />
                      <div className="wd-thumb-overlay"><Play size={18} className="wd-thumb-play" /></div>
                    </div>
                    <div className="wd-thumb-label">
                      <span className="wd-thumb-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="wd-thumb-name">{s.title}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="wd-thumb-scroll-btn" onClick={() => scrollThumbs('right', mobileThumbRef)}>
                <ArrowLeft size={20} style={{ transform:'rotate(180deg)' }} />
              </button>
            </div>
          </div>
        </div>

        {/* ════════════ CTA ════════════ */}
        <section className="wd-cta">
          <div className="wd-cta-inner">
            <div className="wd-eyebrow" style={{ justifyContent:'center', marginBottom:20 }}>
              <span className="wd-eyebrow-line" />
              <Sparkles size={13} />
              <span>Let's Connect</span>
              <Sparkles size={13} />
              <span className="wd-eyebrow-line" />
            </div>
            <h2 className="wd-cta-title">
              Interested in <em className="wd-em">Learning More?</em>
            </h2>
            <p className="wd-cta-desc">
              Get in touch to discuss this project in detail or explore collaboration opportunities.
            </p>
            <button className="wd-btn-primary" onClick={() => window.open('https://wedify.netlify.app/', '_blank')}>
              <ExternalLink size={17} /><span>Visit Platform</span>
            </button>
          </div>
        </section>

        {/* ════════════ FOOTER STRIP ════════════ */}
        <div className="wd-footer-strip">
          {['Wedding Tech', 'MERN Stack', 'React', 'Node.js', 'Full Stack'].map((l, i, arr) => (
            <React.Fragment key={i}>
              <span className="wd-strip-item">{l}</span>
              {i < arr.length - 1 && <span className="wd-strip-dot">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ═══════════════════════ STYLES ═══════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── Root ── */
        .wd-root {
          position: relative;
          min-height: 100vh;
          background: #080c14;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          color: #f0f4ff;
        }

        /* ── Background ── */
        .wd-grid-bg {
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none; z-index: 0;
        }
        .wd-glow-1 {
          position: fixed; top: -180px; right: -160px;
          width: 680px; height: 680px;
          background: radial-gradient(circle, rgba(124,140,248,0.10) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: wd-drift1 20s ease-in-out infinite alternate;
        }
        .wd-glow-2 {
          position: fixed; bottom: -120px; left: -80px;
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(232,121,160,0.08) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: wd-drift2 25s ease-in-out infinite alternate;
        }
        @keyframes wd-drift1 { from{transform:translate(0,0)} to{transform:translate(-60px,50px)} }
        @keyframes wd-drift2 { from{transform:translate(0,0)} to{transform:translate(50px,-40px)} }

        /* ── Inner ── */
        .wd-inner {
          position: relative; z-index: 1;
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .wd-inner.wd-in { opacity: 1; transform: translateY(0); }

        /* ════════ HERO ════════ */
        .wd-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 64px 80px;
          overflow: hidden;
        }
        .wd-hero-bg-img { position: absolute; inset: 0; z-index: 0; }
        .wd-hero-bg-photo {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 30%;
  filter: blur(-4px) brightness(0.22) saturate(0.7);
  transform: scale(1.06);
}
        .wd-hero-bg-overlay {
  position: absolute; inset: 0;
  background:
    linear-gradient(to bottom, rgba(8,12,20,0.45) 0%, rgba(8,12,20,0.80) 120%, #080c14 10%),
    linear-gradient(to right,  rgba(8,12,20,0.55) 0%, transparent 70%);
}
        .wd-hero-content {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto; width: 100%;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .wd-hero-left { display: flex; flex-direction: column; }

        .wd-back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px;
          color: #94a3b8; font-size: 13px; font-weight: 600;
          cursor: pointer; transition: all 0.3s ease;
          align-self: flex-start; margin-bottom: 32px;
          font-family: 'DM Sans', sans-serif;
        }
        .wd-back-btn:hover { background: rgba(255,255,255,0.10); color: #f0f4ff; transform: translateX(-4px); }

        .wd-eyebrow {
          display: flex; align-items: center; gap: 12px;
          font-size: 11px; font-weight: 600; letter-spacing: 3px;
          text-transform: uppercase; color: #a4acbb;
          margin-bottom: 24px;
        }
        .wd-eyebrow-line { display: block; width: 32px; height: 1px; background: #4a5568; }

        .wd-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(46px, 5.5vw, 66px);
          font-weight: 400; line-height: 1.05;
          letter-spacing: -2px; color: #f0f4ff;
          margin-bottom: 24px;
        }
        .wd-title-em, .wd-em {
          font-style: italic;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .wd-hero-subtitle {
          font-size: 17px; line-height: 1.75; color: #a4a7ac;
          font-weight: 500; max-width: 520px; margin-bottom: 40px;
        }

        /* stat cards */
        .wd-hero-stats { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 36px; }
        .wd-stat-card {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 20px;
          background: rgba(11,17,32,0.75);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; backdrop-filter: blur(12px);
          transition: border-color 0.3s ease, transform 0.3s ease;
          flex: 1 1 160px;
        }
        .wd-stat-card:hover { border-color: rgba(124,140,248,0.35); transform: translateY(-3px); }
        .wd-stat-icon {
          width: 42px; height: 42px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(124,140,248,0.12); color: #7c8cf8; flex-shrink: 0;
        }
        .wd-stat-value {
          font-family: 'DM Serif Display', serif;
          font-size: 22px; font-weight: 400; color: #f0f4ff;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1; margin-bottom: 3px;
        }
        .wd-stat-label { font-size: 11px; color: #4a5568; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; }

        /* buttons */
        .wd-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .wd-btn-primary, .wd-btn-secondary {
          position: relative; display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border: none; border-radius: 0; cursor: pointer;
          clip-path: polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);
          font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
          font-family: 'DM Sans', sans-serif; overflow: hidden; isolation: isolate;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .wd-btn-primary {
          background: #0d1424; color: #7dd3fc;
          box-shadow: inset 0 0 0 1px rgba(125,211,252,0.35);
        }
        .wd-btn-primary::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(100deg,#06b6d4,#7c3aed);
          transform: translateX(-101%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1); z-index: -1;
        }
        .wd-btn-primary:hover { color: #fff; box-shadow: none; }
        .wd-btn-primary:hover::before { transform: translateX(0); }
        .wd-btn-secondary {
          background: transparent; color: #c4b5fd;
          box-shadow: inset 0 0 0 1px rgba(196,181,253,0.4);
        }
        .wd-btn-secondary::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(100deg,#7c3aed,#ec4899);
          transform: translateX(-101%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1); z-index: -1;
        }
        .wd-btn-secondary:hover { color: #fff; box-shadow: none; }
        .wd-btn-secondary:hover::before { transform: translateX(0); }

        /* hero right */
        .wd-hero-right { position: relative; display: flex; align-items: center; justify-content: center; }
        .wd-hero-img-wrap {
          position: relative; width: 100%; max-width: 680px;
          border-radius: 20px; overflow: hidden; background: transparent;
        }
        .wd-hero-img {
          width: 100%; height: auto; display: block;
          object-fit: cover; border-radius: 20px; position: relative; z-index: 2;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
          transition: transform 0.5s ease;
        }
        .wd-hero-img:hover { transform: translateY(-8px) scale(1.02); }
        .wd-img-glow {
          position: absolute; inset: -30px;
          background: radial-gradient(circle, rgba(124,140,248,0.35) 0%, rgba(232,121,160,0.25) 50%, transparent 70%);
          filter: blur(50px); z-index: 1; opacity: 0.7;
          animation: wd-glow-pulse 4s ease-in-out infinite;
        }
        @keyframes wd-glow-pulse { 0%,100%{opacity:0.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.05)} }
        .wd-img-border {
          position: absolute; inset: -2px; border-radius: 28px; z-index: 1;
          background: linear-gradient(135deg,#7c8cf8,#e879a0,#38bdf8);
          background-size: 300% 300%; opacity: 0.25;
          animation: wd-border-spin 8s ease infinite;
        }
        @keyframes wd-border-spin { 0%{background-position:0 50%} 50%{background-position:100% 50%} 100%{background-position:0 50%} }

        /* ════════ TABS ════════ */
        .wd-tabs-bar {
          position: sticky; top: 0; z-index: 100;
          background: rgba(8,12,20,0.90);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          display: flex; gap: 4px;
          padding: 0 64px;
          overflow-x: auto;
        }
        .wd-tab {
          padding: 20px 28px; background: transparent; border: none;
          color: #4a5568; font-size: 14px; font-weight: 600; letter-spacing: 0.5px;
          cursor: pointer; transition: color 0.25s ease; white-space: nowrap;
          position: relative; font-family: 'DM Sans', sans-serif;
          text-transform: uppercase;
        }
        .wd-tab:hover { color: #94a3b8; }
        .wd-tab-active { color: #f0f4ff; }
        .wd-tab-active::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #7c8cf8, #e879a0);
          border-radius: 2px 2px 0 0;
        }

        /* ════════ CONTENT ════════ */
        .wd-content { max-width: 1280px; margin: 0 auto; padding: 72px 64px 40px; }
        .wd-section { margin-bottom: 80px; }
        .wd-fade-in { animation: wd-fadein 0.55s ease-out; }
        @keyframes wd-fadein { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }

        .wd-section-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(40px, 4.5vw, 52px);
          font-weight: 400; line-height: 1.05;
          letter-spacing: -1.5px; color: #f0f4ff;
          margin-bottom: 16px;
        }
        .wd-section-desc { font-size: 16px; color: #64748b; font-weight: 300; line-height: 1.75; margin-bottom: 48px; max-width: 640px; }
        .wd-sub-title { font-family: 'DM Serif Display', serif; font-size: 22px; color: #f0f4ff; margin: 28px 0 12px; }
        .wd-text { font-size: 15px; color: #94a3b8; line-height: 1.8; margin-bottom: 20px; font-weight: 300; }
        .wd-card-title { font-family: 'DM Serif Display', serif; font-size: 18px; color: #f0f4ff; margin-bottom: 20px; }

        /* bento cards */
        .wd-bento-card {
          background: #0b1120; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 32px;
          transition: background 0.3s ease;
        }
        .wd-bento-card:hover { background: #0f1929; }
        .wd-bento-sm { padding: 24px; }

        .wd-overview-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 2px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 24px; overflow: hidden; }
        .wd-sidebar { display: flex; flex-direction: column; gap: 2px; }

        .wd-highlights { display: flex; flex-direction: column; gap: 10px; margin-top: 16px; }
        .wd-highlight-item {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 14px; background: rgba(124,140,248,0.06);
          border-left: 2px solid rgba(124,140,248,0.4);
          border-radius: 6px; color: #94a3b8; font-size: 14px; line-height: 1.6;
        }
        .wd-highlight-item svg { color: #7c8cf8; flex-shrink: 0; margin-top: 2px; }

        .wd-info-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .wd-info-row:last-child { border-bottom: none; }
        .wd-info-label { font-size: 12px; color: #4a5568; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .wd-info-value { font-size: 13px; color: #f0f4ff; font-weight: 600; }
        .wd-status-live { display: flex; align-items: center; gap: 7px; color: #86efac; }
        .wd-status-dot { width: 7px; height: 7px; border-radius: 50%; background: currentColor; animation: wd-pulse 2s ease-in-out infinite; }
        @keyframes wd-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }

        .wd-platform-row { display: flex; gap: 10px; margin-top: 4px; }
        .wd-platform-item {
          flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 14px 10px;
          background: rgba(124,140,248,0.08); border: 1px solid rgba(124,140,248,0.18);
          border-radius: 12px; color: #a5b4fc; font-size: 12px; font-weight: 600;
          transition: all 0.3s ease;
        }
        .wd-platform-item:hover { background: rgba(124,140,248,0.15); transform: translateY(-3px); }

        .wd-achievement-item {
          display: flex; align-items: center; gap: 10px;
          padding: 12px; margin-bottom: 8px;
          background: rgba(251,191,36,0.07); border: 1px solid rgba(251,191,36,0.15);
          border-radius: 10px; color: #fcd34d; font-size: 13px; font-weight: 600;
        }
        .wd-achievement-item:last-child { margin-bottom: 0; }

        /* features grid */
        .wd-features-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2px; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06); border-radius: 24px; overflow: hidden;
        }
        .wd-feature-card {
          position: relative; background: #0b1120; padding: 28px 26px; overflow: hidden;
          transition: background 0.35s ease; border-bottom: 4px solid transparent;
        }
        .wd-feature-card:hover { background: #0f1929; border-bottom-color: var(--fa); }
        .wd-feature-icon {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          background: color-mix(in srgb, var(--fa) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--fa) 22%, transparent);
          color: var(--fa); margin-bottom: 18px; transition: transform 0.3s ease;
        }
        .wd-feature-card:hover .wd-feature-icon { transform: scale(1.08) rotate(4deg); }
        .wd-feature-title { font-family: 'DM Serif Display', serif; font-size: 18px; color: #f0f4ff; margin-bottom: 10px; }
        .wd-feature-desc  { font-size: 13px; color: #64748b; line-height: 1.7; font-weight: 300; }
        .wd-feature-glow  {
          position: absolute; inset: 0; pointer-events: none; opacity: 0;
          background: radial-gradient(circle at 0% 100%, color-mix(in srgb, var(--fa) 12%, transparent), transparent 60%);
          transition: opacity 0.4s ease;
        }
        .wd-feature-card:hover .wd-feature-glow { opacity: 1; }

        /* tech grid */
        .wd-tech-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 2px; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06); border-radius: 24px; overflow: hidden;
        }
        .wd-tech-card {
          display: flex; align-items: center; gap: 14px;
          padding: 20px; background: #0b1120;
          transition: background 0.3s ease; position: relative; overflow: hidden;
        }
        .wd-tech-card:hover { background: #0f1929; }
        .wd-tech-indicator {
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: var(--tc); opacity: 0; transition: opacity 0.3s ease;
        }
        .wd-tech-card:hover .wd-tech-indicator { opacity: 1; }
        .wd-tech-icon { font-size: 28px; flex-shrink: 0; }
        .wd-tech-name { font-size: 15px; font-weight: 600; color: #f0f4ff; margin-bottom: 3px; }
        .wd-tech-cat  { font-size: 11px; color: #4a5568; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }

        /* architecture */
        .wd-arch-card {
          background: #0b1120; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 36px;
          display: flex; flex-direction: column; gap: 16px;
        }
        .wd-arch-layer {
          padding: 22px 24px;
          background: rgba(124,140,248,0.06);
          border: 1px solid rgba(124,140,248,0.18);
          border-radius: 14px; transition: all 0.3s ease;
        }
        .wd-arch-layer:hover { background: rgba(124,140,248,0.12); transform: translateX(6px); }
        .wd-arch-layer-title { font-size: 15px; font-weight: 700; color: #a5b4fc; margin-bottom: 6px; }
        .wd-arch-layer-content { font-size: 14px; color: #64748b; line-height: 1.6; }
        .wd-arch-arrow { text-align: center; font-size: 22px; color: #7c8cf8; font-weight: 700; }

        /* ════════ SCREENSHOTS ════════ */
        .wd-ss-section { max-width: 1280px; margin: 0 auto; padding: 0 64px 80px; }

        .wd-divider { display: flex; align-items: center; gap: 20px; margin-bottom: 40px; }
        .wd-divider-line { flex: 1; height: 1px; background: rgba(255,255,255,0.06); }
        .wd-divider-label { font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: #2d3748; white-space: nowrap; }

        .wd-ss-main {
          background: #0b1120; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 28px; margin-bottom: 24px;
        }
        .wd-browser-frame { border-radius: 14px; overflow: hidden; background: #1e293b; margin-bottom: 24px; }
        .wd-browser-bar {
          display: flex; align-items: center;
          padding: 14px 18px;
          background: linear-gradient(180deg,#1e293b 0%,#0f172a 100%);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative;
        }
        .wd-browser-dots { display: flex; gap: 7px; }
        .wd-dot { width: 11px; height: 11px; border-radius: 50%; }
        .wd-dot-r { background: #ff5f57; } .wd-dot-y { background: #febc2e; } .wd-dot-g { background: #28c840; }
        .wd-browser-url {
          position: absolute; left: 50%; transform: translateX(-50%);
          padding: 6px 18px; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 6px; color: #64748b; font-size: 12px;
          font-family: 'Monaco', monospace;
        }
        .wd-ss-img { width: 100%; display: block; object-fit: contain; max-height: 560px; min-height: 320px; background: #0a0e1a; }
        .wd-ss-title { font-family: 'DM Serif Display', serif; font-size: 26px; color: #f0f4ff; margin-bottom: 10px; }
        .wd-ss-desc   { font-size: 14px; color: #64748b; line-height: 1.7; font-weight: 300; }

        /* mobile featured */
        .wd-ss-mobile-main { display: flex; flex-direction: column; align-items: center; }
        .wd-mobile-frame-wrap { margin-bottom: 22px; }
        .wd-mobile-frame {
          position: relative;
          width: 320px; height: 600px;
          border-radius: 40px;
          border: 8px solid #1e293b;
          box-shadow: 0 25px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(124,140,248,0.15);
          overflow: hidden;
          background: #0a0e1a;
        }
        .wd-mobile-notch {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 120px; height: 26px;
          background: #1e293b; border-radius: 0 0 18px 18px; z-index: 10;
        }
        .wd-mobile-img { width: 100%; height: 100%; object-fit: cover; border-radius: 32px; }

        /* thumbnail row */
        .wd-thumb-breakout {
          position: relative; left: 50%; right: 50%;
          margin-left: -50vw; margin-right: -50vw;
          width: 100vw; padding: 0 24px; box-sizing: border-box;
        }
        .wd-thumb-row { display: flex; align-items: center; gap: 12px; }
        .wd-thumb-scroll-btn {
          flex-shrink: 0; width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(124,140,248,0.12); border: 1px solid rgba(124,140,248,0.25);
          color: #f0f4ff; cursor: pointer; transition: all 0.3s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .wd-thumb-scroll-btn:hover { background: rgba(124,140,248,0.25); transform: scale(1.08); }
        .wd-thumb-track {
          display: flex; gap: 16px; overflow-x: auto; scroll-behavior: smooth;
          padding: 14px 6px; flex: 1;
          scrollbar-width: thin; scrollbar-color: rgba(124,140,248,0.4) rgba(255,255,255,0.05);
        }
        .wd-thumb-track::-webkit-scrollbar { height: 5px; }
        .wd-thumb-track::-webkit-scrollbar-track { background: rgba(255,255,255,0.04); border-radius: 10px; }
        .wd-thumb-track::-webkit-scrollbar-thumb { background: rgba(124,140,248,0.4); border-radius: 10px; }
        .wd-thumb-card { flex: 0 0 220px; cursor: pointer; transition: transform 0.3s ease; }
        .wd-thumb-mobile { flex: 0 0 140px; }
        .wd-thumb-card:hover { transform: translateY(-4px); }
        .wd-thumb-img-wrap {
          position: relative; border-radius: 12px; overflow: hidden;
          border: 2px solid rgba(255,255,255,0.06); aspect-ratio: 16/10;
          transition: border-color 0.3s ease;
        }
        .wd-thumb-img-wrap-mobile { aspect-ratio: 9/16; }
        .wd-thumb-active .wd-thumb-img-wrap { border-color: rgba(124,140,248,0.7); box-shadow: 0 0 0 3px rgba(124,140,248,0.18); }
        .wd-thumb-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .wd-thumb-card:hover .wd-thumb-img { transform: scale(1.05); }
        .wd-thumb-overlay {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, rgba(124,140,248,0.88), rgba(232,121,160,0.88));
          opacity: 0; transition: opacity 0.3s ease;
        }
        .wd-thumb-card:hover .wd-thumb-overlay { opacity: 1; }
        .wd-thumb-play { color: #fff; }
        .wd-thumb-label { display: flex; align-items: center; gap: 8px; margin-top: 10px; }
        .wd-thumb-num  { font-size: 12px; font-weight: 800; color: #7c8cf8; background: rgba(124,140,248,0.12); padding: 3px 8px; border-radius: 5px; font-family: 'Monaco', monospace; }
        .wd-thumb-name { font-size: 12px; font-weight: 600; color: #64748b; }
        .wd-thumb-active .wd-thumb-name { color: #a5b4fc; }

        /* ════════ CTA ════════ */
        .wd-cta {
          background: #0b1120;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 100px 64px; text-align: center;
          position: relative; overflow: hidden;
        }
        .wd-cta::before {
          content: ''; position: absolute; top: -120px; left: 50%; transform: translateX(-50%);
          width: 500px; height: 400px;
          background: radial-gradient(circle, rgba(124,140,248,0.10) 0%, transparent 70%);
          pointer-events: none;
        }
        .wd-cta-inner { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }
        .wd-cta-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(40px, 4vw, 54px);
          font-weight: 400; letter-spacing: -1.5px; color: #f0f4ff;
          margin-bottom: 18px; line-height: 1.05;
        }
        .wd-cta-desc { font-size: 16px; color: #64748b; line-height: 1.75; font-weight: 300; margin-bottom: 36px; }

        /* ════════ FOOTER STRIP ════════ */
        .wd-footer-strip {
          display: flex; align-items: center; justify-content: center;
          flex-wrap: wrap; gap: 16px; padding: 40px 64px;
        }
        .wd-strip-item { font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #2d3748; transition: color 0.3s ease; }
        .wd-strip-item:hover { color: #4a5568; }
        .wd-strip-dot { color: #1e293b; font-size: 16px; line-height: 1; }

        /* ════════ RESPONSIVE ════════ */
        @media (max-width: 1100px) {
          .wd-hero { padding: 100px 40px 70px; }
          .wd-content, .wd-ss-section { padding-left: 40px; padding-right: 40px; }
          .wd-tabs-bar { padding: 0 40px; }
          .wd-overview-grid { grid-template-columns: 1fr; }
          .wd-hero-content { grid-template-columns: 1fr; gap: 48px; }
          .wd-hero-right { order: -1; }
          .wd-hero-img-wrap { max-width: 380px; margin: 0 auto; }
        }
        @media (max-width: 768px) {
          .wd-hero { padding: 80px 24px 60px; min-height: auto; }
          .wd-content, .wd-ss-section, .wd-cta, .wd-footer-strip { padding-left: 24px; padding-right: 24px; }
          .wd-tabs-bar { padding: 0 24px; }
          .wd-hero-stats { flex-direction: column; }
          .wd-features-grid { grid-template-columns: 1fr; }
          .wd-tech-grid { grid-template-columns: 1fr; }
          .wd-browser-url { display: none; }
          .wd-thumb-card { flex: 0 0 180px; }
          .wd-thumb-mobile { flex: 0 0 120px; }
        }
        @media (max-width: 480px) {
          .wd-hero-title { font-size: 38px; }
          .wd-section-title { font-size: 34px; }
          .wd-cta-title { font-size: 34px; }
          .wd-hero-actions { flex-direction: column; }
          .wd-btn-primary, .wd-btn-secondary { width: 100%; justify-content: center; }
        }
      `}</style>
    </div>
  );
};

export default WeddingProjectDetail;