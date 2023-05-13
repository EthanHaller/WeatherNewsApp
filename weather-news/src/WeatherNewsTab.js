import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';

function WeatherNewsTab() {
    const [page, setPage] = useState('weather')

    const handleChange = (e, newPage) => {
        if(newPage !== null) {
            setPage(newPage)
        }
    }

    return (
        <Box>
            <ToggleButtonGroup
                exclusive
                value={showWeather}
                onChange={handleChange}
            >
                <ToggleButton value='weather'>Weather</ToggleButton>
                <ToggleButton value='news'>News</ToggleButton>
            </ToggleButtonGroup>
        </Box>
    )
}

export default WeatherNewsTab;