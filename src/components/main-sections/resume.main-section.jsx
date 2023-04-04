import React from "react";
import MainSection from "./main-sections.component";
import Divider from '@mui/material/Divider';
import { Avatar, Grid, Typography } from '@mui/material';
import img_avatar from '../../assets/1654182881838.jpg'
import anime from 'animejs';
import { useState, useEffect } from "react";

import './css/resume-section.css';

const ResumeSection = () => {
    
    useEffect(() => {
        // Wrap every letter in a span
        var textWrapper = document.querySelector('.ml11 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
        anime.timeline({loop: true})
        .add({
            targets: '.ml11 .line',
            scaleY: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 1000
        })
        .add({
            targets: '.ml11 .line',
            translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
        }).add({
            targets: '.ml11 .letter',
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1000,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1)
        }).add({
            targets: '.ml11',
            opacity: 0,
            duration: 2000,
            easing: "easeOutExpo",
            delay: 1000
        });
    }, [])

    return(
        <Grid container spacing={3} className="resume-section" justifyContent="center">
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
                            <h1 class="ml11">
                            <span class="text-wrapper">
                                <span class="line line1"></span>
                                <span class="letters">About Me</span>
                            </span>
                            </h1>
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
                            <Typography 
                            sx={{
                                display: "block",
                                padding:4,
                                textAlign:'center',
                                color:"#CACACA"
                                }}>
                                    I transform data into insight. I’m a recent physics and data science graduate from the 
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
            <Grid item xs={12} md={6} marginTop={20}>

                <Typography variant="h4">Experience</Typography>
                <ul style={{paddingLeft: "15px"}}>
                    <li style={{display: "block"}}><b>UBC Emerging Media Labs:</b> Lead Junior Software Developer</li>
                    <li style={{display: "block", paddingTop:4}}>05/2021 - 08/2021</li>
                    <li style={{display: "block", paddingTop:10}}><b>UBC Emerging Media Labs:</b> Junior Software Developer</li>
                    <li style={{display: "block", paddingTop:4 }}>05/2020 - 04/2021</li>
                    <li style={{display: "block", paddingTop:10}}><b>UBC Emerging Media Labs:</b> Volunteer VR/AR Developer</li>
                    <li style={{display: "block", paddingTop:4}}>09/2019 - 04/2020</li>
                </ul>
                <Typography variant="h4">Education</Typography>
                <ul>
                <li><b>University of British Columbia:</b> B.Sc Physics, Minor in Data Science</li>
                </ul>
                <Typography variant="h4">Technologies</Typography>
                <div style={{display:"flex",}}>
                <ul>
                    <li style={{display: "block", paddingTop:5}}><b>Languages:</b>  Javascript, Python, C#, Java</li>
                    <li style={{display: "block", paddingTop:5}}><b>Databases:</b>  Oracle SQL, MongoDB, MySQL</li>
                    <li style={{display: "block", paddingTop:5}}><b>Frameworks:</b>  React, Node Express.js, Scikit-learn, PyTest, Junit, Pandas</li>
                    <li style={{display: "block", paddingTop:5}}><b>Technologies:</b>  Docker, Git, Github, Jupyter, Unity</li>
                    <li style={{display: "block", paddingTop:5}}><b>Concepts:</b>  TDD, OOP, SOLID, Data Processing and Modelling, Data Visualization</li>
                </ul>
                </div>

            </Grid>
        </Grid>
    )
}

export default ResumeSection;
