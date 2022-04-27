import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import kish from "../public/kish.webp";
import isfahan from "../public/isfahan.webp";
import Container from "@mui/material/Container";

function commonImage() {
  return (
    <Container
      sx={{
        width: "72%",
        marginTop: 5,
        direction: "rtl",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          marginTop: 15,

          direction: "rtl",
          paddingTop: 5,
          paddingBottom: 8,
          borderBottom: 0.2,
        }}
      >
        <Image src={kish} />
        <Image src={isfahan} />
      </Grid>
    </Container>
  );
}

export default commonImage;
