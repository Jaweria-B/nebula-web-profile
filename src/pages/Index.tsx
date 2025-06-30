
import React, { useEffect } from 'react';
import SolarSystemHero from '../components/SolarSystemHero';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialSlider from '../components/TestimonialSlider';
import HackathonSection from '../components/HackathonSection';
import ExperienceSection from '../components/ExperienceSection';
import ServicesSection from '../components/ServicesSection';
import ContactPortal from '../components/ContactPortal';
import Footer from '../components/Footer';
import DynamicCosmicElements from '../components/DynamicCosmicElements';

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
      {/* Hero Section */}
      <SolarSystemHero />
      
      {/* About Section */}
      <section id="about" className="py-20 relative">
        <DynamicCosmicElements 
          sectionId="about" 
          density="low" 
          types={['star', 'nebula']}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold text-gradient mb-8">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              I'm a passionate software engineer and freelancer with 3+ years of experience in crafting 
              digital experiences that span across Web Development, Machine Learning, and AI Agents. 
              My journey has taken me from leading teams at Uinfo to mentoring at Stanford Code in Place 
              and delivering 50+ successful projects.
            </p>
            <div className="cosmic-card rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">3</div>
                  <div className="text-gray-300">Teams Led</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">44</div>
                  <div className="text-gray-300">Stanford Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Hackathons Section */}
      <section className="relative">
        <DynamicCosmicElements 
          sectionId="hackathons" 
          density="medium" 
          types={['meteor', 'explosion', 'star']}
        />
        <HackathonSection />
      </section>

      {/* Testimonials Section */}
      <section className="relative">
        <DynamicCosmicElements 
          sectionId="testimonials" 
          density="low" 
          types={['nebula', 'comet']}
        />
        <TestimonialSlider />
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Services Section */}
      <section className="relative">
        <DynamicCosmicElements 
          sectionId="services" 
          density="medium" 
          types={['star', 'meteor', 'comet']}
        />
        <ServicesSection />
      </section>

      {/* Contact Section */}
      <section className="relative">
        <DynamicCosmicElements 
          sectionId="contact" 
          density="high" 
          types={['nebula', 'star', 'explosion']}
        />
        <ContactPortal />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
