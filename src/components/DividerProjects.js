import React, { useEffect } from "react";
import './Divider.css';
import AOS from "aos";
import "aos/dist/aos.css";

function DividerProjects({
  img1,
  img2,
  img3,
  text1_title,
  text1_subtitle,
  text2_title,
  text2_subtitle,
  text3_title,
  text3_subtitle,
  text1,
  text2,
  text3,
  lightBg1,
  lightBg2,
  lightBg3,
  lightText1,
  lightText2,
  lightText3,
  lightTextDesc1,
  lightTextDesc2,
  lightTextDesc3,
  imgStart1,
  imgStart2,
  imgStart3
}) {
    useEffect(() => {
        AOS.init({});
      }, []);
  return (
    <div>
      <div
        className={lightBg1 ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart1 === "start" ? "row-reverse" : "row",
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
                <div className="top-line">{text1_title}</div>
                <h1 className={lightText1 ? "heading" : "heading dark"}>
                  {text1_subtitle}
                </h1>
                <p
                  className={
                    lightTextDesc1
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {text1}
                </p>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img
                  src={`../${img1}`}
                  alt=""
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
      <div
        className={lightBg2 ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart2 === "start" ? "row-reverse" : "row",
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
                <div className="top-line">{text2_subtitle}</div>
                <h1 className={lightText2 ? "heading" : "heading dark"}>
                  {text2_title}
                </h1>
                <p
                  className={
                    lightTextDesc2
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {text2}
                </p>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img
                  src={`../${img3}`}
                  alt=""
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
      <div
        className={lightBg3 ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart3 === "start" ? "row-reverse" : "row",
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
                <div className="top-line">{text3_subtitle}</div>
                <h1 className={lightText3 ? "heading" : "heading dark"}>
                  {text3_title}
                </h1>
                <p
                  className={
                    lightTextDesc3
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {text3}
                </p>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img
                  src={`../${img1}`}
                  alt=""
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
    </div>
    
  );
}

export default DividerProjects;
