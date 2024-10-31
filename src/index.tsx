/**
 * Entry point of the React application.
 *
 * This file sets up the root of the React application and renders the main component
 * wrapped with necessary providers such as `BrowserRouter` and `ContextWrapper`.
 *
 * @file index.tsx
 * @module index
 *
 * @requires React
 * @requires ReactDOM
 * @requires ./index.css
 * @requires ./ContextWrapper
 * @requires react-router-dom/BrowserRouter
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContextWrapper from "./ContextWrapper";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextWrapper />
    </BrowserRouter>
  </React.StrictMode>
);
