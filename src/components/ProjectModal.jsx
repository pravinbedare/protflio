import React, { useEffect } from 'react';
import { 
  X, 
  Info, 
  Layers, 
  CheckCircle2, 
  Code, 
  Github, 
  ArrowRightLeft,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ProjectModal = ({ isOpen, onClose }) => {
  const { featuredProject } = portfolioData;

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

  return (
    <div className="modal-backdrop-custom" onClick={onClose}>
      <div 
        className="modal-dialog-custom modal-lg-custom" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="glass-card modal-content-custom">
          
          {/* Modal Header */}
          <div className="modal-header-custom">
            <div className="d-flex align-items-center gap-2">
              <span className="badge-outline-cyan">Full Stack Application</span>
              <h3 className="modal-title-custom">{featuredProject.title}</h3>
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

          {/* Modal Body */}
          <div className="modal-body-custom">
            <div className="modal-grid-two-col">
              
              {/* Left Col: Image & Summary */}
              <div className="modal-left-col">
                <div className="project-modal-img-wrap">
                  <img
                    src={featuredProject.previewImg}
                    alt={featuredProject.title}
                    className="modal-preview-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                <h4 className="modal-section-title text-info">
                  <Info size={16} className="me-2 inline-icon" /> Project Summary
                </h4>
                <p className="modal-text-muted">
                  {featuredProject.detailedDescription}
                </p>
              </div>

              {/* Right Col: Architecture & Features */}
              <div className="modal-right-col">
                <h4 className="modal-section-title text-warning">
                  <Layers size={16} className="me-2 inline-icon" /> System Architecture Flow
                </h4>

                {/* Architecture Flow Diagram Box */}
                <div className="architecture-diagram-box">
                  <div className="arch-flow-flex">
                    <div className="arch-card arch-view">
                      <div className="arch-title text-info">{featuredProject.architecture.view.title}</div>
                      <div className="arch-tech">{featuredProject.architecture.view.tech}</div>
                    </div>

                    <div className="arch-connector">
                      <ArrowRightLeft size={16} />
                    </div>

                    <div className="arch-card arch-controller">
                      <div className="arch-title text-warning">{featuredProject.architecture.controller.title}</div>
                      <div className="arch-tech">{featuredProject.architecture.controller.tech}</div>
                    </div>

                    <div className="arch-connector">
                      <ArrowRightLeft size={16} />
                    </div>

                    <div className="arch-card arch-model">
                      <div className="arch-title text-success">{featuredProject.architecture.model.title}</div>
                      <div className="arch-tech">{featuredProject.architecture.model.tech}</div>
                    </div>
                  </div>
                </div>

                {/* Feature Modules Breakdown */}
                <h4 className="modal-section-title text-light mt-3">
                  <CheckCircle2 size={16} className="me-2 inline-icon text-info" /> Feature Modules
                </h4>
                <ul className="modal-features-list">
                  {featuredProject.features.map((feat, idx) => (
                    <li key={idx} className="modal-feature-item">
                      <span className="bullet-dot"></span>
                      <div>
                        <strong>{feat.title}:</strong> {feat.desc}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Technologies Applied */}
                <h4 className="modal-section-title text-light mt-3">
                  <Code size={16} className="me-2 inline-icon text-primary" /> Technologies Applied
                </h4>
                <div className="tech-badge-list mt-2">
                  {featuredProject.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer-custom">
            <a
              href={featuredProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gradient"
            >
              <Github size={16} />
              <span>Visit Pravin's GitHub</span>
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

export default ProjectModal;
