import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Play, Sparkles, Code2, Zap, Eye, Star, TrendingUp } from 'lucide-react';
import health from '../assets/doctor1.jpg';
import student from '../assets/students.jpg';
import analyse from '../assets/analyse.jpg';
import ecommerce from '../assets/e-commerce.avif';
import wedding from '../assets/wedding.jpg';

const PortfolioProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
   const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "HealthCare Application",
      featured: true,
      status: "In Development",
      description: "Advanced healthcare management system with AI-powered diagnostics, patient tracking, and telemedicine capabilities.",
      image: health,
      tags: ["React", "Node.js", "AI/ML", "PostgreSQL"],
      metrics: {
        users: "10K+",
        rating: "4.9",
        performance: "98%"
      },
      links: {
        live: "#",
        github: "#"
      },
      color: "pp-gradient-blue-cyan",
      detailPage: "/projects/healthcare"
    },
    {
      id: 2,
      title: "Wedding Manage Application",
      featured: true,
      status: "Live",
      description: "Full-featured online marketplace with real-time inventory, payment integration, and advanced analytics dashboard.",
      image: wedding,
      tags: ["React", "TypeScript", "Stripe", "MongoDB"],
      metrics: {
        users: "25K+",
        rating: "4.8",
        performance: "95%"
      },
      links: {
        live: "#",
        github: "#"
      },
      color: "pp-gradient-purple-pink",
      detailPage: "/projects/wedding"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      featured: false,
      status: "Live",
      description: "Full-featured online marketplace with real-time inventory, payment integration, and advanced analytics dashboard.",
      image: ecommerce,
      tags: ["React", "TypeScript", "Stripe", "MongoDB"],
      metrics: {
        users: "25K+",
        rating: "4.8",
        performance: "95%"
      },
      links: {
        live: "#",
        github: "#"
      },
      color: "pp-gradient-purple-pink",
      detailPage: "/projects/ecommerce"
    },
    {
      id: 4,
      title: "Student Management System",
      featured: false,
      status: "Live",
      description: "Full-featured online marketplace with real-time inventory, payment integration, and advanced analytics dashboard.",
      image: student,
      tags: ["React", "TypeScript", "Stripe", "MongoDB"],
      metrics: {
        users: "25K+",
        rating: "4.8",
        performance: "95%"
      },
      links: {
        live: "#",
        github: "#"
      },
      color: "pp-gradient-purple-pink",
      detailPage: "/projects/student-management"
    },
    {
      id: 5,
      title: "AI Chat Assistant",
      featured: false,
      status: "Live",
      description: "Intelligent conversational AI with natural language processing, context awareness, and multi-language support.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["Python", "OpenAI", "React", "FastAPI"],
      metrics: {
        users: "15K+",
        rating: "4.7",
        performance: "92%"
      },
      links: {
        live: "#",
        github: "#"
      },
      color: "pp-gradient-green-emerald",
      detailPage: "/projects/aichat"
    },
    {
      id: 6,
      title: "Portfolio CMS",
      featured: false,
      status: "Live",
      description: "Dynamic content management system for creative professionals with drag-and-drop builder and SEO optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Next.js", "Prisma", "TailwindCSS"],
      metrics: {
        users: "8K+",
        rating: "4.9",
        performance: "97%"
      },
      links: {
        live: "#",
        github: "#"
      },
      color: "pp-gradient-orange-red"
    },
    {
      id: 7,
      title: "Task Management App",
      featured: false,
      status: "Live",
      description: "Cross-platform productivity app with team collaboration, time tracking, and intelligent task prioritization.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase", "Redux"],
      metrics: {
        users: "20K+",
        rating: "4.6",
        performance: "94%"
      },
      links: {
        live: "#",
        github: "#"
      },
      color: "pp-gradient-indigo-purple",
      detailPage: "/projects/task-management"
    },
    {
      id: 8,
      title: "Analytics Dashboard",
      featured: false,
      status: "Live",
      description: "Real-time business intelligence platform with customizable widgets, data visualization, and reporting tools.",
      image: analyse,
      tags: ["Vue.js", "D3.js", "Node.js", "Redis"],
      metrics: {
        users: "12K+",
        rating: "4.8",
        performance: "96%"
      },
      links: {
        live: "#",
        github: "#"
      },
      color: "pp-gradient-yellow-orange"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const handleViewProject = (project) => {
    if (project.detailPage) {
      navigate(project.detailPage);
    }
  };

  return (
    <section className="pp-projects-section">
      {/* Background Elements */}
      <div className="pp-bg-gradient-blur pp-blur-1"></div>
      <div className="pp-bg-gradient-blur pp-blur-2"></div>
      <div className="pp-bg-gradient-blur pp-blur-3"></div>

      <div className="pp-projects-container">
        {/* Section Header */}
        <div className="pp-section-header">
          <div className="pp-header-badge">
            <Sparkles size={18} />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="pp-section-title">
            Featured <span className="pp-title-gradient">Projects</span>
          </h2>
          <p className="pp-section-description">
            Explore my collection of innovative solutions and creative experiments. 
            Each project represents a unique challenge and a commitment to excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="pp-projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`pp-project-card ${project.featured ? 'pp-featured-card' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Status Badge */}
              <div className="pp-status-badge-container">
                {project.featured && (
                  <span className="pp-featured-badge">
                    <Star size={14} />
                    Featured
                  </span>
                )}
              </div>

              {/* Project Image */}
              <div className="pp-project-image-container">
                <img src={project.image} alt={project.title} className="pp-project-image" />
                <div className={`pp-image-overlay ${hoveredProject === project.id ? 'pp-active' : ''}`}>
                  <div className="pp-overlay-gradient"></div>
                  <div className="pp-overlay-actions">
                    <button 
                      className="pp-overlay-btn pp-primary"
                      onClick={() => handleViewProject(project)}
                    >
                      <Eye size={18} />
                      <span>View Project</span>
                    </button>
                    <div className="pp-overlay-icon-btns">
                      <button className="pp-overlay-icon-btn">
                        <ExternalLink size={18} />
                      </button>
                      <button className="pp-overlay-icon-btn">
                        <Github size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="pp-project-content">
                <h3 className="pp-project-title">{project.title}</h3>
                <p className="pp-project-description">{project.description}</p>

                {/* Metrics */}
                <div className="pp-project-metrics">
                  <div className="pp-metric-item">
                    <TrendingUp size={16} className="pp-metric-icon" />
                    <span className="pp-metric-label">Users:</span>
                    <span className="pp-metric-value">{project.metrics.users}</span>
                  </div>
                  <div className="pp-metric-item">
                    <Star size={16} className="pp-metric-icon" />
                    <span className="pp-metric-label">Rating:</span>
                    <span className="pp-metric-value">{project.metrics.rating}</span>
                  </div>
                  <div className="pp-metric-item">
                    <Zap size={16} className="pp-metric-icon" />
                    <span className="pp-metric-label">Performance:</span>
                    <span className="pp-metric-value">{project.metrics.performance}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="pp-project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="pp-project-tag">{tag}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pp-project-actions">
                  <button 
                    className="pp-action-btn pp-primary"
                    onClick={() => handleViewProject(project)}
                  >
                    <Play size={18} />
                    <span>View Project</span>
                  </button>
                  <button className="pp-action-btn pp-secondary">
                    <Code2 size={18} />
                  </button>
                </div>
              </div>

              {/* Decorative Border */}
              <div className={`pp-card-border-gradient ${project.color}`}></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pp-projects-section {
          position: relative;
          min-height: 100vh;
          padding: 100px 0;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          overflow: hidden;
        }

        /* Background Blur Elements */
        .pp-bg-gradient-blur {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          pointer-events: none;
        }

        .pp-blur-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.4), transparent);
          top: 10%;
          left: 5%;
          animation: pp-float-blur 20s ease-in-out infinite;
        }

        .pp-blur-2 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(118, 75, 162, 0.3), transparent);
          top: 50%;
          right: 10%;
          animation: pp-float-blur 25s ease-in-out infinite reverse;
        }

        .pp-blur-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(251, 146, 60, 0.2), transparent);
          bottom: 10%;
          left: 40%;
          animation: pp-float-blur 30s ease-in-out infinite;
        }

        @keyframes pp-float-blur {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(50px, -50px); }
          66% { transform: translate(-30px, 30px); }
        }

        .pp-projects-container {
          position: relative;
          z-index: 2;
          margin: 0 auto;
          padding: 0 60px;
        }

        /* Section Header */
        .pp-section-header {
          text-align: center;
          margin-bottom: 80px;
          animation: pp-fadeInUp 0.8s ease-out;
        }

        @keyframes pp-fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pp-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: rgba(102, 126, 234, 0.15);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 50px;
          color: #a5b4fc;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .pp-section-title {
          font-size: 56px;
          font-weight: 900;
          color: white;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .pp-title-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pp-section-description {
          font-size: 18px;
          color: #cbd5e1;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.8;
        }


        /* Projects Grid */
        .pp-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
          gap: 20px;
          margin-bottom: 10px;
        }

        .pp-project-card {
          position: relative;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: pp-cardFadeIn 0.6s ease-out both;
        }

        @keyframes pp-cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pp-project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(102, 126, 234, 0.3);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }

        .pp-featured-card {
          grid-column: span 1;
        }

        /* Status Badges */
        .pp-status-badge-container {
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 3;
        }

        .pp-featured-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: rgba(251, 191, 36, 0.2);
          border: 1px solid rgba(251, 191, 36, 0.4);
          border-radius: 50px;
          color: #fcd34d;
          font-size: 13px;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .pp-status-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .pp-status-badge.pp-live {
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.4);
          color: #86efac;
        }

        .pp-status-badge.pp-development {
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          color: #93c5fd;
        }

        .pp-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
          animation: pp-pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pp-pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        /* Project Image */
        .pp-project-image-container {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
        }

        .pp-project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .pp-project-card:hover .pp-project-image {
          transform: scale(1.1);
        }

        .pp-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pp-image-overlay.pp-active {
          opacity: 1;
        }

        .pp-overlay-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
        }

        .pp-overlay-actions {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }

        .pp-overlay-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: white;
          color: #667eea;
          border: none;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pp-overlay-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
        }

        .pp-overlay-icon-btns {
          display: flex;
          gap: 12px;
        }

        .pp-overlay-icon-btn {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .pp-overlay-icon-btn:hover {
          background: white;
          color: #667eea;
          transform: scale(1.1);
        }

        /* Project Content */
        .pp-project-content {
          padding: 30px;
        }

        .pp-project-title {
          font-size: 24px;
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .pp-project-description {
          font-size: 15px;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        /* Metrics */
        .pp-project-metrics {
          display: flex;
          gap: 20px;
          padding: 16px 0;
          margin-bottom: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pp-metric-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
        }

        .pp-metric-icon {
          color: #667eea;
        }

        .pp-metric-label {
          color: #64748b;
        }

        .pp-metric-value {
          color: white;
          font-weight: 700;
        }

        /* Tags */
        .pp-project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .pp-project-tag {
          padding: 6px 14px;
          background: rgba(102, 126, 234, 0.15);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 20px;
          color: #a5b4fc;
          font-size: 13px;
          font-weight: 600;
        }

        /* Actions */
        .pp-project-actions {
          display: flex;
          gap: 12px;
        }

        .pp-action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 24px;
          border: none;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pp-action-btn.pp-primary {
          flex: 1;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .pp-action-btn.pp-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }

        .pp-action-btn.pp-secondary {
          width: 52px;
          padding: 14px;
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(255, 255, 255, 0.15);
          color: white;
        }

        .pp-action-btn.pp-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        /* Card Border Gradient */
        .pp-card-border-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .pp-gradient-blue-cyan {
          background: linear-gradient(to right, #3b82f6, #06b6d4);
        }

        .pp-gradient-purple-pink {
          background: linear-gradient(to right, #a855f7, #ec4899);
        }

        .pp-gradient-green-emerald {
          background: linear-gradient(to right, #10b981, #059669);
        }

        .pp-gradient-orange-red {
          background: linear-gradient(to right, #f97316, #ef4444);
        }

        .pp-gradient-indigo-purple {
          background: linear-gradient(to right, #6366f1, #a855f7);
        }

        .pp-gradient-yellow-orange {
          background: linear-gradient(to right, #eab308, #f97316);
        }

        .pp-project-card:hover .pp-card-border-gradient {
          opacity: 1;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .pp-projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
          }

          .pp-section-title {
            font-size: 42px;
          }

          .pp-projects-container {
            padding: 0 40px;
          }
        }

        @media (max-width: 768px) {
          .pp-projects-container {
            padding: 0 20px;
          }

          .pp-section-title {
            font-size: 36px;
          }

          .pp-projects-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .pp-filter-container {
            gap: 10px;
          }

          .pp-filter-btn {
            padding: 12px 20px;
            font-size: 14px;
          }

          .pp-project-metrics {
            flex-wrap: wrap;
            gap: 12px;
          }

          .pp-featured-card {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioProjects;