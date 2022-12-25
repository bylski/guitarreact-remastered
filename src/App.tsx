import React from "react";
import Navbar from "./components/Layout/Navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import useThemeMode from "./utils/hooks/useThemeMode";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { AppProvider } from "./store/AppProvider";

function App() {
  let theme = useThemeMode("dark"); // SET IT LIGHT-MODE FOR NOW

  return (
    <div className="App">
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </ThemeProvider>
      </AppProvider>
    </div>
  );
}

export default App;
