import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PhoneCall, Lightbulb, Code2, ShieldCheck, Rocket, Stars, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "Understanding your business needs and automation goals through deep space exploration of your requirements",
    Icon: PhoneCall,
    color: "from-blue-600 to-cyan-400",
    glow: "shadow-blue-500/50",
    nebula: "from-blue-500/20 via-cyan-500/10 to-transparent"
  },
  {
    num: "02",
    title: "Solution Design",
    desc: "Creating a custom automation strategy with clear deliverables, mapped like constellations in the digital universe",
    Icon: Lightbulb,
    color: "from-purple-600 to-pink-400",
    glow: "shadow-purple-500/50",
    nebula: "from-purple-500/20 via-pink-500/10 to-transparent"
  },
  {
    num: "03",
    title: "Development Sprint",
    desc: "Building your solution with regular progress updates, crafting code with the precision of stellar engineering",
    Icon: Code2,
    color: "from-emerald-600 to-teal-400",
    glow: "shadow-emerald-500/50",
    nebula: "from-emerald-500/20 via-teal-500/10 to-transparent"
  },
  {
    num: "04",
    title: "Testing & Refinement",
    desc: "Ensuring 99.9% reliability before deployment through rigorous cosmic-level quality assurance",
    Icon: ShieldCheck,
    color: "from-orange-600 to-yellow-400",
    glow: "shadow-orange-500/50",
    nebula: "from-orange-500/20 via-yellow-500/10 to-transparent"
  },
  {
    num: "05",
    title: "Launch & Support",
    desc: "Smooth deployment with ongoing maintenance options, launching your project into the digital cosmos",
    Icon: Rocket,
    color: "from-rose-600 to-pink-400",
    glow: "shadow-rose-500/50",
    nebula: "from-rose-500/20 via-pink-500/10 to-transparent"
  },
];

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated stars background
const AnimatedStars = () => {
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    twinkle: Math.random() * 3 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.twinkle,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const MyProcessSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const starsY = useTransform(scrollY, [0, 1000], [0, -100]);

  // Auto-cycle through cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="process" className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900">
      {/* Animated background elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <AnimatedStars />
        <FloatingParticles />
      </motion.div>

      {/* Galaxy spiral background */}
      <motion.div 
        style={{ y: starsY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-radial from-purple-600/30 via-blue-600/20 to-transparent blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-radial from-pink-600/30 via-purple-600/20 to-transparent blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-conic from-blue-600/10 via-purple-600/10 via-pink-600/10 to-blue-600/10 blur-3xl animate-spin-slow" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with cosmic effects */}
        <motion.header 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Stars className="w-12 h-12 text-purple-400" />
          </motion.div>
          
          <h2 className="text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 relative">
            My Process
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-xl -z-10 rounded-full"
            />
          </h2>
          
          <p className="text-gray-300 text-xl leading-relaxed">
            Journey through the cosmos of development, from conception to stellar deployment
          </p>
        </motion.header>

        {/* Main process visualization */}
        <div className="max-w-4xl mx-auto">
          {/* Stacked cards container */}
          <div className="relative h-[600px] flex items-center justify-center">
            {steps.map((step, index) => {
              const isActive = index === activeCard;
              const distanceFromActive = Math.abs(index - activeCard);
              const isVisible = distanceFromActive <= 2;

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="absolute cursor-pointer"
                  onClick={() => setActiveCard(index)}
                  animate={{
                    y: isActive ? 0 : (index - activeCard) * 8,
                    scale: isActive ? 1 : 0.95 - (distanceFromActive * 0.05),
                    rotateX: isActive ? 0 : Math.min(distanceFromActive * 5, 15),
                    rotateY: isActive ? 0 : (index - activeCard) * 2,
                    opacity: isVisible ? (isActive ? 1 : 0.7 - (distanceFromActive * 0.2)) : 0,
                    zIndex: steps.length - Math.abs(index - activeCard),
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ 
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                  }}
                >
                  {/* Card */}
                  <motion.article
                    whileHover={{ 
                      scale: isActive ? 1.02 : 0.98,
                      rotateX: -2,
                    }}
                    className={`group relative w-[500px] h-[400px] rounded-3xl p-[2px] bg-gradient-to-br ${
                      isActive ? 'from-white/40 via-purple-500/60 to-pink-500/40' : 'from-white/10 via-gray-500/20 to-transparent'
                    } backdrop-blur-xl ${isActive ? step.glow + ' shadow-2xl' : 'shadow-lg'}`}
                    style={{
                      boxShadow: isActive 
                        ? `0 25px 50px -12px rgba(139, 92, 246, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)`
                        : `0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)`
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <motion.div
                        animate={{ x: isActive ? ['-100%', '100%'] : ['-100%', '-100%'] }}
                        transition={{ 
                          duration: isActive ? 2 : 0, 
                          repeat: isActive ? Infinity : 0,
                          ease: "linear"
                        }}
                        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent`}
                      />
                    </div>

                    <div className="relative w-full h-full rounded-3xl bg-slate-900/95 backdrop-blur-xl p-8 overflow-hidden flex flex-col justify-between">
                      {/* Nebula background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.nebula} opacity-40`} />
                      
                      {/* Content */}
                      <div className="relative z-10 flex-1 flex flex-col">
                        {/* Step number and icon */}
                        <div className="flex items-start justify-between mb-6">
                          <motion.div
                            animate={{ 
                              rotate: isActive ? 360 : 0,
                              scale: isActive ? 1.1 : 1,
                            }}
                            transition={{ duration: 1 }}
                            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg ${step.glow}`}
                          >
                            <step.Icon className="w-10 h-10 text-white" />
                          </motion.div>
                          
                          <motion.span
                            animate={{ 
                              scale: isActive ? 1.1 : 0.9,
                              opacity: isActive ? 0.3 : 0.15,
                            }}
                            className={`text-9xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}
                          >
                            {step.num}
                          </motion.span>
                        </div>

                        {/* Title and description */}
                        <div className="flex-1 flex flex-col justify-center">
                          <motion.h3 
                            animate={{ 
                              y: isActive ? 0 : 10,
                              opacity: isActive ? 1 : 0.8,
                            }}
                            className="text-4xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors"
                          >
                            {step.title}
                          </motion.h3>
                          
                          <motion.p 
                            animate={{ 
                              opacity: isActive ? 1 : 0.7,
                              y: isActive ? 0 : 5,
                            }}
                            className="text-gray-300 text-xl leading-relaxed"
                          >
                            {step.desc}
                          </motion.p>
                        </div>

                        {/* Progress indicator */}
                        {isActive && (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, delay: 0.3 }}
                            className={`absolute bottom-0 left-0 h-2 bg-gradient-to-r ${step.color} rounded-b-3xl`}
                          />
                        )}
                      </div>

                      {/* Floating elements */}
                      {isActive && (
                        <>
                          <motion.div
                            animate={{ 
                              y: [0, -15, 0],
                              rotate: [0, 180, 360],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{ 
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute -top-6 -right-6"
                          >
                            <Sparkles className="w-8 h-8 text-purple-400 opacity-80" />
                          </motion.div>

                          <motion.div
                            animate={{ 
                              y: [0, 15, 0],
                              x: [0, 8, 0],
                              scale: [1, 1.5, 1],
                            }}
                            transition={{ 
                              duration: 5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1
                            }}
                            className="absolute -bottom-3 -left-3"
                          >
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${step.color} opacity-80 shadow-lg`} />
                          </motion.div>
                        </>
                      )}
                    </div>
                  </motion.article>

                  {/* Orbital rings for active card */}
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-20px] rounded-3xl border-2 border-dashed border-purple-500/40"
                      />
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-40px] rounded-3xl border border-dotted border-pink-500/30"
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Process navigation dots */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center space-x-3 mt-16"
          >
            {steps.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCard(index)}
                animate={{
                  scale: index === activeCard ? 1.5 : 1,
                  opacity: index === activeCard ? 1 : 0.5,
                }}
                whileHover={{ scale: 1.3 }}
                className={`w-3 h-3 rounded-full ${
                  index === activeCard 
                    ? `bg-gradient-to-r ${steps[index].color}` 
                    : 'bg-gray-500'
                } transition-all duration-300`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MyProcessSection;
