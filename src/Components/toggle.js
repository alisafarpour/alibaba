import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

function toggle() {
  return (
    <Grid
      xs={12}
      sx={{ marginTop: 5 }}
      container
      justifyContent="center"
      alignItems="center"
    >
      <Box sx={{ width: "72%", direction: "rtl" }}>
        <h2>پرسش های شما</h2>
        <Accordion sx={{ borderRadius: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container justifyContent="flex-end"
              direction="row-reverse"
              alignItems="center">
              <Typography variant="bold">
                چند روز قبل از پرواز، بلیط هواپیما را بخریم؟
              </Typography>
              <QuestionMarkIcon sx={{ fontSize: 30, borderRadius: 100, padding: 0.5, backgroundColor: "#e8f8fb", color: "#14a2b8", direction: "rtl" }} />
            </Grid>

          </AccordionSummary>
          <AccordionDetails sx={{ width: "95%", margin: "auto" }}>
            <Typography variant="normalToggle">
              امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات
              قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود.
              بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط
              هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در
              ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط
              هواپیما را انجام دهید.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ borderRadius: 1, marginTop: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container justifyContent="flex-end"
              direction="row-reverse"
              alignItems="center">
              <Typography variant="bold">
                در هر پرواز، میزان بار مجاز چقدر است؟
              </Typography>
              <QuestionMarkIcon sx={{ fontSize: 30, borderRadius: 100, padding: 0.5, backgroundColor: "#e8f8fb", color: "#14a2b8", direction: "rtl" }} />
            </Grid>

          </AccordionSummary>
          <AccordionDetails sx={{ width: "95%", margin: "auto" }}>
            <Typography variant="normalToggle">
              میزان مجاز بار به کلاس پرواز و کلاس نرخی بلیط بستگی دارد. هنگام
              خرید آنلاین بلیط هواپیما می‌توانید میزان بار مجاز را در اطلاعات
              بلیط ببینید. طبیعی است که اگر میزان بارتان بیش از حد مجاز باشد،
              باید جریمه پرداخت کنید.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ borderRadius: 1, marginTop: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container justifyContent="flex-end"
              direction="row-reverse"
              alignItems="center">
              <Typography variant="bold">
                نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟
              </Typography>
              <QuestionMarkIcon sx={{ fontSize: 30, borderRadius: 100, padding: 0.5, backgroundColor: "#e8f8fb", color: "#14a2b8", direction: "rtl" }} />
            </Grid>

          </AccordionSummary>
          <AccordionDetails sx={{ width: "95%", margin: "auto" }}>
            <Typography variant="normalToggle">
              نرخ بلیط کودکان و نوزادان به کلاس پرواز و کلاس نرخی بستگی دارد. به
              صورت کلی، قیمت بلیط مسافر کودک (2 الی 12 سال) معادل 50 الی 100
              درصد بلیط بزرگسال، و قیمت بلیط مسافر نوزاد (تا دو سال) 10 درصد
              بلیط بزرگسال است. هنگام تهیه بلیط هواپیما به این نکته توجه داشته
              باشید.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ borderRadius: 1, marginTop: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container justifyContent="flex-end"
              direction="row-reverse"
              alignItems="center">
              <Typography variant="bold">
                رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟
              </Typography>
              <QuestionMarkIcon sx={{ fontSize: 30, borderRadius: 100, padding: 0.5, backgroundColor: "#e8f8fb", color: "#14a2b8", direction: "rtl" }} />
            </Grid>

          </AccordionSummary>
          <AccordionDetails sx={{ width: "95%", margin: "auto" }}>
            <Typography variant="normalToggle">
              خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید
              می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف
              هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز
              برخودار هستید.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ borderRadius: 1, marginTop: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container justifyContent="flex-end"
              direction="row-reverse"
              alignItems="center">
              <Typography variant="bold">
                آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟
              </Typography>
              <QuestionMarkIcon sx={{ fontSize: 30, borderRadius: 100, padding: 0.5, backgroundColor: "#e8f8fb", color: "#14a2b8", direction: "rtl" }} />
            </Grid>

          </AccordionSummary>
          <AccordionDetails sx={{ width: "95%", margin: "auto" }}>
            <Typography variant="normalToggle">
            وقتی از علی‌بابا یعنی بهترین سایت خرید بلیط هواپیما ، بلیطتان را
              رزرو می‌کنید، خیالتان آسوده است که امکان استرداد وجه در صورت کنسل
              کردن بلیط وجود دارد. میزان جریمه را هم هنگام رزرو آنلاین بلیط
              هواپیما در قسمت قوانین استرداد بخوانید. میزان جریمه به نوع بلیط،
              کلاس پروازی، کلاس نرخی و... بستگی دارد.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ borderRadius: 1, marginTop: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container justifyContent="flex-end"
              direction="row-reverse"
              alignItems="center">
              <Typography variant="bold">
              هنگامی که از سایت خرید بلیط هواپیما رزرو بلیط را انجام می‌دهیم،
              امکان انتخاب صندلی مورد نظرمان وجود دارد؟
              </Typography>
              <QuestionMarkIcon sx={{ fontSize: 30, borderRadius: 100, padding: 0.5, backgroundColor: "#e8f8fb", color: "#14a2b8", direction: "rtl" }} />
            </Grid>

          </AccordionSummary>
          <AccordionDetails sx={{ width: "95%", margin: "auto" }}>
            <Typography variant="normalToggle">
            خیر؛ هنگام رزرو بلیط هواپیما داخلی یا خارجی امکان انتخاب صندلی
              وجود ندارد. البته در زمان چک‌این انتخاب محدوده صندلی امکان‌پذیر
              است.
            </Typography>
          </AccordionDetails>
        </Accordion>

        
        
       
      </Box>
    </Grid>
  );
}

export default toggle;
