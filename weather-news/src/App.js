import React, { useState, useEffect } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import './App.css';
import LocationFinder from './LocationFinder';
import Weather from './Weather'

function App() {
  const [locationDetails, setLocationDetails] = useState(null);

  console.log(locationDetails);

  return (
    <Grid2>
      <LocationFinder locationInfo={(details) => setLocationDetails(details)}></LocationFinder>
      <Weather locationInfo={locationDetails}></Weather>
    </Grid2>
  )
}
export default App;
