import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Activity, Sparkles, Check, MessageSquare, ShieldCheck, Calendar } from "lucide-react";
import { CLINIC_INFO } from "../../data/servicesData";

export default function ServiceDetailModal({ service, onClose, onOpenBooking }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-card service-detail-modal"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={22} />
          </button>

          <div className="modal-hero-img-wrap">
            <img src={service.image} alt={service.title} className="modal-hero-img" />
            <div className="modal-floating-tag">
              <span className="badge-pill badge-gold">{service.badge}</span>
            </div>
          </div>

          <div className="modal-content-body">
            <div className="modal-meta-bar">
              <div className="modal-meta-item">
                <Clock size={15} color="var(--primary)" />
                <span>Time: <strong>{service.time}</strong></span>
              </div>
              <div className="modal-meta-item">
                <Activity size={15} color="var(--primary)" />
                <span>Downtime: <strong>{service.downtime}</strong></span>
              </div>
              <div className="modal-meta-item">
                <Sparkles size={15} color="var(--secondary)" />
                <span>Results: <strong>{service.results}</strong></span>
              </div>
            </div>

            <h2 className="modal-title">{service.title}</h2>
            <p className="modal-tagline">{service.tagline}</p>
            <p className="modal-description">{service.description}</p>

            <div className="modal-benefits-section">
              <h4>Clinical Benefits & Why Choose This Treatment</h4>
              <div className="benefits-grid">
                {service.benefits.map((b, i) => (
                  <div key={i} className="benefit-item">
                    <Check size={16} color="var(--primary)" className="benefit-check" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-concerns-box">
              <h4>Common Concerns Addressed</h4>
              <div className="concerns-tags">
                {service.concerns.map((c, i) => (
                  <span key={i} className="concern-tag">
                    #{c}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-doctor-safety-note glass">
              <ShieldCheck size={20} color="var(--primary)" className="safety-icon" />
              <div>
                <strong>Doctor-Administered Assurance</strong>
                <p>
                  At Dr. Kaviya's K Smile, every treatment is tailored following a thorough
                  dermatological or dental assessment to guarantee natural, safe results.
                </p>
              </div>
            </div>

            <div className="modal-actions-bar">
              <a
                href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
                  `Hello Dr. Kaviya, I am interested in booking a consultation for ${service.title} (${service.tagline}). Please let me know your available slots.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp modal-action-btn"
              >
                <MessageSquare size={18} />
                <span>Book via WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenBooking(service);
                }}
                className="btn btn-primary modal-action-btn"
              >
                <Calendar size={18} />
                <span>Schedule Appointment</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
