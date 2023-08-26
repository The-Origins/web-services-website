import React from 'react'
import { Box, Typography } from '@mui/material'

const Partners = (props) => {
  return (
    <Box
    display={"flex"}
    flexDirection={"column"}
    justifyContent={"center"}
    alignItems={"center"}
    width={"100%"}
    height={"30vh"}
    margin={"80px 0px"}
    >
        <Typography variant={props.isNotPhone ? 'h2' : "h4"} fontWeight={"bold"}>Trusted Partners</Typography>
        <Box
        margin={"40px 0px"}
        display={"flex"}
        color={"#898989"}
        width={props.isNotPhone ? "70%" : "90%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        >
            <Typography variant={props.isNotPhone ? "h4":"h6"} fontWeight={"bold"}>Slack</Typography>
            <Typography variant={props.isNotPhone ? "h4":"h6"} fontWeight={"bold"}>Netflix</Typography>
            <Typography variant={props.isNotPhone ? "h4":"h6"} fontWeight={"bold"}>Fitbit</Typography>
            <Typography variant={props.isNotPhone ? "h4":"h6"} fontWeight={"bold"}>Google</Typography>
            <Typography variant={props.isNotPhone ? "h4":"h6"} fontWeight={"bold"}>Airbnb</Typography>
            <Typography variant={props.isNotPhone ? "h4":"h6"} fontWeight={"bold"}>Uber</Typography>
        </Box>
    </Box>
  )
}

export default Partners