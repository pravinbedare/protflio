import React from 'react';
import { 
  Dumbbell, 
  HeartHandshake, 
  Zap, 
  Users, 
  Smile 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  HeartHandshake,
  Zap,
  Users,
  Smile
};

const Strengths = () => {
  const { strengths } = portfolioData;

  return (
    <section className="section-padding" id="strengths">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center mx-auto mb-5">
          <span className="section-tag">
            <Dumbbell size={14} className="me-1" /> Core Competencies
          </span>
          <h2 className="section-title">
            Key <span className="text-gradient">Strengths</span>
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="section-subtitle">
            Professional attributes and soft skills that drive high-performance software engineering
          </p>
        </div>

        {/* Strengths Cards Grid */}
        <div className="strengths-grid">
          {strengths.map((item) => {
            const IconComponent = iconMap[item.icon] || HeartHandshake;
            return (
              <div key={item.id} className="strength-card-wrapper">
                <div className="glass-card strength-card text-center">
                  <div className={`strength-icon-wrap bg-${item.color}-subtle text-${item.color}`}>
                    <IconComponent size={26} />
                  </div>
                  <h3 className="strength-title">{item.title}</h3>
                  <p className="strength-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Strengths;
