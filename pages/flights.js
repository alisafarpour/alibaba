import React from 'react'
import Footer from "../src/footer.js";
import Header from "../src/header.js";
import ToggleFlightPage from '../src/toggleFlightPage.js';
import { Grid, Typography } from '@mui/material';
import { toggleData } from '../src/Data/toggleData.js';
import FlightMiddleCom from '../src/Components/flightMiddleCom.js';

function flights() {
    const items = toggleData;
    return (
        <div>
            <Header />
            <FlightMiddleCom />
            <Grid
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="flex-end"
                spacing={1}
                sx={{ marginTop: 30, width: '85%' }}
            >
                <Typography sx={{ marginTop: 5, fontWeight: '900', fontSize: '22px' }}>سوالات متداول پرواز اهواز به شیراز</Typography>
                {items.map((item) => {
                    return (
                        <ToggleFlightPage  {...item} />
                    )
                })}
            </Grid>
            <Footer />
        </div>
    )
}

export default flights