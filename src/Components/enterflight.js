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
  "تهران" ,"اهواز" , "شیراز" ,"مشهد" ,"بندر عباس" ,"اصفهان" ,"تبریز" ,"کیش" 
];

export default function enterFlight() {

  const [value, setValue] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date());

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{ direction: "rtl", borderRadius: 10, marginBottom: 2 }}
      >
        <Button href="#text-buttons" sx={{ borderRadius: "25%" }}>
          یک طرفه
          <KeyboardArrowDownIcon />
        </Button>
      </Grid>
      <Grid container spacing={2} direction="row"
        justifyContent="center"
        alignItems="center" >
        <Grid item>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={city}
            sx={{ width: 220, borderTopRightRadius: "100%" }}
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
        <Grid item>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={city}
            sx={{ width: 220, borderTopRightRadius: "100%" }}
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
        <Grid container xs={7} spacing={1} sx={{ marginTop: 1 }}>
          <Grid item>
            <LocalizationProvider dateAdapter={AdapterJalali}>
              <DatePicker
                mask="____/__/__"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item>
            <LocalizationProvider dateAdapter={AdapterJalali}>
              <DatePicker
                mask="____/__/__"
                value={value2}
                onChange={(newValue2) => setValue2(newValue2)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item>
            <Button variant="main" href="http://localhost:3000/flights">جستجو</Button>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}

