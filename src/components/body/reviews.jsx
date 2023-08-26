import React from "react";
import { Box, Typography, Rating, Button, Avatar } from "@mui/material";

const Reviews = (props) => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box width={props.isNotPhone ? "70%" : "90%"}>
        <Box textAlign={"center"}>
          <Typography variant="h2" fontWeight={"bold"}>
            What our clients say
          </Typography>
          <Box margin={"80px 0px"}>
            <Box
              position={"relative"}
              width={"100%"}
              height={props.isNotPhone ? "80vh" : "50vh"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={"50%"}
                height={"100%"}
                width={"100%"}
                border={"dashed 2px #F9465B"}
              >
                <Box
                  width={"80%"}
                  height={"80%"}
                  border={"dashed 2px #FFC83A"}
                  borderRadius={"50%"}
                ></Box>
              </Box>
              <Box
                position={"absolute"}
                top={0}
                left={0}
                width={"100%"}
                height={"100%"}
                display={"flex"}
              >
                <Box display={"flex"} width={"400px"}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    width={"50%"}
                    alignItems={"flexstart"}
                    justifyContent={"center"}
                  >
                    <Avatar sx={{ bgcolor: "#F9465B", color: "#FFFF" }}>
                      P1
                    </Avatar>
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    width={"50%"}
                    alignItems={"flex-start"}
                    justifyContent={"space-around"}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#F9465B",
                        color: "#FFFF",
                        boxShadow: "0px 0px 10px 1px",
                      }}
                    >
                      P2
                    </Avatar>
                    <Avatar sx={{ bgcolor: "#FFC83A", color: "#FFFF" }}>
                      P3
                    </Avatar>
                  </Box>
                </Box>
                <Box
                  height={"100%"}
                  width={"400px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"space-evenly"}
                  alignItems={"center"}
                  bgcolor={"#FFFF"}
                  boxShadow={"0px 0px 30px 40px #FFFF"}
                >
                  <Typography
                    fontWeight={"bold"}
                    fontSize={"50px"}
                    color={"#FFC83A"}
                  >
                    " "
                  </Typography>
                  <Rating value={4} readOnly sx={{ fontSize: "30px" }} />
                  <Typography textAlign={"center"} color={"#898989"}>
                    "Content content content content content content content
                    content content content content content "
                  </Typography>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <Avatar sx={{ bgcolor: "#F9465B", color: "#FFFF" }}>
                      SM
                    </Avatar>
                    <Typography fontWeight={"Bold"}>Someone Example</Typography>
                    <Typography color={"#898989"}>CEO, Founder</Typography>
                  </Box>
                  {props.isNotPhone && (
                    <Box>
                      <Button
                        variant="left-skewed"
                        disableRipple
                        sx={{
                          bgcolor: "#FFEEC3",
                          color: "black",
                          transform: "scale(0.8)",
                          ":hover": {
                            transform: "scale(0.8)",
                            bgcolor: "#FFF9D6",
                          },
                          ":active": { bgcolor: "#FFEEC3" },
                        }}
                      >
                        {"<"}
                      </Button>
                      <Button
                        variant="right-skewed"
                        disableRipple
                        sx={{
                          bgcolor: "#7AB259",
                          transform: "scale(0.8)",
                          ":hover": {
                            transform: "scale(0.8)",
                            bgcolor: "#98DE6F",
                          },
                          ":active": { bgcolor: "#7AB259" },
                        }}
                      >
                        {">"}
                      </Button>
                    </Box>
                  )}
                </Box>
                <Box display={"flex"} width={"400px"}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    width={"50%"}
                    alignItems={"flex-end"}
                    justifyContent={"space-around"}
                  >
                    <Avatar sx={{ bgcolor: "#F9465B", color: "#FFFF" }}>
                      P2
                    </Avatar>
                    <Avatar sx={{ bgcolor: "#FFC83A", color: "#FFFF" }}>
                      P3
                    </Avatar>
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    width={"50%"}
                    alignItems={"flex-end"}
                    justifyContent={"center"}
                  >
                    <Avatar sx={{ bgcolor: "#F9465B", color: "#FFFF" }}>
                      P1
                    </Avatar>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
