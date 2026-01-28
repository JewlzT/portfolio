import React, { useState } from 'react';
import './FlipPic.css';

interface FlipPicProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

function FlipPic ({ frontContent, backContent, className = '' }:FlipPicProps){
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`flip-pic ${className}`} onClick={()=>setIsFlipped(!isFlipped)}>
      <div data-testid="flip-pic" className={`flip-pic-inner ${isFlipped ? 'flipped' : ''}`}>
        <div data-testid="flip-pic-front" className="flip-pic-front">
          {frontContent}
        </div>
        <div data-testid="flip-pic-back" className="flip-pic-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipPic;