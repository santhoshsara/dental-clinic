import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Sparkles, Award, CheckCircle2, ChevronRight } from "lucide-react";

export default function WhyChooseUs({ onOpenBooking }) {
  const features = [
    {
      icon: <Sparkles size={24} color="#BE185D" />,
      title: "Doctor-Only Administration",
      desc: "Every cosmetology injection, chemical peel, and dental procedure is personally evaluated and performed by Dr. Kaviya, ensuring maximum safety and anatomical precision."
    },
    {
      icon: <HeartPulse size={24} color="var(--primary)" />,
      title: "Pain-Free & Gentle Protocol",
      desc: "We utilize topical anesthetic compounds, advanced rotary instruments, and ultra-fine micro-needles so your visits remain deeply relaxing and anxiety-free."
    },
    {
      icon: <ShieldCheck size={24} color="var(--secondary)" />,
      title: "Hospital-Grade Sterilization",
      desc: "Strict autoclaving, sealed disposable micro-cartridges, and medical-grade bio-sanitation for absolute peace of mind during both skin and dental sessions."
    },
    {
      icon: <Award size={24} color="#0284C7" />,
      title: "360° Facial Harmony",
      desc: "We don't isolate teeth from your facial aesthetics. We harmonize dental arches, lip projection, and jawline contouring for balanced, natural elegance."
    }
  ];

  return (
    <section className="section why-choose-section">
      <div className="container">
        <div className="why-choose-header">
          <div className="badge-pill badge-gold">
            <CheckCircle2 size={14} />
            <span>Uncompromising Excellence</span>
          </div>
          <h2 className="section-title">Why Patients Choose Dr. Kaviya's K Smile</h2>
          <p className="section-subtitle">
            Redefining clinic visits into a luxurious, reassuring experience with world-class clinical outcomes.
          </p>
        </div>

        <div className="why-choose-grid">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              className="why-card glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="why-icon-bubble">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Banner with interactive CTA */}
        <div className="why-cta-banner glass">
          <div className="why-cta-text">
            <h3>Ready to Experience the Transformation?</h3>
            <p>Schedule your personalized dental or cosmetology consultation with Dr. Kaviya today.</p>
          </div>
          <button onClick={onOpenBooking} className="btn btn-primary">
            <span>Book Consultation Now</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
