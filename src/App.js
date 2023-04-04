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
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const drawerWidth = 195;

function App() {
  const homeRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(windowWidth > 800);

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
    if (windowWidth <= 800) {
      setShowSidebar(false);
    }
  };

  const handleMenuClick = () => {
    setShowSidebar(!showSidebar);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      {windowWidth > 800 && <Sidebar onClickButton={handleNavClick} />}
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
      {showSidebar && windowWidth <= 800 && <Sidebar onClickButton={handleNavClick} />}
      {windowWidth <= 800 && (
          <IconButton 
            onClick={handleMenuClick} 
            sx={{position: 'absolute', top: '0', right: '0', zIndex: 9999}}>
              <div>
                {showSidebar ? <CloseIcon/> : <MenuIcon/>}
              </div>
          </IconButton>
      )}
    </Box>
  );
}

export default App;
