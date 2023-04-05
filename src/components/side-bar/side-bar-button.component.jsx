import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem';

const SideBarButton = ({ icon, label, onClick }) => {
    return (
        <ListItem
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
        <ListItemButton onClick={onClick}>
          <ListItemIcon >
            {icon}
            <ListItemText primary={label}/>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    )
}

export default SideBarButton;