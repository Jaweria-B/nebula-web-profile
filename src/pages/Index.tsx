import React, { useEffect } from 'react';
import SolarSystemHero from '../components/SolarSystemHero';
import ProjectSlider from '../components/ProjectSlider';
import TestimonialSlider from '../components/TestimonialSlider';
import HackathonSection from '../components/HackathonSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactPortal from '../components/ContactPortal';
import Footer from '../components/Footer';
import DynamicCosmicElements from '../components/DynamicCosmicElements';
import MyProcessSection from '../components/MyProcessSection';
import FreelanceShowcase from '../components/FreelanceShowcase';
import ProductsSection from '../components/ProductsSection';

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
      {/* Dynamic Cosmic Elements */}
      <DynamicCosmicElements />
      
      {/* Hero Section */}
      <SolarSystemHero />
      
      {/* Products Section */}
      <ProductsSection />
      
      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gradient mb-8">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              I'm a passionate software engineer and freelancer with 3+ years of experience in crafting 
              digital experiences that span across Web Development, Machine Learning, and AI Agents. 
              My journey has taken me from mentoring at Stanford Code in Place to leading tech teams 
              and delivering 50+ successful projects.
            </p>
            <div className="glass-effect rounded-2xl p-8 nebula-glow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-green-400 mb-2">6</div>
                  <div className="text-gray-300">Companies & Roles</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
                  <div className="text-gray-300">Students Mentored</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Process Section */}
      <MyProcessSection />

      {/* Projects Section */}
      <ProjectSlider />
      {/* Freelance Showcase Section */}
      <FreelanceShowcase />
      {/* Hackathons Section */}
      <HackathonSection />

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Contact Section */}
      <ContactPortal />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
