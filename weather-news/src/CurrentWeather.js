import React, { useState, useEffect } from 'react'

function CurrentWeather( {weatherInfo}) {
    console.log(weatherInfo);
    return <h1>{weatherInfo.current.temp}</h1>
}

export default CurrentWeather;