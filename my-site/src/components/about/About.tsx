import React, { useState, useEffect, useMemo } from 'react';
import FadeInSection from '../animations/FadeInSection';
import './About.css'
import { useMediaQuery } from 'react-responsive';
import aboutme_data from "../../data/aboutme.json"
import { BREAKPOINT_VALUES } from '../../constants/breakpoints';
import { Link } from 'react-router-dom';
import Skills from './Skills';

interface Hobby {
    name: string;
    logo: string;
    description: string;
}

function AboutMe() {
    const [selectedSection, setSelectedSection] = useState<string>('About Me');
    const [aboutMeIndex, setAboutMeIndex] = useState<number>(0);
    const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null);
    const [randomHobby, setRandomHobby] = useState<Hobby | null>(null);
    const about_me_options = aboutme_data.aboutme_data;
    const isMobileOrTablet = useMediaQuery({ maxWidth: BREAKPOINT_VALUES.desktop_min - 1 });

    const aboutMeContent: string[] = [
        "Hi, I am Julianne! I'm a recent graduate from the University of Central Florida with a bachelor's degree in computer science and a minor in digital media.",
        "I am an aspiring software engineer with most of my experience in front-end development, but I enjoy working and honing my skills in full-stack development.",
        "Let's get to know each other!"
    ];

    const hobbiesContent = useMemo<Hobby[]>(() => [
        {
            name: "book",
            logo: `${process.env.PUBLIC_URL}/images/about/hobbies/book.png`,
            description: "I've been reading more after college, which has been super nice! I love mystery and fantasy books the most, but I'll read anything—from webcomics to the longest of series."
        },
        {
            name: "dance",
            logo: `${process.env.PUBLIC_URL}/images/about/hobbies/dance.png`,
            description: "Dancing is my all-time favorite way to get some cardio in and release stress. I've done Zumba for 7 years, attended the occasional hip-hop class, and learned many k-pop choreos!"
        },
        {
            name: "game",
            logo: `${process.env.PUBLIC_URL}/images/about/hobbies/game.png`,
            description: "I enjoy playing board games and video games, many of them being multiplayer. My uncle would host large game nights, and I always enjoyed how they brought people together."
        },
        {
            name: "tv",
            logo: `${process.env.PUBLIC_URL}/images/about/hobbies/tv.png`,
            description: "I watch many different genres, from horror movies (both good and bad) to action films. Recently, I've really enjoyed watching mystery or revenge k-dramas!"
        },
        {
            name: "piano",
            logo: `${process.env.PUBLIC_URL}/images/about/hobbies/piano.png`,
            description: "I enjoy playing piano during my free time. My mother expressed the importance of learning an instrument and I'm very grateful that she did. I love that I can play Canon during the holiday season!"
        },
        {
            name: "music",
            logo: `${process.env.PUBLIC_URL}/images/about/hobbies/music.png`,
            description: "I love so many genres of music! My top three are pop, alternative, and EDM. When studying or focusing, I always put on a bit of lofi to keep me focused!"
        },
    ], []);

    // Set random hobby on component mount for mobile/tablet
    useEffect(() => {
        if (isMobileOrTablet) {
            const randomIndex = Math.floor(Math.random() * hobbiesContent.length);
            setRandomHobby(hobbiesContent[randomIndex]);
        }
    }, [isMobileOrTablet, hobbiesContent]);

    const handleNextContent = (): void => {
        setAboutMeIndex((prev) => (prev + 1) % aboutMeContent.length);
    };

    const handleHobbyClick = (hobby: Hobby): void => {
        setSelectedHobby(selectedHobby?.name === hobby.name ? null : hobby);
    };

    return (
        <div className='aboutme-area'>
            <FadeInSection delay={0.2}>
                <h2>About</h2>
            </FadeInSection>
            {isMobileOrTablet ? (
                <>
                    <FadeInSection>
                        <div className='aboutme-section'>
                            <img src={`${process.env.PUBLIC_URL}/images/about/aboutme/julie-idle.gif`} alt="Pixel character idle animation"/>
                            <div className='textbox-container'>
                                <div className='textbox-overlay'>
                                    <img src={`${process.env.PUBLIC_URL}/images/about/textbox-aboutme.png`} alt="Textbox"/>
                                    {aboutMeIndex === aboutMeContent.length - 1 ? (
                                        <h3>
                                            <Link to="/contact">Let's get to know each other!</Link>
                                        </h3>
                                    ) : (
                                        <p>{aboutMeContent[aboutMeIndex]}</p>
                                    )}
                                </div>
                                <button className='arrow-button' onClick={handleNextContent}>
                                    →
                                </button>
                            </div>
                        </div>
                    </FadeInSection>
                    
                    <FadeInSection>
                        <h3 className='about-subtitle'>Skills & Experience</h3>
                        <Skills />
                    </FadeInSection>
                    
                    <FadeInSection>
                        <h3 className='about-subtitle'>Fun Fact</h3>
                        <div className='aboutme-section hobbies-section'>
                            <img 
                                src={`${process.env.PUBLIC_URL}/images/about/hobbies/julie-music.gif`}
                                alt='Character'
                                className='pixel-character-hobbies'
                            />
                            <div className='textbox-container'>
                                <div className='textbox-overlay'>
                                    <img src={`${process.env.PUBLIC_URL}/images/about/textbox-aboutme.png`} alt="Textbox"/>
                                    {randomHobby && <p>{randomHobby.description}</p>}
                                </div>
                            </div>
                        </div>
                    </FadeInSection>

                    <FadeInSection>
                        <h3 className='about-subtitle'>Current Challenge</h3>
                        <div className='challenge-section'>
                            <img src={`${process.env.PUBLIC_URL}/images/about/challenge/julie-bow.png`} alt="Pixel character holding a bow"/>
                            <div className='challenge-textbox'>
                               <h3>Learning UI/UX</h3>
                               <img src={`${process.env.PUBLIC_URL}/images/about/challenge/diamond.png`} alt="Diamond on textbox"/>
                            </div> 
                        </div>
                    </FadeInSection>
                </>
            ) : (
                <div className="about-me-container">
                    
                    <div className="about-me-sidebar fade-in-mount">
                        {about_me_options.map((section: string) => (
                            <button
                                key={section}
                                className={`section-button ${selectedSection === section ? 'active' : ''}`}
                                onClick={() => setSelectedSection(section)}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                    <div className="about-me-content">
                        {/* Render all sections, hide inactive ones */}
                        <div className={`content-section ${selectedSection === 'About Me' ? 'active' : ''}`}>
                            <FadeInSection>
                                <div className='aboutme-section'>
                                    <img src={`${process.env.PUBLIC_URL}/images/about/aboutme/julie-idle.gif`} alt="Pixel character idle animation"/>
                                    <div className='textbox-container'>
                                        <div className='textbox-overlay'>
                                            <img src={`${process.env.PUBLIC_URL}/images/about/textbox-aboutme.png`} alt="Textbox"/>
                                            {aboutMeIndex === aboutMeContent.length - 1 ? (
                                                <h3>
                                                    <Link to="/contact">Let's get to know each other!</Link>
                                                </h3>
                                            ) : (
                                                <p>{aboutMeContent[aboutMeIndex]}</p>
                                            )}
                                        </div>
                                        <button className='arrow-button' onClick={handleNextContent}>
                                            →
                                        </button>
                                    </div>
                                </div>
                            </FadeInSection>
                        </div>

                        <div className={`content-section ${selectedSection === 'Skills & Experience' ? 'active' : ''}`}>
                            <FadeInSection>
                                <Skills />
                            </FadeInSection>
                        </div>

                        <div className={`content-section ${selectedSection === 'Hobbies & Interests' ? 'active' : ''}`}>
                            <FadeInSection>
                                <div className='aboutme-section hobbies-section'>
                                    <img 
                                        src={`${process.env.PUBLIC_URL}/images/about/hobbies/julie-music.gif`}
                                        alt='Character'
                                        className='pixel-character-hobbies'
                                    />
                                    <div className='hobbies-display'>
                                        <div className='hobbies-circle-container'>
                                            {hobbiesContent.map((hobby, index) => (
                                                <div 
                                                    key={hobby.name}
                                                    className={`hobby-item position-${index}`}
                                                    style={{
                                                        '--item-count': hobbiesContent.length,
                                                        '--item-index': index,
                                                        '--radius': '200px'
                                                    } as React.CSSProperties}
                                                >
                                                    <div 
                                                        className={`hobby-logo-container ${selectedHobby?.name === hobby.name ? 'active' : ''}`}
                                                        onClick={() => handleHobbyClick(hobby)}
                                                    >
                                                        <img 
                                                            src={hobby.logo} 
                                                            alt={hobby.name}
                                                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                                                const target = e.target as HTMLImageElement;
                                                                target.style.display = 'none';
                                                                if (target.parentElement) {
                                                                    target.parentElement.innerHTML = `<div class="hobby-placeholder">${hobby.name[0]}</div>`;
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='textbox-container'>
                                        <div className='textbox-overlay'>
                                            <img src={`${process.env.PUBLIC_URL}/images/about/textbox-aboutme.png`} alt="Textbox"/>
                                            <p>
                                                {selectedHobby 
                                                    ? selectedHobby.description
                                                    : "Click on a hobby to see its description!"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </FadeInSection>
                        </div>

                        <div className={`content-section ${selectedSection === 'Current Challenge' ? 'active' : ''}`}>
                            <FadeInSection>
                                <div className='challenge-section'>
                                    <img src={`${process.env.PUBLIC_URL}/images/about/challenge/julie-bow.png`} alt="Pixel character holding a bow"/>
                                    <div className='challenge-textbox'>
                                       <h3>Learning UI/UX</h3>
                                       <img src={`${process.env.PUBLIC_URL}/images/about/challenge/diamond.png`} alt="Diamond on textbox"/>
                                    </div> 
                                </div>
                            </FadeInSection>
                        </div>
                        
                    </div>
                    
                </div>
            )}
        </div>
    );
}

export default AboutMe;