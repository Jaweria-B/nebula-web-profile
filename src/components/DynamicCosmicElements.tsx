
import React, { useEffect, useState, useRef } from 'react';

interface CosmicElement {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'star' | 'explosion' | 'nebula' | 'meteor' | 'fallingstar';
  speed: number;
  opacity: number;
  color: string;
  delay: number;
}

interface StarConnection {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity: number;
  active: boolean;
}

const DynamicCosmicElements = () => {
  const [elements, setElements] = useState<CosmicElement[]>([]);
  const [starConnections, setStarConnections] = useState<StarConnection[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateElements = () => {
      const newElements: CosmicElement[] = [];
      
      // Generate various cosmic elements
      for (let i = 0; i < 80; i++) {
        const types: CosmicElement['type'][] = ['star', 'explosion', 'nebula', 'meteor', 'fallingstar'];
        const type = types[Math.floor(Math.random() * types.length)];
        
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 300, // Spread across multiple screen heights
          size: type === 'star' ? Math.random() * 3 + 1 : Math.random() * 20 + 5,
          type,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
          color: type === 'star' ? '#ffffff' : 
                 type === 'explosion' ? '#ff6b6b' :
                 type === 'nebula' ? '#8b5cf6' :
                 type === 'meteor' ? '#fbbf24' : '#06d6a0',
          delay: Math.random() * 3
        });
      }
      
      setElements(newElements);
    };

    const generateStarConnections = () => {
      const connections: StarConnection[] = [];
      const stars = elements.filter(el => el.type === 'star');
      
      for (let i = 0; i < Math.min(stars.length, 20); i++) {
        const star1 = stars[Math.floor(Math.random() * stars.length)];
        const star2 = stars[Math.floor(Math.random() * stars.length)];
        
        if (star1.id !== star2.id) {
          const distance = Math.sqrt(
            Math.pow(star1.x - star2.x, 2) + Math.pow(star1.y - star2.y, 2)
          );
          
          if (distance < 20) { // Only connect nearby stars
            connections.push({
              id: i,
              x1: star1.x,
              y1: star1.y,
              x2: star2.x,
              y2: star2.y,
              opacity: Math.random() * 0.3 + 0.1,
              active: Math.random() > 0.5
            });
          }
        }
      }
      
      setStarConnections(connections);
    };

    generateElements();
    
    // Generate connections after elements are set
    setTimeout(generateStarConnections, 100);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Animate star connections
    const connectionInterval = setInterval(() => {
      setStarConnections(prev => 
        prev.map(conn => ({
          ...conn,
          active: Math.random() > 0.7,
          opacity: Math.random() * 0.4 + 0.1
        }))
      );
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(connectionInterval);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Star Connections */}
      <svg className="absolute inset-0 w-full h-full">
        {starConnections.map(conn => (
          <line
            key={conn.id}
            x1={`${conn.x1}%`}
            y1={`${conn.y1 - scrollY * 0.1}px`}
            x2={`${conn.x2}%`}
            y2={`${conn.y2 - scrollY * 0.1}px`}
            stroke="rgba(147, 197, 253, 0.4)"
            strokeWidth="1"
            opacity={conn.active ? conn.opacity : 0}
            className="transition-opacity duration-1000"
          />
        ))}
      </svg>

      {/* Cosmic Elements */}
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute transition-all duration-1000 ${
            element.type === 'star' ? 'animate-twinkle' :
            element.type === 'explosion' ? 'animate-pulse' :
            element.type === 'nebula' ? 'animate-pulse' :
            element.type === 'meteor' ? 'animate-meteor' :
            'animate-bounce'
          }`}
          style={{
            left: `${element.x}%`,
            top: `${element.y * 100 - scrollY * element.speed}px`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: element.opacity,
            animationDelay: `${element.delay}s`,
            background: element.type === 'star' ? element.color :
                       element.type === 'explosion' ? 
                       `radial-gradient(circle, ${element.color}, transparent)` :
                       element.type === 'nebula' ?
                       `radial-gradient(ellipse, ${element.color}40, transparent)` :
                       `linear-gradient(45deg, ${element.color}, transparent)`,
            borderRadius: element.type === 'star' ? '50%' : 
                         element.type === 'explosion' ? '50%' :
                         element.type === 'meteor' ? '0' : '50%',
            boxShadow: element.type === 'star' ? `0 0 10px ${element.color}` :
                      element.type === 'explosion' ? `0 0 20px ${element.color}` :
                      element.type === 'nebula' ? `0 0 30px ${element.color}40` :
                      'none'
          }}
        />
      ))}

      {/* Additional falling stars */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`falling-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full animate-meteor"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100 - scrollY * 0.3}px`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            boxShadow: '0 0 10px #ffffff, 0 0 20px #93c5fd'
          }}
        />
      ))}
    </div>
  );
};

export default DynamicCosmicElements;
