import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Phone, FileText, MessageSquare, PhoneCall } from "lucide-react";
import { CLINIC_INFO, SERVICES_LIST } from "../../data/servicesData";

export default function AppointmentModal({ isOpen, onClose, initialService }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedServiceId, setSelectedServiceId] = useState(
    initialService ? initialService.id : "hydrafacial"
  );
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredSlot, setPreferredSlot] = useState("Morning (10:00 AM - 1:00 PM)");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (initialService) {
      setSelectedServiceId(initialService.id);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentSelectedService = SERVICES_LIST.find((s) => s.id === selectedServiceId);

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();

    const serviceTitle = currentSelectedService ? currentSelectedService.title : "General Consultation";
    const message = `Hello Dr. Kaviya, I would like to book an appointment at K Smile Dentistry & Cosmetology:

• Patient Name: ${name || "Not specified"}
• Phone: ${phone || "Not specified"}
• Procedure: ${serviceTitle}
• Preferred Date: ${preferredDate || "Earliest available"}
• Preferred Slot: ${preferredSlot}
${notes ? `• Notes: ${notes}` : ""}

Please confirm my appointment slot. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodedMessage}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-card appointment-modal"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close-btn" onClick={onClose} aria-label="Close booking modal">
            <X size={22} />
          </button>

          <div className="appointment-modal-header">
            <span className="badge-pill badge-gold">Quick Appointment</span>
            <h2>Book Your Consultation</h2>
            <p>
              Direct consultation with Dr. Kaviya at our Keelkattalai clinic.
            </p>
          </div>

          <form onSubmit={handleSubmitWhatsApp} className="appointment-form">
            <div className="form-group">
              <label>Select Treatment / Specialization</label>
              <div className="input-wrap">
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="form-select"
                >
                  <optgroup label="🦷 Advanced Dentistry">
                    <option value="clear-aligners">Invisible Clear Aligners</option>
                    <option value="dental-implants">Precision Dental Implants</option>
                    <option value="root-canal">Painless Root Canal Therapy</option>
                    <option value="composite-fillings">Aesthetic Composite Fillings</option>
                  </optgroup>
                  <optgroup label="✨ Skin & Cosmetology">
                    <option value="hydrafacial">Medical Hydrafacial</option>
                    <option value="chemical-peel">Clinical Chemical Peel</option>
                    <option value="iv-glutathione">IV Glutathione Glow</option>
                    <option value="microneedling">Microneedling Collagen Induction</option>
                    <option value="mesotherapy">Mesotherapy Skin Infusion</option>
                    <option value="face-prp">Facial PRP Vampire Rejuvenation</option>
                  </optgroup>
                  <optgroup label="💎 Facial Sculpting & Anti-Aging">
                    <option value="jawline-shaping">Jawline Shaping & Facial Contouring</option>
                    <option value="botox">Botox (Face Slimming & Wrinkles)</option>
                    <option value="fillers">Hyaluronic Dermal Fillers</option>
                    <option value="fat-reduction">Skin Fat Cell Decreasing (Double Chin)</option>
                    <option value="pdo-threads">PDO Threads Skin Tightening</option>
                  </optgroup>
                  <optgroup label="🌿 Hair Restoration (Trichology)">
                    <option value="gfc-hair">Hair Growth & Strengthening (GFC, PRP & Stem Cell)</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label>Your Full Name *</label>
                <div className="input-wrap">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Phone / WhatsApp Number *</label>
                <div className="input-wrap">
                  <Phone size={18} className="input-icon" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label>Preferred Date</label>
                <div className="input-wrap">
                  <Calendar size={18} className="input-icon" />
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Preferred Time Slot</label>
                <div className="input-wrap">
                  <Clock size={18} className="input-icon" />
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="form-select"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Specific Concern or Question (Optional)</label>
              <div className="input-wrap">
                <FileText size={18} className="input-icon textarea-icon" />
                <textarea
                  placeholder="Describe any skin, hair, or tooth issue you want Dr. Kaviya to evaluate..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="form-textarea"
                  rows={2}
                />
              </div>
            </div>

            <div className="appointment-form-actions">
              <button type="submit" className="btn btn-whatsapp form-btn-submit">
                <MessageSquare size={18} />
                <span>Confirm & Send on WhatsApp</span>
              </button>

              <a href={`tel:${CLINIC_INFO.phone}`} className="btn btn-secondary form-btn-call">
                <PhoneCall size={18} />
                <span>Call Clinic Directly</span>
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
