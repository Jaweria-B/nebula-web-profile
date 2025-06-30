
import React, { useEffect, useState, useRef } from 'react';

interface CosmicElement {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'star' | 'explosion' | 'meteor' | 'fallingstar' | 'sparkle' | 'comet';
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
      
      // Generate many more stars and beautiful cosmic elements
      for (let i = 0; i < 200; i++) {
        const types: CosmicElement['type'][] = ['star', 'star', 'star', 'star', 'star', 'sparkle', 'explosion', 'meteor', 'fallingstar', 'comet'];
        const type = types[Math.floor(Math.random() * types.length)];
        
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 500, // Spread across multiple screen heights
          size: type === 'star' ? Math.random() * 3 + 1 : 
                type === 'sparkle' ? Math.random() * 2 + 1 :
                Math.random() * 12 + 4,
          type,
          speed: Math.random() * 0.1 + 0.02, // Much slower speed
          opacity: Math.random() * 0.7 + 0.2,
          color: type === 'star' ? '#ffffff' : 
                 type === 'sparkle' ? '#e0e7ff' :
                 type === 'explosion' ? '#fbbf24' :
                 type === 'meteor' ? '#06d6a0' : 
                 type === 'comet' ? '#8b5cf6' : '#06b6d4',
          delay: Math.random() * 8
        });
      }
      
      setElements(newElements);
    };

    const generateStarConnections = () => {
      const connections: StarConnection[] = [];
      const stars = elements.filter(el => el.type === 'star' || el.type === 'sparkle');
      
      // Create beautiful star network connections
      for (let i = 0; i < Math.min(stars.length, 60); i++) {
        const star1 = stars[Math.floor(Math.random() * stars.length)];
        const star2 = stars[Math.floor(Math.random() * stars.length)];
        
        if (star1.id !== star2.id) {
          const distance = Math.sqrt(
            Math.pow(star1.x - star2.x, 2) + Math.pow(star1.y - star2.y, 2)
          );
          
          if (distance < 30 && distance > 5) { // Perfect distance for beautiful connections
            connections.push({
              id: i,
              x1: star1.x,
              y1: star1.y,
              x2: star2.x,
              y2: star2.y,
              opacity: Math.random() * 0.5 + 0.1,
              active: Math.random() > 0.4
            });
          }
        }
      }
      
      setStarConnections(connections);
    };

    generateElements();
    
    // Generate connections after elements are set
    setTimeout(generateStarConnections, 200);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Animate star connections - beautiful transitions
    const connectionInterval = setInterval(() => {
      setStarConnections(prev => 
        prev.map(conn => ({
          ...conn,
          active: Math.random() > 0.3,
          opacity: Math.random() * 0.4 + 0.1
        }))
      );
    }, 4000); // Slower, more elegant transitions

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(connectionInterval);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Beautiful Star Network */}
      <svg className="absolute inset-0 w-full h-full">
        {starConnections.map(conn => (
          <line
            key={conn.id}
            x1={`${conn.x1}%`}
            y1={`${conn.y1 - scrollY * 0.03}px`}
            x2={`${conn.x2}%`}
            y2={`${conn.y2 - scrollY * 0.03}px`}
            stroke="rgba(147, 197, 253, 0.4)"
            strokeWidth="0.8"
            opacity={conn.active ? conn.opacity : 0}
            className="transition-opacity duration-3000"
          />
        ))}
        
        {/* Additional constellation patterns */}
        {starConnections.slice(0, 20).map(conn => (
          <circle
            key={`node-${conn.id}`}
            cx={`${(conn.x1 + conn.x2) / 2}%`}
            cy={`${(conn.y1 + conn.y2) / 2 - scrollY * 0.03}px`}
            r="1"
            fill="rgba(147, 197, 253, 0.6)"
            opacity={conn.active ? 0.8 : 0}
            className="transition-opacity duration-3000"
          />
        ))}
      </svg>

      {/* Enhanced Cosmic Elements */}
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute transition-all duration-1000 ${
            element.type === 'star' ? 'animate-twinkle' :
            element.type === 'sparkle' ? 'animate-sparkle' :
            element.type === 'explosion' ? 'animate-pulse' :
            element.type === 'meteor' ? 'animate-meteor' :
            element.type === 'comet' ? 'animate-comet' :
            'animate-bounce'
          }`}
          style={{
            left: `${element.x}%`,
            top: `${element.y * 100 - scrollY * element.speed}px`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: element.opacity,
            animationDelay: `${element.delay}s`,
            animationDuration: element.type === 'star' ? '6s' : 
                             element.type === 'sparkle' ? '4s' : '5s',
            background: element.type === 'star' || element.type === 'sparkle' ? element.color :
                       element.type === 'explosion' ? 
                       `radial-gradient(circle, ${element.color}, transparent)` :
                       element.type === 'comet' ?
                       `linear-gradient(135deg, ${element.color}, transparent)` :
                       `linear-gradient(45deg, ${element.color}, transparent)`,
            borderRadius: element.type === 'star' || element.type === 'sparkle' ? '50%' : 
                         element.type === 'explosion' ? '50%' : '50%',
            boxShadow: element.type === 'star' ? `0 0 12px ${element.color}` :
                      element.type === 'sparkle' ? `0 0 8px ${element.color}, 0 0 16px rgba(147, 197, 253, 0.3)` :
                      element.type === 'explosion' ? `0 0 20px ${element.color}` :
                      element.type === 'comet' ? `0 0 15px ${element.color}, 0 0 30px rgba(139, 92, 246, 0.2)` :
                      'none'
          }}
        />
      ))}

      {/* Beautiful floating cosmic dust */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`dust-${i}`}
          className="absolute w-1 h-1 bg-blue-200 rounded-full animate-float opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100 - scrollY * 0.02}px`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
            boxShadow: '0 0 4px rgba(147, 197, 253, 0.5)'
          }}
        />
      ))}

      {/* Enhanced falling stars with trails */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`falling-${i}`}
          className="absolute animate-meteor opacity-80"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100 - scrollY * 0.08}px`,
            animationDelay: `${i * 4}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        >
          <div className="w-2 h-2 bg-white rounded-full" 
               style={{ boxShadow: '0 0 12px #ffffff, 0 0 24px #93c5fd, 0 0 36px rgba(147, 197, 253, 0.3)' }} />
          <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-white via-blue-300 to-transparent opacity-60 transform -rotate-45 origin-left" />
        </div>
      ))}
    </div>
  );
};

export default DynamicCosmicElements;
