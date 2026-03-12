import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, User, MessageSquare, Sparkles, Brain, Zap, Database, Lock, Code2 } from 'lucide-react';

const AIChatDetail = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const technologies = [
    { name: 'React', icon: '⚛️', color: '#61dafb' },
    { name: 'Python', icon: '🐍', color: '#3776ab' },
    { name: 'FastAPI', icon: '⚡', color: '#009688' },
    { name: 'OpenAI API', icon: '🤖', color: '#10a37f' },
    { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
    { name: 'WebSocket', icon: '🔌', color: '#010101' }
  ];

  const features = [
    { title: 'AI-Powered Chat', description: 'Natural language conversations powered by advanced language models with context awareness.', icon: <MessageSquare />, color: '#3b82f6' },
    { title: 'Smart Responses', description: 'Intelligent replies with code syntax highlighting, markdown support, and multi-language capabilities.', icon: <Brain />, color: '#8b5cf6' },
    { title: 'Conversation History', description: 'Persistent chat history with search functionality and conversation management.', icon: <Database />, color: '#10b981' },
    { title: 'Secure & Private', description: 'End-to-end encryption for messages with user authentication and data protection.', icon: <Lock />, color: '#f59e0b' }
  ];

  const stats = [
    { label: 'Development', value: 'Ongoing', icon: <Calendar /> },
    { label: 'Type', value: 'Solo Project', icon: <User /> },
    { label: 'AI Model', value: 'GPT-4', icon: <Sparkles /> }
  ];

  return (
    <div className="aic-container">
      {/* Hero Section */}
      <section className="aic-hero">
        <div className="aic-hero-bg">
          <div className="aic-blur aic-blur-1"></div>
          <div className="aic-blur aic-blur-2"></div>
        </div>
        
        <div className="aic-content">
          <button className="aic-back-btn">
            <ArrowLeft size={18} />
            <span>Back to Projects</span>
          </button>

          <div className="aic-badge">
            <Sparkles size={14} />
            <span>AI Project • In Progress</span>
          </div>

          <h1 className="aic-title">
            AI <span className="aic-gradient">Chat</span> Application
          </h1>

          <p className="aic-subtitle">
            Intelligent conversational AI application with natural language processing, 
            real-time responses, and context-aware interactions powered by GPT-4.
          </p>

          <div className="aic-stats">
            {stats.map((stat, index) => (
              <div key={index} className="aic-stat">
                <div className="aic-stat-icon">{stat.icon}</div>
                <div>
                  <div className="aic-stat-value">{stat.value}</div>
                  <div className="aic-stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="aic-actions">
            <button className="aic-btn-primary">
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </button>
            <button className="aic-btn-secondary">
              <Github size={18} />
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="aic-tabs-section">
        <div className="aic-tabs">
          {['overview', 'features', 'tech stack'].map((tab) => (
            <button
              key={tab}
              className={`aic-tab ${activeTab === tab ? 'aic-tab-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <div className="aic-main">
        {activeTab === 'overview' && (
          <div className="aic-section aic-fade">
            <h2 className="aic-section-title">Project Overview</h2>
            <div className="aic-grid">
              <div className="aic-card">
                <h3 className="aic-card-title">About</h3>
                <p className="aic-text">
                  An advanced AI chat application that leverages state-of-the-art language models 
                  to provide intelligent, context-aware conversations. Built as a personal project 
                  to explore modern AI capabilities and create an intuitive chat interface.
                </p>
                
                <h4 className="aic-subtitle-small">Development Focus</h4>
                <p className="aic-text">
                  Currently implementing advanced features including multi-turn conversations, 
                  prompt optimization, streaming responses, and conversation branching. The project 
                  emphasizes clean architecture, responsive design, and seamless user experience.
                </p>

                <h4 className="aic-subtitle-small">Key Highlights</h4>
                <div className="aic-highlights">
                  <div className="aic-highlight"><Zap size={16} /> Real-time streaming responses</div>
                  <div className="aic-highlight"><Brain size={16} /> Context-aware conversations</div>
                  <div className="aic-highlight"><Code2 size={16} /> Code syntax highlighting</div>
                  <div className="aic-highlight"><MessageSquare size={16} /> Markdown formatting support</div>
                </div>
              </div>

              <div className="aic-sidebar">
                <div className="aic-info-card">
                  <h4 className="aic-info-title">Details</h4>
                  <div className="aic-info-item">
                    <span>Status</span>
                    <span className="aic-status-progress">In Development</span>
                  </div>
                  <div className="aic-info-item">
                    <span>Started</span>
                    <span>Dec 2024</span>
                  </div>
                  <div className="aic-info-item">
                    <span>Role</span>
                    <span>Solo Developer</span>
                  </div>
                  <div className="aic-info-item">
                    <span>Category</span>
                    <span>AI/ML, Chat</span>
                  </div>
                </div>

                <div className="aic-info-card aic-progress-card">
                  <h4 className="aic-info-title">Progress</h4>
                  <div className="aic-progress-item">
                    <div className="aic-progress-label">Frontend UI</div>
                    <div className="aic-progress-bar">
                      <div className="aic-progress-fill" style={{width: '85%', background: '#10b981'}}></div>
                    </div>
                    <div className="aic-progress-percent">85%</div>
                  </div>
                  <div className="aic-progress-item">
                    <div className="aic-progress-label">Backend API</div>
                    <div className="aic-progress-bar">
                      <div className="aic-progress-fill" style={{width: '70%', background: '#3b82f6'}}></div>
                    </div>
                    <div className="aic-progress-percent">70%</div>
                  </div>
                  <div className="aic-progress-item">
                    <div className="aic-progress-label">AI Integration</div>
                    <div className="aic-progress-bar">
                      <div className="aic-progress-fill" style={{width: '90%', background: '#8b5cf6'}}></div>
                    </div>
                    <div className="aic-progress-percent">90%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="aic-section aic-fade">
            <h2 className="aic-section-title">Features</h2>
            <div className="aic-features">
              {features.map((feature, index) => (
                <div key={index} className="aic-feature">
                  <div className="aic-feature-icon" style={{ background: `${feature.color}20`, color: feature.color }}>
                    {feature.icon}
                  </div>
                  <h3 className="aic-feature-title">{feature.title}</h3>
                  <p className="aic-feature-desc">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="aic-upcoming">
              <h3 className="aic-subtitle-small">Upcoming Features</h3>
              <div className="aic-upcoming-grid">
                <div className="aic-upcoming-item">Voice Input Support</div>
                <div className="aic-upcoming-item">Multi-language Translation</div>
                <div className="aic-upcoming-item">Conversation Export</div>
                <div className="aic-upcoming-item">Custom AI Personalities</div>
                <div className="aic-upcoming-item">Image Generation</div>
                <div className="aic-upcoming-item">Mobile App Version</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tech stack' && (
          <div className="aic-section aic-fade">
            <h2 className="aic-section-title">Technology Stack</h2>
            <div className="aic-tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="aic-tech">
                  <span className="aic-tech-icon">{tech.icon}</span>
                  <span className="aic-tech-name">{tech.name}</span>
                  <div className="aic-tech-bar" style={{ background: tech.color }}></div>
                </div>
              ))}
            </div>

            <div className="aic-arch">
              <h3 className="aic-subtitle-small">Architecture</h3>
              <div className="aic-arch-layer">Frontend: React + TypeScript + WebSocket Client</div>
              <div className="aic-arch-arrow">↓</div>
              <div className="aic-arch-layer">Backend: Python FastAPI + JWT Auth + Rate Limiting</div>
              <div className="aic-arch-arrow">↓</div>
              <div className="aic-arch-layer">AI Layer: OpenAI GPT-4 API + Prompt Engineering</div>
              <div className="aic-arch-arrow">↓</div>
              <div className="aic-arch-layer">Database: PostgreSQL + Redis Cache</div>
            </div>

            <div className="aic-implementation">
              <h3 className="aic-subtitle-small">Implementation Details</h3>
              <div className="aic-impl-grid">
                <div className="aic-impl-card">
                  <h4 className="aic-impl-title">Real-time Communication</h4>
                  <p className="aic-impl-text">WebSocket connections enable streaming responses for a fluid chat experience with minimal latency.</p>
                </div>
                <div className="aic-impl-card">
                  <h4 className="aic-impl-title">Prompt Optimization</h4>
                  <p className="aic-impl-text">Carefully crafted system prompts and context management for accurate and relevant AI responses.</p>
                </div>
                <div className="aic-impl-card">
                  <h4 className="aic-impl-title">Security Measures</h4>
                  <p className="aic-impl-text">API key encryption, rate limiting, input sanitization, and secure token management.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <section className="aic-cta">
        <h2 className="aic-cta-title">Project In Development</h2>
        <p className="aic-cta-text">Follow the development progress on GitHub or try the current version</p>
        <div className="aic-cta-buttons">
          <button className="aic-btn-primary">
            <ExternalLink size={18} />
            <span>Try Beta Version</span>
          </button>
          <button className="aic-btn-secondary">
            <Github size={18} />
            <span>View Progress</span>
          </button>
        </div>
      </section>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .aic-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Hero */
        .aic-hero {
          position: relative;
          padding: 100px 40px 60px;
          overflow: hidden;
        }

        .aic-hero-bg {
          position: absolute;
          inset: 0;
        }

        .aic-blur {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
        }

        .aic-blur-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #8b5cf6, transparent);
          top: -150px;
          right: -100px;
        }

        .aic-blur-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #3b82f6, transparent);
          bottom: -100px;
          left: -100px;
        }

        .aic-content {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .aic-back-btn {
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

        .aic-back-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(-4px);
        }

        .aic-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: rgba(139, 92, 246, 0.2);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 30px;
          color: #c4b5fd;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .aic-title {
          font-size: 56px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .aic-gradient {
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .aic-subtitle {
          font-size: 18px;
          color: #cbd5e1;
          line-height: 1.6;
          max-width: 700px;
          margin-bottom: 40px;
        }

        .aic-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .aic-stat {
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

        .aic-stat:hover {
          transform: translateY(-4px);
          border-color: rgba(139, 92, 246, 0.3);
        }

        .aic-stat-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(139, 92, 246, 0.2);
          border-radius: 10px;
          color: #8b5cf6;
        }

        .aic-stat-value {
          font-size: 24px;
          font-weight: 800;
          color: white;
        }

        .aic-stat-label {
          font-size: 12px;
          color: #94a3b8;
          text-transform: uppercase;
        }

        .aic-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .aic-btn-primary, .aic-btn-secondary {
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

        .aic-btn-primary {
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          color: white;
          box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
        }

        .aic-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(139, 92, 246, 0.5);
        }

        .aic-btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          backdrop-filter: blur(10px);
        }

        .aic-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        /* Tabs */
        .aic-tabs-section {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(17, 24, 39, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0 40px;
        }

        .aic-tabs {
          display: flex;
          gap: 8px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .aic-tab {
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

        .aic-tab:hover {
          color: white;
        }

        .aic-tab-active {
          color: white;
        }

        .aic-tab-active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #8b5cf6, #3b82f6);
        }

        /* Main Content */
        .aic-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 40px;
        }

        .aic-section {
          margin-bottom: 60px;
        }

        .aic-fade {
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

        .aic-section-title {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 30px;
          background: linear-gradient(135deg, #fff, #c4b5fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .aic-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
        }

        .aic-card {
          background: rgba(17, 24, 39, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          backdrop-filter: blur(10px);
        }

        .aic-card-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .aic-text {
          font-size: 15px;
          color: #cbd5e1;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .aic-subtitle-small {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 16px;
          margin-top: 24px;
        }

        .aic-highlights {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .aic-highlight {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background: rgba(139, 92, 246, 0.1);
          border-left: 3px solid #8b5cf6;
          border-radius: 6px;
          color: #cbd5e1;
          font-size: 14px;
        }

        .aic-sidebar {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .aic-info-card {
          background: rgba(17, 24, 39, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 24px;
          backdrop-filter: blur(10px);
        }

        .aic-info-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .aic-info-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 14px;
          color: #cbd5e1;
        }

        .aic-info-item:last-child {
          border-bottom: none;
        }

        .aic-status-progress {
          color: #fbbf24;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .aic-status-progress::before {
          content: '⚡';
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .aic-progress-card {
          background: linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.5));
        }

        .aic-progress-item {
          margin-bottom: 20px;
        }

        .aic-progress-item:last-child {
          margin-bottom: 0;
        }

        .aic-progress-label {
          font-size: 13px;
          color: #94a3b8;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .aic-progress-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 6px;
        }

        .aic-progress-fill {
          height: 100%;
          border-radius: 10px;
          transition: width 1s ease;
        }

        .aic-progress-percent {
          font-size: 14px;
          color: white;
          font-weight: 700;
        }

        /* Features */
        .aic-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .aic-feature {
          padding: 28px;
          background: rgba(17, 24, 39, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          transition: all 0.3s;
        }

        .aic-feature:hover {
          transform: translateY(-6px);
          border-color: rgba(139, 92, 246, 0.3);
        }

        .aic-feature-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          margin-bottom: 16px;
        }

        .aic-feature-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .aic-feature-desc {
          font-size: 14px;
          color: #94a3b8;
          line-height: 1.6;
        }

        .aic-upcoming {
          background: rgba(17, 24, 39, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          backdrop-filter: blur(10px);
        }

        .aic-upcoming-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }

        .aic-upcoming-item {
          padding: 14px 18px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 10px;
          color: #c4b5fd;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
          transition: all 0.3s;
        }

        .aic-upcoming-item:hover {
          background: rgba(139, 92, 246, 0.2);
          transform: translateY(-2px);
        }

        /* Tech Stack */
        .aic-tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .aic-tech {
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

        .aic-tech:hover {
          transform: translateY(-4px);
          border-color: rgba(139, 92, 246, 0.3);
        }

        .aic-tech-icon {
          font-size: 28px;
        }

        .aic-tech-name {
          font-size: 16px;
          font-weight: 700;
        }

        .aic-tech-bar {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .aic-tech:hover .aic-tech-bar {
          opacity: 1;
        }

        /* Architecture */
        .aic-arch {
          background: rgba(17, 24, 39, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          backdrop-filter: blur(10px);
          margin-bottom: 40px;
        }

        .aic-arch-layer {
          padding: 20px;
          background: rgba(139, 92, 246, 0.1);
          border: 2px solid rgba(139, 92, 246, 0.3);
          border-radius: 12px;
          color: #cbd5e1;
          font-size: 14px;
          transition: all 0.3s;
        }

        .aic-arch-layer:hover {
          background: rgba(139, 92, 246, 0.15);
          transform: translateX(6px);
        }

        .aic-arch-arrow {
          text-align: center;
          font-size: 20px;
          color: #8b5cf6;
          margin: 12px 0;
        }

        /* Implementation */
        .aic-implementation {
          background: rgba(17, 24, 39, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          backdrop-filter: blur(10px);
        }

        .aic-impl-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .aic-impl-card {
          padding: 24px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 16px;
          transition: all 0.3s;
        }

        .aic-impl-card:hover {
          background: rgba(139, 92, 246, 0.15);
          transform: translateY(-4px);
        }

        .aic-impl-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #c4b5fd;
        }

        .aic-impl-text {
          font-size: 14px;
          color: #94a3b8;
          line-height: 1.6;
        }

        /* CTA */
        .aic-cta {
          padding: 80px 40px;
          background: rgba(17, 24, 39, 0.5);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .aic-cta-title {
          font-size: 40px;
          font-weight: 900;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #fff, #c4b5fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .aic-cta-text {
          font-size: 18px;
          color: #cbd5e1;
          margin-bottom: 32px;
        }

        .aic-cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .aic-hero {
            padding: 80px 20px 50px;
          }

          .aic-title {
            font-size: 40px;
          }

          .aic-main {
            padding: 50px 20px;
          }

          .aic-tabs-section {
            padding: 0 20px;
          }

          .aic-grid {
            grid-template-columns: 1fr;
          }

          .aic-features {
            grid-template-columns: 1fr;
          }

          .aic-tech-grid {
            grid-template-columns: 1fr;
          }

          .aic-impl-grid {
            grid-template-columns: 1fr;
          }

          .aic-cta {
            padding: 60px 20px;
          }

          .aic-cta-title {
            font-size: 32px;
          }

          .aic-actions, .aic-cta-buttons {
            flex-direction: column;
          }

          .aic-btn-primary, .aic-btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .aic-title {
            font-size: 32px;
          }

          .aic-section-title {
            font-size: 28px;
          }

          .aic-stats {
            grid-template-columns: 1fr;
          }

          .aic-upcoming-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AIChatDetail;