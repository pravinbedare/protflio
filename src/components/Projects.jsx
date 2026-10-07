import React from 'react';
import { 
  FolderGit2, 
  Star, 
  CheckCircle2, 
  Check, 
  Layers, 
  Github, 
  ExternalLink,
  GitFork,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = ({ onOpenProjectModal }) => {
  const { featuredProject } = portfolioData;

  return (
    <section className="section-padding" id="projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center mx-auto mb-5">
          <span className="section-tag">
            <FolderGit2 size={14} className="me-1" /> Portfolio Showcase
          </span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Project</span>
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="section-subtitle">
            Real-world full-stack implementation built strictly using the resume tech stack
          </p>
        </div>

        {/* Detailed Project Showcase Card */}
        <div className="glass-card project-showcase-card">
          <div className="project-grid">
            
            {/* Left: Interactive Preview & Architecture Visual */}
            <div className="project-image-col">
              <div className="project-media-wrapper">
                <img
                  src={featuredProject.previewImg}
                  alt={`${featuredProject.title} UI Preview`}
                  className="project-preview-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.classList.remove('d-none');
                  }}
                />
                
                {/* Fallback visual if preview image fails */}
                <div className="project-image-fallback d-none">
                  <Sparkles size={48} className="text-info mb-2" />
                  <h4>{featuredProject.title}</h4>
                  <p>{featuredProject.tagline}</p>
                </div>

                <div className="project-overlay">
                  <div className="project-overlay-header">
                    <span className="featured-badge">
                      <Star size={14} className="text-warning fill-warning" /> Featured Full-Stack Application
                    </span>
                    <span className="status-badge-mini">
                      <span className="status-dot"></span> Complete Showcase
                    </span>
                  </div>

                  <div className="glass-pill-bar">
                    <div className="pill-item">
                      <div className="pill-title">Spring Boot</div>
                      <small className="pill-sub">Core Engine</small>
                    </div>
                    <div className="pill-divider"></div>
                    <div className="pill-item">
                      <div className="pill-title">MySQL</div>
                      <small className="pill-sub">Relational Data</small>
                    </div>
                    <div className="pill-divider"></div>
                    <div className="pill-item">
                      <div className="pill-title">MVC & JSP</div>
                      <small className="pill-sub">Presentation</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Project Information & Specs */}
            <div className="project-info-col">
              <div>
                <div className="project-badge-row">
                  <span className="badge-outline-cyan">Full Stack Web App</span>
                  <span className="badge-outline-subtle">Java &bull; Spring MVC</span>
                </div>

                <h3 className="project-heading">{featuredProject.title}</h3>

                <p className="project-summary-text">
                  {featuredProject.description}
                </p>

                {/* Key Features List */}
                <div className="project-features-block">
                  <h4 className="features-subheading">
                    <CheckCircle2 size={16} className="text-success me-2" /> Key Project Features
                  </h4>
                  <div className="features-grid">
                    {featuredProject.features.map((feat, idx) => (
                      <div key={idx} className="feature-item">
                        <Check size={14} className="text-info flex-shrink-0" />
                        <span>{feat.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used Badges */}
                <div className="project-tech-block">
                  <h4 className="features-subheading">
                    <Layers size={16} className="text-warning me-2" /> Technologies Used
                  </h4>
                  <div className="tech-badge-list">
                    {featuredProject.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-actions-row">
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-gradient"
                  id="project-btn-github"
                >
                  <Github size={18} />
                  <span>GitHub Repository</span>
                </a>
                
                <button
                  type="button"
                  className="btn-glass-outline"
                  onClick={onOpenProjectModal}
                  id="project-btn-view-details"
                >
                  <GitFork size={18} />
                  <span>View Architecture & Demo</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
