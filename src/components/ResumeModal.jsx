import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  FileText 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose, onShowToast }) => {
  const { personal, featuredProject, education, strengths } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (onShowToast) {
      onShowToast('Downloading Pravin Bedare Resume PDF...');
    }
  };

  return (
    <div className="modal-backdrop-custom" onClick={onClose}>
      <div 
        className="modal-dialog-custom modal-paper-dialog" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="glass-card modal-content-custom">
          
          {/* Modal Header */}
          <div className="modal-header-custom">
            <div className="d-flex align-items-center gap-2">
              <span className="badge-outline-cyan">
                <FileText size={14} className="me-1" /> Resume Document
              </span>
              <h3 className="modal-title-custom">{personal.name} - Resume</h3>
            </div>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body: Realistic Paper Resume */}
          <div className="modal-body-custom resume-paper-view-container">
            <div className="resume-paper" id="resume-printable-area">
              
              {/* Resume Header */}
              <div className="paper-header">
                <h1 className="paper-name">{personal.name.toUpperCase()}</h1>
                <h2 className="paper-title">{personal.title}</h2>
                <div className="paper-meta-row">
                  <span><Mail size={12} className="inline-icon" /> {personal.email}</span>
                  <span><Phone size={12} className="inline-icon" /> {personal.phone}</span>
                  <span><MapPin size={12} className="inline-icon" /> {personal.location}</span>
                </div>
                <div className="paper-meta-row mt-1">
                  <span><Github size={12} className="inline-icon" /> {personal.github}</span>
                  <span><Linkedin size={12} className="inline-icon" /> {personal.linkedin}</span>
                </div>
              </div>

              {/* Career Objective */}
              <div className="paper-section">
                <h3 className="paper-heading">Career Objective</h3>
                <p className="paper-text">
                  {personal.objectiveQuote}
                </p>
              </div>

              {/* Technical Skills Table */}
              <div className="paper-section">
                <h3 className="paper-heading">Technical Skills</h3>
                <table className="paper-table">
                  <tbody>
                    <tr>
                      <td className="paper-label">Frontend:</td>
                      <td>HTML5, CSS3, JavaScript, Bootstrap, Responsive Design, Flexbox, Grid, Media Queries</td>
                    </tr>
                    <tr>
                      <td className="paper-label">Backend:</td>
                      <td>Java, JDBC, Servlet, Spring MVC, Spring Boot, RESTful APIs</td>
                    </tr>
                    <tr>
                      <td className="paper-label">Database:</td>
                      <td>MySQL, SQL, PL/SQL</td>
                    </tr>
                    <tr>
                      <td className="paper-label">Tools &amp; Platforms:</td>
                      <td>Git, GitHub, Eclipse, Visual Studio, Postman, MySQL Workbench, CMD</td>
                    </tr>
                    <tr>
                      <td className="paper-label">Concepts:</td>
                      <td>Object-Oriented Programming (OOP), MVC Architecture, CRUD Operations</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Featured Project */}
              <div className="paper-section">
                <h3 className="paper-heading">Featured Project</h3>
                <div className="paper-sub-header">
                  <strong>{featuredProject.title}</strong>
                  <span className="paper-sub-meta">Java &bull; Spring Boot &bull; MySQL &bull; JSP</span>
                </div>
                <p className="paper-text mb-1">
                  <strong>Description:</strong> {featuredProject.description}
                </p>
                <p className="paper-text mb-0">
                  <strong>Key Features:</strong> Job posting, Job search, User registration, Authentication, Profile management, Responsive UI, Backend integration.
                </p>
              </div>

              {/* Education */}
              <div className="paper-section">
                <h3 className="paper-heading">Education</h3>
                {education.map((item) => (
                  <div key={item.id} className="paper-edu-item">
                    <div className="paper-sub-header">
                      <strong>{item.degree}</strong>
                      <span className="paper-sub-meta">
                        {item.year} {item.score ? `| ${item.score}` : ''}
                      </span>
                    </div>
                    <div className="paper-college-text">{item.institution}</div>
                  </div>
                ))}
              </div>

              {/* Strengths */}
              <div className="paper-section pb-0">
                <h3 className="paper-heading">Strengths</h3>
                <div className="paper-text">
                  <strong>Hardworking &amp; Dedicated</strong> &bull;{' '}
                  <strong>Quick Learner</strong> &bull;{' '}
                  <strong>Teamwork &amp; Collaboration</strong> &bull;{' '}
                  <strong>Positive Attitude</strong>
                </div>
              </div>

            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer-custom">
            <button
              type="button"
              className="btn-glass-outline"
              onClick={handlePrint}
            >
              <Printer size={16} />
              <span>Print</span>
            </button>
            <a
              href={personal.resumePdf}
              download="Pravin_Bedare_Resume.pdf"
              className="btn-primary-gradient"
              onClick={handleDownload}
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
            <button
              type="button"
              className="btn-glass-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
