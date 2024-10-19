import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./components/Navigation/Navigation";
import "./index.css";
import ContextWrapper from "./ContextWrapper";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <ContextWrapper />
    </BrowserRouter>
  </React.StrictMode>
);
