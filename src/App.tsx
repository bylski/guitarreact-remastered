import React from "react";
import Navbar from "./components/Layout/Navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import useThemeMode from "./utils/hooks/useThemeMode";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { AppProvider } from "./store/AppProvider";
import ProductsDisplay from "./components/ProductsDisplay.tsx/ProductsDisplay";

function App() {
  let theme = useThemeMode("dark"); // SET IT LIGHT-MODE FOR NOW

  return (
    <div className="App">
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route path="guitars" element={<ProductsDisplay productType="guitars"/>}></Route>
              <Route path="amplifiers" element={<ProductsDisplay productType="amplifiers"/>}></Route>
              <Route path="accessories" element={<ProductsDisplay productType="accessories"/>}></Route>
              <Route path="" element={<ProductsDisplay productType="guitars"/>}></Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </AppProvider>
    </div>
  );
}

export default App;
