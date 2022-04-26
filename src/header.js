import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import SpeakerNotesOutlinedIcon from "@mui/icons-material/SpeakerNotesOutlined";
import Alibaba from "../public/ali-baba.png";
import Image from "next/image";

function header() {
  return (
    <div dir="rtl">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        
        spacing={2}
        xs={12}
        sx={{ backgroundColor: "white", height: 80, position: 'sticky' }}
      >
        <Grid item xs={1.25}>
          <Image src={Alibaba} />
        </Grid>
        <Grid
          item
          justifyContent="flex-end"
          alignItems="center"
          xs={5}
          sx={{ marginRight: 3 }}
        >
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={0.5}
          >
            <Button
              sx={{
                bgcolor: "background.paper",
                color: "text.secondary",
                fontSize: 16,
              }}
            >
              پرواز
              <KeyboardArrowDownIcon />
            </Button>

            <Button
              sx={{
                bgcolor: "background.paper",
                color: "text.secondary",
                fontSize: 16,
              }}
            >
              قطار
            </Button>

            <Button
              sx={{
                bgcolor: "background.paper",
                color: "text.secondary",
                fontSize: 16,
              }}
            >
              اتوبوس
            </Button>

            <Button
              sx={{
                bgcolor: "background.paper",
                color: "text.secondary",
                fontSize: 16,
              }}
            >
              تور
            </Button>

            <Button
              sx={{
                bgcolor: "background.paper",
                color: "text.secondary",
                fontSize: 16,
              }}
            >
              هتل
            </Button>

            <Button
              sx={{
                bgcolor: "background.paper",
                color: "text.secondary",
                fontSize: 16,
              }}
            >
              ویلا و اقامتگاه
            </Button>

            <Button
              sx={{
                bgcolor: "background.paper",
                color: "text.secondary",
                fontSize: 16,
              }}
            >
              بیشتر
              <KeyboardArrowDownIcon />
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={4} dir="ltr">
          <Stack
            direction="row"
            dir="rtl"
            spacing={1}
            sx={{ paddingRight: 25 }}
          >
            <Button
              sx={{
                bgcolor: "background.paper",
                color: "text.secondary",
                fontSize: 16,
              }}
            >
              <SpeakerNotesOutlinedIcon sx={{ marginLeft: 1 }} /> پیگیری خرید
            </Button>
            <Button
              sx={{
                bgcolor: "background.paper",
                color: "text.secondary",
                fontSize: 16,
              }}
            >
              <HowToRegOutlinedIcon sx={{ marginLeft: 1 }} /> ورود یا ثبت نام
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default header;
