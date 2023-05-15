import React, { useState, useEffect } from 'react'
import CurrentWeather from './CurrentWeather';
import Grid from '@mui/material/Grid';
import WeeklyWeather from './WeeklyWeather';
import DailyWeather from './DailyWeather';
import { Box } from '@mui/material';

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
    if(!weatherInfo) return <p></p>

    return (
        <Box id='weather' sx={{ display: 'flex', flexDirection: 'column', maxWidth: '70vw' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', maxWidth: '100%' }}>
                <CurrentWeather weatherInfo={weatherInfo} units={units}></CurrentWeather>
                <DailyWeather weatherInfo={weatherInfo} units={units}></DailyWeather>
            </Box>
            <WeeklyWeather weatherInfo={weatherInfo} units={units}></WeeklyWeather>
        </Box>
    )
}

export default Weather;