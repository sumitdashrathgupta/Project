import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Product from "./Pages/Product";
import Navbar from "./Pages/Navbar"


const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
