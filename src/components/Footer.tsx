
import React from 'react';
import { Github, Linkedin, Mail, Heart, Rocket, Star, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 245 240" {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M104.4 104.8c-5.7 0-10.2 5-10.2 11.1 0 6.1 4.6 11.1 10.2 11.1 5.7 0 10.3-5 10.2-11.1 0-6.1-4.6-11.1-10.2-11.1zm36.3 0c-5.7 0-10.2 5-10.2 11.1 0 6.1 4.6 11.1 10.2 11.1 5.7 0 10.3-5 10.2-11.1 0-6.1-4.6-11.1-10.2-11.1z" />
    <path d="M189.5 20H55.5C33.6 20 16 36.8 16 59.3v121.4c0 22.5 17.6 39.3 39.5 39.3h107.7l-5.1-17.6 12.4 10.9 11.1 9.7 19.9 17.4V59.3C229.9 36.8 212.3 20 190.5 20zM161.7 170.7s-8.1-9.6-14.9-18.2c29.6-8.3 41-26.7 41-26.7-9.4 6.3-18.3 10.5-26.6 13.5-11.6 4.2-22.7 6.9-33.3 8.6-21 3.5-40.2 2.7-57.1-.1-12.6-2-23.4-4.9-32.4-8.6-3.3-1.2-6.9-2.6-10.5-4.2-0.4-0.2-0.7-0.4-1-0.6-0.2-0.1-0.3-0.2-0.5-0.3 0 0 11.2 18.3 40.1 26.6-6.5 8.5-14.9 18.6-14.9 18.6-49.2-1.6-67.8-33.9-67.8-33.9 0-72.1 32.2-130.6 32.2-130.6C57.6 22.4 82.6 21 82.6 21l3.2 3.8c-53.5 15.5-78.2 38.9-78.2 38.9s14.9-8.3 40.2-18.1c0 0 25.3-10.7 53.6-14.4 0 0 3.9-0.8 10.4-1.7 19.4-3.4 44.5-4.9 73.7 1.6 0 0 32.2 7.4 63.1 29.2 0 0-18.7 32.7-67.7 34.3z" />
  </svg>
);

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
              <a 
                href="https://discordapp.com/users/1036991829138223104"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-indigo-300 hover:text-white hover:bg-indigo-500/20 transition-all duration-300 hover:scale-110"
              >
                <DiscordIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.bigbangblog.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-pink-400 hover:text-white hover:bg-pink-500/20 transition-all duration-300 hover:scale-110"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Projects', 'Services', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  {link === 'Services' ? (
                    <Link
                      to="/services"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </Link>
                  ) : (
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  )}
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
              <span className="text-white font-semibold">70+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-white font-semibold">200+ Students Mentored</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-center lg:text-left">
            <span>© {currentYear} Jaweria Batool. Crafted with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>and stellar code.</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-gray-400 text-center">
            <span className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
              Privacy Policy
            </span>
            <span className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
              Terms of Service  
            </span>
            <span className="flex items-center gap-1 text-blue-300/80">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>"Code is poetry written for machines to dance"</span>
              <Star className="w-4 h-4 text-yellow-400" />
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
