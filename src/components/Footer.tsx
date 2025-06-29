
import React from 'react';
import { Github, Linkedin, Mail, Heart, Rocket, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 mt-20 border-t border-white/10">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-gradient mb-4">
              Jaweria Batool
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Crafting digital experiences across the universe of Web Development, 
              Machine Learning, and AI. Transforming ideas into stellar solutions 
              with 3+ years of professional expertise.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/Jaweria-B"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jaweria-batool/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:jaweria.batool@example.com"
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-green-400 hover:text-white hover:bg-green-500/20 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Projects', 'Services', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'Machine Learning', 'AI Agents', 'Mobile Apps', 'Cloud Solutions'].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Achievements Banner */}
        <div className="glass-effect rounded-2xl p-6 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Stanford Code in Place Mentor</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-blue-400" />
              <span className="text-white font-semibold">50+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-white font-semibold">100% Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Jaweria Batool. Crafted with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>and stellar code.</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
              Privacy Policy
            </span>
            <span className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
              Terms of Service  
            </span>
            <span className="flex items-center gap-1">
              <span>Made with React & Tailwind</span>
              <Rocket className="w-4 h-4 text-blue-400" />
            </span>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-full blur-xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
