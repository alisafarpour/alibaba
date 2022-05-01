import React from 'react'
import Grid from "@mui/material/Grid";
import Image from 'next/image';
import { Typography } from '@mui/material';

function FooterTopImg(props) {
  return (
    <Grid container md={4} xs={8} justifyContent="center" alignItems="center">
            <Grid item md={3} xs={8} >
              <Image src={props.img} alt="footer top image" height="89px" width="89px" />
            </Grid>
            <Grid item
              md={9} xs={8}
              sx={{ lineHeight: 1.2 }}
            >
              <Typography sx={{fontWeight: 900, fontSize: '17px'}}>{props.title}</Typography>
              <Typography sx={{fontSize:'13px', marginTop: 1}}>{props.text}</Typography>
            </Grid>
          </Grid>
  )
}

export default FooterTopImg