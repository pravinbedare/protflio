import React, { useState } from 'react';
import { 
  User, 
  Check, 
  MapPin, 
  Target, 
  Server, 
  Database, 
  Layers, 
  Cpu, 
  GraduationCap, 
  Mail, 
  Phone 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Server: Server,
  Database: Database,
  Layers: Layers,
  Cpu: Cpu
};

const About = () => {
  const { personal, pillars } = portfolioData;
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section className="section-padding" id="about">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center mx-auto mb-5">
          <span className="section-tag">
            <User size={14} className="me-1" /> Get To Know Me
          </span>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="section-subtitle">
            Dedicated Java Full Stack Fresher striving for clean code and architectural excellence
          </p>
        </div>

        <div className="about-grid">
          
          {/* Left: Profile & Objective Card */}
          <div className="about-profile-col">
            <div className="glass-card about-profile-card">
              
              <div>
                <div className="about-header-flex">
                  <div className="avatar-box">
                    {!avatarError ? (
                      <img
                        src={personal.profileImg}
                        alt={personal.name}
                        className="avatar-img"
                        onError={() => setAvatarError(true)}
                      />
                    ) : (
                      <div className="avatar-fallback">
                        <span>PB</span>
                      </div>
                    )}
                    <span className="avatar-badge" title="Verified Full Stack Profile">
                      <Check size={12} strokeWidth={3} />
                    </span>
                  </div>

                  <div>
                    <h3 className="profile-name">{personal.name}</h3>
                    <p className="profile-role text-gradient">{personal.title}</p>
                    <span className="location-pill">
                      <MapPin size={12} className="text-danger me-1" /> {personal.location}
                    </span>
                  </div>
                </div>

                {/* Career Objective Box */}
                <div className="about-objective-box">
                  <h4 className="objective-heading">
                    <Target size={16} className="text-info me-2" /> Career Objective
                  </h4>
                  <blockquote className="objective-quote">
                    "{personal.objectiveQuote}"
                  </blockquote>
                </div>

                <p className="about-bio-text">
                  I am an enthusiastic computer science graduate (<strong>{personal.batch}</strong>) focused on full-lifecycle software development. My core focus centers on <strong>Core Java, Spring MVC, Spring Boot, JDBC, Servlets, and MySQL</strong>, complemented by responsive modern web frontends using <strong>HTML5, CSS3, JavaScript, and Bootstrap</strong>.
                </p>
              </div>

              {/* Personal Information Meta Grid */}
              <div className="profile-info-grid">
                <div className="info-item">
                  <span className="info-label">
                    <GraduationCap size={14} className="me-1" /> Degree:
                  </span>
                  <span className="info-value">{personal.degree}</span>
                </div>

                <div className="info-item">
                  <span className="info-label">
                    <Mail size={14} className="me-1" /> Email:
                  </span>
                  <a href={`mailto:${personal.email}`} className="info-value text-break">
                    {personal.email}
                  </a>
                </div>

                <div className="info-item">
                  <span className="info-label">
                    <Phone size={14} className="me-1" /> Phone:
                  </span>
                  <a href={`tel:${personal.phoneRaw}`} className="info-value">
                    {personal.phone}
                  </a>
                </div>

                <div className="info-item">
                  <span className="info-label">
                    <MapPin size={14} className="me-1" /> Location:
                  </span>
                  <span className="info-value">{personal.location}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Four Core Engineering Pillars */}
          <div className="about-pillars-col">
            <div className="pillars-grid">
              {pillars.map((pillar) => {
                const IconComponent = iconMap[pillar.icon] || Server;
                return (
                  <div key={pillar.id} className="glass-card pillar-card">
                    <div className={`pillar-icon-wrap bg-${pillar.accent}-subtle text-${pillar.accent}`}>
                      <IconComponent size={22} />
                    </div>
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.desc}</p>
                    <div className="pillar-tags">
                      {pillar.tags.map((tag, idx) => (
                        <span key={idx} className="badge-mini">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
