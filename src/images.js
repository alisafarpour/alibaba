import React from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
import airplane from "../public/airplane.webp";

function images() {

  // const imageData = useSelector((state) => state.flightFilter.value);

  return (
    <Grid
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ zIndex: "modal", position: "relative" }}
    >
      <Image src={airplane} alt="landing page image" sizes="100vm" />
    </Grid>
  );
}

export default images;
