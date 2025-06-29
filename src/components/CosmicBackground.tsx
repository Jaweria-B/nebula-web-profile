
import React, { useEffect, useState } from 'react';

const CosmicBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; size: string; delay: string }>>([]);
  const [meteors, setMeteors] = useState<Array<{ id: number; left: string; top: string; delay: string; duration: string }>>([]);
  const [nebulas, setNebulas] = useState<Array<{ id: number; left: string; top: string; size: string; color: string; delay: string }>>([]);
  const [stardust, setStardust] = useState<Array<{ id: number; left: string; delay: string }>>([]);

  useEffect(() => {
    // Generate stars
    const newStars = [];
    for (let i = 0; i < 200; i++) {
      newStars.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`,
        delay: `${Math.random() * 3}s`
      });
    }
    setStars(newStars);

    // Generate meteors
    const newMeteors = [];
    for (let i = 0; i < 8; i++) {
      newMeteors.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 50}%`,
        delay: `${i * 3}s`,
        duration: `${3 + Math.random() * 2}s`
      });
    }
    setMeteors(newMeteors);

    // Generate nebulas
    const nebulaColors = [
      'rgba(139, 92, 246, 0.1)',
      'rgba(236, 72, 153, 0.08)',
      'rgba(59, 130, 246, 0.08)',
      'rgba(168, 85, 247, 0.06)',
      'rgba(34, 197, 94, 0.05)'
    ];
    
    const newNebulas = [];
    for (let i = 0; i < 6; i++) {
      newNebulas.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${100 + Math.random() * 200}px`,
        color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
        delay: `${Math.random() * 8}s`
      });
    }
    setNebulas(newNebulas);

    // Generate stardust
    const newStardust = [];
    for (let i = 0; i < 15; i++) {
      newStardust.push({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 4}s`
      });
    }
    setStardust(newStardust);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Background Gradient */}
      <div className="absolute inset-0 galaxy-bg opacity-50"></div>
      
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

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            left: meteor.left,
            top: meteor.top,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration
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
            background: `radial-gradient(circle, ${nebula.color} 0%, transparent 70%)`,
            animationDelay: nebula.delay
          }}
        />
      ))}

      {/* Stardust */}
      {stardust.map((dust) => (
        <div
          key={dust.id}
          className="stardust"
          style={{
            left: dust.left,
            animationDelay: dust.delay
          }}
        />
      ))}

      {/* Constellation Lines */}
      <div className="absolute top-1/4 left-1/4 constellation-line w-32 transform rotate-12"></div>
      <div className="absolute top-3/4 right-1/4 constellation-line w-24 transform -rotate-45"></div>
      <div className="absolute bottom-1/4 left-1/3 constellation-line w-40 transform rotate-45"></div>
      <div className="absolute top-1/2 right-1/6 constellation-line w-28 transform rotate-90"></div>
      <div className="absolute bottom-1/3 right-1/2 constellation-line w-36 transform -rotate-30"></div>

      {/* Galaxy Elements */}
      <div className="absolute top-10 right-10 galaxy w-20 h-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full"></div>
      <div className="absolute bottom-20 left-20 galaxy w-16 h-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full"></div>
      <div className="absolute top-1/2 left-10 galaxy w-12 h-12 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full"></div>
    </div>
  );
};

export default CosmicBackground;
