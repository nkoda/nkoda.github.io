import React from 'react'
import NavigationBarComponent from '../components/NavigationBarComponent'
import GraphParticleComponent from '../components/GraphParticleComponent'
import {Button} from '@mui/material'

import CardComponent from '../components/CardComponent'
import {Grid} from '@mui/material';
import './Contact.css'
const Contact = () => {
  return (
    <div>
        <NavigationBarComponent/>
        <GraphParticleComponent/>
        <div className='contact'>
          <h1>Contact</h1>
          <div className='contact-container'>
            <p>I am currently looking for new graduate opportunities in data analytics, data science, and software development.
            Whether you have a question or just want to reach out, I would love to chat.</p>
            <div style={{paddingTop:'2rem'}}></div>
            <a href='mailto:dumriquenikko@gmail.com'>
                <Button variant="contained" size="large" style={{
                    borderRadius: 35,
                    backgroundColor: "#ffffff",
                    color:'#000000',
                    fontSize: "16px"}}>Get in Touch</Button>
            </a>
            {/* <SocialsComponent></SocialsComponent> */}
          </div>
        </div>
    </div>
  )
}

export default Contact