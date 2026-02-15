import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Twitter, MessageSquare, Clock, Globe, AlertCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'yasiru@example.com',
      link: 'mailto:yasiru@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+94 77 123 4567',
      link: 'tel:+94771234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Negombo, Sri Lanka',
      link: null
    },
    {
      icon: Clock,
      title: 'Availability',
      content: 'Mon - Fri, 9AM - 6PM',
      link: null
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: '#333' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0077B5' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: '#1DA1F2' },
    { icon: Globe, href: 'https://portfolio.com', label: 'Portfolio', color: '#667eea' }
  ];

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <div className="header-badge">
            <MessageSquare size={20} />
            <span>Get In Touch</span>
          </div>
          <h1 className="contact-title">
            Let's Work <span className="gradient-text">Together</span>
          </h1>
          <p className="contact-subtitle">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Side - Contact Form */}
          <div className="form-section">
            <div className="form-card">
              <h2 className="form-title">Send a Message</h2>
              
              {isSubmitted && (
                <div className="success-message">
                  <CheckCircle size={24} />
                  <div>
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              )}

              {error && (
                <div className="error-message">
                  <AlertCircle size={24} />
                  <div>
                    <h4>Error</h4>
                    <p>{error}</p>
                  </div>
                </div>
              )}

              <div className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button 
                  className="submit-btn"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={20} />
                    </>
                  )}
                  <div className="btn-shine"></div>
                </button>
              </div>
            </div>

            
          </div>

          {/* Right Side - Contact Info */}
          <div className="info-section">
            {/* Contact Information Cards */}
            <div className="info-cards">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="info-card">
                    <div className="info-icon">
                      <Icon size={24} />
                    </div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link}>{info.content}</a>
                      ) : (
                        <p>{info.content}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h3 className="social-title">Connect With Me</h3>
              <div className="social-grid">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="social-card"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon size={24} />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Response Card */}
            <div className="response-card">
              <div className="response-icon">⚡</div>
              <h4>Quick Response Guaranteed</h4>
              <p>I typically respond within 24 hours during business days</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .contact-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          padding: 120px 20px 80px;
          position: relative;
          overflow: hidden;
        }

        .contact-page::before {
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

        .contact-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header Section */
        .contact-header {
          text-align: center;
          margin-bottom: 80px;
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: rgba(102, 126, 234, 0.2);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 50px;
          color: #a5b4fc;
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .contact-title {
          font-size: 56px;
          font-weight: 900;
          color: white;
          margin-bottom: 20px;
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-subtitle {
          font-size: 18px;
          color: #cbd5e1;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* Grid Layout */
        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: start;
        }

        /* Form Section */
        .form-section {
          animation: fadeInLeft 0.8s ease-out 0.2s both;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .form-card {
          background: rgba(17, 24, 39, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .form-title {
          font-size: 28px;
          font-weight: 800;
          color: white;
          margin-bottom: 30px;
        }

        .success-message {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: rgba(72, 187, 120, 0.15);
          border: 1px solid rgba(72, 187, 120, 0.3);
          border-radius: 16px;
          margin-bottom: 30px;
          color: #86efac;
          animation: slideIn 0.5s ease-out;
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 16px;
          margin-bottom: 30px;
          color: #fca5a5;
          animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .success-message h4,
        .error-message h4 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .success-message p {
          font-size: 14px;
          color: #86efac;
          opacity: 0.9;
        }

        .error-message p {
          font-size: 14px;
          color: #fca5a5;
          opacity: 0.9;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 600;
          color: #cbd5e1;
          letter-spacing: 0.5px;
        }

        .form-group input,
        .form-group textarea {
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 15px;
          font-family: inherit;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #64748b;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(102, 126, 234, 0.5);
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 18px 40px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 50px rgba(102, 126, 234, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .submit-btn:hover:not(:disabled) .btn-shine {
          left: 100%;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }


        /* Info Section */
        .info-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
          animation: fadeInRight 0.8s ease-out 0.4s both;
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .info-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 24px;
          background: rgba(17, 24, 39, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .info-card:hover {
          background: rgba(17, 24, 39, 0.9);
          border-color: rgba(102, 126, 234, 0.3);
          transform: translateY(-4px);
        }

        .info-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(102, 126, 234, 0.2);
          border-radius: 12px;
          color: #a5b4fc;
          flex-shrink: 0;
        }

        .info-content h4 {
          font-size: 14px;
          font-weight: 600;
          color: #94a3b8;
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-content p,
        .info-content a {
          font-size: 16px;
          font-weight: 600;
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .info-content a:hover {
          color: #a5b4fc;
        }

        /* Social Section */
        .social-section {
          background: rgba(17, 24, 39, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 28px;
          backdrop-filter: blur(20px);
        }

        .social-title {
          font-size: 18px;
          font-weight: 700;
          color: white;
          margin-bottom: 20px;
        }

        .social-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .social-card {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .social-card:hover {
          background: rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.3);
          transform: translateY(-2px);
        }

        /* Response Card */
        .response-card {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 16px;
          padding: 28px;
          text-align: center;
          backdrop-filter: blur(20px);
        }

        .response-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .response-card h4 {
          font-size: 18px;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }

        .response-card p {
          font-size: 14px;
          color: #cbd5e1;
          line-height: 1.6;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-title {
            font-size: 42px;
          }
        }

        @media (max-width: 768px) {
          .contact-page {
            padding: 80px 20px 60px;
          }

          .contact-header {
            margin-bottom: 50px;
          }

          .contact-title {
            font-size: 36px;
          }

          .contact-subtitle {
            font-size: 16px;
          }

          .form-card {
            padding: 28px 20px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .info-cards {
            grid-template-columns: 1fr;
          }

          .social-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .contact-title {
            font-size: 28px;
          }

          .form-title {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;