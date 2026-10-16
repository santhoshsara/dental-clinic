import React from "react";

export default function LuxuryMarquee() {
  const items = [
    "ADVANCED DENTISTRY & MEDICAL COSMETOLOGY",
    "PAIN-FREE ROTARY ENDODONTICS",
    "MEDICAL HYDRAFACIAL MD",
    "V-LINE BOTOX & JAWLINE SCULPTING",
    "CUSTOM INVISIBLE CLEAR ALIGNERS",
    "GFC & PRP BIO-CELLULAR HAIR REGROWTH",
    "PERMANENT TITANIUM DENTAL IMPLANTS",
    "100% DOCTOR-ADMINISTERED CLINICAL SAFETY"
  ];

  return (
    <div className="luxury-marquee-wrapper">
      <div className="marquee-track">
        {/* Render twice for continuous loop */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="marquee-item">
            <span className="marquee-diamond">✦</span>
            <span className="marquee-text">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
