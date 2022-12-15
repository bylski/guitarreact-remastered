import { createTheme } from "@mui/material/styles";
import { useState, useMemo, useEffect } from "react";
import { PaletteMode } from "@mui/material";
import React from "react";
import { Theme } from "@mui/material";
import { SERVFAIL } from "dns";

const useThemeMode = (chosenMode: "light" | "dark"): Theme => {
  const [mode, setMode] = useState<"light" | "dark">(chosenMode);

  useEffect(() => {
    setMode(chosenMode);
  }, [chosenMode]);

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
          height: "70px",
          minHeight: "70px",
        },
      },
    },
  };

  const getTheme = (mode: PaletteMode) => ({
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
