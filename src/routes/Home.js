import React from 'react'
import NavigationBarComponent from '../components/NavigationBarComponent'
import ParticleComponent from '../components/AboutMeComponent'
import CardComponent from '../components/CardComponent'
import {Grid} from '@mui/material';
const Home = () => {
  return (
    <div>
        <NavigationBarComponent/>
        <Grid container>
          <Grid item xs={2}>
            <CardComponent></CardComponent>
          </Grid>
          <Grid item xs={2}>
            <CardComponent></CardComponent>
          </Grid>
        </Grid>
        <ParticleComponent/> 
    </div>
  )
}

export default Home