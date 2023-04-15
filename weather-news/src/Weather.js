import React, { useState, useEffect } from 'react'
import CurrentWeather from './CurrentWeather';
import Grid2 from '@mui/material/Unstable_Grid2';
import data from './test.json'

function Weather( {locationInfo} ) {
    const [weatherInfo, setWeatherInfo] = useState(null)
    useEffect(() => {
        // if(!locationInfo) return;
        // const lat = locationInfo.lat;
        // const lon = locationInfo.lon;
        // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${process.env.REACT_APP_openweather_api}`)
        // .then(res => res.json())
        // .catch(err => console.log(err))
        // .then(obj => setWeatherInfo(obj))
        setWeatherInfo(data);
    }, [locationInfo])
    if(!weatherInfo) return

    return (
        <Grid2>
            <CurrentWeather weatherInfo={weatherInfo}></CurrentWeather>
        </Grid2>
    )
}

export default Weather;