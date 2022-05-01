import React from "react";
import Image from "next/image";
import QrCode from "../public/qrcode-97ae53b8.jpg";
import Mobile from "../public/app-mobile@4x-a456f355.webp";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Grid from "@mui/material/Grid";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

function common() {
  return (
    <Grid container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{
          backgroundColor: "white",
          marginTop: 5,
          borderRadius: 2,
          paddingRight: 5,
          paddingLeft: 5,
          direction: "rtl",
        }}
        xl={8.6}
        lg={8.6}
        md={11.5}
        xs={12}
      >

        <Grid item xl={1.75} lg={1.75} md={2} xs={12} sx={{ display: { xs: 'none', md: 'block' , xl: 'block', lg: 'block' }, marginTop:2 , marginBottom: 2}}>
          <Image src={QrCode} />
        </Grid>
        <Grid item xl={5} lg={5} md={4} xs={12} sx={{ marginRight: 5 , marginTop:2 , marginBottom: 2}}>
          <Typography variant="h4" sx={{ fontWeight: "900" }}>اپلیکیشن علی‌بابا </ Typography>
          <Typography sx={{ lineHeight: 4 }}>سریع‌تر و مطمئن‌تر به سفر بروید</ Typography>
          <Link href="#" underline="none">
            مشاهده لینک های دانلود
            <ArrowBackIosNewOutlinedIcon sx={{ paddingTop: 1.5 }} />
          </Link>
          <Grid container sx={{ fontSize: 12, marginTop: 2, opacity: 0.5 }}>
            <Typography>
              <AppleIcon sx={{ fontSize: 20 }} />
              <AndroidIcon sx={{ fontSize: 20 }} />
              &ensp;قابلیت نصب روی Android و iOS
            </Typography>
          </Grid>
        </Grid>
        <Grid item xl={3.5} lg={3.5} md={12} xs={12}>
          <Image src={Mobile} />
        </Grid>
      </Grid>
    </Grid>

  );
}

export default common;
