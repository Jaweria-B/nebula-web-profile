
import React, { useEffect, useState } from 'react';

const SolarSystemHero = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; size: string; delay: string }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 200; i++) {
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
      {/* Hero Stars Background */}
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

      {/* Enhanced Solar System */}
      <div className="absolute top-16 right-16 z-10">
        <div className="relative w-[700px] h-[700px]">
          {/* Orbit rings for visual enhancement */}
          {[100, 130, 160, 190, 240, 280, 320, 350].map((radius, index) => (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full"
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`
              }}
            />
          ))}
          
          {/* Enhanced Sun with corona effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sun z-20">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full opacity-60 animate-pulse"></div>
          </div>
          
          {/* Planets with enhanced animations */}
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

      {/* Enhanced Hero Content */}
      <div className="relative z-30 text-center max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <span className="text-sm uppercase tracking-widest text-blue-400 font-semibold spark">
            Software Engineer & Freelancer
          </span>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-bold mb-8 floating-element">
          <span className="text-gradient">Jaweria</span>
          <br />
          <span className="text-white">Batool</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Crafting digital experiences across the universe of Web Development, 
          Machine Learning, and AI Agents with 3+ years of professional expertise.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 nebula-glow text-lg">
            Explore My Universe
          </button>
          <button className="px-10 py-5 glass-effect rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 text-lg">
            Connect with Me
          </button>
        </div>
      </div>

      {/* Enhanced Constellation Lines */}
      <div className="absolute top-1/5 left-1/5 constellation-line w-40 transform rotate-12"></div>
      <div className="absolute top-3/5 right-1/5 constellation-line w-32 transform -rotate-45"></div>
      <div className="absolute bottom-1/5 left-2/5 constellation-line w-48 transform rotate-30"></div>
      
      {/* Floating sparks */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="spark absolute"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default SolarSystemHero;
