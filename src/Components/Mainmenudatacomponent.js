import React from 'react'
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";


function Mainmenudatacomponent(props) {

  return (
     
    <Tab
    sx={{ fontSize: 16, marginRight: 3, marginLeft: 3 }}
    label={props.label}
    icon={props.icon}
    value={props.value}
  />

  )
}

export default Mainmenudatacomponent