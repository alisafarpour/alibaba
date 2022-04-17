import React from 'react'
import Footer from "../src/footer.js";
import Header from "../src/header.js";
import FilterBox from '../src/Components/filterBox.js';
import Collocation from '../src/Components/collocation.js';
import { Grid } from '@mui/material';

function flights() {
    return (
        <div>
            <Header />
            <Grid
                container
                direction="row-reverse"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
                sx={{ marginTop: 2, width: '85%' }}
            >
                <FilterBox />
                <Collocation />

            </Grid>

            <Footer />
        </div>

    )
}

export default flights