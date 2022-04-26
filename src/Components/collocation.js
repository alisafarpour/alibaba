import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import FilterBoxTop from './FilterBoxTop.js';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import TicketChosse2 from './TicketChoose.js';
import { useSelector } from 'react-redux';
import { collocationData } from '../Data/collocationData.js';

function collocation() {

  const FilterData = useSelector(state => state.counter.value)
  const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      console.log(newValue);
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
            alignItems="center" sx={{ width: '100%', marginRight: 4, height: 'auto', bgcolor: 'background.paper', borderRadius: 100, backgroundColor: 'white', border: 1, borderColor: '#e5e5e5', }}>
            <Tabs value={value} onChange={handleChange} centered>
              {collocationData.map((item) => {
                return (
                    <Tab label={item.label} />
                )
              })}
            </Tabs>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: 2 }}>
        <PriorityHighRoundedIcon sx={{ border: 2, borderRadius: 100, marginRight: 1, marginLeft: 1 }} />
        <Typography>قیمت ها برای یک بزرگسال محاسبه شده است.</Typography>
      </Grid>
      <Grid container sx={{ marginTop: 2 }}>
        {
          FilterData.map((item) => {
            return (
              <TicketChosse2 {...item} />
            )
          })
        }
      </Grid>


    </Grid>

  )
}

export default collocation