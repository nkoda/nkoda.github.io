import React from "react";
import Box from '@mui/material/Box';

const MainSection = ({ id, content, color='#F4F4F4'}) => {
    return(
        <div>
            <Box
            id={id}
            sx={{height: '100vh', bgcolor: color }}
            >
                {content}
            </Box>
        </div>
    )
}

export default MainSection;