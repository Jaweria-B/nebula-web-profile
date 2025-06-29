
import React, { useEffect, useState } from 'react';

interface SectionMeteorsProps {
  sectionId: string;
  meteorCount?: number;
  colors?: string[];
}

const SectionMeteors: React.FC<SectionMeteorsProps> = ({ 
  sectionId, 
  meteorCount = 3, 
  colors = ['#60a5fa', '#a78bfa', '#f472b6', '#34d399', '#fbbf24'] 
}) => {
  const [meteors, setMeteors] = useState<Array<{ 
    id: number; 
    left: string; 
    top: string; 
    delay: string; 
    duration: string; 
    color: string;
    angle: number;
  }>>([]);

  useEffect(() => {
    const newMeteors = [];
    for (let i = 0; i < meteorCount; i++) {
      newMeteors.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 60}%`,
        delay: `${i * 4 + Math.random() * 3}s`,
        duration: `${4 + Math.random() * 3}s`,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * 60 - 30 // -30 to +30 degrees
      });
    }
    setMeteors(newMeteors);
  }, [meteorCount, colors]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="section-meteor"
          style={{
            left: meteor.left,
            top: meteor.top,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
            '--meteor-color': meteor.color,
            '--meteor-angle': `${meteor.angle}deg`
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default SectionMeteors;
