import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Divider } from '@mui/material';

function ticketChooseStatic(props) {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                lg={2}
            >
                <Grid>
                    <Typography sx={{ color: '#DC3444', fontSize: '20px', fontWeight: '900' }}>
                        {props.percentage}
                    </Typography>
                </Grid>
                <Grid>
                    <Typography sx={{ fontSize: '14px', marginTop: 1, textAlign: 'center' }}>
                        {props.text}
                    </Typography>
                </Grid>

            </Grid>
            <Divider orientation="vertical" flexItem />
        </>
    )
}
export default ticketChooseStatic