import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { NavigationProvider } from "./components/context/navigation";

const el = document.getElementById("root");

ReactDOM.createRoot(el).render(
  <Provider store={store}>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </Provider>
);
