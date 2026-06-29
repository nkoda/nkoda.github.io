import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import DataLinesBackground from './components/background/data-lines-background';
import SideBar, { navItems } from './components/side-bar/side-bar.component';
import HomeSection from './components/main-sections/home.main-section';
import AboutSection from './components/main-sections/about.main-section';
import ExperienceSection from './components/main-sections/experience.main-section';
import SkillsSection from './components/main-sections/skills.main-section';
import ProjectsSection from './components/main-sections/projects.main-section';
import ContactSection from './components/main-sections/contact.main-section';
import { palette } from './theme';

const drawerWidth = 244;

function App() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  const handleNavigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', position: 'relative' }}>
      <DataLinesBackground />

      {/* Mobile top bar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          display: { md: 'none' },
          background: 'rgba(8, 12, 17, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${palette.border}`,
          zIndex: (t) => t.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{ color: palette.textPrimary, mr: 1.5 }}
            aria-label="open navigation"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              color: palette.textPrimary,
            }}
          >
            Nikko Dumrique
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Navigation */}
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        {isDesktop ? (
          <Drawer
            variant="permanent"
            open
            PaperProps={{
              sx: {
                width: drawerWidth,
                border: 'none',
                background: 'transparent',
              },
            }}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <SideBar onNavigate={handleNavigate} active={active} />
          </Drawer>
        ) : (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            ModalProps={{ keepMounted: true }}
            PaperProps={{
              sx: { width: drawerWidth, border: 'none', background: palette.bg },
            }}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <SideBar onNavigate={handleNavigate} active={active} />
          </Drawer>
        )}
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          position: 'relative',
          zIndex: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          pt: { xs: 7, md: 0 },
        }}
      >
        <HomeSection onNavigate={handleNavigate} />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </Box>
    </Box>
  );
}

export default App;
