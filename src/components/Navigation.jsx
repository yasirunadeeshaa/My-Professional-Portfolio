import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, FileText, Github, Linkedin, Twitter, Users, Sun, Moon } from 'lucide-react';

const PremiumNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      

      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'skills', label: 'Skills', icon: FileText },
    { id: 'testimonials', label: 'Testimonials', icon: Users }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yasirunadeeshaa', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/yasiru-nadeesha-aththanayaka/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      <nav className={`premium-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-wrapper">
              <span className="logo-text">Yasiru</span>
              <div className="logo-dot"></div>
            </div>
          </div>

          <div className="nav-menu">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Icon size={18} className="nav-icon" />
                  <span>{item.label}</span>
                  <div className="nav-link-bg"></div>
                </a>
              );
            })}
          </div>

          <div className="nav-right">
            <div className="social-icons">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="social-icon"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <button 
              className="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle theme"
            >
              <div className="theme-toggle-inner">
                <Sun size={16} className="sun-icon" />
                <Moon size={16} className="moon-icon" />
              </div>
            </button>

            <button className="nav-cta">
              <FileText size={18} />
              <span>Resume</span>
              <div className="btn-shine"></div>
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className="nav-progress"></div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-items">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Icon size={22} />
                  <span>{item.label}</span>
                  <div className="mobile-link-arrow">→</div>
                </a>
              );
            })}
          </div>

          <div className="mobile-menu-footer">
            <div className="mobile-social">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="mobile-social-icon"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <button 
              className="mobile-theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <button className="mobile-cta">
              <FileText size={20} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
        <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          transition: background-color 0.3s ease;
        }

        /* Theme Variables */
        .dark-theme {
          --bg-primary: rgba(15, 15, 35, 0.7);
          --bg-primary-solid: rgba(15, 15, 35, 0.95);
          --bg-secondary: rgba(255, 255, 255, 0.05);
          --bg-tertiary: rgba(255, 255, 255, 0.03);
          --text-primary: #ffffff;
          --text-secondary: #cbd5e1;
          --text-tertiary: #94a3b8;
          --border-primary: rgba(255, 255, 255, 0.05);
          --border-secondary: rgba(255, 255, 255, 0.1);
          --shadow-color: rgba(0, 0, 0, 0.3);
          --mobile-bg: rgba(15, 15, 35, 0.98);
        }

        .light-theme {
          --bg-primary: rgba(255, 255, 255, 0.7);
          --bg-primary-solid: rgba(255, 255, 255, 0.95);
          --bg-secondary: rgba(102, 126, 234, 0.08);
          --bg-tertiary: rgba(102, 126, 234, 0.05);
          --text-primary: #0f172a;
          --text-secondary: #334155;
          --text-tertiary: #64748b;
          --border-primary: rgba(0, 0, 0, 0.08);
          --border-secondary: rgba(0, 0, 0, 0.12);
          --shadow-color: rgba(0, 0, 0, 0.1);
          --mobile-bg: rgba(255, 255, 255, 0.98);
        }

        .premium-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: var(--bg-primary);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-primary);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .premium-nav.scrolled {
          background: var(--bg-primary-solid);
          backdrop-filter: blur(30px);
          box-shadow: 0 10px 40px var(--shadow-color);
        }

        .nav-container {
          margin: 0 auto;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          z-index: 10;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          position: relative;
        }

        .logo-text {
          font-size: 26px;
          font-weight: 900;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -1px;
          transition: all 0.3s ease;
        }

        .light-theme .logo-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-wrapper:hover .logo-text {
          background: linear-gradient(135deg, #764ba2 0%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-dot {
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.8;
          }
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nav-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .nav-link-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(102, 126, 234, 0.1);
          border-radius: 50px;
          transform: scale(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
        }

        .light-theme .nav-link-bg {
          background: rgba(102, 126, 234, 0.15);
        }

        .nav-link:hover .nav-link-bg,
        .nav-link.active .nav-link-bg {
          transform: scale(1);
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--text-primary);
        }

        .nav-icon {
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .nav-link:hover .nav-icon,
        .nav-link.active .nav-icon {
          opacity: 1;
          transform: translateY(-2px);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .social-icons {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-tertiary);
          background: var(--bg-secondary);
          border-radius: 50%;
          border: 1px solid var(--border-secondary);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-icon:hover {
          color: var(--text-primary);
          background: rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.3);
          transform: translateY(-2px);
        }

        /* Theme Toggle */
        .theme-toggle {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border: 1px solid var(--border-secondary);
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          background: rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.3);
          transform: translateY(-2px);
        }

        .theme-toggle-inner {
          position: relative;
          width: 24px;
          height: 24px;
        }

        .sun-icon,
        .moon-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dark-theme .sun-icon {
          opacity: 0;
          transform: translate(-50%, -50%) rotate(180deg) scale(0);
        }

        .dark-theme .moon-icon {
          opacity: 1;
          transform: translate(-50%, -50%) rotate(0deg) scale(1);
          color: #fbbf24;
        }

        .light-theme .sun-icon {
          opacity: 1;
          transform: translate(-50%, -50%) rotate(0deg) scale(1);
          color: #f59e0b;
        }

        .light-theme .moon-icon {
          opacity: 0;
          transform: translate(-50%, -50%) rotate(-180deg) scale(0);
        }

        .nav-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .nav-cta:hover .btn-shine {
          left: 100%;
        }

        .mobile-toggle {
          display: none;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border: 1px solid var(--border-secondary);
          border-radius: 12px;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-toggle:hover {
          background: rgba(102, 126, 234, 0.2);
        }

        .nav-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          width: 0%;
          background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
          transition: width 0.1s ease;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          z-index: 999;
          pointer-events: none;
        }

        .mobile-menu.open {
          pointer-events: all;
        }

        .mobile-menu-content {
          position: absolute;
          top: 0;
          right: 0;
          width: 85%;
          max-width: 400px;
          height: 100vh;
          background: var(--mobile-bg);
          backdrop-filter: blur(40px);
          border-left: 1px solid var(--border-secondary);
          padding: 100px 30px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: -10px 0 40px var(--shadow-color);
        }

        .mobile-menu.open .mobile-menu-content {
          transform: translateX(0);
        }

        .mobile-menu-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .light-theme .mobile-menu-overlay {
          background: rgba(0, 0, 0, 0.3);
        }

        .mobile-menu.open .mobile-menu-overlay {
          opacity: 1;
        }

        .mobile-menu-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 24px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 18px;
          font-weight: 600;
          border-radius: 16px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-primary);
          transition: all 0.3s ease;
          position: relative;
        }

        .mobile-link:hover,
        .mobile-link.active {
          background: rgba(102, 126, 234, 0.15);
          border-color: rgba(102, 126, 234, 0.3);
          color: var(--text-primary);
          transform: translateX(8px);
        }

        .mobile-link-arrow {
          margin-left: auto;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .mobile-link:hover .mobile-link-arrow,
        .mobile-link.active .mobile-link-arrow {
          opacity: 1;
        }

        .mobile-menu-footer {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-top: 20px;
          border-top: 1px solid var(--border-secondary);
        }

        .mobile-social {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .mobile-social-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border: 1px solid var(--border-secondary);
          border-radius: 12px;
          color: var(--text-tertiary);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .mobile-social-icon:hover {
          background: rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.3);
          color: var(--text-primary);
          transform: translateY(-3px);
        }

        .mobile-theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 32px;
          background: var(--bg-secondary);
          color: var(--text-primary);
          border: 1px solid var(--border-secondary);
          border-radius: 16px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-theme-toggle:hover {
          background: rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.3);
        }

        .mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 32px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .mobile-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 1024px) {
          .nav-menu {
            display: none;
          }

          .social-icons {
            display: none;
          }

          .nav-cta {
            display: none;
          }

          .mobile-toggle {
            display: flex;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 16px 20px;
          }

          .logo-text {
            font-size: 22px;
          }

          .mobile-menu-content {
            width: 90%;
            padding: 80px 20px 30px;
          }

          .mobile-link {
            padding: 16px 20px;
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .mobile-menu-content {
            width: 100%;
            border-left: none;
          }
        }
      `}</style>
    </div>
  );
};

export default PremiumNavigation;