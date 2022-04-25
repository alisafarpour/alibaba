import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ticketFilter, filterBack } from '../features/counter/counterSlice.js';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


function FilterBoxTicketKind(props) {

    const dispatch = useDispatch()
    const [flightSky, setflightSky] = React.useState(false);

    const handelClick = () => {
        if (flightSky == false) {
            dispatch(ticketFilter(props.ticketKind));
            setflightSky(!flightSky);
        }
        else if (flightSky == true) {
            dispatch(filterBack(props.ticketKind));
            setflightSky(!flightSky);
        }
    };


    return (

        <FormControlLabel onClick={handelClick} control={<Checkbox sx={{ transform: "scale(1.2)", color: '#BBC3C9', }} />} label={props.ticketKind} />

    )
}

export default FilterBoxTicketKind