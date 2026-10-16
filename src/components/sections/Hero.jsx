import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, ChevronRight, ShieldCheck, Star, Award, Heart } from "lucide-react";

export default function Hero({ onOpenBooking }) {
  return (
    <section className="hero-section">
      <div className="hero-backdrop">
        <img
          src="/images/cosmetology_dentistry_luxury_1792117200797.jpg"
          alt="Dr. Kaviya K Smile Dentistry and Cosmetology"
          className="hero-backdrop-img"
        />
        <div className="hero-gradient-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          <motion.div
            className="hero-text-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge-pill">
              <Sparkles size={16} className="badge-sparkle-icon" />
              <span>Advanced Dentistry & Medical Cosmetology</span>
            </div>

            <h1 className="hero-heading">
              Radiant Smiles. <br />
              <span className="gold-shimmer-text">Sculpted Elegance.</span>
            </h1>

            <p className="hero-description">
              Welcome to <strong>Dr. Kaviya's K Smile</strong> — where precision dental science
              harmonizes with state-of-the-art medical cosmetology. From painless root canals
              and invisible aligners to medical hydrafacials, Botox, fillers, and GFC hair restoration.
            </p>

            <div className="hero-cta-group">
              <button
                onClick={onOpenBooking}
                className="btn btn-primary hero-btn-main"
              >
                <Calendar size={18} />
                <span>Book Consultation</span>
              </button>
              <a href="#services" className="btn btn-secondary hero-btn-sub">
                <span>Explore Treatments</span>
                <ChevronRight size={18} />
              </a>
            </div>

            <div className="hero-trust-bar">
              <div className="trust-item">
                <div className="trust-icon-box">
                  <Star size={16} fill="#F59E0B" color="#F59E0B" />
                </div>
                <div>
                  <strong>5.0 Star Rated</strong>
                  <span>Verified Google Reviews</span>
                </div>
              </div>

              <div className="trust-divider" />

              <div className="trust-item">
                <div className="trust-icon-box">
                  <ShieldCheck size={16} color="var(--primary)" />
                </div>
                <div>
                  <strong>Painless Care</strong>
                  <span>Doctor-Led Protocols</span>
                </div>
              </div>

              <div className="trust-divider" />

              <div className="trust-item">
                <div className="trust-icon-box">
                  <Award size={16} color="var(--secondary)" />
                </div>
                <div>
                  <strong>Dual Expertise</strong>
                  <span>Dentistry + Aesthetics</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-cards-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="hero-main-card glass">
              <div className="hero-card-img-wrap">
                <img
                  src="/images/cosmetology_hydrafacial_1792117085722.jpg"
                  alt="Cosmetology & Dentistry at K Smile"
                  className="hero-card-img"
                />
                <div className="hero-card-overlay-badge">
                  <span>✨ Complete Facial Harmony</span>
                </div>
              </div>

              <div className="hero-floating-pills">
                <motion.div
                  className="floating-feature-tag tag-skin"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles size={16} color="#BE185D" />
                  <div>
                    <strong>Hydrafacial & Peels</strong>
                    <small>Vortex pore glow</small>
                  </div>
                </motion.div>

                <motion.div
                  className="floating-feature-tag tag-jaw"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Heart size={16} color="#0C4A6E" />
                  <div>
                    <strong>Jawline & Botox</strong>
                    <small>V-line facial slimming</small>
                  </div>
                </motion.div>

                <motion.div
                  className="floating-feature-tag tag-smile"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <ShieldCheck size={16} color="#C59B27" />
                  <div>
                    <strong>Aligners & Implants</strong>
                    <small>Lifelong healthy smile</small>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
