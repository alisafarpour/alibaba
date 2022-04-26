import React from 'react'
import Button from "@mui/material/Button";

function headerButtCom(props) {
    return (
        <Button
            sx={{
                bgcolor: "background.paper",
                color: "text.secondary",
                fontSize: 16,
            }}
        >
            {props.title}
            {props.icon}
        </Button>
    )
}

export default headerButtCom