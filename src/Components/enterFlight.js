import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AdapterJalali from '@date-io/date-fns-jalali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from "@mui/material";

const city = [
  "تهران", "اهواز", "شیراز", "مشهد", "بندر عباس", "اصفهان", "تبریز", "کیش"
];


export default function EnterFlight() {

  const [value, setValue] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date());

  return (

    <Grid container direction="row"
    justifyContent="center"
    alignItems="center" spacing={0.5}>

      <Grid
        item
        xs={12}
        sx={{ direction: "rtl", borderRadius: 10, marginBottom: 2, paddingRight: {lg:5.5, xs:2} ,paddingLeft: {lg:5.5, xs:2}  }}
      >
        <Button href="#text-buttons" sx={{ borderRadius: "25%" }}>
          یک طرفه
          <KeyboardArrowDownIcon />
        </Button>
      </Grid>
        <Grid item md={2.5} xs={10} sx={{marginTop: 2}}>
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
        <Grid item md={2.5} xs={10} sx={{marginTop: 2}}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={city}
            sx={{ width: 'auto', borderTopRightRadius: "100%" }}
            renderOption={(props, option) => (
              <Box sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <LocationOnIcon />
                {option}
              </Box>
            )}
            renderInput={(params) => (
              <TextField {...params} label="مقصد(شهر)" />
            )}
          />
        </Grid>
          <Grid item md={2} xs={10} sx={{marginTop: 2}}>
            <LocalizationProvider dateAdapter={AdapterJalali}>
              <DatePicker
                label="زمان رفت"
                mask="____/__/__"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                renderInput={(params) => <TextField sx={{width:{xs:'100%', md:'auto'}}} {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item md={2} xs={10} sx={{marginTop: 2}}>
            <LocalizationProvider dateAdapter={AdapterJalali}>
              <DatePicker
                label="زمان برگشت"
                mask="____/__/__"
                value={value2}
                onChange={(newValue2) => setValue2(newValue2)}
                renderInput={(params) => <TextField sx={{width:{xs:'100%', md:'auto'}}} {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid justifyContent="center" item md={2} xs={10} sx={{marginTop: 2 }}>
            <Button variant="main" href="/flights">جستجو</Button>
          </Grid>

        </Grid>

  );
}

