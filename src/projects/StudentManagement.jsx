import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Award, GraduationCap, Code2, CheckCircle2, Play, Download, Monitor, Smartphone, Globe, Lock, TrendingUp, Activity, BookOpen, ClipboardList, BarChart3, Bell, FileText, UserCheck } from 'lucide-react';

const StudentManagementDetail = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const technologies = [
    { name: 'React', category: 'Frontend', icon: '⚛️', color: '#61dafb' },
    { name: 'TypeScript', category: 'Language', icon: '📘', color: '#3178c6' },
    { name: 'Node.js', category: 'Backend', icon: '🟢', color: '#68a063' },
    { name: 'Express.js', category: 'Framework', icon: '⚡', color: '#000000' },
    { name: 'MongoDB', category: 'Database', icon: '🍃', color: '#47a248' },
    { name: 'Redux', category: 'State Mgmt', icon: '🔄', color: '#764abc' },
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨', color: '#06b6d4' },
    { name: 'JWT', category: 'Authentication', icon: '🔐', color: '#000000' },
    { name: 'Socket.io', category: 'Real-time', icon: '🔌', color: '#010101' },
    { name: 'Docker', category: 'DevOps', icon: '🐳', color: '#2496ed' }
  ];

  const features = [
    {
      title: 'Student Portal',
      description: 'Comprehensive student dashboard for viewing grades, attendance, assignments, and course schedules with personalized learning analytics.',
      icon: <GraduationCap />,
      color: '#3b82f6'
    },
    {
      title: 'Attendance Management',
      description: 'Real-time attendance tracking with biometric integration, automated reports, and parent notifications for absenteeism.',
      icon: <UserCheck />,
      color: '#10b981'
    },
    {
      title: 'Grade Management',
      description: 'Digital gradebook with automatic GPA calculation, performance analytics, semester reports, and grade distribution insights.',
      icon: <BarChart3 />,
      color: '#8b5cf6'
    },
    {
      title: 'Assignment Tracking',
      description: 'Assignment submission portal with deadline reminders, file uploads, plagiarism detection, and instructor feedback system.',
      icon: <ClipboardList />,
      color: '#f59e0b'
    },
    {
      title: 'Course Management',
      description: 'Complete course catalog with enrollment system, prerequisite tracking, capacity management, and schedule optimization.',
      icon: <BookOpen />,
      color: '#ec4899'
    },
    {
      title: 'Communication Hub',
      description: 'Integrated messaging system with announcements, notifications, parent-teacher communication, and event calendars.',
      icon: <Bell />,
      color: '#06b6d4'
    }
  ];

  const screenshots = [
    {
      id: 1,
      title: 'Student Dashboard',
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop',
      description: 'Modern student portal with comprehensive academic overview'
    },
    {
      id: 2,
      title: 'Attendance Tracking',
      url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=800&fit=crop',
      description: 'Real-time attendance monitoring and reporting system'
    },
    {
      id: 3,
      title: 'Grade Management',
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop',
      description: 'Interactive gradebook with analytics and insights'
    },
    {
      id: 4,
      title: 'Admin Dashboard',
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      description: 'Comprehensive administrative control panel'
    }
  ];

  const projectStats = [
    { label: 'Development Time', value: '6 Months', icon: <Calendar /> },
    { label: 'Team Size', value: '1 Member', icon: <Users /> },
    { label: 'Active Students', value: '5,000+', icon: <GraduationCap /> },
    { label: 'System Uptime', value: '99.8%', icon: <TrendingUp /> }
  ];

  const achievements = [
    'Best Academic Software Solution 2024',
    'Featured in EdTech Innovation Forum',
    'Implemented in 15+ Educational Institutions',
    'ISO 27001 Security Compliance',
    'FERPA Compliant Data Management',
    'Average Response Time Under 200ms'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="smd-container">
      {/* Hero Section */}
      <section className="smd-hero">
        <div className="smd-hero-background">
          <div className="smd-gradient-blur smd-blur-1"></div>
          <div className="smd-gradient-blur smd-blur-2"></div>
          <div className="smd-gradient-blur smd-blur-3"></div>
        </div>
        
        <div className="smd-hero-content">
          <button className="smd-back-btn">
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </button>

          <div className="smd-hero-badge">
            <GraduationCap size={16} />
            <span>Academic Management System</span>
          </div>

          <h1 className="smd-hero-title">
            Student <span className="smd-gradient-text">Management</span> System
          </h1>

          <p className="smd-hero-subtitle">
            Comprehensive academic management platform streamlining student records, attendance tracking, 
            grade management, and parent-teacher communication for modern educational institutions.
          </p>

          <div className="smd-hero-stats">
            {projectStats.map((stat, index) => (
              <div key={index} className="smd-stat-card">
                <div className="smd-stat-icon">{stat.icon}</div>
                <div className="smd-stat-content">
                  <div className="smd-stat-value">{stat.value}</div>
                  <div className="smd-stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="smd-hero-actions">
            <button className="smd-btn-primary">
              <ExternalLink size={20} />
              <span>View Live Demo</span>
            </button>
            <button className="smd-btn-secondary">
              <Github size={20} />
              <span>View on GitHub</span>
            </button>
            <button className="smd-btn-secondary">
              <Download size={20} />
              <span>Download Report</span>
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="smd-tabs-section">
        <div className="smd-tabs-container">
          <div className="smd-tabs">
            {['overview', 'features', 'technologies', 'screenshots'].map((tab) => (
              <button
                key={tab}
                className={`smd-tab ${activeTab === tab ? 'smd-tab-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="smd-content-wrapper">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <section className="smd-section smd-fade-in">
            <div className="smd-section-grid">
              <div className="smd-overview-main">
                <h2 className="smd-section-title">Project Overview</h2>
                <div className="smd-overview-content">
                  <p className="smd-text">
                    The Student Management System is a comprehensive digital solution designed to modernize 
                    educational administration. This full-stack application seamlessly integrates student 
                    information management, academic tracking, attendance monitoring, and communication tools 
                    into a unified platform that serves students, teachers, administrators, and parents.
                  </p>
                  
                  <h3 className="smd-subsection-title">Problem Statement</h3>
                  <p className="smd-text">
                    Educational institutions traditionally rely on manual record-keeping, fragmented systems, 
                    and paper-based processes that lead to inefficiencies, data inconsistencies, and communication 
                    gaps. Administrative staff spend excessive time on routine tasks, while students and parents 
                    lack real-time access to academic information. The absence of centralized data makes it 
                    difficult to generate insights for improving educational outcomes.
                  </p>

                  <h3 className="smd-subsection-title">Solution</h3>
                  <p className="smd-text">
                    Our Student Management System digitizes and automates the entire academic lifecycle through 
                    an intuitive web-based platform. The system features role-based dashboards for different 
                    user types, real-time data synchronization, automated reporting, and mobile-responsive design. 
                    It includes modules for student enrollment, attendance tracking with biometric integration, 
                    grade management with automatic calculations, assignment submission portals, and an integrated 
                    communication system. Built with security at its core, the platform ensures FERPA compliance 
                    and implements robust data protection measures.
                  </p>

                  <h3 className="smd-subsection-title">Technical Highlights</h3>
                  <div className="smd-highlights">
                    <div className="smd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>Role-Based Access Control (RBAC) with granular permissions for students, teachers, and admins</span>
                    </div>
                    <div className="smd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>Real-time notifications using Socket.io for instant updates on grades and announcements</span>
                    </div>
                    <div className="smd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>Automated report generation with export to PDF and Excel formats</span>
                    </div>
                    <div className="smd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>RESTful API architecture with JWT authentication and token refresh mechanism</span>
                    </div>
                    <div className="smd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>Responsive design optimized for desktop, tablet, and mobile devices</span>
                    </div>
                    <div className="smd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>Advanced search and filtering with MongoDB aggregation pipelines</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="smd-overview-sidebar">
                <div className="smd-info-card">
                  <h3 className="smd-info-title">Project Details</h3>
                  <div className="smd-info-list">
                    <div className="smd-info-item">
                      <span className="smd-info-label">Status</span>
                      <span className="smd-info-value smd-status-live">
                        <span className="smd-status-dot"></span>
                        Production Ready
                      </span>
                    </div>
                    <div className="smd-info-item">
                      <span className="smd-info-label">Timeline</span>
                      <span className="smd-info-value">Sep 2023 - Mar 2024</span>
                    </div>
                    <div className="smd-info-item">
                      <span className="smd-info-label">Role</span>
                      <span className="smd-info-value">Full Stack Developer</span>
                    </div>
                    <div className="smd-info-item">
                      <span className="smd-info-label">Category</span>
                      <span className="smd-info-value">Education, SaaS</span>
                    </div>
                  </div>
                </div>

                <div className="smd-info-card">
                  <h3 className="smd-info-title">Platform Support</h3>
                  <div className="smd-platform-icons">
                    <div className="smd-platform-item">
                      <Monitor size={24} />
                      <span>Web</span>
                    </div>
                    <div className="smd-platform-item">
                      <Smartphone size={24} />
                      <span>Mobile</span>
                    </div>
                    <div className="smd-platform-item">
                      <Globe size={24} />
                      <span>Cloud</span>
                    </div>
                  </div>
                </div>

                <div className="smd-info-card">
                  <h3 className="smd-subsection-title">Future Achievements</h3>
                  <div className="smd-achievements-grid">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="smd-achievement-item">
                        <Award size={18} className="smd-achievement-icon" />
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
          <section className="smd-section smd-fade-in">
            <h2 className="smd-section-title">Core Features</h2>
            <div className="smd-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="smd-feature-card">
                  <div className="smd-feature-icon" style={{ background: `${feature.color}15`, color: feature.color }}>
                    {feature.icon}
                  </div>
                  <h3 className="smd-feature-title">{feature.title}</h3>
                  <p className="smd-feature-description">{feature.description}</p>
                  <div className="smd-feature-gradient" style={{ background: `linear-gradient(135deg, ${feature.color}20, transparent)` }}></div>
                </div>
              ))}
            </div>

            <div className="smd-additional-features">
              <h3 className="smd-subsection-title">Additional Capabilities</h3>
              <div className="smd-capabilities-grid">
                <div className="smd-capability">
                  <FileText size={20} />
                  <span>Digital Report Cards</span>
                </div>
                <div className="smd-capability">
                  <Lock size={20} />
                  <span>Secure Document Storage</span>
                </div>
                <div className="smd-capability">
                  <Activity size={20} />
                  <span>Performance Analytics</span>
                </div>
                <div className="smd-capability">
                  <Users size={20} />
                  <span>Parent Portal Access</span>
                </div>
                <div className="smd-capability">
                  <Calendar size={20} />
                  <span>Academic Calendar</span>
                </div>
                <div className="smd-capability">
                  <Bell size={20} />
                  <span>Email & SMS Alerts</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Technologies Section */}
        {activeTab === 'technologies' && (
          <section className="smd-section smd-fade-in">
            <h2 className="smd-section-title">Technology Stack</h2>
            <p className="smd-section-description">
              Modern, scalable technology stack ensuring robust performance, security, and maintainability.
            </p>
            <div className="smd-tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="smd-tech-card">
                  <div className="smd-tech-icon">{tech.icon}</div>
                  <div className="smd-tech-content">
                    <h3 className="smd-tech-name">{tech.name}</h3>
                    <span className="smd-tech-category">{tech.category}</span>
                  </div>
                  <div className="smd-tech-indicator" style={{ background: tech.color }}></div>
                </div>
              ))}
            </div>

            <div className="smd-architecture-section">
              <h3 className="smd-subsection-title">System Architecture</h3>
              <div className="smd-architecture-card">
                <div className="smd-architecture-layer">
                  <div className="smd-layer-title">Presentation Layer</div>
                  <div className="smd-layer-content">React 18, TypeScript, Redux Toolkit, Tailwind CSS, React Router</div>
                </div>
                <div className="smd-architecture-arrow">↓</div>
                <div className="smd-architecture-layer">
                  <div className="smd-layer-title">API Layer</div>
                  <div className="smd-layer-content">Express.js REST API, JWT Authentication, Input Validation, Rate Limiting</div>
                </div>
                <div className="smd-architecture-arrow">↓</div>
                <div className="smd-architecture-layer">
                  <div className="smd-layer-title">Business Logic</div>
                  <div className="smd-layer-content">Node.js Services, Socket.io Real-time Engine, Email Service, File Upload Handler</div>
                </div>
                <div className="smd-architecture-arrow">↓</div>
                <div className="smd-architecture-layer">
                  <div className="smd-layer-title">Data Layer</div>
                  <div className="smd-layer-content">MongoDB with Mongoose, Redis Caching, GridFS File Storage</div>
                </div>
                <div className="smd-architecture-arrow">↓</div>
                <div className="smd-architecture-layer">
                  <div className="smd-layer-title">Infrastructure</div>
                  <div className="smd-layer-content">Docker Containers, AWS EC2, Nginx Load Balancer, CloudWatch Monitoring</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Screenshots Section */}
        {activeTab === 'screenshots' && (
          <section className="smd-section smd-fade-in">
            <h2 className="smd-section-title">Application Screenshots</h2>
            <div className="smd-screenshots-container">
              <div className="smd-main-screenshot">
                <img 
                  src={screenshots[activeScreenshot].url} 
                  alt={screenshots[activeScreenshot].title}
                  className="smd-screenshot-image"
                />
                <div className="smd-screenshot-info">
                  <h3>{screenshots[activeScreenshot].title}</h3>
                  <p>{screenshots[activeScreenshot].description}</p>
                </div>
              </div>

              <div className="smd-screenshot-thumbnails">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={screenshot.id}
                    className={`smd-thumbnail ${activeScreenshot === index ? 'smd-thumbnail-active' : ''}`}
                    onClick={() => setActiveScreenshot(index)}
                  >
                    <img src={screenshot.url} alt={screenshot.title} />
                    <div className="smd-thumbnail-overlay">
                      <Play size={24} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* CTA Section */}
      <section className="smd-cta-section">
        <div className="smd-cta-content">
          <h2 className="smd-cta-title">Ready to Modernize Your Institution?</h2>
          <p className="smd-cta-description">
            Explore the live demo or contact us to discuss how this system can be customized for your educational institution.
          </p>
          <div className="smd-cta-buttons">
            <button className="smd-btn-primary">
              <ExternalLink size={20} />
              <span>Try Demo Account</span>
            </button>
            <button className="smd-btn-secondary">
              <Code2 size={20} />
              <span>API Documentation</span>
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

        .smd-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0c1428 0%, #1e2746 50%, #0f1b33 100%);
          color: white;
        }

        /* Hero Section */
        .smd-hero {
          position: relative;
          padding: 120px 60px 80px;
          overflow: hidden;
        }

        .smd-hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .smd-gradient-blur {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.4;
        }

        .smd-blur-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent);
          top: -200px;
          right: -100px;
        }

        .smd-blur-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent);
          bottom: -150px;
          left: -100px;
        }

        .smd-blur-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .smd-hero-content {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
        }

        .smd-back-btn {
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

        .smd-back-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(-5px);
        }

        .smd-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 50px;
          color: #60a5fa;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .smd-hero-title {
          font-size: 72px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -2px;
        }

        .smd-gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #10b981 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .smd-hero-subtitle {
          font-size: 20px;
          color: #cbd5e1;
          line-height: 1.8;
          max-width: 900px;
          margin-bottom: 48px;
        }

        .smd-hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }

        .smd-stat-card {
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

        .smd-stat-card:hover {
          transform: translateY(-4px);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .smd-stat-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          color: #3b82f6;
        }

        .smd-stat-value {
          font-size: 28px;
          font-weight: 800;
          background: linear-gradient(135deg, #3b82f6, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .smd-stat-label {
          font-size: 14px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .smd-hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .smd-btn-primary, .smd-btn-secondary {
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

        .smd-btn-primary {
          background: linear-gradient(135deg, #3b82f6, #10b981);
          color: white;
          box-shadow: 0 10px 40px rgba(59, 130, 246, 0.4);
        }

        .smd-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 50px rgba(59, 130, 246, 0.5);
        }

        .smd-btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          backdrop-filter: blur(10px);
        }

        .smd-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        /* Tabs Section */
        .smd-tabs-section {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(12, 20, 40, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0 60px;
        }

        .smd-tabs-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .smd-tabs {
          display: flex;
          gap: 8px;
          overflow-x: auto;
        }

        .smd-tab {
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

        .smd-tab:hover {
          color: white;
        }

        .smd-tab-active {
          color: white;
        }

        .smd-tab-active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #10b981);
          border-radius: 3px 3px 0 0;
        }

        /* Content Wrapper */
        .smd-content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 60px;
        }

        .smd-section {
          margin-bottom: 80px;
        }

        .smd-fade-in {
          animation: smd-fadeIn 0.6s ease-out;
        }

        @keyframes smd-fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .smd-section-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #fff, #93c5fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .smd-section-description {
          font-size: 18px;
          color: #cbd5e1;
          margin-bottom: 48px;
          max-width: 800px;
        }

        /* Overview Section */
        .smd-section-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
        }

        .smd-overview-content {
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(20px);
        }

        .smd-text {
          font-size: 16px;
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .smd-subsection-title {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
          margin-top: 32px;
        }

        .smd-achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .smd-achievement-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 12px;
          color: #6ee7b7;
          font-size: 15px;
          font-weight: 600;
        }

        .smd-achievement-icon {
          flex-shrink: 0;
        }

        .smd-highlights {
          display: grid;
          gap: 12px;
          margin-top: 24px;
        }

        .smd-highlight-item {
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

        .smd-highlight-item svg {
          flex-shrink: 0;
          color: #3b82f6;
          margin-top: 2px;
        }

        .smd-overview-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .smd-info-card {
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 32px;
          backdrop-filter: blur(20px);
        }

        .smd-info-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 24px;
          color: white;
        }

        .smd-info-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .smd-info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .smd-info-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .smd-info-label {
          font-size: 14px;
          color: #94a3b8;
          font-weight: 600;
        }

        .smd-info-value {
          font-size: 15px;
          color: white;
          font-weight: 700;
        }

        .smd-status-live {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6ee7b7;
        }

        .smd-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: currentColor;
          animation: smd-pulse 2s ease-in-out infinite;
        }

        @keyframes smd-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .smd-platform-icons {
          display: flex;
          gap: 20px;
          justify-content: space-around;
        }

        .smd-platform-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 16px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          color: #60a5fa;
          font-size: 13px;
          font-weight: 600;
          flex: 1;
          transition: all 0.3s ease;
        }

        .smd-platform-item:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-4px);
        }


        /* Features Section */
        .smd-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
        }

        .smd-feature-card {
          position: relative;
          padding: 32px;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(20px);
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .smd-feature-card:hover {
          transform: translateY(-8px);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
        }

        .smd-feature-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .smd-feature-card:hover .smd-feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .smd-feature-title {
          font-size: 22px;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
        }

        .smd-feature-description {
          font-size: 15px;
          color: #94a3b8;
          line-height: 1.7;
        }

        .smd-feature-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .smd-feature-card:hover .smd-feature-gradient {
          opacity: 0.1;
        }

        .smd-additional-features {
          margin-top: 60px;
          padding: 40px;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(20px);
        }

        .smd-capabilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .smd-capability {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 12px;
          color: #c4b5fd;
          font-size: 15px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .smd-capability:hover {
          background: rgba(139, 92, 246, 0.2);
          transform: translateX(4px);
        }

        .smd-capability svg {
          flex-shrink: 0;
        }

        /* Technologies Section */
        .smd-tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
        }

        .smd-tech-card {
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

        .smd-tech-card:hover {
          transform: translateY(-4px);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .smd-tech-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .smd-tech-content {
          flex: 1;
        }

        .smd-tech-name {
          font-size: 18px;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }

        .smd-tech-category {
          font-size: 13px;
          color: #94a3b8;
          font-weight: 600;
        }

        .smd-tech-indicator {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .smd-tech-card:hover .smd-tech-indicator {
          opacity: 1;
        }

        /* Architecture Section */
        .smd-architecture-section {
          margin-top: 60px;
        }

        .smd-architecture-card {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 40px;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(20px);
        }

        .smd-architecture-layer {
          padding: 24px;
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .smd-architecture-layer:hover {
          background: rgba(59, 130, 246, 0.15);
          transform: translateX(8px);
        }

        .smd-layer-title {
          font-size: 18px;
          font-weight: 700;
          color: #60a5fa;
          margin-bottom: 8px;
        }

        .smd-layer-content {
          font-size: 15px;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .smd-architecture-arrow {
          text-align: center;
          font-size: 24px;
          color: #3b82f6;
          font-weight: 700;
        }

        /* Screenshots Section */
        .smd-screenshots-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .smd-main-screenshot {
          position: relative;
          width: 100%;
          height: 600px;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
        }

        .smd-screenshot-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .smd-screenshot-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 32px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
        }

        .smd-screenshot-info h3 {
          font-size: 28px;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }

        .smd-screenshot-info p {
          font-size: 16px;
          color: #cbd5e1;
        }

        .smd-screenshot-thumbnails {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .smd-thumbnail {
          position: relative;
          height: 180px;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          border: 3px solid transparent;
          transition: all 0.3s ease;
        }

        .smd-thumbnail:hover {
          transform: scale(1.05);
          border-color: rgba(59, 130, 246, 0.5);
        }

        .smd-thumbnail-active {
          border-color: #3b82f6;
        }

        .smd-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .smd-thumbnail:hover img {
          transform: scale(1.1);
        }

        .smd-thumbnail-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .smd-thumbnail:hover .smd-thumbnail-overlay {
          opacity: 1;
        }

        .smd-thumbnail-overlay svg {
          color: white;
        }

        /* CTA Section */
        .smd-cta-section {
          padding: 100px 60px;
          background: rgba(17, 24, 39, 0.6);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .smd-cta-content {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }

        .smd-cta-title {
          font-size: 48px;
          font-weight: 900;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #fff, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .smd-cta-description {
          font-size: 20px;
          color: #cbd5e1;
          margin-bottom: 40px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .smd-cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .smd-section-grid {
            grid-template-columns: 1fr;
          }

          .smd-hero-title {
            font-size: 56px;
          }

          .smd-hero-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .smd-hero {
            padding: 80px 20px 60px;
          }

          .smd-content-wrapper {
            padding: 60px 20px;
          }

          .smd-tabs-section {
            padding: 0 20px;
          }

          .smd-hero-title {
            font-size: 42px;
          }

          .smd-section-title {
            font-size: 32px;
          }

          .smd-hero-stats {
            grid-template-columns: 1fr;
          }

          .smd-features-grid {
            grid-template-columns: 1fr;
          }

          .smd-tech-grid {
            grid-template-columns: 1fr;
          }

          .smd-main-screenshot {
            height: 400px;
          }

          .smd-screenshot-thumbnails {
            grid-template-columns: repeat(2, 1fr);
          }

          .smd-hero-actions {
            flex-direction: column;
          }

          .smd-btn-primary, .smd-btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .smd-cta-section {
            padding: 60px 20px;
          }

          .smd-cta-title {
            font-size: 36px;
          }

          .smd-cta-buttons {
            flex-direction: column;
          }

          .smd-tabs {
            overflow-x: scroll;
          }

          .smd-architecture-card {
            padding: 24px;
          }

          .smd-overview-content {
            padding: 24px;
          }

          .smd-info-card {
            padding: 24px;
          }

          .smd-achievements-grid {
            grid-template-columns: 1fr;
          }

          .smd-capabilities-grid {
            grid-template-columns: 1fr;
          }

          .smd-additional-features {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .smd-hero-title {
            font-size: 32px;
          }

          .smd-section-title {
            font-size: 28px;
          }

          .smd-hero-subtitle {
            font-size: 16px;
          }

          .smd-stat-card {
            padding: 16px;
          }

          .smd-stat-value {
            font-size: 24px;
          }

          .smd-tab {
            padding: 16px 20px;
            font-size: 14px;
          }

          .smd-screenshot-thumbnails {
            grid-template-columns: 1fr;
          }

          .smd-feature-card {
            padding: 24px;
          }

          .smd-tech-card {
            padding: 16px;
          }

          .smd-architecture-layer {
            padding: 20px;
          }

          .smd-cta-title {
            font-size: 28px;
          }

          .smd-cta-description {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default StudentManagementDetail;