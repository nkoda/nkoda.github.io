import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import SideBarButton from './side-bar-button.component';

const drawerWidth = 240;

const SideBar = ()  => {
  return (
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <h2>Nikko</h2>
    <Divider />
    <List
      sx = {{    
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <SideBarButton
        icon={<CottageOutlinedIcon/>}
        label='Home'
        onClick={console.log('hi')}
      ></SideBarButton>
      <SideBarButton
        icon={<WorkOutlineOutlinedIcon/>}
        label='Resume'
        onClick={console.log('hi')}
      ></SideBarButton>
      <SideBarButton
        icon={<EngineeringOutlinedIcon/>}
        label='Projects'
        onClick={console.log('hi')}
      ></SideBarButton>
      <SideBarButton
        icon={<ForumOutlinedIcon/>}
        label='Contact'
        onClick={console.log('hi')}
      ></SideBarButton>
    </List>
  </Drawer>
  );
}

export default SideBar;