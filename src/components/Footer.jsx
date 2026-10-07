import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Coffee 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-custom">
      <div className="container">
        
        <div className="footer-main-grid">
          
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')} 
              className="footer-brand"
            >
              <span className="brand-badge">&lt;PB /&gt;</span>
              <span className="brand-name">{personal.shortName}</span>
            </a>
            <p className="footer-brand-desc">
              Java Full Stack Developer passionate about Spring Boot, REST APIs, and scalable software solutions. Graduating BCS 2026.
            </p>
          </div>

          {/* Navigation Links Col */}
          <div className="footer-nav-col">
            <ul className="footer-nav-list">
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
              <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
              <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
              <li><a href="#education" onClick={(e) => scrollToSection(e, 'education')}>Education</a></li>
              <li><a href="#resume" onClick={(e) => scrollToSection(e, 'resume')}>Resume</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
            </ul>
          </div>

          {/* Social Icons Col */}
          <div className="footer-social-col">
            <div className="footer-social-strip">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-box"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-box"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="social-icon-box"
                aria-label="Email"
                title="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${personal.phoneRaw}`}
                className="social-icon-box"
                aria-label="Phone"
                title="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-flex">
          <p className="copyright-text">
            &copy; 2026 <strong>{personal.name}</strong>. All Rights Reserved.
          </p>
          <div className="credits-text">
            <span>
              Built with <Coffee size={14} className="text-warning inline-icon" /> Java Architecture &bull; React &bull; Vite &bull; Vanilla CSS
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
