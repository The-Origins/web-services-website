import React from "react";
import {
  Typography,
  Box,
  IconButton,
  Button,
  useMediaQuery,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";
import { Search, Close, MenuRounded } from "@mui/icons-material";

const Header = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      bgcolor={"#FFF9EB"}
      width={"100%"}
    >
      <Box
        width={isNotPhone ? "70%" : "90%"}
        marginTop={"50px"}
        height={"50px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant={isNotPhone ? "h2" : "h4"}>ECOMTING</Typography>
        {isNotPhone ? (
          <Box
            display={"flex"}
            width={"30%"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Typography>Course</Typography>
            <Typography>Mentors</Typography>
            <Typography>Ads</Typography>
            <Typography>Help</Typography>
          </Box>
        ) : (
          <Box></Box>
        )}
        <Box
          display={"flex"}
          width={"20%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton>
            <Search />
          </IconButton>
          {isNotPhone && <Button variant="bubbled">Sign up</Button>}
          {!isNotPhone && (
          <Box>
            <IconButton
            id="fade-button"
            aria-haspopup="false"
            aria-expanded={undefined}
            onClick={handleClick}
            >
                {open ? <Close /> : <MenuRounded />}
            </IconButton>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}><Button variant="contained" sx={{bgcolor:"#272727", color:"#FFFF"}}>Sign up</Button></MenuItem>
              <MenuItem onClick={handleClose}>Course</MenuItem>
              <MenuItem onClick={handleClose}>Mentors</MenuItem>
              <MenuItem onClick={handleClose}>Ads</MenuItem>
              <MenuItem onClick={handleClose}>Help</MenuItem>
            </Menu>
          </Box>
        )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
