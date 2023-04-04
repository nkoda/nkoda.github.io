import React from "react";
import MainSection from "./main-sections.component";
import Divider from '@mui/material/Divider';
import './css/projects-section.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import './css/projects-section.css'


const ProjectsSection = () => {
    const cardStyle = {
        width: '100%' ,
        backgroundColor: '#3e6169',
        color: "#CACACA"
    }
    const titleStyle = {
        color: 'white',
        fontWeight: 700
    }
    return (
      <div>
        <MainSection
          id='Home'
          content={
            <div>
              <h1>Projects</h1>
              <Grid container spacing={1} sx={{padding:4}}>
                <Grid item xs={12} sm={6} md={3}>
                  <Card sx={cardStyle}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                                    Project Atlas
                        </Typography>
                        <Typography variant="body2" >
                            Project Atlas is a web application that serves as a catalog
                            for various projects. It was developed by utilizing 
                            <b> Express.js</b> to create a <b>RESTful API</b> that serves the backend, 
                            and <b>React.js</b> to create a front-end single-page client with a
                            seamless user experience using libraries such as <b>Material UI</b>. 
                            The API endpoints were documented using <b>Swagger</b> to improve maintainability
                            and ensure seamless integration with the backend. Additionally, both the front-end
                            and backend applications were containerized using <b>Docker</b> to ensure 
                            consistency across different environments. The project demonstrated proficiency in web
                            development, RESTful API design, containerization, and documentation using Swagger. 
                        </Typography>

                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Card sx={cardStyle}>
                  <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                  <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                                    Twitter Reporter
                        </Typography>
                        <Typography variant="body2" >
                            A personal project where I power ChatGPT with Twitter's mass amount 
                            of live data from recent user tweets. This project leverages the concept 
                            of a collective mentality through the latest tweets from trending 
                            hashtags and creates a summary report with sentiment to inform people 
                            about the latest trends. I used <b>Node.js and Express.js</b> to serve the <b> REST API</b>, 
                            with <b>MongoDB</b> to save the trend reports, while using OpenAI API
                            and Twitter's Developer API for the business logic.
                        </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Card sx={cardStyle}>
                  <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                        Museums
                        </Typography>
                        <Typography variant="body2" >
                            Collaborated with a team within North America's largest 24-hour 
                            hackathon, NWHacks, to develop a social media application for 
                            people to share, view, and build communities around NFT 
                            artworks - garnering a $600 sponsor prize. I primarily focused on
                            developing the front-end using <b>React.js</b>, but I also contributed
                            to the backend, where I worked <b>gathering and cleaning data</b> 
                            using <b>RESTful endpoints</b>.
                        </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Card sx={cardStyle}>
                  <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                  <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                                    3D Metabolism
                        </Typography>
                        <Typography variant="body2" >
                            At my last work placement, I worked with a team of developers to 
                            develop for a 3D interactive data visualization web application and 
                            database to visualize the metabolic network from scratch. I worked and 
                            led an agile team as a junior developer to build the app using <b>JavaScript </b> and 
                            A-Frame.js to develop the front-end, model-view-presenter for
                            architecture. I also deployed an additional microservice utilizing <b>C#</b> to build the 
                            architecture, <b>Docker </b> to containerize the service environment, and <b> VMWare </b> to deploy the service onto the cloud, 
                            with <b>RESTful endpoints </b> for the client application usage. I additionally wrote <b>python scripts to extract, </b> 
                            <b>clean, and load large quantities of raw data</b> from multiple sources to 
                            populate our database.
                        </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          }
        />
      </div>
    );
  };

export default ProjectsSection;