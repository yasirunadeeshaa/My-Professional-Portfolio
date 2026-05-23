// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ExternalLink, Github, Play, Sparkles, Code2, Zap, Eye, Star, TrendingUp } from 'lucide-react';
// import health from '../assets/doctor1.jpg';
// import student from '../assets/students.jpg';
// import analyse from '../assets/analyse.jpg';
// import ecommerce from '../assets/e-commerce.avif';
// import wedding from '../assets/wedding.jpg';

// const PortfolioProjects = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [hoveredProject, setHoveredProject] = useState(null);
//    const navigate = useNavigate();

//   const projects = [
//     {
//       id: 1,
//       title: "HealthCare Application",
//       featured: true,
//       status: "In Development",
//       description: "Advanced healthcare management system with AI-powered diagnostics, patient tracking, and telemedicine capabilities.",
//       image: health,
//       tags: ["React", "Node.js", "AI/ML", "PostgreSQL"],
//       metrics: {
//         users: "10K+",
//         rating: "4.9",
//         performance: "98%"
//       },
//       links: {
//         live: "#",
//         github: "#"
//       },
//       color: "pp-gradient-blue-cyan",
//       detailPage: "/projects/healthcare"
//     },
//     {
//       id: 2,
//       title: "Wedding Manage Application",
//       featured: true,
//       status: "Live",
//       description: "Full-featured online marketplace with real-time inventory, payment integration, and advanced analytics dashboard.",
//       image: wedding,
//       tags: ["React", "TypeScript", "Stripe", "MongoDB"],
//       metrics: {
//         users: "25K+",
//         rating: "4.8",
//         performance: "95%"
//       },
//       links: {
//         live: "#",
//         github: "#"
//       },
//       color: "pp-gradient-purple-pink",
//       detailPage: "/projects/wedding"
//     },
//     {
//       id: 3,
//       title: "E-Commerce Platform",
//       featured: false,
//       status: "Live",
//       description: "Full-featured online marketplace with real-time inventory, payment integration, and advanced analytics dashboard.",
//       image: ecommerce,
//       tags: ["React", "TypeScript", "Stripe", "MongoDB"],
//       metrics: {
//         users: "25K+",
//         rating: "4.8",
//         performance: "95%"
//       },
//       links: {
//         live: "#",
//         github: "#"
//       },
//       color: "pp-gradient-purple-pink",
//       detailPage: "/projects/ecommerce"
//     },
//     {
//       id: 4,
//       title: "Student Management System",
//       featured: false,
//       status: "Live",
//       description: "Full-featured online marketplace with real-time inventory, payment integration, and advanced analytics dashboard.",
//       image: student,
//       tags: ["React", "TypeScript", "Stripe", "MongoDB"],
//       metrics: {
//         users: "25K+",
//         rating: "4.8",
//         performance: "95%"
//       },
//       links: {
//         live: "#",
//         github: "#"
//       },
//       color: "pp-gradient-purple-pink",
//       detailPage: "/projects/student-management"
//     },
//     {
//       id: 5,
//       title: "AI Chat Assistant",
//       featured: false,
//       status: "Live",
//       description: "Intelligent conversational AI with natural language processing, context awareness, and multi-language support.",
//       image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
//       tags: ["Python", "OpenAI", "React", "FastAPI"],
//       metrics: {
//         users: "15K+",
//         rating: "4.7",
//         performance: "92%"
//       },
//       links: {
//         live: "#",
//         github: "#"
//       },
//       color: "pp-gradient-green-emerald",
//       detailPage: "/projects/aichat"
//     },
//     {
//       id: 6,
//       title: "Portfolio CMS",
//       featured: false,
//       status: "Live",
//       description: "Dynamic content management system for creative professionals with drag-and-drop builder and SEO optimization.",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
//       tags: ["Next.js", "Prisma", "TailwindCSS"],
//       metrics: {
//         users: "8K+",
//         rating: "4.9",
//         performance: "97%"
//       },
//       links: {
//         live: "#",
//         github: "#"
//       },
//       color: "pp-gradient-orange-red"
//     },
//     {
//       id: 7,
//       title: "Task Management App",
//       featured: false,
//       status: "Live",
//       description: "Cross-platform productivity app with team collaboration, time tracking, and intelligent task prioritization.",
//       image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
//       tags: ["React Native", "Firebase", "Redux"],
//       metrics: {
//         users: "20K+",
//         rating: "4.6",
//         performance: "94%"
//       },
//       links: {
//         live: "#",
//         github: "#"
//       },
//       color: "pp-gradient-indigo-purple",
//       detailPage: "/projects/task-management"
//     },
//     {
//       id: 8,
//       title: "Analytics Dashboard",
//       featured: false,
//       status: "Live",
//       description: "Real-time business intelligence platform with customizable widgets, data visualization, and reporting tools.",
//       image: analyse,
//       tags: ["Vue.js", "D3.js", "Node.js", "Redis"],
//       metrics: {
//         users: "12K+",
//         rating: "4.8",
//         performance: "96%"
//       },
//       links: {
//         live: "#",
//         github: "#"
//       },
//       color: "pp-gradient-yellow-orange"
//     }
//   ];

//   const filters = [
//     { id: 'all', label: 'All Projects', count: projects.length },
//     { id: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length },
//     { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
//     { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
//     { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length }
//   ];

//   const filteredProjects = projects.filter(project => {
//     if (activeFilter === 'all') return true;
//     if (activeFilter === 'featured') return project.featured;
//     return project.category === activeFilter;
//   });

//   const handleViewProject = (project) => {
//     if (project.detailPage) {
//       navigate(project.detailPage);
//     }
//   };

//   return (
//     <section className="pp-projects-section">
//       {/* Background Elements */}
//       <div className="pp-bg-gradient-blur pp-blur-1"></div>
//       <div className="pp-bg-gradient-blur pp-blur-2"></div>
//       <div className="pp-bg-gradient-blur pp-blur-3"></div>

//       <div className="pp-projects-container">
//         {/* Section Header */}
//         <div className="pp-section-header">
//           <div className="pp-header-badge">
//             <Sparkles size={18} />
//             <span>Portfolio Showcase</span>
//           </div>
//           <h2 className="pp-section-title">
//             Featured <span className="pp-title-gradient">Projects</span>
//           </h2>
//           <p className="pp-section-description">
//             Explore my collection of innovative solutions and creative experiments. 
//             Each project represents a unique challenge and a commitment to excellence.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="pp-projects-grid">
//           {filteredProjects.map((project, index) => (
//             <div
//               key={project.id}
//               className={`pp-project-card ${project.featured ? 'pp-featured-card' : ''}`}
//               style={{ animationDelay: `${index * 0.1}s` }}
//               onMouseEnter={() => setHoveredProject(project.id)}
//               onMouseLeave={() => setHoveredProject(null)}
//             >
//               {/* Status Badge */}
//               <div className="pp-status-badge-container">
//                 {project.featured && (
//                   <span className="pp-featured-badge">
//                     <Star size={14} />
//                     Featured
//                   </span>
//                 )}
//               </div>

//               {/* Project Image */}
//               <div className="pp-project-image-container">
//                 <img src={project.image} alt={project.title} className="pp-project-image" />
//                 <div className={`pp-image-overlay ${hoveredProject === project.id ? 'pp-active' : ''}`}>
//                   <div className="pp-overlay-gradient"></div>
//                   <div className="pp-overlay-actions">
//                     <button 
//                       className="pp-overlay-btn pp-primary"
//                       onClick={() => handleViewProject(project)}
//                     >
//                       <Eye size={18} />
//                       <span>View Project</span>
//                     </button>
//                     <div className="pp-overlay-icon-btns">
//                       <button className="pp-overlay-icon-btn">
//                         <ExternalLink size={18} />
//                       </button>
//                       <button className="pp-overlay-icon-btn">
//                         <Github size={18} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Project Content */}
//               <div className="pp-project-content">
//                 <h3 className="pp-project-title">{project.title}</h3>
//                 <p className="pp-project-description">{project.description}</p>

//                 {/* Metrics */}
//                 <div className="pp-project-metrics">
//                   <div className="pp-metric-item">
//                     <TrendingUp size={16} className="pp-metric-icon" />
//                     <span className="pp-metric-label">Users:</span>
//                     <span className="pp-metric-value">{project.metrics.users}</span>
//                   </div>
//                   <div className="pp-metric-item">
//                     <Star size={16} className="pp-metric-icon" />
//                     <span className="pp-metric-label">Rating:</span>
//                     <span className="pp-metric-value">{project.metrics.rating}</span>
//                   </div>
//                   <div className="pp-metric-item">
//                     <Zap size={16} className="pp-metric-icon" />
//                     <span className="pp-metric-label">Performance:</span>
//                     <span className="pp-metric-value">{project.metrics.performance}</span>
//                   </div>
//                 </div>

//                 {/* Tags */}
//                 <div className="pp-project-tags">
//                   {project.tags.map(tag => (
//                     <span key={tag} className="pp-project-tag">{tag}</span>
//                   ))}
//                 </div>

//                 {/* Actions */}
//                 <div className="pp-project-actions">
//                   <button 
//                     className="pp-action-btn pp-primary"
//                     onClick={() => handleViewProject(project)}
//                   >
//                     <Play size={18} />
//                     <span>View Project</span>
//                   </button>
//                   <button className="pp-action-btn pp-secondary">
//                     <Code2 size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Decorative Border */}
//               <div className={`pp-card-border-gradient ${project.color}`}></div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .pp-projects-section {
//           position: relative;
//           min-height: 100vh;
//           padding: 100px 0;
//           background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
//           overflow: hidden;
//         }

//         /* Background Blur Elements */
//         .pp-bg-gradient-blur {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(100px);
//           opacity: 0.3;
//           pointer-events: none;
//         }

//         .pp-blur-1 {
//           width: 500px;
//           height: 500px;
//           background: radial-gradient(circle, rgba(102, 126, 234, 0.4), transparent);
//           top: 10%;
//           left: 5%;
//           animation: pp-float-blur 20s ease-in-out infinite;
//         }

//         .pp-blur-2 {
//           width: 600px;
//           height: 600px;
//           background: radial-gradient(circle, rgba(118, 75, 162, 0.3), transparent);
//           top: 50%;
//           right: 10%;
//           animation: pp-float-blur 25s ease-in-out infinite reverse;
//         }

//         .pp-blur-3 {
//           width: 400px;
//           height: 400px;
//           background: radial-gradient(circle, rgba(251, 146, 60, 0.2), transparent);
//           bottom: 10%;
//           left: 40%;
//           animation: pp-float-blur 30s ease-in-out infinite;
//         }

//         @keyframes pp-float-blur {
//           0%, 100% { transform: translate(0, 0); }
//           33% { transform: translate(50px, -50px); }
//           66% { transform: translate(-30px, 30px); }
//         }

//         .pp-projects-container {
//           position: relative;
//           z-index: 2;
//           margin: 0 auto;
//           padding: 0 60px;
//         }

//         /* Section Header */
//         .pp-section-header {
//           text-align: center;
//           margin-bottom: 80px;
//           animation: pp-fadeInUp 0.8s ease-out;
//         }

//         @keyframes pp-fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .pp-header-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           padding: 12px 24px;
//           background: rgba(102, 126, 234, 0.15);
//           border: 1px solid rgba(102, 126, 234, 0.3);
//           border-radius: 50px;
//           color: #a5b4fc;
//           font-size: 14px;
//           font-weight: 600;
//           margin-bottom: 24px;
//           backdrop-filter: blur(10px);
//         }

//         .pp-section-title {
//           font-size: 56px;
//           font-weight: 900;
//           color: white;
//           margin-bottom: 24px;
//           line-height: 1.2;
//         }

//         .pp-title-gradient {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .pp-section-description {
//           font-size: 18px;
//           color: #cbd5e1;
//           max-width: 700px;
//           margin: 0 auto;
//           line-height: 1.8;
//         }


//         /* Projects Grid */
//         .pp-projects-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
//           gap: 20px;
//           margin-bottom: 10px;
//         }

//         .pp-project-card {
//           position: relative;
//           background: rgba(17, 24, 39, 0.6);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 24px;
//           overflow: hidden;
//           backdrop-filter: blur(20px);
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           animation: pp-cardFadeIn 0.6s ease-out both;
//         }

//         @keyframes pp-cardFadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .pp-project-card:hover {
//           transform: translateY(-8px);
//           border-color: rgba(102, 126, 234, 0.3);
//           box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
//         }

//         .pp-featured-card {
//           grid-column: span 1;
//         }

//         /* Status Badges */
//         .pp-status-badge-container {
//           position: absolute;
//           top: 20px;
//           left: 20px;
//           right: 20px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           z-index: 3;
//         }

//         .pp-featured-badge {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           padding: 8px 16px;
//           background: rgba(251, 191, 36, 0.2);
//           border: 1px solid rgba(251, 191, 36, 0.4);
//           border-radius: 50px;
//           color: #fcd34d;
//           font-size: 13px;
//           font-weight: 600;
//           backdrop-filter: blur(10px);
//         }

//         .pp-status-badge {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 8px 16px;
//           border-radius: 50px;
//           font-size: 13px;
//           font-weight: 600;
//           backdrop-filter: blur(10px);
//         }

//         .pp-status-badge.pp-live {
//           background: rgba(34, 197, 94, 0.2);
//           border: 1px solid rgba(34, 197, 94, 0.4);
//           color: #86efac;
//         }

//         .pp-status-badge.pp-development {
//           background: rgba(59, 130, 246, 0.2);
//           border: 1px solid rgba(59, 130, 246, 0.4);
//           color: #93c5fd;
//         }

//         .pp-status-dot {
//           width: 6px;
//           height: 6px;
//           border-radius: 50%;
//           background: currentColor;
//           animation: pp-pulse-dot 2s ease-in-out infinite;
//         }

//         @keyframes pp-pulse-dot {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(1.2); }
//         }

//         /* Project Image */
//         .pp-project-image-container {
//           position: relative;
//           width: 100%;
//           height: 280px;
//           overflow: hidden;
//         }

//         .pp-project-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .pp-project-card:hover .pp-project-image {
//           transform: scale(1.1);
//         }

//         .pp-image-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           opacity: 0;
//           transition: opacity 0.4s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .pp-image-overlay.pp-active {
//           opacity: 1;
//         }

//         .pp-overlay-gradient {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
//         }

//         .pp-overlay-actions {
//           position: relative;
//           z-index: 2;
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//           align-items: center;
//         }

//         .pp-overlay-btn {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 14px 28px;
//           background: white;
//           color: #667eea;
//           border: none;
//           border-radius: 50px;
//           font-size: 15px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .pp-overlay-btn:hover {
//           transform: scale(1.05);
//           box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
//         }

//         .pp-overlay-icon-btns {
//           display: flex;
//           gap: 12px;
//         }

//         .pp-overlay-icon-btn {
//           width: 48px;
//           height: 48px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: rgba(255, 255, 255, 0.2);
//           border: 2px solid rgba(255, 255, 255, 0.4);
//           border-radius: 50%;
//           color: white;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           backdrop-filter: blur(10px);
//         }

//         .pp-overlay-icon-btn:hover {
//           background: white;
//           color: #667eea;
//           transform: scale(1.1);
//         }

//         /* Project Content */
//         .pp-project-content {
//           padding: 30px;
//         }

//         .pp-project-title {
//           font-size: 24px;
//           font-weight: 800;
//           color: white;
//           margin-bottom: 12px;
//           line-height: 1.3;
//         }

//         .pp-project-description {
//           font-size: 15px;
//           color: #94a3b8;
//           line-height: 1.7;
//           margin-bottom: 20px;
//         }

//         /* Metrics */
//         .pp-project-metrics {
//           display: flex;
//           gap: 20px;
//           padding: 16px 0;
//           margin-bottom: 20px;
//           border-top: 1px solid rgba(255, 255, 255, 0.1);
//           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .pp-metric-item {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           font-size: 13px;
//         }

//         .pp-metric-icon {
//           color: #667eea;
//         }

//         .pp-metric-label {
//           color: #64748b;
//         }

//         .pp-metric-value {
//           color: white;
//           font-weight: 700;
//         }

//         /* Tags */
//         .pp-project-tags {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 8px;
//           margin-bottom: 24px;
//         }

//         .pp-project-tag {
//           padding: 6px 14px;
//           background: rgba(102, 126, 234, 0.15);
//           border: 1px solid rgba(102, 126, 234, 0.3);
//           border-radius: 20px;
//           color: #a5b4fc;
//           font-size: 13px;
//           font-weight: 600;
//         }

//         /* Actions */
//         .pp-project-actions {
//           display: flex;
//           gap: 12px;
//         }

//         .pp-action-btn {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//           padding: 14px 24px;
//           border: none;
//           border-radius: 50px;
//           font-size: 15px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .pp-action-btn.pp-primary {
//           flex: 1;
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           color: white;
//         }

//         .pp-action-btn.pp-primary:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
//         }

//         .pp-action-btn.pp-secondary {
//           width: 52px;
//           padding: 14px;
//           background: rgba(255, 255, 255, 0.08);
//           border: 2px solid rgba(255, 255, 255, 0.15);
//           color: white;
//         }

//         .pp-action-btn.pp-secondary:hover {
//           background: rgba(255, 255, 255, 0.12);
//         }

//         /* Card Border Gradient */
//         .pp-card-border-gradient {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           height: 4px;
//           opacity: 0;
//           transition: opacity 0.4s ease;
//         }

//         .pp-gradient-blue-cyan {
//           background: linear-gradient(to right, #3b82f6, #06b6d4);
//         }

//         .pp-gradient-purple-pink {
//           background: linear-gradient(to right, #a855f7, #ec4899);
//         }

//         .pp-gradient-green-emerald {
//           background: linear-gradient(to right, #10b981, #059669);
//         }

//         .pp-gradient-orange-red {
//           background: linear-gradient(to right, #f97316, #ef4444);
//         }

//         .pp-gradient-indigo-purple {
//           background: linear-gradient(to right, #6366f1, #a855f7);
//         }

//         .pp-gradient-yellow-orange {
//           background: linear-gradient(to right, #eab308, #f97316);
//         }

//         .pp-project-card:hover .pp-card-border-gradient {
//           opacity: 1;
//         }

//         /* Responsive */
//         @media (max-width: 1024px) {
//           .pp-projects-grid {
//             grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
//             gap: 30px;
//           }

//           .pp-section-title {
//             font-size: 42px;
//           }

//           .pp-projects-container {
//             padding: 0 40px;
//           }
//         }

//         @media (max-width: 768px) {
//           .pp-projects-container {
//             padding: 0 20px;
//           }

//           .pp-section-title {
//             font-size: 36px;
//           }

//           .pp-projects-grid {
//             grid-template-columns: 1fr;
//             gap: 24px;
//           }

//           .pp-filter-container {
//             gap: 10px;
//           }

//           .pp-filter-btn {
//             padding: 12px 20px;
//             font-size: 14px;
//           }

//           .pp-project-metrics {
//             flex-wrap: wrap;
//             gap: 12px;
//           }

//           .pp-featured-card {
//             grid-column: span 1;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PortfolioProjects;

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Eye, Star, TrendingUp, Zap } from 'lucide-react';
import health from '../assets/doctor1.jpg';
import student from '../assets/students.jpg';
import analyse from '../assets/analyse.jpg';
import ecommerce from '../assets/e-commerce.avif';
import wedding from '../assets/wedding.jpg';

const PortfolioProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'HealthCare Application',
      featured: true,
      status: 'In Development',
      category: 'web',
      description: 'Advanced healthcare management system with AI-powered diagnostics, patient tracking, and telemedicine capabilities.',
      image: health,
      tags: ['React', 'Node.js', 'AI/ML', 'PostgreSQL'],
      metrics: { users: '10K+', rating: '4.9', performance: '98%' },
      links: { live: '#', github: '#' },
      accent: '#38bdf8',
      accentRgb: '56,189,248',
      detailPage: '/projects/healthcare',
    },
    {
      id: 2,
      title: 'Wedding Manage Application',
      featured: true,
      status: 'Live',
      category: 'web',
      description: 'Complete wedding planning platform with vendor management, guest lists, budget tracking and real-time coordination tools.',
      image: wedding,
      tags: ['React', 'TypeScript', 'Stripe', 'MongoDB'],
      metrics: { users: '25K+', rating: '4.8', performance: '95%' },
      links: { live: '#', github: '#' },
      accent: '#e879a0',
      accentRgb: '232,121,160',
      detailPage: '/projects/wedding',
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      featured: false,
      status: 'Live',
      category: 'web',
      description: 'Full-featured online marketplace with real-time inventory, payment integration, and advanced analytics dashboard.',
      image: ecommerce,
      tags: ['React', 'TypeScript', 'Stripe', 'MongoDB'],
      metrics: { users: '25K+', rating: '4.8', performance: '95%' },
      links: { live: '#', github: '#' },
      accent: '#a78bfa',
      accentRgb: '167,139,250',
      detailPage: '/projects/ecommerce',
    },
    {
      id: 4,
      title: 'Student Management System',
      featured: false,
      status: 'Live',
      category: 'web',
      description: 'Comprehensive academic platform for managing student records, attendance, grades, and communication between staff and parents.',
      image: student,
      tags: ['React', 'Spring Boot', 'MySQL', 'Docker'],
      metrics: { users: '5K+', rating: '4.7', performance: '96%' },
      links: { live: '#', github: '#' },
      accent: '#34d399',
      accentRgb: '52,211,153',
      detailPage: '/projects/student-management',
    },
    {
      id: 5,
      title: 'AI Chat Assistant',
      featured: false,
      status: 'Live',
      category: 'ai',
      description: 'Intelligent conversational AI with natural language processing, context awareness, and multi-language support.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      tags: ['Python', 'OpenAI', 'React', 'FastAPI'],
      metrics: { users: '15K+', rating: '4.7', performance: '92%' },
      links: { live: '#', github: '#' },
      accent: '#7c8cf8',
      accentRgb: '124,140,248',
      detailPage: '/projects/aichat',
    },
    {
      id: 6,
      title: 'Analytics Dashboard',
      featured: false,
      status: 'Live',
      category: 'web',
      description: 'Real-time business intelligence platform with customizable widgets, data visualization, and reporting tools.',
      image: analyse,
      tags: ['Vue.js', 'D3.js', 'Node.js', 'Redis'],
      metrics: { users: '12K+', rating: '4.8', performance: '96%' },
      links: { live: '#', github: '#' },
      accent: '#fb923c',
      accentRgb: '251,146,60',
      detailPage: '/projects/analytics',
    },
    {
      id: 7,
      title: 'Task Management App',
      featured: false,
      status: 'Live',
      category: 'mobile',
      description: 'Cross-platform productivity app with team collaboration, time tracking, and intelligent task prioritization.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      tags: ['React Native', 'Firebase', 'Redux'],
      metrics: { users: '20K+', rating: '4.6', performance: '94%' },
      links: { live: '#', github: '#' },
      accent: '#38bdf8',
      accentRgb: '56,189,248',
      detailPage: '/projects/task-management',
    },
    {
      id: 8,
      title: 'Portfolio CMS',
      featured: false,
      status: 'Live',
      category: 'web',
      description: 'Dynamic content management system for creative professionals with drag-and-drop builder and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Prisma', 'TailwindCSS'],
      metrics: { users: '8K+', rating: '4.9', performance: '97%' },
      links: { live: '#', github: '#' },
      accent: '#34d399',
      accentRgb: '52,211,153',
    },
    {
      id: 9,
      title: 'Real Estate Platform',
      featured: false,
      status: 'Live',
      category: 'web',
      description: 'Modern property listing platform with map integration, virtual tours, mortgage calculator, and agent matching system.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'Google Maps', 'MongoDB'],
      metrics: { users: '18K+', rating: '4.7', performance: '93%' },
      links: { live: '#', github: '#' },
      accent: '#e879a0',
      accentRgb: '232,121,160',
      detailPage: '/projects/real-estate',
    },
    {
      id: 10,
      title: 'Food Delivery App',
      featured: false,
      status: 'Live',
      category: 'mobile',
      description: 'On-demand food delivery platform with real-time order tracking, restaurant management, and driver coordination system.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
      tags: ['React Native', 'Node.js', 'Socket.io', 'PostgreSQL'],
      metrics: { users: '30K+', rating: '4.8', performance: '97%' },
      links: { live: '#', github: '#' },
      accent: '#fb923c',
      accentRgb: '251,146,60',
      detailPage: '/projects/food-delivery',
    },
    {
      id: 11,
      title: 'Crypto Trading Dashboard',
      featured: false,
      status: 'Live',
      category: 'ai',
      description: 'Advanced cryptocurrency trading interface with live price feeds, portfolio analytics, AI-driven signals and risk management tools.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      tags: ['React', 'WebSocket', 'Python', 'TensorFlow'],
      metrics: { users: '9K+', rating: '4.6', performance: '99%' },
      links: { live: '#', github: '#' },
      accent: '#a78bfa',
      accentRgb: '167,139,250',
      detailPage: '/projects/crypto-dashboard',
    },
    {
      id: 12,
      title: 'Learning Management System',
      featured: false,
      status: 'In Development',
      category: 'web',
      description: 'Full-featured e-learning platform with video streaming, interactive quizzes, progress tracking and certification generation.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      tags: ['React', 'Django', 'AWS S3', 'PostgreSQL'],
      metrics: { users: '7K+', rating: '4.9', performance: '95%' },
      links: { live: '#', github: '#' },
      accent: '#7c8cf8',
      accentRgb: '124,140,248',
      detailPage: '/projects/lms',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ai', label: 'AI / ML', count: projects.filter(p => p.category === 'ai').length },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const handleViewProject = (project) => {
    if (project.detailPage) navigate(project.detailPage);
  };

  return (
    <div ref={sectionRef} className="pf-root">

      {/* Background */}
      <div className="pf-grid-bg" />
      <div className="pf-glow-1" />
      <div className="pf-glow-2" />
      <div className="pf-glow-3" />

      <div className={`pf-inner ${isVisible ? 'pf-in' : ''}`}>

        {/* Header */}
        <header className="pf-header">
          <div className="pf-eyebrow">
            <span className="pf-eyebrow-line" />
            <span>Portfolio Showcase</span>
            <span className="pf-eyebrow-line" />
          </div>
          <h2 className="pf-title">
            Featured <em className="pf-title-em">Projects</em>
          </h2>
          <p className="pf-subtitle">
            Explore my collection of innovative solutions and creative experiments.
            Each project represents a unique challenge and a commitment to excellence.
          </p>
        </header>

        {/* Filter nav — same bento style */}
        <div className="pf-filter-wrap">
          {filters.map(f => (
            <button
              key={f.id}
              className={`pf-filter-btn ${activeFilter === f.id ? 'pf-filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              <span>{f.label}</span>
              <span className="pf-filter-count">{f.count}</span>
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="pf-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`pf-card ${hoveredProject === project.id ? 'pf-card--hovered' : ''}`}
              style={{
                '--ac': project.accent,
                '--acr': project.accentRgb,
                animationDelay: `${index * 0.07}s`,
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Top accent bar */}
              <div className="pf-card-topbar-line" />

              {/* Badges */}
              <div className="pf-badge-row">
                {project.featured && (
                  <span className="pf-badge pf-badge--featured">
                    <Star size={12} />
                    Featured
                  </span>
                )}
                <span className={`pf-badge pf-badge--status ${project.status === 'Live' ? 'pf-badge--live' : 'pf-badge--dev'}`}>
                  <span className="pf-badge-dot" />
                  {project.status}
                </span>
              </div>

              {/* Image */}
              <div className="pf-img-wrap">
                <img src={project.image} alt={project.title} className="pf-img" />
                <div className="pf-img-overlay">
                  <div className="pf-overlay-actions">
                    <button className="pf-overlay-primary" onClick={() => handleViewProject(project)}>
                      <Eye size={16} />
                      <span>View Project</span>
                    </button>
                    <div className="pf-overlay-icons">
                      <a href={project.links?.live} className="pf-overlay-icon-btn" onClick={e => e.stopPropagation()}>
                        <ExternalLink size={16} />
                      </a>
                      <a href={project.links?.github} className="pf-overlay-icon-btn" onClick={e => e.stopPropagation()}>
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pf-content">
                <h3 className="pf-card-title">{project.title}</h3>
                <p className="pf-card-desc">{project.description}</p>

                {/* Metrics */}
                <div className="pf-metrics">
                  <div className="pf-metric">
                    <TrendingUp size={13} className="pf-metric-icon" />
                    <span className="pf-metric-label">Users</span>
                    <span className="pf-metric-val">{project.metrics.users}</span>
                  </div>
                  <div className="pf-metric">
                    <Star size={13} className="pf-metric-icon" />
                    <span className="pf-metric-label">Rating</span>
                    <span className="pf-metric-val">{project.metrics.rating}</span>
                  </div>
                  <div className="pf-metric">
                    <Zap size={13} className="pf-metric-icon" />
                    <span className="pf-metric-label">Perf</span>
                    <span className="pf-metric-val">{project.metrics.performance}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="pf-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="pf-tag">{tag}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pf-actions">
                  <button className="pf-action-primary" onClick={() => handleViewProject(project)}>
                    <Eye size={15} />
                    <span>View Project</span>
                  </button>
                  <a href={project.links?.github} className="pf-action-icon">
                    <Github size={16} />
                  </a>
                  <a href={project.links?.live} className="pf-action-icon">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Glow fill on hover */}
              <div className="pf-card-glow" />
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <div className="pf-footer-strip">
          {['Open to Collaboration', 'Available for Freelance', 'Clean Architecture', 'Performance First', 'User Centered Design'].map((label, i, arr) => (
            <React.Fragment key={i}>
              <span className="pf-strip-item">{label}</span>
              {i < arr.length - 1 && <span className="pf-strip-dot">·</span>}
            </React.Fragment>
          ))}
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .pf-root {
          min-height: 100vh;
          width: 100%;
          background: #080c14;
          position: relative;
          overflow: hidden;
          padding: 100px 48px 80px;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Background ── */
        .pf-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none;
        }

        .pf-glow-1 {
          position: absolute;
          top: -200px; left: -200px;
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(124,140,248,0.12) 0%, transparent 70%);
          pointer-events: none;
          animation: pf-drift1 18s ease-in-out infinite alternate;
        }

        .pf-glow-2 {
          position: absolute;
          bottom: -150px; right: -100px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(52,211,153,0.09) 0%, transparent 70%);
          pointer-events: none;
          animation: pf-drift2 22s ease-in-out infinite alternate;
        }

        .pf-glow-3 {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 800px; height: 800px;
          background: radial-gradient(circle, rgba(232,121,160,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        @keyframes pf-drift1 {
          from { transform: translate(0,0); }
          to   { transform: translate(80px,60px); }
        }
        @keyframes pf-drift2 {
          from { transform: translate(0,0); }
          to   { transform: translate(-60px,-40px); }
        }

        /* ── Inner ── */
        .pf-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .pf-inner.pf-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Header ── */
        .pf-header {
          margin-bottom: 64px;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .pf-eyebrow {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #4a5568;
          margin-bottom: 28px;
        }

        .pf-eyebrow-line {
          display: block;
          width: 32px; height: 1px;
          background: #4a5568;
        }

        .pf-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(52px, 6vw, 60px);
          font-weight: 400;
          line-height: 1.0;
          color: #f0f4ff;
          letter-spacing: -1.5px;
          margin-bottom: 24px;
        }

        .pf-title-em {
          font-style: italic;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pf-subtitle {
          margin: 0 auto;
          font-size: 17px;
          line-height: 1.75;
          color: #64748b;
          font-weight: 300;
          max-width: 520px;
        }

        /* ── Filter ── */
        .pf-filter-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 6px;
          width: fit-content;
          margin: 0 auto 56px;
        }

        .pf-filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          background: transparent;
          border: none;
          border-radius: 11px;
          color: #4a5568;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.3px;
          white-space: nowrap;
        }

        .pf-filter-btn:hover {
          color: #94a3b8;
          background: rgba(255,255,255,0.04);
        }

        .pf-filter-btn--active {
          background: #0f1929;
          color: #f0f4ff;
          border: 1px solid rgba(124,140,248,0.25);
        }

        .pf-filter-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px; height: 22px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          font-size: 11px;
          color: #64748b;
        }

        .pf-filter-btn--active .pf-filter-count {
          background: rgba(124,140,248,0.15);
          color: #a5b4fc;
        }

        /* ── Grid ── */
        .pf-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
          gap: 20px;
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 2px;
        }

        /* ── Card ── */
        .pf-card {
          position: relative;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          overflow: hidden;
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          display: flex;
          flex-direction: column;
          /* DELETE: animation, cursor */
        }

        @keyframes pf-fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pf-card--hovered {
          transform: translateY(-8px);
          border-color: rgba(102,126,234,0.3);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
          background: rgba(17,24,39,0.6); /* same, no bg change */
        }

        .pf-card-topbar-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;   /* was: top */
          height: 3px;                     /* was: 2px */
          background: linear-gradient(to right, #3b82f6, #06b6d4); /* per-card color */
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
          z-index: 5;
        }

        .pf-card--hovered .pf-card-topbar-line {
          transform: scaleX(1);
        }

        /* Glow fill */
        .pf-card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top left, rgba(var(--acr), 0.06) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .pf-card--hovered .pf-card-glow {
          opacity: 1;
        }

        /* Corner dot */
        .pf-card::after {
          content: '';
          position: absolute;
          bottom: 20px; right: 20px;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--ac);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .pf-card--hovered::after {
          opacity: 0.6;
        }

        /* Badges */
        .pf-badge-row {
          position: absolute;
          top: 18px; left: 18px;
          display: flex;
          gap: 8px;
          z-index: 4;
        }

        .pf-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
          backdrop-filter: blur(10px);
        }

        .pf-badge--featured {
          background: rgba(251,191,36,0.15);
          border: 1px solid rgba(251,191,36,0.3);
          color: #fcd34d;
        }

        .pf-badge--live {
          background: rgba(52,211,153,0.15);
          border: 1px solid rgba(52,211,153,0.3);
          color: #6ee7b7;
        }

        .pf-badge--dev {
          background: rgba(56,189,248,0.12);
          border: 1px solid rgba(56,189,248,0.25);
          color: #7dd3fc;
        }

        .pf-badge-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: currentColor;
          animation: pf-pulse 2s ease-in-out infinite;
        }

        @keyframes pf-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.3); }
        }

        /* Image */
        .pf-img-wrap {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .pf-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
          display: block;
        }

        .pf-card--hovered .pf-img {
          transform: scale(1.07);
        }

        .pf-img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(var(--acr), 0.88);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .pf-card--hovered .pf-img-overlay {
          opacity: 1;
        }

        .pf-overlay-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .pf-overlay-primary {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 26px;
          background: rgba(255,255,255,0.95);
          color: #0b1120;
          border: none;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.25s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .pf-overlay-primary:hover {
          transform: scale(1.05);
        }

        .pf-overlay-icons {
          display: flex;
          gap: 10px;
        }

        .pf-overlay-icon-btn {
          width: 42px; height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .pf-overlay-icon-btn:hover {
          background: rgba(255,255,255,0.95);
          color: #0b1120;
        }

        /* Content */
        .pf-content {
          padding: 28px 28px 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
          position: relative;
          z-index: 2;
        }

        .pf-card-title {
          font-family: 'DM Serif Display', serif;
          font-size: 22px;
          color: #f0f4ff;
          letter-spacing: -0.4px;
          margin-bottom: 10px;
          transition: color 0.3s ease;
        }

        .pf-card--hovered .pf-card-title {
          color: #fff;
        }

        .pf-card-desc {
          font-size: 13px;
          line-height: 1.8;
          color: #4a5568;
          font-weight: 300;
          margin-bottom: 18px;
        }

        /* Metrics */
        .pf-metrics {
          display: flex;
          gap: 18px;
          padding: 14px 0;
          margin-bottom: 18px;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .pf-metric {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
        }

        .pf-metric-icon {
          color: var(--ac);
          flex-shrink: 0;
        }

        .pf-metric-label {
          color: #2d3748;
          font-weight: 500;
        }

        .pf-metric-val {
          color: #94a3b8;
          font-weight: 600;
        }

        /* Tags */
        .pf-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 22px;
        }

        .pf-tag {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 6px;
          color: #94a3b8;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1px;
          transition: all 0.25s ease;
        }

        .pf-card--hovered .pf-tag {
          color: color-mix(in srgb, var(--ac) 85%, white);
          background: rgba(var(--acr), 0.08);
          border-color: rgba(var(--acr), 0.22);
        }

        /* Actions */
        .pf-actions {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }

        .pf-action-primary {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 20px;
          background: rgba(var(--acr), 0.12);
          border: 1px solid rgba(var(--acr), 0.25);
          border-radius: 50px;
          color: var(--ac);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .pf-action-primary:hover {
          background: rgba(var(--acr), 0.2);
          transform: translateY(-2px);
        }

        .pf-action-icon {
          width: 44px; height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50%;
          color: #4a5568;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .pf-action-icon:hover {
          color: var(--ac);
          background: rgba(var(--acr), 0.08);
          border-color: rgba(var(--acr), 0.2);
        }

        /* ── Footer strip ── */
        .pf-footer-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          padding: 48px 0 0;
        }

        .pf-strip-item {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #2d3748;
          transition: color 0.3s ease;
        }

        .pf-strip-item:hover { color: #4a5568; }

        .pf-strip-dot {
          color: #1e293b;
          font-size: 18px;
          line-height: 1;
        }

        /* ── Responsive ── */
        @media (max-width: 1200px) {
          .pf-root { padding: 80px 32px 60px; }
          .pf-grid { grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); }
        }

        @media (max-width: 900px) {
          .pf-root { padding: 70px 24px 60px; }
          .pf-grid { grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }
          .pf-filter-wrap { flex-wrap: wrap; width: auto; }
        }

        @media (max-width: 640px) {
          .pf-root { padding: 60px 16px 50px; }
          .pf-title { font-size: 44px; }
          .pf-grid { grid-template-columns: 1fr; border-radius: 16px; }
          .pf-content { padding: 22px; }
          .pf-filter-wrap { gap: 6px; padding: 4px; }
          .pf-filter-btn { padding: 10px 14px; font-size: 12px; }
          .pf-metrics { gap: 12px; flex-wrap: wrap; }
          .pf-footer-strip { gap: 12px; }
        }
      `}</style>
    </div>
  );
};

export default PortfolioProjects;