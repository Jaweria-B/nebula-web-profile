
import React, { useEffect, useState, useRef } from 'react';

interface CosmicElement {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'star' | 'explosion' | 'meteor' | 'fallingstar';
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
      
      // Generate more stars and cosmic effects without meteors
      for (let i = 0; i < 120; i++) {
        const types: CosmicElement['type'][] = ['star', 'star', 'star', 'star', 'star', 'explosion'];
        const type = types[Math.floor(Math.random() * types.length)];
        
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 400, // Spread across multiple screen heights
          size: type === 'star' ? Math.random() * 2 + 1 : Math.random() * 15 + 5,
          type,
          speed: Math.random() * 0.2 + 0.05, // Much slower speed
          opacity: Math.random() * 0.6 + 0.3,
          color: type === 'star' ? '#ffffff' : 
                 type === 'explosion' ? '#ff6b6b' :
                 type === 'meteor' ? '#fbbf24' : '#06d6a0',
          delay: Math.random() * 5
        });
      }
      
      setElements(newElements);
    };

    const generateStarConnections = () => {
      const connections: StarConnection[] = [];
      const stars = elements.filter(el => el.type === 'star');
      
      // Create more connections but not too many
      for (let i = 0; i < Math.min(stars.length, 35); i++) {
        const star1 = stars[Math.floor(Math.random() * stars.length)];
        const star2 = stars[Math.floor(Math.random() * stars.length)];
        
        if (star1.id !== star2.id) {
          const distance = Math.sqrt(
            Math.pow(star1.x - star2.x, 2) + Math.pow(star1.y - star2.y, 2)
          );
          
          if (distance < 25 && distance > 8) { // Good distance range for connections
            connections.push({
              id: i,
              x1: star1.x,
              y1: star1.y,
              x2: star2.x,
              y2: star2.y,
              opacity: Math.random() * 0.4 + 0.1,
              active: Math.random() > 0.6
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

    // Animate star connections - slower and more elegant
    const connectionInterval = setInterval(() => {
      setStarConnections(prev => 
        prev.map(conn => ({
          ...conn,
          active: Math.random() > 0.6,
          opacity: Math.random() * 0.3 + 0.1
        }))
      );
    }, 3000); // Slower transition

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(connectionInterval);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Star Network */}
      <svg className="absolute inset-0 w-full h-full">
        {starConnections.map(conn => (
          <line
            key={conn.id}
            x1={`${conn.x1}%`}
            y1={`${conn.y1 - scrollY * 0.05}px`}
            x2={`${conn.x2}%`}
            y2={`${conn.y2 - scrollY * 0.05}px`}
            stroke="rgba(147, 197, 253, 0.3)"
            strokeWidth="0.5"
            opacity={conn.active ? conn.opacity : 0}
            className="transition-opacity duration-2000"
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
            'animate-bounce'
          }`}
          style={{
            left: `${element.x}%`,
            top: `${element.y * 100 - scrollY * element.speed}px`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: element.opacity,
            animationDelay: `${element.delay}s`,
            animationDuration: element.type === 'star' ? '4s' : '3s', // Slower animations
            background: element.type === 'star' ? element.color :
                       element.type === 'explosion' ? 
                       `radial-gradient(circle, ${element.color}, transparent)` :
                       `linear-gradient(45deg, ${element.color}, transparent)`,
            borderRadius: element.type === 'star' ? '50%' : 
                         element.type === 'explosion' ? '50%' : '50%',
            boxShadow: element.type === 'star' ? `0 0 8px ${element.color}` :
                      element.type === 'explosion' ? `0 0 15px ${element.color}` :
                      'none'
          }}
        />
      ))}

      {/* Nebula Effects */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`nebula-${i}`}
          className="absolute rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100 - scrollY * 0.05}px`,
            width: `${100 + Math.random() * 200}px`,
            height: `${100 + Math.random() * 200}px`,
            background: `radial-gradient(circle, ${
              ['#3b82f6', '#8b5cf6', '#06d6a0', '#f59e0b'][Math.floor(Math.random() * 4)]
            }30, transparent)`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default DynamicCosmicElements;
