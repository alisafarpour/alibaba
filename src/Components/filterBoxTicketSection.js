import React from 'react'
import {DataFilterBox} from '../Data/DataFilterBox';
import { Grid } from '@mui/material';
import { Typography } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Image from "next/image";
import { useSelector, useDispatch } from 'react-redux';
import { flightFilter, filterBack } from '../features/counter/counterSlice.js';

function filterBoxTicketSection(props) {

    const dispatch = useDispatch()
    const [flightSky, setflightSky] = React.useState(false);

    const handelClick = () => {
       if (flightSky) {
            dispatch(filterBack(props.label));
            setflightSky(!flightSky);
        }else{
            dispatch(flightFilter(props.label));
            setflightSky(!flightSky);
        }
    };

    return (

        <Grid container
            xs={12}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{  marginRight: -5.5 }}

        >
            <Grid item lg={4}>
                <FormControlLabel onClick={handelClick} control={<Checkbox sx={{ transform: "scale(1.2)", color: '#BBC3C9', }} />} />
            </Grid>
            <Grid item lg={4} sx={{  marginRight: -6.5 }} >
                <Image src={props.imgSrc} width="24px" height="24px" />
            </Grid>
            <Grid container justifyContent="flex-start" sx={{  marginRight: 1.5 }} lg={4}>
                <Typography sx={{ fontWeight: '600', fontSize: '12px' }}>{props.label}</Typography>
            </Grid>
        </Grid>

    )



}

export default filterBoxTicketSection