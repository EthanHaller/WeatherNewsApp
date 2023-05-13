import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import WeatherIcon from './WeatherIcon';

function WeeklyWeather( {weatherInfo, units} ) {
    const daily = weatherInfo.daily;
    let items = [];

    for(let i=0; i < 7 && i < daily.length; i++) {
        const day = getDateFromDateTime(daily[i].dt)
        let tempMax = daily[i].temp.max;
        if(units === "F") tempMax = Math.round((9/5 * (tempMax - 273.15)) + 32);
        else tempMax = Math.round(tempMax - 273.15);
        let tempMin = daily[i].temp.min;
        if(units === "F") tempMin = Math.round((9/5 * (tempMin - 273.15)) + 32);
        else tempMin = Math.round(tempMin - 273.15);


        const iconId = daily[i].weather[0].icon

        const item = (
            <Grid item xs={2} sx={{ height: '100%' }} key={i}>
                <Paper square style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <p>{day}</p>
                    <p>{tempMax + "º | " + tempMin + "º"}</p>
                    <WeatherIcon iconId={iconId} scale={2}></WeatherIcon>
                </Paper>
            </Grid>
        )
        items.push(item)
    }

    return (
        <Grid item xs={12}>
            <Paper square style={{ height: '100%'}} elevation={0}>
                <h3 style={{margin: '0', padding: '2%'}}>Daily Weather</h3>
                <Paper square elevation={0}>
                <Grid container style={{ flexWrap: 'nowrap', overflowX: 'scroll', width: '95%', height: '80%', margin: '2%'}} spacing={1}>
                    {items}
                </Grid>
                </Paper>
            </Paper>
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