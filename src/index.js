import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./components/context/navigation";

const el = document.getElementById("root");

ReactDOM.createRoot(el).render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
