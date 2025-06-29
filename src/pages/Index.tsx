
import React, { useEffect } from 'react';
import CosmicBackground from '../components/CosmicBackground';
import SolarSystemHero from '../components/SolarSystemHero';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialSlider from '../components/TestimonialSlider';
import HackathonSection from '../components/HackathonSection';
import ExperienceSection from '../components/ExperienceSection';
import ServicesSection from '../components/ServicesSection';
import ContactPortal from '../components/ContactPortal';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Cosmic Background Elements */}
      <CosmicBackground />
      
      {/* Hero Section */}
      <SolarSystemHero />
      
      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gradient mb-8 floating-element">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              I'm a passionate software engineer and freelancer with 3+ years of experience in crafting 
              digital experiences that span across Web Development, Machine Learning, and AI Agents. 
              My journey has taken me from mentoring 44 lessons at Stanford Code in Place to winning 
              multiple hackathons and delivering 50+ successful projects.
            </p>
            <div className="glass-effect rounded-2xl p-8 nebula-effect">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-gradient">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold text-green-400 mb-2 group-hover:text-gradient">4</div>
                  <div className="text-gray-300">Hackathons Won</div>
                </div>
                <div className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:text-gradient">44</div>
                  <div className="text-gray-300">Stanford Lessons</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Hackathons Section */}
      <HackathonSection />

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactPortal />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
