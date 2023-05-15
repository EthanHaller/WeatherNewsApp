import React, { useState, useEffect } from 'react'
import { Button, InputBase, Box } from "@mui/material";
import { Search } from '@mui/icons-material';
import useStyles from './styles'

function LocationFinder( {locationInfo} ) {
    const classes = useStyles();
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
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.15)', '&:hover': {backgroundColor: 'rgba(255,255,255,0.25)'} }}>
                <Search sx={{ mx: 1, my: 0.5 }} />
                <InputBase
                    sx={{ ml: 1, flex: 1, color: 'white', width: '30vw'}}
                    placeholder="Search Location"
                    inputProps={{ 'aria-label': 'search location' }}
                    onChange={changeLocation}
                />
                <Button variant='outlined' sx={{ border: 0, color: 'white', '&:hover': {border: 0} }} onClick={() => sendRequest()}>Search</Button>
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
        </>
    )
}

export default LocationFinder;