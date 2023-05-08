import React, {useEffect, useState} from "react";
import MainSection from "./main-sections.component";
import './css/projects-section.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import img_3DMetabolism from '../../assets/3dmetabolism.png';
import img_museums from '../../assets/museums.png';
import img_twitterReporterApi from '../../assets/twitter_reporter_api.png';
import img_atlas from '../../assets/atlas.png';
import img_jupyter from '../../assets/jupyter.webp';
import img_eit from '../../assets/EIT_project.jpg';
import img_datapipeline from '../../assets/data_pipeline.drawio.svg'

import './css/projects-section.css'


const ProjectsSection = () => {
  const [cardHeight, setCardHeight] = useState(window.innerHeight);
  const [isCardClicked, setIsCardClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => setCardHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleClick = () => {
    setIsCardClicked(!isCardClicked);
  }

  const cardStyle = {
    height: cardHeight < 700 ? 250 : 250,
    backgroundColor: '#3e6169',
    color: '#CACACA',
    display: 'block',
    overflow: 'auto',
    whiteSpace: 'normal' ,
  };
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
              <Grid container spacing={2} sx={{justifyContent:'center'}}>
                <Grid item xs={6} sm={6} md={3}>
                  <Card sx={cardStyle}>
                    <CardMedia
                        sx={{ height: 100 }}
                        image={img_datapipeline}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                                    Financial Data Pipeline
                        </Typography>
                        <Typography gutterBottom>May 2023</Typography>
                        <Typography variant="body2" >
                        As a Data Engineer, I developed an end-to-end financial data pipeline 
                        to predict trading volume of equities using historical data. The pipeline utilized <b>LightGBM</b> to 
                        train a regression model on the transformed data. To improve pipeline 
                        execution time, I used <b>threadpools</b> for parallelizing data ingestion and transformation.
                         The pipeline was containerized using <b>Docker</b> and deployed as 
                         an <b>Apache Airflow</b> workflow with the trained model exposed as a <b>Flask API</b> on Render.
                          The project's end-to-end implementation achieved 47% faster pipeline execution time compared 
                          to its original implementation.
                        </Typography>

                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                  <Card sx={cardStyle}>
                    <CardMedia
                        sx={{ height: 100 }}
                        image={img_atlas}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                                    Project Atlas
                        </Typography>
                        <Typography gutterBottom>March 2023</Typography>
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
                <Grid item xs={6} sm={6} md={3}>
                  <Card sx={cardStyle}>
                  <CardMedia
                        sx={{ height: 100 }}
                        image={img_twitterReporterApi}
                    />
                  <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                                    Twitter Reporter
                        </Typography>
                        <Typography gutterBottom>December 2022</Typography>
                        <Typography variant="body2" >
                            A personal project where I power <b>ChatGPT</b> with Twitter's mass amount 
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
                <Grid item xs={6} sm={6} md={3}>
                  <Card sx={cardStyle}>
                    <CardMedia
                        sx={{ height: 100 }}
                        image={img_jupyter}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                                    Investment Outcome Predictor
                        </Typography>
                        <Typography gutterBottom>April 2022</Typography>
                        <Typography variant="body2" >
                          The Investment Outcome Predictor is a <b>data science</b> project that involved developing a <b>machine</b> <b>learning </b> <b>model </b> to 
                          predict investment outcomes based on Canadian census data. As a Data Scientist, 
                          I implemented machine learning <b>pipelines</b> using <b>Ridge regression</b> for feature selection and <b>KNN</b> for 
                          data analysis, following <b>test-driven design</b> principles. The model was trained on 2017 Canadian census 
                          data, using family size and whether an individual is the major income earner in their family as 
                          features to predict whether an individual made money on their investments or broke even or lost money.
                           To automate project deployment to PyPI, I set up a <b>CI/CD pipeline</b> with <b>GitHub Actions</b>. I also containerized
                          the project using <b>Docker</b> to manage software dependencies and ensure <b>reproducibility</b> of data analysis reports.
                           The KNN-classification model was tuned for the nearest neighbors hyperparameter, and a value of 
                           26 was used yielding approximately 57% accuracy. However, the model did not perform much better compared to 
                           a dummy classifier. The KNN-classification model was not able to distinguish between individuals in the same 
                           family size group unlike the pattern found in the actual data. In conclusion, the Investment Outcome 
                           Predictor project allowed me to apply my expertise in data science to create a machine learning model that 
                           can predict investment outcomes. The project also demonstrated proficiency in <b></b>test-driven design principles,
                            automation using <b>GitHub Actions</b>, and containerization using Docker.
                        </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6} sm={6} md={3}>
                  <Card sx={cardStyle}>
                  <CardMedia
                        sx={{ height: 100 }}
                        image={img_museums}
                    />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                        Museums
                        </Typography>
                        <Typography gutterBottom>January 2021</Typography>
                        <Typography variant="body2" >
                            Collaborated with a team within <b>North America's largest 24-hour hackathon,</b>
                            <b> NWHacks</b>, to develop a social media application for 
                            people to share, view, and build communities around NFT 
                            artworks - garnering a $600 sponsor prize. I primarily focused on
                            developing the front-end using <b>React.js</b>, but I also contributed
                            to the backend, where I worked <b>gathering and cleaning data</b> 
                            using <b>RESTful endpoints</b>.
                        </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                  <Card sx={cardStyle}>
                  <CardMedia
                        sx={{ height: 100 }}
                        image={img_jupyter}
                    />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                        INTC. Stock Price Dependencies
                        </Typography>
                        <Typography gutterBottom>December 2021</Typography>
                        <Typography variant="body2" >
                        As a Data Scientist, I conducted an investigation into the dependencies of Intel Corporation's 
                        stock price on various supply chain features. To do this, I used a range of packages necessary 
                        for <b>exploratory analysis</b>, including <b>tidyverse</b>, <b>datateachr</b>, <b>infer</b>, <b>dplyr</b>, 
                        <b>lubridate</b>, among others. I extracted data from multiple sources, <b>cleaned</b> and <b>transformed</b>  the 
                        data using <b>R</b> programming language,
                        and performed <b>Exploratory</b> <b>Data</b> <b>Analysis</b> (EDA) to gain insights into the relationships between the supply
                        chain features and the stock price. I also applied machine learning <b>regularization</b> <b>techniques</b>, particularly 
                        the <b>LASSO</b> method, to perform feature selection and enhance the <b>Multiple</b> <b>Linear</b> <b>Regression</b> (MLR) model's 
                        accuracy in predicting stock prices.
                        The project helped to provide valuable insights into the drivers of Intel's stock price and the potential 
                        risks posed by supply chain vulnerabilities. Overall, the project allowed me to apply my skills in data
                        analysis, machine learning, and data extraction to real-world data and solve a complex problem in the 
                        finance industry using R programming language.
                        </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                  <Card sx={cardStyle}>
                  <CardMedia
                        sx={{ height: 100 }}
                        image={img_3DMetabolism}
                    />
                  <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                                    3D Metabolism
                        </Typography>
                        <Typography gutterBottom>August 2021</Typography>
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
                <Grid item xs={6} sm={6} md={3}>
                  <Card sx={cardStyle}>
                  <CardMedia
                        sx={{ height: 100 }}
                        image={img_jupyter}
                    />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                        Case study analysis: Holidays in COVID-19
                        </Typography>
                        <Typography gutterBottom>August 2021</Typography>
                        <Typography variant="body2" >
                        I worked on a <b>Jupyter notebook</b> that analyzed the relationship between 
                        the amount of COVID-19 cases during the holidays. I utilized <b>R programming</b> language and several 
                        libraries such as <b>Tidyverse</b>, <b>Repr</b>, <b>Dplyr</b>, <b>Broom</b>, and <b>Lubridate</b> to perform <b>inferential</b> <b>data</b> <b>analysis</b>.
                        I cleaned and wrangled raw data for data analysis and explored, analyzed, and visualized 
                        relationships within the data set to identify factors that were used to perform <b>hypothesis</b> <b>testing</b>.
                        The project allowed me to apply my skills in data analysis and visualization to a real-world problem 
                        and provided valuable insights into the impact of holidays on COVID-19 cases. Overall, this project enabled
                        me to use R programming language and various libraries to perform exploratory analysis and hypothesis testing
                        on real-world data, thus strengthening my skills in data analysis and <b>visualization</b>.
                        </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                  <Card sx={cardStyle}>
                  <CardMedia
                        sx={{ height: 100 }}
                        image={img_eit}
                    />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                          Real-time Hand Gesture Recognition
                        </Typography>
                        <Typography gutterBottom>August 2021</Typography>
                        <Typography variant="body2" >
                        In April 2021, I worked on developing a <b>low-cost</b> hand gesture recognition device 
                        that measured and <b>classified</b> <b>muscle contractions</b> using machine learning 
                        <b>clustering algorithms</b> with the goal of making robotic prosthetics more accessible. 
                        The project involved implementing the code base in <b>Python</b> and <b>C</b>, using several libraries 
                        such as <b>Pandas</b>, <b>Matplotlib</b>, <b>Scikit-learn</b>, and <b>Serial</b>. I transmitted electrode data from a 
                        <b>micro-controller</b> to a computer using the <b>UART protocol</b> for classification. The project 
                        allowed me to apply my skills in machine learning, data analysis, and programming to 
                        create a real-time hand gesture recognition device that could potentially improve the lives of 
                        those in need of robotic prosthetics. Overall, this project enabled me to apply my knowledge of 
                        machine learning and programming to create a low-cost, innovative solution that could make a 
                        significant impact in the healthcare industry.
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