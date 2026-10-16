import React from 'react';
import { Sparkles, Shield, Heart, Baby } from 'lucide-react';
import './ServicesSection.css';

const servicesList = [
  {
    id: 1,
    title: 'Root Canal Treatment',
    description: 'Painless and precise root canal procedures to save your natural teeth and relieve discomfort instantly.',
    icon: <Shield size={32} />,
    color: 'cyan'
  },
  {
    id: 2,
    title: 'Cosmetic Dentistry',
    description: 'Veneers, teeth whitening, and complete smile makeovers to enhance your facial aesthetics.',
    icon: <Sparkles size={32} />,
    color: 'rose'
  },
  {
    id: 3,
    title: 'Invisalign & Braces',
    description: 'Straighten your teeth invisibly with custom clear aligners for a perfect, confident smile.',
    icon: <Heart size={32} />,
    color: 'cyan'
  },
  {
    id: 4,
    title: 'Pediatric Dentistry',
    description: 'Gentle, caring, and fun dental experiences designed specifically for children and toddlers.',
    icon: <Baby size={32} />,
    color: 'rose'
  }
];

const ServicesSection = () => {
  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our <span className="text-gradient-cyan">Expertise</span></h2>
          <p className="section-subtitle">Comprehensive dental and cosmetology solutions tailored to your unique needs.</p>
        </div>
        
        <div className="services-grid">
          {servicesList.map((service) => (
            <div key={service.id} className="service-card glass-card">
              <div className={`service-icon-wrap icon-${service.color}`}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
