import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AnimatedCursor from "./Pages/Cursor/AnimatedCursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <AnimatedCursor />
  </React.StrictMode>
);
