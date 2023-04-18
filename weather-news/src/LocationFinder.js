import React, { useState, useEffect } from 'react'
import {TextField, Button} from "@mui/material";
import Grid from '@mui/material/Grid';

function LocationFinder( {locationInfo} ) {
    const [location, setLocation] = useState("");
    const[locationDetails, setLocationDetails] = useState(null);

    const changeLocation = (e) => {
        setLocation(e.target.value);
    }

    const sendRequest = () => {
        if(location === "") return;
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
            <Grid item xs={8}>
                <TextField
                    fullWidth
                    label="Location"
                    variant='filled'
                    autoFocus={true}
                    onChange={changeLocation}
                />
            </Grid>
            <Grid item>
                <Button sx={{height: '100%'}} onClick={() => sendRequest()}>Search</Button>
            </Grid>
        </React.Fragment>
    )
}

export default LocationFinder;