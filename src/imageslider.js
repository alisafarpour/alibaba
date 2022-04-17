import React from "react";
import kish from "../public/kish.webp";
import isfahan from "../public/isfahan.webp";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function imageslider() {
  const images = [kish, isfahan];

  return (
    <Container
      maxWidth="xlg"
      sx={{
        width: "75%",
        marginTop: 5,
        borderRadius: 2,
        paddingRight: 5,
        paddingLeft: 5,
        direction: "rtl",
      }}
    >
    <Grid container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{marginTop: 20 }}
    >
    <Grid Item lg={6}>
    <Image src={kish} />
    </Grid >
    <Grid Item lg={6}>
    <Image src={isfahan} />
    </Grid>


    </Grid>
    </Container>

  );
}

export default imageslider;
