import React from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { height } from '@mui/material/node_modules/@mui/system';

function register() {
    return (
        <Grid
            xs={8.6}
            sx={{ marginTop: 1, backgroundColor: 'white' }}
            container
            justifyContent="center"
            alignItems="center"
        >
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={ 2}
            sx={{height: 'auto' , paddingTop: 5}}
            >
                <Grid item>
                <TextField sx={{width: '264px', height: '48'}} id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>
                <Grid item>
                <TextField sx={{width: '264px', height: '48'}} id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>
                <Grid item>
                <TextField sx={{width: '264px', height: '48'}} id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>
                <Grid item>
                <TextField sx={{width: '264px', height: '48'}} id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>
                

            </Grid>



        </Grid>
    )
}

export default register