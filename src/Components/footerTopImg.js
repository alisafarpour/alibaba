import React from 'react'
import Grid from "@mui/material/Grid";
import Image from 'next/image';
import { Typography } from '@mui/material';

function FooterTopImg(props) {
  return (
    <Grid container md={4} xs={8} justifyContent="center" alignItems="center">
            <Grid md={3} xs={8}>
              <Image src={props.img} alt="footer top image" height="89px" width="89px" />
            </Grid>
            <Grid
              md={9} xs={8}
              sx={{ fontSize: 12, lineHeight: 1.2 }}
            >
              <h2>{props.title}</h2>
              <Typography sx={{fontSize:'12px'}}>{props.text}</Typography>
            </Grid>
          </Grid>
  )
}

export default FooterTopImg