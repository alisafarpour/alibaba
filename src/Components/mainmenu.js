import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Enterflight from "./enterFlight";
import { mainMenuData } from "../Data/mainMenuData";
import { test2 } from "../Data/test2";

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
            <TabList centered onChange={handleChange} sx={{ marginTop: 1.5 }}>
              {mainMenuData.map((item, index) => {
                return (
                  <Tab
                    key={index}
                    sx={{ fontSize: 16, marginRight: 3, marginLeft: 3 }}
                    label={item.label}
                    icon={item.icon}
                    value={item.value}
                  />
                )
              })}
            </TabList>
          </Box>
          <Box sx={{ direction: "rtl", justifyContent: "center" }}>
            <TabPanel value="1">
              <Enterflight />
            </TabPanel>
            {test2.map((item,index) => {
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
