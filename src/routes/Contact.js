import React from 'react'
import NavigationBarComponent from '../components/NavigationBarComponent'
import GraphParticleComponent from '../components/GraphParticleComponent'
import {FaLinkedin, FaEnvelope, FaGithub} from 'react-icons/fa'

import './Contact.css'
const Contact = () => {
  return (
    <div>
        <NavigationBarComponent/>
        <GraphParticleComponent/>
        <div className='contact'>
            <h1>Contact</h1>
            <h2>Come say hi! I would love to chat.</h2>
            <div className='contact-container'>
                <a href='https://www.linkedin.com/in/nikkodumrique/' target='_blank'>
                    <FaLinkedin size={40} style={{color: '#fff', marginRight: '2rem'}}></FaLinkedin>
                    <p>Linkedin: nikkodumrique</p>
                </a>
                <a href='https://github.com/nkoda' target='_blank'>
                    <FaGithub size={40} style={{color: '#fff', marginRight: '2rem'}}></FaGithub>
                    <p>Github: nkoda</p>
                </a>
                <a href='mailto:dumriquenikko@gmail.com'>
                    <FaEnvelope size={40} style={{color: '#fff', marginRight: '2rem'}}></FaEnvelope>
                    <p>Email: dumriquenikko@gmail.com</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact