import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Sparkles, Bot, Mail, Twitter, Mic, ArrowRight, Zap, Rocket, Atom } from 'lucide-react';

const ProductsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const products = [
    {
      title: "EmailCraft",
      subtitle: "AI-Powered Email Generation Platform",
      description: "Transform your thoughts into perfectly crafted emails with multiple AI providers. Professional quality results with intelligent personalization.",
      keyFeatures: [
        "Multi-AI Provider Support (Gemini, OpenAI, DeepSeek)",
        "Professional Email Templates", 
        "Real-time Generation",
        "Context-Aware Personalization",
        "Export & Integration Ready"
      ],
      icon: Mail,
      constellation: "Orion",
      starCount: 87
    },
    {
      title: "Sophie AI Assistant",
      subtitle: "Voice-Activated Desktop AI with Smart Tools",
      description: "Advanced voice assistant with wake-word detection, speaker recognition, and intelligent tool integration for seamless desktop automation.",
      keyFeatures: [
        "Wake Word Detection ('Hello Sophie')",
        "Speaker Recognition & Enrollment",
        "Real-time Web Search with Citations",
        "System Control (Volume, Brightness)",
        "Personalized Conversation History",
        "Cross-Platform Compatibility"
      ],
      icon: Mic,
      constellation: "Andromeda",
      starCount: 156
    },
    {
      title: "XBot Automation",
      subtitle: "Intelligent Twitter/X Multi-Account Manager", 
      description: "Comprehensive Twitter automation platform with AI-powered engagement, multi-profile management, and advanced analytics.",
      keyFeatures: [
        "Multi-Account Management",
        "AI-Powered Content Generation",
        "Smart Engagement (Like, Retweet, Comment)",
        "Hashtag & User Targeting",
        "Bulk Operations & File Import",
        "Advanced Safety Controls"
      ],
      icon: Twitter,
      constellation: "Cassiopeia",
      starCount: 124
    }
  ];

  const FloatingStars = ({ count = 50 }) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 4}s`
          }}
        >
          <Star 
            className="w-1 h-1 text-white opacity-60"
            style={{
              filter: `hue-rotate(${Math.random() * 360}deg)`
            }}
          />
        </div>
      );
    }
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars}
      </div>
    );
  };

  const CosmicOrb = ({ size, color, delay, duration, left, top }) => (
    <div
      className={`absolute rounded-full ${size} ${color} animate-pulse blur-xl opacity-20`}
      style={{
        left: `${left}%`,
        top: `${top}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    />
  );

  const cosmicOrbs = [
    { size: "w-96 h-96", color: "bg-purple-600", delay: 0, duration: 8, left: 10, top: 20 },
    { size: "w-80 h-80", color: "bg-blue-600", delay: 2, duration: 12, left: 80, top: 10 },
    { size: "w-64 h-64", color: "bg-pink-600", delay: 4, duration: 10, left: 60, top: 70 },
    { size: "w-72 h-72", color: "bg-cyan-600", delay: 1, duration: 15, left: 20, top: 80 },
    { size: "w-56 h-56", color: "bg-violet-600", delay: 3, duration: 9, left: 90, top: 50 }
  ];

  const shootingStars = [0, 1, 2].map((i) => (
    <div
      key={i}
      className="absolute w-px h-px bg-white opacity-60"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 50}%`,
        animation: `shooting-star 3s linear infinite ${i * 2}s`,
        boxShadow: '0 0 6px 2px rgba(255,255,255,0.3)'
      }}
    />
  ));

  const stats = [
    { value: "3", label: "Products", color: "purple", icon: Bot },
    { value: "15+", label: "Technologies", color: "cyan", icon: Zap },
    { value: "∞", label: "Possibilities", color: "pink", icon: Sparkles }
  ];

  return (
    <div>
      <section id="products" className="relative min-h-screen py-20 overflow-hidden">
        {/* Cosmic Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 opacity-95" />
        
        {/* Nebula Effects */}
        <div className="absolute inset-0">
          {cosmicOrbs.map((orb, index) => (
            <CosmicOrb key={index} {...orb} />
          ))}
        </div>

        {/* Floating Stars */}
        <FloatingStars count={100} />

        {/* Shooting Stars */}
        <div className="absolute inset-0">
          {shootingStars}
        </div>

        {/* Mouse Trail Effect */}
        <div
          className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
            borderRadius: '50%',
            transition: 'all 0.1s ease-out'
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Majestic Header */}
          <div className="text-center mb-20 relative">
            {/* Constellation Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8 group hover:bg-white/10 transition-all duration-500">
              <div className="relative">
                <Sparkles className="w-5 h-5 text-purple-300 animate-spin" style={{animationDuration: '8s'}} />
                <div className="absolute inset-0 bg-purple-300 rounded-full blur-sm opacity-50 animate-pulse" />
              </div>
              <span className="text-sm font-medium bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">
                My Product Universe
              </span>
              <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse" />
            </div>
            
            {/* Main Title */}
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 relative">
              <span 
                className="bg-gradient-to-r from-purple-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent animate-pulse"
                style={{
                  textShadow: '0 0 50px rgba(147, 51, 234, 0.3)',
                  filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.4))'
                }}
              >
                AI-Powered
              </span>
              <br />
              <span 
                className="bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent glow-pulse-animation"
              >
                Solutions
              </span>
              
              {/* Orbital Elements */}
              <div className="absolute -top-10 -right-10 animate-spin orbital-spin">
                <Atom className="w-16 h-16 text-purple-300 opacity-30" />
              </div>
              <div className="absolute -bottom-5 -left-8 animate-bounce" style={{animationDelay: '1s'}}>
                <Rocket className="w-12 h-12 text-cyan-300 opacity-40" />
              </div>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 fade-in-up-animation" style={{animationDelay: '0.5s'}}>
              Explore my constellation of intelligent tools designed to automate, enhance, 
              and revolutionize your digital experience with cutting-edge AI technology.
            </p>

            {/* Cosmic Stats */}
            <div className="flex justify-center gap-12 mt-12">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                const colorClasses = {
                  purple: 'text-purple-300',
                  cyan: 'text-cyan-300', 
                  pink: 'text-pink-300'
                };
                const gradientClasses = {
                  purple: 'from-purple-400 to-pink-500',
                  cyan: 'from-cyan-400 to-blue-500',
                  pink: 'from-pink-400 to-orange-500'
                };
                
                return (
                  <div 
                    key={stat.label}
                    className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-500 fade-in-up-animation"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      opacity: 0
                    }}
                  >
                    <div className="relative mb-2">
                      <div 
                        className="text-4xl font-bold mb-1"
                        style={{
                          background: `linear-gradient(45deg, var(--tw-gradient-stops))`,
                          backgroundImage: `linear-gradient(45deg, ${stat.color === 'purple' ? '#a855f7, #ec4899' : stat.color === 'cyan' ? '#06b6d4, #3b82f6' : '#ec4899, #f97316'})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}
                      >
                        {stat.value}
                      </div>
                      <IconComponent className={`w-6 h-6 mx-auto ${colorClasses[stat.color]} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                    </div>
                    <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cosmic Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              const isHovered = hoveredCard === index;
              
              const cardColors = [
                {
                  glow: 'bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20',
                  bg: 'bg-gradient-to-br from-purple-600/20 to-pink-600/20',
                  text: 'text-purple-100',
                  icon: 'text-purple-300',
                  accent: 'text-purple-400',
                  button: 'from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border-purple-500/20',
                  buttonText: 'text-purple-200',
                  buttonIcon: 'text-purple-300',
                  feature: 'bg-gradient-to-r from-purple-400 to-pink-400'
                },
                {
                  glow: 'bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-cyan-600/20',
                  bg: 'bg-gradient-to-br from-cyan-600/20 to-blue-600/20',
                  text: 'text-cyan-100',
                  icon: 'text-cyan-300',
                  accent: 'text-cyan-400',
                  button: 'from-cyan-600/20 to-blue-600/20 hover:from-cyan-600/30 hover:to-blue-600/30 border-cyan-500/20',
                  buttonText: 'text-cyan-200',
                  buttonIcon: 'text-cyan-300',
                  feature: 'bg-gradient-to-r from-cyan-400 to-blue-400'
                },
                {
                  glow: 'bg-gradient-to-r from-violet-600/20 via-indigo-600/20 to-violet-600/20',
                  bg: 'bg-gradient-to-br from-violet-600/20 to-indigo-600/20',
                  text: 'text-violet-100',
                  icon: 'text-violet-300',
                  accent: 'text-violet-400',
                  button: 'from-violet-600/20 to-indigo-600/20 hover:from-violet-600/30 hover:to-indigo-600/30 border-violet-500/20',
                  buttonText: 'text-violet-200',
                  buttonIcon: 'text-violet-300',
                  feature: 'bg-gradient-to-r from-violet-400 to-indigo-400'
                }
              ];
              
              const colors = cardColors[index];
              
              return (
                <div
                  key={product.title}
                  className="group relative float-in-animation"
                  style={{
                    animationDelay: `${index * 0.3}s`,
                    opacity: 0
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Cosmic Glow */}
                  <div className={`absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${colors.glow} animate-pulse blur-xl`} />
                  
                  {/* Main Card */}
                  <div className="relative h-full rounded-3xl bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-700 transform group-hover:scale-[1.02] group-hover:-translate-y-2 overflow-hidden">
                    
                    {/* Card Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div 
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), 
                                           radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
                        }}
                      />
                    </div>

                    {/* Constellation Header */}
                    <div className="relative p-8 border-b border-white/5">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`relative p-4 rounded-2xl ${colors.bg} backdrop-blur-sm group-hover:scale-110 transition-transform duration-500`}>
                            <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                            <div className={`absolute inset-0 rounded-2xl ${colors.icon.replace('text-', 'bg-').replace('-300', '-400')} opacity-20 blur-lg animate-pulse`} />
                          </div>
                          <div>
                            <h3 className={`text-2xl font-bold mb-1 ${colors.text} group-hover:animate-pulse`}>
                              {product.title}
                            </h3>
                            <p className="text-sm text-slate-400 font-medium">
                              {product.subtitle}
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className={`text-xs ${colors.icon} mb-1`}>
                            {product.constellation}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-300 animate-pulse" />
                            <span className="text-xs text-slate-400">{product.starCount}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-300 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Features Nebula */}
                    <div className="p-8">
                      <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2 mb-4">
                        <Sparkles className={`w-4 h-4 ${colors.accent} animate-pulse`} />
                        Cosmic Features
                      </h4>
                      
                      <div className="space-y-3 mb-8">
                        {product.keyFeatures.slice(0, 4).map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className="flex items-start gap-3 text-sm text-slate-400 group/feature hover:text-slate-300 transition-colors duration-300 slide-in-right-animation"
                            style={{
                              animationDelay: `${featureIndex * 0.1}s`,
                              opacity: isHovered ? 1 : 0.7
                            }}
                          >
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${colors.feature} group-hover/feature:animate-pulse`} />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {product.keyFeatures.length > 4 && (
                          <div className="text-sm text-slate-500 italic flex items-center gap-2">
                            <Zap className="w-3 h-3" />
                            +{product.keyFeatures.length - 4} more quantum features...
                          </div>
                        )}
                      </div>

                      {/* Cosmic CTA */}
                      <Link 
                        to="#connect"
                        className={`group/btn relative w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl 
                          bg-gradient-to-r ${colors.button} 
                          border backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden`}
                      >
                        <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                          <div className={`absolute inset-0 bg-gradient-to-r ${colors.button.split('hover:')[0]} animate-pulse`} />
                        </div>
                        
                        <span className={`font-semibold ${colors.buttonText} relative z-10`}>
                          Want to Know More?
                        </span>
                        <ArrowRight className={`w-5 h-5 ${colors.buttonIcon} group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10`} />
                      </Link>
                    </div>

                    {/* Floating Cosmic Elements */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-60 transition-all duration-500 transform group-hover:rotate-12">
                      <Bot className={`w-6 h-6 ${colors.icon} animate-pulse`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Grand Finale CTA */}
          <div className="text-center mt-20 relative">
            <div className="mb-8">
              <p className="text-xl text-slate-300 mb-6 animate-pulse">
                Ready to explore the infinite cosmos of AI-powered possibilities?
              </p>
              <Link 
                to="#connect"
                className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 hover:from-purple-600/30 hover:via-pink-600/30 hover:to-cyan-600/30 backdrop-blur-xl border border-white/20 hover:border-white/40 rounded-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-cyan-600/5 group-hover:from-purple-600/10 group-hover:via-pink-600/10 group-hover:to-cyan-600/10 transition-all duration-500" />
                
                <span className="text-xl font-bold bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent relative z-10">
                  Connect With the Universe
                </span>
                <div className="relative z-10">
                  <ArrowRight className="w-6 h-6 text-purple-300 group-hover:translate-x-2 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-purple-300 rounded-full blur-sm opacity-30 animate-pulse" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes shooting-star {
          0% {
            transform: translateX(-100px) translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(300px) translateY(-150px);
            opacity: 0;
          }
        }
        
        .float-in-animation {
          animation: float-in 1s ease-out forwards;
        }
        
        @keyframes float-in {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .fade-in-up-animation {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .slide-in-right-animation {
          animation: slide-in-right 0.5s ease-out forwards;
        }
        
        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .glow-pulse-animation {
          animation: glow-pulse 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow-pulse {
          0% {
            text-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
            filter: drop-shadow(0 0 20px rgba(147, 51, 234, 0.3));
          }
          100% {
            text-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
            filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.5));
          }
        }
        
        .orbital-spin {
          animation-duration: 20s;
        }
      `}</style>
    </div>
  );
};

export default ProductsSection;
