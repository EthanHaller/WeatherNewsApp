import React, { useState, useEffect } from 'react'
import CurrentWeather from './CurrentWeather';
import Grid from '@mui/material/Grid';
import WeeklyWeather from './WeeklyWeather';
import DailyWeather from './DailyWeather';

function Weather( {locationInfo} ) {
    const [weatherInfo, setWeatherInfo] = useState(null)
    useEffect(() => {
        if(!locationInfo) return;
        const lat = locationInfo.lat;
        const lon = locationInfo.lon;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${process.env.REACT_APP_openweather_api}`)
        .then(res => res.json())
        .catch(err => console.log(err))
        .then(obj => setWeatherInfo(obj))
    }, [locationInfo])
    if(!weatherInfo) return

    return (
        <Grid item container xs={9}>
            <Grid container style={{ flexWrap: 'nowrap', overflowX: 'scroll' }} spacing={1}>
                <CurrentWeather weatherInfo={weatherInfo}></CurrentWeather>
                <DailyWeather weatherInfo={weatherInfo}></DailyWeather>
            </Grid>
            <Grid container style={{ flexWrap: 'nowrap', overflowX: 'scroll', overflowY: 'clip', height: '50%' }} spacing={1}>
                <WeeklyWeather weatherInfo={weatherInfo}></WeeklyWeather>
            </Grid>
        </Grid>
    )
}

export default Weather;