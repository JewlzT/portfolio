import React, {useState, useEffect, useRef} from 'react';
import './Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MediaQuery } from 'react-responsive';
import { BREAKPOINT_VALUES } from '../constants/breakpoints';

function Navbar() {
    const[isMobileNav, setIsMobileNav] = useState(false);
    const[isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const navbarRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const navbarHeight = navbarRef.current?.offsetHeight || 80;
            const scrollThreshold = 10; // Prevent bounce-back triggers
            
            // Keep navbar visible if at top of page or within threshold
            if (currentScrollY <= scrollThreshold) {
                setIsVisible(true);
                if (hideTimeoutRef.current) {
                    clearTimeout(hideTimeoutRef.current);
                }
                lastScrollY.current = currentScrollY;
                return;
            }
            
            if (currentScrollY > lastScrollY.current) {
                // Scrolling down - hide navbar immediately
                setIsVisible(false);
                if (hideTimeoutRef.current) {
                    clearTimeout(hideTimeoutRef.current);
                }
            } else {
                // Scrolling up - show navbar
                setIsVisible(true);
                
                // Clear existing timeout
                if (hideTimeoutRef.current) {
                    clearTimeout(hideTimeoutRef.current);
                }
                
                // Only set timeout if scrolled past navbar height
                if (currentScrollY > navbarHeight) {
                    hideTimeoutRef.current = setTimeout(() => {
                        setIsVisible(false);
                    }, 2000);
                }
            }
            
            lastScrollY.current = currentScrollY <= 0 ? 0 : currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
            }
        };
    }, []);

    // Reset scroll on route change
    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        if (location.pathname === '/portfolio/contact' || location.pathname === '/portfolio/coming-soon') {
            e.preventDefault();
            navigate('/portfolio');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                element?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
        setIsMobileNav(false);
    };

    return (
        <div ref={navbarRef} className={`navbar-wrapper ${!isVisible ? 'hidden' : ''}`}>
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
                                        <li><a href="#projects" onClick={(e) => handleSectionClick(e, 'projects')}>Projects</a></li>
                                        <li><a href="#experience" onClick={(e) => handleSectionClick(e, 'experience')}>Experience</a></li>
                                        <li><a href="#about" onClick={(e) => handleSectionClick(e, 'about')}>About</a></li>
                                        <li className="mobile-contact"><Link to="/portfolio/contact" onClick={() => setIsMobileNav(false)}>Contact</Link></li>
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
                                    <li><a href="#projects" onClick={(e) => handleSectionClick(e, 'projects')}>Projects</a></li>
                                    <li><a href="#experience" onClick={(e) => handleSectionClick(e, 'experience')}>Experience</a></li>
                                    <li><a href="#about" onClick={(e) => handleSectionClick(e, 'about')}>About</a></li>
                                    <li><Link to="/portfolio/contact">Contact</Link></li>
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
                                    <li><a href="#projects" onClick={(e) => handleSectionClick(e, 'projects')}>Projects</a></li>
                                    <li><a href="#experience" onClick={(e) => handleSectionClick(e, 'experience')}>Experience</a></li>
                                    <li><a href="#about" onClick={(e) => handleSectionClick(e, 'about')}>About</a></li>
                                    <li><Link to="/portfolio/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        </div>
    );
}

export default Navbar;