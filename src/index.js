import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Homepage from "./pages/homepage";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  </React.StrictMode>
);
