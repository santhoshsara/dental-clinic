import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import LuxuryMarquee from "./components/sections/LuxuryMarquee";
import DualShowcase from "./components/sections/DualShowcase";
import ServicesCatalog from "./components/sections/ServicesCatalog";
import BeforeAfterSlider from "./components/sections/BeforeAfterSlider";
import DoctorProfile from "./components/sections/DoctorProfile";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import ReviewsSection from "./components/sections/ReviewsSection";
import ServiceDetailModal from "./components/sections/ServiceDetailModal";
import AppointmentModal from "./components/sections/AppointmentModal";
import { MessageSquare, Phone, Calendar } from "lucide-react";
import { CLINIC_INFO } from "./data/servicesData";
import "./App.css";

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialService, setBookingInitialService] = useState(null);

  const handleOpenBooking = (service = null) => {
    setBookingInitialService(service);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingInitialService(null);
  };

  return (
    <div className="app-wrapper">
      {/* Top Luxury Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking(null)} />

      {/* Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking(null)} />

      {/* Luxury Trust Marquee Ticker */}
      <LuxuryMarquee />

      {/* Synergistic Dual Specialty Breakdown */}
      <DualShowcase onOpenBooking={() => handleOpenBooking(null)} />

      {/* Comprehensive Categorized Services Catalog (Dentistry First) */}
      <ServicesCatalog
        onSelectService={(service) => setSelectedService(service)}
        onBookService={(service) => handleOpenBooking(service)}
      />

      {/* Interactive Before & After Transformation Showcase */}
      <BeforeAfterSlider onOpenBooking={() => handleOpenBooking(null)} />

      {/* Doctor Spotlight & Clinical Credentials */}
      <DoctorProfile onOpenBooking={() => handleOpenBooking(null)} />

      {/* Why Choose Us & Clinical Standards */}
      <WhyChooseUs onOpenBooking={() => handleOpenBooking(null)} />

      {/* Patient Reviews Carousel */}
      <ReviewsSection />

      {/* Comprehensive Clinic Footer */}
      <Footer onOpenBooking={() => handleOpenBooking(null)} />

      {/* Desktop Floating Instant WhatsApp Widget */}
      <a
        href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
          "Hello Dr. Kaviya, I would like to book a consultation at K Smile Dentistry & Cosmetology."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-widget desktop-only"
        title="Chat with Dr. Kaviya on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={20} />
        <span>WhatsApp Dr. Kaviya</span>
      </a>

      {/* Mobile Sticky Luxury Action Bar */}
      <div className="mobile-bottom-bar glass">
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="mobile-bar-btn call-action"
        >
          <Phone size={18} />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
            "Hello Dr. Kaviya, I would like to book a consultation at K Smile Dentistry & Cosmetology."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-btn whatsapp-action"
        >
          <MessageSquare size={18} />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => handleOpenBooking(null)}
          className="mobile-bar-btn book-action"
        >
          <Calendar size={18} />
          <span>Book Slot</span>
        </button>
      </div>

      {/* Treatment Detail Deep-Dive Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onOpenBooking={(service) => handleOpenBooking(service)}
        />
      )}

      {/* Quick Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={bookingInitialService}
      />
    </div>
  );
}
