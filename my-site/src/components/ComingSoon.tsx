import React from "react";
import './ComingSoon.css';
import FadeInSection from "./animations/FadeInSection";

function ComingSoon () {
    return (
        <div className="coming-soon-container">
            <FadeInSection>
                <h1>Coming Soon</h1>
            </FadeInSection>
            <FadeInSection delay={0.8} className='slide-left'>
                <div className="coming-soon-star">
                    <img src={`${process.env.PUBLIC_URL}/images/coming-soon/sky-full-of-stars.png`} alt="Shooting stars"/>
                    <div className="coming-soon-pixel">
                        <img src={`${process.env.PUBLIC_URL}/images/about/skills/julie-peek.png`} alt="Pixel character peeking over stars"/>
                    </div>
                </div>
            </FadeInSection>
        </div>
    )
}

export default ComingSoon;