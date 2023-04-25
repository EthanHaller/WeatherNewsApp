import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import WeatherIcon from './WeatherIcon';

function DailyWeather( {weatherInfo} ) {
    const hourly = weatherInfo.hourly;
    let items = [];

    for(let i=0; i < 24 && i < hourly.length; i++) {
        const hour = getHourFromDateTime(hourly[i].dt)
        const hourTemp = hourly[i].temp;
        const hourTempF = Math.round(9/5 * (hourTemp - 273.15) + 32)

        const iconId = hourly[i].weather[0].icon;

        const item = (
            <Grid item xs={1} sx={{ height: '100%' }} key={i}>
                <Paper style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <p>{hour}</p>
                    <p>{hourTempF + "ºF"}</p>
                    <WeatherIcon iconId={iconId} scale={2}></WeatherIcon>
                </Paper>
            </Grid>
        )
        items.push(item)
    }

    return (
        <Grid item container style={{ flexWrap: 'nowrap', overflowX: 'scroll', height: '100%' }} spacing={1} xs={9}>
            {items}
        </Grid>
    )
}

function getHourFromDateTime(dt) {
    const date = new Date(dt * 1000);
    let hour = 1 + date.getHours();
    let ampm = "AM"
    if(hour >= 12) {
        hour -= 12;
        ampm = "PM"
    }
    if(hour === 0) hour = 12;

    return "" + hour + " " + ampm;
}

export default DailyWeather;