import './App.css';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import LocationFinder from './LocationFinder';
import Weather from './Weather'
import News from './News';

function App() {
  const [locationDetails, setLocationDetails] = useState(null);
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  return (
    <Grid container spacing={3} sx={{margin: 0, padding: 0}}>
      <Grid container>
        <LocationFinder locationInfo={(details) => setLocationDetails(details)}></LocationFinder>
        <Grid item>ºC</Grid>
        <Grid item>Dark</Grid>
      </Grid>
      <Grid container>
        <Weather locationInfo={locationDetails}></Weather>
        <News></News>
      </Grid>
    </Grid>
  )
}
export default App;
