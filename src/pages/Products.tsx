import React, { useState } from 'react';
import { ArrowLeft, Mail, Mic, Twitter, Star, Zap, Users, Target, BarChart3, Globe, Check, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(0);

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
      techStack: ["React", "Node.js", "Google Gemini", "OpenAI GPT-4", "DeepSeek", "SMTP APIs"],
      category: "Email Automation",
      status: "Live Platform",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      demoUrl: "http://emailcraft.uinfo.org/",
      targetAudience: "Sales Teams, Marketers, Business Professionals",
      useCases: [
        "Sales outreach campaigns",
        "Customer communication",
        "Marketing email creation",
        "Professional correspondence"
      ],
      metrics: {
        responseTime: "< 2 seconds",
        accuracy: "95%+ professional quality",
        providers: "3+ AI engines"
      },
      icon: Mail,
      glowColor: "blue"
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
      techStack: ["Python", "LiveKit", "OpenAI GPT-4", "Porcupine", "Eagle", "SQLite", "Tkinter"],
      category: "AI Assistant",
      status: "Desktop Application",
      gradient: "from-purple-500 via-blue-500 to-cyan-500",
      targetAudience: "Power Users, Developers, Productivity Enthusiasts",
      useCases: [
        "Hands-free desktop control",
        "Voice-activated web search",
        "Smart home integration",
        "Accessibility assistance"
      ],
      metrics: {
        responseTime: "< 500ms wake detection",
        accuracy: "98% speaker recognition",
        platforms: "Windows, macOS, Linux"
      },
      icon: Mic,
      glowColor: "purple"
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
      techStack: ["Python", "Selenium", "Google Gemini", "AdsPower", "GUI Framework"],
      category: "Social Media Automation",
      status: "Desktop Application",
      gradient: "from-cyan-500 via-teal-500 to-emerald-500",
      targetAudience: "Digital Marketers, Social Media Managers, Growth Teams",
      useCases: [
        "Social media marketing campaigns",
        "Brand presence management",
        "Audience growth automation",
        "Content engagement scaling"
      ],
      metrics: {
        accounts: "Unlimited profiles",
        automation: "24/7 operations",
        aiIntegration: "Smart content generation"
      },
      icon: Twitter,
      glowColor: "cyan"
    }
  ];

  const currentProduct = products[activeProduct];
  const IconComponent = currentProduct.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
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

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-white/20 mb-6">
              <Star className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-gray-300">Product Universe</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-gradient mb-6">
              AI Solutions
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our complete range of AI-powered tools designed to revolutionize 
              your digital workflow and enhance productivity.
            </p>
          </div>
        </header>

        {/* Product Navigation */}
        <div className="container mx-auto px-6 mb-12">
          <div className="flex justify-center">
            <div className="glass-effect rounded-2xl p-2 border border-white/20">
              {products.map((product, index) => {
                const ProductIcon = product.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveProduct(index)}
                    className={`relative px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                      activeProduct === index
                        ? `bg-gradient-to-r ${product.gradient} text-white shadow-lg`
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <ProductIcon className="w-5 h-5" />
                    <span className="font-medium">{product.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="container mx-auto px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="glass-effect rounded-3xl p-8 md:p-12 border border-white/20 mb-8 relative overflow-hidden">
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${currentProduct.gradient} rounded-3xl blur opacity-20 animate-pulse`}></div>
              
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentProduct.gradient} shadow-xl`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                        {currentProduct.category}
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-400">{currentProduct.status}</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {currentProduct.title}
                  </h2>
                  
                  <p className="text-xl text-blue-400 font-medium mb-6">
                    {currentProduct.subtitle}
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {currentProduct.description}
                  </p>

                  {currentProduct.demoUrl && (
                    <a
                      href={currentProduct.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${currentProduct.gradient} text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-${currentProduct.glowColor}-500/25 transition-all duration-300 transform hover:scale-105`}
                    >
                      <Globe className="w-5 h-5" />
                      Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="space-y-6">
                  {/* Metrics */}
                  <div className="glass-effect rounded-2xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-green-400" />
                      Performance Metrics
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {Object.entries(currentProduct.metrics).map(([key, value], index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="text-white font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="glass-effect rounded-2xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      Target Audience
                    </h3>
                    <p className="text-gray-300">{currentProduct.targetAudience}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features & Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Key Features */}
              <div className="glass-effect rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  Key Features
                </h3>
                <div className="space-y-4">
                  {currentProduct.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="glass-effect rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-400" />
                  Use Cases
                </h3>
                <div className="space-y-4">
                  {currentProduct.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentProduct.gradient} mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-8 glass-effect rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Star className="w-6 h-6 text-cyan-400" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {currentProduct.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${currentProduct.gradient} bg-opacity-20 border border-white/20 text-white text-sm font-medium hover:bg-opacity-30 transition-all duration-300`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;