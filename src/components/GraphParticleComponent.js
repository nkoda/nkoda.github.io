import React, {useCallback} from 'react'
import {loadFull} from 'tsparticles'
import Particles from 'react-tsparticles'

const GraphParticleComponent = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine)
        await loadFull(engine)
    }, [])
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        background: {
            color: {
                value: "#07090f",
                // value:"FFFFFF"
            },
        },
        fpsLimit: 50,
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
                distance: 200,
                enable: true,
                opacity: 0.08,
                width: 3,
            },
            collisions: {
                enable: false,
            },
            move: {
                directions: "bottom",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 0.1,
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
                value: 0.05,
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

export default GraphParticleComponent