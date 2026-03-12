import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, CheckSquare, Zap, Layout, Bell, BarChart2, Clock, Tag } from 'lucide-react';

const TaskManagementDetail = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const technologies = [
    { name: 'React', icon: '⚛️', color: '#61dafb' },
    { name: 'Node.js', icon: '🟢', color: '#68a063' },
    { name: 'MongoDB', icon: '🍃', color: '#47a248' },
    { name: 'Express', icon: '⚡', color: '#000000' },
    { name: 'Socket.io', icon: '🔌', color: '#010101' },
    { name: 'Redux', icon: '🔄', color: '#764abc' }
  ];

  const features = [
    { title: 'Task Organization', description: 'Create, organize, and prioritize tasks with drag-and-drop Kanban boards.', icon: <Layout />, color: '#3b82f6' },
    { title: 'Team Collaboration', description: 'Assign tasks, share projects, and collaborate with team members in real-time.', icon: <Users />, color: '#10b981' },
    { title: 'Smart Notifications', description: 'Get instant alerts for deadlines, updates, and team activities.', icon: <Bell />, color: '#f59e0b' },
    { title: 'Progress Tracking', description: 'Monitor project progress with visual dashboards and analytics.', icon: <BarChart2 />, color: '#8b5cf6' }
  ];

  const stats = [
    { label: 'Development', value: '3 Months', icon: <Calendar /> },
    { label: 'Team', value: '1 Member', icon: <Users /> },
    { label: 'Target Tasks Managed', value: '1,000+', icon: <CheckSquare /> }
  ];

  return (
    <div className="tmd-container">
      {/* Hero Section */}
      <section className="tmd-hero">
        <div className="tmd-hero-bg">
          <div className="tmd-blur tmd-blur-1"></div>
          <div className="tmd-blur tmd-blur-2"></div>
        </div>
        
        <div className="tmd-content">
          <button className="tmd-back-btn">
            <ArrowLeft size={18} />
            <span>Back to Projects</span>
          </button>

          <div className="tmd-badge">
            <CheckSquare size={14} />
            <span>Productivity Tool</span>
          </div>

          <h1 className="tmd-title">
            Task <span className="tmd-gradient">Management</span> App
          </h1>

          <p className="tmd-subtitle">
            Modern task management solution with Kanban boards, team collaboration, 
            and real-time updates for enhanced productivity.
          </p>

          <div className="tmd-stats">
            {stats.map((stat, index) => (
              <div key={index} className="tmd-stat">
                <div className="tmd-stat-icon">{stat.icon}</div>
                <div>
                  <div className="tmd-stat-value">{stat.value}</div>
                  <div className="tmd-stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="tmd-actions">
            <button className="tmd-btn-primary">
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </button>
            <button className="tmd-btn-secondary">
              <Github size={18} />
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="tmd-tabs-section">
        <div className="tmd-tabs">
          {['overview', 'features', 'tech stack'].map((tab) => (
            <button
              key={tab}
              className={`tmd-tab ${activeTab === tab ? 'tmd-tab-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <div className="tmd-main">
        {activeTab === 'overview' && (
          <div className="tmd-section tmd-fade">
            <h2 className="tmd-section-title">Project Overview</h2>
            <div className="tmd-grid">
              <div className="tmd-card">
                <h3 className="tmd-card-title">About</h3>
                <p className="tmd-text">
                  A comprehensive task management application designed to boost team productivity. 
                  Features include Kanban boards, task prioritization, deadline tracking, and 
                  real-time collaboration tools.
                </p>
                
                <h4 className="tmd-subtitle-small">Key Highlights</h4>
                <div className="tmd-highlights">
                  <div className="tmd-highlight"><Zap size={16} /> Drag-and-drop interface</div>
                  <div className="tmd-highlight"><Clock size={16} /> Deadline reminders</div>
                  <div className="tmd-highlight"><Tag size={16} /> Custom labels & tags</div>
                </div>
              </div>

              <div className="tmd-sidebar">
                <div className="tmd-info-card">
                  <h4 className="tmd-info-title">Details</h4>
                  <div className="tmd-info-item">
                    <span>Status</span>
                    <span className="tmd-status">Active</span>
                  </div>
                  <div className="tmd-info-item">
                    <span>Timeline</span>
                    <span>Oct 2023 - Jan 2024</span>
                  </div>
                  <div className="tmd-info-item">
                    <span>Role</span>
                    <span>Full Stack Dev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="tmd-section tmd-fade">
            <h2 className="tmd-section-title">Features</h2>
            <div className="tmd-features">
              {features.map((feature, index) => (
                <div key={index} className="tmd-feature">
                  <div className="tmd-feature-icon" style={{ background: `${feature.color}20`, color: feature.color }}>
                    {feature.icon}
                  </div>
                  <h3 className="tmd-feature-title">{feature.title}</h3>
                  <p className="tmd-feature-desc">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tech stack' && (
          <div className="tmd-section tmd-fade">
            <h2 className="tmd-section-title">Technology Stack</h2>
            <div className="tmd-tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="tmd-tech">
                  <span className="tmd-tech-icon">{tech.icon}</span>
                  <span className="tmd-tech-name">{tech.name}</span>
                  <div className="tmd-tech-bar" style={{ background: tech.color }}></div>
                </div>
              ))}
            </div>

            <div className="tmd-arch">
              <h3 className="tmd-subtitle-small">Architecture</h3>
              <div className="tmd-arch-layer">Frontend: React + Redux + Socket.io Client</div>
              <div className="tmd-arch-arrow">↓</div>
              <div className="tmd-arch-layer">Backend: Node.js + Express + JWT Auth</div>
              <div className="tmd-arch-arrow">↓</div>
              <div className="tmd-arch-layer">Database: MongoDB with Mongoose ODM</div>
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <section className="tmd-cta">
        <h2 className="tmd-cta-title">Try It Yourself</h2>
        <p className="tmd-cta-text">Check out the live demo or explore the source code</p>
        <div className="tmd-cta-buttons">
          <button className="tmd-btn-primary">
            <ExternalLink size={18} />
            <span>Launch Demo</span>
          </button>
          <button className="tmd-btn-secondary">
            <Github size={18} />
            <span>View Code</span>
          </button>
        </div>
      </section>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .tmd-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Hero */
        .tmd-hero {
          position: relative;
          padding: 100px 40px 60px;
          overflow: hidden;
        }

        .tmd-hero-bg {
          position: absolute;
          inset: 0;
        }

        .tmd-blur {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
        }

        .tmd-blur-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #3b82f6, transparent);
          top: -150px;
          right: -100px;
        }

        .tmd-blur-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #10b981, transparent);
          bottom: -100px;
          left: -100px;
        }

        .tmd-content {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .tmd-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 30px;
          color: white;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
          backdrop-filter: blur(10px);
          margin-bottom: 20px;
        }

        .tmd-back-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(-4px);
        }

        .tmd-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 30px;
          color: #60a5fa;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .tmd-title {
          font-size: 56px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .tmd-gradient {
          background: linear-gradient(135deg, #3b82f6, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tmd-subtitle {
          font-size: 18px;
          color: #cbd5e1;
          line-height: 1.6;
          max-width: 700px;
          margin-bottom: 40px;
        }

        .tmd-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .tmd-stat {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px;
          background: rgba(17, 24, 39, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          transition: all 0.3s;
        }

        .tmd-stat:hover {
          transform: translateY(-4px);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .tmd-stat-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(59, 130, 246, 0.2);
          border-radius: 10px;
          color: #3b82f6;
        }

        .tmd-stat-value {
          font-size: 24px;
          font-weight: 800;
          color: white;
        }

        .tmd-stat-label {
          font-size: 12px;
          color: #94a3b8;
          text-transform: uppercase;
        }

        .tmd-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .tmd-btn-primary, .tmd-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 30px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
        }

        .tmd-btn-primary {
          background: linear-gradient(135deg, #3b82f6, #10b981);
          color: white;
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
        }

        .tmd-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(59, 130, 246, 0.5);
        }

        .tmd-btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          backdrop-filter: blur(10px);
        }

        .tmd-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        /* Tabs */
        .tmd-tabs-section {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(17, 24, 39, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0 40px;
        }

        .tmd-tabs {
          display: flex;
          gap: 8px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .tmd-tab {
          padding: 18px 28px;
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
        }

        .tmd-tab:hover {
          color: white;
        }

        .tmd-tab-active {
          color: white;
        }

        .tmd-tab-active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #10b981);
        }

        /* Main Content */
        .tmd-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 40px;
        }

        .tmd-section {
          margin-bottom: 60px;
        }

        .tmd-fade {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tmd-section-title {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 30px;
          background: linear-gradient(135deg, #fff, #93c5fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tmd-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
        }

        .tmd-card {
          background: rgba(17, 24, 39, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          backdrop-filter: blur(10px);
        }

        .tmd-card-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .tmd-text {
          font-size: 15px;
          color: #cbd5e1;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .tmd-subtitle-small {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 16px;
          margin-top: 24px;
        }

        .tmd-highlights {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .tmd-highlight {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background: rgba(59, 130, 246, 0.1);
          border-left: 3px solid #3b82f6;
          border-radius: 6px;
          color: #cbd5e1;
          font-size: 14px;
        }

        .tmd-sidebar {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .tmd-info-card {
          background: rgba(17, 24, 39, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 24px;
          backdrop-filter: blur(10px);
        }

        .tmd-info-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .tmd-info-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 14px;
          color: #cbd5e1;
        }

        .tmd-info-item:last-child {
          border-bottom: none;
        }

        .tmd-status {
          color: #6ee7b7;
          font-weight: 600;
        }

        /* Features */
        .tmd-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .tmd-feature {
          padding: 28px;
          background: rgba(17, 24, 39, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          transition: all 0.3s;
        }

        .tmd-feature:hover {
          transform: translateY(-6px);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .tmd-feature-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          margin-bottom: 16px;
        }

        .tmd-feature-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .tmd-feature-desc {
          font-size: 14px;
          color: #94a3b8;
          line-height: 1.6;
        }

        /* Tech Stack */
        .tmd-tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .tmd-tech {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px;
          background: rgba(17, 24, 39, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          backdrop-filter: blur(10px);
          transition: all 0.3s;
          overflow: hidden;
        }

        .tmd-tech:hover {
          transform: translateY(-4px);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .tmd-tech-icon {
          font-size: 28px;
        }

        .tmd-tech-name {
          font-size: 16px;
          font-weight: 700;
        }

        .tmd-tech-bar {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .tmd-tech:hover .tmd-tech-bar {
          opacity: 1;
        }

        /* Architecture */
        .tmd-arch {
          background: rgba(17, 24, 39, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          backdrop-filter: blur(10px);
        }

        .tmd-arch-layer {
          padding: 20px;
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          color: #cbd5e1;
          font-size: 14px;
          transition: all 0.3s;
        }

        .tmd-arch-layer:hover {
          background: rgba(59, 130, 246, 0.15);
          transform: translateX(6px);
        }

        .tmd-arch-arrow {
          text-align: center;
          font-size: 20px;
          color: #3b82f6;
          margin: 12px 0;
        }

        /* CTA */
        .tmd-cta {
          padding: 80px 40px;
          background: rgba(17, 24, 39, 0.5);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .tmd-cta-title {
          font-size: 40px;
          font-weight: 900;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #fff, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tmd-cta-text {
          font-size: 18px;
          color: #cbd5e1;
          margin-bottom: 32px;
        }

        .tmd-cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .tmd-hero {
            padding: 80px 20px 50px;
          }

          .tmd-title {
            font-size: 40px;
          }

          .tmd-main {
            padding: 50px 20px;
          }

          .tmd-tabs-section {
            padding: 0 20px;
          }

          .tmd-grid {
            grid-template-columns: 1fr;
          }

          .tmd-features {
            grid-template-columns: 1fr;
          }

          .tmd-tech-grid {
            grid-template-columns: 1fr;
          }

          .tmd-cta {
            padding: 60px 20px;
          }

          .tmd-cta-title {
            font-size: 32px;
          }

          .tmd-actions, .tmd-cta-buttons {
            flex-direction: column;
          }

          .tmd-btn-primary, .tmd-btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .tmd-title {
            font-size: 32px;
          }

          .tmd-section-title {
            font-size: 28px;
          }

          .tmd-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default TaskManagementDetail;