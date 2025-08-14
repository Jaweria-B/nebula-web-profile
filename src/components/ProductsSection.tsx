import React from 'react';
import { Star, Zap, Bot, Mail, Twitter, Mic } from 'lucide-react';

const ProductsSection = () => {
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
      gradient: "from-blue-500 via-purple-500 to-pink-500",
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
      gradient: "from-purple-500 via-blue-500 to-cyan-500",
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
      gradient: "from-cyan-500 via-teal-500 to-emerald-500",
      icon: Twitter,
      glowColor: "cyan"
    }
  ];

  return (
    <section id="products" className="py-20 relative z-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-white/20 mb-6">
            <Star className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Product Universe</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            AI-Powered Solutions
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our constellation of intelligent tools designed to automate, enhance, 
            and revolutionize your digital experience with cutting-edge AI technology.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">3</div>
              <div className="text-sm text-gray-400">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">15+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">100%</div>
              <div className="text-sm text-gray-400">Production Ready</div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            
            return (
              <div
                key={product.title}
                className="group relative"
                style={{
                  animation: `fade-in 0.6s ease-out forwards ${index * 0.2}s`,
                  opacity: 0
                }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${product.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 animate-pulse`}></div>
                
                {/* Card */}
                <div className="relative glass-effect rounded-2xl p-8 h-full border border-white/10 group-hover:border-white/20 transition-all duration-300 transform group-hover:scale-[1.02]">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${product.gradient} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-medium">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-200 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {product.keyFeatures.slice(0, 4).map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {product.keyFeatures.length > 4 && (
                        <li className="text-sm text-gray-500 italic">
                          +{product.keyFeatures.length - 4} more features...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <button className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-${product.glowColor}-500/25 transform hover:scale-[1.02]`}>
                      Explore {product.title}
                    </button>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <Bot className="w-8 h-8 text-white animate-pulse" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Ready to transform your workflow with AI-powered solutions?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;