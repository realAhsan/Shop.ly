import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ShoppingCartContextProvider from "./hooks/useContext/index.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShoppingCartContextProvider>
      <App />
    </ShoppingCartContextProvider>
  </BrowserRouter>
);
