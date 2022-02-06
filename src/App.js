import "./App.css";
import React from "react";
import Navbar from "./components/Navigation/Navbar";
import Home from "./Pages/Home/Home";
import Section from "./Pages/Section/Section";
import Contact from "./Pages/Contact/Contact";
import Gallery from "./Pages/Gallery/Gallery";
import Header from "./components/Header/Header";
import { Route, Navigate, HashRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Section />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
