import React, { useState, useEffect } from "react";
import MainSection from "./main-sections.component";
import Divider from '@mui/material/Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';



const ContactSection = () => {
    const [cardHeight, setCardHeight] = useState(window.innerHeight);

    useEffect(() => {
      const handleResize = () => {
        setCardHeight(window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cardStyle = {
      width: '100%',
      height: cardHeight < 700 ? '30%' : '90%',
      backgroundColor: '#3e6169',
      color: '#CACACA',
      justifyContent: 'center',
      textAlign: 'center',
    };
    const titleStyle = {
        color: 'white',
        fontWeight: 700,
        alignItems:'center'
    }
    return (
      <div >
        <MainSection
          id='Links'
          content={
            <div>
                <h1>Links</h1>
              <Grid container spacing={2} sx={{justifyContent:'center', display:'flex'}}>
                <Grid item xs={6} sm={3} md={3}>
                    <Link href
                      ='https://www.linkedin.com/in/nikkodumrique/' 
                      target="_blank" 
                      rel="noopener"
                      underline="none"
                      >
                        <Card sx={cardStyle}>
                          <CardActionArea>
                            <Box sx={{padding:2}}>
                                <LinkedInIcon fontSize="large"/>
                            </Box>
                        <CardContent>    
                            <Typography gutterBottom variant="h6" component="div" sx={titleStyle}>
                                Linkedin
                                </Typography>
                                <Typography variant="body2" sx={{paddingBottom:2}}>
                                    Say 'Hi' on LinkedIn!
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                <
                    Link href='mailto:dumriquenikko@gmail.com' 
                    target="_blank" 
                    rel="noopener"
                    underline="none"
                    >
                  <Card sx={cardStyle}>
                    <CardActionArea>
                    <Box sx={{padding:2}}>
                        <EmailIcon fontSize="large"/>
                    </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={titleStyle}>
                        Email
                        </Typography>
                        <Typography variant="body2" sx={{paddingBottom:2}}>
                            Chat with me by email!
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                  </Card>
                  </Link>
                </Grid>
              <Grid item xs={6} sm={3} md={3}>
                <Link 
                  href='https://github.com/nkoda' 
                  target="_blank" 
                  rel="noopener"
                  underline="none"
                  >
                  <Card sx={cardStyle}>
                    <CardActionArea>
                    <Box sx={{padding:2}}>
                        <GitHubIcon fontSize="large"/>
                    </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={titleStyle}>
                        Github
                        </Typography>
                        <Typography variant="body2" sx={{paddingBottom:2}}>
                            Checkout my Github!
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                  </Card>
                  </Link>
                </Grid>
              <Grid item xs={6} sm={3} md={3}>
                <Link 
                  href='https://drive.google.com/file/d/1ozDNoW-gw0VWg-MWsA0DIVptMur8mc5g/view?usp=sharing' 
                  target="_blank" 
                  rel="noopener"
                  underline="none"
                  >
                  <Card sx={cardStyle}>
                    <CardActionArea>
                    <Box sx={{padding:2}}>
                        <AssignmentIndIcon fontSize="large"/>
                    </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={titleStyle}>
                        Resume
                        </Typography>
                        <Typography variant="body2" sx={{paddingBottom:2}}>
                            Read my Resume!
                        </Typography>
                    </CardContent>
                    </CardActionArea>
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