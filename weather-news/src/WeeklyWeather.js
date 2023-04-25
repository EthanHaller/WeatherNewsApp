import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import WeatherIcon from './WeatherIcon';

function WeeklyWeather( {weatherInfo} ) {
    const daily = weatherInfo.daily;
    let items = [];

    for(let i=0; i < 7 && i < daily.length; i++) {
        const day = getDateFromDateTime(daily[i].dt)
        const tempMax = daily[i].temp.max;
        const tempMaxF = Math.round(9/5 * (tempMax - 273.15) + 32)
        const tempMin = daily[i].temp.min;
        const tempMinF = Math.round(9/5 * (tempMin - 273.15) + 32)

        const iconId = daily[i].weather[0].icon

        const item = (
            <Grid item xs={2} sx={{ height: '100%' }} key={i}>
                <Paper style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <p>{day}</p>
                    <p>{tempMinF + "º | " + tempMaxF + "º"}</p>
                    <WeatherIcon iconId={iconId} scale={2}></WeatherIcon>
                </Paper>
            </Grid>
        )
        items.push(item)
    }

    return (
        <Grid item container style={{ flexWrap: 'nowrap', overflowX: 'scroll', height: '100%' }} spacing={1} xs={12}>
            {items}
        </Grid>
    )
}

function getDateFromDateTime(dt) {
    const date = new Date(dt * 1000);
    const month = 1 + date.getMonth();
    const day = 1 + date.getDate();

    return "" + month + "/" + day;
}

export default WeeklyWeather;