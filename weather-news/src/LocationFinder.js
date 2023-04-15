import React, { useState, useEffect } from 'react'
import {TextField, Button} from "@mui/material";

function LocationFinder( {locationInfo} ) {
    const [location, setLocation] = useState("");
    const[locationDetails, setLocationDetails] = useState(null);

    const changeLocation = (e) => {
        setLocation(e.target.value);
    }

    const sendRequest = () => {
        const limit = 1;
        const apiLink = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${limit}&appid=${process.env.REACT_APP_openweather_api}`
        fetch(apiLink)
        .then(res => res.json())
        .catch(err => console.log(err))
        .then(obj => setLocationDetails(obj))
    }

    useEffect(() => {
        if(locationDetails !== null && locationDetails.length >= 0) {
            locationInfo(locationDetails[0])
        }
    }, [locationDetails, locationInfo])

    return (
        <React.Fragment>
            <TextField 
                label="Location"
                variant='filled'
                autoFocus={true}
                onChange={changeLocation}
            />
            <Button onClick={() => sendRequest()}>Search</Button>
        </React.Fragment>
    )
}

export default LocationFinder;