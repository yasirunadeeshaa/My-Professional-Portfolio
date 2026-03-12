import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Award, Zap, Code2, Sparkles, CheckCircle2, Play, Download, Monitor, Smartphone, Globe, Lock, TrendingUp, Activity, FileText, MessageSquare, Bell, Shield, Building2, Key, BadgeCheck } from 'lucide-react';
// Import all images
import doctor1 from '../assets/doctor1.jpg';
import heroImg from '../assets/Health/Hero.png';
import doctorDashboard from '../assets/Health/doctordashboard.png';
import doctorAnalytics from '../assets/Health/doctoranalytics.png';
import calendarImg from '../assets/Health/calendar.png';
import myPatient from '../assets/Health/mypatient.png';
import goals from '../assets/Health/goals.png';
import booking from '../assets/Health/booking.png';
import accessPage from '../assets/Health/access page.png';
import services from '../assets/Health/services.png';
import reviewRating from '../assets/Health/reviewand rating.png';
import vendors from '../assets/Health/vendors.png';
import vitalAnalyse from '../assets/Health/vitalanalyse.png';

const HealthcareProjectDetail = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const thumbnailScrollRef = React.useRef(null);

  const scrollThumbnails = (direction) => {
    if (thumbnailScrollRef.current) {
      const scrollAmount = 300;
      thumbnailScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevious = () => {
    setActiveScreenshot((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const technologies = [
    { name: 'React', category: 'Frontend', icon: '⚛️', color: '#61dafb' },
    { name: 'Vue.js', category: 'Frontend', icon: '💚', color: '#42b883' },

    { name: 'Java', category: 'Backend', icon: '☕', color: '#007396' },
    { name: 'Python', category: 'Backend', icon: '🐍', color: '#3776ab' },
    { name: 'Spring Boot', category: 'Backend', icon: '🍃', color: '#6db33f' },

    { name: 'MySQL', category: 'Database', icon: '🐬', color: '#4479a1' },
    { name: 'MongoDB', category: 'Database', icon: '🍃', color: '#47a248' },
    { name: 'Redis', category: 'Database', icon: '🔴', color: '#dc382d' },

    { name: 'Redux', category: 'State Management', icon: '🔄', color: '#764abc' },

    { name: 'Socket.io', category: 'Real-time', icon: '🔌', color: '#010101' },
    { name: 'WebRTC', category: 'Real-time', icon: '📹', color: '#333333' },
    { name: 'MQTT', category: 'Real-time', icon: '📡', color: '#660066' },
    { name: 'GraphQL Subscriptions', category: 'Real-time', icon: '⚡', color: '#e10098' },

    { name: 'Docker', category: 'DevOps', icon: '🐳', color: '#2496ed' },
    { name: 'Kubernetes', category: 'DevOps', icon: '⚓', color: '#326ce5' },
    { name: 'Jenkins', category: 'DevOps', icon: '🔧', color: '#d24939' },
    { name: 'GitHub Actions', category: 'DevOps', icon: '🚀', color: '#2088ff' },
    { name: 'Terraform', category: 'DevOps', icon: '🏗️', color: '#7b42bc' },

    { name: 'AWS', category: 'Cloud', icon: '☁️', color: '#ff9900' },
    { name: 'Azure', category: 'Cloud', icon: '☁️', color: '#0089d6' },
    { name: 'Google Cloud', category: 'Cloud', icon: '☁️', color: '#4285f4' },
    { name: 'Netlify', category: 'Cloud', icon: '💎', color: '#00c7b7' },

    { name: 'Stripe', category: 'Payments', icon: '💳', color: '#635bff' },
    { name: 'PayPal', category: 'Payments', icon: '💰', color: '#00457c' },

    { name: 'Bootstrap', category: 'Styling', icon: '🅱️', color: '#7952b3' },
    { name: 'Styled Components', category: 'Styling', icon: '💅', color: '#db7093' },

    { name: 'Jest', category: 'Testing', icon: '🃏', color: '#c21325' },

    { name: 'Git', category: 'Version Control', icon: '📚', color: '#f05032' },
    { name: 'GitHub', category: 'Version Control', icon: '🐙', color: '#181717' },

    { name: 'Vite', category: 'Build Tools', icon: '⚡', color: '#646cff' }
  ];

 const features = [
  {
    title: 'AI-Powered Health Predictions',
    description: 'Machine learning algorithms analyze patient data to predict future health risks like diabetes and provide personalized preventive care recommendations.',
    icon: <Sparkles />,
    color: '#667eea'
  },
  {
    title: 'Comprehensive Patient Management',
    description: 'Complete medical records including immunization history, medications, allergies, lab reports, and vital signs with interactive trend visualization.',
    icon: <Users />,
    color: '#764ba2'
  },
  {
    title: 'Smart Appointment System',
    description: 'Seamless appointment booking and scheduling system connecting patients with doctors, with automated reminders and calendar integration.',
    icon: <Calendar />,
    color: '#f093fb'
  },
  {
    title: 'Health Analytics Dashboard',
    description: 'Interactive graphs and charts displaying vital signs trends over time, helping patients and doctors track health progress effectively.',
    icon: <Activity />,
    color: '#4facfe'
  },
  {
    title: 'AI Medical Report Reader',
    description: 'Intelligent document analysis that automatically processes and extracts key insights from medical reports, making complex information easily understandable.',
    icon: <FileText />,
    color: '#43e97b'
  },
  {
    title: 'JWT Authentication System',
    description: 'Secure token-based authentication ensuring protected access to sensitive medical data with automatic session management and refresh tokens.',
    icon: <Key />,
    color: '#764ba2'
  },
  {
    title: 'Doctor Verification System',
    description: 'Robust credential verification process for healthcare providers, ensuring only qualified and licensed medical professionals can access the platform.',
    icon: <BadgeCheck />,
    color: '#764ba2'
  },
  {
    title: 'Real-Time Messaging System',
    description: 'Secure in-app messaging between patients and healthcare providers for quick consultations, follow-ups, and medical queries.',
    icon: <MessageSquare />,
    color: '#fa709a'
  },
  {
    title: 'Smart Notifications',
    description: 'Automated alerts for appointments, medication reminders, test results, and important health updates to keep all users informed.',
    icon: <Bell />,
    color: '#667eea'
  },
  {
    title: 'Multi-Role Access System',
    description: 'Role-based access control for Admin, Doctor, Patient, and Vendors (pharmacies, hospitals, labs) with secure authentication and permissions.',
    icon: <Shield />,
    color: '#764ba2'
  },
  {
    title: 'Vendor Management',
    description: 'Integrated system for managing pharmacies, hospitals, and laboratories, streamlining healthcare service coordination.',
    icon: <Building2 />,
    color: '#4facfe'
  },
  {
    title: 'Secure Data Storage',
    description: 'HIPAA-compliant encrypted storage with comprehensive audit trails ensuring patient data privacy and security.',
    icon: <Lock />,
    color: '#43e97b'
  }
];

const screenshots = [
    {
      id: 1,
      title: 'Healthcare Website',
      url: heroImg,
      description: 'Modern landing page showcasing healthcare services with intuitive navigation and hero section'
    },
    {
      id: 2,
      title: 'Doctor Dashboard',
      url: doctorDashboard,
      description: 'Comprehensive overview of appointments, patient statistics, and daily schedule for healthcare providers'
    },
    {
      id: 3,
      title: 'Doctor Analytics',
      url: doctorAnalytics,
      description: 'Advanced analytics displaying patient trends, consultation metrics, and performance insights'
    },
    {
      id: 4,
      title: 'Doctor Schedule Calendar',
      url: calendarImg,
      description: 'Interactive calendar for managing appointments, availability, and scheduling consultations'
    },
    {
      id: 5,
      title: 'Doctors My Patients',
      url: myPatient,
      description: 'Complete patient management interface with medical history, records, and treatment plans'
    },
    {
      id: 6,
      title: 'Health Goals',
      url: goals,
      description: 'Patient health goal tracking system with progress visualization and milestone achievements'
    },
    {
      id: 7,
      title: 'Booking Dashboard',
      url: booking,
      description: 'Seamless appointment booking interface with doctor selection and time slot availability'
    },
    {
      id: 8,
      title: 'Access Settings',
      url: accessPage,
      description: 'Role-based access control panel for managing user permissions and security settings'
    },
    {
      id: 9,
      title: 'Health Nexus Services',
      url: services,
      description: 'Comprehensive overview of healthcare services, specializations, and medical offerings'
    },
    {
      id: 10,
      title: 'Review and Rating',
      url: reviewRating,
      description: 'Patient feedback system displaying doctor ratings, reviews, and testimonials'
    },
    {
      id: 11,
      title: 'HealthNexus Vendors',
      url: vendors,
      description: 'Vendor management portal for pharmacies, laboratories, and hospital partnerships'
    },
    {
      id: 12,
      title: 'Vital Signs Analytics Dashboard',
      url: vitalAnalyse,
      description: 'Real-time vital signs monitoring with interactive graphs and health trend analysis'
    }
  ];
  const projectStats = [
    { label: 'Development Time', value: '18 Months', icon: <Calendar /> },
    { label: 'Team Size', value: '1 Member', icon: <Users /> },
    { label: 'Target Users', value: '10,000+', icon: <TrendingUp /> }
  ];

  const achievements = [
    'Featured in TechCrunch Healthcare Section',
    '99.9% Uptime Achievement',
    'HIPAA Compliance Certified',
    'ISO 27001 Security Standard'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hpd-container">
      {/* Hero Section */}
      <section className="hpd-hero">
  <div className="hpd-hero-background">
    <div className="hpd-gradient-blur hpd-blur-1"></div>
    <div className="hpd-gradient-blur hpd-blur-2"></div>
    <div className="hpd-grid-pattern"></div>
  </div>
  
  <div className="hpd-hero-content">
    <div className="hpd-hero-left">
      <button className="hpd-back-btn" onClick={() => navigate('/')}>
        <ArrowLeft size={20} />
        <span>Back to Projects</span>
      </button>

      <div className="hpd-hero-badge">
        <Sparkles size={16} />
        <span>Final Year Project • 2026</span>
      </div>

      <h1 className="hpd-hero-title">
        Next-Generation<br />
        <span className="hpd-gradient-text">Healthcare Platform</span>
      </h1>

      <p className="hpd-hero-subtitle">
        Transforming patient care through AI-powered diagnostics, predictive health analytics, 
        and seamless telemedicine integration. Built for the future of healthcare delivery.
      </p>

      <div className="hpd-hero-stats">
        {projectStats.map((stat, index) => (
          <div key={index} className="hpd-stat-card">
            <div className="hpd-stat-icon">{stat.icon}</div>
            <div className="hpd-stat-content">
              <div className="hpd-stat-value">{stat.value}</div>
              <div className="hpd-stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="hpd-hero-actions">
        <button className="hpd-btn-primary">
          <ExternalLink size={20} />
          <span>View Live Demo</span>
        </button>
        <button className="hpd-btn-secondary">
          <Github size={20} />
          <span>View Source Code</span>
        </button>
      </div>
    </div>

    <div className="hpd-hero-right">
      <div className="hpd-hero-image-wrapper">
        <div className="hpd-image-float-card hpd-card-1">
          <Activity size={20} />
          <div>
            <div className="hpd-card-label">In Development</div>
            <div className="hpd-card-value">60%</div>
          </div>
        </div>
        
        <div className="hpd-image-float-card hpd-card-2">
          <CheckCircle2 size={20} />
          <div>
            <div className="hpd-card-label">Target Success Rate</div>
            <div className="hpd-card-value">98%</div>
          </div>
        </div>

        <img 
          src={doctor1}
          alt="Healthcare Professional" 
          className="hpd-hero-image"
        />
        <div className="hpd-image-glow"></div>
        <div className="hpd-image-border"></div>
      </div>
    </div>
  </div>
</section>

      {/* Navigation Tabs */}
      <section className="hpd-tabs-section">
        <div className="hpd-tabs-container">
          <div className="hpd-tabs">
            {['overview', 'features', 'technologies', 'documentation'].map((tab) => (
              <button
                key={tab}
                className={`hpd-tab ${activeTab === tab ? 'hpd-tab-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="hpd-content-wrapper">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <section className="hpd-section hpd-fade-in">
            <div className="hpd-section-grid">
              <div className="hpd-overview-main">
                <h2 className="hpd-section-title">Project Overview</h2>
                <div className="hpd-overview-content">
                  <p className="hpd-text">
                    The Healthcare Application is a comprehensive digital health platform designed to bridge 
                    the gap between healthcare providers, patients, and medical vendors. Built as my final 
                    year project, this system integrates artificial intelligence, secure data management, 
                    and real-time analytics to deliver a seamless healthcare ecosystem for all stakeholders.
                  </p>
                  
                  <h3 className="hpd-subsection-title">Problem Statement</h3>
                  <p className="hpd-text">
                    Traditional healthcare systems struggle with fragmented patient data, limited accessibility 
                    to medical records, inefficient appointment management, and lack of predictive health 
                    insights. Healthcare providers often lack comprehensive patient history during consultations, 
                    while patients have limited visibility into their health trends and future risk factors.
                  </p>

                  <h3 className="hpd-subsection-title">Solution</h3>
                  <p className="hpd-text">
                    Our platform provides an integrated healthcare ecosystem with three user roles: Admin, 
                    Doctor, and Patient, along with vendor management for pharmacies, hospitals, and laboratories. 
                    Patients can easily book appointments and access their complete medical history visualized 
                    through interactive graphs showing vital signs trends over time. Doctors can view comprehensive 
                    patient profiles including immunization records, current medications, allergies, lab reports, 
                    and vital signs history, enabling informed decision-making during consultations.
                  </p>
                  
                  <p className="hpd-text">
                    The system leverages machine learning to analyze patient health data and predict potential 
                    health risks, such as diabetes development within the next year, providing personalized 
                    preventive care recommendations. Our AI-powered report analysis feature automatically 
                    processes medical documents, extracting key insights and making complex medical information 
                    easily understandable for both patients and healthcare providers.
                  </p>
                  <h3 className="hpd-subsection-title">Technical Highlights</h3>
                  <div className="hpd-highlights">
                    <div className="hpd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>Server-Side Rendering (SSR) with Next.js for optimal SEO and performance</span>
                    </div>
                    <div className="hpd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>Microservices architecture with independent scaling capabilities</span>
                    </div>
                    <div className="hpd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>Redis caching layer reducing database load by 70%</span>
                    </div>
                    <div className="hpd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>GraphQL API for efficient data fetching and reduced payload sizes</span>
                    </div>
                    <div className="hpd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>Progressive Web App (PWA) with offline capabilities</span>
                    </div>
                    <div className="hpd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>Automated CI/CD pipeline with zero-downtime deployments</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hpd-overview-sidebar">
                <div className="hpd-info-card">
                  <h3 className="hpd-info-title">Project Details</h3>
                  <div className="hpd-info-list">
                    <div className="hpd-info-item">
                      <span className="hpd-info-label">Status</span>
                      <span className="hpd-info-value hpd-status-live">
                        <span className="hpd-status-dot"></span>
                        In Development
                      </span>
                    </div>
                    <div className="hpd-info-item">
                      <span className="hpd-info-label">Timeline</span>
                      <span className="hpd-info-value">Jan 2024 - Present</span>
                    </div>
                    <div className="hpd-info-item">
                      <span className="hpd-info-label">Role</span>
                      <span className="hpd-info-value">Full Stack Developer</span>
                    </div>
                    <div className="hpd-info-item">
                      <span className="hpd-info-label">Category</span>
                      <span className="hpd-info-value">Healthcare, AI/ML</span>
                    </div>
                  </div>
                </div>

                <div className="hpd-info-card">
                  <h3 className="hpd-info-title">Platform Support</h3>
                  <div className="hpd-platform-icons">
                    <div className="hpd-platform-item">
                      <Monitor size={24} />
                      <span>Web</span>
                    </div>
                    <div className="hpd-platform-item">
                      <Smartphone size={24} />
                      <span>Mobile</span>
                    </div>
                    <div className="hpd-platform-item">
                      <Globe size={24} />
                      <span>Cloud</span>
                    </div>
                  </div>
                </div>

                <div className="hpd-info-card">
                  <h3 className="hpd-info-title">Future Achievements</h3>
                  <div className="hpd-achievements-grid">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="hpd-achievement-item">
                        <Award size={18} className="hpd-achievement-icon" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        {activeTab === 'features' && (
          <section className="hpd-section hpd-fade-in">
            <h2 className="hpd-section-title">Core Features</h2>
            <div className="hpd-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="hpd-feature-card">
                  <div className="hpd-feature-icon" style={{ background: `${feature.color}15`, color: feature.color }}>
                    {feature.icon}
                  </div>
                  <h3 className="hpd-feature-title">{feature.title}</h3>
                  <p className="hpd-feature-description">{feature.description}</p>
                  <div className="hpd-feature-gradient" style={{ background: `linear-gradient(135deg, ${feature.color}20, transparent)` }}></div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technologies Section */}
        {activeTab === 'technologies' && (
          <section className="hpd-section hpd-fade-in">
            <h2 className="hpd-section-title">Technology Stack</h2>
            <p className="hpd-section-description">
              Built with modern, scalable technologies ensuring high performance, security, and maintainability.
            </p>
            <div className="hpd-tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="hpd-tech-card">
                  <div className="hpd-tech-icon">{tech.icon}</div>
                  <div className="hpd-tech-content">
                    <h3 className="hpd-tech-name">{tech.name}</h3>
                    <span className="hpd-tech-category">{tech.category}</span>
                  </div>
                  <div className="hpd-tech-indicator" style={{ background: tech.color }}></div>
                </div>
              ))}
            </div>

          </section>
        )}

        {/* Documentation Section */}
{activeTab === 'documentation' && (
  <section className="hpd-section hpd-fade-in">
    <h2 className="hpd-section-title">Technical Documentation</h2>
    <p className="hpd-section-description">
      Comprehensive technical documentation including architecture diagrams, database schemas, and sequence flows.
    </p>
    
    <div className="hpd-docs-grid">
      <div className="hpd-doc-card">
        <div className="hpd-doc-icon">🏗️</div>
        <h3>System Architecture</h3>
        <p>Complete system architecture with frontend, backend, and infrastructure layers.</p>
        <button className="hpd-btn-secondary" onClick={() => window.open('/public/docs/healthcare-architecture-diagram.html', '_blank')}>
          <FileText size={20} />
          <span>View Architecture</span>
        </button>
      </div>

      <div className="hpd-doc-card">
        <div className="hpd-doc-icon">🗄️</div>
        <h3>Database Schema</h3>
        <p>Detailed database design with entity relationships and table structures.</p>
        <button className="hpd-btn-secondary" onClick={() => window.open('/public/docs/healthcare-database-schema.html', '_blank')}>
          <FileText size={20} />
          <span>View Schema</span>
        </button>
      </div>

      <div className="hpd-doc-card">
        <div className="hpd-doc-icon">🔄</div>
        <h3>Sequence Diagrams</h3>
        <p>Visual workflows for registration, booking, consultations, and prescriptions.</p>
        <button className="hpd-btn-secondary" onClick={() => window.open('/public/docs/healthcare-sequence-diagrams.html', '_blank')}>
          <FileText size={20} />
          <span>View Diagrams</span>
        </button>
      </div>
    </div>
  </section>
)}
      </div>

      <div className="ash-screenshots-section ash-fade-in">
        <h2 className="ash-screenshots-heading">Application Overview</h2>
        <p className="ash-screenshots-subheading">
          Explore the intuitive interface and powerful features of our healthcare platform
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
                <div className="ash-browser-url">healthcare-app.demo</div>
              </div>
              
              <img 
                src={screenshots[activeScreenshot].url} 
                alt={screenshots[activeScreenshot].title}
                className="ash-screenshot-image"
              />
            </div>
            
            <div className="ash-screenshot-details">
              <h3 className="ash-screenshot-title">{screenshots[activeScreenshot].title}</h3>
              <p className="ash-screenshot-description">{screenshots[activeScreenshot].description}</p>
            </div>
          </div>

          <div className="ash-thumbnails-container">
  <button className="ash-scroll-button ash-scroll-left" onClick={() => scrollThumbnails('left')}>
    <ArrowLeft size={24} />
  </button>
  
  <div className="ash-thumbnails-horizontal" ref={thumbnailScrollRef}>
    {screenshots.map((screenshot, index) => (
      <div
        key={screenshot.id}
        className={`ash-thumbnail-card ${activeScreenshot === index ? 'ash-thumbnail-active' : ''}`}
        onClick={() => setActiveScreenshot(index)}
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

  <button className="ash-scroll-button ash-scroll-right" onClick={() => scrollThumbnails('right')}>
    <ArrowLeft size={24} style={{ transform: 'rotate(180deg)' }} />
  </button>
</div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="hpd-cta-section">
        <div className="hpd-cta-content">
          <h2 className="hpd-cta-title">Interested in Learning More?</h2>
          <p className="hpd-cta-description">
            Get in touch to discuss this project in detail or explore collaboration opportunities.
          </p>
          <div className="hpd-cta-buttons">
          
            <button className="hpd-btn-primary" onClick={() => window.location.href = 'https://health-nexus.netlify.app/'}>
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

        .hpd-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          color: white;
        }

        /* Hero Section */
.hpd-hero {
  position: relative;
  padding: 120px 60px 80px;
  overflow: hidden;
  width: 100%;
}

.hpd-hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.hpd-gradient-blur {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
}

.hpd-blur-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.4), transparent);
  top: -200px;
  right: -100px;
}

.hpd-blur-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(118, 75, 162, 0.3), transparent);
  bottom: -150px;
  left: -100px;
}

/* Grid Pattern Background */
.hpd-grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(102, 126, 234, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(102, 126, 234, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
}

/* Hero Content Grid */
.hpd-hero-content {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  align-items: center;
}

.hpd-hero-left {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.hpd-hero-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Back Button */
.hpd-back-btn {
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
  align-self: flex-start;
}

.hpd-back-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(-5px);
}

/* Hero Badge */
.hpd-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(72, 187, 120, 0.2);
  border: 1px solid rgba(72, 187, 120, 0.3);
  border-radius: 50px;
  color: #86efac;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
  align-self: flex-start;
}

/* Hero Title */
.hpd-hero-title {
  font-size: 72px;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -2px;
}

.hpd-gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Hero Subtitle */
.hpd-hero-subtitle {
  font-size: 20px;
  color: #cbd5e1;
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: 48px;
}

/* Hero Stats */
.hpd-hero-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  max-width: 600px;
}

.hpd-stat-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
}

.hpd-stat-card:hover {
  transform: translateY(-4px);
  border-color: rgba(102, 126, 234, 0.3);
}

.hpd-stat-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  color: #667eea;
  flex-shrink: 0;
}

.hpd-stat-content {
  flex: 1;
}

.hpd-stat-value {
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 4px;
}

.hpd-stat-label {
  font-size: 13px;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

/* Hero Actions */
.hpd-hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.hpd-btn-primary, .hpd-btn-secondary {
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

.hpd-btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
}

.hpd-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 50px rgba(102, 126, 234, 0.5);
}

.hpd-btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: blur(10px);
}

.hpd-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}


/* Hero Image Wrapper */
.hpd-hero-image-wrapper {
  position: relative;
  width: 100%;
  max-width: 550px;
  aspect-ratio: 1;
}

.hpd-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
  transition: all 0.5s ease;
  position: relative;
  z-index: 2;
}

.hpd-hero-image:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 40px 100px rgba(102, 126, 234, 0.4);
}

/* Image Glow Effect */
.hpd-image-glow {
  position: absolute;
  inset: -30px;
  background: radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.4), rgba(118, 75, 162, 0.3), transparent 70%);
  filter: blur(60px);
  z-index: 1;
  opacity: 0.6;
  animation: hpd-glow-pulse 4s ease-in-out infinite;
}

@keyframes hpd-glow-pulse {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

/* Image Border Animation */
.hpd-image-border {
  position: absolute;
  inset: -2px;
  border-radius: 30px;
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #4facfe);
  background-size: 300% 300%;
  z-index: 1;
  opacity: 0.3;
  animation: hpd-border-rotate 8s ease infinite;
}

@keyframes hpd-border-rotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Floating Stats Cards */
.hpd-image-float-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: rgba(17, 24, 39, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  backdrop-filter: blur(20px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  z-index: 3;
  animation: hpd-float 3s ease-in-out infinite;
}

.hpd-card-1 {
  top: 10%;
  right: -10%;
  animation-delay: 0s;
  color: #4facfe;
}

.hpd-card-2 {
  bottom: 15%;
  left: -10%;
  animation-delay: 1.5s;
  color: #43e97b;
}

@keyframes hpd-float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

.hpd-card-label {
  font-size: 12px;
  color: #94a3b8;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hpd-card-value {
  font-size: 20px;
  font-weight: 800;
  color: white;
  margin-top: 2px;
}

/* Responsive Design for Hero */
@media (max-width: 1200px) {
  .hpd-hero-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .hpd-hero-right {
    order: -1;
  }

  .hpd-hero-image-wrapper {
    max-width: 450px;
    margin: 0 auto;
  }

  .hpd-hero-title {
    font-size: 56px;
  }

  .hpd-hero-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .hpd-card-1 {
    right: -5%;
  }

  .hpd-card-2 {
    left: -5%;
  }
}

@media (max-width: 768px) {
  .hpd-hero {
    padding: 80px 20px 60px;
  }

  .hpd-hero-title {
    font-size: 42px;
  }

  .hpd-hero-subtitle {
    font-size: 16px;
  }

  .hpd-hero-stats {
    grid-template-columns: 1fr;
  }

  .hpd-hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .hpd-btn-primary, .hpd-btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .hpd-hero-image-wrapper {
    max-width: 100%;
  }

  .hpd-image-float-card {
    display: none;
  }

}

@media (max-width: 480px) {
  .hpd-hero-title {
    font-size: 32px;
  }

  .hpd-hero-subtitle {
    font-size: 14px;
  }

  .hpd-stat-card {
    padding: 16px;
  }

  .hpd-stat-value {
    font-size: 24px;
  }

  .hpd-stat-icon {
    width: 40px;
    height: 40px;
  }
}

        /* Tabs Section */
        .hpd-tabs-section {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(15, 15, 35, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0 60px;
        }

        .hpd-tabs-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .hpd-tabs {
          display: flex;
          gap: 8px;
          overflow-x: auto;
        }

        .hpd-tab {
          padding: 20px 32px;
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          white-space: nowrap;
        }

        .hpd-tab:hover {
          color: white;
        }

        .hpd-tab-active {
          color: white;
        }

        .hpd-tab-active::after {
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
        .hpd-content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px;
          padding-bottom: 10px;
        }

        .hpd-section {
          margin-bottom: 80px;
        }

        .hpd-fade-in {
          animation: hpd-fadeIn 0.6s ease-out;
        }

        @keyframes hpd-fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hpd-section-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hpd-section-description {
          font-size: 18px;
          color: #cbd5e1;
          margin-bottom: 48px;
          max-width: 800px;
        }

        /* Overview Section */
        .hpd-section-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
        }

        .hpd-overview-content {
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(20px);
        }

        .hpd-text {
          font-size: 16px;
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .hpd-subsection-title {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
          margin-top: 32px;
        }

        .hpd-achievements-grid {
          display: grid;
          gap: 16px;
          margin-top: 24px;
        }

        .hpd-achievement-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid rgba(251, 191, 36, 0.2);
          border-radius: 12px;
          color: #fcd34d;
          font-size: 15px;
          font-weight: 600;
        }

        .hpd-achievement-icon {
          flex-shrink: 0;
        }

        .hpd-overview-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .hpd-info-card {
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 32px;
          backdrop-filter: blur(20px);
        }

        .hpd-info-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 24px;
          color: white;
        }

        .hpd-info-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .hpd-info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hpd-info-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .hpd-info-label {
          font-size: 14px;
          color: #94a3b8;
          font-weight: 600;
        }

        .hpd-info-value {
          font-size: 15px;
          color: white;
          font-weight: 700;
        }

        .hpd-status-live {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #86efac;
        }

        .hpd-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: currentColor;
          animation: hpd-pulse 2s ease-in-out infinite;
        }
          
        .hpd-highlights {
          display: grid;
          gap: 12px;
          margin-top: 24px;
        }

        .hpd-highlight-item {
          display: flex;
          align-items: start;
          gap: 12px;
          padding: 16px;
          background: rgba(59, 130, 246, 0.1);
          border-left: 3px solid #3b82f6;
          border-radius: 8px;
          color: #cbd5e1;
          font-size: 15px;
        }

        .hpd-highlight-item svg {
          flex-shrink: 0;
          color: #3b82f6;
          margin-top: 2px;
        }

        @keyframes hpd-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .hpd-platform-icons {
          display: flex;
          gap: 20px;
          justify-content: space-around;
        }

        .hpd-platform-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 16px;
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 12px;
          color: #a5b4fc;
          font-size: 13px;
          font-weight: 600;
          flex: 1;
          transition: all 0.3s ease;
        }

        .hpd-platform-item:hover {
          background: rgba(102, 126, 234, 0.2);
          transform: translateY(-4px);
        }

        /* Features Section */
        .hpd-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
        }

        .hpd-feature-card {
          position: relative;
          padding: 32px;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(20px);
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .hpd-feature-card:hover {
          transform: translateY(-8px);
          border-color: rgba(102, 126, 234, 0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .hpd-feature-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .hpd-feature-card:hover .hpd-feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .hpd-feature-title {
          font-size: 22px;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
        }

        .hpd-feature-description {
          font-size: 15px;
          color: #94a3b8;
          line-height: 1.7;
        }

        .hpd-feature-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .hpd-feature-card:hover .hpd-feature-gradient {
          opacity: 0.1;
        }

        /* Technologies Section */
        .hpd-tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
        }

        .hpd-tech-card {
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

        .hpd-tech-card:hover {
          transform: translateY(-4px);
          border-color: rgba(102, 126, 234, 0.3);
        }

        .hpd-tech-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .hpd-tech-content {
          flex: 1;
        }

        .hpd-tech-name {
          font-size: 18px;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }

        .hpd-tech-category {
          font-size: 13px;
          color: #94a3b8;
          font-weight: 600;
        }

        .hpd-tech-indicator {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .hpd-tech-card:hover .hpd-tech-indicator {
          opacity: 1;
        }

        /* Architecture Section */
        .hpd-architecture-section {
          margin-top: 60px;
        }

        .hpd-architecture-card {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 40px;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(20px);
        }

        .hpd-architecture-layer {
          padding: 24px;
          background: rgba(102, 126, 234, 0.1);
          border: 2px solid rgba(102, 126, 234, 0.3);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .hpd-architecture-layer:hover {
          background: rgba(102, 126, 234, 0.15);
          transform: translateX(8px);
        }

        .hpd-layer-title {
          font-size: 18px;
          font-weight: 700;
          color: #a5b4fc;
          margin-bottom: 8px;
        }

        .hpd-layer-content {
          font-size: 15px;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .hpd-architecture-arrow {
          text-align: center;
          font-size: 24px;
          color: #667eea;
          font-weight: 700;
        }

        /* CTA Section */
        .hpd-cta-section {
          padding: 100px 60px;
          background: rgba(17, 24, 39, 0.6);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hpd-cta-content {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }

        .hpd-cta-title {
          font-size: 48px;
          font-weight: 900;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hpd-cta-description {
          font-size: 20px;
          color: #cbd5e1;
          margin-bottom: 40px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .hpd-cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
  .hpd-section-grid {
    grid-template-columns: 1fr;
  }

  .hpd-hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hpd-hero-right {
    order: -1;
  }

  .hpd-hero-title {
    font-size: 56px;
  }

  .hpd-hero-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

        @media (max-width: 768px) {
          .hpd-hero {
            padding: 80px 20px 60px;
          }

          .hpd-content-wrapper {
            padding: 60px 20px;
          }

          .hpd-tabs-section {
            padding: 0 20px;
          }

          .hpd-hero-title {
            font-size: 42px;
          }

          .hpd-section-title {
            font-size: 32px;
          }

          .hpd-hero-stats {
            grid-template-columns: 1fr;
          }

          .hpd-features-grid {
            grid-template-columns: 1fr;
          }

          .hpd-tech-grid {
            grid-template-columns: 1fr;
          }

          .hpd-main-screenshot {
            height: 400px;
          }

          .hpd-screenshot-thumbnails {
            grid-template-columns: repeat(2, 1fr);
          }

          .hpd-hero-actions {
            flex-direction: column;
          }

          .hpd-btn-primary, .hpd-btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .hpd-cta-section {
            padding: 60px 20px;
          }

          .hpd-cta-title {
            font-size: 36px;
          }

          .hpd-cta-buttons {
            flex-direction: column;
          }

          .hpd-tabs {
            overflow-x: scroll;
          }

          .hpd-architecture-card {
            padding: 24px;
          }

          .hpd-overview-content {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .hpd-hero-title {
            font-size: 32px;
          }

          .hpd-section-title {
            font-size: 28px;
          }

          .hpd-hero-subtitle {
            font-size: 16px;
          }

          .hpd-stat-card {
            padding: 16px;
          }

          .hpd-stat-value {
            font-size: 24px;
          }

          .hpd-tab {
            padding: 16px 20px;
            font-size: 14px;
          }

          .hpd-screenshot-thumbnails {
            grid-template-columns: 1fr;
          }
        }

        /* Screenshots Section */
.ash-screenshots-section {
  max-width: 1750px;
  margin: 0 auto;
  padding: 50px 60px;
  overflow: hidden;
}

.ash-screenshots-heading {
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.ash-screenshots-subheading {
  font-size: 18px;
  color: #94a3b8;
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
  color: #94a3b8;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.ash-screenshot-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.ash-screenshot-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  padding: 10px 20px;
  background: rgba(102, 126, 234, 0.15);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
}

.ash-badge-number {
  color: #a5b4fc;
  font-size: 20px;
}

.ash-badge-separator {
  color: rgba(255, 255, 255, 0.3);
}

.ash-badge-total {
  color: #64748b;
  font-size: 16px;
}

.ash-screenshot-title {
  font-size: 32px;
  font-weight: 800;
  color: white;
  letter-spacing: -0.5px;
}

.ash-screenshot-description {
  font-size: 16px;
  color: #94a3b8;
  line-height: 1.7;
  max-width: 700px;
}

/* Thumbnails Grid */
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
  background: rgba(102, 126, 234, 0.2);
  border: 2px solid rgba(102, 126, 234, 0.3);
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
  background: rgba(102, 126, 234, 0.8);
  border-color: rgba(102, 126, 234, 1);
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
  scrollbar-color: rgba(102, 126, 234, 0.5) rgba(255, 255, 255, 0.1);
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
  background: rgba(102, 126, 234, 0.5);
  border-radius: 10px;
}

.ash-thumbnails-horizontal::-webkit-scrollbar-thumb:hover {
  background: rgba(102, 126, 234, 0.8);
}

.ash-thumbnail-card {
  flex: 0 0 280px;
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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

.ash-thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.ash-thumbnail-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
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
  color: #667eea;
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
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

.ash-thumbnail-card:hover .ash-thumbnail-image {
  transform: scale(1.05);
}

/* Active Thumbnail */
.ash-thumbnail-active .ash-thumbnail-wrapper {
  border-color: rgba(102, 126, 234, 0.8);
  background: rgba(102, 126, 234, 0.1);
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.2);
}

.ash-thumbnail-active .ash-thumbnail-label {
  color: #a5b4fc;
}

.ash-thumbnail-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  padding: 0 4px;
  color: #94a3b8;
  transition: all 0.3s ease;
}

.ash-thumbnail-number {
  font-size: 14px;
  font-weight: 800;
  color: #667eea;
  background: rgba(102, 126, 234, 0.15);
  padding: 4px 10px;
  border-radius: 6px;
  font-family: 'Monaco', monospace;
}

.ash-thumbnail-name {
  font-size: 15px;
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .ash-thumbnail-card {
    flex: 0 0 240px;
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
  
  .ash-scroll-button {
    width: 40px;
    height: 40px;
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

.hpd-docs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.hpd-doc-card {
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
}

.hpd-doc-card:hover {
  transform: translateY(-8px);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
}

.hpd-doc-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.hpd-doc-card h3 {
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
}

.hpd-doc-card p {
  font-size: 15px;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 24px;
}

      `}</style>
    </div>
  );
};

export default HealthcareProjectDetail;