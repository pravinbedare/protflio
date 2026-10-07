import React, { useState } from 'react';
import { 
  Laptop, 
  Grid, 
  Coffee, 
  Layout, 
  Database, 
  Wrench, 
  Brain,
  Zap,
  Network,
  Cloud,
  Plug,
  Server,
  FileCode,
  Palette,
  Code,
  Box,
  Smartphone,
  Columns,
  LayoutGrid,
  Sliders,
  Table,
  GitBranch,
  Github,
  Moon,
  Terminal,
  Send,
  Layers,
  Boxes,
  RefreshCw
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Grid,
  Coffee,
  Layout,
  Database,
  Wrench,
  Brain,
  Zap,
  Network,
  Cloud,
  Plug,
  Server,
  FileCode,
  Palette,
  Code,
  Box,
  Smartphone,
  Columns,
  LayoutGrid,
  Sliders,
  Table,
  GitBranch,
  Github,
  Moon,
  Terminal,
  Send,
  Layers,
  Boxes,
  RefreshCw
};

const Skills = () => {
  const { skillCategories, skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="section-padding bg-alt-surface" id="skills">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center mx-auto mb-5">
          <span className="section-tag">
            <Laptop size={14} className="me-1" /> Technical Stack
          </span>
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="section-subtitle">
            Comprehensive overview of technologies, frameworks, databases, and engineering concepts
          </p>
        </div>

        {/* Skill Filter Category Tabs */}
        <div className="skill-filter-tabs" role="tablist">
          {skillCategories.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Grid;
            const isActive = activeCategory === cat.id;
            const count = cat.id === 'all' 
              ? skills.length 
              : skills.filter(s => s.category === cat.id).length;

            return (
              <button
                key={cat.id}
                className={`skill-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
              >
                <IconComponent size={16} className="tab-icon" />
                <span>{cat.label}</span>
                <span className="tab-count-badge">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <div 
                key={`${skill.name}-${index}`} 
                className="skill-card-wrapper"
                style={{ animationDelay: `${(index % 8) * 0.05}s` }}
              >
                <div className="glass-card skill-card">
                  <div className="skill-icon-header">
                    <div className={`skill-icon bg-${skill.accent}-subtle text-${skill.accent}`}>
                      <IconComponent size={22} />
                    </div>
                    <span className="category-badge">
                      {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
                    </span>
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                  <p className="skill-desc">{skill.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
