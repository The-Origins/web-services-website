import React from "react";
import { Box, Button, Card, Typography, CardContent } from "@mui/material";
import {
  Facebook,
  Google,
  Instagram,
  TrendingUpRounded,
} from "@mui/icons-material";
import productImage from "../../assets/images/32-camera.jpg";

const Benefits = (props) => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box width={props.isNotPhone ? "70%" : "90%"}>
        <Box margin={"20px 0px"}>
          <Box>
            <Box
              width={"100%"}
              alignItems={"center"}
              justifyContent={"space-between"}
              display={"flex"}
              height={"30vh"}
              margin={props.isNotPhone ? "20px 0px" : ""}
            >
              <Typography
                variant={props.isNotPhone ? "h2" : "h4"}
                fontWeight={"bold"}
                marginLeft={props.isNotPhone ? 0:"20px"}
              >
                Best Traffic method <br /> for your store
              </Typography>
              {props.isNotPhone && (
                <Box
                  display={"flex"}
                  width={"15%"}
                  justifyContent={"space-between"}
                >
                  <Button variant="left-skewed" disableRipple>
                    {"<"}
                  </Button>
                  <Button variant="right-skewed" disableRipple>
                    {">"}
                  </Button>
                </Box>
              )}
            </Box>
            <Box
              display={"flex"}
              flexDirection={props.isNotPhone ? "row": 'column'}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
              margin={"70px 0px"}
            >
              <Card sx={{ boxShadow: "0px 0px 0px 0px", width:props.isNotPhone ? undefined :"90%" }}>
                <CardContent>
                  <Facebook
                    sx={{
                      fontSize: "5rem",
                      color: "#FFC83A",
                      borderRadius: "10px",
                    }}
                  />
                  <Typography
                    m={"30px 0px"}
                    fontSize={"30px"}
                    fontWeight={"bold"}
                  >
                    Launch a Facebook store
                  </Typography>
                  <Typography m={"10px 0px"} color={"#898989"}>
                    Content content content content <br /> content content
                    content <br /> content content content content content{" "}
                    <br /> content content content content
                  </Typography>
                  <Box
                    margin={"50px 0px"}
                    display={"flex"}
                    width={"100%"}
                    alignItems={"center"}
                  >
                    <Box marginRight={"20px"}>
                      <Typography fontSize={"30px"} fontWeight={"bold"}>
                        20,000
                      </Typography>
                      <Typography color={"#898989"}>Traffic/month</Typography>
                    </Box>
                    <Box display={"flex"}>
                      <TrendingUpRounded
                        sx={{ fontSize: "3rem", color: "#FFC83A" }}
                      />
                      <Typography fontSize={"30px"} color={"#FFC83A"}>
                        64%
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
              <Card sx={{ boxShadow: "0px 0px 0px 0px", width:props.isNotPhone ? undefined :"90%" }}>
                <CardContent>
                  <Google
                    sx={{
                      fontSize: "5rem",
                      color: "#7AB259",
                      borderRadius: "10px",
                    }}
                  />
                  <Typography
                    m={"30px 0px"}
                    fontSize={"30px"}
                    fontWeight={"bold"}
                  >
                    Start Google ads
                  </Typography>
                  <Typography m={"10px 0px"} color={"#898989"}>
                    Content content content content <br /> content content
                    content <br /> content content content content content{" "}
                    <br /> content content content content
                  </Typography>
                  <Box
                    margin={"50px 0px"}
                    display={"flex"}
                    width={"100%"}
                    alignItems={"center"}
                  >
                    <Box marginRight={"20px"}>
                      <Typography fontSize={"30px"} fontWeight={"bold"}>
                        2M
                      </Typography>
                      <Typography color={"#898989"}>Traffic/month</Typography>
                    </Box>
                    <Box display={"flex"}>
                      <TrendingUpRounded
                        sx={{ fontSize: "3rem", color: "#7AB259" }}
                      />
                      <Typography fontSize={"30px"} color={"#7AB259"}>
                        94%
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
              <Card sx={{ boxShadow: "0px 0px 0px 0px", width:props.isNotPhone ? undefined :"90%" }}>
                <CardContent>
                  <Instagram
                    sx={{
                      fontSize: "5rem",
                      color: "#F9465B",
                      borderRadius: "10px",
                    }}
                  />
                  <Typography
                    m={"30px 0px"}
                    fontSize={"30px"}
                    fontWeight={"bold"}
                  >
                    Intergrate Instagram
                  </Typography>
                  <Typography m={"10px 0px"} color={"#898989"}>
                    Content content content content <br /> content content
                    content <br /> content content content content content{" "}
                    <br /> content content content content
                  </Typography>
                  <Box
                    margin={"50px 0px"}
                    display={"flex"}
                    width={"100%"}
                    alignItems={"center"}
                  >
                    <Box marginRight={"20px"}>
                      <Typography fontSize={"30px"} fontWeight={"bold"}>
                        100K
                      </Typography>
                      <Typography color={"#898989"}>Traffic/month</Typography>
                    </Box>
                    <Box display={"flex"}>
                      <TrendingUpRounded
                        sx={{ fontSize: "3rem", color: "#F9465B" }}
                      />
                      <Typography fontSize={"30px"} color={"#F9465B"}>
                        84%
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            margin={"50px 0px"}
          >
            {
                props.isNotPhone && <img
                src={productImage}
                alt=""
                style={{ width: "400px", borderRadius: "20px" }}
              />
            }
            <Box
              width={props.isNotPhone ? "55%": "100%"}
              minHeight={"50vh"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              justifyContent={"space-between"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-around"}
                flexDirection={"column"}
                height={props.isNotPhone ? "70%" : "100%"}
              >
                <Typography variant={ props.isNotPhone ? "h3" : "h4"} fontWeight={"bold"}>
                  Upsell your products
                </Typography>
                <Box width={props.isNotPhone ? "70%" : "90%"}>
                  <Typography color={"#898989"}>
                    content content content content content content content
                    content content content content content content content
                    content content content content content content content
                    content content content content content content content
                    content content content content content content content
                    content
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="left-skewed"
                disableRipple
                sx={{
                  margin:props.isNotPhone ? "" : '40px 0px',
                  boxShadow: "0px 10px 10px -5px #797979",
                }}
              >
                Learn more
              </Button>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            margin={"200px 0px"}
          >
            <Box
              width={props.isNotPhone ? "55%": "100%"}
              minHeight={"50vh"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              justifyContent={"space-between"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-around"}
                flexDirection={"column"}
                height={"100%"}
              >
                <Typography variant={ props.isNotPhone ? "h3" : "h4"} fontWeight={"bold"}>
                  Write fantastic content <br /> with store's blog
                </Typography>
                <Box width={props.isNotPhone ? "70%":"100%"}>
                  <Box
                    display={"flex"}
                    width={"100%"}
                    justifyContent={"space-between"}
                    margin={"20px 0px"}
                  >
                    <Box
                      position={"relative"}
                      width={"40px"}
                      height={"30px"}
                      bgcolor={"#272727"}
                      borderRadius={"10px"}
                    >
                      <Box
                        borderRadius={"10px 10px 0px 0px"}
                        position={"absolute"}
                        left={0}
                        top={0}
                        width={"99%"}
                        height={"20px"}
                        bgcolor={"inherit"}
                        sx={{
                          transform: "skewY(-10deg)",
                          transformOrigin: " top left",
                        }}
                      ></Box>
                    </Box>
                    <Typography color={"#898989"}>
                      text text text text text text text text text{" "}
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    width={"100%"}
                    justifyContent={"space-between"}
                    margin={"20px 0px"}
                  >
                    <Box
                      position={"relative"}
                      width={"40px"}
                      height={"30px"}
                      bgcolor={"#272727"}
                      borderRadius={"10px"}
                    >
                      <Box
                        borderRadius={"10px 10px 0px 0px"}
                        position={"absolute"}
                        left={0}
                        top={0}
                        width={"99%"}
                        height={"20px"}
                        bgcolor={"inherit"}
                        sx={{
                          transform: "skewY(-10deg)",
                          transformOrigin: " top left",
                        }}
                      ></Box>
                    </Box>
                    <Typography color={"#898989"}>
                      text text text text text text text text text{" "}
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    width={"100%"}
                    justifyContent={"space-between"}
                    margin={"20px 0px"}
                  >
                    <Box
                      position={"relative"}
                      width={"40px"}
                      height={"30px"}
                      bgcolor={"#272727"}
                      borderRadius={"10px"}
                    >
                      <Box
                        borderRadius={"10px 10px 0px 0px"}
                        position={"absolute"}
                        left={0}
                        top={0}
                        width={"99%"}
                        height={"20px"}
                        bgcolor={"inherit"}
                        sx={{
                          transform: "skewY(-10deg)",
                          transformOrigin: " top left",
                        }}
                      ></Box>
                    </Box>
                    <Typography color={"#898989"}>
                      text text text text text text text text text{" "}
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    width={"100%"}
                    justifyContent={"space-between"}
                    margin={"20px 0px"}
                  >
                    <Box
                      position={"relative"}
                      width={"40px"}
                      height={"30px"}
                      bgcolor={"#272727"}
                      borderRadius={"10px"}
                    >
                      <Box
                        borderRadius={"10px 10px 0px 0px"}
                        position={"absolute"}
                        left={0}
                        top={0}
                        width={"99%"}
                        height={"20px"}
                        bgcolor={"inherit"}
                        sx={{
                          transform: "skewY(-10deg)",
                          transformOrigin: " top left",
                        }}
                      ></Box>
                    </Box>
                    <Typography color={"#898989"}>
                      text text text text text text text text text{" "}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            {props.isNotPhone && <img
              src={productImage}
              alt=""
              style={{ width: "400px", borderRadius: "20px" }}
            />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Benefits;
