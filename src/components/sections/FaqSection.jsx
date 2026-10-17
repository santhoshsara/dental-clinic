import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageSquare, Phone, Sparkles } from "lucide-react";
import { CLINIC_INFO } from "../../data/servicesData";
import "./FaqSection.css";

const FAQ_ITEMS = [
  {
    question: "Where is Dr. Kaviya's K Smile clinic located?",
    answer: "Dr. Kaviya's K Smile Dentistry & Medical Cosmetology Clinic is located at 1/2, Velmurugan Colony Rd, behind Pantaloons, Arunachalam Nagar, Keelkattalai, Tambaram, Tamil Nadu 600117. We are conveniently situated with accessible parking for patients visiting from Keelkattalai, Tambaram, Madipakkam, Chromepet, and Velachery."
  },
  {
    question: "What combined dental and cosmetology services are available?",
    answer: "We provide complete dual-specialty treatments under one roof: Advanced Dentistry (Invisible Clear Aligners, Dental Implants, Painless Root Canals, Teeth Whitening, Pediatric Care) and Medical Cosmetology (Medical Hydrafacial, Chemical Peels, Botox & Masseter Jawline Slimming, Dermal Fillers, and GFC/PRP Hair Loss Therapy)."
  },
  {
    question: "Is Root Canal Treatment painful at K Smile?",
    answer: "No. Dr. Kaviya uses modern computer-controlled rotary endodontics, high-accuracy digital apex locators, and localized micro-anesthesia. This eliminates traditional discomfort, making procedures virtually pain-free and frequently completed in just a single sitting."
  },
  {
    question: "How do Invisible Clear Aligners work compared to braces?",
    answer: "Clear aligners are custom 3D-scanned, transparent thermoplastic trays that gently shift your teeth into ideal alignment. They are virtually invisible, comfortable without metal wires, and easily removable during meals and daily brushing. Typical smile corrections take between 6 to 12 months."
  },
  {
    question: "What is GFC Hair Therapy and how is it different from standard PRP?",
    answer: "Growth Factor Concentrate (GFC) is a next-generation regenerative procedure derived from your own blood platelets. Unlike conventional PRP, GFC is strictly cell-free and contains up to 3x higher concentration of active biological growth factors (VEGF, PDGF, EGF), delivering superior follicle stimulation with zero downtime."
  },
  {
    question: "How can I book a consultation with Dr. Kaviya?",
    answer: "You can book directly via the 'Book Consultation' button on this website, call our clinic reception at +91 7550148683, or chat directly with Dr. Kaviya on WhatsApp. We offer scheduled consultation slots to ensure you receive dedicated, unhurried care."
  }
];

export default function FaqSection({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="faq-header">
          <div className="badge-pill badge-gold">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about our dental and medical cosmetology treatments, appointments, and clinic protocols.
          </p>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                className={`faq-item ${isOpen ? "faq-open" : ""}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <div className="faq-question-text">
                    <span className="faq-num">Q{idx + 1}</span>
                    <span>{item.question}</span>
                  </div>
                  <div className="faq-icon-wrapper">
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="faq-answer-inner">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Direct Ask CTA Card */}
        <div className="faq-cta-banner glass">
          <div className="faq-cta-text">
            <h4>Have a specific question about your treatment?</h4>
            <p>Dr. Kaviya and our clinical team are available to guide you personally.</p>
          </div>
          <div className="faq-cta-actions">
            <a
              href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
                "Hello Dr. Kaviya, I have a question regarding treatments at K Smile Dentistry & Cosmetology."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <MessageSquare size={16} />
              <span>WhatsApp Inquiry</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="btn btn-gold btn-sm"
            >
              <Sparkles size={16} />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
