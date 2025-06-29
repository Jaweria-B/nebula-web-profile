
import React, { useState } from 'react';
import { Mail, MessageCircle, Calendar, Github, Linkedin, Send, Zap, Rocket, Star, Globe, Phone } from 'lucide-react';

const ContactPortal = () => {
  const [activeMethod, setActiveMethod] = useState<string | null>(null);

  const contactMethods = [
    {
      id: 'email',
      icon: <Mail className="w-7 h-7" />,
      title: 'Email Portal',
      subtitle: 'jaweria.batool@example.com',
      description: 'Send me a detailed message about your project',
      action: 'mailto:jaweria.batool@example.com',
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      particles: 'blue'
    },
    {
      id: 'linkedin',
      icon: <Linkedin className="w-7 h-7" />,  
      title: 'Professional Network',
      subtitle: 'Connect & Collaborate',
      description: 'Let\'s build something amazing together',
      action: 'https://www.linkedin.com/in/jaweria-batool/',
      color: 'from-blue-600 via-blue-700 to-indigo-600',
      particles: 'indigo'
    },
    {
      id: 'github',
      icon: <Github className="w-7 h-7" />,
      title: 'Code Universe',
      subtitle: 'Explore My Projects',
      description: 'Dive into my latest creations and contributions',
      action: 'https://github.com/Jaweria-B',
      color: 'from-gray-600 via-gray-800 to-black',
      particles: 'gray'
    },
    {
      id: 'calendar',
      icon: <Calendar className="w-7 h-7" />,
      title: 'Book Consultation',
      subtitle: 'Free 30-min Session',
      description: 'Schedule a personalized discussion',
      action: '#',
      color: 'from-green-500 via-emerald-500 to-teal-500',
      particles: 'green'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Cosmic Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
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
        <div className="text-center mb-20">
          <h2 className="text-7xl font-bold text-gradient mb-8 floating-element">
            Contact Portal
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to launch your next project into orbit? Choose your preferred communication channel 
            and let's create something extraordinary together across the digital cosmos.
          </p>
        </div>

        {/* Enhanced Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className={`relative group cursor-pointer transition-all duration-500 hover:scale-105 ${
                activeMethod === method.id ? 'scale-105' : ''
              }`}
              onClick={() => {
                if (method.action.startsWith('http') || method.action.startsWith('mailto:')) {
                  window.open(method.action, '_blank');
                } else {
                  setActiveMethod(activeMethod === method.id ? null : method.id);
                }
              }}
            >
              {/* Glowing border effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${method.color} rounded-3xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>
              
              {/* Main card */}
              <div className="relative glass-effect rounded-3xl p-8 h-full overflow-hidden">
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-${method.particles}-400 rounded-full animate-pulse opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10 text-center h-full flex flex-col justify-between">
                  {/* Icon with enhanced animation */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${method.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    <div className="text-white group-hover:animate-pulse">
                      {method.icon}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-blue-400 text-sm mb-3 font-semibold">{method.subtitle}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{method.description}</p>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-300">
                      <Rocket className="w-4 h-4" />
                      <span>Click to launch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <button 
            onClick={() => window.open('mailto:jaweria.batool@example.com', '_blank')}
            className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 nebula-glow text-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-3">
              <Send className="w-6 h-6" />
              Send Message to Space
              <Zap className="w-5 h-5" />
            </div>
          </button>
          
          <button 
            onClick={() => window.open('https://www.linkedin.com/in/jaweria-batool/', '_blank')}
            className="flex items-center gap-3 px-10 py-5 glass-effect rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 text-lg group"
          >
            <Globe className="w-6 h-6 group-hover:animate-spin" />
            Connect Across Galaxies
          </button>
        </div>

        {/* Enhanced Response Promise */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-30"></div>
          <div className="relative glass-effect rounded-3xl p-10 text-center nebula-effect">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <span className="text-white font-bold text-xl">Cosmic Response Guarantee</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Messages transmitted through the cosmic network typically reach their destination within 
              <span className="text-green-400 font-bold text-xl mx-2">24-48 hours</span> 
              Earth time. Always excited to discuss new galactic missions and stellar projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">24hr</div>
                <div className="text-sm text-gray-400 flex items-center justify-center gap-2">
                  <Star className="w-4 h-4" />
                  Response Time
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm text-gray-400 flex items-center justify-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Success Rate
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-sm text-gray-400 flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4" />
                  Availability
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Social Portal */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
          <div className="glass-effect rounded-2xl p-4 backdrop-blur-xl">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/jaweria-batool/', color: 'text-blue-400 hover:text-blue-300' },
              { icon: Github, href: 'https://github.com/Jaweria-B', color: 'text-gray-400 hover:text-gray-300' },
              { icon: Mail, href: 'mailto:jaweria.batool@example.com', color: 'text-green-400 hover:text-green-300' }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-12 h-12 flex items-center justify-center rounded-xl ${social.color} hover:scale-110 transition-all duration-300 hover:bg-white/10 mb-2 last:mb-0`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPortal;
