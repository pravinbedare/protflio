import React from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Building2, 
  Calendar 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  GraduationCap,
  Award,
  BookOpen
};

const Education = () => {
  const { education } = portfolioData;

  return (
    <section className="section-padding bg-alt-surface" id="education">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center mx-auto mb-5">
          <span className="section-tag">
            <GraduationCap size={14} className="me-1" /> Academic Background
          </span>
          <h2 className="section-title">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="section-subtitle">
            Verified academic qualifications from foundational schooling to Computer Science degree
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="education-timeline">
          <div className="timeline-center-line" aria-hidden="true"></div>

          <div className="timeline-items-list">
            {education.map((item) => {
              const IconComponent = iconMap[item.icon] || GraduationCap;
              return (
                <div key={item.id} className="timeline-block">
                  <div className="timeline-marker">
                    <IconComponent size={20} />
                  </div>

                  <div className="glass-card timeline-card">
                    <div className="timeline-card-header">
                      <div className="badge-wrap">
                        <span className="badge-primary-subtle">
                          Graduation / Passout: {item.year}
                        </span>
                        {item.current ? (
                          <span className="badge-success-subtle">Current Degree</span>
                        ) : (
                          <span className="badge-info-subtle">Score: {item.score}</span>
                        )}
                      </div>
                      <span className="year-pill">{item.year}</span>
                    </div>

                    <h3 className="timeline-degree">{item.degree}</h3>
                    
                    <h4 className="timeline-college">
                      <Building2 size={16} className="text-info me-2 flex-shrink-0" />
                      <span>{item.institution}</span>
                    </h4>

                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
