import React, { useEffect } from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="hero-container">
      {/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
      <h3
        data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        Grupa Za Spekof
      </h3>
      <p
        data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-once="true"
        className="centered"
      >
     Najveća organizacija u Studentskom parlamentu Ekonomskog fakulteta
      </p>
      <div className="hero-btns">
        <Link to="/onama">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Saznaj više
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
