import React from 'react'
import Grid from "@mui/material/Grid";
import Image from 'next/image';

function FooterTopImg(props) {
  return (
    <Grid container xs={4} justifyContent="center" alignItems="center">
            <Grid xs={4}>
              <Image src={props.img} height="89px" width="89px" />
            </Grid>
            <Grid
              xs={8}
              sx={{ fontSize: 12, lineHeight: 1.2, marginRight: -4 }}
            >
              <h2>{props.title}</h2>
              <p>{props.text}</p>
            </Grid>
          </Grid>
  )
}

export default FooterTopImg