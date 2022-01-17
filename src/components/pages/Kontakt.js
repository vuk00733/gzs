import "./pages_css/Kontakt.css";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Kontakt() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <h1 className="margin-bigger">Kontaktirajte Nas</h1>
      <div className="cont">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <i className="fab fa-typo3 margin" />
          <h2>TELEFON</h2>
          <h2>062/5342048</h2>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <i className="fab fa-typo3 margin" />
          <h2>E-MAIL</h2>
          <h2>gzs@gmail.com</h2>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <i className="fab fa-typo3 margin" />
          <a href="https://www.google.com/maps/place/%D0%95%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D1%81%D0%BA%D0%B8+%D1%84%D0%B0%D0%BA%D1%83%D0%BB%D1%82%D0%B5%D1%82,+%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D0%B7%D0%B8%D1%82%D0%B5%D1%82+%D1%83+%D0%91%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%83/@44.8118579,20.4549321,15z/data=!4m5!3m4!1s0x0:0x1375263cb5c18522!8m2!3d44.8118579!4d20.4549321?hl=sr">
            <h2>LOKACIJA</h2>
            <h2>Kamenička 6</h2>
          </a>
        </div>
      </div>

      <h1>Zapratite nas na društvenim mrežama</h1>
      <div className="cnt">
        <div
          data-aos="flip-right"
          data-aos-easing="linear"
          data-aos-duration="3500"
          data-aos-once="true"
        >
          <a href="https://www.facebook.com/grupa.za.SPEKOF">
            <i className="fab fa-facebook large-icon" />
          </a>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="linear"
          data-aos-duration="3500"
          data-aos-once="true"
        >
          <a href="https://www.instagram.com/grupazaspekof/">
            <i className="fab fa-instagram large-icon" />
          </a>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="3500"
          data-aos-once="true"
        >
          <a href="https://www.youtube.com/c/GrupazaSPEKOF">
            <i className="fab fa-youtube large-icon" />
          </a>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="3500"
          data-aos-once="true"
        >
          <a href="https://rs.linkedin.com/company/grupa-za-spekof">
            <i className="fab fa-linkedin large-icon" />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
