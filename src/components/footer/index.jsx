import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
  EmailOutlined,
  PublicOutlined,
  PlaceOutlined,
} from "@mui/icons-material";

const Footer = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  return (
    <Box
      height={isNotPhone ? "500px" : "800px"}
      width={"100%"}
      marginTop={"100px"}
      display={"flex"}
      justifyContent={"center"}
      bgcolor={"#FFF9EB"}
    >
      <Box
        width={isNotPhone ? "70%" : "90%"}
        display={"flex"}
        flexDirection={isNotPhone ? "row" : "column"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          height={"60%"}
          width={isNotPhone ? undefined : "80%"}
          justifyContent={"space-around"}
        >
          <Typography fontWeight={"bold"} fontSize={"25px"}>
            Ecomting
          </Typography>
          <Typography color={"#898989"}>
            Content content content content content <br /> content content{" "}
            <br />
            content content content
          </Typography>
          <Box
            display={"flex"}
            width={"150px"}
            justifyContent={"space-between"}
          >
            <Facebook />
            <Instagram />
            <LinkedIn />
            <Twitter />
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          height={"60%"}
          width={isNotPhone ? undefined : "80%"}
          justifyContent={"space-evenly"}
        >
          <Typography fontWeight={"bold"}>Feature</Typography>
          <Typography fontWeight={"light"}>Course</Typography>
          <Typography fontWeight={"light"}>Mentors</Typography>
          <Typography fontWeight={"light"}>Ads</Typography>
          <Typography fontWeight={"light"}>About</Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          height={"60%"}
          width={isNotPhone ? undefined : "80%"}
          justifyContent={"space-evenly"}
        >
          <Typography fontWeight={"bold"}>Solution</Typography>
          <Typography fontWeight={"light"}>FAQs</Typography>
          <Typography fontWeight={"light"}>Privacy policy</Typography>
          <Typography fontWeight={"light"}>Terms & conditions</Typography>
          <Typography fontWeight={"light"}>Blog</Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          height={"60%"}
          width={isNotPhone ? undefined : "80%"}
          justifyContent={"space-evenly"}
        >
          <Typography fontWeight={"bold"}>Contact</Typography>
          <Box display={"flex"}>
            <WhatsApp />
            <Typography marginLeft={"10px"} fontWeight={"light"}>
              +23 000 0070 00
            </Typography>
          </Box>
          <Box display={"flex"}>
            <EmailOutlined />
            <Typography marginLeft={"10px"} fontWeight={"light"}>
              someone@company.com
            </Typography>
          </Box>
          <Box display={"flex"}>
            <PublicOutlined />
            <Typography marginLeft={"10px"} fontWeight={"light"}>
              www.website.com
            </Typography>
          </Box>
          <Box display={"flex"}>
            <PlaceOutlined />
            <Typography marginLeft={"10px"} fontWeight={"light"}>
              City, Country
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
