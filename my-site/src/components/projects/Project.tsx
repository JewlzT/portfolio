import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'
import { MediaQuery } from 'react-responsive';
import { BREAKPOINT_VALUES } from '../../constants/breakpoints';

interface ProjectProps {
    project_name: string;
    image_link: string;
    alt_text: string;
    animation_duration?: number;
    pageLink: string;
    onImageHover?: () => void;
    onImageLeave?: () => void;
}

function Project ({ 
    image_link, 
    alt_text, 
    project_name, 
    animation_duration = 3,
    pageLink,
    onImageHover,
    onImageLeave 
}: ProjectProps){
    const projectStyle = {
        animationDuration: `${animation_duration}s`
    };

    return(
        <>
            <MediaQuery maxWidth={BREAKPOINT_VALUES.tablet_max}>
                <div className='project' style={projectStyle}>
                    <Link to={pageLink}>
                        <img src={image_link} alt={alt_text}/>
                    </Link>
                    <p>{project_name}</p>
                </div>
            </MediaQuery>
            
            <MediaQuery minWidth={BREAKPOINT_VALUES.desktop_min}>
                <div className='project' style={projectStyle}>
                    <Link to={pageLink}>
                        <img 
                            src={image_link} 
                            alt={alt_text}
                            onMouseEnter={onImageHover}
                            onMouseLeave={onImageLeave}
                        />
                    </Link>
                    <p>{project_name}</p>
                </div>
            </MediaQuery>
        </>
    );
}

export default Project;