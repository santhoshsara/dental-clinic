import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, ArrowRight, RotateCcw, Calendar, MessageSquare, ShieldCheck } from "lucide-react";
import { CONSULTATION_QUESTIONS, SERVICES_LIST, CLINIC_INFO } from "../../data/servicesData";

export default function TreatmentFinder({ onSelectService, onOpenBooking }) {
  const [step, setStep] = useState(1);
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);
  const [selectedConcern, setSelectedConcern] = useState(null);

  const disciplineQ = CONSULTATION_QUESTIONS[0];
  const concernQ = CONSULTATION_QUESTIONS[1];

  const handleSelectDiscipline = (id) => {
    setSelectedDiscipline(id);
    setSelectedConcern(null);
    setStep(2);
  };

  const handleSelectConcern = (concernObj) => {
    setSelectedConcern(concernObj);
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedDiscipline(null);
    setSelectedConcern(null);
  };

  const recommendedService = selectedConcern
    ? SERVICES_LIST.find((s) => s.id === selectedConcern.recommended)
    : null;

  const altService = selectedConcern && selectedConcern.alt
    ? SERVICES_LIST.find((s) => s.id === selectedConcern.alt)
    : null;

  return (
    <section id="treatment-finder" className="section finder-section">
      <div className="container">
        <div className="finder-header">
          <div className="badge-pill badge-gold">
            <Sparkles size={14} />
            <span>Interactive Consultation Advisor</span>
          </div>
          <h2 className="section-title">Find Your Tailored Treatment</h2>
          <p className="section-subtitle">
            Not sure what your skin, hair, or smile requires? Answer 2 simple questions to
            receive Dr. Kaviya's clinical recommendation.
          </p>
        </div>

        <div className="finder-card-wrapper glass">
          {/* Progress bar */}
          <div className="finder-progress-track">
            <div
              className="finder-progress-fill"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          <div className="finder-step-indicator">
            <span className={step >= 1 ? "active" : ""}>1. Treatment Focus</span>
            <span className={step >= 2 ? "active" : ""}>2. Main Concern</span>
            <span className={step >= 3 ? "active" : ""}>3. Your Custom Protocol</span>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="finder-step-content"
              >
                <h3 className="finder-question-title">{disciplineQ.title}</h3>
                <p className="finder-question-subtitle">{disciplineQ.subtitle}</p>

                <div className="finder-options-grid">
                  {disciplineQ.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectDiscipline(opt.id)}
                      className="finder-option-btn glass"
                    >
                      <div className="option-icon-box">{opt.icon}</div>
                      <div className="option-text-box">
                        <strong>{opt.label}</strong>
                        <span>{opt.desc}</span>
                      </div>
                      <ArrowRight size={18} className="option-arrow" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && selectedDiscipline && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="finder-step-content"
              >
                <div className="step-back-row">
                  <button className="back-link-btn" onClick={() => setStep(1)}>
                    ← Back to category
                  </button>
                </div>
                <h3 className="finder-question-title">{concernQ.title}</h3>
                <p className="finder-question-subtitle">{concernQ.subtitle}</p>

                <div className="finder-options-grid">
                  {concernQ.optionsMap[selectedDiscipline]?.map((concern) => (
                    <button
                      key={concern.id}
                      onClick={() => handleSelectConcern(concern)}
                      className="finder-option-btn glass"
                    >
                      <div className="option-check-circle">
                        <Check size={16} color="var(--primary)" />
                      </div>
                      <div className="option-text-box">
                        <strong>{concern.label}</strong>
                        <span>Tap to generate clinical protocol</span>
                      </div>
                      <ArrowRight size={18} className="option-arrow" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && recommendedService && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="finder-step-content result-step"
              >
                <div className="result-top-badge">
                  <ShieldCheck size={18} color="var(--primary)" />
                  <span>Dr. Kaviya's Recommended Clinical Protocol</span>
                </div>

                <div className="result-match-container">
                  <div className="result-img-side">
                    <img
                      src={recommendedService.image}
                      alt={recommendedService.title}
                      className="result-main-image"
                    />
                    <div className="result-floating-badge">
                      <span className="badge-pill badge-gold">
                        {recommendedService.badge}
                      </span>
                    </div>
                  </div>

                  <div className="result-info-side">
                    <span className="result-category-label">Primary Recommendation</span>
                    <h3 className="result-service-title">{recommendedService.title}</h3>
                    <p className="result-tagline">{recommendedService.tagline}</p>
                    <p className="result-desc">{recommendedService.description}</p>

                    <div className="result-benefits-list">
                      <strong>Key Clinical Advantages:</strong>
                      <ul>
                        {recommendedService.benefits.map((b, i) => (
                          <li key={i}>
                            <Check size={15} color="var(--primary)" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="result-meta-row">
                      <div className="meta-pill-item">
                        <span>Duration:</span>
                        <strong>{recommendedService.time}</strong>
                      </div>
                      <div className="meta-pill-item">
                        <span>Downtime:</span>
                        <strong>{recommendedService.downtime}</strong>
                      </div>
                      <div className="meta-pill-item">
                        <span>Results:</span>
                        <strong>{recommendedService.results}</strong>
                      </div>
                    </div>

                    <div className="result-cta-buttons">
                      <a
                        href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
                          `Hello Dr. Kaviya, I took the treatment finder quiz for ${selectedConcern?.label} and was recommended ${recommendedService.title}. I would like to schedule a consultation.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                      >
                        <MessageSquare size={18} />
                        <span>Book on WhatsApp</span>
                      </a>

                      <button
                        onClick={() => onSelectService(recommendedService)}
                        className="btn btn-secondary"
                      >
                        <span>Full Treatment Details</span>
                      </button>

                      <button onClick={handleReset} className="btn-reset-quiz">
                        <RotateCcw size={15} />
                        <span>Retake Advisor</span>
                      </button>
                    </div>
                  </div>
                </div>

                {altService && (
                  <div className="alt-treatment-banner glass">
                    <div className="alt-banner-text">
                      <span className="alt-badge">Complementary Synergy</span>
                      <h4>Also Consider: {altService.title}</h4>
                      <p>{altService.tagline}</p>
                    </div>
                    <button
                      onClick={() => onSelectService(altService)}
                      className="btn btn-secondary btn-sm"
                    >
                      View Complementary Option
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
