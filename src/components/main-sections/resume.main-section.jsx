import React from "react";
import MainSection from "./main-sections.component";
import Divider from '@mui/material/Divider';
import { Avatar, Grid, Typography } from '@mui/material';
import img_avatar from '../../assets/1654182881838.jpg'
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';

import './css/resume-section.css';

const ResumeSection = () => {
    return(
        <Grid container spacing={1} className="resume-section" justifyContent="center">
            <Grid item xs={12} md={6} justifyContent="center">
                <MainSection
                    id='Home'
                    content={
                        <div
                            style={{
                                display: 'inline-flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '80%',
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
                            <Typography 
                            sx={{
                                padding:4,
                                textAlign:'center',
                                color:"#CACACA"
                                }}>
                                    I’m a recent physics and data science graduate from the 
                                    University of British Columbia seeking new grad opportunities. 
                                    I’m a data science enthusiast with 2 years of experience in full-stack software development 
                                    at UBC’s Emerging Media Lab, where I led the development of educational web-based and 
                                    virtual-reality projects as a junior developer. Specialized in Python and Javascript, 
                                    experienced in React.js, Express.js ETL, SQL, NoSQL, and machine learning concepts.
                                    Outside of my work I enjoy skiing, cooking, and travelling the world. 
                            </Typography>
                        </div>
                    }/>
            </Grid>
            <Grid item xs={12} md={6} >

                <Typography variant="h4">Experience</Typography>
                <Divider sx={{ borderBottomWidth: 2, background:"white", marginBottom:2 }} ></Divider>
                <Divider sx={{ borderBottomWidth: 2, background:"white", marginBottom:2 }} ></Divider>
                <ul style={{paddingLeft: "15px"}}>
                    <li style={{display: "block"}}><b>UBC Emerging Media Labs:</b> Lead Junior Software Developer</li>
                    <li style={{display: "block", paddingTop:4}}>05/2021 - 08/2021</li>
                    <li style={{display: "block", paddingTop:10}}><b>UBC Emerging Media Labs:</b> Junior Software Developer</li>
                    <li style={{display: "block", paddingTop:4 }}>05/2020 - 04/2021</li>
                    <li style={{display: "block", paddingTop:10}}><b>UBC Emerging Media Labs:</b> Volunteer VR/AR Developer</li>
                    <li style={{display: "block", paddingTop:4}}>09/2019 - 04/2020</li>
                </ul>
                <Typography variant="h4">Technologies</Typography>
                <Divider sx={{ borderBottomWidth: 2, background:"white", marginBottom:2 }} ></Divider>
                <Divider sx={{ borderBottomWidth: 2, background:"white", marginBottom:2 }} ></Divider>
                <div style={{display:"flex",}}>
                <ul>
                    <li style={{display: "block", paddingTop:5}}><b>Languages:</b>  Javascript, Python, C#, Java</li>
                    <li style={{display: "block", paddingTop:5}}><b>Databases:</b>  Oracle SQL, MongoDB, MySQL</li>
                    <li style={{display: "block", paddingTop:5}}><b>Frameworks:</b>  React, Node Express.js, Scikit-learn, PyTest, Junit, Pandas</li>
                    <li style={{display: "block", paddingTop:5}}><b>Technologies:</b>  Docker, Git, Github, Jupyter, Unity</li>
                    <li style={{display: "block", paddingTop:5}}><b>Concepts:</b>  TDD, OOP, SOLID, Data Processing and Modelling, Data Visualization</li>
                </ul>
                </div>
                <Typography variant="h4">Education</Typography>
                <Divider sx={{ borderBottomWidth: 2, background:"white", marginBottom:2 }} ></Divider>
                <Divider sx={{ borderBottomWidth: 2, background:"white", marginBottom:2 }} ></Divider>
                <ul>
                <li><b>University of British Columbia:</b> B.Sc Physics, Minor in Data Science</li>
                </ul>
            </Grid>
        </Grid>
    )
}

export default ResumeSection;
