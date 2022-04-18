import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import FilterBoxTop from './filterBoxTop.js';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import TicketChosse from './ticketChosse.js';
import Img1 from '../../public/EP.png';
import Img2 from '../../public/I3.png';
import Img3 from '../../public/IV.png';
import Img4 from '../../public/FP.png';
import Img5 from '../../public/QB.png';
import Img6 from '../../public/PA.png';

function collocation() {
  const items = [
    {
      label: "کاسپین",
      startTime: "15:00",
      endTime: "16:15",
      startLocation: "تهران",
      endLocation: "اهواز",
      flightNumber: 842,
      price: 6000000,
      seat: 10,
      flightKind: "اکونومی",
      baggageWeight: "۱۵ کیلوگرم",
      terminalNumber: 'ترمینال ۲',
      airplaneName: "Boeing MD",
      ticketKind: "سیستمی",
      imgSrc: Img4,
    },
    {
      label: "آتا",
      startTime: "6:00",
      endTime: "8:15",
      startLocation: "تهران",
      endLocation: "اهواز",
      flightNumber: 320,
      price: 9000000,
      seat: 5,
      flightKind: "اکونومی",
      baggageWeight: "۲۵ کیلوگرم",
      terminalNumber: 'ترمینال ۴',
      airplaneName: "Boeing 735",
      ticketKind: "چارتر",
      imgSrc: Img2,
    },
    {
      label: "آسمان",
      startTime: "۲۱:۰۰",
      endTime: "۲۲:۳۵",
      startLocation: "تهران",
      endLocation: "اهواز",
      flightNumber: 620,
      price: "۱۲،۰۰۰،۰۰۰",
      seat: 8,
      flightKind: "اکونومی",
      baggageWeight: "۲۵ کیلوگرم",
      terminalNumber: 'ترمینال ۱',
      airplaneName: "Fokker 100",
      ticketKind: "سیستمی",
      imgSrc: Img1,
    },
    {
      label: "آسمان",
      startTime: "10:45",
      endTime: "12:15",
      startLocation: "تهران",
      endLocation: "اهواز",
      flightNumber: 120,
      price: 5000000,
      seat: 23,
      flightKind: "اکونومی",
      baggageWeight: "۲۵ کیلوگرم",
      terminalNumber: 'ترمینال ۴',
      airplaneName: "Fokker 100",
      ticketKind: "سیستمی",
      imgSrc: Img4,
    },
  ];

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
            alignItems="center" sx={{ width: '100%', marginRight: 4, height: 'auto', bgcolor: 'background.paper', borderRadius: 100, backgroundColor: 'white', border: 1, borderColor: '#e5e5e5', }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="پیشنهاد علی بابا" />
              <Divider orientation="vertical" variant="middle" flexItem />
              <Tab label="زودترین" />
              <Divider orientation="vertical" variant="middle" flexItem />
              <Tab label="دیرترین" />
              <Divider orientation="vertical" variant="middle" flexItem />
              <Tab label="ارزان ترین" />
              <Divider orientation="vertical" variant="middle" flexItem />
              <Tab label="گران ترین" />
            </Tabs>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: 2 }}>
        <PriorityHighRoundedIcon sx={{ border: 2, borderRadius: 100, marginRight: 1, marginLeft: 1 }} />
        <Typography>قیمت ها برای یک بزرگسال محاسبه شده است.</Typography>
      </Grid>
      <Grid container sx={{ marginTop: 2 }}>
        <TicketChosse items={items} />
      </Grid>


    </Grid>

  )
}

export default collocation