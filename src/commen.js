import React from 'react'
import Image from 'next/image'
import QrCode from '../public/qrcode-97ae53b8.jpg'
import Mobile from '../public/app-mobile@4x-a456f355.webp'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

function commen() {
  return (
    <Container
      maxWidth="xlg"
      sx={{
        width: '72%',
        backgroundColor: 'white',
        marginTop: 24,
        borderRadius: 2,
        paddingRight: 5,
        paddingLeft: 5,
        direction: 'rtl',
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={1.75}>
          <Image src={QrCode} />
        </Grid>
        <Grid  xs={5} sx={{ marginRight: 5 }}>
          <h2>اپلیکیشن علی‌بابا</h2>
          <p>سریع‌تر و مطمئن‌تر به سفر بروید</p>
          <a href="">
            مشاهده لینک های دانلود
            <ArrowBackIosNewOutlinedIcon sx={{ paddingTop: 1.5 }} />
          </a>
          <Grid container  sx={{fontSize:12 , marginTop:2}}>
          <p><AppleIcon sx={{fontSize:20}}/><AndroidIcon sx={{fontSize:20}} />&ensp;قابلیت نصب روی Android و iOS</p>
          </Grid>
        </Grid>
        <Grid item xs={3.5}>
          <Image src={Mobile} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default commen
