
import React, { useEffect, useState } from 'react';

const CosmicBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; size: string; delay: string }>>([]);
  const [nebulas, setNebulas] = useState<Array<{ id: number; left: string; top: string; size: string; color: string; delay: string }>>([]);
  const [galaxies, setGalaxies] = useState<Array<{ id: number; left: string; top: string; size: string; delay: string }>>([]);
  const [supernovas, setSupernovas] = useState<Array<{ id: number; left: string; top: string; delay: string }>>([]);
  const [shootingStars, setShootingStars] = useState<Array<{ id: number; delay: string }>>([]);

  useEffect(() => {
    // Generate more stars
    const newStars = [];
    for (let i = 0; i < 400; i++) {
      newStars.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 3 + 1}px`,
        delay: `${Math.random() * 5}s`
      });
    }
    setStars(newStars);

    // Enhanced nebulas with more variety
    const nebulaColors = [
      'rgba(139, 92, 246, 0.2)',
      'rgba(236, 72, 153, 0.18)',
      'rgba(59, 130, 246, 0.18)',
      'rgba(168, 85, 247, 0.15)',
      'rgba(34, 197, 94, 0.12)',
      'rgba(234, 179, 8, 0.12)',
      'rgba(239, 68, 68, 0.15)',
      'rgba(16, 185, 129, 0.12)',
      'rgba(245, 158, 11, 0.12)'
    ];
    
    const newNebulas = [];
    for (let i = 0; i < 18; i++) {
      newNebulas.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${200 + Math.random() * 400}px`,
        color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
        delay: `${Math.random() * 12}s`
      });
    }
    setNebulas(newNebulas);

    // More galaxies
    const newGalaxies = [];
    for (let i = 0; i < 12; i++) {
      newGalaxies.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${100 + Math.random() * 150}px`,
        delay: `${Math.random() * 18}s`
      });
    }
    setGalaxies(newGalaxies);

    // Enhanced supernovas
    const newSupernovas = [];
    for (let i = 0; i < 10; i++) {
      newSupernovas.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 10}s`
      });
    }
    setSupernovas(newSupernovas);

    // Shooting stars
    const newShootingStars = [];
    for (let i = 0; i < 8; i++) {
      newShootingStars.push({
        id: i,
        delay: `${Math.random() * 15}s`
      });
    }
    setShootingStars(newShootingStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 galaxy-bg opacity-70"></div>
      
      {/* Additional deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-blue-900/10"></div>
      
      {/* Stars with enhanced twinkling */}
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

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            animationDelay: star.delay
          }}
        />
      ))}

      {/* Enhanced Nebulas */}
      {nebulas.map((nebula) => (
        <div
          key={nebula.id}
          className="nebula"
          style={{
            left: nebula.left,
            top: nebula.top,
            width: nebula.size,
            height: nebula.size,
            background: `radial-gradient(ellipse, ${nebula.color} 0%, transparent 70%)`,
            animationDelay: nebula.delay
          }}
        />
      ))}

      {/* Enhanced Galaxies */}
      {galaxies.map((galaxy) => (
        <div
          key={galaxy.id}
          className="galaxy-spiral"
          style={{
            left: galaxy.left,
            top: galaxy.top,
            width: galaxy.size,
            height: galaxy.size,
            animationDelay: galaxy.delay
          }}
        />
      ))}

      {/* Enhanced Supernovas */}
      {supernovas.map((supernova) => (
        <div
          key={supernova.id}
          className="supernova"
          style={{
            left: supernova.left,
            top: supernova.top,
            animationDelay: supernova.delay
          }}
        />
      ))}

      {/* Enhanced Constellation Lines */}
      <div className="absolute top-1/6 left-1/5 constellation-line w-40 transform rotate-15"></div>
      <div className="absolute top-2/5 right-1/4 constellation-line w-32 transform -rotate-30"></div>
      <div className="absolute bottom-1/4 left-1/3 constellation-line w-48 transform rotate-45"></div>
      <div className="absolute top-1/2 right-1/6 constellation-line w-36 transform rotate-75"></div>
      <div className="absolute bottom-1/3 right-1/2 constellation-line w-28 transform -rotate-60"></div>
      <div className="absolute top-1/5 left-1/2 constellation-line w-24 transform rotate-120"></div>
      <div className="absolute bottom-1/5 left-1/6 constellation-line w-44 transform -rotate-15"></div>
      <div className="absolute top-3/4 right-1/3 constellation-line w-20 transform rotate-30"></div>

      {/* Enhanced Cosmic Dust Clouds */}
      <div className="absolute top-32 right-32 cosmic-dust w-40 h-40"></div>
      <div className="absolute bottom-48 left-48 cosmic-dust w-32 h-32"></div>
      <div className="absolute top-1/3 left-1/6 cosmic-dust w-36 h-36"></div>
      <div className="absolute bottom-1/6 right-1/4 cosmic-dust w-44 h-44"></div>
      <div className="absolute top-2/3 right-2/3 cosmic-dust w-28 h-28"></div>
      <div className="absolute bottom-2/5 left-2/5 cosmic-dust w-52 h-52"></div>

      {/* Sparks scattered throughout */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="spark absolute w-1 h-1"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
};

export default CosmicBackground;
