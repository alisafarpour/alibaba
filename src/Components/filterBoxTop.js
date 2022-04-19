import React from 'react';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function filterBoxTop() {

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
      sx={{ direction: 'rtl', height: '64px', width: '835px', marginRight: 1, marginBottom: 2, bgcolor: 'background.paper', }}
    >
       
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
        <Tab label="Item Seven" />
        <Tab label="Item Seven" />
        <Tab label="Item Seven" />
        <Tab label="Item Seven" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
      </Tabs>
    

    </Grid>
  )
}

export default filterBoxTop