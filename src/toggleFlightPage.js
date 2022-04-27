import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

function toggleFlightpage(props) {
    return (
        <Grid
            xs={9.8}
            sx={{  direction: "rtl", width: '100%' }}
            container
            justifyContent="center"
            alignItems="center"
        >
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
            >
                <Accordion sx={{ borderRadius: 1, marginTop: 1, marginBottom: 1 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Grid container justifyContent="flex-end"
                            direction="row-reverse"
                            alignItems="center">
                            <Typography variant="bold">
                                {props.question}
                            </Typography>
                            <QuestionMarkIcon sx={{ fontSize: 30, borderRadius: 100, padding: 0.5, backgroundColor: "#e8f8fb", color: "#14a2b8", direction: "rtl" }} />
                        </Grid>

                    </AccordionSummary>
                    <AccordionDetails sx={{ width: "95%", margin: "auto" }}>
                        <Typography variant="normalToggle">
                            {props.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </Grid>

        </Grid>
    )
}

export default toggleFlightpage