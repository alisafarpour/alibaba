import React from 'react'
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

function footerLink(props) {
    return (
        <Grid xs={4}>
            <h3>{props.title}</h3>
            <Grid sx={{ lineHeight: 1.75 }}>
                <Link href="#" underline="none" sx={{ color: "black" }}>
                    {props.text1}
                </Link>
                <br />
                <Link href="#" underline="none" sx={{ color: "black" }}>
                    {props.text2}
                </Link>
                <br />
                <Link href="#" underline="none" sx={{ color: "black" }}>
                    {props.text3}
                </Link>
                <br />
                <Link href="#" underline="none" sx={{ color: "black" }}>
                    {props.text4}
                </Link>
                <br />
                <Link href="#" underline="none" sx={{ color: "black" }}>
                    {props.text5}
                </Link>
            </Grid>
        </Grid>
    )
}

export default footerLink