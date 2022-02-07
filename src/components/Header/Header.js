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
      <Navbar />
      <Routes>
        <Route exact path="/" component={<Home />} />
        <Route path="section" component={<Section />} />
        <Route path="gallery" component={<Gallery />} />
        <Route path="contact" component={<Contact />} />
      </Routes>
    </HashRouter>
  );
};

export default Header;
