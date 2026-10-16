import React from "react";
import { Phone, MapPin, Clock, Sparkles, MessageSquare, ExternalLink } from "lucide-react";
import { CLINIC_INFO } from "../../data/servicesData";

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-content-wrap">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Bio */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="brand-icon-box">
                <Sparkles size={22} className="brand-sparkle" />
              </div>
              <div>
                <h3 className="footer-brand-title">{CLINIC_INFO.name}</h3>
                <span className="footer-brand-subtitle">{CLINIC_INFO.tagline}</span>
              </div>
            </div>
            <p className="footer-bio">
              Led by Dr. Kaviya, our clinic provides harmonious dual-specialty care
              combining high-tech dentistry and cutting-edge medical cosmetology.
              Transforming smiles and facial beauty with clinical excellence.
            </p>
            <div className="footer-wa-pill">
              <a
                href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=Hello%20Dr.%20Kaviya,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageSquare size={16} />
                <span>Chat with Dr. Kaviya on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Specialized Care</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Medical Hydrafacial & Peels</a></li>
              <li><a href="#services">Botox & Masseter Slimming</a></li>
              <li><a href="#services">Dermal Fillers & Lip Enhancement</a></li>
              <li><a href="#services">Jawline Shaping & Double Chin</a></li>
              <li><a href="#services">GFC & PRP Hair Growth Therapy</a></li>
              <li><a href="#services">Clear Aligners & Dental Implants</a></li>
              <li><a href="#services">Painless Root Canal Therapy</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Clinic Location</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-icon map-icon" />
              <span>{CLINIC_INFO.address}</span>
            </div>
            <a
              href={CLINIC_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-link"
            >
              <span>View Location on Google Maps</span>
              <ExternalLink size={14} />
            </a>

            <div className="footer-contact-item phone-item">
              <Phone size={18} className="footer-icon" />
              <a href={`tel:${CLINIC_INFO.phone}`} className="phone-link">
                {CLINIC_INFO.phone}
              </a>
            </div>
          </div>

          {/* Col 4: Timings */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Consultation Hours</h4>
            <div className="hours-block">
              {CLINIC_INFO.hours.map((h, i) => (
                <div key={i} className="hour-row">
                  <span className="days-label">{h.days}:</span>
                  <span className="time-val">{h.time}</span>
                </div>
              ))}
            </div>
            <div className="footer-appt-cta">
              <button onClick={onOpenBooking} className="btn btn-gold btn-sm w-full">
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name} ({CLINIC_INFO.tagline}). All Rights Reserved.</p>
          <p className="footer-subtext">Clinical Dentistry & Medical Cosmetology under Dr. Kaviya (BDS)</p>
        </div>
      </div>
    </footer>
  );
}
