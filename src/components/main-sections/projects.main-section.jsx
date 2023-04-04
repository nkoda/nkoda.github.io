import React from "react";
import MainSection from "./main-sections.component";
import Divider from '@mui/material/Divider';
import './css/projects-section.css';

const ProjectsSection = () => {
    return(
        <div>
            <MainSection
                id='Home'
                content={
                    <div>
                        <h1>Projects</h1>
                    </div>
                }/>
            <Divider></Divider>
        </div>
    )
}

export default ProjectsSection;