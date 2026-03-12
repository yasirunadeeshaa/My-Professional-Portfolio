import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Award, Heart, Code2, Sparkles, CheckCircle2, Play, Download, Monitor, Smartphone, Globe, Lock, TrendingUp, Activity, Camera, Music, MapPin, Bell, DollarSign, MessageCircle } from 'lucide-react';
// Import Wedding Desktop Screenshots
import weddingHero from '../assets/Wedding/Hero.png';
import vendors from '../assets/Wedding/vendors.png';
import adminPortal from '../assets/Wedding/adminPortal.png';
import testimonials from '../assets/Wedding/says.png';
import successStories from '../assets/Wedding/wedstory.png';
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

const WeddingProjectDetail = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeWebScreenshot, setActiveWebScreenshot] = useState(0);
const [activeMobileScreenshot, setActiveMobileScreenshot] = useState(0);
const webThumbnailScrollRef = React.useRef(null);
const mobileThumbnailScrollRef = React.useRef(null);

const scrollThumbnails = (direction, ref) => {
  if (ref.current) {
    const scrollAmount = 300;
    ref.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }
};

  const technologies = [
    { name: 'React', category: 'Frontend', icon: '⚛️', color: '#61dafb' },
    { name: 'Node.js', category: 'Backend', icon: '🟢', color: '#68a063' },
    { name: 'MongoDB', category: 'Database', icon: '🍃', color: '#47a248' },
    { name: 'Express.js', category: 'Backend', icon: '⚡', color: '#000000' },
    { name: 'Redux', category: 'State Management', icon: '🔄', color: '#764abc' },
    { name: 'Socket.io', category: 'Real-time', icon: '🔌', color: '#010101' },
    { name: 'Stripe', category: 'Payments', icon: '💳', color: '#635bff' },
    { name: 'AWS S3', category: 'Storage', icon: '☁️', color: '#ff9900' },
    { name: 'Twilio', category: 'Communication', icon: '📱', color: '#f22f46' },
    { name: 'Google Maps', category: 'Location', icon: '🗺️', color: '#4285f4' }
  ];

  const features = [
    {
      title: 'Vendor Management',
      description: 'Comprehensive vendor directory with profiles, portfolios, reviews, and real-time availability tracking for photographers, caterers, venues, and more.',
      icon: <Users />,
      color: '#f093fb'
    },
    {
      title: 'Event Planning Tools',
      description: 'Interactive timeline builder, checklist management, and task assignments with automated reminders and progress tracking.',
      icon: <Calendar />,
      color: '#667eea'
    },
    {
      title: 'Guest Management',
      description: 'Digital RSVP system, seating arrangements, dietary preferences tracking, and automated guest communication.',
      icon: <MessageCircle />,
      color: '#43e97b'
    },
    {
      title: 'Budget Tracker',
      description: 'Real-time expense tracking, vendor payment scheduling, budget allocation tools, and financial reporting dashboard.',
      icon: <DollarSign />,
      color: '#fa709a'
    },
    {
      title: 'Photo Gallery',
      description: 'Cloud-based photo and video storage with AI-powered organization, sharing capabilities, and collaborative albums.',
      icon: <Camera />,
      color: '#4facfe'
    },
    {
      title: 'Live Notifications',
      description: 'Real-time updates for guests, vendor confirmations, payment reminders, and event changes via SMS and email.',
      icon: <Bell />,
      color: '#764ba2'
    }
  ];

 const webScreenshots = [
  {
    id: 1,
    title: 'Wedding Planning Platform Hero',
    url: weddingHero,
    description: 'Main landing page featuring elegant wedding planning services and vendor showcase'
  },
  {
    id: 2,
    title: 'Vendors',
    url: vendors,
    description: 'Comprehensive directory of wedding vendors including photographers, caterers, venues, and decorators'
  },
  {
    id: 3,
    title: 'Admin Portal',
    url: adminPortal,
    description: 'Administrative dashboard for managing vendors, bookings, users, and platform analytics'
  },
  {
    id: 4,
    title: 'Testimonials',
    url: testimonials,
    description: 'Customer testimonials and reviews highlighting successful wedding planning experiences'
  },
  {
    id: 5,
    title: 'Success Stories',
    url: successStories,
    description: 'Real couples sharing their wedding journey and experiences with the platform'
  },
  {
    id: 6,
    title: 'Wedding Trends',
    url: weddingTrends,
    description: 'Latest wedding trends, themes, color palettes, and style inspirations for modern celebrations'
  },
  {
    id: 7,
    title: 'Winter Season Wedding Planning',
    url: winterWedding,
    description: 'Winter-themed wedding ideas featuring cozy venues, seasonal decor, and cold-weather planning tips'
  },
  {
    id: 8,
    title: 'Summer Season Wedding Planning',
    url: summerWedding,
    description: 'Summer wedding inspiration with outdoor venues, bright florals, and warm-weather celebration ideas'
  },
  {
    id: 9,
    title: 'Spring Season Wedding Planning',
    url: springWedding,
    description: 'Spring wedding themes featuring blooming gardens, pastel colors, and fresh seasonal arrangements'
  },
  {
    id: 10,
    title: 'Autumn Season Wedding Planning',
    url: autumnWedding,
    description: 'Fall wedding concepts with rich colors, rustic venues, and harvest-inspired decorations'
  }
];

const mobileScreenshots = [
  {
    id: 1,
    title: 'Mobile Home',
    url: mobile01,
    description: 'Mobile home screen with quick access to vendors, planning tools, and upcoming wedding tasks'
  },
  {
    id: 2,
    title: 'Sign In page',
    url: mobile02,
    description: 'Secure login interface for couples to access their personalized wedding planning dashboard'
  },
  {
    id: 3,
    title: 'Sign Up Page',
    url: mobile03,
    description: 'Registration page for new users to create their wedding planning account and profile'
  },
  {
    id: 4,
    title: 'Vendors Page',
    url: mobile04,
    description: 'Mobile vendor browsing interface with categories and search filters for easy discovery'
  },
  {
    id: 5,
    title: 'Florist page',
    url: mobile05,
    description: 'Browse florists and floral designers with portfolios, pricing, and availability information'
  },
  {
    id: 6,
    title: 'Florist Details',
    url: mobile06,
    description: 'Detailed florist profile showing services, gallery, reviews, and booking options'
  },
  {
    id: 7,
    title: 'Photographer page',
    url: mobile07,
    description: 'Explore wedding photographers with portfolio previews, packages, and client testimonials'
  },
  {
    id: 8, 
    title: 'Photographer Details',
    url: mobile08,
    description: 'Complete photographer profile with full portfolio, pricing packages, and contact information'
  },
  {
    id: 9,
    title: 'Entertainment page',
    url: mobile09,
    description: 'Find DJs, bands, and entertainment services for your wedding celebration'
  },
  {
    id: 10,
    title: 'Entertainment Details',
    url: mobile10,
    description: 'Detailed entertainment vendor profile with music samples, equipment, and performance details'
  },
  {
    id: 11,
    title: 'Vehicle page',
    url: mobile11,
    description: 'Browse wedding transportation options including luxury cars, vintage vehicles, and limousines'
  },
  {
    id: 12,
    title: 'Vehicle Details',
    url: mobile12,
    description: 'Vehicle rental details with photos, specifications, pricing, and availability calendar'
  },
  {
    id: 13,
    title: 'Dressing page',
    url: mobile13,
    description: 'Discover bridal boutiques, groom attire, and wedding fashion services'
  },
  {
    id: 14,
    title: 'Dressing Details',
    url: mobile14,
    description: 'Bridal shop profile showcasing dress collections, fitting services, and designer information'
  },
  {
    id: 15,
    title: 'Locations',
    url: mobile15,
    description: 'Browse wedding venues and ceremony locations with photos and capacity information'
  },
  {
    id: 16,
    title: 'Location Details',
    url: mobile16,
    description: 'Venue details including amenities, floor plans, catering options, and booking availability'
  },
  {
    id: 17,
    title: 'Payment',
    url: mobile17,
    description: 'Secure payment screen for vendor bookings and service deposits'
  },
  {
    id: 18,
    title: 'Payment Methods',
    url: mobile18,
    description: 'Select payment method including credit cards, digital wallets, and bank transfers'
  }
];

  const projectStats = [
    { label: 'Development Time', value: '12 Months', icon: <Calendar /> },
    { label: 'Team Size', value: '1 Member', icon: <Users /> },
    { label: 'Target Active Couples', value: '5,000+', icon: <Heart /> },
    { label: 'Target Vendor Partners', value: '500+', icon: <Award /> }
  ];


 useEffect(() => {
  const webInterval = setInterval(() => {
    setActiveWebScreenshot((prev) => (prev + 1) % webScreenshots.length);
  }, 5000);
  
  const mobileInterval = setInterval(() => {
    setActiveMobileScreenshot((prev) => (prev + 1) % mobileScreenshots.length);
  }, 5000);
  
  return () => {
    clearInterval(webInterval);
    clearInterval(mobileInterval);
  };
}, [webScreenshots.length, mobileScreenshots.length]);

  return (
    <div className="wpd-container">
      {/* Hero Section */}
      <section className="wpd-hero">
        <div className="wpd-hero-background">
          <div className="wpd-gradient-blur wpd-blur-1"></div>
          <div className="wpd-gradient-blur wpd-blur-2"></div>
          <div className="wpd-gradient-blur wpd-blur-3"></div>
        </div>
        
        <div className="wpd-hero-content">
          <button className="wpd-back-btn">
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </button>

          <div className="wpd-hero-badge">
            <Heart size={16} />
            <span>Wedding Platform</span>
          </div>

          <h1 className="wpd-hero-title">
            Wedding <span className="wpd-gradient-text">Management</span> System
          </h1>

          <p className="wpd-hero-subtitle">
            Complete digital platform revolutionizing wedding planning with intelligent vendor matching, 
            real-time collaboration tools, budget tracking, and seamless guest management for the perfect celebration.
          </p>

          <div className="wpd-hero-stats">
            {projectStats.map((stat, index) => (
              <div key={index} className="wpd-stat-card">
                <div className="wpd-stat-icon">{stat.icon}</div>
                <div className="wpd-stat-content">
                  <div className="wpd-stat-value">{stat.value}</div>
                  <div className="wpd-stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="wpd-hero-actions">
            <button className="wpd-btn-primary">
              <ExternalLink size={20} />
              <span>View Live Demo</span>
            </button>
            <button className="wpd-btn-secondary">
              <Github size={20} />
              <span>View on GitHub</span>
            </button>
            <button className="wpd-btn-secondary">
              <Download size={20} />
              <span>Download Report</span>
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="wpd-tabs-section">
        <div className="wpd-tabs-container">
          <div className="wpd-tabs">
            {['overview', 'features', 'technologies'].map((tab) => (
              <button
                key={tab}
                className={`wpd-tab ${activeTab === tab ? 'wpd-tab-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="wpd-content-wrapper">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <section className="wpd-section wpd-fade-in">
            <div className="wpd-section-grid">
              <div className="wpd-overview-main">
                <h2 className="wpd-section-title">Project Overview</h2>
                <div className="wpd-overview-content">
                  <p className="wpd-text">
                    The Wedding Management System is a comprehensive digital platform designed to simplify and 
                    streamline every aspect of wedding planning. From vendor selection to guest management, 
                    budget tracking to event coordination, our platform brings together all the tools couples 
                    need to plan their perfect day.
                  </p>
                  
                  <h3 className="wpd-subsection-title">Problem Statement</h3>
                  <p className="wpd-text">
                    Wedding planning is complex, stressful, and time-consuming. Couples struggle with vendor 
                    coordination, budget management, guest tracking, and timeline organization. Traditional 
                    methods involve spreadsheets, multiple apps, and endless email chains, leading to confusion 
                    and missed details.
                  </p>

                  <h3 className="wpd-subsection-title">Solution</h3>
                  <p className="wpd-text">
                    Our platform provides an all-in-one solution that centralizes wedding planning. With 
                    intelligent vendor matching, automated task management, real-time collaboration, and 
                    integrated payment processing, couples can plan their entire wedding from a single 
                    intuitive platform. Features include guest RSVP tracking, seating arrangements, budget 
                    monitoring, and vendor coordination tools.
                  </p>
                </div>
              </div>

              <div className="wpd-overview-sidebar">
                <div className="wpd-info-card">
                  <h3 className="wpd-info-title">Project Details</h3>
                  <div className="wpd-info-list">
                    <div className="wpd-info-item">
                      <span className="wpd-info-label">Status</span>
                      <span className="wpd-info-value wpd-status-live">
                        <span className="wpd-status-dot"></span>
                        Live & Active
                      </span>
                    </div>
                    <div className="wpd-info-item">
                      <span className="wpd-info-label">Timeline</span>
                      <span className="wpd-info-value">Jun 2023 - Dec 2023</span>
                    </div>
                    <div className="wpd-info-item">
                      <span className="wpd-info-label">Role</span>
                      <span className="wpd-info-value">Lead Developer</span>
                    </div>
                    <div className="wpd-info-item">
                      <span className="wpd-info-label">Category</span>
                      <span className="wpd-info-value">Event Tech, SaaS</span>
                    </div>
                  </div>
                </div>

                <div className="wpd-info-card">
                  <h3 className="wpd-info-title">Platform Support</h3>
                  <div className="wpd-platform-icons">
                    <div className="wpd-platform-item">
                      <Monitor size={24} />
                      <span>Web</span>
                    </div>
                    <div className="wpd-platform-item">
                      <Smartphone size={24} />
                      <span>Mobile</span>
                    </div>
                    <div className="wpd-platform-item">
                      <Globe size={24} />
                      <span>Cloud</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        {activeTab === 'features' && (
          <section className="wpd-section wpd-fade-in">
            <h2 className="wpd-section-title">Core Features</h2>
            <div className="wpd-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="wpd-feature-card">
                  <div className="wpd-feature-icon" style={{ background: `${feature.color}15`, color: feature.color }}>
                    {feature.icon}
                  </div>
                  <h3 className="wpd-feature-title">{feature.title}</h3>
                  <p className="wpd-feature-description">{feature.description}</p>
                  <div className="wpd-feature-gradient" style={{ background: `linear-gradient(135deg, ${feature.color}20, transparent)` }}></div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technologies Section */}
        {activeTab === 'technologies' && (
          <section className="wpd-section wpd-fade-in">
            <h2 className="wpd-section-title">Technology Stack</h2>
            <p className="wpd-section-description">
              Built with modern, scalable technologies ensuring reliability, performance, and exceptional user experience.
            </p>
            <div className="wpd-tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="wpd-tech-card">
                  <div className="wpd-tech-icon">{tech.icon}</div>
                  <div className="wpd-tech-content">
                    <h3 className="wpd-tech-name">{tech.name}</h3>
                    <span className="wpd-tech-category">{tech.category}</span>
                  </div>
                  <div className="wpd-tech-indicator" style={{ background: tech.color }}></div>
                </div>
              ))}
            </div>

            <div className="wpd-architecture-section">
              <h3 className="wpd-subsection-title">System Architecture</h3>
              <div className="wpd-architecture-card">
                <div className="wpd-architecture-layer">
                  <div className="wpd-layer-title">Frontend Layer</div>
                  <div className="wpd-layer-content">React, Redux, Socket.io Client, Tailwind CSS, React Router</div>
                </div>
                <div className="wpd-architecture-arrow">↓</div>
                <div className="wpd-architecture-layer">
                  <div className="wpd-layer-title">API Gateway</div>
                  <div className="wpd-layer-content">Express.js, JWT Authentication, Rate Limiting, CORS</div>
                </div>
                <div className="wpd-architecture-arrow">↓</div>
                <div className="wpd-architecture-layer">
                  <div className="wpd-layer-title">Business Logic</div>
                  <div className="wpd-layer-content">Node.js Services, Stripe Integration, Twilio SMS, Email Services</div>
                </div>
                <div className="wpd-architecture-arrow">↓</div>
                <div className="wpd-architecture-layer">
                  <div className="wpd-layer-title">Data Layer</div>
                  <div className="wpd-layer-content">MongoDB, Redis Cache, AWS S3, CloudFront CDN</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Web Screenshots */}
        <div className="ash-screenshots-section ash-fade-in">
          <h3 className="ash-screenshots-heading">Web Application Overview</h3>
          <p className="ash-screenshots-subheading">
            Full-featured desktop experience for comprehensive wedding planning
          </p>
          
          <div className="ash-screenshots-wrapper">
            <div className="ash-featured-screenshot">
              <div className="ash-screenshot-frame">
                <div className="ash-browser-bar">
                  <div className="ash-browser-dots">
                    <span className="ash-dot ash-dot-red"></span>
                    <span className="ash-dot ash-dot-yellow"></span>
                    <span className="ash-dot ash-dot-green"></span>
                  </div>
                  <div className="ash-browser-url">wedding-planner.app</div>
                </div>
                
                <img 
                  src={webScreenshots[activeWebScreenshot].url} 
                  alt={webScreenshots[activeWebScreenshot].title}
                  className="ash-screenshot-image"
                />
              </div>
              
              <div className="ash-screenshot-details">
                <h3 className="ash-screenshot-title">{webScreenshots[activeWebScreenshot].title}</h3>
                <p className="ash-screenshot-description">{webScreenshots[activeWebScreenshot].description}</p>
              </div>
            </div>

            <div className="ash-thumbnails-container">
              <button className="ash-scroll-button ash-scroll-left" onClick={() => scrollThumbnails('left', webThumbnailScrollRef)}>
                <ArrowLeft size={24} />
              </button>
              
              <div className="ash-thumbnails-horizontal" ref={webThumbnailScrollRef}>
                {webScreenshots.map((screenshot, index) => (
                  <div
                    key={screenshot.id}
                    className={`ash-thumbnail-card ${activeWebScreenshot === index ? 'ash-thumbnail-active' : ''}`}
                    onClick={() => setActiveWebScreenshot(index)}
                  >
                    <div className="ash-thumbnail-wrapper">
                      <img src={screenshot.url} alt={screenshot.title} className="ash-thumbnail-image" />
                      <div className="ash-thumbnail-overlay">
                        <div className="ash-play-button">
                          <Play size={20} />
                        </div>
                      </div>
                    </div>
                    <div className="ash-thumbnail-label">
                      <span className="ash-thumbnail-number">{String(index + 1).padStart(2, '0')}</span>
                      <span className="ash-thumbnail-name">{screenshot.title}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="ash-scroll-button ash-scroll-right" onClick={() => scrollThumbnails('right', webThumbnailScrollRef)}>
                <ArrowLeft size={24} style={{ transform: 'rotate(180deg)' }} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Screenshots */}
        <div className="ash-screenshots-section ash-fade-in" style={{ marginTop: '80px' }}>
          <h3 className="ash-screenshots-heading">Mobile Application Overview</h3>
          <p className="ash-screenshots-subheading">
            Plan your wedding on-the-go with our intuitive mobile interface
          </p>
          
          <div className="ash-screenshots-wrapper">
            <div className="ash-featured-screenshot-web ash-mobile-featured">
              <div className="ash-mobile-frame">
                <div className="ash-mobile-notch"></div>
                <img 
                  src={mobileScreenshots[activeMobileScreenshot].url} 
                  alt={mobileScreenshots[activeMobileScreenshot].title}
                  className="ash-mobile-screenshot-image"
                />
              </div>
              
              <div className="ash-screenshot-details">
                <h3 className="ash-screenshot-title">{mobileScreenshots[activeMobileScreenshot].title}</h3>
                <p className="ash-screenshot-description">{mobileScreenshots[activeMobileScreenshot].description}</p>
              </div>
            </div>

            <div className="ash-thumbnails-container">
              <button className="ash-scroll-button ash-scroll-left" onClick={() => scrollThumbnails('left', mobileThumbnailScrollRef)}>
                <ArrowLeft size={24} />
              </button>
              
              <div className="ash-thumbnails-horizontal" ref={mobileThumbnailScrollRef}>
                {mobileScreenshots.map((screenshot, index) => (
                  <div
                    key={screenshot.id}
                    className={`ash-thumbnail-card ash-mobile-thumbnail ${activeMobileScreenshot === index ? 'ash-thumbnail-active' : ''}`}
                    onClick={() => setActiveMobileScreenshot(index)}
                  >
                    <div className="ash-thumbnail-wrapper ash-mobile-thumbnail-wrapper">
                      <img src={screenshot.url} alt={screenshot.title} className="ash-thumbnail-image" />
                      <div className="ash-thumbnail-overlay">
                        <div className="ash-play-button">
                          <Play size={20} />
                        </div>
                      </div>
                    </div>
                    <div className="ash-thumbnail-label">
                      <span className="ash-thumbnail-number">{String(index + 1).padStart(2, '0')}</span>
                      <span className="ash-thumbnail-name">{screenshot.title}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="ash-scroll-button ash-scroll-right" onClick={() => scrollThumbnails('right', mobileThumbnailScrollRef)}>
                <ArrowLeft size={24} style={{ transform: 'rotate(180deg)' }} />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* CTA Section */}
      <section className="wpd-cta-section">
        <div className="wpd-cta-content">
          <h2 className="wpd-cta-title">Ready to Explore More?</h2>
          <p className="wpd-cta-description">
            Discover how this platform is transforming wedding planning or discuss collaboration opportunities.
          </p>
          <div className="wpd-cta-buttons">
            <button className="wpd-btn-primary" onClick={() => window.location.href = 'https://wedify.netlify.app/'}>
              <ExternalLink size={20} />
              <span>Visit Platform</span>
            </button>
            
          </div>
        </div>
      </section>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .wpd-container {
          min-height: 100vh;
         background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          color: white;
        }

        /* Hero Section */
        .wpd-hero {
          position: relative;
          padding: 120px 60px 80px;
          overflow: hidden;
        }

        .wpd-hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .wpd-gradient-blur {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.4;
        }

        .wpd-blur-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.4), transparent);
          top: -200px;
          right: -100px;
        }

        .wpd-blur-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(118, 75, 162, 0.3), transparent);
          bottom: -150px;
          left: -100px;
        }

        .wpd-blur-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .wpd-grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(102, 126, 234, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(102, 126, 234, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
}

        .wpd-hero-content {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
        }

        .wpd-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          margin-bottom: 30px;
        }

        .wpd-back-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(-5px);
        }

        .wpd-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(72, 187, 120, 0.2);
          border: 1px solid rgba(72, 187, 120, 0.3);
          color: #86efac;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .wpd-hero-title {
          font-size: 72px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -2px;
        }

        .wpd-gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .wpd-hero-subtitle {
          font-size: 20px;
          color: #cbd5e1;
          line-height: 1.8;
          max-width: 900px;
          margin-bottom: 48px;
        }

        .wpd-hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }

        .wpd-stat-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .wpd-stat-card:hover {
          transform: translateY(-4px);
          border-color: rgba(240, 147, 251, 0.3);
        }

        .wpd-stat-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(102, 126, 234, 0.2);
          border-radius: 12px;
          color: #667eea;
        }

        .wpd-stat-value {
          font-size: 28px;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .wpd-stat-label {
          font-size: 14px;
          color: #e9d5ff;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .wpd-hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .wpd-btn-primary, .wpd-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .wpd-btn-primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
          color: white;
        }

        .wpd-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 50px rgba(102, 126, 234, 0.5);
        }

        .wpd-btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          backdrop-filter: blur(10px);
        }

        .wpd-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        /* Tabs Section */
        .wpd-tabs-section {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(26, 10, 30, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0 60px;
        }

        .wpd-tabs-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .wpd-tabs {
          display: flex;
          gap: 8px;
          overflow-x: auto;
        }

        .wpd-tab {
          padding: 20px 32px;
          background: transparent;
          border: none;
          color: #e9d5ff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          white-space: nowrap;
        }

        .wpd-tab:hover {
          color: white;
        }

        .wpd-tab-active {
          color: white;
        }

        .wpd-tab-active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 3px 3px 0 0;
        }

        /* Content Wrapper */
        .wpd-content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 60px;
        }

        .wpd-section {
          margin-bottom: 80px;
        }

        .wpd-fade-in {
          animation: wpd-fadeIn 0.6s ease-out;
        }

        @keyframes wpd-fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .wpd-section-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .wpd-section-description {
          font-size: 18px;
          color: #e9d5ff;
          margin-bottom: 48px;
          max-width: 800px;
        }

        /* Overview Section */
        .wpd-section-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
        }

        .wpd-overview-content {
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(20px);
        }

        .wpd-text {
          font-size: 16px;
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .wpd-subsection-title {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
          margin-top: 32px;
        }

        .wpd-achievements-grid {
          display: grid;
          gap: 16px;
          margin-top: 24px;
        }

        .wpd-achievement-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: rgba(245, 87, 108, 0.1);
          border: 1px solid rgba(245, 87, 108, 0.2);
          border-radius: 12px;
          color: #fda4af;
          font-size: 15px;
          font-weight: 600;
        }

        .wpd-achievement-icon {
          flex-shrink: 0;
        }

        .wpd-overview-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .wpd-info-card {
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 32px;
          backdrop-filter: blur(20px);
        }

        .wpd-info-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 24px;
          color: white;
        }

        .wpd-info-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .wpd-info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .wpd-info-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .wpd-info-label {
          font-size: 14px;
          color: #e9d5ff;
          font-weight: 600;
        }

        .wpd-info-value {
          font-size: 15px;
          color: white;
          font-weight: 700;
        }

        .wpd-status-live {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #86efac;
        }

        .wpd-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: currentColor;
          animation: wpd-pulse 2s ease-in-out infinite;
        }

        @keyframes wpd-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .wpd-platform-icons {
          display: flex;
          gap: 20px;
          justify-content: space-around;
        }

        .wpd-platform-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 16px;
          background: rgba(240, 147, 251, 0.1);
          border: 1px solid rgba(240, 147, 251, 0.2);
          border-radius: 12px;
          color: #f9a8d4;
          font-size: 13px;
          font-weight: 600;
          flex: 1;
          transition: all 0.3s ease;
        }

        .wpd-platform-item:hover {
          background: rgba(240, 147, 251, 0.2);
          transform: translateY(-4px);
        }

        /* Features Section */
        .wpd-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
        }

        .wpd-feature-card {
          position: relative;
          padding: 32px;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(20px);
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .wpd-feature-card:hover {
          transform: translateY(-8px);
          border-color: rgba(240, 147, 251, 0.3);
          box-shadow: 0 20px 60px rgba(240, 147, 251, 0.3);
        }

        .wpd-feature-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .wpd-feature-card:hover .wpd-feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .wpd-feature-title {
          font-size: 22px;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
        }

        .wpd-feature-description {
          font-size: 15px;
          color: #e9d5ff;
          line-height: 1.7;
        }

        .wpd-feature-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .wpd-feature-card:hover .wpd-feature-gradient {
          opacity: 0.1;
        }

        /* Technologies Section */
        .wpd-tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
        }

        .wpd-tech-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .wpd-tech-card:hover {
          transform: translateY(-4px);
          border-color: rgba(240, 147, 251, 0.3);
        }

        .wpd-tech-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .wpd-tech-content {
          flex: 1;
        }

        .wpd-tech-name {
          font-size: 18px;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }

        .wpd-tech-category {
          font-size: 13px;
          color: #e9d5ff;
          font-weight: 600;
        }

        .wpd-tech-indicator {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .wpd-tech-card:hover .wpd-tech-indicator {
          opacity: 1;
        }

        /* Architecture Section */
        .wpd-architecture-section {
          margin-top: 60px;
        }

        .wpd-architecture-card {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 40px;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(20px);
        }

        .wpd-architecture-layer {
          padding: 24px;
          background: rgba(240, 147, 251, 0.1);
          border: 2px solid rgba(240, 147, 251, 0.3);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .wpd-architecture-layer:hover {
          background: rgba(240, 147, 251, 0.15);
          transform: translateX(8px);
        }

        .wpd-layer-title {
          font-size: 18px;
          font-weight: 700;
          color: #f9a8d4;
          margin-bottom: 8px;
        }

        .wpd-layer-content {
          font-size: 15px;
          color: #e9d5ff;
          line-height: 1.6;
        }

        .wpd-architecture-arrow {
          text-align: center;
          font-size: 24px;
          color: #f093fb;
          font-weight: 700;
        }


        /* CTA Section */
        .wpd-cta-section {
          padding: 100px 60px;
          background: rgba(17, 24, 39, 0.6);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .wpd-cta-content {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }

        .wpd-cta-title {
          font-size: 48px;
          font-weight: 900;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #fff, #f9a8d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .wpd-cta-description {
          font-size: 20px;
          color: #e9d5ff;
          margin-bottom: 40px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .wpd-cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .wpd-section-grid {
            grid-template-columns: 1fr;
          }

          .wpd-hero-title {
            font-size: 56px;
          }

          .wpd-hero-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .wpd-hero {
            padding: 80px 20px 60px;
          }

          .wpd-content-wrapper {
            padding: 60px 20px;
          }

          .wpd-tabs-section {
            padding: 0 20px;
          }

          .wpd-hero-title {
            font-size: 42px;
          }

          .wpd-section-title {
            font-size: 32px;
          }

          .wpd-hero-stats {
            grid-template-columns: 1fr;
          }

          .wpd-features-grid {
            grid-template-columns: 1fr;
          }

          .wpd-tech-grid {
            grid-template-columns: 1fr;
          }

          .wpd-main-screenshot {
            height: 400px;
          }

          .wpd-screenshot-thumbnails {
            grid-template-columns: repeat(2, 1fr);
          }

          .wpd-hero-actions {
            flex-direction: column;
          }

          .wpd-btn-primary, .wpd-btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .wpd-cta-section {
            padding: 60px 20px;
          }

          .wpd-cta-title {
            font-size: 36px;
          }

          .wpd-cta-buttons {
            flex-direction: column;
          }

          .wpd-tabs {
            overflow-x: scroll;
          }

          .wpd-architecture-card {
            padding: 24px;
          }

          .wpd-overview-content {
            padding: 24px;
          }

          .wpd-info-card {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .wpd-hero-title {
            font-size: 32px;
          }

          .wpd-section-title {
            font-size: 28px;
          }

          .wpd-hero-subtitle {
            font-size: 16px;
          }

          .wpd-stat-card {
            padding: 16px;
          }

          .wpd-stat-value {
            font-size: 24px;
          }

          .wpd-tab {
            padding: 16px 20px;
            font-size: 14px;
          }

          .wpd-screenshot-thumbnails {
            grid-template-columns: 1fr;
          }

          .wpd-feature-card {
            padding: 24px;
          }

          .wpd-tech-card {
            padding: 16px;
          }

          .wpd-architecture-layer {
            padding: 20px;
          }

          .wpd-cta-title {
            font-size: 28px;
          }

          .wpd-cta-description {
            font-size: 16px;
          }
        }

        /* Screenshots Section */
.ash-screenshots-section {
  max-width: 1750px;
  margin: 0 auto;
  padding: 50px 0;
  overflow: hidden;
}

.ash-screenshots-heading {
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #fff 0%, #f9a8d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.ash-screenshots-subheading {
  font-size: 18px;
  color: #e9d5ff;
  text-align: center;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.ash-screenshots-wrapper {
  display: grid;
  gap: 40px;
}

/* Featured Screenshot */
.ash-featured-screenshot {
  position: relative;
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  padding: 32px;
  backdrop-filter: blur(20px);
  overflow: hidden;
  max-width: 1300px;
  justify-self: center;
  width: 100%;
}
  .ash-featured-screenshot-web {
  position: relative;
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  padding: 32px;
  backdrop-filter: blur(20px);
  overflow: hidden;
  max-width: 1300px;
  justify-self: center;
  width: 600px;
}

.ash-screenshot-frame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: #1e293b;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
  margin-bottom: 32px;
}

.ash-browser-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: linear-gradient(180deg, rgba(30, 41, 59, 1) 0%, rgba(15, 23, 42, 1) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.ash-browser-dots {
  display: flex;
  gap: 8px;
}

.ash-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.ash-dot-red {
  background: #ff5f57;
  box-shadow: 0 0 10px rgba(255, 95, 87, 0.5);
}

.ash-dot-yellow {
  background: #febc2e;
  box-shadow: 0 0 10px rgba(254, 188, 46, 0.5);
}

.ash-dot-green {
  background: #28c840;
  box-shadow: 0 0 10px rgba(40, 200, 64, 0.5);
}

.ash-browser-url {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #e9d5ff;
  font-size: 13px;
  font-weight: 600;
  font-family: 'Monaco', monospace;
}

.ash-screenshot-image {
  width: 100%;
  height: 450px;
  display: block;
  object-fit: contain;
  min-height: 600px;
  background: linear-gradient(135deg, #163cb9ff 0%, #8224b8ff 100%);
}

.ash-screenshot-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.ash-screenshot-title {
  font-size: 32px;
  font-weight: 800;
  color: white;
  letter-spacing: -0.5px;
}

.ash-screenshot-description {
  font-size: 16px;
  color: #e9d5ff;
  line-height: 1.7;
  max-width: 700px;
}

/* Mobile Featured Screenshot */
.ash-mobile-featured {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ash-mobile-frame {
  position: relative;
  width: 400px;
  height: 800px;
  border-radius: 40px;
  padding: 12px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
  margin-bottom: 32px;
  border: 8px solid #0f172a;
}

.ash-mobile-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 28px;
  background: #0f172a;
  border-radius: 0 0 20px 20px;
  z-index: 10;
}

.ash-mobile-screenshot-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 62px;
  background: black;
}

/* Thumbnails Container */
.ash-thumbnails-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 100%;
  overflow: hidden;
}

.ash-scroll-button {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: rgba(240, 147, 251, 0.2);
  border: 2px solid rgba(240, 147, 251, 0.3);
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.ash-scroll-button:hover {
  background: rgba(240, 147, 251, 0.8);
  border-color: rgba(240, 147, 251, 1);
  transform: scale(1.1);
}

.ash-thumbnails-horizontal {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  padding: 20px 10px;
  flex: 1;
  scrollbar-width: thin;
  scrollbar-color: rgba(240, 147, 251, 0.5) rgba(255, 255, 255, 0.1);
  max-width: 100%;
}

.ash-thumbnails-horizontal::-webkit-scrollbar {
  height: 8px;
}

.ash-thumbnails-horizontal::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.ash-thumbnails-horizontal::-webkit-scrollbar-thumb {
  background: rgba(240, 147, 251, 0.5);
  border-radius: 10px;
}

.ash-thumbnails-horizontal::-webkit-scrollbar-thumb:hover {
  background: rgba(240, 147, 251, 0.8);
}

.ash-thumbnail-card {
  flex: 0 0 280px;
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.ash-mobile-thumbnail {
  flex: 0 0 180px;
}

.ash-thumbnail-wrapper {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(17, 24, 39, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  aspect-ratio: 16/10;
}

.ash-mobile-thumbnail-wrapper {
  aspect-ratio: 9/16;
}

.ash-thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.ash-thumbnail-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(240, 147, 251, 0.9), rgba(245, 87, 108, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.ash-play-button {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  color: #f093fb;
  transform: scale(0.8);
  transition: all 0.3s ease;
}

.ash-thumbnail-card:hover .ash-thumbnail-overlay {
  opacity: 1;
}

.ash-thumbnail-card:hover .ash-play-button {
  transform: scale(1);
}

.ash-thumbnail-card:hover .ash-thumbnail-wrapper {
  transform: translateY(-4px);
  border-color: rgba(240, 147, 251, 0.5);
  box-shadow: 0 20px 40px rgba(240, 147, 251, 0.3);
}

.ash-thumbnail-card:hover .ash-thumbnail-image {
  transform: scale(1.05);
}

/* Active Thumbnail */
.ash-thumbnail-active .ash-thumbnail-wrapper {
  border-color: rgba(240, 147, 251, 0.8);
  background: rgba(240, 147, 251, 0.1);
  box-shadow: 0 0 0 4px rgba(240, 147, 251, 0.2);
}

.ash-thumbnail-active .ash-thumbnail-label {
  color: #f9a8d4;
}

.ash-thumbnail-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  padding: 0 4px;
  color: #e9d5ff;
  transition: all 0.3s ease;
}

.ash-thumbnail-number {
  font-size: 14px;
  font-weight: 800;
  color: #f093fb;
  background: rgba(240, 147, 251, 0.15);
  padding: 4px 10px;
  border-radius: 6px;
  font-family: 'Monaco', monospace;
}

.ash-thumbnail-name {
  font-size: 15px;
  font-weight: 600;
}

/* Animation */
@keyframes ash-slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ash-fade-in {
  animation: ash-slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive Design for Screenshots */
@media (max-width: 1024px) {
  .ash-thumbnail-card {
    flex: 0 0 240px;
  }
  
  .ash-mobile-thumbnail {
    flex: 0 0 160px;
  }
}

@media (max-width: 768px) {
  .ash-screenshots-section {
    padding: 60px 20px;
  }

  .ash-screenshots-heading {
    font-size: 36px;
  }

  .ash-screenshots-subheading {
    font-size: 16px;
    margin-bottom: 40px;
  }

  .ash-featured-screenshot {
    padding: 20px;
  }

  .ash-screenshot-frame {
    margin-bottom: 24px;
  }

  .ash-screenshot-image {
    min-height: 300px;
  }

  .ash-screenshot-title {
    font-size: 24px;
  }

  .ash-browser-url {
    display: none;
  }

  .ash-thumbnail-card {
    flex: 0 0 200px;
  }
  
  .ash-mobile-thumbnail {
    flex: 0 0 140px;
  }
  
  .ash-scroll-button {
    width: 40px;
    height: 40px;
  }

  .ash-mobile-frame {
    width: 320px;
    height: 660px;
    border-radius: 32px;
    padding: 10px;
    border: 6px solid #0f172a;
  }

  .ash-mobile-notch {
    width: 120px;
    height: 24px;
  }
}

@media (max-width: 480px) {
  .ash-screenshots-heading {
    font-size: 28px;
  }

  .ash-screenshot-title {
    font-size: 20px;
  }

  .ash-screenshot-description {
    font-size: 14px;
  }

  .ash-browser-bar {
    padding: 12px 16px;
  }

  .ash-dot {
    width: 10px;
    height: 10px;
  }

  .ash-mobile-frame {
    width: 280px;
    height: 580px;
  }
}
      `}</style>
    </div>
  );
};

export default WeddingProjectDetail