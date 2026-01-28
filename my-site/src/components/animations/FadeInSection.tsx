import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './FadeInSection.css';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  className = ''
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isIntersecting ? 'is-visible' : ''} ${className}`}
      style={{
        '--animation-delay': `${delay}s`,
        '--animation-duration': `${duration}s`
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default FadeInSection;