import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  ArrowRight, 
  Menu, 
  X, 
  Home, 
  User, 
  Laptop, 
  FolderGit2, 
  GraduationCap, 
  FileText, 
  Send 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Laptop },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'contact', label: 'Contact', icon: Send },
];

const Navbar = ({ onShowToast }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 75;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const handleThemeToggle = () => {
    toggleTheme();
    const nextTheme = theme === 'dark' ? 'LIGHT' : 'DARK';
    if (onShowToast) {
      onShowToast(`Switched to ${nextTheme} theme`);
    }
  };

  return (
    <nav className={`custom-navbar ${scrolled ? 'scrolled' : ''}`} id="main-navbar" aria-label="Main Navigation">
      <div className="container nav-container">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="navbar-brand" 
          onClick={(e) => handleNavClick(e, 'home')}
          id="nav-brand"
        >
          <span className="brand-badge">&lt;PB /&gt;</span>
          <div className="brand-text-col">
            <span className="brand-name">{portfolioData.personal.shortName}</span>
            <span className="brand-subtitle">{portfolioData.personal.title}</span>
          </div>
        </a>

        {/* Desktop Navigation Menu */}
        <div className="nav-desktop-menu">
          <ul className="nav-menu">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    id={`nav-link-${item.id}`}
                  >
                    <IconComponent size={16} className="nav-ico" />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Actions & Theme Toggle */}
        <div className="nav-actions">
          <button
            className="theme-toggle-btn"
            id="theme-toggle-btn"
            type="button"
            onClick={handleThemeToggle}
            aria-label="Toggle Theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? (
              <Moon size={18} className="theme-icon moon-icon" />
            ) : (
              <Sun size={18} className="theme-icon sun-icon text-warning" />
            )}
          </button>

          <a
            href="#contact"
            className="btn-primary-gradient nav-cta-btn"
            onClick={(e) => handleNavClick(e, 'contact')}
            id="nav-hire-btn"
          >
            <span>Contact Me</span>
            <ArrowRight size={15} className="cta-arrow" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`navbar-toggler ${mobileMenuOpen ? 'open' : ''}`}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            id="navbar-toggler-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'show' : ''}`}>
        <div className="container mobile-nav-content">
          <ul className="mobile-nav-list">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="mobile-nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    <IconComponent size={18} className="me-2 text-info" />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mobile-drawer-footer pt-3">
            <a
              href="#contact"
              className="btn-primary-gradient w-100 justify-content-center"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              <span>Contact Pravin</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
