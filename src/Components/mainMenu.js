import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Enterflight from "./enterFlight";
import { mainMenuData } from "../Data/mainMenuData";
import { test2 } from "../Data/test2";
import { TabList } from "@mui/lab";
import withWidth, { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../../theme/theme'

export default function LabTabs() {

  const matches = useMediaQuery(theme.breakpoints.down(615));

  let condTabOrientation;

  if (isWidthDown("sm"), matches) {
    condTabOrientation = "vertical";

  } else {
    condTabOrientation = "horizontal";

  }

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: { md: 5.3, xs: 0 }, width: 'auto' }}
      xs={12}
    >
      <Box
        component={Grid}
        item
        xl={8.65}
        lg={10.15}
        md={11.7}
        xs={11.7}
        sx={{
          zIndex: "tooltip",
          backgroundColor: "white",
          position: { md: "absolute", xs: "relative" },
          borderRadius: 2,
          width: '100%',
        }}
      >
        <TabContext value={value}>
          <Box
            component={Grid}
            xs={12}
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              direction: "rtl",
              justifyContent: "center",
            }}
          >
            <TabList centered onChange={handleChange} orientation={condTabOrientation} variant={"fullWidth"} sx={{ marginTop: 1.5, paddingRight: { lg: 12, xs: 0 }, paddingLeft: { lg: 12, xs: 0 } }}>
              {mainMenuData.map((item, index) => {
                return (
                  <Tab
                    key={index}
                    sx={{ fontSize: { lg: 16, xs: 14 } }}
                    label={item.label}
                    icon={item.icon}
                    value={item.value}
                  />
                )
              })}
            </TabList>
          </Box>
          <Box component={Grid} sx={{ direction: "rtl", justifyContent: "center" }}>
            <TabPanel value="1">
              <Enterflight />
            </TabPanel>
            {test2.map((item, index) => {
              return (
                <TabPanel
                  key={index}
                  value={item.value}
                >{item.label}</TabPanel>
              )
            })}
          </Box>
        </TabContext>
      </Box>
    </Grid>
  );
}
