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
          fpsLimit: 120,
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
                  value: "#A6A6A8",
              },
              links: {
                  color: "#ffffff",
                  distance: 230,
                  enable: true,
                  opacity: 0.1,
                  width: 1,
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
                  speed: 0.2,
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
        <h1>About Me.</h1>
        <p className='description'>
            A recent physics and data science graduate from the University of British Columbia looking for new grad opportunities. 
            A detail-oriented individual and data science enthusiast with 2 years of experience in full-stack software development at Emerging Media Lab. 
            I am driven to apply my technical aptitude by designing, optimizing, and implementing data processes to transform raw data into gain insights to improve clientele experiences. 
            Specialized in Python, experienced in React.js, ETL, SQL, NoSQL, and machine learning concepts. 
        </p>
        <p>
            In my spare time I enjoy spending time with my family and friends, skiing, watching TV shows, beach volleyball,
            and travelling. So far I've been to 13 countries in 3 continents! On the weekends you can either find me cafe hunting
            or working my car. 
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
          <FaEnvelope size={40} style={{color: '#fff', marginRight: '2rem'}}></FaEnvelope>
        </a>
    </div>
  </div>
  </div>

)
}

export default ParticleComponent
