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
  });

  const lightThemePalette = {
    primary: {
      main: "#20CEF9", // Accent Color - bright color which adds character (React color)
      onHoverDark: "#05bfed", // Color that is used for exmaple on buttons to improve accessability
      contrastText: "#FFFFFF" // Color contrasting to the background
    },
    secondary: {
      main: "#FFFFFF",// Main background color (React color)
      contrastText: "#000000", // Color contrasting to the background
    },
    complementary: {
      background: "#c9c9c9", 
    }
  };

  const darkThemePalette = {
    primary: {
      main: "#20CEF9", // Accent Color - bright color which adds character (React color)
      onHoverDark: "#006680", // Color that is used for exmaple on buttons to improve accessability
      onHoverLight: "#05bfed",
      contrastText: "#FFFFFF" // Contrast text for accent color
    },
    secondary: {
      main: "#272727",// Accent Color - bright color which adds character (React color)
      contrastText: "#FFFFFF", // Color that is used for exmaple on buttons to improve accessability
    },
    complementary: {
      background: "#000000", 
    }
  };

  const typography = {
    h1: {
      fontFamily: "Montserrat, sans-serif",
      [theme.breakpoints.down("md")]: { fontSize: "22px" },
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
  };

  const components = {
    MuiToolbar: {
      styleOverrides: {
        regular: {
          [theme.breakpoints.down("md")]: {
            height: "60px",
            minHeight: "60px",
            paddingRight: 0,
          },
          [theme.breakpoints.up("md")]: { height: "70px", minHeight: "70px" },
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
