import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import FilterBoxTop from './filterBoxTop.js';




function collocation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ direction: 'rtl', height: '59px', width: '852px', marginRight: 2 }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item>
          <FilterBoxTop />
        </Grid>
        <Grid item>
          <Typography sx={{ marginRight: 1, fontSize: '15px' }}>
            مرتب سازی:
          </Typography>
        </Grid>
        <Grid item>
          <Grid container justifyContent="center" 
            alignItems="center" sx={{ width: '100%',marginRight: 4, height: 'auto', bgcolor: 'background.paper', borderRadius: 100, backgroundColor: 'white', border: 1, borderColor: '#e5e5e5', }}>
            <Tabs  value={value} onChange={handleChange} centered>
              <Tab label="پیشنهاد علی بابا" />
              <Divider orientation="vertical" variant="middle" flexItem  />
              <Tab label="زودترین" />
              <Divider orientation="vertical" variant="middle" flexItem  />
              <Tab label="دیرترین" />
              <Divider orientation="vertical" variant="middle" flexItem  />
              <Tab label="ارزان ترین" />
              <Divider orientation="vertical" variant="middle" flexItem  />
              <Tab label="گران ترین" />
            </Tabs>
          </Grid>
        </Grid>
      </Grid>



    </Grid>

  )
}

export default collocation