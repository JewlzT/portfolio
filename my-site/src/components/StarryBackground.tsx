import React, { useEffect, useState } from 'react';
import './StarryBackground.css';

// Create Star structure
interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  animationDelay: number;
}

// Create 50 stars in random places on the screen on load
const StarryBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const starCount = 50;

      for (let i = 0; i < starCount; i++) {
            newStars.push({
                id: i,
                x: Math.random() * 100, 
                y: Math.random() * 100, 
                size: Math.random() * 3 + 1, 
                animationDelay: Math.random() * 4, 
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="starry-background">
      {stars.map((star) => (
        <div
            key={star.id}
            className="star"
            style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.animationDelay}s`,
            }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;