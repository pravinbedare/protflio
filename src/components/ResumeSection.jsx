import React from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ResumeSection = ({ onOpenResumeModal, onShowToast }) => {
  const { personal } = portfolioData;

  const handleDownload = () => {
    if (onShowToast) {
      onShowToast('Downloading Pravin Bedare Resume (PDF)...');
    }
  };

  return (
    <section className="section-padding bg-alt-surface" id="resume">
      <div className="container">
        
        <div className="glass-card resume-banner-card">
          <div className="resume-banner-grid">
            
            {/* Left Col: Details & CTAs */}
            <div className="resume-info-col">
              <div className="badge-pill-cyan mb-3">
                <FileText size={15} />
                <span>ATS-Compliant PDF Resume</span>
              </div>

              <h2 className="resume-main-heading">
                Download My <span className="text-gradient">Resume</span>
              </h2>

              <p className="resume-desc">
                Interested in working together? Download my resume to learn more about my skills, education, and projects. Ready to join immediately for Java Developer &amp; Java Full Stack Fresher positions.
              </p>

              <div className="resume-cta-group">
                <a
                  href={personal.resumePdf}
                  download="Pravin_Bedare_Resume.pdf"
                  className="btn-primary-gradient btn-lg"
                  id="resume-section-btn-download"
                  onClick={handleDownload}
                >
                  <Download size={18} />
                  <span>Download Resume (PDF)</span>
                </a>

                <button
                  type="button"
                  className="btn-glass-outline btn-lg"
                  onClick={onOpenResumeModal}
                  id="resume-section-btn-preview"
                >
                  <Eye size={18} />
                  <span>View In-Browser</span>
                </button>
              </div>
            </div>

            {/* Right Col: Mini Realistic ATS Paper Card Preview */}
            <div className="resume-preview-col">
              <div className="glass-card resume-card-preview">
                <div className="preview-header">
                  <span className="preview-title">
                    <CheckCircle2 size={14} className="text-success me-1 inline-icon" /> Pravin Bedare Resume
                  </span>
                  <span className="preview-badge">PDF 1-Page</span>
                </div>

                <div className="preview-mini-content">
                  <div className="preview-name">{personal.name.toUpperCase()}</div>
                  <div className="preview-role">{personal.title}</div>
                  <div className="preview-bullet">&bull; Java, Spring Boot, MySQL, REST</div>
                  <div className="preview-bullet">&bull; Naukari.com Job Portal Clone</div>
                  <div className="preview-bullet">&bull; BCS Graduating Batch 2026</div>
                </div>

                <div className="preview-footer">
                  <ShieldCheck size={14} className="text-success me-1" />
                  <span>Verified Single Source of Truth</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
