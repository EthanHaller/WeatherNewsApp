import React, { useState, useEffect } from 'react'
import WeatherIcon from './WeatherIcon';
import Grid from '@mui/material/Grid';

function CurrentWeather( {weatherInfo}) {
    console.log(weatherInfo)

    const currentTemp = weatherInfo.current.temp;
    const currentTempF = Math.round(9/5 * (currentTemp - 273.15) + 32)

    return (
        <Grid item>
            <WeatherIcon weatherInfo={weatherInfo}></WeatherIcon>
            <h1>{currentTempF + " ºF"}</h1>
        </Grid>
    )
}

export default CurrentWeather;