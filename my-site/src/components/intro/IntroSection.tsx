import React from 'react';
import MediaQuery from 'react-responsive';
import { BREAKPOINT_VALUES } from '../../constants/breakpoints';
import FlipPic from '../FlipPic';
import DynamicTextIntro from './DynamicTextIntro';
import FadeInSection from '../animations/FadeInSection';
import './Intro.css'

interface IntroSectionProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

const IntroSection: React.FC<IntroSectionProps> = ({ frontContent, backContent }) => {
  return (
    <>
      {/* Mobile Intro */}
      <MediaQuery maxWidth={BREAKPOINT_VALUES.tablet_max}>
        <FadeInSection className="mobile-intro-section">
          <header className="mobile-portfolio-header">
            <FadeInSection delay={0.2} className="portfolio-pic slide-down">
              <FlipPic frontContent={frontContent} backContent={backContent}/>
            </FadeInSection>
            <FadeInSection delay={0.4} className="intro-text slide-down" data-testid="intro-text">
              <h1>Hello, I'm Julianne!</h1>
              <p>I'm <strong><DynamicTextIntro/></strong></p>
              <p>who loves to work on projects that allow for both artistic and analytical mediums.</p>
            </FadeInSection>
          </header>
        </FadeInSection>
      </MediaQuery>

      {/* Desktop Intro */}
      <MediaQuery minWidth={BREAKPOINT_VALUES.desktop_min}>
        <FadeInSection className="desktop-intro-section">
          <header className="desktop-portfolio-header">
            <FadeInSection delay={0.2} className="portfolio-pic slide-down">
              <FlipPic frontContent={frontContent} backContent={backContent}/>
            </FadeInSection>
            <FadeInSection delay={0.4} className="intro-text slide-down" data-testid="intro-text">
              <h1>Hello, I'm Julianne!</h1>
              <p>I'm <strong><DynamicTextIntro/></strong> who loves to work on projects that allow for both artistic and analytical mediums.</p>
            </FadeInSection>
          </header>
        </FadeInSection>
      </MediaQuery>
    </>
  );
};

export default IntroSection;