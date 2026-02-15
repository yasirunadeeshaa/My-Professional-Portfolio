import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code2, Sparkles, Terminal, Zap, Download, ExternalLink, Briefcase } from 'lucide-react';
import Fiverr from '../assets/fiverr.png';
import Upwork from '../assets/upwok2.png';

const PortfolioHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(102, 126, 234, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(102, 126, 234, ${0.1 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="ph-portfolio-hero">
      <canvas ref={canvasRef} className="ph-hero-canvas" />
      
      <div className="ph-hero-container">
        <div className="ph-hero-grid">
          {/* Left Content */}
          <div className="ph-hero-left">
            {/* Status Badge */}
            <div className="ph-badge-group">
              <span className="ph-status-badge">
                <Sparkles size={16} className="ph-badge-icon" />
                Available for Opportunities
              </span>
              <span className="ph-verified-badge">
                <Zap size={16} />
                Developer
              </span>
              <span className="ph-freelancer-badge">
                <Briefcase size={16} />
                Freelancer
              </span>
            </div>

            {/* Main Content */}
            <div className="ph-hero-main-content">
              <p className="ph-hero-greeting">Hello, I'm</p>
              <h1 className="ph-hero-name">
                <span className="ph-name-text">A.Yasiru Nadeesha Aththanayaka</span>
                <span className="ph-cursor-blink">|</span>
              </h1>
              <h2 className="ph-hero-title">
                Full Stack
                <span className="ph-gradient-text"> Developer</span>
              </h2>

              <p className="ph-hero-description">
                Crafting exceptional digital experiences through elegant code and innovative solutions. 
                Specialized in building scalable web applications with modern technologies.
              </p>

              {/* Stats */}
              <div className="ph-hero-stats">
                <div className="ph-stat-item">
                  <span className="ph-stat-number">20+</span>
                  <span className="ph-stat-label">Projects</span>
                </div>
                <div className="ph-stat-item">
                  <span className="ph-stat-number">5+</span>
                  <span className="ph-stat-label">Years Exp</span>
                </div>
                <div className="ph-stat-item">
                  <span className="ph-stat-number">98%</span>
                  <span className="ph-stat-label">Satisfaction</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="ph-hero-cta">
                <button className="ph-btn-primary">
                  <span>View My Work</span>
                  <ArrowRight size={20} className="ph-btn-icon" />
                  <div className="ph-btn-shine"></div>
                </button>
                <button className="ph-btn-secondary">
                  <Download size={20} />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="ph-social-links">
                <a href="https://github.com/yasirunadeeshaa" className="ph-social-link" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/yasiru-nadeesha-aththanayaka/" className="ph-social-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:your.a.y.n.aththanayaka@gmail.com" className="ph-social-link" aria-label="Email">
                  <Mail size={20} />
                </a>
                <a href="https://www.fiverr.com/s/5r9pj1z" className="ph-social-link ph-fiverr-link" aria-label="Fiverr">
                  <img src={Fiverr} alt="Fiverr" className="ph-fiverr-icon" />
                </a>
                <a href="https://www.upwork.com/freelancers/~01179d06700874ce52?mp_source=share" className="ph-social-link ph-fiverr-link" aria-label="Upwork">
                  <img src={Upwork} alt="Upwork" className="ph-fiverr-icon" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="ph-hero-right">
            <div className="ph-visual-container">
              {/* Main Code Card */}
              <div className="ph-code-card ph-main-card">
                <div className="ph-card-header">
                  <div className="ph-terminal-dots">
                    <span className="ph-dot ph-dot-red"></span>
                    <span className="ph-dot ph-dot-yellow"></span>
                    <span className="ph-dot ph-dot-green"></span>
                  </div>
                  <span className="ph-file-name">developer.js</span>
                </div>
                <div className="ph-card-body">
                  <div className="ph-code-line">
                    <span className="ph-line-number">1</span>
                    <span className="ph-code-keyword">const</span>{' '}
                    <span className="ph-code-variable">developer</span> = {'{'}
                  </div>
                  <div className="ph-code-line">
                    <span className="ph-line-number">2</span>
                    <span className="ph-indent">name: </span>
                    <span className="ph-code-string">'Your Name'</span>,
                  </div>
                  <div className="ph-code-line">
                    <span className="ph-line-number">3</span>
                    <span className="ph-indent">role: </span>
                    <span className="ph-code-string">'Full Stack Developer'</span>,
                  </div>
                  <div className="ph-code-line">
                    <span className="ph-line-number">4</span>
                    <span className="ph-indent">skills: [</span>
                    <span className="ph-code-string">'React'</span>,{' '}
                    <span className="ph-code-string">'Node.js'</span>],
                  </div>
                  <div className="ph-code-line">
                    <span className="ph-line-number">5</span>
                    <span className="ph-indent">passion: </span>
                    <span className="ph-code-string">'Building Amazing Things'</span>
                  </div>
                  <div className="ph-code-line">
                    <span className="ph-line-number">6</span>
                    {'};'}
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="ph-floating-cards">
                {/* Currently Working Card */}
                <div className="ph-float-card ph-current-working-card">
                  <Sparkles size={20} className="ph-card-icon" />
                  <div className="ph-card-content">
                    <h4>Currently Working On</h4>
                    <p>HealthCare Application</p>
                    <span className="ph-current-working-badge">Final Year Project</span>
                  </div>
                </div>

                {/* Tech Stack Card */}
                <div className="ph-float-card ph-tech-card">
                  <Code2 size={20} className="ph-card-icon" />
                  <div className="ph-card-content">
                    <h4>Tech Stack</h4>
                    <div className="ph-tech-tags">
                      <span className="ph-tech-tag">React</span>
                      <span className="ph-tech-tag">Node.js</span>
                      <span className="ph-tech-tag">TypeScript</span>
                    </div>
                  </div>
                </div>

                {/* Current Project Card */}
                <div className="ph-float-card ph-project-card">
                  <Terminal size={20} className="ph-card-icon" />
                  <div className="ph-card-content">
                    <h4>Current Focus</h4>
                    <p>Building AI-powered web apps</p>
                    <div className="ph-progress-bar">
                      <div className="ph-progress-fill"></div>
                    </div>
                  </div>
                </div>

                {/* Achievement Card */}
                <div className="ph-float-card ph-achievement-card">
                  <Sparkles size={20} className="ph-card-icon" />
                  <div className="ph-card-content">
                    <h4>Latest Achievement</h4>
                    <p>🏆 Best Project Award</p>
                    <span className="ph-achievement-badge">2024</span>
                  </div>
                </div>
              </div>

              {/* Animated Rings */}
              <div className="ph-animated-ring ph-ring-1"></div>
              <div className="ph-animated-ring ph-ring-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="ph-scroll-indicator">
        <div className="ph-mouse">
          <div className="ph-wheel"></div>
        </div>
        <span className="ph-scroll-text">Scroll to explore</span>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .ph-portfolio-hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          color: white;
          display: flex;
          align-items: center;
        }

        .ph-hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .ph-hero-container {
          position: relative;
          z-index: 2;
          max-width: 1800px;
          margin: auto auto;
          width: 100%;
        }

        .ph-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* Left Content */
        .ph-hero-left {
          animation: ph-fadeInLeft 0.8s ease-out;
        }

        @keyframes ph-fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .ph-badge-group {
          display: flex;
          gap: 15px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }

        .ph-status-badge, .ph-verified-badge , .ph-freelancer-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          backdrop-filter: blur(10px);
          animation: ph-float 3s ease-in-out infinite;
        }

        .ph-status-badge {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
          border: 1px solid rgba(102, 126, 234, 0.3);
          color: #a5b4fc;
        }

        .ph-verified-badge {
          background: rgba(72, 187, 120, 0.2);
          border: 1px solid rgba(72, 187, 120, 0.3);
          color: #86efac;
        }

        .ph-freelancer-badge {
          background: rgba(161, 90, 49, 0.2);
          border: 1px solid rgba(136, 12, 12, 0.3);
          color: #b77cceff;
        }

        .ph-badge-icon {
          animation: ph-pulse 2s ease-in-out infinite;
        }

        @keyframes ph-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        @keyframes ph-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .ph-hero-main-content {
          max-width: 800px;
        }

        .ph-hero-greeting {
          font-size: 18px;
          color: #a5b4fc;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .ph-hero-name {
          font-size: 72px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 15px;
          letter-spacing: -2px;
        }

        .ph-name-text {
          background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ph-cursor-blink {
          color: #667eea;
          animation: ph-blink 1s infinite;
        }

        @keyframes ph-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .ph-hero-title {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 30px;
          line-height: 1.2;
        }

        .ph-gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: ph-gradientShift 5s ease infinite;
        }

        @keyframes ph-gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .ph-hero-description {
          font-size: 18px;
          line-height: 1.8;
          color: #cbd5e1;
          margin-bottom: 40px;
        }

        .ph-hero-stats {
          display: flex;
          gap: 40px;
          margin-bottom: 40px;
        }

        .ph-stat-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .ph-stat-number {
          font-size: 36px;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ph-stat-label {
          font-size: 14px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .ph-hero-cta {
          display: flex;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .ph-btn-primary, .ph-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 35px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: none;
        }

        .ph-btn-primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
        }

        .ph-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 50px rgba(102, 126, 234, 0.5);
        }

        .ph-btn-primary:hover .ph-btn-icon {
          transform: translateX(5px);
        }

        .ph-btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .ph-btn-primary:hover .ph-btn-shine {
          left: 100%;
        }

        .ph-btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          backdrop-filter: blur(10px);
        }

        .ph-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .ph-btn-icon {
          transition: transform 0.3s ease;
        }

        .ph-social-links {
          display: flex;
          gap: 15px;
        }

        .ph-social-link {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .ph-social-link:hover {
          background: rgba(102, 126, 234, 0.3);
          border-color: rgba(102, 126, 234, 0.5);
          transform: translateY(-3px);
        }

        .ph-fiverr-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: contain;
  transition: filter 0.3s ease;
}


        /* Right Visual */
        .ph-hero-right {
          position: relative;
          animation: ph-fadeInRight 0.8s ease-out;
        }

        @keyframes ph-fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .ph-visual-container {
          position: relative;
          height: 500px;
        }

        .ph-code-card {
          margin: auto;
          width: 600px;
          margin-top: 170px;
          background: rgba(17, 24, 39, 0.8);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .ph-main-card {
          position: relative;
          z-index: 2;
          animation: ph-float 6s ease-in-out infinite;
        }

        .ph-card-header {
          background: rgba(30, 41, 59, 0.8);
          padding: 15px 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .ph-terminal-dots {
          display: flex;
          gap: 8px;
        }

        .ph-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .ph-dot-red { background: #ef4444; }
        .ph-dot-yellow { background: #f59e0b; }
        .ph-dot-green { background: #10b981; }

        .ph-file-name {
          color: #94a3b8;
          font-size: 14px;
          font-family: 'Monaco', monospace;
        }

        .ph-card-body {
          padding: 30px;
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 16px;
          line-height: 2;
        }

        .ph-code-line {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .ph-line-number {
          color: #475569;
          min-width: 30px;
          text-align: right;
          user-select: none;
        }

        .ph-code-keyword {
          color: #c084fc;
        }

        .ph-code-variable {
          color: #60a5fa;
        }

        .ph-code-string {
          color: #34d399;
        }

        .ph-indent {
          margin-left: 20px;
          color: #cbd5e1;
        }

        /* Floating Cards */
        .ph-floating-cards {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .ph-float-card {
          position: absolute;
          background: rgba(17, 24, 39, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 20px;
          backdrop-filter: blur(20px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          transition: all 0.4s ease;
        }

        .ph-float-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .ph-card-icon {
          color: #667eea;
          margin-bottom: 10px;
        }

        .ph-card-content h4 {
          font-size: 16px;
          margin-bottom: 10px;
          color: white;
        }

        .ph-card-content p {
          font-size: 14px;
          color: #94a3b8;
          margin-bottom: 10px;
        }

        .ph-tech-card {
          top: -140px;
          right: -30px;
          animation: ph-float-1 8s ease-in-out infinite;
        }

        .ph-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .ph-tech-tag {
          padding: 5px 12px;
          background: rgba(102, 126, 234, 0.2);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 20px;
          font-size: 12px;
          color: #a5b4fc;
        }

        .ph-project-card {
          bottom: 10%;
          left: -120px;
          animation: ph-float-2 10s ease-in-out infinite;
        }

        .ph-progress-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          margin-top: 10px;
        }

        .ph-progress-fill {
          height: 100%;
          width: 70%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 4px;
          animation: ph-progress 2s ease-out;
        }

        @keyframes ph-progress {
          from { width: 0; }
        }

        .ph-achievement-card {
          bottom: -30px;
          right: 40px;
          animation: ph-float-3 12s ease-in-out infinite;
        }

        .ph-achievement-badge {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(251, 191, 36, 0.2);
          border: 1px solid rgba(251, 191, 36, 0.3);
          border-radius: 12px;
          font-size: 12px;
          color: #fcd34d;
          margin-top: 10px;
        }

        .ph-current-working-card {
          bottom: 450px;
          right: 700px;
          animation: ph-float-3 12s ease-in-out infinite;
        }

        .ph-current-working-badge {
          background: rgba(72, 187, 120, 0.2);
          border: 1px solid rgba(72, 187, 120, 0.3);
          color: #86efac;
          display: inline-block;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          margin-top: 10px;
        }

        @keyframes ph-float-1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes ph-float-2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-10px); }
        }

        @keyframes ph-float-3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        /* Animated Rings */
        .ph-animated-ring {
          position: absolute;
          border: 2px solid rgba(102, 126, 234, 0.2);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .ph-ring-1 {
          width: 500px;
          height: 500px;
          animation: ph-rotate 20s linear infinite;
        }

        .ph-ring-2 {
          width: 650px;
          height: 650px;
          animation: ph-rotate-reverse 30s linear infinite;
        }

        @keyframes ph-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes ph-rotate-reverse {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }

        /* Scroll Indicator */
        .ph-scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 10;
        }

        .ph-mouse {
          width: 26px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 13px;
          position: relative;
        }

        .ph-wheel {
          width: 4px;
          height: 8px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: ph-scroll 1.5s ease-in-out infinite;
        }

        @keyframes ph-scroll {
          0% { opacity: 1; top: 8px; }
          100% { opacity: 0; top: 20px; }
        }

        .ph-scroll-text {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .ph-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .ph-hero-right {
            order: -1;
          }


          .ph-visual-container {
            height: 400px;
          }

          .ph-hero-name {
            font-size: 56px;
          }

          .ph-hero-title {
            font-size: 36px;
          }
        }

        @media (max-width: 768px) {
          .ph-hero-container {
            padding: 60px 40px;
          }

          .ph-hero-name {
            font-size: 42px;
          }

          .ph-hero-title {
            font-size: 28px;
          }

          .ph-hero-stats {
            gap: 20px;
          }

          .ph-stat-number {
            font-size: 28px;
          }

          .ph-hero-cta {
            flex-direction: column;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .ph-float-card {
            transform: scale(0.85);
          }

          .ph-animated-ring {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioHero;