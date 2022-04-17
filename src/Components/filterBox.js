import React from 'react';
import { Grid } from '@mui/material';
import Container from "@mui/material/Container";
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
import StarBorder from '@mui/icons-material/StarBorder';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';


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

    const handleClick = () => {
        setOpen(!open);
    };
  

    const AirbnbSlider = styled(Slider)(({ theme }) => ({
        color: '#3a8589',
        height: 3,
        padding: '13px 0',
        '& .MuiSlider-thumb': {
          height: 18,
          width: 18,
          backgroundColor: '#fff',
          border: '1px solid currentColor',
          '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
          },
          '& .airbnb-bar': {
            height: 10,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
          },
        },
        '& .MuiSlider-track': {
          height: 2.5,
        },
        '& .MuiSlider-rail': {
          color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
          opacity: theme.palette.mode === 'dark' ? undefined : 1,
          height: 2.5,
        },
      }));
      
      function AirbnbThumbComponent(props) {
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
            direction="row-reverse"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
            sx={{ marginTop: 2, width: '85%' }}
        >
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-end"
                sx={{ borderRadius: 2, backgroundColor: 'white', direction: 'rtl', height: 450, width: '298px', border: 1, borderColor: '#e5e5e5' }}
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
                                <Typography sx={{ fontWeight: '900', marginTop: 1 }}> ساعت حرکت</Typography>
                            </ListItemIcon>
                            <ListItemText />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem sx={{ pl: 4 }}>
                                    
                                    <AirbnbSlider
                                        components={{ Thumb: AirbnbThumbComponent }}
                                        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                                        max = {23}
                                        min = {6}
                                        defaultValue={[0, 100]}
                                        valueLabelDisplay="on"
                                        
                                    />

                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </Grid>
            </Grid>


        </Grid>

    )
}

export default filterBox