import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#7D7D7D",
      main: "#FFF9EB",
      dark: "#272727",
    },
    secondary: {
      main: "#7AB259",
    },
    background: "#FFFF",
    warning: { main: "#F9465C" },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "left-skewed" },
          style: {
            disableRipple: true,
            borderRadius: "0px 0px 10px 10px",
            backgroundColor: "#272727",
            color: "#FFFF",
            transition: "0.3s",
            "::before": {
              content: '""',
              position: "absolute",
              top: "-14px",
              left: 0,
              borderTop: "solid transparent 20px",
              borderRight: "solid inherit 100%",
              width: "100%",
              transform: "skewY(-5deg)",
              backgroundColor: "inherit",
              borderRadius: "10px 10px 0px 0px",
            },
            ":hover": {
              backgroundColor: "#7D7D7D",
              transform: "scale(1.1)",
              boxShadow: "0px 0px 0px 0px",
            },
            ":active": {
              backgroundColor: "#272727",
            },
          },
        },
        {
          props: { variant: "right-skewed" },
          style: {
            disableRipple: true,
            borderRadius: "0px 0px 10px 10px",
            backgroundColor: "#272727",
            color: "#FFFF",
            transition: "0.3s",
            "::before": {
              content: '""',
              position: "absolute",
              top: "-14px",
              left: 0,
              borderTop: "solid transparent 20px",
              borderRight: "solid inherit 100%",
              width: "100%",
              transform: "skewY(5deg)",
              backgroundColor: "inherit",
              borderRadius: "10px 10px 0px 0px",
            },
            ":hover": {
              backgroundColor: "#7D7D7D",
              transform: "scale(1.1)",
              boxShadow: "0px 0px 0px 0px",
            },
            ":active": {
              backgroundColor: "#272727",
            },
          },
        },
        {
          props: { variant: "bubbled" },
          style: {
            borderRadius: "20px 0px 20px 20px",
            backgroundColor: "#272727",
            color: "#FFFF",
            transition: "0.3s",
            ":hover": {
              backgroundColor: "#7D7D7D",
              transform: "scale(1.1)",
            },
            ":active": {
              backgroundColor: "#272727",
            },
          },
        },
      ],
    },
  },
});
