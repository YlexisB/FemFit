import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Join from "./Components/Join";
import BlogSite from "./Pages/BlogSite";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <>
      <Home />
      <AboutUs />
      <Join />
      <BlogSite />
    </>
  );
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
