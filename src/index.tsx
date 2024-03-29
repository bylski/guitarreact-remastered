import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.scss";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./store/AppProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppProvider>
      <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
