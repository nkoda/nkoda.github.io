import React from 'react'
import {Card, CardContent, CardMedia, Typography, Badge} from '@mui/material'

import './CardComponent.css'
const CardComponent = (props) => {
    const params = props
    const styles = {
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9,
          marginTop:'30'
        }
    };
    
  return (
    <Card sx={{maxWidth:3005}}>
        <CardMedia
            Component='img'
            height='90'
            image={params.url}
            style={styles.media}
        />
        <Badge 
            overlap="circular" 
            badgeContent={4} 
            sx={{ "& .MuiBadge-badge": { fontSize: 40, height: 400, minWidth: 400, color:'red' } }}>
            <CardContent>
                <Typography variant='h4' component='div'>
                    TEST PROJECT
                </Typography>
                <div>
                </div>
                <Typography variant='p'>
                    {params.text}
                </Typography>
            </CardContent>
        </Badge>
    </Card>
  )
}

export default CardComponent