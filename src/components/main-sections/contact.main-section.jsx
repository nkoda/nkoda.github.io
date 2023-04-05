import React from "react";
import MainSection from "./main-sections.component";
import Divider from '@mui/material/Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';


const ContactSection = () => {
    
    const cardStyle = {
        width: '100%' ,
        height:'100%',
        backgroundColor: '#3e6169',
        color: "#CACACA",
        justifyContent:'center',
        textAlign:'center'
    }
    const titleStyle = {
        color: 'white',
        fontWeight: 700,
        alignItems:'center'
    }
    return (
      <div>
        <MainSection
          id='Links'
          content={
            <div>
              <h1>Links</h1>
              <Grid container spacing={4} sx={{padding:4, justifyContent:'center', display:'flex', paddingLeft:5}}>
                <Grid item xs={12} sm={6} md={3}>
                    <Link href='https://www.linkedin.com/in/nikkodumrique/' target="_blank" rel="noopener">
                        <Card sx={cardStyle}>
                            <Box sx={{padding:5}}>
                                <LinkedInIcon fontSize="large"/>
                            </Box>
                        <CardContent>    
                            <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                                Linkedin
                                </Typography>
                                <Typography variant="body2" >
                                    Say 'Hi' on LinkedIn!
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Link href='mailto:dumriquenikko@gmail.com' target="_blank" rel="noopener">
                  <Card sx={cardStyle}>
                    <Box sx={{padding:5}}>
                                <EmailIcon fontSize="large"/>
                    </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                        Email
                        </Typography>
                        <Typography variant="body2" >
                            Chat with me by email!
                        </Typography>
                    </CardContent>
                  </Card>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Link href='https://github.com/nkoda' target="_blank" rel="noopener">
                  <Card sx={cardStyle}>
                    <Box sx={{padding:5}}>
                                <GitHubIcon fontSize="large"/>
                    </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                        Email
                        </Typography>
                        <Typography variant="body2" >
                            Checkout my Github
                        </Typography>
                    </CardContent>
                  </Card>
                  </Link>
                </Grid>
              </Grid>
            </div>
          }
        />
      </div>
    );
  };
export default ContactSection;