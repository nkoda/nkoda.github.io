import logo from './logo.svg';
import './App.css';
import Sidebar from './components/side-bar/side-bar.component';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import HomeSection from './components/main-sections/home.main-section';
import ResumeSection from './components/main-sections/resume.main-section';
import ProjectsSection from './components/main-sections/projects.main-section';
import ContactSection from './components/main-sections/contact.main-section';
import React, { useState, useRef, useEffect } from 'react';
import anime from 'animejs';//TODO

const drawerWidth = 195;

function App() {
  const homeRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleNavClick = (state) => {
    switch(state) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'resume':
        resumeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    console.log(windowWidth)
  }, [windowWidth])

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      {windowWidth >= 900 && <Sidebar onClickButton={handleNavClick} />}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#224b54'}}
      >
        <div ref={homeRef}>
          <HomeSection/>
        </div>
        <div ref={resumeRef}>
          <ResumeSection/>
        </div>
        <div ref={projectsRef}>
          <ProjectsSection/>
        </div>
        <div ref={contactRef}>
          <ContactSection/>
        </div>
      </Box>
    </Box>
  );
}

export default App;