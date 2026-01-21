// components/ui/TooltipTextbox.tsx
import React from 'react';
import './TooltipTextbox.css';

interface TooltipTextboxProps {
    projectName: string;
    projectType: string;
    teamType: string;
    dateRange?: string;
    show: boolean;
    flip: boolean;
}

const TooltipTextbox: React.FC<TooltipTextboxProps> = ({
    projectName,
    projectType, 
    teamType,
    dateRange,
    show,
    flip
}) => {
    return (
        <div className={`tooltip-textbox ${show ? 'show' : ''} ${flip ? 'flipped' : ''}`}>
            <div className="textbox-content">
                <h4 className="project-name">{projectName}</h4>
                <p className="project-type">{projectType}</p>
                <p className="team-type">[{teamType}]</p>
                {dateRange && <p className="date-range">{dateRange}</p>}
            </div>
        </div>
    );
};

export default TooltipTextbox;