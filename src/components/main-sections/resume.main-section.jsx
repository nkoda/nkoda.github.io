import React from "react";
import MainSection from "./main-sections.component";
import Divider from '@mui/material/Divider';
import { Avatar, Grid, Typography } from '@mui/material';
import img_avatar from '../../assets/1654182881838.jpg'

const ResumeSection = () => {
    return(
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <MainSection
                    id='Home'
                    content={
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '80%'
                            }}>
                            <Avatar
                                className="profile"
                                alt="Nikko Dumrique"
                                src={img_avatar}
                                sx={{
                                    width: "15vh",
                                    height: "auto",
                                    justifyContent: "center",
                                    display: "inline-flex",
                                }}
                            ></Avatar>
                            <Typography variant="h3">About Me</Typography>
                        </div>
                    }/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h4">Experience</Typography>
                <ul>
                    <li>Emerging Media Labs: Lead Junior Software Developer</li>
                    <li>Emerging Media Labs: Junior Software Developer</li>
                </ul>
                <Typography variant="h4">Education</Typography>
                <ul>
                    <li>University of British Columbia: B.Sc Physics, Minor in Data Science</li>
                </ul>
                <Typography variant="h4">Technologies</Typography>
                <ul>
                    <li>Node.js</li>
                    <li>React.js</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>MySQL</li>
                </ul>
            </Grid>
            <Grid item xs={12}>
                <Divider></Divider>
            </Grid>
        </Grid>
    )
}

export default ResumeSection;
