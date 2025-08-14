import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./ui/badge";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

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
    nebula: "from-purple-500/30 via-blue-600/20 to-pink-500/30",
    accent: "from-purple-400 to-pink-400"
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
    nebula: "from-cyan-500/30 via-teal-600/20 to-emerald-500/30",
    accent: "from-cyan-400 to-emerald-400"
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
    nebula: "from-orange-500/30 via-red-600/20 to-rose-500/30",
    accent: "from-orange-400 to-rose-400"
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
    nebula: "from-indigo-500/30 via-violet-600/20 to-purple-500/30",
    accent: "from-indigo-400 to-purple-400"
  },
];

// Generate random stars
const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.8 + 0.2,
    delay: Math.random() * 2
  }));
};

const FreelanceShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stars] = useState(generateStars(150));
  const [autoplay, setAutoplay] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setAutoplay(false);
  };

  const getCardPosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return { x: 0, y: 0, z: 0, scale: 1, opacity: 1 };
    if (diff === 1 || diff === -items.length + 1) return { x: 320, y: 20, z: -1, scale: 0.9, opacity: 0.7 };
    if (diff === -1 || diff === items.length - 1) return { x: -320, y: 20, z: -1, scale: 0.9, opacity: 0.7 };
    return { x: diff > 0 ? 600 : -600, y: 40, z: -2, scale: 0.8, opacity: 0 };
  };

  return (
    <section id="freelance" className="relative py-24 min-h-screen bg-black overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        {/* Nebula Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-black opacity-60" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-emerald-600/15 to-teal-600/15 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Animated Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + star.delay,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
        
        {/* Shooting Stars */}
        <motion.div
          className="absolute top-1/4 left-0 w-px h-px bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"
          animate={{
            x: ["-100px", "100vw"],
            y: [0, "50px"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 8,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-0 w-px h-px bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"
          animate={{
            x: ["100px", "-100vw"],
            y: [0, "-30px"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 12,
            ease: "easeOut",
            delay: 4,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.header 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500/30 via-cyan-400/20 to-pink-500/30 blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <h2 className="relative z-10 text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Galactic Projects
            </h2>
            <motion.div
              className="absolute -top-2 -right-2 text-yellow-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Star size={24} fill="currentColor" />
            </motion.div>
          </div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Journey through the constellation of client projects across the digital universe
          </p>
        </motion.header>

        {/* Carousel Container */}
        <div className="relative h-[600px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {items.map((card, index) => {
              const position = getCardPosition(index);
              const isActive = index === currentIndex;
              
              return (
                <motion.div
                  key={`${card.title}-${index}`}
                  className="absolute w-80 md:w-96"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    x: position.x,
                    y: position.y,
                    z: position.z,
                    scale: position.scale,
                    opacity: position.opacity,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className={`relative rounded-3xl p-[2px] bg-gradient-to-br ${card.nebula} backdrop-blur-sm ${isActive ? 'shadow-2xl shadow-purple-500/20' : ''}`}>
                    {/* Cosmic border animation */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />
                    )}
                    
                    <div className="relative rounded-3xl bg-black/80 backdrop-blur-md border border-white/10 p-6 md:p-8">
                      {/* Floating elements */}
                      {isActive && (
                        <>
                          <motion.div
                            className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full"
                            animate={{
                              y: [-5, 5, -5],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.div
                            className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full"
                            animate={{
                              x: [-3, 3, -3],
                              opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1,
                            }}
                          />
                        </>
                      )}

                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {card.title}
                          </h3>
                          <p className="text-gray-400 mt-2 text-sm md:text-base">{card.subtitle}</p>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`shrink-0 bg-gradient-to-r ${card.accent} text-black border-0 font-semibold`}
                        >
                          PROJECT
                        </Badge>
                      </div>

                      {/* Content */}
                      <div className="space-y-4 text-sm md:text-base leading-relaxed">
                        <div>
                          <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Challenge:</span>
                          <p className="text-gray-300 mt-1">{card.challenge}</p>
                        </div>
                        
                        <div>
                          <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Solution:</span>
                          <p className="text-gray-300 mt-1">{card.solution}</p>
                        </div>
                        
                        <div>
                          <span className="font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Impact:</span>
                          <p className="text-gray-300 mt-1">{card.impact}</p>
                        </div>

                        <div className="pt-3">
                          <p className="font-semibold text-white mb-3">Technologies:</p>
                          <div className="flex flex-wrap gap-2">
                            {card.tech.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="outline" 
                                className="bg-white/5 text-gray-300 border-white/20 hover:bg-white/10 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2 border-t border-white/10">
                          <p className="font-semibold text-white">Client Type:</p>
                          <p className="text-gray-400 mt-1">{card.client}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-black/70 hover:border-white/40 transition-all backdrop-blur-sm"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-black/70 hover:border-white/40 transition-all backdrop-blur-sm"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-12 gap-3">
          {items.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-3 h-3 rounded-full border transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white border-white shadow-lg shadow-white/30' 
                  : 'bg-transparent border-white/40 hover:border-white/70'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
                  layoutId="indicator"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelanceShowcase;
