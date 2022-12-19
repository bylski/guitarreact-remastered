import React from "react";
import Navbar from "./components/Layout/Navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import useThemeMode from "./utils/hooks/useThemeMode";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  let theme = useThemeMode("dark"); // SET IT LIGHT-MODE FOR NOW

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
