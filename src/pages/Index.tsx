
import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import FeaturesSection from '../components/FeaturesSection';
import AppsSection from '../components/AppsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #f0f4ff, white, #f9f0ff)' }}>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <AppsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
