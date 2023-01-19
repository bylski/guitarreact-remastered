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
        xl: 1636,
      },
    },
  });

  const lightThemePalette = {
    primary: {
      main: "#20CEF9", 
      onHoverDark: "#05bfed", 
      contrastText: "#FFFFFF" 
    },
    secondary: {
      main: "#FFFFFF",
      contrastText: "#000000",
    },
    complementary: {
      background: "#c9c9c9", 
    }
  };

  const darkThemePalette = {
    primary: {
      main: "#20CEF9", 
      onHoverDark: "#006680", 
      onHoverLight: "#05bfed",
      contrastText: "#FFFFFF" 
    },
    secondary: {
      main: "#272727",
      contrastText: "#FFFFFF", 
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
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          margin: "0px",
          paddingBottom: "0px",
        },
        expanded: {
          margin: "0px"
        },
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          marginBottom: "0px !important",
        },
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          marginBottom: "10px !important",
        },
      }
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
