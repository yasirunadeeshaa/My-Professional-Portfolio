import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MyProject from './components/Project';
import AboutMe from './components/AboutMe';
import Skill from './components/Skill';
import Footer from './components/Footer';
import PortfolioTestimonials from './components/Testimonials';
import Contact from './components/ContactMe';

import HealthcareProjectDetail from './projects/HealthCareApplication';
import WeddingProjectDetail from './projects/Wedding';
import EcommerceDetail from './projects/Ecommerce';
import StudentManagementDetail from './projects/StudentManagement';
import TicketBookingSystem from './projects/TicketBookingSystem';
import TaskManagement from './projects/TaskManagement';
import AIchat from './projects/AIChat';

import './App.css';

function App() {
  // Single source of truth for the site-wide theme.
  // Passed down to Navigation and Hero (and any other theme-aware
  // component) so one toggle controls everything.
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Router>
      <div className="app">
        <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Routes>
          <Route path="/" element={
            <>
              <section id="home">
                <Hero isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              </section>
              <section id="about">
                <AboutMe />
              </section>
              <section id="projects">
                <MyProject />
              </section>
              <section id="skills">
                <Skill />
              </section>
              {/* <section id="testimonials">
                <PortfolioTestimonials />
              </section> */}
              <section id="contact">
                <Contact />
              </section>
              
            </>
          } />
          
          <Route path="/projects/healthcare" element={<HealthcareProjectDetail />} />
          
          <Route path="/projects/wedding" element={<WeddingProjectDetail />} />
          
          <Route path="/projects/ecommerce" element={<EcommerceDetail />} />
          
          <Route path="/projects/student-management" element={<StudentManagementDetail />} />
          
          <Route path="/projects/task-management" element={<TaskManagement />} />
          
          <Route path="/projects/aichat" element={<AIchat />} />
          
          <Route path="/projects/ticket-booking" element={<TicketBookingSystem />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;