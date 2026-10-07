import React, { useState, useEffect } from 'react';
import { 
  FolderKanban, 
  Download, 
  Eye, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight,
  Sparkles,
  Coffee,
  Zap,
  Database
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = ({ onOpenResumeModal, onShowToast }) => {
  const { personal } = portfolioData;
  const phrases = personal.typewriterPhrases;

  const [currentText, setCurrentText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleType = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(45);
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(90);
      }

      if (!isDeleting && currentText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setTypingSpeed(350);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, typingSpeed, phrases]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const projSection = document.getElementById('projects');
    if (projSection) {
      projSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero-section" id="home">
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="hero-content">
            <div className="status-badge mb-3">
              <span className="status-dot"></span>
              <span className="status-text">{personal.statusBadge}</span>
            </div>

            <h2 className="hero-greeting">
              Hi, I'm <span className="text-gradient">{personal.name}</span>
            </h2>

            <h1 className="hero-title">
              <span className="typewriter-prefix">&gt; </span>
              <span className="typewriter-text">{currentText}</span>
              <span className="cursor-blink">_</span>
            </h1>

            <p className="hero-description">
              Motivated <strong>Java Full Stack fresher</strong> with strong foundational knowledge of front-end and back-end development. Passionate about building robust web applications, exploring clean architectures, and contributing to real-world software engineering projects.
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-group">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="btn-primary-gradient btn-lg"
                id="hero-btn-projects"
              >
                <FolderKanban size={18} />
                <span>View My Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={personal.resumePdf}
                download="Pravin_Bedare_Resume.pdf"
                className="btn-glass-secondary btn-lg"
                id="hero-btn-resume"
                onClick={() => onShowToast && onShowToast('Downloading Pravin Bedare Resume PDF...')}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                className="btn-glass-outline btn-lg"
                onClick={onOpenResumeModal}
                id="hero-btn-preview-resume"
              >
                <Eye size={18} />
                <span>Preview</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="hero-social-strip">
              <span className="social-label">Connect:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-box"
                aria-label="GitHub Profile"
                title="GitHub - @pravinbedare"
              >
                <Github size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-box"
                aria-label="LinkedIn Profile"
                title="LinkedIn - Pravin Bedare"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="social-icon-box"
                aria-label="Send Email"
                title={`Email: ${personal.email}`}
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${personal.phoneRaw}`}
                className="social-icon-box"
                aria-label="Call Phone"
                title={`Phone: ${personal.phone}`}
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Developer Photo Showcase */}
          <div className="hero-photo-column">
            <div className="hero-photo-container">
              {/* Background ambient ring & glow */}
              <div className="hero-photo-glow" aria-hidden="true"></div>
              <div className="hero-code-circuit" aria-hidden="true"></div>

              {/* Photo Card Wrapper */}
              <div className="hero-photo-wrapper glass-card">
                {!imageError ? (
                  <img
                    src={personal.profileImg}
                    alt={`${personal.name} - Java Full Stack Developer`}
                    className="hero-profile-img"
                    id="heroProfileImg"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="hero-photo-placeholder" id="photoFallback">
                    <div className="placeholder-icon">
                      <Sparkles size={40} className="text-info" />
                    </div>
                    <span className="placeholder-title">{personal.name}</span>
                    <span className="placeholder-sub">Java Full Stack Developer</span>
                  </div>
                )}

                {/* Bottom Status Ribbon */}
                <div className="hero-photo-overlay-badge">
                  <span className="status-dot"></span>
                  <span>Java Full Stack &bull; 2026</span>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="floating-tech-badge badge-top-right">
                <div className="badge-icon bg-warning-subtle text-warning">
                  <Coffee size={20} />
                </div>
                <div className="badge-content">
                  <span className="badge-title">Core Java</span>
                  <small className="badge-sub">OOP &bull; Collections</small>
                </div>
              </div>

              <div className="floating-tech-badge badge-bottom-left">
                <div className="badge-icon bg-success-subtle text-success">
                  <Zap size={20} />
                </div>
                <div className="badge-content">
                  <span className="badge-title">Spring Boot</span>
                  <small className="badge-sub">RESTful APIs</small>
                </div>
              </div>

              <div className="floating-tech-badge badge-bottom-right">
                <div className="badge-icon bg-info-subtle text-info">
                  <Database size={20} />
                </div>
                <div className="badge-content">
                  <span className="badge-title">MySQL</span>
                  <small className="badge-sub">Relational DB</small>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Hero;
