import React, { useEffect } from "react";
import "./Divider.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Divider({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  buttonLink,
}) {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-once="true"
                className="home__hero-text-wrapper"
              >
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link className="centered" to={buttonLink}>
                  <Button buttonSize="btn--wide" buttonColor="#red">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img
                  src={img}
                  alt={alt}
                  className="home__hero-img"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  data-aos-once="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Divider;
