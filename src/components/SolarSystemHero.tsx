import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Mic, Twitter, Star, Sparkles, Bot, ArrowRight, Zap, Atom } from 'lucide-react';
const SolarSystemHero = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; size: string; delay: string }>>([]);
  const [hoveredCard, setHoveredCard] = useState(null);

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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 nebula-glow">
            Explore My Universe
          </button>
          <Link to="/services" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 nebula-glow">
            View Services
          </Link>
          <button className="px-8 py-4 glass-effect rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300">
            Connect with Me
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div className="relative z-30 mt-32 container mx-auto px-6">
        {/* Products Header */}
        <div className="text-center mb-24 relative">
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
        </div>

        {/* Products Grid */}
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
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {product.description}
                    </p>
                    
                    {/* Key Features */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wide opacity-70">Key Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {product.keyFeatures.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.featureColor} flex-shrink-0`} />
                            <span className="text-sm text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Section */}
                  <div className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 uppercase tracking-wide">Constellation:</span>
                        <span className={`text-sm font-medium ${colors.textColor}`}>{product.constellation}</span>
                      </div>
                      <Link to="/products" className={`group/btn inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${colors.featureColor} text-white font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                        Explore
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Link to="/products" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
            <Zap className="w-5 h-5" />
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
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
