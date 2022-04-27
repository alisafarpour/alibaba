import React from 'react'
import { useDispatch } from 'react-redux';
import { ticketFilter, ticketFilterBack } from '../features/flight/flightFilter.js';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


function filterBoxTicketKind(props) {

    const dispatch = useDispatch()
    const [flightSky, setflightSky] = React.useState(false);

    const handleClick = () => {
        if (!flightSky) {
            dispatch(ticketFilter(props.ticketKind));
            setflightSky(!flightSky);
        }
        else{
            dispatch(ticketFilterBack(props.ticketKind));
            setflightSky(!flightSky);
        }
    };


    return (

        <FormControlLabel onClick={handleClick} control={<Checkbox sx={{ transform: "scale(1.2)", color: '#BBC3C9', }} />} label={props.ticketKind} />

    )
}

export default filterBoxTicketKind