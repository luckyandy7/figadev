import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AboutUs from "./components/AboutUs.jsx";
import FixedNavigation from "./components/FixedNavigation.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename={process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : ''}>
      <FixedNavigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
