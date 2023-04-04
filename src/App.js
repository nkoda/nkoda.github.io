import logo from './logo.svg';
import './App.css';
import Sidebar from './components/side-bar/side-bar.component';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import HomeSection from './components/main-sections/home.main-section';
import ResumeSection from './components/main-sections/resume.main-section';
import ProjectsSection from './components/main-sections/projects.main-section';
import ContactSection from './components/main-sections/contact.main-section';


const drawerWidth = 195;

function App() {
  return (
    <Box className="App" sx={{display: 'flex'}}>
      <CssBaseline />
      <Sidebar></Sidebar>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default'}}
      >
        <HomeSection/>
        <ResumeSection/>
        <ProjectsSection/>
        <ContactSection/>
      </Box>
    </Box>
  );
}

export default App;
