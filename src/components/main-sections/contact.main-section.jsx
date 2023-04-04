import React from "react";
import MainSection from "./main-sections.component";
import Divider from '@mui/material/Divider';

const ContactSection = () => {
    return(
        <div>
            <MainSection
                style={{ position: 'sticky', top: 0, zIndex: 1, background: 'white', padding: '20px' }}
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