import React from 'react';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import DynamicCosmicElements from '../components/DynamicCosmicElements';

const Services = () => {
  return (
    <div className="min-h-screen relative">
      {/* Dynamic Cosmic Elements */}
      <DynamicCosmicElements />
      
      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold text-gradient mb-6">
            Freelance Services
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Professional digital solutions tailored to your business needs. 
            From concept to deployment, I deliver excellence across the entire development lifecycle.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;