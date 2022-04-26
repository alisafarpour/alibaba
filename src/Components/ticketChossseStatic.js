import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Divider } from '@mui/material';

function ticketChossseStatic(props) {
    return (
        
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                lg={2.6}
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
                <Divider orientation="vertical" flexItem />
            </Grid>
            
            
           
    )
}

export default ticketChossseStatic