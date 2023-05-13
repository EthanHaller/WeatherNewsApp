import React, { useState } from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material/';
  
  function UnitsButton({changeUnits}) {
    const [units, setUnits] = useState("F");

    const handleChange = (e, newValue) => {
      if(newValue != null) {
        setUnits(newValue)
        changeUnits(newValue);
      }
    }

    return (
      <Box>
        <ToggleButtonGroup fullWidth exclusive value={units} onChange={handleChange} aria-label="units">
          <ToggleButton value="F" aria-label='fahrenheit' sx={{ color: 'white' }}>&deg;F</ToggleButton>
          <ToggleButton value="C" aria-label='celsius' sx={{ color: 'white '}}>&deg;C</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    )
}

export default UnitsButton; 