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
import TaskManagement from './projects/TaskManagement';
import AIchat from './projects/AIChat';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <section id="home">
                <Hero />
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
              <section id="testimonials">
                <PortfolioTestimonials />
              </section>
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
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;