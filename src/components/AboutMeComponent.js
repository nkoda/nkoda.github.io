import React from 'react'
import {Avatar} from '@mui/material'
import {FaLinkedin, FaEnvelope, FaGithub} from 'react-icons/fa'
import GraphParticleComponent from './GraphParticleComponent'
import img_3DMetabolism from '../assets/3dmetabolism.png'
import img_museums from '../assets/museums.png'

import './AboutMeComponent.css'
import FooterComponent from './SocialsComponent'

const AboutMeComponent = () => {
  return (
    <div>
      <GraphParticleComponent />
      <div className="content">
        <div className="section">
          <div className="slogan-right"></div>
          <div className="slogan-left">
            <Avatar
              className="profile"
              alt="Nikko Dumrique"
              src="https://media-exp1.licdn.com/dms/image/C5603AQHr33fvL8y4ZQ/profile-displayphoto-shrink_800_800/0/1654182881838?e=1675900800&v=beta&t=nh9brUnXP2vOiitzbnCw1QZLX_sWRmyLgzRgGmicDw0"
              sx={{
                width: "13vh",
                height: "auto",
                justifyContent: "center",
                display: "inline-flex",
              }}
            ></Avatar>
            <h1>Nikko Dumrique.</h1>
            <h2>I transform data into insight.</h2>
            <p>
              I’m a{" "}
              <span className="highlight">
                {" "}
                recent physics and data science graduate{" "}
              </span>
              from the University of British Columbia{" "}
              <span className="highlight">seeking new grad opportunities. </span>
              I’m a data science enthusiast with{" "}
              <span className="highlight">
                2 years of experience in full-stack software development{" "}
              </span>
              at UBC’s Emerging Media Lab, where I led the development of
              educational web-based and virtual-reality projects.
            </p>
            <p>
              Specialized in <span className="highlight">Python </span>,
              experienced in{" "}
              <span className="highlight">
                React.js, ETL, SQL, NoSQL, and machine learning concepts.{" "}
              </span>
            </p>
            <p>
              Outside of my work I enjoy skiing, cooking, and travelling the
              world.
            </p>
            <p>Come say hi, I'm always curious about new opportunities.</p>
            
          </div>
          </div>

          <div className="section">
          <FooterComponent></FooterComponent>
          </div>

      <div className="Projects">
        <div className="section">
          <h1>Projects:</h1>
        </div>
        <div className="section">
          <div className="slogan-right"></div>
          <div className="slogan-left">

            <h1>3DMetabolism</h1>
            <h2>Lead Junior Software Developer</h2>
            <img src={img_3DMetabolism} class='responsive' width='400px' ></img>
            <p>
              At my last work placement, I worked with a team of developers 
              to develop for a 3D interactive data visualization web application and database 
              to visualize the metabolic network from scratch.
            </p>
            <p>
              I worked and led an agile team to build the app using JavaScript and A-Frame.js to develop the front-end, 
              model-view-presenter for architecture. I also deployed an additional service utilizing Docker and VMWare
              to act as a centralized, user-friendly database with RESTful endpoints for the main application. I additionally 
              wrote python scripts to extract, clean, and load large quantities of raw data from multiple sources to populate our database.
            </p>
          </div>
        </div>
                <div className="intro">
          <div className="slogan-right"></div>
          <div className="slogan-left">

            <h1>Museums</h1>
            <h2>Full-Stack Developer</h2>
            <img src={img_museums} class='responsive' width='400px' ></img>
            <p>
              Collaborated with a team within North America's largest 24-hour hackathon, 
              NWHacks, to develop a social media application for people to share, view, and build communities
              around NFT artworks - garnering a $600 sponsor prize. I primarily focused on developing the front-end using React.js, but I also
              contributed to the backend, where I worked gathering and cleaning data using RESTful endpoints.
            </p>
          </div>
        </div>
        </div>
      <div className="section">
          <div className="section"></div>
          <FooterComponent></FooterComponent>
      </div>
      </div>
    </div>
  );
}

export default AboutMeComponent
