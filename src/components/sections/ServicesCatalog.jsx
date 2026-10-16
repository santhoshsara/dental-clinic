import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, Activity, Sparkles, ChevronRight, MessageSquare } from "lucide-react";
import { SERVICES_LIST, SERVICE_CATEGORIES, CLINIC_INFO } from "../../data/servicesData";

export default function ServicesCatalog({ onSelectService, onBookService }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    return SERVICES_LIST.filter((service) => {
      const matchesCategory =
        activeCategory === "all" || service.category === activeCategory;
      
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesText =
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.tagline.toLowerCase().includes(query) ||
        service.concerns.some((c) => c.toLowerCase().includes(query));

      return matchesCategory && matchesText;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="services" className="section services-catalog-section">
      <div className="container">
        <div className="catalog-header">
          <div className="badge-pill badge-rose">
            <Sparkles size={14} />
            <span>Comprehensive Treatment Portfolio</span>
          </div>
          <h2 className="section-title">Clinical Dentistry & Medical Cosmetology</h2>
          <p className="section-subtitle">
            Every procedure is personalized, evidence-based, and performed under the highest
            clinical safety standards by Dr. Kaviya.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="catalog-controls">
          <div className="category-tabs-scroll">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`category-pill ${activeCategory === cat.id ? "active" : ""}`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="search-bar-wrap">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by concern (e.g. glow, jawline, hair, pores, pain)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchQuery("")}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="results-counter">
          <span>Showing <strong>{filteredServices.length}</strong> treatment{filteredServices.length !== 1 ? "s" : ""}</span>
          {searchQuery && (
            <span className="search-active-pill">for "{searchQuery}"</span>
          )}
        </div>

        {/* Services Grid */}
        <motion.div layout className="services-luxury-grid">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="service-luxury-card glass"
                onClick={() => onSelectService(service)}
              >
                <div className="service-card-image-wrap">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-card-image"
                    loading="lazy"
                  />
                  <div className="service-badge-floating">
                    <span className="badge-pill badge-gold">{service.badge}</span>
                  </div>
                </div>

                <div className="service-card-body">
                  <div className="service-card-meta">
                    <span className="service-meta-pill">
                      <Clock size={13} />
                      {service.time}
                    </span>
                    <span className="service-meta-pill">
                      <Activity size={13} />
                      {service.downtime}
                    </span>
                  </div>

                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-tagline">{service.tagline}</p>
                  <p className="service-card-desc">{service.description}</p>

                  <div className="service-concerns-chips">
                    {service.concerns.slice(0, 3).map((concern, i) => (
                      <span key={i} className="concern-chip">
                        {concern}
                      </span>
                    ))}
                    {service.concerns.length > 3 && (
                      <span className="concern-chip more">
                        +{service.concerns.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="service-card-actions" onClick={(e) => e.stopPropagation()}>
                    <button
                      className="btn-card-details"
                      onClick={() => onSelectService(service)}
                    >
                      <span>Explore Details</span>
                      <ChevronRight size={15} />
                    </button>

                    <a
                      href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
                        `Hello Dr. Kaviya, I would like to book a consultation for ${service.title} (${service.tagline}). Please share available slots.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-card-whatsapp"
                      title="Instant WhatsApp Inquiry"
                    >
                      <MessageSquare size={16} />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredServices.length === 0 && (
          <div className="no-results-box glass">
            <Sparkles size={40} color="var(--primary-light)" />
            <h3>No specific treatments match your search</h3>
            <p>Try searching for broader terms like "glow", "skin", "hair", or "teeth", or clear your filter.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="btn btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
