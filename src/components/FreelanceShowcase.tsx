import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  },
];

const FreelanceShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div
              className="w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, 0.8)`
              }}
            />
          </div>
        ))}
      </div>

      {/* Nebula Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 via-pink-500/30 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-cyan-500/30 via-blue-600/20 to-purple-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative inline-block"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 via-pink-600/40 to-blue-600/30 blur-xl rounded-full animate-pulse" />
            <h2 className="relative z-10 text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent tracking-tight">
              Freelance Showcase
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-xl text-purple-200 max-w-3xl mx-auto"
          >
            Selected client projects delivering real impact across the digital cosmos
          </motion.p>
        </header>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-96 md:h-[500px] perspective-1000">
            <AnimatePresence mode="wait">
              {items.map((item, index) => {
                const offset = (index - currentIndex + items.length) % items.length;
                const isActive = offset === 0;
                const isNext = offset === 1;
                const isPrev = offset === items.length - 1;
                const isVisible = isActive || isNext || isPrev;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={`${item.title}-${currentIndex}`}
                    className="absolute inset-0 cursor-pointer"
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isNext ? '70%' : isPrev ? '-70%' : '200%',
                      scale: isActive ? 1 : 0.85,
                      rotateY: isActive ? 0 : isNext ? -25 : isPrev ? 25 : 0,
                      z: isActive ? 100 : isNext ? 50 : isPrev ? 50 : 0,
                      opacity: isActive ? 1 : 0.7,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.7
                    }}
                    onClick={() => !isActive && goToSlide(index)}
                    whileHover={!isActive ? { scale: 0.9, opacity: 0.9 } : {}}
                  >
                    <div className="relative w-full h-full">
                      {/* Card Glow Effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-cyan-500/40 rounded-3xl blur-lg opacity-75 animate-pulse" />
                      
                      {/* Main Card */}
                      <div className="relative h-full bg-gradient-to-br from-slate-800/90 via-purple-900/80 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-8 overflow-hidden">
                        {/* Floating Particles */}
                        <div className="absolute inset-0 overflow-hidden">
                          {[...Array(20)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-white/40 rounded-full animate-float"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                              }}
                            />
                          ))}
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col">
                          <div className="mb-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                              {item.title}
                            </h3>
                            <p className="text-purple-200 text-sm md:text-base">
                              {item.subtitle}
                            </p>
                          </div>

                          <div className="flex-1 space-y-4 text-sm md:text-base">
                            <div>
                              <span className="text-cyan-400 font-semibold">Challenge:</span>
                              <p className="text-gray-300 mt-1 leading-relaxed">{item.challenge}</p>
                            </div>
                            
                            <div>
                              <span className="text-purple-400 font-semibold">Solution:</span>
                              <p className="text-gray-300 mt-1 leading-relaxed">{item.solution}</p>
                            </div>
                            
                            <div>
                              <span className="text-pink-400 font-semibold">Impact:</span>
                              <p className="text-gray-300 mt-1 leading-relaxed">{item.impact}</p>
                            </div>

                            <div className="pt-3">
                              <span className="text-indigo-400 font-semibold mb-2 block">Tech Stack:</span>
                              <div className="flex flex-wrap gap-2">
                                {item.tech.map((tech, techIndex) => (
                                  <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: techIndex * 0.1 }}
                                    className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border border-purple-400/30 rounded-full text-xs text-purple-200 backdrop-blur-sm"
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </div>
                            </div>

                            <div className="pt-3">
                              <span className="text-blue-400 font-semibold">Client:</span>
                              <p className="text-gray-300 mt-1">{item.client}</p>
                            </div>
                          </div>
                        </div>

                        {/* Corner Decorations */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-400/40 to-transparent rounded-full blur-sm" />
                        <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-cyan-400/40 to-transparent rounded-full blur-sm" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-purple-600/20 hover:bg-purple-600/40 backdrop-blur-sm border border-purple-400/30 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-purple-600/20 hover:bg-purple-600/40 backdrop-blur-sm border border-purple-400/30 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3 mt-12">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-400 shadow-lg shadow-purple-400/50 scale-125'
                    : 'bg-purple-600/40 hover:bg-purple-500/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FreelanceShowcase;
