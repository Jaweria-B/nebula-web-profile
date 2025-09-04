import React, { useState, useEffect } from 'react';
import { Star, Sparkles, Bot, Mail, Twitter, Mic, ArrowRight, Zap, Atom, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [sectionRef, setSectionRef] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef) {
        const rect = sectionRef.getBoundingClientRect();
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };
    
    if (sectionRef) {
      sectionRef.addEventListener('mousemove', handleMouseMove);
      return () => sectionRef.removeEventListener('mousemove', handleMouseMove);
    }
  }, [sectionRef]);

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

  const GalaxyStars = ({ count = 400, className = "" }) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 3 + 0.5;
      const brightness = Math.random() * 0.8 + 0.2;
      stars.push(
        <div
          key={i}
          className={`absolute bg-white rounded-full ${className}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: brightness,
            animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            boxShadow: `0 0 ${size * 3}px rgba(255,255,255,${brightness * 0.5})`
          }}
        />
      );
    }
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars}
      </div>
    );
  };

  return (
    <section 
      id="products" 
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0f1c 0%, #1a1f2e 50%, #0a0f1c 100%)' }}
      ref={setSectionRef}
    >
      {/* Enhanced Galaxy Background */}
      <div className="absolute inset-0">
        {/* Multiple Star Layers */}
        <GalaxyStars count={500} className="animate-pulse" />
        <GalaxyStars count={200} className="animate-ping opacity-30" />
        
        {/* Cosmic Dust Particles */}
        <div className="absolute inset-0">
          {Array.from({length: 50}).map((_, i) => (
            <div
              key={`dust-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `cosmicFloat ${8 + Math.random() * 12}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Gentle Mouse Trail */}
      {sectionRef && (
        <div
          className="absolute w-6 h-6 pointer-events-none z-30 opacity-60"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
            borderRadius: '50%',
            transition: 'all 0.3s ease-out',
            filter: 'blur(2px)'
          }}
        />
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Elegant Header */}
        <div className="text-center mb-24 relative">
          {/* Constellation Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-12 group hover:bg-white/8 transition-all duration-700 hover:scale-105">
            <div className="relative">
              <Sparkles className="w-6 h-6 text-purple-300" style={{animation: 'gentleSpin 12s linear infinite'}} />
              <div className="absolute inset-0 bg-purple-300 rounded-full blur-sm opacity-40" style={{animation: 'gentlePulse 3s ease-in-out infinite'}} />
            </div>
            <span className="text-lg font-medium text-gradient">
              AI Solutions • My Product Universe
            </span>
            <Sparkles className="w-5 h-5 text-cyan-300" style={{animation: 'gentlePulse 2s ease-in-out infinite'}} />
          </div>
          
          {/* Main Title */}
          <div className="relative inline-block">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
                My Product Universe
              </span>
            </h1>
            <motion.div
              className="absolute -top-2 -right-8 text-yellow-400"
              animate={{ 
                rotate: 360,
                y: [0, -10, 0],
                x: [0, 5, 0]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
            >
              <Rocket size={32} fill="currentColor" />
            </motion.div>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed opacity-90" style={{animation: 'fadeInUp 1s ease-out 0.5s both'}}>
            Discover my constellation of intelligent tools designed to automate, enhance, 
            and revolutionize your digital experience with cutting-edge AI technology.
          </p>
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            const isHovered = hoveredCard === index;
            
            const cardColors = [
              {
                primary: '#8b5cf6',
                secondary: '#ec4899',
                accent: 'purple',
                glow: 'rgba(139, 92, 246, 0.3)',
                textColor: 'text-purple-100',
                iconColor: 'text-purple-300',
                featureColor: 'from-purple-400 to-pink-400'
              },
              {
                primary: '#06b6d4',
                secondary: '#3b82f6',
                accent: 'cyan',
                glow: 'rgba(6, 182, 212, 0.3)',
                textColor: 'text-cyan-100',
                iconColor: 'text-cyan-300',
                featureColor: 'from-cyan-400 to-blue-400'
              },
              {
                primary: '#a855f7',
                secondary: '#6366f1',
                accent: 'violet',
                glow: 'rgba(168, 85, 247, 0.3)',
                textColor: 'text-violet-100',
                iconColor: 'text-violet-300',
                featureColor: 'from-violet-400 to-indigo-400'
              }
            ];
            
            const colors = cardColors[index];
            
            return (
              <div
                key={product.title}
                className="group relative"
                style={{
                  animation: `cardFloat 1.5s ease-out ${index * 0.3}s both`,
                  transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Main Card */}
                <div className="relative h-full rounded-3xl bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-700 overflow-hidden">
                  
                  {/* Header Section */}
                  <div className="relative p-8 border-b border-white/5">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div 
                          className="relative p-4 rounded-2xl backdrop-blur-sm transition-all duration-500"
                          style={{
                            background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
                            transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                          }}
                        >
                          <IconComponent className={`w-8 h-8 ${colors.iconColor} transition-all duration-500`} />
                        </div>
                        <div>
                          <h3 className={`text-2xl font-bold mb-1 ${colors.textColor} transition-all duration-500`}>
                            {product.title}
                          </h3>
                          <p className="text-sm text-slate-400 font-medium opacity-90">
                            {product.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className={`text-xs ${colors.iconColor} mb-2 opacity-80`}>
                          {product.constellation}
                        </div>
                        <div className="flex items-center gap-1 justify-end">
                          <Star className="w-3 h-3 text-yellow-400" style={{animation: 'gentlePulse 2s ease-in-out infinite'}} />
                          <span className="text-xs text-slate-400">{product.starCount}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed opacity-90 transition-all duration-500">
                      {product.description}
                    </p>
                  </div>

                  {/* Features Section */}
                  <div className="p-8">
                    <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2 mb-6">
                      <Sparkles className={`w-4 h-4 ${colors.iconColor} opacity-80`} style={{animation: 'gentlePulse 2s ease-in-out infinite'}} />
                      Cosmic Features
                    </h4>
                    
                    <div className="space-y-4 mb-8">
                      {product.keyFeatures.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm text-slate-400 group/feature hover:text-slate-300 transition-all duration-500"
                          style={{
                            animation: `slideInRight 0.6s ease-out ${featureIndex * 0.1}s both`,
                            opacity: isHovered ? 1 : 0.8,
                            transform: isHovered ? 'translateX(5px)' : 'translateX(0)'
                          }}
                        >
                          <div 
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${colors.featureColor} transition-all duration-300`}
                            style={{
                              boxShadow: isHovered ? `0 0 8px ${colors.glow}` : 'none',
                              animation: 'gentlePulse 3s ease-in-out infinite'
                            }}
                          />
                          <span className="transition-all duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a 
                      href={product.title === "EmailCraft" ? "http://emailcraft.uinfo.org/" : "#connect"}
                      target={product.title === "EmailCraft" ? "_blank" : "_self"}
                      rel={product.title === "EmailCraft" ? "noopener noreferrer" : ""}
                      className="group/btn relative w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl border backdrop-blur-sm transition-all duration-700 overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15)`,
                        borderColor: `${colors.primary}30`,
                        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)'
                      }}
                    >
                      <div 
                        className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${colors.primary}25, ${colors.secondary}25)`
                        }}
                      />
                      
                      <span className={`font-semibold ${colors.textColor} relative z-10 transition-all duration-300`}>
                        {product.title === "EmailCraft" ? "Try it Yourself" : "Want to Know More?"}
                      </span>
                      <ArrowRight className={`w-5 h-5 ${colors.iconColor} group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10`} />
                    </a>
                  </div>

                  {/* Floating Bot Icon */}
                  <div 
                    className="absolute top-4 right-4 opacity-20 group-hover:opacity-60 transition-all duration-700"
                    style={{
                      transform: isHovered ? 'rotate(15deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                      animation: 'gentleFloat 4s ease-in-out infinite'
                    }}
                  >
                    <Bot className={`w-6 h-6 ${colors.iconColor}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center relative">
          <div className="mb-8">
            <p className="text-2xl text-slate-300 mb-8 opacity-90" style={{animation: 'fadeInUp 1s ease-out 1s both'}}>
              Ready to explore the infinite cosmos of AI-powered possibilities?
            </p>
            <a 
              href="/products"
              className="group relative inline-flex items-center gap-4 px-16 py-6 bg-gradient-to-r from-purple-600/15 via-pink-600/15 to-cyan-600/15 hover:from-purple-600/25 hover:via-pink-600/25 hover:to-cyan-600/25 backdrop-blur-xl border border-white/20 hover:border-white/40 rounded-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 overflow-hidden"
              style={{animation: 'fadeInUp 1s ease-out 1.2s both'}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-cyan-600/5 group-hover:from-purple-600/15 group-hover:via-pink-600/15 group-hover:to-cyan-600/15 transition-all duration-700" />
              
              <span className="text-2xl font-bold text-gradient relative z-10">
                View Products in Detail
              </span>
              <div className="relative z-10">
                <ArrowRight className="w-7 h-7 text-purple-300 group-hover:translate-x-3 transition-transform duration-500" />
                <div className="absolute inset-0 bg-purple-300 rounded-full blur-sm opacity-30" style={{animation: 'gentlePulse 2s ease-in-out infinite'}} />
              </div>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes cosmicFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        
        @keyframes cardFloat {
          0% { opacity: 0; transform: translateY(50px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes titleGlow {
          0% { 
            text-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
            filter: drop-shadow(0 0 20px rgba(147, 51, 234, 0.3));
          }
          100% { 
            text-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
            filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.5));
          }
        }
        
        @keyframes gentlePulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes gentleSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes gentleOrbit {
          0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
        }
        
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;
