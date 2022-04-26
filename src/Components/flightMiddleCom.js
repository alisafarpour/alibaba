import React from 'react'
import { Grid } from '@mui/material';
import FilterBox from './FilterBox.js';
import Collocation from './Collocation.js';

function flightMiddleCom() {
    return (
        <Grid
            container
            direction="row-reverse"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
            sx={{ marginTop: 2, width: '85%' }}
        >
            <FilterBox />
            <Collocation />


        </Grid>
    )
}

export default flightMiddleCom