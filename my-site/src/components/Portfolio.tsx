import React from 'react';
import './Portfolio.css';
import MediaQuery from 'react-responsive';
import { BREAKPOINT_VALUES } from '../constants/breakpoints';
import FlipPic from './FlipPic';
import DynamicTextIntro from './intro/DynamicTextIntro';

function Portfolio() {
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
      <MediaQuery maxWidth={BREAKPOINT_VALUES.tablet_max}>
          <div className="portfolio-pic">
            <FlipPic frontContent={frontContent} backContent={backContent}/>
          </div>
          <header className="Portfolio-header">
            <h1>Hello, I'm Julianne!</h1>
            <p>I'm <strong><DynamicTextIntro/></strong> who loves to work on projects that allow for both artistic and analytical mediums.</p>
          </header>
      </MediaQuery>
      <MediaQuery minWidth={BREAKPOINT_VALUES.desktop_min}>
        <header className="desktop-portfolio-header">
            <div className="portfolio-pic">
              <FlipPic frontContent={frontContent} backContent={backContent}/>
            </div>
            <div className="intro-text">
              <h1>Hello, I'm Julianne!</h1>
              <p>I'm <strong><DynamicTextIntro/></strong> who loves to work</p>
              <p>on projects that allow for both artistic and analytical mediums.</p>
            </div>
          </header>
      </MediaQuery>
      
    </div>
  );
}

export default Portfolio;