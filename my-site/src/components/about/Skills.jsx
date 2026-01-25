import React, { useState } from 'react';
import FadeInSection from '../animations/FadeInSection';
import './Skills.css';

function Skills() {
    const [selectedCategory, setSelectedCategory] = useState('Frontend');
    const [hoveredSkill, setHoveredSkill] = useState(null);

    // Define skill categories with their icons
    const skillCategories = [
        { 
            name: 'Frontend', 
            icon: `${process.env.PUBLIC_URL}/images/about/skills/options/frontend.png`,
            skills: [
                { name: 'React', logo: `${process.env.PUBLIC_URL}/images/about/skills/frontend/react.png` },
                { name: 'TypeScript', logo: `${process.env.PUBLIC_URL}/images/about/skills/frontend/typescript.png` },
                { name: 'JavaScript', logo: `${process.env.PUBLIC_URL}/images/about/skills/frontend/javascript.png` },
                { name: 'HTML/CSS', logo: `${process.env.PUBLIC_URL}/images/about/skills/frontend//html-css.png` },
            ]
        },
        { 
            name: 'Backend', 
            icon: `${process.env.PUBLIC_URL}/images/about/skills/options/backend.png`,
            skills: [
                { name: 'Node.js', logo: `${process.env.PUBLIC_URL}/images/about/skills/backend/nodejs.png` },
                { name: 'Python', logo: `${process.env.PUBLIC_URL}/images/about/skills/backend/python.png` },
                { name: 'Java', logo: `${process.env.PUBLIC_URL}/images/about/skills/backend/java.png` },
                { name: 'SQL', logo: `${process.env.PUBLIC_URL}/images/about/skills/backend/sql.png` }
            ]
        },
        { 
            name: 'Tools', 
            icon: `${process.env.PUBLIC_URL}/images/about/skills/options/tools.png`,
            skills: [
                { name: 'Git', logo: `${process.env.PUBLIC_URL}/images/about/skills/tools/git.png` },
                { name: 'Visual Studio Code', logo: `${process.env.PUBLIC_URL}/images/about/skills/tools/vs-code.png` },
                { name: 'Figma', logo: `${process.env.PUBLIC_URL}/images/about/skills/tools/figma.png` },
                { name: 'Jest', logo: `${process.env.PUBLIC_URL}/images/about/skills/tools/jest.png` }
            ]
        },
        { 
            name: 'Education', 
            icon: `${process.env.PUBLIC_URL}/images/about/skills/options/education.png`,
            skills: [
                { 
                    name: 'University of Central Florida', 
                    logo: `${process.env.PUBLIC_URL}/images/about/skills/education/ucf.png`,
                    description: "Computer Science B.S. w/ Digital Media Minor" },
                { 
                    name: 'Indian River State College', 
                    logo: `${process.env.PUBLIC_URL}/images/about/skills/education/irsc.png`,
                    description: "Associates of Arts" },
            ],
        },
        { 
            name: 'Certifications', 
            icon: `${process.env.PUBLIC_URL}/images/about/skills/options/certifications.png`,
            skills: [
                { 
                    name: 'Oracle',
                    logo: `${process.env.PUBLIC_URL}/images/about/skills/certifications/oracle.png`,
                    description: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate" },
                { 
                    name: 'Coursera', 
                    logo: `${process.env.PUBLIC_URL}/images/about/skills/certifications/coursera.png`,
                    description: "Fundamentals of UI/UX Design - Microsoft" },
                { 
                    name: 'CodeSignal', 
                    logo: `${process.env.PUBLIC_URL}/images/about/skills/certifications/codesignal.png`,
                    description: "PHP Programming for Beginners" },
                { 
                    name: 'CodePath', 
                    logo: `${process.env.PUBLIC_URL}/images/about/skills/certifications/codepath.png`,
                    description: "Technical Interview Prep - Fall 2024, Web Development Honors - Spring 2025"},
                { 
                    name: 'LinkedIn', 
                    logo: `${process.env.PUBLIC_URL}/images/about/skills/certifications/linkedin.png`,
                    description: "Learning SQL Programming, Learning the JavaScript Language" },
                { 
                    name: 'TestOut', 
                    logo: `${process.env.PUBLIC_URL}/images/about/skills/certifications/testout.png`,
                    description: "Cyberdefense Pro Certification" },
            ],
        },
        { 
            name: 'Clubs', 
            icon: `${process.env.PUBLIC_URL}/images/about/skills/options/clubs.png`,
            skills: [
                
                { 
                    name: 'Knight Hacks', 
                    logo: `${process.env.PUBLIC_URL}/images/about/skills/clubs/knighthacks.png`,
                    description: "Hackathon Volunteer" },
                { 
                    name: 'Society of Women Engineers @ UCF', 
                    logo: `${process.env.PUBLIC_URL}/images/about/skills/clubs/swe.png`,
                    description: "College Day Volunteer" },
                { 
                    name: 'Korean Culture Club', 
                    logo: `${process.env.PUBLIC_URL}/images/about/skills/clubs/kcc.png`,
                    description: "Shining Knights K-Pop Dance Team" },
                { 
                    name: 'Girls Who Code @ UCF',
                    logo: `${process.env.PUBLIC_URL}/images/about/skills/clubs/gwc.png`,
                    description: "Treasurer & Vice President" },
                { 
                    name: 'Graphic Design Student Association', 
                    logo: `${process.env.PUBLIC_URL}/images/about/skills/clubs/gdsa.png`,
                    description: "Treasurer" },
                { 
                    name: 'Association of Computing Machinery', 
                    logo: `${process.env.PUBLIC_URL}/images/about/skills/clubs/acm.png`,
                    description: "Mentor" },
            ]
        },
    ];

    const getCurrentCategory = () => {
        return skillCategories.find(cat => cat.name === selectedCategory);
    };
    const getCurrentCategoryIndex = () => {
        return skillCategories.findIndex(cat => cat.name === selectedCategory);
    };

    return (
        <div className='skills-section'>
            <div className='skills-container'>
                {/* Left sidebar with circular icon buttons */}
                <div className='skills-sidebar'>
                    {skillCategories.map((category) => (
                        <button
                            key={category.name}
                            className={`skill-category-button ${selectedCategory === category.name ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category.name)}
                            title={category.name}
                        >
                            <img src={category.icon} alt={category.name} className='category-icon'/>
                        </button>
                    ))}
                </div>

                {/* Right content area */}
                
                <div className='skills-content'>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/about/skills/julie-peek.png`} 
                        alt='Character'
                        className='pixel-character-skills'
                    />
                    <FadeInSection key={selectedCategory}>
                        
                        <div className='skills-display'>
                            <div className='skills-circle-container'>
                                
                                <div className='skills-orbits'>
                                    <h3 className='skills-title'>{selectedCategory}</h3>
                                    
                                </div>
                                    {getCurrentCategory()?.skills.map((skill, index) => (
                                        <div 
                                            key={skill.name}
                                            className={`skill-item position-${index}`}
                                            style={{
                                                '--item-count': getCurrentCategory().skills.length,
                                                '--item-index': index,
                                                '--radius': getCurrentCategoryIndex() >= 3 ? '150px' : '130px'
                                            }}
                                            onMouseEnter={() => setHoveredSkill(skill)}
                                            onMouseLeave={() => setHoveredSkill(null)}
                                        >
                                            <div className='skill-logo-container'>
                                                <img 
                                                    src={skill.logo} 
                                                    alt={skill.name}
                                                    onError={(e) => {
                                                        // Fallback if image doesn't exist
                                                        e.target.style.display = 'none';
                                                        e.target.parentElement.innerHTML = `<div class="skill-placeholder">${skill.name[0]}</div>`;
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                        </div>
                    </FadeInSection>
                    {hoveredSkill && (
                        <div className='skill-tooltip'>
                            <h4>{hoveredSkill.name}</h4>
                            {hoveredSkill.description && <p>{hoveredSkill.description}</p>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Skills;
