import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import WeatherIcon from './WeatherIcon';

function DailyWeather( {weatherInfo, units} ) {
    const hourly = weatherInfo.hourly;
    let items = [];

    for(let i=0; i < 24 && i < hourly.length; i++) {
        const hour = getHourFromDateTime(hourly[i].dt)
        let hourTemp = hourly[i].temp;
        if(units === "F") hourTemp = Math.round((9/5 * (hourTemp - 273.15)) + 32);
        else hourTemp = Math.round(hourTemp - 273.15);

        const iconId = hourly[i].weather[0].icon;

        const item = (
            <Grid item xs={2} sx={{ height: '100%' }} key={i}>
                <Paper square style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <p>{hour}</p>
                    <p>{hourTemp + "º"}</p>
                    <WeatherIcon iconId={iconId} scale={2}></WeatherIcon>
                </Paper>
            </Grid>
        )
        items.push(item)
    }

    return (
        <Grid item xs={9}>
            <Paper square style={{ height: '100%'}} elevation={0}>
                <h3 style={{margin: '0', padding: '2%'}}>Hourly Weather</h3>
                <Paper square elevation={0}>
                <Grid container style={{ flexWrap: 'nowrap', overflowX: 'scroll', width: '95%', height: '80%', margin: '2%'}} spacing={1}>
                    {items}
                </Grid>
                </Paper>
            </Paper>
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