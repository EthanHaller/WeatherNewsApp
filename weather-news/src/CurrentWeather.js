import React, { useState, useEffect } from 'react'
import WeatherIcon from './WeatherIcon';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function CurrentWeather( {weatherInfo}) {
    console.log(weatherInfo)

    const iconId = weatherInfo.current.weather[0].icon

    const currentTemp = weatherInfo.current.temp;
    const currentTempF = Math.round(9/5 * (currentTemp - 273.15) + 32)
    const description = weatherInfo.current.weather[0].description
    const feelsLike = weatherInfo.current.feels_like;
    const feelsLikeF = Math.round(9/5 * (feelsLike - 273.15) + 32)

    return (
        <Grid item xs={3}>
            <Paper style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <WeatherIcon iconId={iconId} scale={4}></WeatherIcon>
                <p>{currentTempF + "º"}</p>
                <p>{description}</p>
                <p>{"Feels Like " + feelsLikeF + "º"}</p>
            </Paper>
        </Grid>
    )
}

export default CurrentWeather;