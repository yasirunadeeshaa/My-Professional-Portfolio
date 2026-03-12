import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Award, ShoppingCart, Code2, Sparkles, CheckCircle2, Play, Download, Monitor, Smartphone, Globe, Lock, TrendingUp, Activity, CreditCard, Package, Search, Star, BarChart3, Truck } from 'lucide-react';

const EcommerceProjectDetail = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const technologies = [
    { name: 'React', category: 'Frontend', icon: '⚛️', color: '#61dafb' },
    { name: 'Next.js', category: 'Framework', icon: '▲', color: '#000000' },
    { name: 'Node.js', category: 'Backend', icon: '🟢', color: '#68a063' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘', color: '#336791' },
    { name: 'Redis', category: 'Cache', icon: '🔴', color: '#dc382d' },
    { name: 'Stripe', category: 'Payments', icon: '💳', color: '#635bff' },
    { name: 'Elasticsearch', category: 'Search', icon: '🔍', color: '#005571' },
    { name: 'Docker', category: 'DevOps', icon: '🐳', color: '#2496ed' },
    { name: 'AWS', category: 'Cloud', icon: '☁️', color: '#ff9900' },
    { name: 'GraphQL', category: 'API', icon: '◈', color: '#e535ab' }
  ];

  const features = [
    {
      title: 'Advanced Product Search',
      description: 'Elasticsearch-powered search with filters, facets, autocomplete, and AI-based product recommendations for enhanced discovery.',
      icon: <Search />,
      color: '#667eea'
    },
    {
      title: 'Secure Payment Gateway',
      description: 'Multi-payment integration with Stripe, PayPal, and digital wallets. PCI-DSS compliant with fraud detection and secure checkout.',
      icon: <CreditCard />,
      color: '#764ba2'
    },
    {
      title: 'Inventory Management',
      description: 'Real-time stock tracking, automated reorder alerts, multi-warehouse support, and comprehensive inventory analytics.',
      icon: <Package />,
      color: '#f093fb'
    },
    {
      title: 'Order Tracking',
      description: 'Real-time order status updates, shipment tracking integration, delivery notifications, and customer communication system.',
      icon: <Truck />,
      color: '#4facfe'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive sales analytics, customer insights, revenue tracking, and performance metrics with interactive visualizations.',
      icon: <BarChart3 />,
      color: '#43e97b'
    },
    {
      title: 'Review System',
      description: 'Customer reviews and ratings, verified purchase badges, review moderation, and sentiment analysis integration.',
      icon: <Star />,
      color: '#fa709a'
    }
  ];

  const screenshots = [
    {
      id: 1,
      title: 'Homepage & Product Showcase',
      url: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop',
      description: 'Modern homepage with featured products and categories'
    },
    {
      id: 2,
      title: 'Product Listing & Filters',
      url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop',
      description: 'Advanced filtering and search functionality'
    },
    {
      id: 3,
      title: 'Shopping Cart & Checkout',
      url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
      description: 'Streamlined checkout process with payment integration'
    },
    {
      id: 4,
      title: 'Admin Dashboard',
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      description: 'Comprehensive analytics and management tools'
    }
  ];

  const projectStats = [
    { label: 'Development Time', value: '18 Months', icon: <Calendar /> },
    { label: 'Team Size', value: '1 Member', icon: <Users /> },
    { label: 'Delivery Time', value: '18 Months', icon: <ShoppingCart /> },
    { label: 'Revenue Growth', value: '+340%', icon: <TrendingUp /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="epd-container">
      {/* Hero Section */}
      <section className="epd-hero">
        <div className="epd-hero-background">
          <div className="epd-gradient-blur epd-blur-1"></div>
          <div className="epd-gradient-blur epd-blur-2"></div>
          <div className="epd-gradient-blur epd-blur-3"></div>
        </div>
        
        <div className="epd-hero-content">
          <button className="epd-back-btn">
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </button>

          <div className="epd-hero-badge">
            <ShoppingCart size={16} />
            <span>E-Commerce Platform</span>
          </div>

          <h1 className="epd-hero-title">
            Next-Gen <span className="epd-gradient-text">E-Commerce</span> Platform
          </h1>

          <p className="epd-hero-subtitle">
            Full-stack e-commerce solution with advanced product search, secure payment processing, 
            real-time inventory management, and AI-powered recommendations for exceptional shopping experiences.
          </p>

          <div className="epd-hero-stats">
            {projectStats.map((stat, index) => (
              <div key={index} className="epd-stat-card">
                <div className="epd-stat-icon">{stat.icon}</div>
                <div className="epd-stat-content">
                  <div className="epd-stat-value">{stat.value}</div>
                  <div className="epd-stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="epd-hero-actions">
            <button className="epd-btn-primary">
              <ExternalLink size={20} />
              <span>View Live Demo</span>
            </button>
            <button className="epd-btn-secondary">
              <Github size={20} />
              <span>View on GitHub</span>
            </button>
            <button className="epd-btn-secondary">
              <Download size={20} />
              <span>Download Report</span>
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="epd-tabs-section">
        <div className="epd-tabs-container">
          <div className="epd-tabs">
            {['overview', 'features', 'technologies', 'screenshots'].map((tab) => (
              <button
                key={tab}
                className={`epd-tab ${activeTab === tab ? 'epd-tab-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="epd-content-wrapper">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <section className="epd-section epd-fade-in">
            <div className="epd-section-grid">
              <div className="epd-overview-main">
                <h2 className="epd-section-title">Project Overview</h2>
                <div className="epd-overview-content">
                  <p className="epd-text">
                    This Next-Gen E-Commerce Platform is a comprehensive full-stack solution designed to deliver 
                    exceptional online shopping experiences. Built with modern technologies and best practices, 
                    it provides everything needed to run a successful online store - from product management to 
                    order fulfillment, payment processing to customer analytics.
                  </p>
                  
                  <h3 className="epd-subsection-title">Problem Statement</h3>
                  <p className="epd-text">
                    Traditional e-commerce platforms struggle with slow load times, poor search functionality, 
                    complex checkout processes, and limited scalability. Merchants face challenges managing 
                    inventory across multiple channels, while customers experience friction during the buying 
                    journey. High cart abandonment rates and security concerns further impact online retail success.
                  </p>

                  <h3 className="epd-subsection-title">Solution</h3>
                  <p className="epd-text">
                    Our platform addresses these challenges through a modern architecture leveraging server-side 
                    rendering for performance, Elasticsearch for lightning-fast search, microservices for scalability, 
                    and advanced security measures. The system includes real-time inventory synchronization, 
                    one-click checkout, AI-powered product recommendations, and comprehensive analytics. Built on 
                    AWS infrastructure with auto-scaling capabilities, it handles traffic spikes seamlessly while 
                    maintaining sub-3-second page loads.
                  </p>

                  <h3 className="epd-subsection-title">Technical Highlights</h3>
                  <div className="epd-highlights">
                    <div className="epd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>Server-Side Rendering (SSR) with Next.js for optimal SEO and performance</span>
                    </div>
                    <div className="epd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>Microservices architecture with independent scaling capabilities</span>
                    </div>
                    <div className="epd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>Redis caching layer reducing database load by 70%</span>
                    </div>
                    <div className="epd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>GraphQL API for efficient data fetching and reduced payload sizes</span>
                    </div>
                    <div className="epd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>Progressive Web App (PWA) with offline capabilities</span>
                    </div>
                    <div className="epd-highlight-item">
                      <CheckCircle2 size={20} />
                      <span>Automated CI/CD pipeline with zero-downtime deployments</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="epd-overview-sidebar">
                <div className="epd-info-card">
                  <h3 className="epd-info-title">Project Details</h3>
                  <div className="epd-info-list">
                    <div className="epd-info-item">
                      <span className="epd-info-label">Status</span>
                      <span className="epd-info-value epd-status-live">
                        <span className="epd-status-dot"></span>
                        Production Ready
                      </span>
                    </div>
                    <div className="epd-info-item">
                      <span className="epd-info-label">Timeline</span>
                      <span className="epd-info-value">Mar 2023 - Jan 2024</span>
                    </div>
                    <div className="epd-info-item">
                      <span className="epd-info-label">Role</span>
                      <span className="epd-info-value">Full Stack Developer</span>
                    </div>
                    <div className="epd-info-item">
                      <span className="epd-info-label">Category</span>
                      <span className="epd-info-value">E-Commerce, SaaS</span>
                    </div>
                  </div>
                </div>

                <div className="epd-info-card">
                  <h3 className="epd-info-title">Platform Support</h3>
                  <div className="epd-platform-icons">
                    <div className="epd-platform-item">
                      <Monitor size={24} />
                      <span>Web</span>
                    </div>
                    <div className="epd-platform-item">
                      <Smartphone size={24} />
                      <span>Mobile</span>
                    </div>
                    <div className="epd-platform-item">
                      <Globe size={24} />
                      <span>PWA</span>
                    </div>
                  </div>
                </div>

                <div className="epd-info-card epd-metrics-card">
                  <h3 className="epd-info-title">Performance Metrics</h3>
                  <div className="epd-metrics-list">
                    <div className="epd-metric-item">
                      <div className="epd-metric-label">Page Load Time</div>
                      <div className="epd-metric-bar">
                        <div className="epd-metric-fill" style={{width: '95%', background: '#10b981'}}></div>
                      </div>
                      <div className="epd-metric-value">2.5s</div>
                    </div>
                    <div className="epd-metric-item">
                      <div className="epd-metric-label">Uptime</div>
                      <div className="epd-metric-bar">
                        <div className="epd-metric-fill" style={{width: '99%', background: '#10b981'}}></div>
                      </div>
                      <div className="epd-metric-value">99.99%</div>
                    </div>
                    <div className="epd-metric-item">
                      <div className="epd-metric-label">Conversion Rate</div>
                      <div className="epd-metric-bar">
                        <div className="epd-metric-fill" style={{width: '78%', background: '#3b82f6'}}></div>
                      </div>
                      <div className="epd-metric-value">4.2%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        {activeTab === 'features' && (
          <section className="epd-section epd-fade-in">
            <h2 className="epd-section-title">Core Features</h2>
            <div className="epd-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="epd-feature-card">
                  <div className="epd-feature-icon" style={{ background: `${feature.color}15`, color: feature.color }}>
                    {feature.icon}
                  </div>
                  <h3 className="epd-feature-title">{feature.title}</h3>
                  <p className="epd-feature-description">{feature.description}</p>
                  <div className="epd-feature-gradient" style={{ background: `linear-gradient(135deg, ${feature.color}20, transparent)` }}></div>
                </div>
              ))}
            </div>

            <div className="epd-additional-features">
              <h3 className="epd-subsection-title">Additional Capabilities</h3>
              <div className="epd-capabilities-grid">
                <div className="epd-capability">
                  <Sparkles size={20} />
                  <span>AI Product Recommendations</span>
                </div>
                <div className="epd-capability">
                  <Lock size={20} />
                  <span>Two-Factor Authentication</span>
                </div>
                <div className="epd-capability">
                  <Activity size={20} />
                  <span>Real-time Stock Updates</span>
                </div>
                <div className="epd-capability">
                  <Users size={20} />
                  <span>Customer Segmentation</span>
                </div>
                <div className="epd-capability">
                  <Star size={20} />
                  <span>Loyalty Program Integration</span>
                </div>
                <div className="epd-capability">
                  <Globe size={20} />
                  <span>Multi-currency Support</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Technologies Section */}
        {activeTab === 'technologies' && (
          <section className="epd-section epd-fade-in">
            <h2 className="epd-section-title">Technology Stack</h2>
            <p className="epd-section-description">
              Enterprise-grade technology stack optimized for performance, scalability, and security.
            </p>
            <div className="epd-tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="epd-tech-card">
                  <div className="epd-tech-icon">{tech.icon}</div>
                  <div className="epd-tech-content">
                    <h3 className="epd-tech-name">{tech.name}</h3>
                    <span className="epd-tech-category">{tech.category}</span>
                  </div>
                  <div className="epd-tech-indicator" style={{ background: tech.color }}></div>
                </div>
              ))}
            </div>

            <div className="epd-architecture-section">
              <h3 className="epd-subsection-title">System Architecture</h3>
              <div className="epd-architecture-card">
                <div className="epd-architecture-layer">
                  <div className="epd-layer-title">Frontend Layer</div>
                  <div className="epd-layer-content">Next.js (SSR/SSG), React 18, TypeScript, Tailwind CSS, Redux Toolkit</div>
                </div>
                <div className="epd-architecture-arrow">↓</div>
                <div className="epd-architecture-layer">
                  <div className="epd-layer-title">API Gateway</div>
                  <div className="epd-layer-content">GraphQL, Apollo Server, JWT Auth, Rate Limiting, API Versioning</div>
                </div>
                <div className="epd-architecture-arrow">↓</div>
                <div className="epd-architecture-layer">
                  <div className="epd-layer-title">Microservices</div>
                  <div className="epd-layer-content">Product Service, Order Service, Payment Service, User Service, Notification Service</div>
                </div>
                <div className="epd-architecture-arrow">↓</div>
                <div className="epd-architecture-layer">
                  <div className="epd-layer-title">Data Layer</div>
                  <div className="epd-layer-content">PostgreSQL (Primary), Redis (Cache), Elasticsearch (Search), S3 (Media)</div>
                </div>
                <div className="epd-architecture-arrow">↓</div>
                <div className="epd-architecture-layer">
                  <div className="epd-layer-title">Infrastructure</div>
                  <div className="epd-layer-content">AWS ECS, CloudFront CDN, Route 53, Application Load Balancer, CloudWatch</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Screenshots Section */}
        {activeTab === 'screenshots' && (
          <section className="epd-section epd-fade-in">
            <h2 className="epd-section-title">Application Screenshots</h2>
            <div className="epd-screenshots-container">
              <div className="epd-main-screenshot">
                <img 
                  src={screenshots[activeScreenshot].url} 
                  alt={screenshots[activeScreenshot].title}
                  className="epd-screenshot-image"
                />
                <div className="epd-screenshot-info">
                  <h3>{screenshots[activeScreenshot].title}</h3>
                  <p>{screenshots[activeScreenshot].description}</p>
                </div>
              </div>

              <div className="epd-screenshot-thumbnails">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={screenshot.id}
                    className={`epd-thumbnail ${activeScreenshot === index ? 'epd-thumbnail-active' : ''}`}
                    onClick={() => setActiveScreenshot(index)}
                  >
                    <img src={screenshot.url} alt={screenshot.title} />
                    <div className="epd-thumbnail-overlay">
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
      <section className="epd-cta-section">
        <div className="epd-cta-content">
          <h2 className="epd-cta-title">Want to See It in Action?</h2>
          <p className="epd-cta-description">
            Explore the live demo or get in touch to discuss how this platform can be customized for your business needs.
          </p>
          <div className="epd-cta-buttons">
            <button className="epd-btn-primary">
              <ExternalLink size={20} />
              <span>Launch Demo Store</span>
            </button>
            <button className="epd-btn-secondary">
              <Code2 size={20} />
              <span>View API Documentation</span>
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

        .epd-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1729 100%);
          color: white;
        }

        /* Hero Section */
        .epd-hero {
          position: relative;
          padding: 120px 60px 80px;
          overflow: hidden;
        }

        .epd-hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .epd-gradient-blur {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.4;
        }

        .epd-blur-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent);
          top: -200px;
          right: -100px;
        }

        .epd-blur-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent);
          bottom: -150px;
          left: -100px;
        }

        .epd-blur-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .epd-hero-content {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
        }

        .epd-back-btn {
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

        .epd-back-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(-5px);
        }

        .epd-hero-badge {
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

        .epd-hero-title {
          font-size: 72px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -2px;
        }

        .epd-gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #10b981 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .epd-hero-subtitle {
          font-size: 20px;
          color: #cbd5e1;
          line-height: 1.8;
          max-width: 900px;
          margin-bottom: 48px;
        }

        .epd-hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }

        .epd-stat-card {
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

        .epd-stat-card:hover {
          transform: translateY(-4px);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .epd-stat-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          color: #3b82f6;
        }

        .epd-stat-value {
          font-size: 28px;
          font-weight: 800;
          background: linear-gradient(135deg, #3b82f6, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .epd-stat-label {
          font-size: 14px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .epd-hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .epd-btn-primary, .epd-btn-secondary {
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

        .epd-btn-primary {
          background: linear-gradient(135deg, #3b82f6, #10b981);
          color: white;
          box-shadow: 0 10px 40px rgba(59, 130, 246, 0.4);
        }

        .epd-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 50px rgba(59, 130, 246, 0.5);
        }

        .epd-btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          backdrop-filter: blur(10px);
        }

        .epd-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        /* Tabs Section */
        .epd-tabs-section {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(10, 14, 39, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0 60px;
        }

        .epd-tabs-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .epd-tabs {
          display: flex;
          gap: 8px;
          overflow-x: auto;
        }

        .epd-tab {
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

        .epd-tab:hover {
          color: white;
        }

        .epd-tab-active {
          color: white;
        }

        .epd-tab-active::after {
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
        .epd-content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 60px;
        }

        .epd-section {
          margin-bottom: 80px;
        }

        .epd-fade-in {
          animation: epd-fadeIn 0.6s ease-out;
        }

        @keyframes epd-fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .epd-section-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #fff, #93c5fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .epd-section-description {
          font-size: 18px;
          color: #cbd5e1;
          margin-bottom: 48px;
          max-width: 800px;
        }

        /* Overview Section */
        .epd-section-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
        }

        .epd-overview-content {
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(20px);
        }

        .epd-text {
          font-size: 16px;
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .epd-subsection-title {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
          margin-top: 32px;
        }

        .epd-achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .epd-achievement-item {
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

        .epd-achievement-icon {
          flex-shrink: 0;
        }

        .epd-highlights {
          display: grid;
          gap: 12px;
          margin-top: 24px;
        }

        .epd-highlight-item {
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

        .epd-highlight-item svg {
          flex-shrink: 0;
          color: #3b82f6;
          margin-top: 2px;
        }

        .epd-overview-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .epd-info-card {
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 32px;
          backdrop-filter: blur(20px);
        }

        .epd-info-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 24px;
          color: white;
        }

        .epd-info-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .epd-info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .epd-info-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .epd-info-label {
          font-size: 14px;
          color: #94a3b8;
          font-weight: 600;
        }

        .epd-info-value {
          font-size: 15px;
          color: white;
          font-weight: 700;
        }

        .epd-status-live {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6ee7b7;
        }

        .epd-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: currentColor;
          animation: epd-pulse 2s ease-in-out infinite;
        }

        @keyframes epd-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .epd-platform-icons {
          display: flex;
          gap: 20px;
          justify-content: space-around;
        }

        .epd-platform-item {
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

        .epd-platform-item:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-4px);
        }

        .epd-metrics-card {
          background: linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.6));
        }

        .epd-metrics-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .epd-metric-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .epd-metric-label {
          font-size: 13px;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .epd-metric-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        .epd-metric-fill {
          height: 100%;
          border-radius: 10px;
          transition: width 1s ease;
        }

        .epd-metric-value {
          font-size: 16px;
          color: white;
          font-weight: 700;
        }

        /* Features Section */
        .epd-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
        }

        .epd-feature-card {
          position: relative;
          padding: 32px;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(20px);
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .epd-feature-card:hover {
          transform: translateY(-8px);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
        }

        .epd-feature-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .epd-feature-card:hover .epd-feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .epd-feature-title {
          font-size: 22px;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
        }

        .epd-feature-description {
          font-size: 15px;
          color: #94a3b8;
          line-height: 1.7;
        }

        .epd-feature-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .epd-feature-card:hover .epd-feature-gradient {
          opacity: 0.1;
        }

        .epd-additional-features {
          margin-top: 60px;
          padding: 40px;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(20px);
        }

        .epd-capabilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .epd-capability {
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

        .epd-capability:hover {
          background: rgba(139, 92, 246, 0.2);
          transform: translateX(4px);
        }

        .epd-capability svg {
          flex-shrink: 0;
        }

        /* Technologies Section */
        .epd-tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
        }

        .epd-tech-card {
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

        .epd-tech-card:hover {
          transform: translateY(-4px);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .epd-tech-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .epd-tech-content {
          flex: 1;
        }

        .epd-tech-name {
          font-size: 18px;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }

        .epd-tech-category {
          font-size: 13px;
          color: #94a3b8;
          font-weight: 600;
        }

        .epd-tech-indicator {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .epd-tech-card:hover .epd-tech-indicator {
          opacity: 1;
        }

        /* Architecture Section */
        .epd-architecture-section {
          margin-top: 60px;
        }

        .epd-architecture-card {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 40px;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(20px);
        }

        .epd-architecture-layer {
          padding: 24px;
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .epd-architecture-layer:hover {
          background: rgba(59, 130, 246, 0.15);
          transform: translateX(8px);
        }

        .epd-layer-title {
          font-size: 18px;
          font-weight: 700;
          color: #60a5fa;
          margin-bottom: 8px;
        }

        .epd-layer-content {
          font-size: 15px;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .epd-architecture-arrow {
          text-align: center;
          font-size: 24px;
          color: #3b82f6;
          font-weight: 700;
        }

        /* Screenshots Section */
        .epd-screenshots-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .epd-main-screenshot {
          position: relative;
          width: 100%;
          height: 600px;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
        }

        .epd-screenshot-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .epd-screenshot-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 32px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
        }

        .epd-screenshot-info h3 {
          font-size: 28px;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }

        .epd-screenshot-info p {
          font-size: 16px;
          color: #cbd5e1;
        }

        .epd-screenshot-thumbnails {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .epd-thumbnail {
          position: relative;
          height: 180px;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          border: 3px solid transparent;
          transition: all 0.3s ease;
        }

        .epd-thumbnail:hover {
          transform: scale(1.05);
          border-color: rgba(59, 130, 246, 0.5);
        }

        .epd-thumbnail-active {
          border-color: #3b82f6;
        }

        .epd-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .epd-thumbnail:hover img {
          transform: scale(1.1);
        }

        .epd-thumbnail-overlay {
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

        .epd-thumbnail:hover .epd-thumbnail-overlay {
          opacity: 1;
        }

        .epd-thumbnail-overlay svg {
          color: white;
        }

        /* CTA Section */
        .epd-cta-section {
          padding: 100px 60px;
          background: rgba(17, 24, 39, 0.6);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .epd-cta-content {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }

        .epd-cta-title {
          font-size: 48px;
          font-weight: 900;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #fff, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .epd-cta-description {
          font-size: 20px;
          color: #cbd5e1;
          margin-bottom: 40px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .epd-cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .epd-section-grid {
            grid-template-columns: 1fr;
          }

          .epd-hero-title {
            font-size: 56px;
          }

          .epd-hero-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .epd-hero {
            padding: 80px 20px 60px;
          }

          .epd-content-wrapper {
            padding: 60px 20px;
          }

          .epd-tabs-section {
            padding: 0 20px;
          }

          .epd-hero-title {
            font-size: 42px;
          }

          .epd-section-title {
            font-size: 32px;
          }

          .epd-hero-stats {
            grid-template-columns: 1fr;
          }

          .epd-features-grid {
            grid-template-columns: 1fr;
          }

          .epd-tech-grid {
            grid-template-columns: 1fr;
          }

          .epd-main-screenshot {
            height: 400px;
          }

          .epd-screenshot-thumbnails {
            grid-template-columns: repeat(2, 1fr);
          }

          .epd-hero-actions {
            flex-direction: column;
          }

          .epd-btn-primary, .epd-btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .epd-cta-section {
            padding: 60px 20px;
          }

          .epd-cta-title {
            font-size: 36px;
          }

          .epd-cta-buttons {
            flex-direction: column;
          }

          .epd-tabs {
            overflow-x: scroll;
          }

          .epd-architecture-card {
            padding: 24px;
          }

          .epd-overview-content {
            padding: 24px;
          }

          .epd-info-card {
            padding: 24px;
          }

          .epd-achievements-grid {
            grid-template-columns: 1fr;
          }

          .epd-capabilities-grid {
            grid-template-columns: 1fr;
          }

          .epd-additional-features {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .epd-hero-title {
            font-size: 32px;
          }

          .epd-section-title {
            font-size: 28px;
          }

          .epd-hero-subtitle {
            font-size: 16px;
          }

          .epd-stat-card {
            padding: 16px;
          }

          .epd-stat-value {
            font-size: 24px;
          }

          .epd-tab {
            padding: 16px 20px;
            font-size: 14px;
          }

          .epd-screenshot-thumbnails {
            grid-template-columns: 1fr;
          }

          .epd-feature-card {
            padding: 24px;
          }

          .epd-tech-card {
            padding: 16px;
          }

          .epd-architecture-layer {
            padding: 20px;
          }

          .epd-cta-title {
            font-size: 28px;
          }

          .epd-cta-description {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default EcommerceProjectDetail;