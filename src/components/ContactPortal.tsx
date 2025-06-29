
import React, { useState } from 'react';
import { Mail, MessageCircle, Calendar, Github, Linkedin, Twitter, Send, Zap, Rocket } from 'lucide-react';

const ContactPortal = () => {
  const [activeMethod, setActiveMethod] = useState<string | null>(null);

  const contactMethods = [
    {
      id: 'email',
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Me',
      subtitle: 'jaweria.batool@example.com',
      description: 'Send me a detailed message about your project',
      action: 'mailto:jaweria.batool@example.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'linkedin',
      icon: <Linkedin className="w-6 h-6" />,  
      title: 'LinkedIn',
      subtitle: 'Professional Network',
      description: 'Connect with me professionally',
      action: 'https://www.linkedin.com/in/jaweria-batool/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 'github',
      icon: <Github className="w-6 h-6" />,
      title: 'GitHub',
      subtitle: 'Code Repository',
      description: 'Check out my latest projects and contributions',
      action: 'https://github.com/Jaweria-B',
      color: 'from-gray-700 to-gray-900'
    },
    {
      id: 'calendar',
      icon: <Calendar className="w-6 h-6" />,
      title: 'Schedule Call',
      subtitle: '15-30 min consultation',
      description: 'Book a free consultation call',
      action: '#',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to launch your next project into orbit? Choose your preferred way to reach out 
            and let's create something extraordinary together.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className={`glass-effect rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 group relative overflow-hidden ${
                activeMethod === method.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => {
                if (method.action.startsWith('http') || method.action.startsWith('mailto:')) {
                  window.open(method.action, '_blank');
                } else {
                  setActiveMethod(activeMethod === method.id ? null : method.id);
                }
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
              
              <div className="relative z-10 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                <p className="text-blue-400 text-sm mb-2">{method.subtitle}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{method.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={() => window.open('mailto:jaweria.batool@example.com', '_blank')}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 nebula-glow"
          >
            <Send className="w-5 h-5" />
            Send Quick Email
            <Zap className="w-4 h-4" />
          </button>
          
          <button 
            onClick={() => window.open('https://www.linkedin.com/in/jaweria-batool/', '_blank')}
            className="flex items-center gap-3 px-8 py-4 glass-effect rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
          >
            <Rocket className="w-5 h-5" />
            Connect on LinkedIn
          </button>
        </div>

        {/* Response Time Promise */}
        <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white font-semibold">Fast Response Guaranteed</span>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          
          <p className="text-gray-300 mb-4">
            I typically respond within <span className="text-green-400 font-semibold">24-48 hours</span> 
            and am always excited to discuss new opportunities and projects.
          </p>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">24hr</div>
              <div className="text-xs text-gray-400">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">100%</div>
              <div className="text-xs text-gray-400">Reply Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-xs text-gray-400">Available</div>
            </div>
          </div>
        </div>

        {/* Floating Social Icons */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
          <a 
            href="https://www.linkedin.com/in/jaweria-batool/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:scale-110 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/Jaweria-B"
            target="_blank"
            rel="noopener noreferrer" 
            className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-500/20 hover:scale-110 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="mailto:jaweria.batool@example.com"
            className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-green-400 hover:bg-green-500/20 hover:scale-110 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPortal;
