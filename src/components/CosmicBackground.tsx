
import React, { useEffect, useState } from 'react';

const CosmicBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; size: string; delay: string }>>([]);
  const [nebulas, setNebulas] = useState<Array<{ id: number; left: string; top: string; size: string; color: string; delay: string }>>([]);
  const [galaxies, setGalaxies] = useState<Array<{ id: number; left: string; top: string; size: string; delay: string }>>([]);
  const [supernovas, setSupernovas] = useState<Array<{ id: number; left: string; top: string; delay: string }>>([]);

  useEffect(() => {
    // Generate stars
    const newStars = [];
    for (let i = 0; i < 300; i++) {
      newStars.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 3 + 1}px`,
        delay: `${Math.random() * 5}s`
      });
    }
    setStars(newStars);

    // Generate nebulas
    const nebulaColors = [
      'rgba(139, 92, 246, 0.15)',
      'rgba(236, 72, 153, 0.12)',
      'rgba(59, 130, 246, 0.12)',
      'rgba(168, 85, 247, 0.10)',
      'rgba(34, 197, 94, 0.08)',
      'rgba(234, 179, 8, 0.08)',
      'rgba(239, 68, 68, 0.10)'
    ];
    
    const newNebulas = [];
    for (let i = 0; i < 12; i++) {
      newNebulas.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${150 + Math.random() * 300}px`,
        color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
        delay: `${Math.random() * 10}s`
      });
    }
    setNebulas(newNebulas);

    // Generate galaxies
    const newGalaxies = [];
    for (let i = 0; i < 8; i++) {
      newGalaxies.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${80 + Math.random() * 120}px`,
        delay: `${Math.random() * 15}s`
      });
    }
    setGalaxies(newGalaxies);

    // Generate supernovas
    const newSupernovas = [];
    for (let i = 0; i < 6; i++) {
      newSupernovas.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`
      });
    }
    setSupernovas(newSupernovas);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Background Gradient */}
      <div className="absolute inset-0 galaxy-bg opacity-60"></div>
      
      {/* Stars */}
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

      {/* Nebulas */}
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

      {/* Galaxies */}
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

      {/* Supernovas */}
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

      {/* Constellation Lines */}
      <div className="absolute top-1/4 left-1/4 constellation-line w-32 transform rotate-12"></div>
      <div className="absolute top-3/4 right-1/4 constellation-line w-24 transform -rotate-45"></div>
      <div className="absolute bottom-1/4 left-1/3 constellation-line w-40 transform rotate-45"></div>
      <div className="absolute top-1/2 right-1/6 constellation-line w-28 transform rotate-90"></div>
      <div className="absolute bottom-1/3 right-1/2 constellation-line w-36 transform -rotate-30"></div>
      <div className="absolute top-1/6 left-1/2 constellation-line w-20 transform rotate-60"></div>

      {/* Cosmic Dust Clouds */}
      <div className="absolute top-20 right-20 cosmic-dust w-32 h-32"></div>
      <div className="absolute bottom-40 left-40 cosmic-dust w-24 h-24"></div>
      <div className="absolute top-1/3 left-1/5 cosmic-dust w-28 h-28"></div>
      <div className="absolute bottom-1/5 right-1/3 cosmic-dust w-36 h-36"></div>
    </div>
  );
};

export default CosmicBackground;
