import React, { useState } from 'react';
import FadeInSection from '../animations/FadeInSection';
import './AboutMe.css'
import { MediaQuery } from 'react-responsive';
import aboutme_data from "../../data/aboutme.json"
import { BREAKPOINT_VALUES } from '../../constants/breakpoints';
import { Link } from 'react-router-dom';
import Skills from './Skills';

function AboutMe () {
    const [selectedSection, setSelectedSection] = useState('About Me');
    const [aboutMeIndex, setAboutMeIndex] = useState(0);
    const about_me_options = aboutme_data.aboutme_data

    const aboutMeContent = [
        "Hi, I am Julianne! I'm a recent graduate from the University of Central Florida with a bachelor's degree in computer science and a minor in digital media.",
        "I am an aspiring software engineer with most of my experience in front-end development, but I enjoy working and honing my skills in full-stack development.",
        "Let's get to know each other!"
    ];

    const handleNextContent = () => {
        setAboutMeIndex((prev) => (prev + 1) % aboutMeContent.length);
    };

    const renderContent = () => {
        switch(selectedSection) {
            case 'About Me':
                return (
                    <div className='aboutme-section'>
                        <img src={`${process.env.PUBLIC_URL}/images/about/aboutme/julie-idle.gif`}/>
                        <div className='textbox-container'>
                            <div className='textbox-overlay'>
                                <img src={`${process.env.PUBLIC_URL}/images/about/textbox-aboutme.png`}/>
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
                    <div>
                        <h2>Hobbies & Interests</h2>
                        <p>Let's get to know each other!</p>
                    </div>
                );
            case 'Current Challenge':
                return (
                    <div>
                        <h2>Current Challenge</h2>
                        <p>Currently working on building my portfolio and expanding my technical skills.</p>
                    </div>
                );
            default:
                return <p>Select a section</p>;
        }
    };

    return (
        <div className='aboutme-area'>
            <FadeInSection delay={0.2}>
                <h2>About Me</h2>
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