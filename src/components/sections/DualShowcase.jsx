import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Smile, CheckCircle, ArrowRight } from "lucide-react";

export default function DualShowcase({ onOpenBooking }) {
  const pillars = [
    {
      category: "Maxillofacial Precision",
      title: "Anatomical Facial Mastery",
      description: "As a dental surgeon and certified cosmetologist, Dr. Kaviya understands the complex nerve networks, facial bone structure, and muscle dynamics deeper than ordinary spas.",
      icon: "💎"
    },
    {
      category: "Perioral Harmony",
      title: "Smile & Lip Architecture",
      description: "Aligning teeth without addressing lip volume and chin balance leaves results half-done. We create a complete harmony between your dental arch, smile line, and jaw definition.",
      icon: "✨"
    },
    {
      category: "Cellular Bio-Regeneration",
      title: "Clinical Medical Safety",
      description: "From autologous GFC/PRP hair and face therapies to FDA-approved medical fillers, every procedure follows hospital-grade sterilization and doctor-only administration.",
      icon: "🛡️"
    }
  ];

  return (
    <section id="synergy" className="section dual-showcase-section">
      <div className="container">
        <div className="synergy-header">
          <div className="badge-pill badge-gold">
            <Sparkles size={14} />
            <span>The Power of Dual Expertise</span>
          </div>
          <h2 className="section-title">Where Dental Science Meets Facial Artistry</h2>
          <p className="section-subtitle">
            True beauty is facial harmony. Dr. Kaviya addresses both the dental framework
            and the dermal aesthetic canvas under one premier roof.
          </p>
        </div>

        <div className="synergy-split-grid">
          {/* Left: Dentistry Column */}
          <motion.div
            className="synergy-card dental-card glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="synergy-card-badge dental-badge">
              <span>🦷 Advanced Dentistry</span>
            </div>
            <h3>Structural Smile Framework</h3>
            <p className="synergy-card-p">
              Rebuilding functional health, flawless tooth alignment, and pain-free bite balance.
            </p>
            <ul className="synergy-features-list">
              <li>
                <CheckCircle size={18} color="var(--primary)" />
                <span>Painless rotary root canals saving natural teeth</span>
              </li>
              <li>
                <CheckCircle size={18} color="var(--primary)" />
                <span>Invisible clear aligners for computer-mapped teeth alignment</span>
              </li>
              <li>
                <CheckCircle size={18} color="var(--primary)" />
                <span>Permanent lifetime titanium dental implants</span>
              </li>
              <li>
                <CheckCircle size={18} color="var(--primary)" />
                <span>Mercury-free invisible tooth-colored composite restorations</span>
              </li>
            </ul>
            <div className="synergy-img-box">
              <img
                src="/images/dental_aligners_1791040893689.jpg"
                alt="Modern Dentistry"
                className="synergy-sub-img"
              />
            </div>
          </motion.div>

          {/* Right: Cosmetology Column */}
          <motion.div
            className="synergy-card cosmetology-card glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="synergy-card-badge cosmo-badge">
              <span>✨ Aesthetic Cosmetology</span>
            </div>
            <h3>Dermal Radiance & Facial Sculpting</h3>
            <p className="synergy-card-p">
              Illuminating skin health, refining contours, reversing aging, and restoring hair density.
            </p>
            <ul className="synergy-features-list">
              <li>
                <CheckCircle size={18} color="#BE185D" />
                <span>Medical Hydrafacials, chemical peels & IV Glutathione</span>
              </li>
              <li>
                <CheckCircle size={18} color="#BE185D" />
                <span>Botox for masseter face slimming & dynamic wrinkle smoothing</span>
              </li>
              <li>
                <CheckCircle size={18} color="#BE185D" />
                <span>Jawline contouring, double chin fat dissolving & PDO threads</span>
              </li>
              <li>
                <CheckCircle size={18} color="#BE185D" />
                <span>GFC, PRP & stem cell therapies for face revival & hair regrowth</span>
              </li>
            </ul>
            <div className="synergy-img-box">
              <img
                src="/images/cosmetology_contouring_1792117106240.jpg"
                alt="Advanced Cosmetology"
                className="synergy-sub-img"
              />
            </div>
          </motion.div>
        </div>

        {/* 3 Value Pillars */}
        <div className="synergy-pillars-row">
          {pillars.map((pill, idx) => (
            <div key={idx} className="pillar-item glass">
              <div className="pillar-icon">{pill.icon}</div>
              <span className="pillar-category">{pill.category}</span>
              <h4>{pill.title}</h4>
              <p>{pill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
