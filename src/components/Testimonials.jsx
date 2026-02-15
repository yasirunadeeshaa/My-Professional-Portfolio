import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, MessageCircle, Sparkles, CheckCircle, TrendingUp } from 'lucide-react';

const ModernTestimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState('next');

  const reviews = [
    {
      id: 1,
      author: "Sarah Johnson",
      position: "CEO",
      organization: "TechVision Inc.",
      avatar: "https://i.pravatar.cc/150?img=1",
      feedback: "Working with Yasiru was an absolute pleasure. His technical expertise and attention to detail transformed our vision into a reality. The web application he developed exceeded our expectations in every way.",
      category: "Web Application",
      accentColor: "#ff6b6b"
    },
    {
      id: 2,
      author: "Michael Chen",
      position: "Product Manager",
      organization: "InnovateLabs",
      avatar: "https://i.pravatar.cc/150?img=2",
      feedback: "Exceptional developer with a keen eye for design. Yasiru delivered our e-commerce platform on time and within budget. His problem-solving skills and communication made the entire process seamless.",
      category: "E-commerce Platform",
      accentColor: "#4ecdc4"
    },
    {
      id: 3,
      author: "Emily Rodriguez",
      position: "Marketing Director",
      organization: "Creative Solutions",
      avatar: "https://i.pravatar.cc/150?img=5",
      feedback: "I highly recommend Yasiru for any web development project. His ability to understand business requirements and translate them into elegant code is remarkable. A true professional!",
      category: "Corporate Website",
      accentColor: "#f7b731"
    },
    {
      id: 4,
      author: "David Thompson",
      position: "Startup Founder",
      organization: "NextGen Apps",
      avatar: "https://i.pravatar.cc/150?img=3",
      feedback: "Yasiru brought our startup's vision to life with a beautiful, responsive application. His full-stack expertise and dedication to quality made all the difference. Couldn't ask for a better developer.",
      category: "Mobile App",
      accentColor: "#a29bfe"
    },
    {
      id: 5,
      author: "Lisa Anderson",
      position: "IT Director",
      organization: "Global Enterprises",
      avatar: "https://i.pravatar.cc/150?img=9",
      feedback: "Outstanding work on our enterprise dashboard. Yasiru's code is clean, well-documented, and maintainable. His proactive approach to solving complex challenges was invaluable to our team.",
      category: "Enterprise Dashboard",
      accentColor: "#00d2d3"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [activeSlide]);

  const handleNext = () => {
    setDirection('next');
    setActiveSlide((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection('prev');
    setActiveSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > activeSlide ? 'next' : 'prev');
    setActiveSlide(index);
  };

  const current = reviews[activeSlide];

  return (
    <div className="testimonial-wrapper">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="content-container">
        <div className="header-section">
          <div className="label">
            <Sparkles size={18} />
            <span>Client Testimonials</span>
          </div>
          <h1 className="main-heading">
            Success <span className="highlight">Stories</span>
          </h1>
          <p className="description">
            Real feedback from real clients who trusted me with their projects
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-icon">
              <CheckCircle size={24} />
            </div>
            <div className="stat-info">
              <div className="stat-number">50+</div>
              <div className="stat-text">Projects</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">
              <MessageCircle size={24} />
            </div>
            <div className="stat-info">
              <div className="stat-number">100%</div>
              <div className="stat-text">Satisfaction</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">
              <TrendingUp size={24} />
            </div>
            <div className="stat-info">
              <div className="stat-number">5.0</div>
              <div className="stat-text">Rating</div>
            </div>
          </div>
        </div>

        <div className="carousel-container">
          <div className="testimonial-card" style={{ '--accent': current.accentColor }}>
            <div className="card-glow"></div>
            
            <div className="card-header">
              <div className="avatar-section">
                <div className="avatar-wrapper">
                  <img src={current.avatar} alt={current.author} className="avatar-img" />
                  <div className="avatar-pulse"></div>
                </div>
                <div className="author-info">
                  <h3 className="author-name">{current.author}</h3>
                  <p className="author-position">{current.position}</p>
                  <p className="author-company">{current.organization}</p>
                </div>
              </div>
              <div className="category-badge" style={{ backgroundColor: `${current.accentColor}20`, color: current.accentColor }}>
                {current.category}
              </div>
            </div>

            <div className="quote-mark">"</div>
            
            <div className="card-body">
              <p className="testimonial-text">{current.feedback}</p>
            </div>

            <div className="stars-container">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="star" viewBox="0 0 24 24" fill={current.accentColor}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>

          <button className="nav-arrow nav-left" onClick={handlePrev} aria-label="Previous">
            <ArrowLeft size={20} />
          </button>
          <button className="nav-arrow nav-right" onClick={handleNext} aria-label="Next">
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="carousel-controls">
          <div className="dots-container">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeSlide ? 'dot-active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="mini-avatars">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                className={`mini-avatar ${index === activeSlide ? 'mini-active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`View ${review.author}'s testimonial`}
              >
                <img src={review.avatar} alt={review.author} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .testimonial-wrapper {
          min-height: 100vh;
          background: linear-gradient(to bottom right, #0a0a0a, #1a1a2e, #16213e);
          color: white;
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
        }

        .floating-shapes {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.06;
        }

        .shape-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #ff6b6b, transparent);
          top: -100px;
          right: -100px;
          animation: float1 25s infinite ease-in-out;
        }

        .shape-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #4ecdc4, transparent);
          bottom: -50px;
          left: -50px;
          animation: float2 30s infinite ease-in-out;
        }

        .shape-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #f7b731, transparent);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float3 20s infinite ease-in-out;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-100px, 100px) rotate(180deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(80px, -80px); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }

        .content-container {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
        }

        .header-section {
          text-align: center;
          margin-bottom: 50px;
        }

        .label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
          backdrop-filter: blur(10px);
        }

        .label svg {
          color: #f7b731;
        }

        .main-heading {
          font-size: 64px;
          font-weight: 900;
          margin-bottom: 16px;
          letter-spacing: -2px;
        }

        .highlight {
          background: linear-gradient(120deg, #ff6b6b, #4ecdc4, #f7b731);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .description {
          font-size: 18px;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
        }

        .stat-box {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .stat-box:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #4ecdc4;
        }

        .stat-info {
          flex: 1;
        }

        .stat-number {
          font-size: 28px;
          font-weight: 900;
          color: white;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-text {
          font-size: 13px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .carousel-container {
          position: relative;
          margin-bottom: 40px;
        }

        .testimonial-card {
          position: relative;
          padding: 50px;
          background: rgba(20, 20, 35, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          backdrop-filter: blur(30px);
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, var(--accent), transparent 70%);
          opacity: 0.08;
          pointer-events: none;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 30px;
          position: relative;
          z-index: 2;
        }

        .avatar-section {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .avatar-wrapper {
          position: relative;
          width: 90px;
          height: 90px;
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(255, 255, 255, 0.2);
        }

        .avatar-pulse {
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }

        .author-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .author-name {
          font-size: 26px;
          font-weight: 800;
          margin: 0;
        }

        .author-position {
          font-size: 15px;
          color: #94a3b8;
          margin: 0;
        }

        .author-company {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }

        .category-badge {
          padding: 10px 20px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .quote-mark {
          position: absolute;
          top: 20px;
          right: 40px;
          font-size: 150px;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.03);
          font-family: Georgia, serif;
          line-height: 1;
          pointer-events: none;
        }

        .card-body {
          position: relative;
          z-index: 2;
          margin-bottom: 30px;
        }

        .testimonial-text {
          font-size: 20px;
          line-height: 1.8;
          color: #e2e8f0;
          margin: 0;
        }

        .stars-container {
          display: flex;
          gap: 6px;
          position: relative;
          z-index: 2;
        }

        .star {
          width: 22px;
          height: 22px;
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .nav-arrow:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-left {
          left: -25px;
        }

        .nav-right {
          right: -25px;
        }

        .carousel-controls {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .dots-container {
          display: flex;
          gap: 10px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        .dot-active {
          width: 40px;
          border-radius: 5px;
          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
        }

        .mini-avatars {
          display: flex;
          gap: 12px;
        }

        .mini-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          background: none;
          padding: 0;
          overflow: hidden;
          opacity: 0.5;
        }

        .mini-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .mini-avatar:hover {
          opacity: 0.8;
          transform: scale(1.05);
        }

        .mini-active {
          border-color: #4ecdc4;
          opacity: 1;
          transform: scale(1.15);
        }

        @media (max-width: 768px) {
          .testimonial-wrapper {
            padding: 60px 20px;
          }

          .main-heading {
            font-size: 42px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-card {
            padding: 30px 20px;
          }

          .card-header {
            flex-direction: column;
            gap: 20px;
          }

          .avatar-section {
            flex-direction: column;
            text-align: center;
          }

          .author-info {
            align-items: center;
          }

          .category-badge {
            align-self: flex-start;
          }

          .testimonial-text {
            font-size: 17px;
          }

          .nav-arrow {
            display: none;
          }

          .quote-mark {
            font-size: 100px;
            top: 10px;
            right: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ModernTestimonials;