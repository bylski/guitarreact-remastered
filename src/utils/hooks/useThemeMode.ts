import { createTheme } from "@mui/material/styles";
import { useState, useMemo, useEffect } from "react";
import { PaletteMode } from "@mui/material";
import React from "react";
import { Theme } from "@mui/material";
import { SERVFAIL } from "dns";
import { throwStatement } from "@babel/types";

const useThemeMode = (chosenMode: "light" | "dark"): Theme => {
  const [mode, setMode] = useState<"light" | "dark">(chosenMode);

  useEffect(() => {
    setMode(chosenMode);
  }, [chosenMode]);


  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 400,
        sm: 500,
        md: 700,
        lg: 1100,
        xl: 1536,
      },
    },
  })

  const lightThemePalette = {
    primary: {
      main: "#20CEF9",
      contrastText: "white",
    },
    secondary: {
      main: "#212529",
    },
  };

  const darkThemePalette = {
    neutral: {
      main: "blue",
    },
    primary: {
      main: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#212529",
    },
  };

  const typography = {
    h1: {
      fontFamily: "Montserrat, sans-serif",
      [theme.breakpoints.down("md")]: {fontSize: "22px"},
    },
  };

  const transitions = {
    duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        // most basic recommended timing
        standard: 300,
        // this is to be used in complex animations
        complex: 375,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
  }

  const components = {
    MuiToolbar: {
      styleOverrides: {
        regular: {
          [theme.breakpoints.down("md")]: {height: "60px", minHeight: "60px", paddingRight: 0},
          [theme.breakpoints.up("md")]: {height: "70px", minHeight: "70px"}
        },
      },
    },
  };

  const getTheme = (mode: PaletteMode) => ({
    breakpoints: theme.breakpoints,
    transitions,
    components,
    typography,
    palette: {
      mode,
      ...(mode === "light"
        ? // LIGHT MODE
          lightThemePalette
        : // DARK MODE
          darkThemePalette),
    },
  });

  return React.useMemo(() => createTheme(getTheme(mode)), [mode]);
};

export default useThemeMode;
