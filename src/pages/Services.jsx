import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={{
        initial: { opacity: 0, x: -20 },
        in: { opacity: 1, x: 0, transition: { duration: 0.6 } },
        out: { opacity: 0, x: 20, transition: { duration: 0.6 } }
      }}
      className="section-padding"
      style={{ minHeight: '100vh', paddingTop: '10rem' }}
    >
      <div className="container">
        <h1 className="hero-title text-gradient-cyan">All Services</h1>
        <p className="hero-desc">Detailed information about our dental and cosmetology procedures.</p>
        {/* We can expand this page later */}
      </div>
    </motion.div>
  );
};

export default Services;
