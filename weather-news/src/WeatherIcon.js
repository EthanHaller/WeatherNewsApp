function WeatherIcon( {weatherInfo} ) {
    const iconId = weatherInfo.current.weather[0].icon

    return (
        <img src={`https://openweathermap.org/img/wn/${iconId}@2x.png`} alt=''></img>
    )
}

export default WeatherIcon;