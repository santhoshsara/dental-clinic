import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react";

const PATIENT_REVIEWS = [
  {
    name: "Saran Kumar",
    time: "3 months ago",
    badge: "Dental Care",
    text: "I visited Dr. Kaviya's K Smile Dentistry because I was suffering from terrible tooth pain, and I am so glad I did. The clinic itself has a very calm and relaxing atmosphere. The doctor patiently listened to my issue and explained the best treatment.",
    rating: 5,
  },
  {
    name: "Dr. Ananya Raman",
    time: "1 month ago",
    badge: "Hydrafacial & Skin Glow",
    text: "I visited Dr. Kaviya for a Medical Hydrafacial before a family wedding. The glow on my face was extraordinary and lasted weeks! Her understanding of facial anatomy and gentle touch makes all the difference. Will definitely be a regular here.",
    rating: 5,
  },
  {
    name: "Saravanakumar Lingaraj",
    time: "3 months ago",
    badge: "Root Canal Therapy",
    text: "Excellent treatment and caring Doctor. My Root Canal procedure was smooth, completely painless, and professionally handled with digital equipment. Highly recommend this clinic to anyone looking for quality care.",
    rating: 5,
  },
  {
    name: "Meera Subramanian",
    time: "2 months ago",
    badge: "GFC Hair Therapy",
    text: "Suffering from sudden postpartum hair fall and was really distressed. Dr. Kaviya recommended GFC therapy. After just 2 sessions, my hair shedding drastically slowed down and baby hairs started sprouting. Thank you Dr. Kaviya!",
    rating: 5,
  },
  {
    name: "Prakash",
    time: "4 months ago",
    badge: "Comprehensive Care",
    text: "Excellent dental care with a professional and patient-friendly approach. The clinic is well-maintained, hygienic, and provides a very comfortable experience. Highly recommended.",
    rating: 5,
  },
  {
    name: "Karthik Raja",
    time: "1 month ago",
    badge: "Botox & Jawline Contouring",
    text: "I had severe clenching issues and a wide square jaw. Dr. Kaviya did masseter Botox and subtle jawline contouring. The tension in my jaw is completely gone and my face looks much slimmer and balanced naturally.",
    rating: 5,
  },
  {
    name: "Nanda Kumar",
    time: "3 months ago",
    badge: "Emergency Care",
    text: "Had a severe toothache over the weekend and Dr. Kaviya's clinic was the only place that attended to me with speed and warmth. Handled my emergency with tremendous expertise. So grateful ❤️",
    rating: 5,
  },
  {
    name: "Lakshmanan V",
    time: "3 months ago",
    badge: "Dental Treatment",
    text: "She has given professional treatment at the same time very kind and explains in detail the process, after treatment her feedback approach via WhatsApp is great. Treatment cost is reasonable and this doctor has a bright future.",
    rating: 5,
  }
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + cardsToShow >= PATIENT_REVIEWS.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, PATIENT_REVIEWS.length - cardsToShow) : prev - 1
    );
  };

  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <div className="reviews-header-block">
          <div className="badge-pill badge-gold">
            <CheckCircle2 size={14} />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="section-title">Loved by Patients, Driven by Results</h2>
          <p className="section-subtitle">
            Read real feedback from patients who entrusted Dr. Kaviya with their smiles,
            skin rejuvenation, and aesthetic transformations.
          </p>
        </div>

        <div className="reviews-carousel-shell">
          <button className="carousel-nav-btn prev-btn" onClick={prevSlide} aria-label="Previous review">
            <ChevronLeft size={22} />
          </button>

          <div className="carousel-track-container">
            <motion.div
              className="carousel-slides-track"
              animate={{ x: `calc(-${currentIndex * (100 / cardsToShow)}%)` }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
            >
              {PATIENT_REVIEWS.map((review, i) => (
                <div
                  key={i}
                  className="carousel-slide-item"
                  style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                >
                  <div className="review-card-box glass">
                    <div className="review-top-row">
                      <div className="avatar-circle">{review.name.charAt(0)}</div>
                      <div className="author-details">
                        <h4>{review.name}</h4>
                        <div className="review-sub-meta">
                          <span className="review-time">{review.time}</span>
                          <span className="review-category-tag">{review.badge}</span>
                        </div>
                      </div>
                      <Quote size={24} className="review-quote-icon" />
                    </div>

                    <div className="stars-row">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} size={15} fill="#F59E0B" color="#F59E0B" />
                      ))}
                      <span className="verified-tag">Google Verified</span>
                    </div>

                    <p className="review-quote-text">"{review.text}"</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button className="carousel-nav-btn next-btn" onClick={nextSlide} aria-label="Next review">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
