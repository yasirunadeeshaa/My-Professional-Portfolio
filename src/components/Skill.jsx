import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Palette, 
  Database, 
  Server,
  GitBranch,
  Wrench,
  Award,
  CheckCircle2,
  Zap,
  TrendingUp
} from 'lucide-react';

const SkillsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code2 size={28} />,
      color: '#667eea',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      skills: ['Java', 'Python', 'JavaScript', 'SQL', 'PHP']
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Palette size={28} />,
      color: '#f093fb',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server size={28} />,
      color: '#4facfe',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      skills: ['Express.js', 'Spring Boot']
    },
    {
      id: 'database',
      title: 'Databases',
      icon: <Database size={28} />,
      color: '#43e97b',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      skills: ['MySQL', 'MongoDB']
    },
    {
      id: 'version',
      title: 'Version Control',
      icon: <GitBranch size={28} />,
      color: '#fa709a',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      skills: ['Git', 'GitHub']
    },
    {
      id: 'tools',
      title: 'Software Development & Tools',
      icon: <Wrench size={28} />,
      color: '#30cfd0',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      skills: ['RESTful APIs', 'Postman', 'Agile', 'Docker', 'CI/CD']
    }
  ];

  const stats = [
    { icon: <Code2 size={24} />, value: '20+', label: 'Technologies', color: '#667eea' },
    { icon: <Award size={24} />, value: '5+', label: 'Years Experience', color: '#f093fb' },
    { icon: <CheckCircle2 size={24} />, value: '50+', label: 'Projects Built', color: '#43e97b' },
    { icon: <TrendingUp size={24} />, value: '100%', label: 'Commitment', color: '#4facfe' }
  ];

  return (
    <div className="sp-skills-page" ref={sectionRef}>
      {/* Hero Section */}
      <div className={`sp-hero-section ${isVisible ? 'sp-visible' : ''}`}>
        <div className="sp-hero-content">
          <div className="sp-hero-badge">
            <Zap size={16} />
            <span>Technical Excellence</span>
          </div>
          <h1 className="sp-hero-title">
            My <span className="sp-gradient-text">Technical</span> Arsenal
          </h1>
          <p className="sp-hero-subtitle">
            A comprehensive showcase of technologies and tools I've mastered throughout my journey as a full-stack developer
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className={`sp-skills-container ${isVisible ? 'sp-visible' : ''}`}>
        <div className="sp-skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={`sp-skill-category ${activeCategory === category.id ? 'sp-active' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--sp-category-color': category.color,
                '--sp-category-gradient': category.gradient
              }}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="sp-category-header">
                <div className="sp-category-icon">{category.icon}</div>
                <h3 className="sp-category-title">{category.title}</h3>
              </div>

              <div className="sp-skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="sp-skill-tag"
                    style={{ animationDelay: `${skillIndex * 0.05}s` }}
                  >
                    <CheckCircle2 size={14} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <div className="sp-category-overlay"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .sp-skills-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          padding: 80px 40px;
          position: relative;
          overflow: hidden;
        }

        .sp-skills-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(118, 75, 162, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(240, 147, 251, 0.1) 0%, transparent 60%);
          pointer-events: none;
          animation: sp-pulse 10s ease-in-out infinite;
        }

        @keyframes sp-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        /* Hero Section */
        .sp-hero-section {
          max-width: 1200px;
          margin: 0 auto 80px;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .sp-hero-section.sp-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sp-hero-content {
          margin-bottom: 60px;
        }

        .sp-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: rgba(102, 126, 234, 0.2);
          border: 1px solid rgba(102, 126, 234, 0.4);
          border-radius: 50px;
          color: #a5b4fc;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 30px;
          animation: sp-float 3s ease-in-out infinite;
        }

        @keyframes sp-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .sp-hero-title {
          font-size: 64px;
          font-weight: 900;
          color: white;
          margin-bottom: 24px;
          letter-spacing: -2px;
          line-height: 1.1;
        }

        .sp-gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sp-hero-subtitle {
          font-size: 20px;
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* Stats Grid */
        .sp-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .sp-stat-card {
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 32px;
          text-align: center;
          backdrop-filter: blur(20px);
          opacity: 0;
          animation: sp-slideUp 0.6s ease forwards;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .sp-stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--sp-stat-color);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .sp-stat-card:hover {
          transform: translateY(-8px);
          border-color: var(--sp-stat-color);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .sp-stat-card:hover::before {
          transform: scaleX(1);
        }

        @keyframes sp-slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .sp-stat-icon {
          color: var(--sp-stat-color);
          margin-bottom: 16px;
        }

        .sp-stat-value {
          font-size: 36px;
          font-weight: 800;
          color: white;
          margin-bottom: 8px;
          background: linear-gradient(135deg, white, var(--sp-stat-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sp-stat-label {
          font-size: 14px;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Skills Container */
        .sp-skills-container {
          max-width: 1400px;
          margin: 0 auto 80px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.2s;
        }

        .sp-skills-container.sp-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sp-skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .sp-skill-category {
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(20px);
          transition: all 0.4s ease;
          opacity: 0;
          animation: sp-fadeInScale 0.6s ease forwards;
          position: relative;
          overflow: hidden;
        }

        @keyframes sp-fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .sp-skill-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--sp-category-gradient);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .sp-skill-category:hover::before {
          transform: scaleX(1);
        }

        .sp-skill-category:hover {
          transform: translateY(-8px);
          border-color: var(--sp-category-color);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
        }

        .sp-category-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--sp-category-gradient);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .sp-skill-category:hover .sp-category-overlay {
          opacity: 0.1;
        }

        .sp-category-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 1;
        }

        .sp-category-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: var(--sp-category-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }

        .sp-skill-category:hover .sp-category-icon {
          transform: rotate(5deg) scale(1.1);
        }

        .sp-category-title {
          font-size: 22px;
          font-weight: 700;
          color: white;
          flex: 1;
        }

        .sp-skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          position: relative;
          z-index: 1;
        }

        .sp-skill-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #e2e8f0;
          font-size: 15px;
          font-weight: 600;
          transition: all 0.3s ease;
          opacity: 0;
          animation: sp-fadeIn 0.4s ease forwards;
          cursor: default;
        }

        @keyframes sp-fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .sp-skill-tag svg {
          color: var(--sp-category-color);
          transition: all 0.3s ease;
        }

        .sp-skill-tag:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--sp-category-color);
          transform: translateY(-3px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .sp-skill-tag:hover svg {
          transform: scale(1.2);
        }

        @keyframes sp-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .sp-cta-content {
          position: relative;
          z-index: 1;
        }

        .sp-cta-icon {
          color: #667eea;
          margin-bottom: 24px;
          animation: sp-pulse-icon 2s ease-in-out infinite;
        }

        @keyframes sp-pulse-icon {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .sp-cta-content h2 {
          font-size: 40px;
          font-weight: 800;
          color: white;
          margin-bottom: 16px;
          letter-spacing: -1px;
        }

        .sp-cta-content p {
          font-size: 18px;
          color: #94a3b8;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .sp-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 20px 48px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 50px;
          color: white;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
        }

        .sp-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 50px rgba(102, 126, 234, 0.5);
        }

        .sp-cta-button svg {
          transition: transform 0.3s ease;
        }

        .sp-cta-button:hover svg {
          transform: translateX(5px);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .sp-hero-title {
            font-size: 56px;
          }

          .sp-skills-grid {
            gap: 24px;
          }
        }

        @media (max-width: 968px) {
          .sp-skills-page {
            padding: 60px 30px;
          }

          .sp-hero-title {
            font-size: 48px;
          }

          .sp-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .sp-skills-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }


          .sp-cta-content h2 {
            font-size: 32px;
          }
        }

        @media (max-width: 640px) {
          .sp-skills-page {
            padding: 40px 20px;
          }

          .sp-hero-title {
            font-size: 36px;
          }

          .sp-hero-subtitle {
            font-size: 16px;
          }

          .sp-stats-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .sp-stat-card {
            padding: 24px;
          }

          .sp-skill-category {
            padding: 30px;
          }

          .sp-category-icon {
            width: 50px;
            height: 50px;
          }

          .sp-category-title {
            font-size: 18px;
          }

          .sp-skills-list {
            gap: 8px;
          }

          .sp-skill-tag {
            padding: 10px 16px;
            font-size: 14px;
          }

        }
      `}</style>
    </div>
  );
};

export default SkillsPage;


// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Code2, 
//   Palette, 
//   Database, 
//   Server,
//   GitBranch,
//   Wrench,
//   Award,
//   CheckCircle2,
//   Zap,
//   TrendingUp,
//   Star,
//   Target,
//   Rocket,
//   Activity
// } from 'lucide-react';

// const SkillsPage = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [hoveredSkill, setHoveredSkill] = useState(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const skillCategories = [
//     {
//       id: 'languages',
//       title: 'Programming Languages',
//       icon: <Code2 size={28} />,
//       color: '#667eea',
//       gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       skills: [
//         { name: 'Java', level: 90 },
//         { name: 'Python', level: 85 },
//         { name: 'JavaScript', level: 95 },
//         { name: 'SQL', level: 88 },
//         { name: 'PHP', level: 80 }
//       ]
//     },
//     {
//       id: 'frontend',
//       title: 'Frontend Development',
//       icon: <Palette size={28} />,
//       color: '#f093fb',
//       gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
//       skills: [
//         { name: 'React.js', level: 95 },
//         { name: 'HTML5', level: 98 },
//         { name: 'CSS3', level: 92 },
//         { name: 'Bootstrap', level: 90 }
//       ]
//     },
//     {
//       id: 'backend',
//       title: 'Backend Development',
//       icon: <Server size={28} />,
//       color: '#4facfe',
//       gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
//       skills: [
//         { name: 'Express.js', level: 88 },
//         { name: 'Spring Boot', level: 85 }
//       ]
//     },
//     {
//       id: 'database',
//       title: 'Databases',
//       icon: <Database size={28} />,
//       color: '#43e97b',
//       gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
//       skills: [
//         { name: 'MySQL', level: 90 },
//         { name: 'MongoDB', level: 87 }
//       ]
//     },
//     {
//       id: 'version',
//       title: 'Version Control',
//       icon: <GitBranch size={28} />,
//       color: '#fa709a',
//       gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
//       skills: [
//         { name: 'Git', level: 92 },
//         { name: 'GitHub', level: 90 }
//       ]
//     },
//     {
//       id: 'tools',
//       title: 'Development & Tools',
//       icon: <Wrench size={28} />,
//       color: '#30cfd0',
//       gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
//       skills: [
//         { name: 'RESTful APIs', level: 93 },
//         { name: 'Postman', level: 88 },
//         { name: 'Agile', level: 85 },
//         { name: 'Docker', level: 82 },
//         { name: 'CI/CD', level: 80 }
//       ]
//     }
//   ];

//   const stats = [
//     { icon: <Code2 size={24} />, value: '20+', label: 'Technologies Mastered', color: '#667eea' },
//     { icon: <Award size={24} />, value: '5+', label: 'Years of Excellence', color: '#f093fb' },
//     { icon: <Rocket size={24} />, value: '50+', label: 'Projects Delivered', color: '#43e97b' },
//     { icon: <Target size={24} />, value: '98%', label: 'Client Satisfaction', color: '#4facfe' }
//   ];

//   return (
//     <div className="sp-skills-page" ref={sectionRef}>
//       {/* Hero Section */}
//       <div className={`sp-hero-section ${isVisible ? 'sp-visible' : ''}`}>
//         <div className="sp-hero-content">
//           <div className="sp-hero-badge">
//             <Star size={16} className="sp-badge-star" />
//             <span>Professional Expertise</span>
//           </div>
//           <h1 className="sp-hero-title">
//             Technical <span className="sp-gradient-text">Excellence</span>
//           </h1>
//           <p className="sp-hero-subtitle">
//             Comprehensive mastery of cutting-edge technologies and frameworks, refined through years of hands-on experience in delivering enterprise-grade solutions
//           </p>
//         </div>

//         {/* Stats Grid */}
//         <div className="sp-stats-grid">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="sp-stat-card"
//               style={{ 
//                 animationDelay: `${index * 0.1}s`,
//                 '--sp-stat-color': stat.color 
//               }}
//             >
//               <div className="sp-stat-icon-wrapper">
//                 <div className="sp-stat-icon">{stat.icon}</div>
//               </div>
//               <div className="sp-stat-value">{stat.value}</div>
//               <div className="sp-stat-label">{stat.label}</div>
//               <div className="sp-stat-glow"></div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Skills Grid */}
//       <div className={`sp-skills-container ${isVisible ? 'sp-visible' : ''}`}>
//         <div className="sp-section-header">
//           <Activity size={24} className="sp-section-icon" />
//           <h2 className="sp-section-title">Core Competencies</h2>
//           <p className="sp-section-subtitle">Proficiency levels across diverse technology stacks</p>
//         </div>

//         <div className="sp-skills-grid">
//           {skillCategories.map((category, index) => (
//             <div
//               key={category.id}
//               className={`sp-skill-category ${activeCategory === category.id ? 'sp-active' : ''}`}
//               style={{ 
//                 animationDelay: `${index * 0.1}s`,
//                 '--sp-category-color': category.color,
//                 '--sp-category-gradient': category.gradient
//               }}
//               onMouseEnter={() => setActiveCategory(category.id)}
//               onMouseLeave={() => setActiveCategory(null)}
//             >
//               <div className="sp-category-header">
//                 <div className="sp-category-icon-wrapper">
//                   <div className="sp-category-icon">{category.icon}</div>
//                   <div className="sp-icon-glow"></div>
//                 </div>
//                 <div className="sp-category-title-wrapper">
//                   <h3 className="sp-category-title">{category.title}</h3>
//                   <div className="sp-category-count">{category.skills.length} skills</div>
//                 </div>
//               </div>

//               <div className="sp-skills-list">
//                 {category.skills.map((skill, skillIndex) => (
//                   <div 
//                     key={skillIndex} 
//                     className="sp-skill-item"
//                     style={{ animationDelay: `${skillIndex * 0.05}s` }}
//                     onMouseEnter={() => setHoveredSkill(`${category.id}-${skillIndex}`)}
//                     onMouseLeave={() => setHoveredSkill(null)}
//                   >
//                     <div className="sp-skill-header">
//                       <div className="sp-skill-name">
//                         <CheckCircle2 size={16} className="sp-skill-check" />
//                         <span>{skill.name}</span>
//                       </div>
//                       <div className="sp-skill-level-text">{skill.level}%</div>
//                     </div>
//                     <div className="sp-skill-bar">
//                       <div 
//                         className="sp-skill-progress"
//                         style={{ 
//                           width: hoveredSkill === `${category.id}-${skillIndex}` ? `${skill.level}%` : '0%',
//                           transitionDelay: `${skillIndex * 0.1}s`
//                         }}
//                       >
//                         <div className="sp-progress-shine"></div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="sp-category-overlay"></div>
//               <div className="sp-category-border-glow"></div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Expertise Banner */}
//       <div className={`sp-expertise-banner ${isVisible ? 'sp-visible' : ''}`}>
//         <div className="sp-banner-content">
//           <div className="sp-banner-icon">
//             <TrendingUp size={32} />
//           </div>
//           <div className="sp-banner-text">
//             <h3>Continuous Learning & Growth</h3>
//             <p>Constantly evolving skillset to stay ahead of industry trends and emerging technologies</p>
//           </div>
//         </div>
//         <div className="sp-banner-decoration"></div>
//       </div>

//       <style>{`
//         .sp-skills-page {
//           min-height: 100vh;
//           background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0f1624 100%);
//           padding: 100px 40px 80px;
//           position: relative;
//           overflow: hidden;
//         }

//         .sp-skills-page::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: 
//             radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.12) 0%, transparent 50%),
//             radial-gradient(circle at 80% 70%, rgba(118, 75, 162, 0.12) 0%, transparent 50%),
//             radial-gradient(circle at 50% 50%, rgba(240, 147, 251, 0.08) 0%, transparent 60%);
//           pointer-events: none;
//           animation: sp-pulse 12s ease-in-out infinite;
//         }

//         .sp-skills-page::after {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: 
//             linear-gradient(90deg, transparent 49.9%, rgba(102, 126, 234, 0.03) 50%, transparent 50.1%),
//             linear-gradient(0deg, transparent 49.9%, rgba(102, 126, 234, 0.03) 50%, transparent 50.1%);
//           background-size: 100px 100px;
//           pointer-events: none;
//           opacity: 0.3;
//         }

//         @keyframes sp-pulse {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.7; }
//         }

//         /* Hero Section */
//         .sp-hero-section {
//           max-width: 1400px;
//           margin: 0 auto 100px;
//           text-align: center;
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.8s ease;
//           position: relative;
//           z-index: 1;
//         }

//         .sp-hero-section.sp-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sp-hero-content {
//           margin-bottom: 80px;
//         }

//         .sp-hero-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           padding: 12px 28px;
//           background: rgba(17, 24, 39, 0.8);
//           border: 1px solid rgba(102, 126, 234, 0.3);
//           border-radius: 50px;
//           color: #a5b4fc;
//           font-size: 14px;
//           font-weight: 700;
//           margin-bottom: 32px;
//           backdrop-filter: blur(20px);
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1);
//           animation: sp-float 3s ease-in-out infinite;
//           position: relative;
//           overflow: hidden;
//         }

//         .sp-hero-badge::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
//           animation: sp-shine 3s infinite;
//         }

//         @keyframes sp-shine {
//           0% { left: -100%; }
//           50%, 100% { left: 100%; }
//         }

//         .sp-badge-star {
//           animation: sp-rotate-star 4s linear infinite;
//         }

//         @keyframes sp-rotate-star {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes sp-float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-12px); }
//         }

//         .sp-hero-title {
//           font-size: 72px;
//           font-weight: 900;
//           color: white;
//           margin-bottom: 28px;
//           letter-spacing: -3px;
//           line-height: 1.1;
//         }

//         .sp-gradient-text {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           position: relative;
//           display: inline-block;
//         }

//         .sp-gradient-text::after {
//           content: '';
//           position: absolute;
//           bottom: -8px;
//           left: 0;
//           right: 0;
//           height: 4px;
//           background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
//           border-radius: 2px;
//           animation: sp-expand 2s ease-out;
//         }

//         @keyframes sp-expand {
//           from { transform: scaleX(0); }
//           to { transform: scaleX(1); }
//         }

//         .sp-hero-subtitle {
//           font-size: 20px;
//           color: #94a3b8;
//           max-width: 800px;
//           margin: 0 auto;
//           line-height: 1.8;
//           font-weight: 400;
//         }

//         /* Stats Grid */
//         .sp-stats-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 32px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .sp-stat-card {
//           background: rgba(17, 24, 39, 0.6);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           border-radius: 24px;
//           padding: 40px 32px;
//           text-align: center;
//           backdrop-filter: blur(20px);
//           opacity: 0;
//           animation: sp-slideUp 0.6s ease forwards;
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           position: relative;
//           overflow: hidden;
//         }

//         .sp-stat-card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 3px;
//           background: var(--sp-stat-color);
//           transform: scaleX(0);
//           transition: transform 0.4s ease;
//         }

//         .sp-stat-glow {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           width: 100px;
//           height: 100px;
//           background: var(--sp-stat-color);
//           border-radius: 50%;
//           filter: blur(40px);
//           opacity: 0;
//           transform: translate(-50%, -50%);
//           transition: opacity 0.4s ease;
//           pointer-events: none;
//         }

//         .sp-stat-card:hover {
//           transform: translateY(-12px) scale(1.02);
//           border-color: var(--sp-stat-color);
//           box-shadow: 
//             0 24px 48px rgba(0, 0, 0, 0.4),
//             0 0 0 1px var(--sp-stat-color) inset;
//         }

//         .sp-stat-card:hover::before {
//           transform: scaleX(1);
//         }

//         .sp-stat-card:hover .sp-stat-glow {
//           opacity: 0.15;
//         }

//         @keyframes sp-slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .sp-stat-icon-wrapper {
//           position: relative;
//           display: inline-block;
//           margin-bottom: 20px;
//         }

//         .sp-stat-icon {
//           color: var(--sp-stat-color);
//           width: 56px;
//           height: 56px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 16px;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           transition: all 0.3s ease;
//         }

//         .sp-stat-card:hover .sp-stat-icon {
//           transform: scale(1.15) rotate(5deg);
//           background: rgba(255, 255, 255, 0.1);
//           box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
//         }

//         .sp-stat-value {
//           font-size: 48px;
//           font-weight: 900;
//           color: white;
//           margin-bottom: 8px;
//           background: linear-gradient(135deg, white, var(--sp-stat-color));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           letter-spacing: -1px;
//         }

//         .sp-stat-label {
//           font-size: 13px;
//           color: #94a3b8;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 1.2px;
//         }

//         /* Skills Container */
//         .sp-skills-container {
//           max-width: 1600px;
//           margin: 0 auto 100px;
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.8s ease 0.2s;
//           position: relative;
//           z-index: 1;
//         }

//         .sp-skills-container.sp-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sp-section-header {
//           text-align: center;
//           margin-bottom: 80px;
//         }

//         .sp-section-icon {
//           color: #667eea;
//           margin-bottom: 16px;
//         }

//         .sp-section-title {
//           font-size: 48px;
//           font-weight: 800;
//           color: white;
//           margin-bottom: 16px;
//           letter-spacing: -1px;
//         }

//         .sp-section-subtitle {
//           font-size: 18px;
//           color: #94a3b8;
//         }

//         .sp-skills-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 40px;
//         }

//         .sp-skill-category {
//           background: rgba(17, 24, 39, 0.6);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           border-radius: 28px;
//           padding: 48px;
//           backdrop-filter: blur(20px);
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           opacity: 0;
//           animation: sp-fadeInScale 0.6s ease forwards;
//           position: relative;
//           overflow: hidden;
//         }

//         @keyframes sp-fadeInScale {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         .sp-category-border-glow {
//           position: absolute;
//           top: -2px;
//           left: -2px;
//           right: -2px;
//           bottom: -2px;
//           background: var(--sp-category-gradient);
//           border-radius: 28px;
//           opacity: 0;
//           transition: opacity 0.4s ease;
//           pointer-events: none;
//           z-index: -1;
//           filter: blur(8px);
//         }

//         .sp-skill-category:hover .sp-category-border-glow {
//           opacity: 0.6;
//         }

//         .sp-skill-category::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 4px;
//           background: var(--sp-category-gradient);
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.5s ease;
//         }

//         .sp-skill-category:hover::before {
//           transform: scaleX(1);
//         }

//         .sp-skill-category:hover {
//           transform: translateY(-8px);
//           border-color: rgba(255, 255, 255, 0.15);
//           box-shadow: 
//             0 32px 64px rgba(0, 0, 0, 0.5),
//             0 0 0 1px rgba(255, 255, 255, 0.1) inset;
//         }

//         .sp-category-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: var(--sp-category-gradient);
//           opacity: 0;
//           transition: opacity 0.4s ease;
//           pointer-events: none;
//           mix-blend-mode: overlay;
//         }

//         .sp-skill-category:hover .sp-category-overlay {
//           opacity: 0.08;
//         }

//         .sp-category-header {
//           display: flex;
//           align-items: center;
//           gap: 20px;
//           margin-bottom: 36px;
//           padding-bottom: 28px;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//           position: relative;
//           z-index: 1;
//         }

//         .sp-category-icon-wrapper {
//           position: relative;
//         }

//         .sp-category-icon {
//           width: 72px;
//           height: 72px;
//           border-radius: 20px;
//           background: var(--sp-category-gradient);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           transition: all 0.4s ease;
//           box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
//           position: relative;
//           z-index: 1;
//         }

//         .sp-icon-glow {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           width: 100%;
//           height: 100%;
//           background: var(--sp-category-gradient);
//           border-radius: 20px;
//           filter: blur(16px);
//           opacity: 0;
//           transform: translate(-50%, -50%);
//           transition: opacity 0.4s ease;
//           pointer-events: none;
//         }

//         .sp-skill-category:hover .sp-category-icon {
//           transform: rotate(8deg) scale(1.1);
//         }

//         .sp-skill-category:hover .sp-icon-glow {
//           opacity: 0.6;
//         }

//         .sp-category-title-wrapper {
//           flex: 1;
//         }

//         .sp-category-title {
//           font-size: 26px;
//           font-weight: 800;
//           color: white;
//           margin-bottom: 6px;
//           letter-spacing: -0.5px;
//         }

//         .sp-category-count {
//           font-size: 13px;
//           color: #64748b;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//         }

//         .sp-skills-list {
//           display: flex;
//           flex-direction: column;
//           gap: 20px;
//           position: relative;
//           z-index: 1;
//         }

//         .sp-skill-item {
//           opacity: 0;
//           animation: sp-fadeIn 0.4s ease forwards;
//         }

//         @keyframes sp-fadeIn {
//           from {
//             opacity: 0;
//             transform: translateX(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         .sp-skill-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 10px;
//         }

//         .sp-skill-name {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           font-size: 16px;
//           font-weight: 600;
//           color: #e2e8f0;
//         }

//         .sp-skill-check {
//           color: var(--sp-category-color);
//           transition: transform 0.3s ease;
//         }

//         .sp-skill-item:hover .sp-skill-check {
//           transform: scale(1.3);
//         }

//         .sp-skill-level-text {
//           font-size: 14px;
//           font-weight: 700;
//           color: var(--sp-category-color);
//           min-width: 45px;
//           text-align: right;
//         }

//         .sp-skill-bar {
//           height: 8px;
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//           overflow: hidden;
//           position: relative;
//           box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
//         }

//         .sp-skill-progress {
//           height: 100%;
//           background: var(--sp-category-gradient);
//           border-radius: 10px;
//           transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
//           position: relative;
//           overflow: hidden;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
//         }

//         .sp-progress-shine {
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
//           animation: sp-progress-shine 2s infinite;
//         }

//         @keyframes sp-progress-shine {
//           0% { left: -100%; }
//           50%, 100% { left: 100%; }
//         }

//         /* Expertise Banner */
//         .sp-expertise-banner {
//           max-width: 1400px;
//           margin: 0 auto;
//           background: rgba(17, 24, 39, 0.6);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           border-radius: 28px;
//           padding: 56px;
//           backdrop-filter: blur(20px);
//           position: relative;
//           overflow: hidden;
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.8s ease 0.4s;
//           z-index: 1;
//         }

//         .sp-expertise-banner.sp-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sp-expertise-banner::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 4px;
//           background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #667eea);
//           background-size: 200% 100%;
//           animation: sp-gradient-flow 3s linear infinite;
//         }

//         @keyframes sp-gradient-flow {
//           0% { background-position: 0% 0%; }
//           100% { background-position: 200% 0%; }
//         }

//         .sp-banner-content {
//           display: flex;
//           align-items: center;
//           gap: 32px;
//           position: relative;
//           z-index: 1;
//         }

//         .sp-banner-icon {
//           width: 80px;
//           height: 80px;
//           border-radius: 20px;
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           flex-shrink: 0;
//           box-shadow: 0 12px 32px rgba(102, 126, 234, 0.4);
//           animation: sp-float 3s ease-in-out infinite;
//         }

//         .sp-banner-text h3 {
//           font-size: 32px;
//           font-weight: 800;
//           color: white;
//           margin-bottom: 12px;
//           letter-spacing: -0.5px;
//         }

//         .sp-banner-text p {
//           font-size: 18px;
//           color: #94a3b8;
//           line-height: 1.6;
//         }

//         .sp-banner-decoration {
//           position: absolute;
//           right: -100px;
//           top: -100px;
//           width: 300px;
//           height: 300px;
//           background: radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%);
//           border-radius: 50%;
//           pointer-events: none;
//         }

//         /* Responsive Design */
//         @media (max-width: 1400px) {
//           .sp-hero-title {
//             font-size: 64px;
//           }

//           .sp-skills-grid {
//             gap: 32px;
//           }
//         }

//         @media (max-width: 1024px) {
//           .sp-skills-page {
//             padding: 80px 32px 60px;
//           }

//           .sp-hero-title {
//             font-size: 56px;
//           }

//           .sp-stats-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 24px;
//           }

//           .sp-skills-grid {
//             grid-template-columns: 1fr;
//             gap: 28px;
//           }

//           .sp-skill-category {
//             padding: 40px;
//           }

//           .sp-section-title {
//             font-size: 40px;
//           }

//           .sp-expertise-banner {
//             padding: 48px;
//           }
//         }

//         @media (max-width: 768px) {
//           .sp-skills-page {
//             padding: 60px 24px 50px;
//           }

//           .sp-hero-title {
//             font-size: 48px;
//           }

//           .sp-hero-subtitle {
//             font-size: 18px;
//           }

//           .sp-stats-grid {
//             grid-template-columns: 1fr;
//             gap: 20px;
//           }

//           .sp-stat-card {
//             padding: 32px 24px;
//           }

//           .sp-section-title {
//             font-size: 36px;
//           }

//           .sp-section-subtitle {
//             font-size: 16px;
//           }

//           .sp-skill-category {
//             padding: 32px;
//           }

//           .sp-category-icon {
//             width: 64px;
//             height: 64px;
//           }

//           .sp-category-title {
//             font-size: 22px;
//           }

//           .sp-expertise-banner {
//             padding: 40px 32px;
//           }

//           .sp-banner-content {
//             flex-direction: column;
//             text-align: center;
//           }

//           .sp-banner-text h3 {
//             font-size: 28px;
//           }

//           .sp-banner-text p {
//             font-size: 16px;
//           }
//         }

//         @media (max-width: 640px) {
//           .sp-skills-page {
//             padding: 50px 20px 40px;
//           }

//           .sp-hero-title {
//             font-size: 36px;
//           }

//           .sp-hero-subtitle {
//             font-size: 16px;
//           }

//           .sp-stat-value {
//             font-size: 40px;
//           }

//           .sp-stat-label {
//             font-size: 12px;
//           }

//           .sp-section-title {
//             font-size: 32px;
//           }

//           .sp-skill-category {
//             padding: 28px;
//             border-radius: 20px;
//           }

//           .sp-category-icon {
//             width: 56px;
//             height: 56px;
//           }

//           .sp-category-title {
//             font-size: 20px;
//           }

//           .sp-skill-name {
//             font-size: 15px;
//           }

//           .sp-skill-bar {
//             height: 6px;
//           }

//           .sp-expertise-banner {
//             padding: 32px 24px;
//             border-radius: 20px;
//           }

//           .sp-banner-icon {
//             width: 64px;
//             height: 64px;
//           }

//           .sp-banner-text h3 {
//             font-size: 24px;
//           }

//           .sp-banner-text p {
//             font-size: 15px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SkillsPage;