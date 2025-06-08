import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import '@fontsource/poppins';
import '@fontsource-variable/montserrat'
import "@fontsource-variable/jetbrains-mono";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
