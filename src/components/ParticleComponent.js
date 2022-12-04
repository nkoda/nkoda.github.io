import React, {useCallback} from 'react'
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'

const ParticleComponent = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine)
    await loadFull(engine)
  }, [])
  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  return (<Particles
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
)
}

export default ParticleComponent
