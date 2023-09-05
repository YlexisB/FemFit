import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client"; // Import createRoot
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import BlogSite from "./Pages/BlogSite";
import Classes from "./Pages/Classes";
import ContactUs from "./Pages/ContactUs";
import ScheduleNow from "./Pages/ScheduleNow";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/blog/:cardId" element={<BlogSite />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/ScheduleNow" element={<ScheduleNow />} />
      </Routes>
    </HashRouter>
  );
};

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ModalProvider>  */}
    <App />
    {/* </ModalProvider> */}
  </React.StrictMode>
);

// The rest of your code remains the same
reportWebVitals();
