import React, {useState} from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { MediaQuery } from 'react-responsive';
import { BREAKPOINT_VALUES } from '../constants/breakpoints';

function Navbar() {
    const[isMobileNav, setIsMobileNav] = useState(false);

    return (
        <div className="Navbar">
            <MediaQuery maxWidth={BREAKPOINT_VALUES.mobile_max}>
                <div data-testid="test-mobile-menu" className="hamburger-menu">
                    <div className="nav-cloud">
                        <img src={`${process.env.PUBLIC_URL}/images/navbar/cloud-icon.png`} alt="Cloud icon"/>
                    </div>
                    <button onClick={() => setIsMobileNav(true)}>☰</button>
                </div>
                {isMobileNav && (
                    <div className="mobile-overlay">
                        <div className="mobile-nav-content">
                            <button 
                                className="close-btn" 
                                onClick={() => setIsMobileNav(false)}
                            >
                                ×
                            </button>
                                <nav>
                                    <ul>
                                        <li><Link to="/portfolio" onClick={() => setIsMobileNav(false)}>Home</Link></li>
                                        <li><a href="#projects" onClick={() => setIsMobileNav(false)}>Projects</a></li>
                                        <li><a href="#experience" onClick={() => setIsMobileNav(false)}>Experience</a></li>
                                        <li><a href="#about" onClick={() => setIsMobileNav(false)}>About</a></li>
                                        <li className="mobile-contact"><Link to="/contact" onClick={() => setIsMobileNav(false)}>Contact</Link></li>
                                    </ul>
                                </nav>
                        </div>
                    </div>
                )}
            </MediaQuery>
            {/* Replace with proper breakpoints when they are decided */}
            <MediaQuery minWidth={BREAKPOINT_VALUES.tablet_min} maxWidth={BREAKPOINT_VALUES.tablet_max}>
                <div className="tablet-nav">
                    <div className="tablet-nav-links">
                        <nav data-testid="test-tablet-menu">
                            <ul>
                                <li><Link to="/portfolio">Home</Link></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#about">About</a></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={BREAKPOINT_VALUES.desktop_min}>
                <div className="desktop-nav">
                    <div className="nav-icon">
                        <img src={`${process.env.PUBLIC_URL}/favicon.png`} alt="Icon on navigation bar"/>
                    </div>
                    <div className="desktop-nav-links">
                        <nav data-testid="test-desktop-menu">
                            <ul>
                                <li><Link to="/portfolio">Home</Link></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#about">About</a></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}

export default Navbar;