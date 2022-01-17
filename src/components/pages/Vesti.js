import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";import '../../App.css';
import "./pages_css/Vesti.css";
import Footer from '../Footer';
import { NewsOne } from '../Data'


export default function Vesti() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <div style ={{marginTop:"50px", marginBottom:"50px"}}>
            <h1>Najnovije Vesti</h1>
          </div>
      <ul  data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
          data-aos-once="true" className="news-ul">
          <li
            className="booking-card"
            style={{
              backgroundImage: `url("../${NewsOne.backgroundimage}")`,
            }}
          >
            <div className="book-container">
              <div className="content">
              </div>
            </div>
            <div className="informations-container">
              <h2 className="title">{NewsOne.title}</h2>
              <p style={{fontSize:"12px"}} className="sub-title">{NewsOne.subtitle}</p>
              <div className="more-information">
                <div className="info-and-date-container">
                  <div className="box info">
                    <svg
                      className="icon"
                      style={{ width: 24, height: 24 }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
                      />
                    </svg>
                    <p>{NewsOne.subtitle}</p>
                  </div>
                </div>
                <p className="disclaimer">{NewsOne.text1}</p>
              </div>
            </div>
          </li>    
        </ul>
      <Footer />
    </>
  );
}
