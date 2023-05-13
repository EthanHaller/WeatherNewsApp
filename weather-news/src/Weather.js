import React, { useState, useEffect } from 'react'
import CurrentWeather from './CurrentWeather';
import Grid from '@mui/material/Grid';
import WeeklyWeather from './WeeklyWeather';
import DailyWeather from './DailyWeather';

function Weather( {locationInfo, units} ) {
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
    if(!weatherInfo) return <p>Loading...</p>

    return (
        <Grid container spacing={0} xs={8} style={{margin: '0px', padding: '0px'}}>
            <Grid container spacing={0} style={{margin: '0px', padding: '0px'}}>
                <CurrentWeather weatherInfo={weatherInfo} units={units}></CurrentWeather>
                <DailyWeather weatherInfo={weatherInfo} units={units}></DailyWeather>
            </Grid>
            <Grid container spacing={0} sx={{ flexWrap: 'nowrap', overflowX: 'scroll', overflowY: 'clip', height: '50%' }} style={{margin: '0px', padding: '0px'}}>
                <WeeklyWeather weatherInfo={weatherInfo} units={units}></WeeklyWeather>
            </Grid>
        </Grid>
    )
}

export default Weather;