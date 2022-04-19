import React from 'react'
import { Grid, Typography } from '@mui/material'
import Image from "next/image";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Divider } from '@mui/material';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import Button from '@mui/material/Button';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { Collapse } from '@mui/material';



function TicketChosse(props) {

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    const handleClick = () => {
        if (open2 == true) {
            setOpen2(!open2);
        }
        if (open == false) {
            setOpen(!open);
        }

        if (open3 == false) {
            setOpen3(!open3);
        }



    };
    const handleClick2 = () => {
        if (open == true) {
            setOpen(!open);
        }
        if (open2 == false) {
            setOpen2(!open2);
        }
        if (open3 == false) {
            setOpen3(!open3);
        }

    };
    const handleClick3 = () => {
        setOpen3(!open3);
        if (open2 == true) {
            setOpen2(!open2);
        }
        if (open == true) {
            setOpen(!open);
        }
    };
    const handleClick4 = () => {
        if (open2 == true) {
            setOpen2(!open2);
        }

        setOpen(!open);
        setOpen3(!open3);

        if (open3 == true && open == false) {
            setOpen(!open);
            setOpen3(open3);
        }

    };

    // const [seat, setseat] = React.useState(false);

    // const condition = () => {

    //     if(props.seat < 10){
    //         setseat(!seat)
    //         return seat
    //     }
    // }

    const PrettoSlider = styled(Slider)({
        height: 0.5,
        '& .MuiSlider-thumb': {
            height: 8,
            width: 8,
            backgroundColor: '#fff',
            border: '1.5px solid currentColor',
        },
    });




    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch" sx={{ width: '835px', backgroundColor: 'white', height: 'auto', marginRight: 1, border: 0.2, borderColor: '#e5e5e5', borderRadius: 2, marginTop: 1, borderRight: 5, borderRightColor: '#FDB714' }}>

            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                lg={8.7}


            >
                <Grid
                    onClick={handleClick4}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    lg={12}


                >

                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ marginRight: 3, marginTop: 2, marginRight: 1.7 }}
                        lg={1.4}
                    >

                        <Grid item sx={{ border: 1, borderColor: '#e5e5e5', borderRadius: 100, padding: 1, width: '48px', height: '48px' }} >
                            <Image src={props.imgSrc} width="32px" height="32px" />
                        </Grid>
                        <Grid>
                            <Typography>{props.label}</Typography>
                        </Grid>


                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        lg={4}
                        sx={{ marginTop: -4, marginRight: 2 }}
                    >
                        <Grid sx={{ backgroundColor: '#f9f9f9', borderRadius: 50, padding: 0.15 }}>
                            <Typography sx={{ fontSize: '12px' }}>
                                {props.ticketKind}
                            </Typography>
                        </Grid>
                        <Grid sx={{ backgroundColor: '#f9f9f9', borderRadius: 50, padding: 0.15, marginRight: 1 }}>
                            <Typography sx={{ fontSize: '12px' }}>
                                {props.flightKind}
                            </Typography>
                        </Grid>
                        <Grid sx={{ backgroundColor: '#f9f9f9', borderRadius: 50, padding: 0.15, marginRight: 1 }}>
                            <Typography sx={{ fontSize: '12px' }}>
                                {props.airplaneName}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        lg={12}
                        sx={{ marginTop: -2.6 }}
                    >
                        <Grid >
                            <Typography sx={{ fontSize: '16px', fontWeight: '900' }}>
                                {props.startLocation}
                            </Typography>
                        </Grid>
                        <Grid sx={{ marginRight: 2 }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: '900', marginLeft: 1 }}>
                                {props.startTime}
                            </Typography>
                        </Grid>
                        <Grid >
                            <AirplanemodeActiveRoundedIcon sx={{ color: '#bfbfbf', marginLeft: -4, transform: "rotate(270deg)", marginTop: 0.25 }} />
                        </Grid>
                        <Grid sx={{ marginRight: 1.5, marginLeft: 2, width: 150 }}>
                            <PrettoSlider disabled defaultValue={100} />
                        </Grid>

                        <Grid >
                            <Typography sx={{ fontSize: '16px', fontWeight: '900', marginRight: 1 }}>
                                {props.endLocation}
                            </Typography>
                        </Grid>
                        <Grid sx={{ marginRight: 2 }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: '900' }}>
                                {props.endTime}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start">
                    <Box sx={{ width: '100%', typography: 'body1' }}>

                        <TabContext>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>



                                <TabList>
                                    <Tab sx={{ color: '#0177DB' }} label="اطلاعات پرواز" onClick={handleClick} />
                                    <Tab sx={{ color: '#0177DB' }} label="قوانین استرداد" onClick={handleClick2} />
                                </TabList>
                            </Box>
                            <Collapse in={open3} unmountOnExit>
                                <Collapse in={open} unmountOnExit sx={{ marginTop: 2 }}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="space-around"
                                        alignItems="center"
                                    >
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="flex-start"
                                            lg={2}
                                        >
                                            <Grid>
                                                <Typography sx={{ opacity: 0.7 }}>
                                                    شماره پرواز
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{ fontSize: '14px', marginTop: 1 }}>
                                                    {props.flightNumber}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="flex-start"
                                            lg={2}
                                        >
                                            <Grid>
                                                <Typography sx={{ opacity: 0.7 }}>
                                                    ترمینال
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{ fontSize: '14px', marginTop: 1 }}>
                                                    {props.terminalNumber}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="flex-start"
                                            lg={2}
                                        >
                                            <Grid>
                                                <Typography sx={{ opacity: 0.7 }}>
                                                    مقدار بار مجاز
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{ fontSize: '14px', marginTop: 1 }}>
                                                    {props.baggageWeight}
                                                </Typography>
                                            </Grid>

                                        </Grid>
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="flex-start"
                                            lg={2}
                                        >
                                            <Grid>
                                                <Typography sx={{ opacity: 0.7 }}>
                                                    پرواز
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{ fontSize: '14px', marginTop: 1 }}>
                                                    {props.flightKind}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Collapse>
                                <Collapse in={open2} unmountOnExit sx={{ marginTop: 2 }}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="space-around"
                                        alignItems="flex-start"
                                    >


                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="center"
                                            lg={2}
                                        >
                                            <Grid>
                                                <Typography sx={{ color: '#DC3444', fontSize: '20px', fontWeight: '900' }}>
                                                    ۴۰%
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{ fontSize: '14px', marginTop: 1, textAlign: 'center' }}>
                                                    از زمان صدور بلیط تا 12:00 ظهر 3 روز قبل از پرواز
                                                </Typography>
                                            </Grid>

                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="center"
                                            lg={2}
                                        >
                                            <Grid>
                                                <Typography sx={{ color: '#DC3444', fontSize: '20px', fontWeight: '900' }}>
                                                    ۴۰%
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{ fontSize: '14px', marginTop: 1, textAlign: 'center' }}>
                                                    از 12:00 ظهر 3 روز قبل از پرواز تا 12:00 ظهر 1 روز قبل از پرواز
                                                </Typography>
                                            </Grid>

                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="center"
                                            lg={2}
                                        >
                                            <Grid>
                                                <Typography sx={{ color: '#DC3444', fontSize: '20px', fontWeight: '900' }}>
                                                    ۶۰%
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{ fontSize: '14px', marginTop: 1, textAlign: 'center' }}>
                                                    از 12:00 ظهر 1 روز قبل از پرواز تا 3 ساعت قبل از پرواز
                                                </Typography>
                                            </Grid>

                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="center"
                                            lg={2}
                                        >
                                            <Grid>
                                                <Typography sx={{ color: '#DC3444', fontSize: '20px', fontWeight: '900' }}>
                                                    ۶۰%
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{ fontSize: '14px', marginTop: 1, textAlign: 'center' }}>
                                                    از 3 ساعت قبل از پرواز تا 30 دقیقه قبل از پرواز
                                                </Typography>
                                            </Grid>

                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="center"
                                            lg={2}
                                        >
                                            <Grid>
                                                <Typography sx={{ color: '#DC3444', fontSize: '20px', fontWeight: '900' }}>
                                                    ۶۰%
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{ fontSize: '14px', marginTop: 1, textAlign: 'center' }}>
                                                    از 30 دقیقه قبل از پرواز به بعد
                                                </Typography>
                                            </Grid>

                                        </Grid>


                                    </Grid>
                                </Collapse>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    lg={12}
                                    sx={{ marginTop: 2, marginBottom: 0.25 }}
                                >
                                    <Button onClick={handleClick3} value="0" variant="Close">بستن<KeyboardArrowUpRoundedIcon /></Button>
                                </Grid>
                            </Collapse>
                        </TabContext>

                    </Box>
                </Grid>

            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                lg={2.98}
                sx={{ marginTop: 2 }}


            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography sx={{ color: '#0177DB', fontWeight: '900', fontSize: "20px" }}>{props.price}</Typography>
                    <Typography sx={{ color: '#CED2D5', fontWeight: '900', fontSize: "10px", marginRight: 1 }}>ریال</Typography>
                </Grid>

                <Button sx={{ marginTop: 1 }} variant="ticket" >انتخاب بلیط</Button>
                
                <Typography sx={{ color: '#DC3444', marginTop: 2, fontSize: '11px' }}>{props.seat} صندلی باقی مانده</Typography>
       
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"

                >

                    <Collapse unmountOnExit in={open3}>

                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                            sx={{ marginTop: 5 }}

                        >
                            <Typography sx={{ copacity: 0.7, fontSize: '12px', marginTop: 2, marginLeft: 9 }}>بزرگسال:</Typography>
                            <Typography sx={{ copacity: 0.7, fontSize: '12px', marginTop: 2 }}>{props.price}</Typography>
                        </Grid>
                        <Divider variant="middle" flexItem sx={{ marginTop: 1 }} />
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                        >
                            <Typography sx={{ copacity: 0.7, fontSize: '12px', marginTop: 1, marginLeft: 9 }}>مجموع:</Typography>
                            <Typography sx={{ copacity: 0.7, fontSize: '12px', marginTop: 1 }}>{props.price}</Typography>
                        </Grid>
                    </Collapse>
                </Grid>
            </Grid>
        </Grid>




    )
}

export default TicketChosse