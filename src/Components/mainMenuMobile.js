import React from 'react'
import { Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FlightLandOutlinedIcon from "@mui/icons-material/FlightLandOutlined";
import DirectionsSubwayFilledOutlinedIcon from "@mui/icons-material/DirectionsSubwayFilledOutlined";
import DirectionsBusFilledOutlinedIcon from "@mui/icons-material/DirectionsBusFilledOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import TourOutlinedIcon from "@mui/icons-material/TourOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import LuggageIcon from '@mui/icons-material/Luggage';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AdapterJalali from '@date-io/date-fns-jalali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Footer from "../footer.js";
import Common from '../common.js';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

const city = [
    "تهران", "اهواز", "شیراز", "مشهد", "بندر عباس", "اصفهان", "تبریز", "کیش"
];

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    height: 45,
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(0.5),
      fontSize: 13,
      fontWeight: 400,
      border: 0,
      '&.Mui-disabled': {
        border: 0,
      },
      '&:not(:first-of-type)': {
        borderRadius: theme.shape.borderRadius,
      },
      '&:first-of-type': {
        borderRadius: theme.shape.borderRadius,
      },
      '&.Mui-selected': {
        border: 0,
        color: 'white',
        backgroundColor: '#0177db',
        borderRadius: 10,
      },
    },
  }));

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function mainMenuMobile() {
    // let a = element.scrollTop();

    const [alignment, setAlignment] = React.useState('center');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const[tabValue, setTabValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const [value, setValue] = React.useState(new Date());
    const [value2, setValue2] = React.useState(new Date());

    const [state, setState] = React.useState({
        right: false,
        left: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Grid container direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{ width: '100%' }}
            onChange={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Grid container xs={12} sx={{ direction: 'rtl' }} >
                <Button onClick={toggleDrawer('left', false)} sx={{ color: 'black', marginBottom: 1,marginTop: 1, fontSize: 15 }} variant='text'><ArrowForwardRoundedIcon sx={{ marginLeft: 2, fontSize: 23 }} />پرواز</Button>
            </Grid>
            <Grid container xs={11} >
                <Grid xs={12} container direction="row"
                    justifyContent="center"
                    alignItems="flex-start" >
                    <StyledToggleButtonGroup
                        sx={{ width: '100%', border: 1, borderRadius: 2, borderColor: '#e5e5e5' }}
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                    >
                        <ToggleButton sx={{ width: '50%'}} value="left" >
                            پرواز خارجی
                        </ToggleButton>
                        <ToggleButton sx={{ width: '50%' }} value="center">
                            پرواز داخلی
                        </ToggleButton>
                    </StyledToggleButtonGroup>
                </Grid>
                <Grid xs={12} sx={{marginTop: 2}}>
                    <Tabs sx={{borderBottom: 1 ,borderColor: '#e5e5e5'}} value={tabValue} onChange={handleChange} >
                        <Tab sx={{width:'50%', fontWeight: 900, fontSize: 14 }} label="رفت و برگشت" {...a11yProps(0)} />
                        <Tab sx={{width:'50%', fontWeight: 900, fontSize: 14 }} label="یک طرفه" {...a11yProps(1)} />
                    </Tabs>
                </Grid>

                <Grid xs={12} sx={{ marginTop: 2 }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={city}
                        sx={{ width: 'auto', borderTopRightRadius: "100%" }}
                        renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                <LocationOnIcon />
                                {option}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField {...params} label="مبدا(شهر)" />
                        )}
                    />
                </Grid>
                <Grid xs={12} sx={{ marginTop: 2 }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={city}
                        sx={{ width: 'auto', borderTopRightRadius: "100%" }}
                        renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                <LocationOnIcon />
                                {option}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField {...params} label="مقصد(شهر)" />
                        )}
                    />
                </Grid>
                <Grid xs={12} sx={{ marginTop: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterJalali}>
                        <DatePicker
                            label="زمان رفت"
                            mask="____/__/__"
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                            renderInput={(params) => <TextField sx={{ width: { xs: '100%', md: 'auto' } }} {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid xs={12} sx={{ marginTop: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterJalali}>
                        <DatePicker
                            label="زمان برگشت"
                            mask="____/__/__"
                            value={value2}
                            onChange={(newValue2) => setValue2(newValue2)}
                            renderInput={(params) => <TextField sx={{ width: { xs: '100%', md: 'auto' } }} {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid xs={12} sx={{ marginTop: 2 }}>
                    <Button variant="main" sx={{ width: '100%' }} href="/flights">جستجو</Button>
                </Grid>
                <Grid container xs={12} sx={{ marginTop: 2, borderRadius: 2, border: 1, borderColor: '#e5e5e5' }}>
                    <Grid>
                        <Common />
                    </Grid>
                </Grid>
                <Grid>
                    <Footer />
                </Grid>
            </Grid>
        </Grid>
    );

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid container xs={12} sx={{ width: '100%', height: '76px', backgroundColor: '#FCB710', position: 'relative', marginTop: 9 }}>
            </Grid>
            <Grid direction="row"
                justifyContent="center"
                alignItems="center" container xs={10.5} sx={{ backgroundColor: 'white', borderColor: 'white', borderRadius: 2, position: 'absolute', marginTop: 18, width: '100%' }}>
                <ButtonGroup
                    fullWidth
                    orientation="vertical"
                >
                    <ButtonGroup size="large" color="buttonGroup" aria-label="large button group" variant="text">
                        <Button fullWidth variant="text" key="one"><Typography sx={{ color: 'black', fontWeight: 900 }}>قطار </Typography><DirectionsSubwayFilledOutlinedIcon sx={{ marginLeft: 1, color: 'black' }} /></Button>
                        <Button onClick={toggleDrawer('left', true)} fullWidth variant="text" key="one"><Typography sx={{ color: 'black', fontWeight: 900 }}>پرواز</Typography><FlightLandOutlinedIcon sx={{ marginLeft: 1, color: 'black' }} /></Button>
                        <Drawer
                            anchor={'left'}
                            open={state['left']}
                            onClose={toggleDrawer('left', false)}
                            sx={{ width: '100%' }}
                        >
                            {list('left')}
                        </Drawer>
                    </ButtonGroup>
                    <Divider />
                    <ButtonGroup size="large" color="buttonGroup" aria-label="large button group" variant="text">
                        <Button fullWidth variant="text" key="one"><Typography sx={{ color: 'black', fontWeight: 900 }}>هتل</Typography><KingBedOutlinedIcon sx={{ marginLeft: 1, color: 'black' }} /></Button>
                        <Button fullWidth variant="text" key="one"><Typography sx={{ color: 'black', fontWeight: 900 }}>اتوبوس</Typography><DirectionsBusFilledOutlinedIcon sx={{ marginLeft: 1, color: 'black' }} /></Button>
                    </ButtonGroup>
                    <Divider />
                    <ButtonGroup size="large" color="buttonGroup" aria-label="large button group" variant="text">
                        <Button fullWidth variant="text" key="one"><Typography sx={{ color: 'black', fontWeight: 900 }}>اقامتگاه</Typography><MeetingRoomOutlinedIcon sx={{ marginLeft: 1, color: 'black' }} /></Button>
                        <Button fullWidth variant="text" key="one"><Typography sx={{ color: 'black', fontWeight: 900 }}>تور</Typography><TourOutlinedIcon sx={{ marginLeft: 1, color: 'black' }} /></Button>
                    </ButtonGroup>
                </ButtonGroup>
            </Grid>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999 }} elevation={3}>
                <BottomNavigation
                    showLabels
                >
                    <BottomNavigationAction label="حساب کاربری" icon={<AccountCircleRoundedIcon />} />
                    <BottomNavigationAction label="سفرهای من" icon={<LuggageIcon />} />
                    <BottomNavigationAction label="خانه" icon={<HomeIcon />} />
                </BottomNavigation>
            </Paper>
        </Grid>



    )
}

export default mainMenuMobile