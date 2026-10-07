import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Strengths from './components/Strengths';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';

function AppContent() {
  const [toastMessage, setToastMessage] = useState('');
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  const closeToast = () => {
    setToastMessage('');
  };

  return (
    <div className="portfolio-app-root">
      {/* Scroll Progress Top Bar */}
      <ScrollProgress />

      {/* Ambient Glows */}
      <div className="ambient-glow glow-1" aria-hidden="true" />
      <div className="ambient-glow glow-2" aria-hidden="true" />
      <div className="ambient-glow glow-3" aria-hidden="true" />

      {/* Navigation Bar */}
      <Navbar onShowToast={showToast} />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenResumeModal={() => setIsResumeModalOpen(true)} 
          onShowToast={showToast}
        />
        
        <About />

        <Skills />

        <Projects 
          onOpenProjectModal={() => setIsProjectModalOpen(true)} 
        />

        <Education />

        <Strengths />

        <ResumeSection 
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onShowToast={showToast}
        />

        <Contact 
          onShowToast={showToast} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back To Top Floating Action */}
      <BackToTop />

      {/* Project Architecture & Demo Modal */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />

      {/* ATS Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={closeToast}
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
