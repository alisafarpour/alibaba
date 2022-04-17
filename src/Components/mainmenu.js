import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import FlightLandOutlinedIcon from "@mui/icons-material/FlightLandOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import DirectionsSubwayFilledOutlinedIcon from "@mui/icons-material/DirectionsSubwayFilledOutlined";
import DirectionsBusFilledOutlinedIcon from "@mui/icons-material/DirectionsBusFilledOutlined";
import TourOutlinedIcon from "@mui/icons-material/TourOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";

import Enterflight from "./enterflight";

export default function LabTabs() {
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
      sx={{ marginTop: 4 }}
    >
      <Box
        sx={{
          width: "72%",
          zIndex: "tooltip",
          backgroundColor: "white",
          position: "absolute",
          borderRadius: 2,
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              direction: "rtl",
              justifyContent: "center",
            }}
          >
            <TabList centered onChange={handleChange} sx={{ marginTop: 2.5 }}>
              <Tab
                sx={{ fontSize: 16, marginRight: 3, marginLeft: 3 }}
                label="پرواز داخلی"
                icon={<FlightLandOutlinedIcon sx={{ fontSize: 30 }} />}
                value="1"
              />
              <Tab
                sx={{ fontSize: 16, marginRight: 3, marginLeft: 3 }}
                label="پرواز خارجی"
                icon={<FlightTakeoffOutlinedIcon sx={{ fontSize: 30 }} />}
                value="2"
              />
              <Tab
                sx={{ fontSize: 16, marginRight: 3, marginLeft: 3 }}
                label="قطار"
                icon={
                  <DirectionsSubwayFilledOutlinedIcon sx={{ fontSize: 30 }} />
                }
                value="3"
              />
              <Tab
                sx={{ fontSize: 16, marginRight: 3, marginLeft: 3 }}
                label="اتوبوس"
                icon={<DirectionsBusFilledOutlinedIcon sx={{ fontSize: 30 }} />}
                value="4"
              />
              <Tab
                sx={{ fontSize: 16, marginRight: 3, marginLeft: 3 }}
                label="تور"
                icon={<TourOutlinedIcon sx={{ fontSize: 30 }} />}
                value="5"
              />
              <Tab
                sx={{ fontSize: 16, marginRight: 3, marginLeft: 3 }}
                label="هتل"
                icon={<KingBedOutlinedIcon sx={{ fontSize: 30 }} />}
                value="6"
              />
              <Tab
                sx={{ fontSize: 16, marginRight: 3, marginLeft: 3 }}
                label="ویلا و اقامتگاه"
                icon={<MeetingRoomOutlinedIcon sx={{ fontSize: 30 }} />}
                value="7"
              />
            </TabList>
          </Box>
          <Box sx={{ direction: "rtl", justifyContent: "center" }}>
            <TabPanel value="1">
              {" "}
              <Enterflight />{" "}
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item four</TabPanel>
            <TabPanel value="5">Item five</TabPanel>
            <TabPanel value="6">Item six</TabPanel>
            <TabPanel value="7">Item seven</TabPanel>
          </Box>
        </TabContext>
      </Box>
    </Grid>
  );
}
