import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import EssentialFeatures from '../components/EssentialFeatures';
import TechnicalSkills from '../components/TechnicalSkills';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-[#0f172a] [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
        <Hero />
        <Statistics />
        <Features />
        <TechnicalSkills />
        <Testimonials />
        <EssentialFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Index;