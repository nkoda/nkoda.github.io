import React from 'react'
import {Avatar} from '@mui/material'
import {FaLinkedin, FaEnvelope, FaGithub} from 'react-icons/fa'
import GraphParticleComponent from './GraphParticleComponent'

import './AboutMeComponent.css'

const AboutMeComponent = () => {
  return (
  <div>
    <GraphParticleComponent/>
    <div className='content'>
        <Avatar className='profile' alt="Nikko Dumrique" 
          src="https://media-exp1.licdn.com/dms/image/C5603AQHr33fvL8y4ZQ/profile-displayphoto-shrink_800_800/0/1654182881838?e=1675900800&v=beta&t=nh9brUnXP2vOiitzbnCw1QZLX_sWRmyLgzRgGmicDw0" 
          sx = {{width:'15%', height:'auto', justifyContent: "center", display: "inline-flex"}} ></Avatar>
        <h1>About Me:</h1>
        <p>
        I’m a recent physics and data science graduate from the University of British Columbia seeking new grad opportunities. 
        I’m a data science enthusiast with 2 years of experience in full-stack software development at UBC’s Emerging Media Lab, 
        where I led the development of educational web-based and virtual-reality projects.
        </p>
        <p>
        Specialized in Python, experienced in React.js, ETL, SQL, NoSQL, and machine learning concepts.
        </p>
        <p>
            Come say hi, I'd love to talk about any of the topics above.
        </p>
    <div>
        <a href='https://www.linkedin.com/in/nikkodumrique/' target='_blank'>
          <FaLinkedin size={40} style={{color: '#fff', marginRight: '2rem'}}></FaLinkedin>
        </a>
        <a href='https://github.com/nkoda' target='_blank'>
          <FaGithub size={40} style={{color: '#fff', marginRight: '2rem'}}></FaGithub>
        </a>
        <a href='mailto:dumriquenikko@gmail.com'>
          <FaEnvelope size={40} style={{color: '#fff'}}></FaEnvelope>
        </a>
    </div>
  </div>
  </div>

)
}

export default AboutMeComponent
