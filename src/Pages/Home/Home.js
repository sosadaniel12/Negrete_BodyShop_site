import "./Home.css";
import { useState, useEffect } from "react";
import shopImage from "../../assets/shop_image.jpg";


const Home = () => {
  return (
    <>
      <div className="outerHome">
        <div className="innerTextBox">
          <h1 className="welcome">Welcome.</h1>
          <p className="intro">
            to Negrete Custom Paint and Body Shop with over 20 years of
            experience.
          </p>

          <a href="tel:9032430633">
            <button className="button">Call Now</button>
          </a>
        </div>
        <img src={shopImage} alt="bodyshop" className="image" />
      </div>
    </>
  );
};

export default Home;
