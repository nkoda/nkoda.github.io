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

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import BottomNavigation from '@mui/material/BottomNavigation';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';


const drawerWidth = 195;

function App({ window }) {
  const homeRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


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


const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{flex: 1, marginLeft:'auto' }}>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none'}}}
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Sidebar onClickButton={handleNavClick} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <Sidebar onClickButton={handleNavClick} />
        </Drawer>
      </Box>
      <Box
        className="main"
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#224b54', padding:2}}
      >
        <Grid container spacing={4} sx={{justifyContent:'center'}}>
          <Grid item xs={12}>
            <div ref={homeRef}>
              <HomeSection/>
              <div id="scroll-wrapper" style={{position:'absolute', top:'90%', left:'45%'}}>
                <div id="scroll-title">Scroll</div>
                <div id="scroll-down"></div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div ref={resumeRef}>
              <ResumeSection/>
              
            </div>
          </Grid>
          <Grid item xs={12} sx={{ height: isMobile ? '200vh' : '80vh' }}>
            <div ref={projectsRef}>
              <ProjectsSection/>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div ref={contactRef}>
              <ContactSection />
            </div>
          </Grid>
        </Grid>
        <BottomNavigation 
          sx={{
            width:'100%',
            backgroundColor:'#3e6169', 
            boxShadow:'0px 1px 0px #153237', 
            color:'white', 
            justifyContent:'center',
            }}>
          <Typography>
            © Copyright | Nikko Dumrique 2023 All Right Reserved
          </Typography>
        </BottomNavigation>
      </Box>
    </Box>
  );
}

export default App;