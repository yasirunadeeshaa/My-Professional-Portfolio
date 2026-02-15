import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Palette, 
  Lightbulb, 
  Award, 
  BookOpen, 
  Coffee,
  Briefcase,
  GraduationCap,
  Heart,
  Trophy,
  Target,
  Zap,
  Users,
  Globe
} from 'lucide-react';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [isVisible, setIsVisible] = useState(false);
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

  const skills = [
    { name: 'React.js', level: 95, category: 'Frontend', color: '#61dafb' },
    { name: 'Node.js', level: 90, category: 'Backend', color: '#68a063' },
    { name: 'TypeScript', level: 88, category: 'Language', color: '#3178c6' },
    { name: 'Python', level: 85, category: 'Language', color: '#3776ab' },
    { name: 'MongoDB', level: 87, category: 'Database', color: '#47a248' },
    { name: 'PostgreSQL', level: 82, category: 'Database', color: '#336791' },
    { name: 'Docker', level: 80, category: 'DevOps', color: '#2496ed' },
    { name: 'AWS', level: 78, category: 'Cloud', color: '#ff9900' }
  ];

  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications and mentoring junior developers.',
      achievements: ['Built microservices architecture', 'Improved performance by 40%', 'Led team of 5 developers']
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies.',
      achievements: ['Delivered 15+ projects', 'Implemented CI/CD pipeline', 'Reduced bugs by 60%']
    },
    {
      role: 'Frontend Developer',
      company: 'Creative Web Studio',
      period: '2019 - 2020',
      description: 'Created responsive and interactive user interfaces for various web applications.',
      achievements: ['Built 20+ responsive websites', 'Improved UX scores', 'Collaborated with design team']
    }
  ];

  const education = [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'University of Technology',
      period: '2015 - 2019',
      gpa: '3.8/4.0',
      highlights: ['Dean\'s List', 'Best Final Year Project', 'Programming Club President']
    },
    {
      degree: 'AWS Certified Solutions Architect',
      institution: 'Amazon Web Services',
      period: '2021',
      highlights: ['Professional Level', 'Cloud Architecture', 'System Design']
    }
  ];

  const interests = [
    { icon: <Code2 size={24} />, label: 'Coding', color: '#667eea' },
    { icon: <BookOpen size={24} />, label: 'Reading', color: '#f093fb' },
    { icon: <Coffee size={24} />, label: 'Coffee', color: '#fbbf24' },
    { icon: <Globe size={24} />, label: 'Travel', color: '#34d399' },
    { icon: <Users size={24} />, label: 'Mentoring', color: '#60a5fa' },
    { icon: <Heart size={24} />, label: 'Open Source', color: '#f87171' }
  ];

  return (
    <section ref={sectionRef} className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">Get To Know More</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate developer with a love for creating elegant solutions to complex problems
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={`about-grid ${isVisible ? 'visible' : ''}`}>
          {/* Left Side - Profile Card */}
          <div className="profile-section">
            <div className="profile-card">
              {/* <div className="profile-image-wrapper">
                <div className="profile-image">
                  <div className="image-placeholder">
                    <Code2 size={80} />
                  </div>
                </div>
                <div className="profile-badge">
                  <Zap size={16} />
                  <span>Available for Work</span>
                </div>
              </div> */}

              <div className="profile-stats">
                <div className="stat-boxx">
                  <Trophy size={24} className="stat-iconn" />
                  <span className="stat-valuee">50+</span>
                  <span className="stat-labell">Projects Completed</span>
                </div>
                <div className="stat-boxx">
                  <Users size={24} className="stat-iconn" />
                  <span className="stat-valuee">30+</span>
                  <span className="stat-labell">Happy Clients</span>
                </div>
                <div className="stat-boxx">
                  <Award size={24} className="stat-iconn" />
                  <span className="stat-valuee">5+</span>
                  <span className="stat-labell">Years Experience</span>
                </div>
              </div>

              <div className="profile-info">
                <h3>A.Yasiru Nadeesha Aththanayaka</h3>
                <p className="profile-role">Full Stack Developer</p>
                <p className="profile-bio">
                  I'm a passionate full stack developer who loves turning ideas into reality through code. 
                  With expertise in modern web technologies, I create scalable and user-friendly applications.
                </p>
              </div>

              {/* Interests */}
              <div className="interests-section">
                <h4>Interests & Hobbies</h4>
                <div className="interests-grid">
                  {interests.map((interest, index) => (
                    <div 
                      key={index} 
                      className="interest-item"
                      style={{ '--interest-color': interest.color }}
                    >
                      {interest.icon}
                      <span>{interest.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Tabs Content */}
          <div className="content-section">
            {/* Tab Navigation */}
            <div className="tab-navigation">
              <button 
                className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                <Code2 size={20} />
                <span>Skills</span>
              </button>
              <button 
                className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                <Briefcase size={20} />
                <span>Experience</span>
              </button>
              <button 
                className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                <GraduationCap size={20} />
                <span>Education</span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div className="skills-content fade-in">
                  <div className="content-intro">
                    <Lightbulb size={32} className="content-icon" />
                    <div>
                      <h3>Technical Expertise</h3>
                      <p>My core competencies and technical skills acquired over the years</p>
                    </div>
                  </div>

                  <div className="skills-grid">
                    {skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="skill-item"
                        style={{ 
                          animationDelay: `${index * 0.1}s`,
                          '--skill-color': skill.color 
                        }}
                      >
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="skill-category">{skill.category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <div className="experience-content fade-in">
                  <div className="content-intro">
                    <Briefcase size={32} className="content-icon" />
                    <div>
                      <h3>Work Experience</h3>
                      <p>My professional journey and career milestones</p>
                    </div>
                  </div>

                  <div className="timeline">
                    {experiences.map((exp, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                          <span className="timeline-period">{exp.period}</span>
                          <h4>{exp.role}</h4>
                          <p className="company-name">{exp.company}</p>
                          <p className="experience-description">{exp.description}</p>
                          <div className="achievements">
                            {exp.achievements.map((achievement, i) => (
                              <span key={i} className="achievement-tag">
                                <Target size={14} />
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === 'education' && (
                <div className="education-content fade-in">
                  <div className="content-intro">
                    <GraduationCap size={32} className="content-icon" />
                    <div>
                      <h3>Education & Certifications</h3>
                      <p>My academic background and professional certifications</p>
                    </div>
                  </div>

                  <div className="education-grid">
                    {education.map((edu, index) => (
                      <div key={index} className="education-card">
                        <div className="education-icon">
                          <GraduationCap size={32} />
                        </div>
                        <div className="education-content">
                          <h4>{edu.degree}</h4>
                          <p className="institution">{edu.institution}</p>
                          <span className="period">{edu.period}</span>
                          {edu.gpa && <span className="gpa">GPA: {edu.gpa}</span>}
                          <div className="highlights">
                            {edu.highlights.map((highlight, i) => (
                              <span key={i} className="highlight-badge">
                                <Award size={14} />
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .about-section {
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          padding: 20px 30px;
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .about-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .section-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-label {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(102, 126, 234, 0.2);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 50px;
          color: #a5b4fc;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section-title {
          font-size: 56px;
          font-weight: 900;
          color: white;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 18px;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Main Grid */
        .about-grid {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 60px;
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.2s;
        }

        .about-grid.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Profile Section */
        .profile-card {
          background: rgba(17, 24, 39, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(20px);
          position: sticky;
          top: 100px;
        }

        .profile-image-wrapper {
          position: relative;
          margin-bottom: 30px;
        }

        .profile-image {
          width: 200px;
          height: 200px;
          margin: 0 auto 20px;
          position: relative;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667eea;
          border: 3px solid rgba(102, 126, 234, 0.5);
          animation: pulse-border 3s ease-in-out infinite;
        }

        @keyframes pulse-border {
          0%, 100% { border-color: rgba(102, 126, 234, 0.5); }
          50% { border-color: rgba(118, 75, 162, 0.8); }
        }

        .profile-badge {
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
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }

        .profile-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-bottom: 30px;
        }

        .stat-boxx {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-boxx:hover {
          background: rgba(102, 126, 234, 0.1);
          border-color: rgba(102, 126, 234, 0.3);
          transform: translateY(-5px);
        }

        .stat-iconn {
          color: #667eea;
          margin-bottom: 10px;
        }

        .stat-valuee {
          display: block;
          font-size: 24px;
          font-weight: 800;
          color: white;
          margin-bottom: 5px;
        }

        .stat-labell {
          display: block;
          font-size: 12px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .profile-info {
          text-align: center;
          margin-bottom: 30px;
        }

        .profile-info h3 {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }

        .profile-role {
          font-size: 16px;
          color: #a5b4fc;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .profile-bio {
          font-size: 14px;
          line-height: 1.8;
          color: #94a3b8;
        }

        /* Interests */
        .interests-section {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 30px;
        }

        .interests-section h4 {
          font-size: 16px;
          color: white;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .interests-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .interest-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 15px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          transition: all 0.3s ease;
          color: var(--interest-color);
        }

        .interest-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
        }

        .interest-item span {
          font-size: 12px;
          color: #cbd5e1;
          font-weight: 500;
        }

        /* Tab Navigation */
        .tab-navigation {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
          background: rgba(17, 24, 39, 0.6);
          padding: 8px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tab-button {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 24px;
          background: transparent;
          border: none;
          border-radius: 12px;
          color: #94a3b8;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-button:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #cbd5e1;
        }

        .tab-button.active {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
          border: 1px solid rgba(102, 126, 234, 0.5);
          color: white;
        }

        /* Tab Content */
        .tab-content {
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(20px);
          min-height: 500px;
        }

        .fade-in {
          animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .content-intro {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
          padding-bottom: 30px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .content-icon {
          color: #667eea;
        }

        .content-intro h3 {
          font-size: 28px;
          font-weight: 700;
          color: white;
          margin-bottom: 5px;
        }

        .content-intro p {
          font-size: 14px;
          color: #94a3b8;
        }

        /* Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .skill-item {
          opacity: 0;
          animation: slideUp 0.5s ease forwards;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .skill-name {
          font-size: 16px;
          font-weight: 600;
          color: white;
        }

        .skill-level {
          font-size: 14px;
          font-weight: 700;
          color: var(--skill-color);
        }

        .skill-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, var(--skill-color), var(--skill-color));
          border-radius: 4px;
          animation: progressFill 1.5s ease forwards;
        }

        @keyframes progressFill {
          from { width: 0; }
        }

        .skill-category {
          font-size: 12px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Timeline */
        .timeline {
          position: relative;
          padding-left: 40px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5));
        }

        .timeline-item {
          position: relative;
          margin-bottom: 50px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -45px;
          top: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: 3px solid #1a1a2e;
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
        }

        .timeline-content {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 30px;
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(10px);
        }

        .timeline-period {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(102, 126, 234, 0.2);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 20px;
          color: #a5b4fc;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .timeline-content h4 {
          font-size: 22px;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }

        .company-name {
          font-size: 16px;
          color: #667eea;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .experience-description {
          font-size: 14px;
          line-height: 1.8;
          color: #94a3b8;
          margin-bottom: 20px;
        }

        .achievements {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .achievement-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: rgba(72, 187, 120, 0.1);
          border: 1px solid rgba(72, 187, 120, 0.3);
          border-radius: 20px;
          color: #86efac;
          font-size: 13px;
          font-weight: 500;
        }

        /* Education Grid */
        .education-grid {
          display: grid;
          gap: 30px;
        }

        .education-card {
          display: flex;
          gap: 25px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 35px;
          transition: all 0.3s ease;
        }

        .education-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-5px);
        }

        .education-icon {
          flex-shrink: 0;
          width: 70px;
          height: 70px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667eea;
        }

        .education-content h4 {
          font-size: 20px;
          font-weight: 700;
          color: white;
          margin-bottom: 10px;
        }

        .institution {
          font-size: 16px;
          color: #94a3b8;
          margin-bottom: 12px;
        }

        .period {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(102, 126, 234, 0.2);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 20px;
          color: #a5b4fc;
          font-size: 13px;
          font-weight: 600;
          margin-right: 10px;
        }

        .gpa {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(251, 191, 36, 0.2);
          border: 1px solid rgba(251, 191, 36, 0.3);
          border-radius: 20px;
          color: #fcd34d;
          font-size: 13px;
          font-weight: 600;
        }

        .highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .highlight-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 20px;
          color: #a5b4fc;
          font-size: 13px;
          font-weight: 500;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
          padding: 60px;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.4s;
        }

        .cta-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 800;
          color: white;
          margin-bottom: 15px;
        }

        .cta-content p {
          font-size: 18px;
          color: #94a3b8;
          margin-bottom: 30px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 20px 40px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 50px;
          color: white;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
        }

        .cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(102, 126, 234, 0.5);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .about-grid {
            grid-template-columns: 350px 1fr;
            gap: 40px;
          }

          .section-title {
            font-size: 48px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 968px) {
          .about-section {
            padding: 80px 30px;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .profile-card {
            position: relative;
            top: 0;
          }

          .section-title {
            font-size: 40px;
          }

          .tab-navigation {
            flex-direction: column;
          }

          .tab-button {
            width: 100%;
          }

          .tab-content {
            padding: 30px;
          }

          .timeline {
            padding-left: 30px;
          }

          .timeline-dot {
            left: -35px;
          }

          .interests-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .profile-stats {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .about-section {
            padding: 60px 20px;
          }

          .section-header {
            margin-bottom: 50px;
          }

          .section-title {
            font-size: 32px;
          }

          .section-subtitle {
            font-size: 16px;
          }

          .profile-card {
            padding: 30px;
          }

          .profile-image {
            width: 150px;
            height: 150px;
          }

          .profile-info h3 {
            font-size: 20px;
          }

          .tab-content {
            padding: 25px;
          }

          .content-intro {
            flex-direction: column;
            text-align: center;
          }

          .content-intro h3 {
            font-size: 24px;
          }

          .timeline-content {
            padding: 20px;
          }

          .timeline-content h4 {
            font-size: 18px;
          }

          .education-card {
            flex-direction: column;
            padding: 25px;
          }

          .education-icon {
            width: 60px;
            height: 60px;
          }

          .cta-section {
            padding: 40px 30px;
          }

          .cta-content h3 {
            font-size: 28px;
          }

          .cta-content p {
            font-size: 16px;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
            padding: 18px 30px;
          }

          .interests-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
          }

          .interest-item {
            padding: 12px 8px;
          }

          .interest-item span {
            font-size: 11px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 28px;
          }

          .badge-group {
            flex-direction: column;
            align-items: center;
          }

          .achievements {
            flex-direction: column;
          }

          .achievement-tag {
            width: 100%;
          }

          .highlights {
            flex-direction: column;
          }

          .highlight-badge {
            width: 100%;
          }
        }
      `}</style>
      </section>
  );
};

export default AboutMe;