import "./App.css";
import React from "react";
import Navbar from "./components/Navigation/Navbar";
import Home from "./Pages/Home/Home";
import Section from "./Pages/Section/Section";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Section />
      <Contact />
    </div>
  );
}

export default App;
