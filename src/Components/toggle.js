import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

function toggle(props) {
  return (
    <Grid
      xs={12}
      sx={{ marginTop: 1 }}
      container
      justifyContent="center"
      alignItems="center"
    >
      <Box component={Grid} xl={8.6}
        lg={8.6}
        md={11}
        xs={11} sx={{ direction: "rtl" }}>
        <Accordion sx={{ borderRadius: 1, marginTop: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ border: '0.2px solid currentColor', borderRadius: 100 }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container justifyContent="flex-end"
              direction="row-reverse"
              alignItems="center"
              >
                <Grid container md={11} xs={10.5}>
                <Typography variant="bold" sx={{fontSize:{md:16, xs:13}}}>
                {props.question}
                </Typography>
                </Grid>
              
              <Grid container md={0.35} xs={1}>
              <QuestionMarkIcon sx={{ fontSize:30, borderRadius: 100, padding: 0.5, backgroundColor: "#e8f8fb", color: "#14a2b8", direction: "rtl" }} />
              </Grid>
              
            </Grid>

          </AccordionSummary>
          <AccordionDetails sx={{ width: "95%", margin: "auto" }}>
            <Typography variant="normalToggle" sx={{fontSize:{md:16, xs:13}}}>
              {props.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Grid>
  );
}

export default toggle;
