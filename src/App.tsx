import React from "react";
import Navbar from "./components/Layout/Navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import useThemeMode from "./utils/hooks/useThemeMode";

function App() {

  let theme = useThemeMode("light"); // SET IT LIGHT-MODE FOR NOW

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
