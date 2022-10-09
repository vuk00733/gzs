import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./pages_css/Projekti.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { ProjectOne, ProjectTwo, ProjectThree, ProjectFour,ProjectFive } from "../Data";

export default function Projekti() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <>
          <div style ={{marginTop:"50px", marginBottom:"50px"}}>
            <h1>Naši Projekti</h1>
          </div>
          <ul  data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
          data-aos-once="true"
          className="project-ul" >
          <li 
            className="booking-card"
            style={{
              backgroundImage: `url("../${ProjectOne.backgroundimage}")`,
            }}
          >
            <div className="book-container">
              <div className="content">
                <Link to={`/projekti/${ProjectOne.id}`} className="btn">
                  Saznaj više
                </Link>
              </div>
            </div>
            <div className="informations-container">
              <h2 style={{color:"#000"}} className="title">{ProjectOne.title}</h2>
              <p  style={{color:"#840c0c"}}  className="sub-title">{ProjectOne.subtitle}</p>
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
                    <p>{ProjectOne.subtitle}</p>
                  </div>
                  <div className="box date">
                    <svg
                      className="icon"
                      style={{ width: 24, height: 24 }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"
                      />
                    </svg>
                    <p>{ProjectOne.date}</p>
                  </div>
                </div>
                <p className="disclaimer">{ProjectOne.headline}</p>
              </div>
            </div>
          </li>
          
          <li
            className="booking-card"
            style={{
              backgroundImage: `url("../${ProjectTwo.backgroundimage}")`,
            }}
          >
            <div className="book-container">
              <div className="content">
                <Link to={`/projekti/${ProjectTwo.id}`} className="btn">
                  Saznaj više
                </Link>
              </div>
            </div>
            <div className="informations-container">
              <h2  style={{color:"#000"}} className="title">{ProjectTwo.title}</h2>
              <p className="sub-title">{ProjectTwo.subtitle}</p>
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
                    <p>{ProjectTwo.subtitle}</p>
                  </div>
                  <div className="box date">
                    <svg
                      className="icon"
                      style={{ width: 24, height: 24 }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"
                      />
                    </svg>
                    <p>{ProjectTwo.date}</p>
                  </div>
                </div>
                <p className="disclaimer">{ProjectTwo.headline}</p>
              </div>
            </div>
          </li>
          <li
            className="booking-card"
            style={{
              backgroundImage: `url("../${ProjectThree.backgroundimage}")`,
            }}
          >
            <div className="book-container">
              <div className="content">
                <Link to={`/projekti/${ProjectThree.id}`} className="btn">
                  Saznaj više
                </Link>
              </div>
            </div>
            <div className="informations-container">
              <h2  style={{color:"#000"}} className="title">{ProjectThree.title}</h2>
              <p className="sub-title">{ProjectThree.subtitle}</p>
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
                    <p>{ProjectThree.subtitle}</p>
                  </div>
                  <div className="box date">
                    <svg
                      className="icon"
                      style={{ width: 24, height: 24 }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"
                      />
                    </svg>
                    <p>{ProjectThree.date}</p>
                  </div>
                </div>
                <p className="disclaimer">{ProjectThree.headline}</p>
              </div>
            </div>
          </li>
          <li
            className="booking-card"
            style={{
              backgroundImage: `url("../${ProjectFour.backgroundimage}")`,
            }}
          >
            <div className="book-container">
              <div className="content">
                <Link to={`/projekti/${ProjectFour.id}`} className="btn">
                  Saznaj više
                </Link>
              </div>
            </div>
            <div className="informations-container">
              <h2  style={{color:"#000"}} className="title">{ProjectFour.title}</h2>
              <p  style={{color:"#840c0c"}} className="sub-title">{ProjectFour.subtitle}</p>
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
                    <p>{ProjectFour.subtitle}</p>
                  </div>
                  <div className="box date">
                    <svg
                      className="icon"
                      style={{ width: 24, height: 24 }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"
                      />
                    </svg>
                    <p>{ProjectFour.date}</p>
                  </div>
                </div>
                <p className="disclaimer">{ProjectFour.headline}</p>
              </div>
            </div>
          </li>
          <li
            className="booking-card"
            style={{
              backgroundImage: `url("../${ProjectFive.backgroundimage}")`,
            }}
          >
            <div className="book-container">
              <div className="content">
                <Link to={`/projekti/${ProjectFive.id}`} className="btn">
                  Saznaj više
                </Link>
              </div>
            </div>
            <div className="informations-container">
              <h2 className="title">{ProjectFive.title}</h2>
              <p className="sub-title">{ProjectFive.subtitle}</p>
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
                    <p>{ProjectFive.subtitle}</p>
                  </div>
                  <div className="box date">
                    <svg
                      className="icon"
                      style={{ width: 24, height: 24 }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"
                      />
                    </svg>
                    <p>{ProjectFive.date}</p>
                  </div>
                </div>
                <p className="disclaimer">{ProjectFive.headline}</p>
              </div>
            </div>
          </li>
        </ul>
      </>

      <Footer />
    </>
  );
}
