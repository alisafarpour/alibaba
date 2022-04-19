import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Image from "next/image";
import Img1 from '../../public/EP.png';
import Img2 from '../../public/I3.png';
import Img3 from '../../public/IV.png';
import Img4 from '../../public/FP.png';
import Img5 from '../../public/QB.png';
import Img6 from '../../public/PA.png';


function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
};

function filterBox() {

    const [open, setOpen] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);
    const [open3, setOpen3] = React.useState(true);
    const [open4, setOpen4] = React.useState(true);
    const [open5, setOpen5] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };
    const handleClick3 = () => {
        setOpen3(!open3);
    };
    const handleClick4 = () => {
        setOpen4(!open4);
    };
    const handleClick5 = () => {
        setOpen5(!open5);
    };


    

    const FilterBoxSlider = styled(Slider)(({ theme }) => ({
        color: '#0177DB',
        height: 1,
        margin: 5,
        '& .MuiSlider-thumb': {
            height: 15,
            width: 15,
            backgroundColor: '#fff',
            border: '2px solid gray',
            '&:hover': {
                border: '2px solid #0177DB',
            },
            '& .MuiSlider-bar': {
                height: 1,
                width: 1,
                backgroundColor: 'currentColor',
                marginLeft: 1,
                marginRight: 1,
                
            },
        },
        '& .MuiSlider-valueLabelOpen' :{
            backgroundColor: 'white',
            color : 'black',
            fontSize: '13px',
            fontWeight: '900'
        },
        '& .MuiSlider-track': {
            height: 4,
        },
        '& .MuiSlider-rail': {
            color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
            opacity: theme.palette.mode === 'dark' ? undefined : 1,
            height: 4,
        },
    }));

    function FilterBoxComponent(props) {
        const { children, ...other } = props;
        return (
            <SliderThumb {...other}>
                {children}
                <span className="airbnb-bar" />
                <span className="airbnb-bar" />
                <span className="airbnb-bar" />
            </SliderThumb>
        );
    }

    return (
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-end"
                sx={{ borderRadius: 2, backgroundColor: 'white', direction: 'rtl', height: 'auto', width: '298px', border: 1, borderColor: '#e5e5e5' }}
            >
                <Grid item >

                    <List
                        sx={{ width: '295px', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                <Typography sx={{ fontWeight: '400', marginBottom: 2, marginTop: 2 }}>نتایج:</Typography>
                            </ListSubheader>
                        }
                    >
                        <Divider />


                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                <Typography sx={{ fontWeight: '900', marginTop: 1, marginBottom: 1 }}> ساعت حرکت</Typography>
                            </ListItemIcon>
                            <ListItemText />
                            {open ? <ExpandLess sx={{
                                fontSize: 35, borderRadius: 100, padding: 0.5, backgroundColor: "#F7FAFB", color: "#6C7680",
                                "&: hover": {
                                    backgroundColor: "#e8f8fb",
                                    color: "#14a2b8",
                                },
                            }} /> : <ExpandMore sx={{
                                fontSize: 35, borderRadius: 100, padding: 0.5, backgroundColor: "#F7FAFB", color: "#6C7680",
                                "&: hover": {
                                    backgroundColor: "#e8f8fb",
                                    color: "#14a2b8",
                                },
                            }} />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem sx={{ pl: 4 }}>

                                    <FilterBoxSlider
                                        components={{ Thumb: FilterBoxComponent }}
                                        max={23}
                                        min={6}
                                        defaultValue={[0, 100]}
                                        valueLabelDisplay="on"
                                        sx={{ marginTop: 2.5 }}
                                    />

                                </ListItem>
                            </List>

                        </Collapse>

                        <Divider />

                        <ListItemButton onClick={handleClick2}>
                            <ListItemIcon>
                                <Typography sx={{ fontWeight: '900', marginTop: 1, marginBottom: 1 }}> نوع بلیط</Typography>
                            </ListItemIcon>
                            <ListItemText />
                            {open2 ? <ExpandLess sx={{
                                fontSize: 35, borderRadius: 100, padding: 0.5, backgroundColor: "#F7FAFB", color: "#6C7680",
                                "&: hover": {
                                    backgroundColor: "#e8f8fb",
                                    color: "#14a2b8",
                                },
                            }} /> : <ExpandMore sx={{
                                fontSize: 35, borderRadius: 100, padding: 0.5, backgroundColor: "#F7FAFB", color: "#6C7680", "&: hover": {
                                    backgroundColor: "#e8f8fb",
                                    color: "#14a2b8",
                                },
                            }} />}
                        </ListItemButton>
                        <Collapse in={open2} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem >
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox sx={{ transform: "scale(1.2)", color: '#BBC3C9', }} />} label="سیستمی" />
                                        <FormControlLabel control={<Checkbox sx={{ transform: "scale(1.2)", color: '#BBC3C9', }} />} label="چارتر" />
                                    </FormGroup>

                                </ListItem>
                            </List>
                        </Collapse>
                        <Divider />
                        <ListItemButton onClick={handleClick3}>
                            <ListItemIcon>
                                <Typography sx={{ fontWeight: '900', marginTop: 1, marginBottom: 1 }}> نوع بلیط</Typography>
                            </ListItemIcon>
                            <ListItemText />
                            {open3 ? <ExpandLess sx={{
                                fontSize: 35, borderRadius: 100, padding: 0.5, backgroundColor: "#F7FAFB", color: "#6C7680",
                                "&: hover": {
                                    backgroundColor: "#e8f8fb",
                                    color: "#14a2b8",
                                },
                            }} /> : <ExpandMore sx={{
                                fontSize: 35, borderRadius: 100, padding: 0.5, backgroundColor: "#F7FAFB", color: "#6C7680", "&: hover": {
                                    backgroundColor: "#e8f8fb",
                                    color: "#14a2b8",
                                },
                            }} />}
                        </ListItemButton>
                        <Collapse in={open3} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem >
                                    <FormGroup sx={{ width: '100%' }}>
                                        <Grid container
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            xs={12}
                                        >
                                            <Grid container
                                                xs={10}
                                                direction="row"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                spacing={2}

                                            >
                                                <Grid item lg={3}>
                                                    <FormControlLabel control={<Checkbox sx={{ transform: "scale(1.2)", color: '#BBC3C9', }} />} />
                                                </Grid>
                                                <Grid item lg={3} sx={{ marginLeft: -1.5, marginRight: -1.5 }} >
                                                    <Image src={Img1} width="24px" height="24px" />
                                                </Grid>
                                                <Grid item lg={3}>
                                                    <Typography sx={{ fontWeight: '600', fontSize: '12px' }}>آسمان</Typography>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                        <Grid container
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            xs={12}
                                        >
                                            <Grid container
                                                xs={10}
                                                direction="row"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                spacing={2}

                                            >
                                                <Grid item lg={3}>
                                                    <FormControlLabel control={<Checkbox sx={{ transform: "scale(1.2)", color: '#BBC3C9', }} />} />
                                                </Grid>
                                                <Grid item lg={3} sx={{ marginLeft: -2, marginRight: -1.5 }} >
                                                    <Image src={Img2} width="24px" height="24px" />
                                                </Grid>
                                                <Grid item lg={2}>
                                                    <Typography sx={{ fontWeight: '600', fontSize: '12px' }}>آنا</Typography>
                                                </Grid>
                                            </Grid>

                                        </Grid>

                                        <Grid container
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            xs={12}
                                        >
                                            <Grid container
                                                xs={10}
                                                direction="row"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                spacing={2}

                                            >
                                                <Grid item lg={3}>
                                                    <FormControlLabel control={<Checkbox sx={{ transform: "scale(1.2)", color: '#BBC3C9', }} />} />
                                                </Grid>
                                                <Grid item lg={3} sx={{ marginLeft: -1, marginRight: -1.5 }} >
                                                    <Image src={Img3} width="24px" height="24px" />
                                                </Grid>
                                                <Grid item lg={2}>
                                                    <Typography sx={{ fontWeight: '600', fontSize: '12px' }}>کاسپین</Typography>
                                                </Grid>
                                            </Grid>

                                        </Grid>

                                        <Grid container
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            xs={12}
                                        >
                                            <Grid container
                                                xs={10}
                                                direction="row"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                spacing={2}

                                            >
                                                <Grid item lg={3}>
                                                    <FormControlLabel control={<Checkbox sx={{ transform: "scale(1.2)", color: '#BBC3C9', }} />} />
                                                </Grid>
                                                <Grid item lg={3} sx={{ marginLeft: -1.5, marginRight: -1.5 }} >
                                                    <Image src={Img4} width="24px" height="24px" />
                                                </Grid>
                                                <Grid item lg={4}>
                                                    <Typography sx={{ fontWeight: '600', fontSize: '12px' }}>فلای پرشیا</Typography>
                                                </Grid>
                                            </Grid>

                                        </Grid>

                                        <Grid container
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            xs={12}
                                        >
                                            <Grid container
                                                xs={10}
                                                direction="row"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                spacing={2}

                                            >
                                                <Grid item lg={3}>
                                                    <FormControlLabel control={<Checkbox sx={{ transform: "scale(1.2)", color: '#BBC3C9', }} />} />
                                                </Grid>
                                                <Grid item lg={3} sx={{ marginLeft: -1.5, marginRight: -1.5 }} >
                                                    <Image src={Img5} width="24px" height="24px" />
                                                </Grid>
                                                <Grid item lg={3}>
                                                    <Typography sx={{ fontWeight: '600', fontSize: '12px' }}>قشم‌ ایر</Typography>
                                                </Grid>
                                            </Grid>

                                        </Grid>

                                        <Grid container
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            xs={12}
                                        >
                                            <Grid container
                                                xs={10}
                                                direction="row"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                spacing={2}

                                            >
                                                <Grid item lg={3}>
                                                    <FormControlLabel control={<Checkbox sx={{ transform: "scale(1.2)", color: '#BBC3C9', }} />} />
                                                </Grid>
                                                <Grid item lg={3} sx={{ marginLeft: -3.5, marginRight: -1.5 }} >
                                                    <Image src={Img6} width="24px" height="24px" />
                                                </Grid>
                                                <Grid item lg={4}>
                                                    <Typography sx={{ fontWeight: '600', fontSize: '12px' }}>پارس ایر</Typography>
                                                </Grid>
                                            </Grid>

                                        </Grid>

                                    </FormGroup>

                                </ListItem>
                            </List>
                        </Collapse>
                        <Divider />
                        <ListItemButton onClick={handleClick5}>
                            <ListItemIcon>
                                <Typography sx={{ fontWeight: '900', marginTop: 1, marginBottom: 1 }}>پیشنهاد های ویژه</Typography>
                            </ListItemIcon>
                            <ListItemText />
                            {open5 ? <ExpandLess sx={{
                                fontSize: 35, borderRadius: 100, padding: 0.5, backgroundColor: "#F7FAFB", color: "#6C7680",
                                "&: hover": {
                                    backgroundColor: "#e8f8fb",
                                    color: "#14a2b8",
                                },
                            }} /> : <ExpandMore sx={{
                                fontSize: 35, borderRadius: 100, padding: 0.5, backgroundColor: "#F7FAFB", color: "#6C7680", "&: hover": {
                                    backgroundColor: "#e8f8fb",
                                    color: "#14a2b8",
                                },
                            }} />}
                        </ListItemButton>
                        <Collapse in={open5} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem >
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox sx={{ transform: "scale(1.2)", color: '#BBC3C9', }} />} label="هدیه علی‌بابا به مسافران این پرواز" />
                                    </FormGroup>

                                </ListItem>
                            </List>
                        </Collapse> 
                        <Divider />
                        <ListItemButton onClick={handleClick4}>
                            <ListItemIcon>
                                <Typography sx={{ fontWeight: '900', marginTop: 1, marginBottom: 1 }}>موارد دیگر</Typography>
                            </ListItemIcon>
                            <ListItemText />
                            {open4 ? <ExpandLess sx={{
                                fontSize: 35, borderRadius: 100, padding: 0.5, backgroundColor: "#F7FAFB", color: "#6C7680",
                                "&: hover": {
                                    backgroundColor: "#e8f8fb",
                                    color: "#14a2b8",
                                },
                            }} /> : <ExpandMore sx={{
                                fontSize: 35, borderRadius: 100, padding: 0.5, backgroundColor: "#F7FAFB", color: "#6C7680", "&: hover": {
                                    backgroundColor: "#e8f8fb",
                                    color: "#14a2b8",
                                },
                            }} />}
                        </ListItemButton>
                        <Collapse in={open4} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem >
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox sx={{ transform: "scale(1.2)", color: '#BBC3C9', }} />} label="نمایش بلیط های تکراری" />
                                        <FormControlLabel control={<Checkbox sx={{ transform: "scale(1.2)", color: '#BBC3C9', }} />} label="نمایش بلیط های موجود" />
                                    </FormGroup>

                                </ListItem>
                            </List>
                        </Collapse>

                        
                    </List>
                </Grid>
            </Grid>


    )
}

export default filterBox