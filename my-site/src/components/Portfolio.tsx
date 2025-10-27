import React from 'react';
import './Portfolio.css';
import MediaQuery from 'react-responsive';
import { BREAKPOINT_VALUES } from '../constants/breakpoints';
import FlipPic from './FlipPic';
import DynamicTextIntro from './intro/DynamicTextIntro';
import Projects from './projects/Projects';

function Portfolio() {
  // Pictures for intro section
  const frontContent = (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/intro/intro-pic.png`} alt="Myself"/>
    </div>
  );

  const backContent = (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/intro/intro-pic-char.png`} alt="8-bit ver of myself"/>
    </div>
  );

  return (
    <div className="Portfolio">
      <div className="mobile-intro-section">
      <MediaQuery maxWidth={BREAKPOINT_VALUES.tablet_max}>
          <header className="mobile-portfolio-header">
            <div className="portfolio-pic">
              <FlipPic frontContent={frontContent} backContent={backContent}/>
            </div>
            <div className="intro-text" data-testid="intro-text">
              <h1>Hello, I'm Julianne!</h1>
              <p>I'm <strong><DynamicTextIntro/></strong></p>
              <p>who loves to work on projects that allow for both artistic and analytical mediums.</p>
            </div>
          </header>
      </MediaQuery>
      </div>
      <div className="desktop-intro-section">
      <MediaQuery minWidth={BREAKPOINT_VALUES.desktop_min}>
        <header className="desktop-portfolio-header">
            <div className="portfolio-pic">
              <FlipPic frontContent={frontContent} backContent={backContent}/>
            </div>
            <div className="intro-text" data-testid="intro-text">
              <h1>Hello, I'm Julianne!</h1>
              <p>I'm <strong><DynamicTextIntro/></strong> who loves to work on projects that allow for both artistic and analytical mediums.</p>
            </div>
          </header>
      </MediaQuery>
      <div id="projects">
        <Projects/>
      </div>
      </div>
    </div>
  );
}

export default Portfolio;