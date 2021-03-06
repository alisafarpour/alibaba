import React from 'react'
import ToggleFlightPage from '../src/toggleFlightPage.js';
import { Grid, Typography } from '@mui/material';
import { toggleData } from '../src/Data/toggleData.js';
import FlightMiddle from '../src/Components/flightMiddle.js';
function flights() {
    return (
        <div>
            <FlightMiddle />
            <Grid
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="flex-end"
                spacing={1}
                sx={{ marginTop: 40, width: '85%' }}
            >
                <Typography sx={{ marginTop: 5, fontWeight: '900', fontSize: '22px' }}>سوالات متداول پرواز اهواز به شیراز</Typography>
                {toggleData.map((item,index) => {
                    return (
                        <ToggleFlightPage key={index} {...item} />
                    )
                })}
            </Grid>
        </div>
    )
}

export default flights