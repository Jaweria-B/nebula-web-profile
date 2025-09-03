import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Mic, Twitter, Star, Sparkles, Bot, ArrowRight, Zap, Atom } from 'lucide-react';
const SolarSystemHero = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; size: string; delay: string }>>([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const products = [
    {
      title: "EmailCurator",
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

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: `${Math.random() * 3 + 1}px`,
          delay: `${Math.random() * 3}s`
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden flex-col gap-12 py-10">
      {/* Animated Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay
          }}
        />
      ))}

      {/* Meteors */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="meteor"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}

      {/* Solar System Container */}
      <div className="absolute top-20 right-20 z-10">
        <div className="relative w-[500px] h-[500px]">
          {/* Sun */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sun z-20"></div>
          
          {/* Planets */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="planet mercury"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="planet venus"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="planet earth"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="planet mars"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="planet jupiter"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="planet saturn"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="planet uranus"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="planet neptune"></div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 text-center max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <span className="text-sm uppercase tracking-widest text-blue-400 font-semibold">
            Software Engineer & Freelancer
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="text-gradient">Jaweria</span>
          <br />
          <span className="text-white">Batool</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences across the universe of Web Development, 
          Machine Learning, and AI Agents with 3+ years of professional expertise.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-500/60 via-indigo-600/50 to-purple-600/50 rounded-full text-white font-semibold hover:from-indigo-600/70 hover:to-purple-700/65 transition-transform duration-200 transform hover:-translate-y-0.5 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/40">
            Explore My Universe
          </button>
          
          <Link to="/services" className="px-8 py-4 bg-gradient-to-r from-purple-500/55 via-purple-600/45 to-pink-600/45 rounded-full text-white font-semibold hover:from-purple-600/65 hover:to-pink-700/60 transition-transform duration-200 transform hover:-translate-y-0.5 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/40">
            View Services
          </Link>    
         <button
          onClick={() => {
            document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-8 py-4 glass-effect rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
        >
          Connect with Me
        </button>
        </div>
      </div>

      {/* Products Section */}
      <div className="relative z-30 mt-32 container mx-auto px-6">
        {/* Products Header */}
        <div className="text-center mb-24 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 group hover:bg-white/8 transition-all duration-700 hover:scale-105">
            <div className="relative">
              <Sparkles className="w-6 h-6 text-purple-300" style={{animation: 'gentleSpin 12s linear infinite'}} />
              <div className="absolute inset-0 bg-purple-300 rounded-full blur-sm opacity-40" style={{animation: 'gentlePulse 3s ease-in-out infinite'}} />
            </div>
            <span className="text-lg font-medium text-gradient">
              AI Solutions 
            </span>
            <Sparkles className="w-5 h-5 text-cyan-300" style={{animation: 'gentlePulse 2s ease-in-out infinite'}} />
          </div>
          
          <div className="relative inline-block">
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
                My Product Universe
              </span>
            </h2>
            <div
              className="absolute -top-2 -right-2 text-yellow-400"
              style={{
                animation: 'spin 20s linear infinite'
              }}
            >
              <Star size={24} fill="currentColor" />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed opacity-90" style={{animation: 'fadeInUp 1s ease-out 0.5s both'}}>
            Discover my constellation of intelligent tools designed to automate, enhance, 
            and revolutionize your digital experience with cutting-edge AI technology.
          </p>
        </div>
    
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20 px-6">
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

      {/* Constellation Lines */}
      <div className="absolute top-1/4 left-1/4 constellation-line w-32 transform rotate-12"></div>
      <div className="absolute top-3/4 right-1/4 constellation-line w-24 transform -rotate-45"></div>
      <div className="absolute bottom-1/4 left-1/3 constellation-line w-40 transform rotate-45"></div>
    </div>
  );
};

export default SolarSystemHero;
