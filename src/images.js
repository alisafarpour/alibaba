import React from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
import airplane from "../public/airplane.webp";

function images() {
  return (
    <Grid
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ zIndex: "modal", position: "relative" }}
    >
      <Image src={airplane} sizes="100vm" />
    </Grid>
  );
}

export default images;
