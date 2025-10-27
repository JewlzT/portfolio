import Project from "./Project";
import './Projects.css'
import { MediaQuery } from 'react-responsive';
import { BREAKPOINT_VALUES } from '../../constants/breakpoints';

function Projects () {
    return (
        <>
            <MediaQuery maxWidth={BREAKPOINT_VALUES.tablet_max}>
                <div className="mobile-projects-container">
                    <h2>Projects</h2>
                    <Project 
                        project_name="Personal Portfolio" 
                        image_link={`${process.env.PUBLIC_URL}/images/projects/portfolio.png`}
                        alt_text="Portfolio project"
                        animation_duration={5}
                    />
                    <Project 
                        project_name="Puter"
                        image_link={`${process.env.PUBLIC_URL}/images/projects/puter.png`}
                        alt_text="Puter project"
                        animation_duration={7}
                    />
                    <Project 
                        project_name="Talk With Tito"
                        image_link={`${process.env.PUBLIC_URL}/images/projects/talkwithtito.png`}
                        alt_text="Talk With Tito project"
                        animation_duration={3}
                    />
                    <Project 
                        project_name="SCHED"
                        image_link={`${process.env.PUBLIC_URL}/images/projects/sched.png`}
                        alt_text="Sched project"
                        animation_duration={8}
                    />
                </div>
            </MediaQuery>
            <MediaQuery minWidth={BREAKPOINT_VALUES.desktop_min}>
                <div className="mobile-projects-container">
                    <h2>Projects</h2>
                    <Project 
                        project_name="Personal Portfolio" 
                        image_link={`${process.env.PUBLIC_URL}/images/projects/portfolio.png`}
                        alt_text="Portfolio project"
                        animation_duration={5}
                    />
                    <Project 
                        project_name="Puter"
                        image_link={`${process.env.PUBLIC_URL}/images/projects/puter.png`}
                        alt_text="Puter project"
                        animation_duration={7}
                    />
                    <Project 
                        project_name="Talk With Tito"
                        image_link={`${process.env.PUBLIC_URL}/images/projects/talkwithtito.png`}
                        alt_text="Talk With Tito project"
                        animation_duration={3}
                    />
                    <Project 
                        project_name="SCHED"
                        image_link={`${process.env.PUBLIC_URL}/images/projects/sched.png`}
                        alt_text="Sched project"
                        animation_duration={8}
                    />
                </div>
            </MediaQuery>
        </>
        
    );
}

export default Projects;