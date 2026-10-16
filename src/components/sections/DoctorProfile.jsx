import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import { CLINIC_INFO } from "../../data/servicesData";

export default function DoctorProfile({ onOpenBooking }) {
  const credentials = [
    "Bachelor of Dental Surgery (BDS)",
    "Fellowship in Medical Aesthetic Cosmetology",
    "Specialized in Orofacial Anatomy & Jawline Contouring",
    "Certified in Advanced Injectables (Botox & Dermal Fillers)",
    "Expert in Autologous Regenerative Therapies (PRP & GFC)"
  ];

  return (
    <section id="doctor" className="section doctor-section">
      <div className="container">
        <div className="doctor-card-container glass">
          <div className="doctor-grid">
            <motion.div
              className="doctor-image-wrapper"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="doctor-img-frame">
                <img
                  src="/images/cosmetology_contouring_1792117106240.jpg"
                  alt="Dr. Kaviya Consultation"
                  className="doctor-photo"
                />
                <div className="doctor-exp-badge">
                  <Award size={22} className="award-icon" />
                  <div>
                    <strong>Dr. Kaviya</strong>
                    <span>BDS | Facial Cosmetologist</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="doctor-info-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="badge-pill badge-gold">
                <Sparkles size={14} />
                <span>Meet Your Practitioner</span>
              </div>

              <h2 className="doctor-title">
                Dr. Kaviya
              </h2>
              <p className="doctor-designation">
                Dental Surgeon & Certified Clinical Aesthetic Cosmetologist
              </p>

              <blockquote className="doctor-quote">
                "A confident smile and glowing, youthful facial contours are deeply connected.
                By uniting dental anatomy with medical cosmetology, we don't just treat symptoms —
                we elevate your natural confidence and balance."
              </blockquote>

              <div className="doctor-creds-list">
                <h4>Clinical Mastery & Qualifications</h4>
                <div className="creds-items">
                  {credentials.map((cred, i) => (
                    <div key={i} className="cred-item">
                      <CheckCircle2 size={18} color="var(--primary)" className="cred-icon" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="doctor-action-row">
                <button onClick={onOpenBooking} className="btn btn-primary">
                  <span>Schedule Doctor Consultation</span>
                </button>
                <a
                  href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
                    "Hello Dr. Kaviya, I would like to book a direct consultation with you regarding my dental/skin concerns."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
