import React from 'react'
import NavigationBarComponent from '../components/NavigationBarComponent'
import GraphParticleComponent from '../components/GraphParticleComponent'

import './Contact.css'
import FooterComponent from '../components/SocialsComponent'
const Contact = () => {
  return (
    <div>
        <NavigationBarComponent/>
        <GraphParticleComponent/>
        <div className='contact'>
            <h1>Get In Touch</h1>
            <div className='contact-container'>
                <p>I am currently looking for new graduate opportunities in data analytics, data science, and software development.
                Whether you have a question or just want to reach out, I would love to chat.</p>
                <div style={{paddingTop:'1rem'}}></div>
                <FooterComponent></FooterComponent>
            </div>
        </div>
    </div>
  )
}

export default Contact