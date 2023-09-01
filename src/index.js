import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import BlogSite from "./Pages/BlogSite";
import Classes from "./Pages/Classes";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/blog/:cardId" element={<BlogSite />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/ContactUs" element={<ContactUs />} />
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
