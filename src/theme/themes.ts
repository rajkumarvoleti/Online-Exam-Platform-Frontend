"use client";
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2200A5"
    },
    secondary: {
      main: "#C783FF"
    },
    success: {
      main: "#C2E830",
    },
  },
});