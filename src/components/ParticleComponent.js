import React, {useCallback} from 'react'
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import {Avatar} from '@mui/material'
import {FaLinkedin, FaEnvelope, FaGithub} from 'react-icons/fa'
import './ParticleComponent.css'

const ParticleComponent = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine)
    await loadFull(engine)
  }, [])
  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  return (
  <div>
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
          background: {
              color: {
                  value: "#07090f",
              },
          },
          fpsLimit: 60,
          interactivity: {
              events: {
                  onClick: {
                      enable: false,
                      mode: "push",
                  },
                  onHover: {
                      enable: true,
                      mode: "grab",
                  },
                  resize: true,
              },
              modes: {
                  push: {
                      quantity: 4,
                  },
                  repulse: {
                      distance: 20,
                      duration: 0.2,
                  },
              },
          },
          particles: {
              color: {
                  // value: "#A6A6A8",
                  value: "#517572",
              },
              links: {
                  // color: "#ffffff",
                  color: "#a37518",
                  distance: 250,
                  enable: true,
                  opacity: 0.1,
                  width: 3,
              },
              collisions: {
                  enable: true,
              },
              move: {
                  directions: "bottom",
                  enable: true,
                  outModes: {
                      default: "out",
                  },
                  random: false,
                  speed: 0.3,
                  straight: true,
              },
              number: {
                  density: {
                      enable: true,
                      area: 800,
                  },
                  value: 200,
              },
              opacity: {
                  value: 0.1,
              },
              shape: {
                  type: "edge",
              },
              size: {
                  value: { min: 1, max: 5 },
              },
          },
          detectRetina: true,
      }}
    />
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

export default ParticleComponent
