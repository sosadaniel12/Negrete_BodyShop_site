import "./Home.css";
import { useState, useEffect } from "react";
import shopImage from "../../assets/shop_image.jpg";

const Home = () => {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in",
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade-in") {
        setFadeProp({
          fade: "fade-out",
        });
      } else {
        setFadeProp({
          fade: "fade-in",
        });
      }
    }, 4000);
    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <>
      <div className="outerHome">
        <div className="innerTextBox">
          <h1 className="welcome">Welcome.</h1>
          <p className="intro">
            to Negrete Custom Paint and Body Shop with over 20 years of
            experience.
          </p>
        </div>
        <img src={shopImage} alt="bodyshop" className="image" />
      </div>
    </>
  );
};

export default Home;
