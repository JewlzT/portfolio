import './Project.css'
import { MediaQuery } from 'react-responsive';
import { BREAKPOINT_VALUES } from '../../constants/breakpoints';

interface ProjectProps {
    project_name: string;
    image_link: string;
    alt_text: string;
    animation_duration: number;
    // add links after building Project Pages
}



function Project ({image_link, alt_text, project_name, animation_duration = 3}: ProjectProps){
    const projectStyle = {
        animationDuration: `${animation_duration}s`
    };
    return(
        <>
            <MediaQuery maxWidth={BREAKPOINT_VALUES.tablet_max}>
                <div className='project' style={projectStyle}>
                    <button>
                        <img src={image_link} alt={alt_text}/>
                    </button>
                    <p>{project_name}</p>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={BREAKPOINT_VALUES.desktop_min}>
                <div className='project' style={projectStyle}>
                    <button>
                        <img src={image_link} alt={alt_text}/>
                    </button>
                    <p>{project_name}</p>
                </div>
            </MediaQuery>
        </>
    );
}

export default Project;