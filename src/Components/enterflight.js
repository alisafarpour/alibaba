import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



function enterflight() {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
        {
          label: 'The Lord of the Rings: The Return of the King',
          year: 2003,
        }];
        

  return (
    <Grid container spacing={2} >
        <Grid item xs={12} sx={{direction: 'rtl' , borderRadius: 10, marginBottom: 2}} >
            <Button href="#text-buttons" sx={{borderRadius: '25%',}}>یک طرفه<KeyboardArrowDownIcon /></Button>
        </Grid>
        <Grid container spacing={2}>
            <Grid item >
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 250}}
                renderInput={(params) => <TextField {...params} label="مبدا(شهر)" />}
                />
            </Grid>
            <Grid item sx={{marginRight: -2}}>
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 250 , direction: 'rtl', borderTopRightRadius: 0, borderBottomRightRadius: 0}}
                renderInput={(params) => <TextField {...params} label="مقصد(شهر)" />}
                />
            </Grid>
            <Grid container xs={4} spacing={-2} sx={{marginTop: 2}}>
                <Grid item >
                    <DatePicker
                        placeholder="تاریخ رفت"
                        style={{width: '150px', height:'55px', fontSize:'16px',fontWeight:'bold', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}
                        multiple
                        calendar={persian}
                        locale={persian_fa}
                        calendarPosition="bottom-right"
                    />
                </Grid>
                <Grid item >
                    <DatePicker
                        
                        placeholder="تاریخ برگشت"
                        style={{width: '150px', height:'55px', fontSize:'16px',fontWeight:'bold', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}
                        multiple
                        calendar={persian}
                        locale={persian_fa}
                        calendarPosition="bottom-right"
                    />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default enterflight