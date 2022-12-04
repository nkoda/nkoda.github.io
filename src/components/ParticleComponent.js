import React, {useCallback} from 'react'
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import {Avatar} from '@mui/material'
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
                      enable: true,
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
    <div className='intro'>
      {/* <Image source={require('../assets/1654182881838.jpeg')} style={{width: 400, height: 40, borderRadius: 200}}/> */}
      <div className='about-me'>
        <ul className='about-me-items'>  
          <li>
            <h1 className="title">
              About Me
            </h1>  
          </li>
          <li>
            <Avatar className='profile' alt="Nikko Dumrique" 
                  src="https://media-exp1.licdn.com/dms/image/C5603AQHr33fvL8y4ZQ/profile-displayphoto-shrink_800_800/0/1654182881838?e=1675900800&v=beta&t=nh9brUnXP2vOiitzbnCw1QZLX_sWRmyLgzRgGmicDw0" 
                  sx = {{width:'15%', height:'15%', justifyContent: "center", display: "flex"}} ></Avatar>
          </li>
          <li>
          <h2 className='description'>
            I am a recent graduate from the University of British Columbia looking for new grad opportunities. 
            A detail-oriented new graduate and aspiring Data Engineer with 2 years of experience in software development. 
            Driven to apply my technical aptitude at Visa Incorporated by designing, optimizing, and implementing data processes to transform raw data into gain insights to improve clientele experiences. Specialized in Python, experienced in ETL, SQL, NoSQL,  and database concepts. 
          </h2>
          </li>
        </ul>
      </div>
    </div>
  </div>

)
}

export default ParticleComponent
