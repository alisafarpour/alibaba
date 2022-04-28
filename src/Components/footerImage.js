import React from 'react'
import Grid from "@mui/material/Grid";
import Image from 'next/image';

function FooterData(props) {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            xs={1.65}
            sx={{ border: 0.25, borderRadius: 2, marginRight:1 }}
        >
            <Image src={props.image} alt="footer image" width="69px" height="69px"  />
        </Grid>
    )
}

export default FooterData