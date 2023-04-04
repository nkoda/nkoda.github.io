import React from "react";
import MainSection from "./main-sections.component";
import Divider from '@mui/material/Divider';

const ContactSection = () => {
    return(
        <div>
            <MainSection
                id='Home'
                content={
                    <div>
                        <h1>Contact</h1>
                    </div>
                }/>
            <Divider></Divider>
        </div>
    )
}

export default ContactSection;