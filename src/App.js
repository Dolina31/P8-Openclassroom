import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Errorpage from "./pages/Errorpage";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Homecontent from "./components/Homecontent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Errorpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Housing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
