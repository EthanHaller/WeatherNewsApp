function WeatherIcon( {iconId, scale} ) {
    if(scale === 1) {
        return (
            <img src={`https://openweathermap.org/img/wn/${iconId}.png`} alt=''></img>
        )
    }
    return (
        <img src={`https://openweathermap.org/img/wn/${iconId}@${scale}x.png`} alt=''></img>
    )
}

export default WeatherIcon;