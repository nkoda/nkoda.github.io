import React from "react";
import MainSection from "./main-sections.component";
import Divider from '@mui/material/Divider';

const HomeSection = () => {
    return(
        <div>
            <MainSection
                id='Home'
                content={
                    <div>
                        <h1>Home</h1>
                    </div>
                }/>
            <Divider></Divider>
        </div>
    )
}

export default HomeSection;