import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, FileText, Github, Linkedin, Twitter, Sun, Moon } from 'lucide-react';

const PremiumNavigation = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    { id: 'about', label: 'About Me', icon: User },
    { id: 'about', label: 'Education', icon: User },
    { id: 'about', label: 'Experience', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
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
              <span className="logo-mark">YN</span>
              <span className="logo-text">Yasiru<em>.</em></span>
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
                  <Icon size={16} className="nav-icon" />
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
                    <Icon size={16} />
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
                <Sun size={15} className="sun-icon" />
                <Moon size={15} className="moon-icon" />
              </div>
            </button>

            <a href="/yasiru.pdf" download="Yasiru_Nadeesha_CV.pdf" className="nav-cta" style={{ textDecoration: 'none' }}>
              <FileText size={16} />
              <span>Resume</span>
            </a>

            <button
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div className="nav-progress"></div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-items">
            {navItems.map((item, i) => {
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
                  <span className="mobile-link-index">{String(i + 1).padStart(2, '0')}</span>
                  <Icon size={20} />
                  <span className="mobile-link-label">{item.label}</span>
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
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <button
              className="mobile-theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <a href="/yasiru.pdf" download="Yasiru_Nadeesha_CV.pdf" className="mobile-cta" style={{ textDecoration: 'none' }}>
              <FileText size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
        <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          transition: background-color 0.3s ease;
        }

        /* ═══ Theme tokens — aligned with the dark, cyan/violet project-section palette ═══ */
        .dark-theme {
          --bg-primary: rgba(8, 12, 20, 0.72);
          --bg-primary-solid: rgba(8, 12, 20, 0.96);
          --bg-secondary: rgba(255, 255, 255, 0.04);
          --bg-tertiary: rgba(255, 255, 255, 0.03);
          --text-primary: #f0f4ff;
          --text-secondary: #94a3b8;
          --text-tertiary: #4a5568;
          --border-primary: rgba(255, 255, 255, 0.06);
          --border-secondary: rgba(255, 255, 255, 0.12);
          --shadow-color: rgba(0, 0, 0, 0.45);
          --mobile-bg: rgba(8, 12, 20, 0.98);
          --accent-cyan: #38bdf8;
          --accent-violet: #7c3aed;
          --accent-pink: #e879a0;
        }

        .light-theme {
          --bg-primary: rgba(252, 253, 255, 0.75);
          --bg-primary-solid: rgba(252, 253, 255, 0.97);
          --bg-secondary: rgba(15, 23, 42, 0.04);
          --bg-tertiary: rgba(15, 23, 42, 0.03);
          --text-primary: #0b1120;
          --text-secondary: #475569;
          --text-tertiary: #94a3b8;
          --border-primary: rgba(15, 23, 42, 0.08);
          --border-secondary: rgba(15, 23, 42, 0.12);
          --shadow-color: rgba(15, 23, 42, 0.12);
          --mobile-bg: rgba(255, 255, 255, 0.98);
          --accent-cyan: #0891b2;
          --accent-violet: #7c3aed;
          --accent-pink: #db2777;
        }

        /* ═══ Nav shell ═══ */
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
          font-family: 'DM Sans', sans-serif;
        }

        .premium-nav.scrolled {
          background: var(--bg-primary-solid);
          backdrop-filter: blur(28px);
          box-shadow: 0 10px 40px var(--shadow-color);
        }

        .nav-container {
          margin: 0 auto;
          padding: 18px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ═══ Logo — angled mark + serif wordmark, echoes the card numbering ═══ */
        .nav-logo {
          z-index: 10;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .logo-mark {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: 14px;
          letter-spacing: 0.5px;
          color: var(--accent-cyan);
          background: color-mix(in srgb, var(--accent-cyan) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent-cyan) 28%, transparent);
          clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }

        .logo-wrapper:hover .logo-mark {
          transform: rotate(-6deg) scale(1.05);
          border-color: color-mix(in srgb, var(--accent-violet) 45%, transparent);
          color: var(--accent-violet);
        }

        .logo-text {
          font-family: 'DM Serif Display', serif;
          font-size: 22px;
          font-weight: 400;
          letter-spacing: -0.5px;
          color: var(--text-primary);
        }

        .logo-text em {
          font-style: italic;
          background: linear-gradient(120deg, var(--accent-cyan), var(--accent-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ═══ Nav links — angled hover chip instead of soft pill ═══ */
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 18px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.2px;
          border-radius: 0;
          transition: color 0.3s ease;
          overflow: hidden;
        }

        .nav-link-bg {
          position: absolute;
          inset: 0;
          background: color-mix(in srgb, var(--accent-cyan) 10%, transparent);
          clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
        }

        .nav-link.active .nav-link-bg {
          background: color-mix(in srgb, var(--accent-violet) 12%, transparent);
        }

        .nav-link:hover .nav-link-bg,
        .nav-link.active .nav-link-bg {
          transform: scaleX(1);
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--text-primary);
        }

        .nav-link.active {
          box-shadow: inset 0 -2px 0 var(--accent-cyan);
        }

        .nav-icon {
          opacity: 0.75;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .nav-link:hover .nav-icon,
        .nav-link.active .nav-icon {
          opacity: 1;
        }

        /* ═══ Right cluster ═══ */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .social-icons {
          display: flex;
          align-items: center;
          gap: 6px;
          padding-right: 6px;
          margin-right: 4px;
          border-right: 1px solid var(--border-secondary);
        }

        .social-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-tertiary);
          background: transparent;
          border: 1px solid var(--border-secondary);
          border-radius: 0;
          clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          text-decoration: none;
        }

        .social-icon:hover {
          color: var(--text-primary);
          border-color: color-mix(in srgb, var(--accent-cyan) 50%, transparent);
          background: color-mix(in srgb, var(--accent-cyan) 8%, transparent);
          transform: translateY(-2px);
        }

        /* ═══ Theme toggle — angled, matches card icon chips ═══ */
        .theme-toggle {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border: 1px solid var(--border-secondary);
          border-radius: 0;
          clip-path: polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          border-color: color-mix(in srgb, #fbbf24 45%, transparent);
          background: rgba(251, 191, 36, 0.08);
          transform: translateY(-2px);
        }

        .theme-toggle-inner {
          position: relative;
          width: 20px;
          height: 20px;
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
          color: #93c5fd;
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

        /* ═══ Resume CTA — notched button with sliding cyan/violet fill, matches project cards ═══ */
        .nav-cta {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          background: #0d1424;
          color: #7dd3fc;
          border: none;
          border-radius: 0;
          clip-path: polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.3px;
          cursor: pointer;
          overflow: hidden;
          isolation: isolate;
          box-shadow: inset 0 0 0 1px rgba(125,211,252,0.35);
          transition: color 0.3s ease, box-shadow 0.3s ease;
        }

        .light-theme .nav-cta {
          background: #ffffff;
          color: #0891b2;
          box-shadow: inset 0 0 0 1px rgba(8,145,178,0.3);
        }

        .nav-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, #06b6d4, #7c3aed);
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          z-index: -1;
        }

        .nav-cta:hover {
          color: #ffffff;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0);
        }

        .nav-cta:hover::before {
          transform: translateX(0);
        }

        /* ═══ Mobile toggle ═══ */
        .mobile-toggle {
          display: none;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border: 1px solid var(--border-secondary);
          border-radius: 0;
          clip-path: polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-toggle:hover {
          border-color: color-mix(in srgb, var(--accent-cyan) 45%, transparent);
          background: color-mix(in srgb, var(--accent-cyan) 8%, transparent);
        }

        /* ═══ Scroll progress ═══ */
        .nav-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0%;
          background: linear-gradient(90deg, #38bdf8, #7c3aed, #e879a0);
          transition: width 0.1s ease;
        }

        /* ═══ Mobile menu ═══ */
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
          padding: 100px 28px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: -10px 0 40px var(--shadow-color);
          font-family: 'DM Sans', sans-serif;
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
          background: rgba(0, 0, 0, 0.55);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .light-theme .mobile-menu-overlay {
          background: rgba(15, 23, 42, 0.35);
        }

        .mobile-menu.open .mobile-menu-overlay {
          opacity: 1;
        }

        .mobile-menu-items {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          border-radius: 0;
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-primary);
          transition: all 0.3s ease;
          position: relative;
        }

        .mobile-link-index {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: 12px;
          color: var(--text-tertiary);
          width: 22px;
        }

        .mobile-link-label {
          flex: 1;
        }

        .mobile-link:hover,
        .mobile-link.active {
          background: color-mix(in srgb, var(--accent-cyan) 10%, transparent);
          border-color: color-mix(in srgb, var(--accent-cyan) 35%, transparent);
          color: var(--text-primary);
          transform: translateX(6px);
        }

        .mobile-link.active .mobile-link-index {
          color: var(--accent-cyan);
        }

        .mobile-link-arrow {
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .mobile-link:hover .mobile-link-arrow,
        .mobile-link.active .mobile-link-arrow {
          opacity: 1;
          color: var(--accent-cyan);
        }

        .mobile-menu-footer {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding-top: 20px;
          border-top: 1px solid var(--border-secondary);
        }

        .mobile-social {
          display: flex;
          gap: 10px;
          justify-content: center;
        }

        .mobile-social-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border: 1px solid var(--border-secondary);
          border-radius: 0;
          clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
          color: var(--text-tertiary);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .mobile-social-icon:hover {
          background: color-mix(in srgb, var(--accent-cyan) 10%, transparent);
          border-color: color-mix(in srgb, var(--accent-cyan) 40%, transparent);
          color: var(--text-primary);
          transform: translateY(-3px);
        }

        .mobile-theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 14px 28px;
          background: var(--bg-secondary);
          color: var(--text-primary);
          border: 1px solid var(--border-secondary);
          border-radius: 0;
          clip-path: polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-theme-toggle:hover {
          border-color: color-mix(in srgb, #fbbf24 45%, transparent);
          background: rgba(251, 191, 36, 0.08);
        }

        .mobile-cta {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 16px 28px;
          background: #0d1424;
          color: #7dd3fc;
          border: none;
          border-radius: 0;
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          overflow: hidden;
          isolation: isolate;
          box-shadow: inset 0 0 0 1px rgba(125,211,252,0.35);
          transition: color 0.3s ease, box-shadow 0.3s ease;
        }

        .light-theme .mobile-cta {
          background: #ffffff;
          color: #0891b2;
          box-shadow: inset 0 0 0 1px rgba(8,145,178,0.3);
        }

        .mobile-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, #06b6d4, #7c3aed);
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          z-index: -1;
        }

        .mobile-cta:hover {
          color: #ffffff;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0);
        }

        .mobile-cta:hover::before {
          transform: translateX(0);
        }

        /* ═══ Responsive ═══ */
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
            padding: 14px 20px;
          }

          .logo-text {
            font-size: 19px;
          }

          .logo-mark {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }

          .mobile-menu-content {
            width: 90%;
            padding: 80px 20px 30px;
          }

          .mobile-link {
            padding: 14px 16px;
            font-size: 15px;
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