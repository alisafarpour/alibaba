import { Box, Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Pic1 from "../public/Unknown-4.webp";
import Pic3 from "../public/Unknown-5.webp";
import Pic2 from "../public/Unknown-3.webp";
import Link from "@mui/material/Link";
import shawl from "../public/shawl.svg";
import state from "../public/state.svg";
import aira from "../public/aira.png";
import passenger from "../public/passenger.svg";
import enamad from "../public/enamad.png";
import samandehi from "../public/samandehi.png";
import ecunion from "../public/ecunion.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";

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
          <Grid container xs={4} justifyContent="center" alignItems="center">
            <Grid xs={4}>
              <Image src={Pic1} height="89px" width="89px" />
            </Grid>
            <Grid
              xs={8}
              sx={{ fontSize: 12, lineHeight: 1.2, marginRight: -4 }}
            >
              <h2>رتبه یک سفر</h2>
              <p>معتبرترین عرضه‌کننده محصولات گردشگری در ایران</p>
            </Grid>
          </Grid>
          <Grid container xs={4} justifyContent="center" alignItems="center">
            <Grid xs={4}>
              <Image src={Pic2} height="89px" width="89px" />
            </Grid>
            <Grid
              xs={8}
              sx={{ fontSize: 12, lineHeight: 1.2, marginRight: -4 }}
            >
              <h2>همسفر هر سفر</h2>
              <p>ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)</p>
            </Grid>
          </Grid>
          <Grid container xs={4} justifyContent="center" alignItems="center">
            <Grid xs={4}>
              <Image src={Pic3} height="89px" width="89px" />
            </Grid>
            <Grid
              xs={8}
              sx={{ fontSize: 12, lineHeight: 1.2, marginRight: -4 }}
            >
              <h2>همسفر همه لحظات سفر</h2>
              <p>پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر</p>
            </Grid>
          </Grid>
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
              <Grid xs={4}>
                <h3>علی بابا</h3>
                <Grid sx={{ lineHeight: 1.75 }}>
                  <Link href="#" underline="none" sx={{ color: "black" }}>
                    {"درباره ما"}
                  </Link>
                  <br />
                  <Link href="#" underline="none" sx={{ color: "black" }}>
                    {"تماس با ما"}
                  </Link>
                  <br />
                  <Link href="#" underline="none" sx={{ color: "black" }}>
                    {"چرا علی‌بابا"}
                  </Link>
                  <br />
                  <Link href="#" underline="none" sx={{ color: "black" }}>
                    {"علی بابا پلاس"}
                  </Link>
                  <br />
                  <Link href="#" underline="none" sx={{ color: "black" }}>
                    {"مجله علی‌بابا"}
                  </Link>
                </Grid>
              </Grid>
              <Grid xs={4}>
                <h3>راهنما</h3>
                <Grid sx={{ lineHeight: 1.75 }}>
                  <Link href="#" underline="none" sx={{ color: "black" }}>
                    {"راهنمای خرید"}
                  </Link>
                  <br />
                  <Link href="#" underline="none" sx={{ color: "black" }}>
                    {"راهنمای استرداد بلیط"}
                  </Link>
                  <br />
                  <Link href="#" underline="none" sx={{ color: "black" }}>
                    {"قوانین و مقررات"}
                  </Link>
                  <br />
                  <Link href="#" underline="none" sx={{ color: "black" }}>
                    {"پرسش و پاسخ"}
                  </Link>
                </Grid>
              </Grid>
              <Grid xs={4}>
                <h3>اطلاعات تکمیلی</h3>
                <Grid sx={{ lineHeight: 1.75 }}>
                  <Link href="#" underline="none" sx={{ color: "black" }}>
                    {"باشگاه مشتریان"}
                  </Link>
                  <br />
                  <Link href="#" underline="none" sx={{ color: "black" }}>
                    {"فروش سازمانی"}
                  </Link>
                  <br />
                  <Link href="#" underline="none" sx={{ color: "black" }}>
                    {"همکاری با آژانس‌ها"}
                  </Link>
                  <br />
                  <Link href="#" underline="none" sx={{ color: "black" }}>
                    {"فرصت‌های شغلی"}
                  </Link>
                </Grid>
                <Grid xs={12}></Grid>
              </Grid>
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
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  xs={1.65}
                  sx={{ border: 0.25, borderRadius: 2 }}
                >
                  <Image src={state} width="69px" height="69px" />
                </Grid>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  xs={1.65}
                  sx={{
                    border: 0.25,
                    borderRadius: 2,
                    marginLeft: 1,
                    padding: 1,
                  }}
                >
                  <Image src={aira} width="69px" height="69px" />
                </Grid>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  xs={1.65}
                  sx={{
                    border: 0.25,
                    borderRadius: 2,
                    marginLeft: 1,
                    padding: 1,
                  }}
                >
                  <Image src={passenger} width="69px" height="69px" />
                </Grid>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  xs={1.65}
                  sx={{
                    border: 0.25,
                    borderRadius: 2,
                    marginLeft: 1,
                    padding: 1,
                  }}
                >
                  <Image src={enamad} width="69px" height="69px" />
                </Grid>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  xs={1.65}
                  sx={{
                    border: 0.25,
                    borderRadius: 2,
                    marginLeft: 1,
                    padding: 1,
                  }}
                >
                  <Image src={samandehi} width="69px" height="69px" />
                </Grid>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  xs={1.65}
                  sx={{
                    border: 0.25,
                    borderRadius: 2,
                    marginLeft: 1,
                    padding: 1,
                  }}
                >
                  <Image src={ecunion} width="69px" height="69px" />
                </Grid>
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
