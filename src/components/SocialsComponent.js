import React from 'react'
import {FaLinkedin, FaEnvelope, FaGithub} from 'react-icons/fa'

const FooterComponent = () => {
  return (
    <div className='footer'>
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
  )
}

export default FooterComponent