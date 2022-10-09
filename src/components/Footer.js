import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <h2 className="footer-subscription-heading">
        Najveća studentska organizacija na Ekonomskom fakultetu, čiji članovi čine svih 100% Studentskog parlamenta
        </h2>
        <h2 className="footer-subscription-text">
        Grupa za SPEKOF
        </h2>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>O nama</h2>
            <Link to="/onama">Čime se bavimo</Link>
            <Link to="/onama">Članovi</Link>
            <Link to="/onama">Istorija</Link>
            <Link to="/onama">Sponzori</Link>
          </div>
          <div className="footer-link-items">
            <h2>Projekti</h2>
            <Link to="/projekti">KONSEK</Link>
            <Link to="/projekti">Interviewing week</Link>
            <Link to="/projekti">Upoznaj Ekof</Link>
            <Link to="/projekti">Vizuelna ekonomija</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Vesti</h2>
            <Link to="/vesti">Humanitarno veče</Link>
          </div>
          <div className="footer-link-items">
            <h2>Kontakt</h2>
            <Link to="/kontakt">Kontakt</Link>
            <Link to="/kontakt">Adresa</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              GZS
            </Link>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/grupa.za.SPEKOF">
              <i className="fab fa-facebook footer-icon" />
            </a>
            <a href="https://www.instagram.com/grupazaspekof/">
              <i className="fab fa-instagram footer-icon" />
            </a>{" "}
            <a href="https://www.youtube.com/c/GrupazaSPEKOF">
              <i className="fab fa-youtube footer-icon" />
            </a>{" "}
            <a href="https://rs.linkedin.com/company/grupa-za-spekof">
              <i className="fab fa-linkedin footer-icon" />
            </a>{" "}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
