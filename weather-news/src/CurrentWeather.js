import React from 'react'
import WeatherIcon from './WeatherIcon';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';

//TODO: Display current location

function CurrentWeather( {weatherInfo, units}) {
    console.log(weatherInfo)

    const iconId = weatherInfo.current.weather[0].icon

    let currentTemp = weatherInfo.current.temp;
    if(units === "F") currentTemp = Math.round((9/5 * (currentTemp - 273.15)) + 32);
    else currentTemp = Math.round(currentTemp - 273.15);
    const description = capitalize(weatherInfo.current.weather[0].description);
    let feelsLike = weatherInfo.current.feels_like;
    if(units === "F") feelsLike = Math.round((9/5 * (feelsLike - 273.15)) + 32);
    else feelsLike = Math.round(feelsLike - 273.15);
    
    // return (
    //     <Grid item xs={3}>
    //         <Paper square elevation={0}>
    //             <h3 style={{margin: 0, padding: '5%'}}>Current Weather</h3>
    //             <Paper square elevation={0} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2%' }}>
    //                 <WeatherIcon iconId={iconId} scale={4}></WeatherIcon>
    //                 <p style={{ fontWeight: 'bold', fontSize: '250%', margin: '0' }}>{currentTemp + "º"}</p>
    //                 <p style={{ margin: '0'}}>{description}</p>
    //                 <p style={{ margin: '0'}}>{"Feels Like " + feelsLike + "º"}</p>
    //             </Paper>
    //         </Paper>
    //     </Grid>
    // )

    return (
        <Paper elevation={3} sx={{ width: '25%', pr: '40px', pl: '20px', py: '20px', m: '15px' }}>
            <Typography variant='h6'>Current Weather</Typography>
            <Box>
                <WeatherIcon iconId={iconId} scale={4}></WeatherIcon>
                <Typography variant='body1'>{currentTemp}&deg;</Typography>
                <Typography variant='body1'>{description}</Typography>
                <Typography variant='body1'>{"Feels Like " + feelsLike}&deg;</Typography>
            </Box>
        </Paper>
    )
}

function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default CurrentWeather;