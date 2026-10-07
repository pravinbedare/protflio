import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Share2, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  User, 
  Tag, 
  MessageSquare, 
  Loader2, 
  ShieldCheck, 
  Info 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

const Contact = ({ onShowToast }) => {
  const { personal } = portfolioData;

  const [copiedKey, setCopiedKey] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      if (onShowToast) {
        onShowToast(`Copied "${text}" to clipboard!`);
      }
      setTimeout(() => setCopiedKey(null), 2000);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a message subject.';
    if (!formData.message.trim()) newErrors.message = 'Please write your message.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      // Confetti burst on successful submit
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // Safe fallback if canvas not available
      }

      const mailtoUri = `mailto:${personal.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      setIsSubmitting(false);
      if (onShowToast) {
        onShowToast(`Thank you ${formData.name}! Opening mail client...`);
      }

      window.location.href = mailtoUri;

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    }, 800);
  };

  return (
    <section className="section-padding" id="contact">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center mx-auto mb-5">
          <span className="section-tag">
            <Send size={14} className="me-1" /> Get In Touch
          </span>
          <h2 className="section-title">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="section-subtitle">
            Have an opportunity, question, or want to discuss full-stack development? Send a message!
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left: Direct Contact Information Cards */}
          <div className="contact-info-col">
            <div className="contact-cards-stack">
              
              {/* Email Card */}
              <div className="glass-card contact-info-card">
                <div className="contact-card-inner">
                  <div className="contact-icon bg-primary-subtle text-primary">
                    <Mail size={20} />
                  </div>
                  <div className="contact-card-text">
                    <span className="contact-card-label">Email Address</span>
                    <div className="contact-card-val">
                      <a href={`mailto:${personal.email}`}>{personal.email}</a>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="copy-btn btn-glass-outline btn-sm"
                    onClick={() => handleCopy(personal.email, 'email')}
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedKey === 'email' ? (
                      <Check size={16} className="text-success" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="glass-card contact-info-card">
                <div className="contact-card-inner">
                  <div className="contact-icon bg-success-subtle text-success">
                    <Phone size={20} />
                  </div>
                  <div className="contact-card-text">
                    <span className="contact-card-label">Phone / Mobile</span>
                    <div className="contact-card-val">
                      <a href={`tel:${personal.phoneRaw}`}>{personal.phone}</a>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="copy-btn btn-glass-outline btn-sm"
                    onClick={() => handleCopy(personal.phone, 'phone')}
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedKey === 'phone' ? (
                      <Check size={16} className="text-success" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="glass-card contact-info-card">
                <div className="contact-card-inner">
                  <div className="contact-icon bg-danger-subtle text-danger">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-card-text">
                    <span className="contact-card-label">Location</span>
                    <div className="contact-card-val-plain">{personal.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Profiles Card */}
              <div className="glass-card contact-info-card">
                <div className="contact-card-inner">
                  <div className="contact-icon bg-info-subtle text-info">
                    <Share2 size={20} />
                  </div>
                  <div className="contact-card-text">
                    <span className="contact-card-label">Professional Profiles</span>
                    <div className="contact-social-buttons mt-1">
                      <a
                        href={personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glass-outline btn-sm"
                      >
                        <Github size={14} className="me-1" /> GitHub
                      </a>
                      <a
                        href={personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glass-outline btn-sm"
                      >
                        <Linkedin size={14} className="me-1" /> LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Recruiter Contact Form */}
          <div className="contact-form-col">
            <div className="glass-card contact-form-card">
              <div className="form-header-row mb-4">
                <h3 className="form-heading">
                  Send a <span className="text-gradient">Message</span>
                </h3>
                <span className="form-badge">
                  <ShieldCheck size={14} className="text-info me-1" /> Direct Contact
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                
                {/* Name */}
                <div className="form-group mb-3">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name <span className="text-danger">*</span>
                  </label>
                  <div className="input-group-custom">
                    <span className="input-icon">
                      <User size={18} />
                    </span>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`custom-input ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="e.g. Rahul Sharma / Tech Recruiter"
                      required
                    />
                  </div>
                  {errors.name && <div className="error-text">{errors.name}</div>}
                </div>

                {/* Email */}
                <div className="form-group mb-3">
                  <label htmlFor="contact-email" className="form-label">
                    Your Email <span className="text-danger">*</span>
                  </label>
                  <div className="input-group-custom">
                    <span className="input-icon">
                      <Mail size={18} />
                    </span>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`custom-input ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  {errors.email && <div className="error-text">{errors.email}</div>}
                </div>

                {/* Subject */}
                <div className="form-group mb-3">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject <span className="text-danger">*</span>
                  </label>
                  <div className="input-group-custom">
                    <span className="input-icon">
                      <Tag size={18} />
                    </span>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`custom-input ${errors.subject ? 'is-invalid' : ''}`}
                      placeholder="e.g. Job Opportunity: Java Full Stack Developer Fresher"
                      required
                    />
                  </div>
                  {errors.subject && <div className="error-text">{errors.subject}</div>}
                </div>

                {/* Message */}
                <div className="form-group mb-4">
                  <label htmlFor="contact-message" className="form-label">
                    Message <span className="text-danger">*</span>
                  </label>
                  <div className="input-group-custom textarea-group">
                    <span className="input-icon textarea-icon">
                      <MessageSquare size={18} />
                    </span>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`custom-input ${errors.message ? 'is-invalid' : ''}`}
                      placeholder="Write your message or job description details here..."
                      required
                    ></textarea>
                  </div>
                  {errors.message && <div className="error-text">{errors.message}</div>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-gradient w-100 justify-content-center btn-lg"
                  id="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="spinner-icon animate-spin" />
                      <span>Preparing Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <div className="form-footer-note text-center mt-3">
                  <small className="text-muted">
                    <Info size={13} className="me-1 inline-icon" /> Form initiates mail client or direct notification. No spam guaranteed.
                  </small>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
