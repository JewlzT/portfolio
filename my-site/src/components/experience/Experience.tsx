import './Experience.css'
import experienceData from '../../data/experience.json';
import { useState, useRef, useEffect } from 'react';

interface ExperienceItem {
    title: string;
    image: string;
    duration: string;
}

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right' | null>(null);
    const experiences: ExperienceItem[] = experienceData.experience_data;
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);
    const isDragging = useRef<boolean>(false);

    // Preload all images
    useEffect(() => {
        experiences.forEach((exp) => {
            const img = new Image();
            img.src = `${process.env.PUBLIC_URL}${exp.image}`;
        });
    }, [experiences]);

    const handleNext = () => {
        if (activeIndex >= experiences.length - 1) return;
        setDirection('left');
        setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % experiences.length);
            setDirection(null);
        }, 600);
    };

    const handlePrev = () => {
        if (activeIndex <= 0) return;
        setDirection('right');
        setTimeout(() => {
            setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
            setDirection(null);
        }, 600);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        
        const distance = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;

        if (Math.abs(distance) > minSwipeDistance) {
            if (distance > 0) {
                handleNext();
            } else {
                handlePrev();
            }
        }

        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        isDragging.current = true;
        touchStartX.current = e.clientX;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;
        touchEndX.current = e.clientX;
    };

    const handleMouseUp = () => {
        if (!isDragging.current) return;
        isDragging.current = false;

        if (!touchStartX.current || !touchEndX.current) return;
        
        const distance = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;

        if (Math.abs(distance) > minSwipeDistance) {
            if (distance > 0) {
                handleNext();
            } else {
                handlePrev();
            }
        }

        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    const getNextIndex = () => {
        return (activeIndex + 1) % experiences.length;
    };

    const getPrevIndex = () => {
        return (activeIndex - 1 + experiences.length) % experiences.length;
    };

    const hasNext = activeIndex < experiences.length - 1;
    const hasPrev = activeIndex > 0;

    const getCardClass = (position: 'prev' | 'active' | 'next') => {
        let baseClass = `experience-card ${position}`;
        
        if (direction === 'left') {
            if (position === 'active') baseClass += ' sliding-to-left';
            if (position === 'next') baseClass += ' sliding-to-center';
        } else if (direction === 'right') {
            if (position === 'active') baseClass += ' sliding-to-right';
            if (position === 'prev') baseClass += ' sliding-to-center';
        }
        
        return baseClass;
    };

    return (
        <div className="experience-container">
            <h2>Experience</h2>
            <div 
                className="carousel-wrapper"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {/* Previous Experience - Left (if exists) */}
                {hasPrev && (
                    <div key={`prev-${getPrevIndex()}`} className={getCardClass('prev')} onClick={handlePrev}>
                        <img src={`${process.env.PUBLIC_URL}${experiences[getPrevIndex()].image}`} alt={experiences[getPrevIndex()].title} />
                        <h3>{experiences[getPrevIndex()].title}</h3>
                        <p>{experiences[getPrevIndex()].duration}</p>
                    </div>
                )}

                {/* Active Experience - Center */}
                <div key={`active-${activeIndex}`} className={getCardClass('active')}>
                    <img src={`${process.env.PUBLIC_URL}${experiences[activeIndex].image}`} alt={experiences[activeIndex].title} />
                    <h3>{experiences[activeIndex].title}</h3>
                    <p>{experiences[activeIndex].duration}</p>
                </div>

                {/* Next Experience - Right (if exists) */}
                {hasNext && (
                    <div key={`next-${getNextIndex()}`} className={getCardClass('next')} onClick={handleNext}>
                        <img src={`${process.env.PUBLIC_URL}${experiences[getNextIndex()].image}`} alt={experiences[getNextIndex()].title} />
                        <h3>{experiences[getNextIndex()].title}</h3>
                        <p>{experiences[getNextIndex()].duration}</p>
                    </div>
                )}
            </div>
        </div>
    );
}