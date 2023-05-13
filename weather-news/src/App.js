import React, { useState } from 'react';
import { Grid, AppBar, Toolbar, Box } from '@mui/material';
import useStyles from './styles';

function App() {
  const [locationDetails, setLocationDetails] = useState(null);
  const [units, setUnits] = useState(true);
  const classes = useStyles();

  console.log(units);

  // return (
  //   <Grid container spacing={0} sx={{margin: 0, padding: 0}}>
  //     <Grid item container spacing={0} style={{margin: '0px', padding: '0px'}}>
  //       <LocationFinder locationInfo={(details) => setLocationDetails(details)}></LocationFinder>
  //       <UnitsButton changeUnits={() => handleChangeUnits()}></UnitsButton>
  //     </Grid>
  //     <Grid item container spacing={0} style={{margin: '0px', padding: '0px'}}>
  //       <Weather locationInfo={locationDetails} isFahrenheit={isFahrenheit}></Weather>
  //       <News></News>
  //     </Grid>
  //   </Grid>
  // )

  return (
    <div className={classes.main}>HELLO</div>
  )
}
export default App;