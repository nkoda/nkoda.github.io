import React from "react";
import MainSection from "./main-sections.component";
import Divider from '@mui/material/Divider';
import Box from '@mui/material'
import anime from 'animejs';
import { useEffect, useState } from "react";
import { Avatar } from '@mui/material';

import img_avatar from '../../assets/1654182881838.jpg'

import './css/main-section.css';



const HomeSection = () => {
    const welcomeMessages = [
        "Welcome to my Website",
        "Bienvenue sur mon site web", // French
        "Bienvenue sur mon site web", // French
        "Willkommen auf meiner Website", // German
        "私のウェブサイトへようこそ", // Japanese
        "Welcome to my Website",
        "欢迎来到我的网站" // Mandarin
    ]

    const [greeting, setGreeting] = useState(welcomeMessages[0]);

      function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    useEffect(() => {
        // This animation was borrowed from https://tobiasahlin.com/moving-letters/#12
        var textWrapper = document.querySelector('.ml12');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
        .add({
            targets: '.ml12 .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1500,
            delay: (el, i) => 500 + 30 * i
        }).add({
            targets: '.ml12 .letter',
            translateX: [0,-30],
            opacity: [1,0],
            easing: "easeInExpo",
            duration: 1500,
            delay: (el, i) => 100 + 30 * i,
        }).add({
            loopComplete: () => {
                const num = randomIntFromInterval(0, welcomeMessages.length-1);
                setGreeting(welcomeMessages[num])
            },
            delay: (el, i) => 100 + 30 * i,
        });
    }, [greeting, welcomeMessages]);
    
    return(
        <div class='Home'>
            <MainSection
                id='Home'
                content={
                    <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}>
                       <h1 class="ml12">{greeting}</h1>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
                        <div class="intro">
                        <Divider sx={{ borderBottomWidth: 2, background:"white", marginBottom:2 }} ></Divider>
                        <Divider sx={{ borderBottomWidth: 2, background:"white" }} ></Divider>
                        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                            <h2>Innovating tomorrow's world.</h2>
                            <h3>A Full Stack Developer and Data Scientist based in Vancouver, BC.</h3>
                        </div>
                        </div>
                        
                    </div>
                }/>
        </div>
    )
}

export default HomeSection;