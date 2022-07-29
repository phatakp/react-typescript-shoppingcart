import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ShoppingCardProvider } from "./context/ShoppingCartContext";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ShoppingCardProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShoppingCardProvider>
  </React.StrictMode>
);
