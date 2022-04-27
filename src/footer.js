import { Box, Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import shawl from "../public/shawl.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import { footerImageData } from "./Data/footerImageData";
import Footerdata from "./Components/footerData";
import Footerlink from "./Components/footerlink";
import { footerLinkData } from "./Data/footerLinkData";
import Footertopimg from "./Components/footertopimg";
import { footerTopImgData } from "./Data/fotterTopImgData";

function footer() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container
        sx={{
          width: "72%",
          marginTop: 5,
          direction: "rtl",
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            marginTop: 18,

            direction: "rtl",
            paddingTop: 5,
            paddingBottom: 8,
            borderBottom: 0.2,
          }}
        >
          {footerTopImgData.map((item) => {
                return <Footertopimg {...item} />;
              })}
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            direction: "rtl",
            borderBottom: 2,
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid
              container
              xs={6}
              justifyContent="space-between"
              alignItems="flex-start"
              sx={{ fontSize: 14, marginTop: -10 }}
            >
              {footerLinkData.map((item) => {
                return <Footerlink {...item} />;
              })}
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              xs={6}
              sx={{ direction: "ltr", marginTop: 10 }}
            >
              <Grid xs={12}>
                <Image src={shawl} width="189px" height="30px" />
              </Grid>
              <Grid xs={12} sx={{ lineHeight: 0.75 }}>
                <p>
                  تلفن پشتیبانی:&ensp; ۰۲۱ - ۴۳۹۰۰۰۰۰ &ensp;|&ensp;۰۲۱ -
                  ۴۹۲۷۵۰۰۰
                </p>
                <p>
                  دفتر فروش: قیطریه، بلوار اندرزگو، نبش کوچه‌ی بلوچ شمالی، پلاک
                  ۴
                </p>
              </Grid>
              <Grid container sx={{ marginTop: 2, marginBottom: 5 }}>
                {footerImageData.map((item) => {
                  return <Footerdata image={item} />;
                })}
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                borderTop: 0.2,
                paddingTop: 2,
                direction: "rtl",
                fontSize: 12,
                paddingBottom: 5,
                color: "black",
              }}
            >
              <Grid xs={7}>
                <p>
                  کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و
                  متعلق به شرکت سفرهای علی‌بابا می‌باشد. (نسخه 1.72.0)
                </p>
              </Grid>
              <Grid
                container
                xs={5}
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center"
              >
                <LinkedInIcon sx={{ fontSize: 30 }} />
                <InstagramIcon sx={{ fontSize: 30, marginLeft: 2.5 }} />
                <TwitterIcon sx={{ fontSize: 30, marginLeft: 2.5 }} />
                <YouTubeIcon sx={{ fontSize: 30, marginLeft: 2.5 }} />
                <TelegramIcon sx={{ fontSize: 30, marginLeft: 2.5 }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default footer;
