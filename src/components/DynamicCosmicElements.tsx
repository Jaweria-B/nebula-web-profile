
import React, { useEffect, useState } from 'react';

interface CosmicElement {
  id: number;
  type: 'star' | 'nebula' | 'meteor' | 'explosion' | 'comet';
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
  direction: number;
}

interface DynamicCosmicElementsProps {
  sectionId: string;
  density?: 'low' | 'medium' | 'high';
  types?: Array<'star' | 'nebula' | 'meteor' | 'explosion' | 'comet'>;
}

const DynamicCosmicElements: React.FC<DynamicCosmicElementsProps> = ({ 
  sectionId, 
  density = 'medium',
  types = ['star', 'nebula', 'meteor', 'explosion', 'comet']
}) => {
  const [elements, setElements] = useState<CosmicElement[]>([]);
  const [scrollY, setScrollY] = useState(0);

  const densityMap = {
    low: 15,
    medium: 25,
    high: 40
  };

  const colors = {
    star: ['#ffffff', '#fbbf24', '#3b82f6', '#8b5cf6', '#ef4444'],
    nebula: ['#8b5cf6', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b'],
    meteor: ['#ffffff', '#fbbf24', '#3b82f6'],
    explosion: ['#ef4444', '#f59e0b', '#fbbf24', '#8b5cf6'],
    comet: ['#06b6d4', '#3b82f6', '#8b5cf6']
  };

  useEffect(() => {
    const generateElements = () => {
      const elementCount = densityMap[density];
      const newElements: CosmicElement[] = [];

      for (let i = 0; i < elementCount; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        const colorOptions = colors[type];
        
        newElements.push({
          id: i,
          type,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: type === 'nebula' ? Math.random() * 40 + 20 : Math.random() * 6 + 2,
          speed: Math.random() * 0.5 + 0.1,
          opacity: type === 'nebula' ? Math.random() * 0.6 + 0.2 : Math.random() * 0.8 + 0.2,
          color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
          direction: Math.random() * 360
        });
      }

      setElements(newElements);
    };

    generateElements();
  }, [sectionId, density, types]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getElementStyle = (element: CosmicElement) => {
    const baseX = element.x + (scrollY * element.speed * 0.1);
    const baseY = element.y + (Math.sin(Date.now() * 0.001 + element.id) * 2);
    
    const style: React.CSSProperties = {
      position: 'absolute',
      left: `${baseX % 100}%`,
      top: `${baseY}%`,
      opacity: element.opacity,
      transform: `rotate(${element.direction + scrollY * 0.1}deg)`,
      pointerEvents: 'none',
      zIndex: 1
    };

    switch (element.type) {
      case 'star':
        return {
          ...style,
          width: `${element.size}px`,
          height: `${element.size}px`,
          backgroundColor: element.color,
          borderRadius: '50%',
          boxShadow: `0 0 ${element.size * 2}px ${element.color}`,
          animation: 'twinkle 3s infinite'
        };
      
      case 'nebula':
        return {
          ...style,
          width: `${element.size}px`,
          height: `${element.size}px`,
          background: `radial-gradient(circle, ${element.color}40 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(2px)',
          animation: 'nebula-drift 8s infinite linear'
        };
      
      case 'meteor':
        return {
          ...style,
          width: '3px',
          height: '30px',
          background: `linear-gradient(to bottom, ${element.color}, transparent)`,
          borderRadius: '50%',
          animation: 'meteor-trail 2s infinite linear'
        };
      
      case 'explosion':
        return {
          ...style,
          width: `${element.size}px`,
          height: `${element.size}px`,
          background: `radial-gradient(circle, ${element.color} 0%, transparent 50%)`,
          borderRadius: '50%',
          animation: 'cosmic-explosion 4s infinite'
        };
      
      case 'comet':
        return {
          ...style,
          width: '6px',
          height: '6px',
          backgroundColor: element.color,
          borderRadius: '50%',
          boxShadow: `0 0 10px ${element.color}, -20px 0 15px ${element.color}40`,
          animation: 'comet-trail 6s infinite linear'
        };
      
      default:
        return style;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <div
          key={`${sectionId}-${element.id}`}
          style={getElementStyle(element)}
        />
      ))}
    </div>
  );
};

export default DynamicCosmicElements;
