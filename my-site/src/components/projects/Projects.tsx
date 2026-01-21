import React, { useState } from 'react';
import Project from "./Project";
import TooltipTextbox from "./TooltipTextbox";
import FadeInSection from '../animations/FadeInSection';
import './Projects.css'
import { MediaQuery } from 'react-responsive';
import { BREAKPOINT_VALUES } from '../../constants/breakpoints';
import projectsData from '../../data/projects.json';

interface ProjectData {
    name: string;
    image: string;
    alt: string;
    duration: number;
    type: string;
    teamType: string;
    dateRange?: string;
}

function Projects () {
    const [hoveredProject, setHoveredProject] = useState<ProjectData | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <FadeInSection delay={0.1}>
            <MediaQuery maxWidth={BREAKPOINT_VALUES.mobile_max}>
                <div className="mobile-projects-container">
                    <FadeInSection delay={0.2}>
                        <h2>Projects</h2>
                    </FadeInSection>
                    <div className="projects-grid mobile-grid">
                        {projectsData.project_data.map((project, index) => (
                            <FadeInSection key={index} delay={0.4 + (index * 0.2)}>
                                <Project 
                                    project_name={project.name}
                                    image_link={`${process.env.PUBLIC_URL}${project.image}`}
                                    alt_text={project.alt}
                                    animation_duration={project.duration}
                                />
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </MediaQuery>
            
            <MediaQuery minWidth={BREAKPOINT_VALUES.tablet_min}>
                <div className="desktop-projects-container">
                    <FadeInSection delay={0.2}>
                        <h2>Projects</h2>
                    </FadeInSection>
                    <div className="projects-grid desktop-grid">
                        {projectsData.project_data.map((project, index) => (
                            <FadeInSection key={index} delay={0.4 + (index * 0.2)} className="scale preserve-layout">
                                <Project 
                                    project_name={project.name}
                                    image_link={`${process.env.PUBLIC_URL}${project.image}`}
                                    alt_text={project.alt}
                                    animation_duration={project.duration}
                                    onImageHover={() => {
                                        setHoveredProject(project);
                                        setHoveredIndex(index);
                                    }}
                                    onImageLeave={() => {
                                        setHoveredProject(null);
                                        setHoveredIndex(null);
                                    }}
                                />
                            </FadeInSection>
                        ))}
                        
                        {/* Center image - keep this outside the grid */}
                        <div className="center-image">
                            <FadeInSection delay={1.0} className="scale preserve-layout">
                                <div className="center-image-tooltip">
                                    <img 
                                        src={`${process.env.PUBLIC_URL}/images/projects/julie-starfloat.gif`} 
                                        alt="My 8-bit character, floating on a star"
                                    />
                                    {hoveredProject && hoveredIndex !== null && (
                                        <TooltipTextbox
                                            projectName={hoveredProject.name}
                                            projectType={hoveredProject.type}
                                            teamType={hoveredProject.teamType}
                                            dateRange={hoveredProject.dateRange}
                                            show={!!hoveredProject}
                                            flip={hoveredIndex === 0 || hoveredIndex === 2}
                                        />
                                    )}
                                </div>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </FadeInSection>
    );
}

export default Projects;