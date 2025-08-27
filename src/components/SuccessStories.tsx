import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Award } from "lucide-react";

const testimonials = [
  { id: 1, image: "/lovable-uploads/d534620d-bf36-48c8-8780-7aa3409b178a.png", alt: "Student testimonial 1" },
  { id: 2, image: "/lovable-uploads/7362898f-0f2b-4a14-8cf9-1a3c4b3fdf05.png", alt: "Student testimonial 2" },
  { id: 3, image: "/lovable-uploads/eb74bcd6-3ab3-489d-a2e5-0f239693f816.png", alt: "Student testimonial 3" },
  { id: 4, image: "/lovable-uploads/bde0a00b-c265-418e-9af6-51c18e1f3fb5.png", alt: "Student testimonial 4" },
  { id: 5, image: "/lovable-uploads/7d881e12-2d49-4b5a-8376-953cdafb36f0.png", alt: "Student testimonial 5" },
  { id: 6, image: "/lovable-uploads/bffb7d4f-4f95-4b5c-97d1-28d722f2f39f.png", alt: "Student testimonial 6" },
  { id: 7, image: "/lovable-uploads/e5e08d8f-234d-44a1-ae15-98e1e97416a9.png", alt: "Student testimonial 7" },
  { id: 8, image: "/lovable-uploads/dc6e28c7-339f-4939-b716-2853968de81d.png", alt: "Student testimonial 8" },
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

const SuccessStories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stars] = useState(generateStars(120));
  const [autoplay, setAutoplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance carousel with hover pause
  useEffect(() => {
    if (!autoplay || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 second delay
    return () => clearInterval(interval);
  }, [autoplay, isHovered]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
    // Resume autoplay after 10 seconds of user interaction
    setTimeout(() => setAutoplay(true), 10000);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
    // Resume autoplay after 10 seconds of user interaction
    setTimeout(() => setAutoplay(true), 10000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
    // Resume autoplay after 10 seconds of user interaction
    setTimeout(() => setAutoplay(true), 10000);
  };

  return (
    <section id="success-stories" className="relative py-28 min-h-screen bg-black overflow-hidden">
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
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.header 
          className="mb-16 text-center relative z-20"
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
              Success Stories
            </h2>
            <motion.div
              className="absolute -top-2 -right-2 text-yellow-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Award size={24} fill="currentColor" />
            </motion.div>
          </div>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Amazing testimonials from students I mentored as Section Leader at Stanford University Code in Place 2024
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-purple-300">
            <Star size={20} fill="currentColor" />
            <span className="font-semibold text-xl">43 Lessons Taught</span>
            <Star size={20} fill="currentColor" />
          </div>
        </motion.header>

        {/* Carousel Container */}
        <div 
          className="relative py-8 sm:py-12 h-[850px] flex items-center justify-center z-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative mx-auto"
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <div className="relative rounded-3xl p-[3px] bg-gradient-to-br from-purple-500/40 via-blue-600/30 to-pink-500/40 backdrop-blur-sm shadow-2xl shadow-purple-500/20">
                {/* Cosmic border animation */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="relative rounded-3xl bg-black/90 backdrop-blur-md border border-white/10 p-4 md:p-6 overflow-hidden">
                  {/* Floating elements */}
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

                  {/* Testimonial Image with fixed height */}
                  <div className="relative">
                    <motion.img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].alt}
                      className="w-full h-[550px] object-contain rounded-2xl shadow-lg border border-white/10 bg-black/20"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    
                    {/* Glow effect around image */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 blur-xl -z-10" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-black/70 hover:border-white/40 transition-all backdrop-blur-sm hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-black/70 hover:border-white/40 transition-all backdrop-blur-sm hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-12 gap-2 flex-wrap">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
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
                  layoutId="success-indicator"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-2">43</div>
            <div className="text-gray-300">Lessons Taught</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-emerald-900/30 border border-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-300">Students Mentored</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-900/30 to-purple-900/30 border border-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-2">2024</div>
            <div className="text-gray-300">Stanford Code in Place</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
