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
        "Transformez vos idées en logiciel.", // French
        "Crafting your ideas into software.", // English
        "Transformez vos idées en logiciel.", // French
        "Crafting your ideas into software.", // English
        "将 您 的 想 法 制 作 成 软 件。", // Mandarin
        "Transformez vos idées en logiciel.", // French
        "Crafting your ideas into software.", // English
        "あなた の アイデア を ソフトウェア に 作り上げる。", // Japanese
        "Gawing software ng iyong ideya.", //Tagalog
        "将 您 的 想 法 制 作 成 软 件。", // Mandarin
        "Crafting your ideas into software.", // English
        "あなた の アイデア を ソフトウェア に 作り上げる。", // Japanese
        "Transformez vos idées en logiciel.", // French
        "Crafting your ideas into software.", // English
      ];
      

    const [greeting, setGreeting] = useState(welcomeMessages[0]);
    const [index, setIndex] = useState(0)

      function incrementMessage() { // min and max included 
        if (index === welcomeMessages.length) {
            setIndex(0);
            
        } else {
            setIndex(index + 1);
        }
      }

    useEffect(() => {
        // This animation was borrowed from https://tobiasahlin.com/moving-letters/#12
        var textWrapper = document.querySelector('.ml12');
        textWrapper.innerHTML = textWrapper.textContent.split(/\s/)
        .map((word) => {
          return `<span class='word'>${word
            .split(' ')
            .map((letter) => `<span class='letter'>${letter}</span>`)
            .join('')}</span>`;
        })
        .join(' ');

        anime.timeline({loop: true})
        .add({
            targets: '.ml12 .word .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeInOutElastic(1, .6)",
            duration: 3000,
            delay: (el, i) => 500 + 30 * i
        }).add({
            targets: '.ml12 .word .letter',
            translateX: [0,-30],
            opacity: [1,0],
            easing: "easeInOutElastic(1, .6)",
            duration: 2000,
            delay: (el, i) => 100 + 30 * i,
        }).add({
            loopComplete: () => {
                incrementMessage();
                setGreeting(welcomeMessages[index])
            }
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
                            <h2>Turning data into value with full-stack expertise.</h2>
                            <h3>A Full Stack Developer and Data Scientist based in Vancouver, BC.</h3>
                        </div>
                        </div>
                        
                    </div>
                }/>
        </div>
    )
}

export default HomeSection;