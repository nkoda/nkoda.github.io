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
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <CottageOutlinedIcon>
            </CottageOutlinedIcon>
            <ListItemText primary='Home'/>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <WorkOutlineOutlinedIcon />
            <ListItemText primary='Resume'/>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <EngineeringOutlinedIcon />
            <ListItemText primary='Projects'/>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <ForumOutlinedIcon />
            <ListItemText primary='Contact'/>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </List>
  </Drawer>
  );
}

export default SideBar;