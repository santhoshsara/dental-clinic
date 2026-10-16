import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={{
        initial: { opacity: 0, y: 20 },
        in: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        out: { opacity: 0, y: -20, transition: { duration: 0.6 } }
      }}
    >
      <Hero />
      <ServicesSection />
    </motion.div>
  );
};

export default Home;
