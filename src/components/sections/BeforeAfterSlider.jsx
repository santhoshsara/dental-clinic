import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeftRight, CheckCircle2, ChevronRight } from "lucide-react";

export default function BeforeAfterSlider({ onOpenBooking }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <section id="transformations" className="section before-after-section">
      <div className="container">
        <div className="before-after-header">
          <div className="badge-pill badge-gold">
            <Sparkles size={14} />
            <span>Visible Clinical Results</span>
          </div>
          <h2 className="section-title">Before & After Transformations</h2>
          <p className="section-subtitle">
            See the transformative power of precision dental science and aesthetic cosmetology.
            Slide to compare the restoration result.
          </p>
        </div>

        <div className="slider-showcase-card glass">
          <div className="slider-wrapper">
            <div
              ref={containerRef}
              className="ba-container"
              onMouseDown={() => setIsDragging(true)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Background) */}
              <img
                src="/images/realistic_clean_1791042619298.jpg"
                alt="After Dental Restoration"
                className="ba-image ba-after-img"
                draggable={false}
              />
              <div className="ba-label ba-label-after">
                <span>AFTER: Restored & Pristine</span>
              </div>

              {/* Before Image (Clipped Overlay) */}
              <div
                className="ba-clipped-wrap"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src="/images/realistic_cavity_1791042607408.jpg"
                  alt="Before Dental Restoration"
                  className="ba-image ba-before-img"
                  draggable={false}
                />
                <div className="ba-label ba-label-before">
                  <span>BEFORE: Decay & Discoloration</span>
                </div>
              </div>

              {/* Draggable Divider Handle */}
              <div
                className="ba-divider-line"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="ba-handle-knob">
                  <ArrowLeftRight size={16} />
                </div>
              </div>
            </div>

            <div className="slider-instruction-row">
              <span className="slider-hint">
                <ArrowLeftRight size={14} /> Drag or swipe slider to compare
              </span>
            </div>
          </div>

          <div className="slider-details-side">
            <div className="slider-case-badge">
              <span>✦ Case Spotlight: Pain-Free Nano-Restoration</span>
            </div>
            <h3>Lifelike Aesthetic Rebuilding</h3>
            <p className="slider-case-desc">
              Patient presented with deep localized occlusal decay and micro-fractures.
              Using Dr. Kaviya's precision rotary protocol and multi-layered shade-matched
              nano-hybrid composite, the tooth was 100% restored with zero pain, preserving
              natural enamel and providing permanent chewing strength.
            </p>

            <div className="slider-highlights-list">
              <div className="highlight-item">
                <CheckCircle2 size={16} color="var(--primary)" />
                <span>Single 30-minute pain-free sitting</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={16} color="var(--primary)" />
                <span>100% Mercury-free bio-compatible composite</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={16} color="var(--primary)" />
                <span>Seamless invisible margin blend</span>
              </div>
            </div>

            <div className="slider-cta-row">
              <button onClick={() => onOpenBooking()} className="btn btn-primary">
                <span>Book Your Smile Evaluation</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
