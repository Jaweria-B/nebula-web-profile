import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./ui/badge";
import { ChevronLeft, ChevronRight, Star, Zap, Orbit } from "lucide-react";

const items = [
  {
    title: "Voice Assistant Pro",
    subtitle: "Smart desktop voice automation using LiveKit & GPT-4",
    challenge: "Client needed a software voice agent to automate common computer tasks (not a mobile app).",
    solution:
      "Desktop voice assistant built with LiveKit for real-time audio, GPT-4 for intent parsing/agent orchestration, and streaming TTS to perform system actions (volume, brightness, open apps, shortcuts).",
    impact: "Automated routine computer tasks and sped up hands-free workflows.",
    tech: [
      "Python",
      "OpenAI (GPT-4)",
      "LiveKit",
      "Streaming TTS",
      "SCT",
      "Agent frameworks",
    ],
    client: "Product / Software Client",
    color: "from-purple-500/30 to-blue-600/30",
    accent: "from-purple-400 to-blue-500",
  },
  {
    title: "XBot Automation",
    subtitle: "EdgePower-driven Twitter/X automation with AI",
    challenge:
      "Teams managing many accounts needed reliable automation for posting and engagement.",
    solution:
      "Multi-account automation using EdgePower plus Python automation libraries; Gemini/LLM for content/reply generation; scheduling, safe rate handling and browser fallback for edge cases.",
    impact:
      "Fully automated engagement flows (liking, retweeting, following, replies) and hashtag/profile engagement.",
    tech: [
      "EdgePower",
      "Python automation libs",
      "Gemini",
      "Playwright fallback",
      "MongoDB",
      "Docker",
    ],
    client: "Digital Marketing / Growth Teams",
    color: "from-cyan-500/30 to-teal-600/30",
    accent: "from-cyan-400 to-teal-500",
  },
  {
    title: "Email Automation",
    subtitle: "AI-powered email generation and sending pipeline",
    challenge:
      "Sales teams struggled with personalised outreach and campaign delivery.",
    solution:
      "React editor + Node.js backend pipeline that uses OpenAI/Gemini/DeepSeek for generation and SMTP APIs for sending and tracking.",
    impact:
      "Automated email creation, personalization and sending workflows.",
    tech: ["React", "OpenAI/GPT-4", "Gemini", "DeepSeek", "Node.js", "SMTP APIs"],
    client: "B2B Sales / Outreach Teams",
    color: "from-pink-500/30 to-rose-600/30",
    accent: "from-pink-400 to-rose-500",
  },
  {
    title: "DataHarvest Bot",
    subtitle: "Robust web scraping & data automation",
    challenge:
      "Need recurring structured data collection from many sources including JS-heavy sites while avoiding blocks.",
    solution:
      "Modular scrapers using Selenium/Playwright + BeautifulSoup, proxy rotation, adaptive selectors, dedupe and exports to DB/S3 with monitoring.",
    impact:
      "Automated large-scale data collection and export pipelines for analytics/reporting.",
    tech: [
      "Selenium",
      "Playwright",
      "BeautifulSoup",
      "Proxy rotation",
      "AWS (S3/EC2/Lambda)",
      "Postgres",
      "Docker",
    ],
    client: "Data & Analytics Teams",
    color: "from-emerald-500/30 to-green-600/30",
    accent: "from-emerald-400 to-green-500",
  },
];

const FloatingStars = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full opacity-60"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.5, 1.2, 0.5],
        }}
        transition={{
          duration: 2 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

const GalaxyBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Main nebula clouds */}
    <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-radial from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-radial from-pink-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/15 via-teal-500/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
    
    {/* Distant galaxies */}
    <div className="absolute top-32 right-1/4 w-32 h-32 bg-gradient-radial from-yellow-400/20 to-transparent rounded-full blur-2xl animate-ping" style={{ animationDelay: "3s", animationDuration: "4s" }} />
    <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-radial from-green-400/20 to-transparent rounded-full blur-2xl animate-ping" style={{ animationDelay: "1s", animationDuration: "5s" }} />
    
    {/* Cosmic dust trails */}
    <div className="absolute inset-0">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{
            left: `${Math.random() * 60}%`,
            top: `${Math.random() * 80}%`,
            width: `${100 + Math.random() * 200}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            x: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  </div>
);

const FreelanceShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  return (
    <section id="freelance" className="relative py-32 min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* Cosmic Background */}
      <GalaxyBackground />
      <FloatingStars />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.header 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative inline-block mb-6">
            <motion.div
              className="absolute -inset-8 rounded-full bg-gradient-to-r from-purple-500/30 via-blue-500/20 to-cyan-500/30 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            />
            <h2 className="relative z-10 text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent tracking-tight">
              Freelance Showcase
            </h2>
            <motion.div
              className="absolute top-0 right-0 text-yellow-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Star className="w-6 h-6" />
            </motion.div>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Journey through the cosmos of innovation with selected client projects delivering stellar impact across the digital universe
          </p>
        </motion.header>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card Stack */}
          <div className="relative h-[600px] flex items-center justify-center perspective-1000">
            <AnimatePresence mode="wait">
              {items.map((card, index) => {
                const isActive = index === currentIndex;
                const offset = index - currentIndex;
                
                return (
                  <motion.div
                    key={card.title}
                    className={`absolute w-full max-w-2xl ${isActive ? 'z-30' : offset === 1 || offset === -3 ? 'z-20' : offset === -1 || offset === 3 ? 'z-10' : 'z-0'}`}
                    initial={false}
                    animate={{
                      x: `${offset * 60}px`,
                      y: `${Math.abs(offset) * 20}px`,
                      rotateY: `${offset * 25}deg`,
                      rotateX: `${Math.abs(offset) * 10}deg`,
                      scale: isActive ? 1 : 0.8 - Math.abs(offset) * 0.1,
                      opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.3,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <motion.div
                      className={`relative rounded-3xl p-[2px] bg-gradient-to-br ${card.color} backdrop-blur-xl shadow-2xl transform-gpu`}
                      whileHover={isActive ? { scale: 1.02, y: -10 } : {}}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {/* Cosmic Border Glow */}
                      <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${card.accent} opacity-20 blur-xl animate-pulse`} />
                      
                      <div className="relative rounded-3xl bg-black/80 backdrop-blur-xl p-8 border border-white/10">
                        {/* Floating Elements */}
                        <motion.div
                          className="absolute top-4 right-4 text-cyan-400"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 6, repeat: Infinity }}
                        >
                          <Orbit className="w-5 h-5 opacity-60" />
                        </motion.div>
                        
                        <motion.div
                          className="absolute bottom-4 left-4 text-purple-400"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5] 
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Zap className="w-4 h-4" />
                        </motion.div>

                        {/* Header */}
                        <div className="flex items-start justify-between gap-4 mb-6">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                              {card.title}
                            </h3>
                            <p className="text-slate-300 text-lg leading-relaxed">{card.subtitle}</p>
                          </div>
                          <Badge 
                            variant="secondary" 
                            className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-cyan-200 border-cyan-500/30 shrink-0"
                          >
                            Client Project
                          </Badge>
                        </div>

                        {/* Content */}
                        <div className="space-y-4 text-slate-200">
                          <div>
                            <span className="text-cyan-400 font-semibold">⚡ Challenge:</span>
                            <p className="mt-1 leading-relaxed">{card.challenge}</p>
                          </div>
                          
                          <div>
                            <span className="text-purple-400 font-semibold">🚀 Solution:</span>
                            <p className="mt-1 leading-relaxed">{card.solution}</p>
                          </div>
                          
                          <div>
                            <span className="text-emerald-400 font-semibold">💫 Impact:</span>
                            <p className="mt-1 leading-relaxed">{card.impact}</p>
                          </div>

                          <div className="pt-4">
                            <p className="text-yellow-400 font-semibold mb-3">🛸 Tech Stack:</p>
                            <div className="flex flex-wrap gap-2">
                              {card.tech.map((tech) => (
                                <Badge 
                                  key={tech} 
                                  variant="outline" 
                                  className="bg-slate-800/50 text-slate-200 border-slate-600 hover:bg-slate-700/50 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 border-t border-slate-700">
                            <span className="text-pink-400 font-semibold">🌌 Client Type:</span>
                            <p className="mt-1 text-slate-300">{card.client}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <motion.button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
            </motion.button>

            {/* Indicators */}
            <div className="flex gap-3">
              {items.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
};

export default FreelanceShowcase;
