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
        <ToggleButtonGroup fullWidth exclusive value={units} onChange={handleChange} aria-label="units" size='small' sx={{ px: '10px' }}>
          <ToggleButton
            value="F"
            aria-label='fahrenheit'
            sx={{
              color: 'white',
              '&:hover': { color: 'white', backgroundColor: 'rgba(255,255,255,0.25)' },
              '&.Mui-selected': { color: 'white', backgroundColor: 'rgba(255,255,255,0.15)' },
              '&.Mui-selected:hover': { color: 'white', backgroundColor: 'rgba(255,255,255,0.15)' },
              px: '30px'
            }}
            >
            &deg;F
          </ToggleButton>
          <ToggleButton
            value="C"
            aria-label='celsius'
            sx={{
              color: 'white',
              '&:hover': { color: 'white', backgroundColor: 'rgba(255,255,255,0.25)' },
              '&.Mui-selected': { color: 'white', backgroundColor: 'rgba(255,255,255,0.15)' },
              '&.Mui-selected:hover': { color: 'white', backgroundColor: 'rgba(255,255,255,0.15)' },
              px: '30px'
            }}
            >
            &deg;C
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    )
}

export default UnitsButton; 