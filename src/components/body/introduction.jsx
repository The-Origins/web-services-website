import React from "react";
import {
  Typography,
  Box,
  Button,
  Rating,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  TrendingUpRounded,
  ChevronRightRounded,
  Google,
  Twitter,
  Instagram,
} from "@mui/icons-material";
import { SkewedBox } from "../skewedBox";

const Introduction = (props) => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"#FFF9EB"}
    >
      <Box width={props.isNotPhone ? "70%" : "90%"}>
        <Box marginTop={"100px"}>
          <Typography
            variant={props.isNotPhone ? "h1" : "h4"}
            fontWeight={"bold"}
            margin={"20px 0px"}
          >
            Lets grow your <br />
            brand to the <br />
            next level
          </Typography>
          <Typography margin={"20px 0px"}>
            Ecomting is the best content content <br />
            content content content content
            <br />
            content content
          </Typography>
          <Button
            variant="left-skewed"
            disableRipple
            sx={{
              margin: "40px 0px",
              transform: "scale(1.2)",
              boxShadow: "0px 10px 10px -5px #797979",
            }}
          >
            get started
          </Button>
        </Box>
        <Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Box
              display={"flex"}
              width={props.isNotPhone ? "60%" : "100%"}
              justifyContent={props.isNotPhone ? "space-between" : "flex-end"}
              alignItems={"center"}
            >
              <SkewedBox
                textAlign={"center"}
                width={props.isNotPhone ? "35%" : "60%"}
                height={"250px"}
                bgcolor={"#7AB259"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"#FFFF"}
              >
                <TrendingUpRounded sx={{ fontSize: "5rem" }} />
                <Typography variant="h3">2.6M</Typography>
                <Typography>increase in traffic</Typography>
              </SkewedBox>
              {props.isNotPhone && (
                <Box
                  height={"90px"}
                  width={"300px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-around"}
                  bgcolor={"#272727"}
                  borderRadius={"30px"}
                  sx={{
                    transition: "0.3s",
                    ":hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Avatar sx={{ bgcolor: "#F5170C", color: "#FFFF" }}>
                    SM
                  </Avatar>
                  <Box>
                    <Rating value={4} readOnly color="#FFB800" />
                    <Typography color={"#FFFF"}>Someone example</Typography>
                  </Box>
                  <IconButton
                    sx={{
                      backgroundColor: "#7EEB3E",
                      transition: "0.3s",
                      ":hover": {
                        backgroundColor: "#94FF55",
                        transform: "scale(0.9)",
                      },
                    }}
                  >
                    <ChevronRightRounded />
                  </IconButton>
                </Box>
              )}
            </Box>
          </Box>
          <Box
            height={"100px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={props.isNotPhone ? "flex-end" : "center"}
          >
            <Box width={props.isNotPhone ? "60%": '100%'} display={"flex"} justifyContent={"center"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                width={props.isNotPhone ? "50%" : '100%'}
                justifyContent={"space-around"}
              >
                <Typography fontSize={"20px"} fontWeight={"bold"}>
                  Follow us
                </Typography>
                <IconButton sx={{ bgcolor: "#FFE4D9" }}>
                  <Google />
                </IconButton>
                <IconButton sx={{ bgcolor: "#FFF4CE" }}>
                  <Twitter />
                </IconButton>
                <IconButton sx={{ bgcolor: "#E2F7E6" }}>
                  <Instagram />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Introduction;
