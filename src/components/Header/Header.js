import React from "react";
import Navbar from "../../components/Navigation/Navbar";
import Home from "../../Pages/Home/Home";
import Section from "../../Pages/Section/Section";
import Contact from "../../Pages/Contact/Contact";
import Gallery from "../../Pages/Gallery/Gallery";
import { Route, HashRouter, Routes } from "react-router-dom";

const Header = () => {
  return (
    <HashRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="section" element={<Section />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <footer>
        <Contact />
      </footer>
    </HashRouter>
  );
};

export default Header;
