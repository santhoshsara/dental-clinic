import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  X,
  ChevronRight,
  Clock,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Star,
  Award
} from "lucide-react";
import { CLINIC_INFO } from "../../data/servicesData";

export default function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Treatments", href: "#services", badge: null },
    { label: "Synergy", href: "#synergy", badge: null },
    { label: "Meet Dr. Kaviya", href: "#doctor", badge: null },
    { label: "Results", href: "#transformations", badge: null },
    { label: "Reviews", href: "#reviews", badge: "5.0 ★" },
    { label: "FAQ", href: "#faq", badge: null }
  ];

  const drawerLinks = [
    {
      label: "Advanced Dentistry",
      href: "#services",
      icon: "🦷",
      desc: "Aligners, Implants & Painless RCT"
    },
    {
      label: "Medical Cosmetology",
      href: "#services",
      icon: "✨",
      desc: "Hydrafacial, Botox, Fillers & GFC"
    },
    {
      label: "Dual Specialty Synergy",
      href: "#synergy",
      icon: "💎",
      desc: "Dentistry + Facial Harmony"
    },
    {
      label: "Meet Dr. Kaviya",
      href: "#doctor",
      icon: "👩‍⚕️",
      desc: "BDS | Certified Facial Aesthetician"
    },
    {
      label: "Results & Transformations",
      href: "#transformations",
      icon: "🪞",
      desc: "Interactive Before & After Slider"
    },
    {
      label: "Patient Reviews",
      href: "#reviews",
      icon: "⭐",
      desc: "5.0 Rated Across 120+ Patients"
    },
    {
      label: "Frequently Asked Questions",
      href: "#faq",
      icon: "💬",
      desc: "Common Patient Queries & Care"
    }
  ];

  return (
    <>
      <header className={`luxury-master-header ${scrolled ? "scrolled" : ""}`}>
        {/* Prestige Top Micro-Ribbon (Desktop only) */}
        <div className="prestige-top-ribbon">
          <div className="ribbon-inner-container">
            <div className="ribbon-left-items">
              <a
                href={CLINIC_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ribbon-item ribbon-location-link"
                title="View Clinic Location on Google Maps"
              >
                <MapPin size={12} className="ribbon-gold-icon" />
                <span>Keelkattalai, Chennai (Near Medavakkam)</span>
              </a>
              <span className="ribbon-separator">✦</span>
              <span className="ribbon-item">
                <Clock size={12} className="ribbon-gold-icon" />
                <span>Mon – Sat: 8:00 AM – 8:00 PM</span>
              </span>
            </div>

            <div className="ribbon-right-items">
              <span className="ribbon-rating-tag">
                <Star size={11} fill="#F59E0B" color="#F59E0B" />
                <span>5.0 Google Rating</span>
              </span>
              <span className="ribbon-separator">✦</span>
              <a href={`tel:${CLINIC_INFO.phone}`} className="ribbon-phone-link">
                <Phone size={11} className="ribbon-gold-icon" />
                <span>+91 91763 32262</span>
              </a>
              <span className="ribbon-separator">✦</span>
              <a
                href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
                  "Hello Dr. Kaviya, I would like to enquire about treatments at K Smile."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ribbon-whatsapp-link"
              >
                <span className="live-dot" />
                <span>WhatsApp Dr. Kaviya</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Sticky Luxury Glass Navigation Bar */}
        <nav className="luxury-main-nav">
          <div className="nav-inner-container">
            {/* Royal Crest Monogram & Brand Lockup */}
            <a href="#" className="royal-brand-lockup" onClick={() => setIsOpen(false)}>
              <div className="royal-crest-seal">
                <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Decorative beaded outer ring */}
                  <circle cx="24" cy="24" r="22.5" stroke="url(#luxeGold)" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
                  {/* Main gold border ring */}
                  <circle cx="24" cy="24" r="19.5" stroke="url(#luxeGold)" strokeWidth="1.8" />
                  {/* Subtle inner ambient ring */}
                  <circle cx="24" cy="24" r="17" stroke="url(#luxeGold)" strokeWidth="0.8" opacity="0.35" />
                  
                  {/* Majestic Interlocking K Logo Mark */}
                  <path
                    d="M18.5 13.5V34.5M18.5 24L28.5 13.5M22.5 20.5L30 34.5"
                    stroke="url(#luxeGold)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Luxury 4-Point Star Burst */}
                  <path
                    d="M33.5 11L34.3 13.5L36.8 14.3L34.3 15.1L33.5 17.6L32.7 15.1L30.2 14.3L32.7 13.5L33.5 11Z"
                    fill="url(#luxeGold)"
                  />
                  
                  {/* Gradients */}
                  <defs>
                    <linearGradient id="luxeGold" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FDE68A" />
                      <stop offset="0.3" stopColor="#F59E0B" />
                      <stop offset="0.7" stopColor="#D4AF37" />
                      <stop offset="1" stopColor="#92400E" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="royal-brand-text">
                <span className="brand-dr-title">DR. KAVIYA'S</span>
                <span className="brand-clinic-title">K Smile</span>
                <span className="brand-specialty-title">DENTISTRY & COSMETOLOGY</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="desktop-nav-cluster">
              <div className="nav-links-row">
                {navLinks.map((item, idx) => (
                  <a key={idx} href={item.href} className="nav-anchor-link">
                    <span>{item.label}</span>
                    {item.badge && <span className="nav-anchor-badge">{item.badge}</span>}
                  </a>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="nav-cta-cluster">
                <button
                  onClick={() => onOpenBooking()}
                  className="nav-primary-booking-btn"
                >
                  <Calendar size={15} />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>

            {/* Mobile Header Right Controls */}
            <div className="mobile-header-controls">
              <button
                onClick={() => onOpenBooking()}
                className="mobile-quick-book-btn"
                aria-label="Book Appointment"
              >
                <Calendar size={14} />
                <span>Book</span>
              </button>

              <button
                className={`mobile-luxe-hamburger ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? (
                  <X size={22} color="var(--primary-dark)" />
                ) : (
                  <div className="hamburger-bars">
                    <span className="bar-line top" />
                    <span className="bar-line middle" />
                    <span className="bar-line bottom" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Ultra-Luxury Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="mobile-drawer-portal">
            <motion.div
              className="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="mobile-drawer-sheet"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
            >
              {/* Drawer Top Header */}
              <div className="drawer-top-bar">
                <div className="drawer-brand-identity">
                  <div className="drawer-crest-icon">
                    <Sparkles size={18} color="#D4AF37" />
                  </div>
                  <div className="drawer-brand-copy">
                    <strong className="drawer-brand-name">Dr. Kaviya's K Smile</strong>
                    <span className="drawer-brand-sub">Dentistry & Medical Cosmetology</span>
                  </div>
                </div>

                <button
                  className="drawer-dismiss-btn"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Verified Trust Strip */}
              <div className="drawer-trust-pill">
                <Award size={14} color="#D4AF37" />
                <span>Doctor-Led Dental & Aesthetic Excellence</span>
              </div>

              {/* Navigation Links */}
              <div className="drawer-scrollable-links">
                {drawerLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="drawer-nav-card"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <div className="drawer-card-icon">{item.icon}</div>
                    <div className="drawer-card-info">
                      <span className="drawer-card-label">{item.label}</span>
                      <small className="drawer-card-desc">{item.desc}</small>
                    </div>
                    <ChevronRight size={18} className="drawer-card-arrow" />
                  </motion.a>
                ))}
              </div>

              {/* Drawer Footer Actions */}
              <div className="drawer-bottom-card">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="drawer-primary-cta"
                >
                  <Calendar size={18} />
                  <span>Book Consultation Online</span>
                </button>

                <div className="drawer-direct-contact-row">
                  <a
                    href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
                      "Hello Dr. Kaviya, I would like to book a consultation at K Smile Dentistry & Cosmetology."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="drawer-contact-pill whatsapp-style"
                  >
                    <MessageSquare size={16} />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="drawer-contact-pill call-style"
                  >
                    <Phone size={16} />
                    <span>Call Clinic</span>
                  </a>
                </div>

                <div className="drawer-meta-info">
                  <div className="drawer-meta-item">
                    <Clock size={13} className="drawer-meta-icon" />
                    <span>Mon – Sat: 8:00 AM – 8:00 PM</span>
                  </div>
                  <a
                    href={CLINIC_INFO.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="drawer-meta-item drawer-meta-link"
                    title="Open Clinic Location on Google Maps"
                  >
                    <MapPin size={13} className="drawer-meta-icon" />
                    <span>Keelkattalai, Chennai (Google Maps ↗)</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
