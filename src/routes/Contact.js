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
        <Grid container spacing={4}>
          {/* <Grid item xs={2} sm={6} md={4}>
            <CardComponent></CardComponent>
          </Grid> */}
          <Grid item xs={2} sm={6} md={4}>
            <CardComponent 
              url='https://eml.ubc.ca/files/2021/07/Screen-Shot-2021-07-23-at-12.26.23-AM-1-600x328.png' 
              text='t is important to note that the more diverse learning tools get developed, the better the student experience becomes. While visual learners might primarily benefit from emerging media and 3D technologies, even verbal and auditory learners can use them as additional resources which complement textbooks, slides, and other lecture materials.  

              Metabolism is typically known as a hard and cumbersome subject to learn. The team hopes that the work that they are doing through the 3D Metabolism project helps remove this stigma and makes it more interesting and fun for learners. Students tend to memorize metabolic pathways, and this application could make the pathways easier to remember.  '
              />
          </Grid>
        </Grid>
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