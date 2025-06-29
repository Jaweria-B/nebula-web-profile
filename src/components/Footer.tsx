
import React from 'react';
import { Github, Linkedin, Mail, Heart, Rocket, Star, Globe, Code, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 mt-24 border-t border-white/10 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced Cosmic Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-green-500/15 to-cyan-500/15 rounded-full blur-lg animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Enhanced Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-4xl font-bold text-gradient mb-6 floating-element">
              Jaweria Batool
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-md text-lg">
              Crafting digital experiences across the universe of Web Development, 
              Machine Learning, and AI. Transforming ideas into stellar solutions 
              with 3+ years of professional expertise spanning multiple galaxies.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex gap-4 mb-8">
              {[
                { icon: Github, href: 'https://github.com/Jaweria-B', color: 'from-gray-600 to-gray-800', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/jaweria-batool/', color: 'from-blue-600 to-blue-700', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:jaweria.batool@example.com', color: 'from-green-500 to-emerald-500', label: 'Email' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden`}
                  title={social.label}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <social.icon className="w-6 h-6 text-white relative z-10" />
                </a>
              ))}
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '3+', label: 'Years' },
                { value: '50+', label: 'Projects' },
                { value: '100%', label: 'Success' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-blue-400" />
              Navigation
            </h4>
            <ul className="space-y-4">
              {['About', 'Projects', 'Experience', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 transform inline-block group flex items-center gap-2"
                  >
                    <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-400" />
              Services
            </h4>
            <ul className="space-y-4">
              {['Web Development', 'Machine Learning', 'AI Agents', 'Mobile Apps', 'Cloud Solutions'].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer group flex items-center gap-2">
                    <Zap className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Achievements Banner */}
        <div className="relative mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30"></div>
          <div className="relative glass-effect rounded-3xl p-8 nebula-effect">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              <div className="flex items-center gap-3 group">
                <Star className="w-6 h-6 text-yellow-400 group-hover:animate-spin" />
                <span className="text-white font-semibold text-lg">Stanford Code in Place Mentor</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Rocket className="w-6 h-6 text-blue-400 group-hover:animate-bounce" />
                <span className="text-white font-semibold text-lg">50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Heart className="w-6 h-6 text-red-400 group-hover:animate-pulse" />
                <span className="text-white font-semibold text-lg">100% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="flex items-center gap-3 text-gray-400 mb-6 md:mb-0 text-lg">
            <span>© {currentYear} Jaweria Batool. Crafted with</span>
            <Heart className="w-5 h-5 text-red-400 animate-pulse" />
            <span>and stellar code</span>
            <Globe className="w-5 h-5 text-blue-400 animate-spin" />
          </div>
          
          <div className="flex items-center gap-8 text-gray-400">
            <span className="hover:text-blue-400 cursor-pointer transition-colors duration-300 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Privacy Policy
            </span>
            <span className="hover:text-blue-400 cursor-pointer transition-colors duration-300 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Terms of Service  
            </span>
            <span className="flex items-center gap-2 text-sm">
              <span>Made with React & Tailwind</span>
              <Rocket className="w-4 h-4 text-blue-400 animate-bounce" />
            </span>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-16 right-16 w-24 h-24 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-16 left-16 w-20 h-20 bg-gradient-to-r from-pink-500/15 to-yellow-500/15 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-lg animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;
