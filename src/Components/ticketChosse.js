import React from 'react'
import { Grid, Typography } from '@mui/material'
import { fontWeight, width } from '@mui/system'
import Image from "next/image";
import Img1 from '../../public/EP.png';
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


function TicketChosse(props) {
    console.log(props.items);

    const PrettoSlider = styled(Slider)({
        height: 0.5,
        '& .MuiSlider-thumb': {
            height: 8,
            width: 8,
            backgroundColor: '#fff',
            border: '1.5px solid currentColor',
        },
    });

    const [value, setValue] = React.useState('0');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function show(value) {
        if (value == "2" || value == "1") {
            let valueShow = "3";
            return valueShow
        }
        else return null

    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch" sx={{ width: '835px', backgroundColor: 'white', height: 'auto', marginRight: 1, border: 0.2, borderColor: '#e5e5e5', borderRadius: 2 }}>

            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                lg={9}


            >
                <Grid
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
                        sx={{ marginRight: 3, marginTop: 2 }}
                        lg={1}
                    >

                        <Grid item sx={{ border: 1, borderColor: '#e5e5e5', borderRadius: 100, padding: 1, width: '48px', height: '48px' }} >
                            <Image src={props.items[2].imgSrc} width="32px" height="32px" />
                        </Grid>
                        <Grid>
                            <Typography>{props.items[2].label}</Typography>
                        </Grid>


                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start"
                        lg={4}
                        sx={{ marginTop: -4 }}
                    >
                        <Grid sx={{ backgroundColor: '#f9f9f9', borderRadius: 50, padding: 0.15 }}>
                            <Typography sx={{ fontSize: '12px' }}>
                                {props.items[2].ticketKind}
                            </Typography>
                        </Grid>
                        <Grid sx={{ backgroundColor: '#f9f9f9', borderRadius: 50, padding: 0.15, marginRight: 1 }}>
                            <Typography sx={{ fontSize: '12px' }}>
                                {props.items[2].flightKind}
                            </Typography>
                        </Grid>
                        <Grid sx={{ backgroundColor: '#f9f9f9', borderRadius: 50, padding: 0.15, marginRight: 1 }}>
                            <Typography sx={{ fontSize: '12px' }}>
                                {props.items[2].airplaneName}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start"
                        lg={9}
                        sx={{ marginTop: -3, marginBottom: 2.5, marginRight: 2 }}
                    >
                        <Grid >
                            <Typography sx={{ fontSize: '16px', fontWeight: '900' }}>
                                {props.items[2].startLocation}
                            </Typography>
                        </Grid>
                        <Grid sx={{ marginRight: 2 }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: '900', marginLeft: 1 }}>
                                {props.items[2].startTime}
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
                                {props.items[2].endLocation}
                            </Typography>
                        </Grid>
                        <Grid sx={{ marginRight: 2 }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: '900' }}>
                                {props.items[2].startTime}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start">
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>



                                <TabList onChange={handleChange}>
                                    <Tab label="اطلاعات پرواز" value="1" />
                                    <Tab label="قوانین استرداد" value="2" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
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
                                            <Typography sx={{ fontWeight: '600', fontSize: '16px', marginTop: 1 }}>
                                                {props.items[2].flightNumber}
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
                                            <Typography sx={{ fontWeight: '600', fontSize: '16px', marginTop: 1 }}>
                                                {props.items[2].terminalNumber}
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
                                            <Typography sx={{ fontWeight: '600', fontSize: '16px', marginTop: 1 }}>
                                                {props.items[2].baggageWeight}
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
                                            <Typography sx={{ fontWeight: '600', fontSize: '16px', marginTop: 1 }}>
                                                {props.items[2].flightKind}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        lg={12}
                                        sx={{ marginTop: 2, marginBottom: -2.5 }}
                                    >
                                        <Button onClick={handleChange} value="0" variant="outlined">بستن<KeyboardArrowUpRoundedIcon /></Button>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value="2">
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
                                    <Grid
                                        container
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        lg={12}
                                        sx={{ marginTop: 2, marginBottom: -2.5 }}
                                    >
                                        <Button onClick={handleChange} value="0" variant="outlined">بستن<KeyboardArrowUpRoundedIcon /></Button>
                                    </Grid>
                                </Grid>
                            </TabPanel>

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
                sx={{ marginTop: 3 }}


            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography sx={{ color: '#0177DB', fontWeight: '900', fontSize: "20px" }}>{props.items[2].price}</Typography>
                    <Typography sx={{ color: '#CED2D5', fontWeight: '900', fontSize: "10px", marginRight: 1 }}>ریال</Typography>
                </Grid>

                <Button sx={{ marginTop: 1 }} variant="ticket" >جستجو</Button>
                <Typography sx={{ color: '#DC3444', marginTop: 2, fontSize: '11px' }}>{props.items[2].seat} صندلی باقی مانده</Typography>

                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"

                >

                    <TabContext value={value}>
                        <TabPanel value="2">
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center"

                            >
                                <Typography sx={{ copacity: 0.7, fontSize: '12px', marginTop: 2 }}>بزرگسال:</Typography>
                                <Typography sx={{ copacity: 0.7, fontSize: '12px', marginTop: 2 }}>{props.items[2].price}</Typography>
                            </Grid>
                            <Divider variant="middle" flexItem sx={{ marginTop: 1 }} />
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center"
                            >
                                <Typography sx={{ copacity: 0.7, fontSize: '12px', marginTop: 1 }}>مجموع:</Typography>
                                <Typography sx={{ copacity: 0.7, fontSize: '12px', marginTop: 1 }}>{props.items[2].price}</Typography>
                            </Grid>
                        </TabPanel>
                    </TabContext>
                </Grid>
            </Grid>
        </Grid>




    )
}

export default TicketChosse