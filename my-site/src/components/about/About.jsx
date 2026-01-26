import React, { useState } from 'react';
import FadeInSection from '../animations/FadeInSection';
import './About.css'
import { MediaQuery } from 'react-responsive';
import aboutme_data from "../../data/aboutme.json"
import { BREAKPOINT_VALUES } from '../../constants/breakpoints';
import { Link } from 'react-router-dom';
import Skills from './Skills';

function AboutMe () {
    const [selectedSection, setSelectedSection] = useState('About Me');
    const [aboutMeIndex, setAboutMeIndex] = useState(0);
    const [hoveredHobby, setHoveredHobby] = useState(null);
    const about_me_options = aboutme_data.aboutme_data

    const aboutMeContent = [
        "Hi, I am Julianne! I'm a recent graduate from the University of Central Florida with a bachelor's degree in computer science and a minor in digital media.",
        "I am an aspiring software engineer with most of my experience in front-end development, but I enjoy working and honing my skills in full-stack development.",
        "Let's get to know each other!"
    ];

    const hobbiesContent = [
        {
            name: "book",
            logo: `${process.env.PUBLIC_URL}/images/about/hobbies/book.png`,
            description: "I’ve been reading more after college, which has been super nice! I love mystery and fantasy books the most, but I’ll read anything—from webcomics to the longest of series."
        },
        {
            name: "dance",
            logo: `${process.env.PUBLIC_URL}/images/about/hobbies/dance.png`,
            description: "Dancing is my all-time favorite way to get some cardio in and release stress. I’ve done Zumba for 7 years, attended the occasional hip-hop class, and learned many k-pop choreos!"
        },
        {
            name: "game",
            logo: `${process.env.PUBLIC_URL}/images/about/hobbies/game.png`,
            description: "I enjoy playing board games and video games, many of them being multiplayer. My uncle would host large game nights, and I always enjoyed how they brought people together."
        },
        {
            name: "tv",
            logo: `${process.env.PUBLIC_URL}/images/about/hobbies/tv.png`,
            description: "I watch many different genres, from horror movies (both good and bad) to action films. Recently, I‘ve really enjoyed watching mystery or revenge k-dramas!"
        },
        {
            name: "piano",
            logo: `${process.env.PUBLIC_URL}/images/about/hobbies/piano.png`,
            description: "I enjoy playing piano during my free time. My mother expressed the importance of learning an instrument and I’m very grateful that she did. I love that I can play Canon during the holiday season!"
        },
        {
            name: "music",
            logo: `${process.env.PUBLIC_URL}/images/about/hobbies/music.png`,
            description: "I love so many genres of music! My top three are pop, alternative, and EDM. When studying or focusing, I always put on a bit of lofi to keep me focused!"
        },
    ];


    const handleNextContent = () => {
        setAboutMeIndex((prev) => (prev + 1) % aboutMeContent.length);
    };

    const renderContent = () => {
        switch(selectedSection) {
            case 'About Me':
                return (
                    <div className='aboutme-section'>
                        <img src={`${process.env.PUBLIC_URL}/images/about/aboutme/julie-idle.gif`} alt="Pixel character idle animation"/>
                        <div className='textbox-container'>
                            <div className='textbox-overlay'>
                                <img src={`${process.env.PUBLIC_URL}/images/about/textbox-aboutme.png`} alt="Textbox"/>
                                {aboutMeIndex === aboutMeContent.length - 1 ? (
                                    <h2>
                                        <Link to="/contact">Let's get to know each other!</Link>
                                    </h2>
                                ) : (
                                    <p>{aboutMeContent[aboutMeIndex]}</p>
                                )}
                            </div>
                            <button className='arrow-button' onClick={handleNextContent}>
                                →
                            </button>
                        </div>
                    </div>
                );
            case 'Skills & Experience':
                return <Skills />;
            case 'Hobbies & Interests':
                return (
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
                                        }}
                                        onMouseEnter={() => setHoveredHobby(hobby)}
                                        onMouseLeave={() => setHoveredHobby(null)}
                                    >
                                        <div className='hobby-logo-container'>
                                            <img 
                                                src={hobby.logo} 
                                                alt={hobby.name}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.innerHTML = `<div class="hobby-placeholder">${hobby.name[0]}</div>`;
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
                                    {hoveredHobby 
                                        ? hoveredHobby.description
                                        : "Hover over a hobby to see its description!"}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            case 'Current Challenge':
                return (
                    <div className='challenge-section'>
                        <img src={`${process.env.PUBLIC_URL}/images/about/challenge/julie-bow.png`} alt="Pixel character holding a bow"/>
                        <div className='challenge-textbox'>
                           <h3>Learning UI/UX</h3>
                           <img src={`${process.env.PUBLIC_URL}/images/about/challenge/diamond.png`} alt="Diamond on textbox"/>
                        </div> 
                    </div>
                );
            default:
                return <p>Select a section</p>;
        }
    };

    return (
        <div className='aboutme-area'>
            <FadeInSection delay={0.2}>
                <h2>About</h2>
            </FadeInSection>
            <div className="about-me-container">
                <div className="about-me-sidebar">
                    {about_me_options.map((section) => (
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
                    <FadeInSection>
                        {renderContent()}
                    </FadeInSection>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;