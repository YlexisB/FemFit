import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Join from "./Components/Join";
import BlogSite from "./Pages/BlogSite";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/blog/:cardId" element={<BlogSite />} />
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
