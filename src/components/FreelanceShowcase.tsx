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
    nebula: "from-purple-600 via-blue-500 to-cyan-400",
    constellation: "Andromeda",
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
    nebula: "from-pink-500 via-purple-500 to-indigo-600",
    constellation: "Orion",
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
    nebula: "from-emerald-400 via-teal-500 to-cyan-600",
    constellation: "Cassiopeia",
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
    nebula: "from-orange-400 via-red-500 to-pink-600",
    constellation: "Draco",
  },
];

// Star field component
const StarField = ({ count = 100 }) => {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.8 + 0.2,
    animationDelay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: star.animationDelay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const GalacticFreelanceShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  return (
    <section id="freelance" className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900">
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/20 to-indigo-900/30" />
        <StarField count={150} />
        
        {/* Nebula effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/15 to-teal-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative inline-block"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-purple-500/20 to-pink-500/30 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <h2 className="relative z-10 text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300">
              Freelance Showcase
            </h2>
            <motion.div
              className="flex items-center justify-center gap-2 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Star className="w-4 h-4 text-cyan-400 fill-current" />
              <span className="text-cyan-200 text-sm tracking-wider">GALACTIC PORTFOLIO</span>
              <Star className="w-4 h-4 text-cyan-400 fill-current" />
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 text-cyan-100/80 max-w-2xl mx-auto text-lg"
          >
            Journey through the cosmos of client projects that delivered stellar results across the digital universe.
          </motion.p>
        </header>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[600px] perspective-1000">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.6 },
                  scale: { duration: 0.6 },
                  rotateY: { duration: 0.6 },
                }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  {/* Main Card */}
                  <motion.div
                    className={`relative w-full max-w-4xl mx-auto h-full rounded-3xl p-[2px] bg-gradient-to-br ${items[currentIndex].nebula} shadow-2xl`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Cosmic shimmer */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
                    />

                    <div className="relative h-full bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 overflow-hidden">
                      {/* Floating particles */}
                      <div className="absolute inset-0 overflow-hidden">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-300/60 rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              y: [0, -20, 0],
                              opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                              duration: 3 + Math.random() * 2,
                              repeat: Infinity,
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-6 mb-8">
                          <div>
                            <motion.h3
                              className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              {items[currentIndex].title}
                            </motion.h3>
                            <motion.p
                              className="text-cyan-100/80 mt-2 text-lg"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              {items[currentIndex].subtitle}
                            </motion.p>
                          </div>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-2">
                              {items[currentIndex].constellation}
                            </Badge>
                          </motion.div>
                        </div>

                        {/* Body */}
                        <motion.div
                          className="space-y-6 text-cyan-50/90 leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div>
                            <span className="font-bold text-cyan-300">⚡ Challenge:</span>
                            <p className="mt-1">{items[currentIndex].challenge}</p>
                          </div>
                          
                          <div>
                            <span className="font-bold text-purple-300">🚀 Solution:</span>
                            <p className="mt-1">{items[currentIndex].solution}</p>
                          </div>
                          
                          <div>
                            <span className="font-bold text-pink-300">✨ Impact:</span>
                            <p className="mt-1">{items[currentIndex].impact}</p>
                          </div>

                          <div>
                            <p className="font-bold text-cyan-300 mb-3">🛸 Tech Stack:</p>
                            <div className="flex flex-wrap gap-2">
                              {items[currentIndex].tech.map((tech, i) => (
                                <motion.div
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.6 + i * 0.1 }}
                                >
                                  <Badge 
                                    variant="outline" 
                                    className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400/50 text-cyan-200 hover:scale-105 transition-transform"
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 border-t border-cyan-500/20">
                            <span className="font-bold text-emerald-300">🎯 Client Type:</span>
                            <p className="text-emerald-200/80 mt-1">{items[currentIndex].client}</p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Cosmic accents */}
                      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${items[currentIndex].nebula} rounded-full blur-3xl opacity-30`} />
                      <div className={`absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-tr ${items[currentIndex].nebula} rounded-full blur-3xl opacity-20`} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
            <motion.button
              onClick={() => navigate(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-full bg-gradient-to-r from-purple-600/80 to-cyan-600/80 backdrop-blur-xl border border-cyan-400/30 text-white hover:from-purple-500 hover:to-cyan-500 transition-all shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
            <motion.button
              onClick={() => navigate(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-full bg-gradient-to-r from-cyan-600/80 to-purple-600/80 backdrop-blur-xl border border-cyan-400/30 text-white hover:from-cyan-500 hover:to-purple-500 transition-all shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {items.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full border-2 transition-all ${
                  index === currentIndex
                    ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                    : "bg-transparent border-cyan-400/50 hover:border-cyan-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Additional cosmic elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-indigo-900/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default GalacticFreelanceShowcase;
