import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
// import '@fontsource/poppins';
// import '@fontsource-variable/montserrat'
import "@fontsource-variable/jetbrains-mono";
import { Inicio } from "./pages/Inicio.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="experience" element={<h1>Experience</h1>} />
          <Route path="projects" element={<h1>Projects</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
