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
        xxs: 0,
        xs: 500,
        sm: 750,
        semiSm: 1000,
        md: 1200,
        lg: 1400,
        xl: 1700,
      }
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
      alert: "#E63946",
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
      grayedOutText: "#e6e6e6"
    },
    complementary: {
      background: "#000000", 
      alert: "#E63946",
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
          [theme.breakpoints.up("md")]: { height: "62px", minHeight: "62px" },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          margin: "0px",
          paddingBottom: "0px",
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
          marginBottom: "6px !important",
        },
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: "14px",
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          right: "-5px",
          top: "-7px",
          // left: "5px",
          fontSize: "11px",
        }
      }
    }
  };

  const breakpoints = {
    values: {
      xxs: 0,
      xs: 500,
      sm: 750,
      semiSm: 1000,
      md: 1200,
      lg: 1400,
      xl: 1700,
    }
  }

  const getTheme = (mode: PaletteMode) => ({
    breakpoints,
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
