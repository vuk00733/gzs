import React from 'react';
import "./Groups.css";
import author1 from "../authors/suki.jpeg";
import author2 from "../authors/mija.jpeg";
import author3 from "../authors/author3.png";
import author4 from "../authors/grkovic.jpeg";
import author5 from "../authors/author5.png";

export default function Groups() {
  return(
    <div className="row">
        <div className="column">
          <div className="group-card">
            <img src={author1} alt="Jane" style={{width: '300px', height: '300px',marginBottom:'10px'}} />
            <div className="group-cnt">
              <p className="group-title">Predsednik organizacije</p>
              <p>Šujica Branko</p>
              <p>example@example.com</p>
              <p style={{marginTop:"20px"}}><button className="button">LinkedIn</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="group-card">
          <img src={author2} alt="Jane" style={{width: '400px', height: '300px',marginBottom:'10px'}} />
            <div className="group-cnt">
              <p className="group-title">Resor za marketing i PR</p>
              <p>Bukorović Mija</p>
              <p>example@example.com</p>
              <p style={{marginTop:"20px"}}><button className="button">LinkedIn</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="group-card">
          <img src={author3} alt="Jane" style={{width: '400px', height: '300px',marginBottom:'10px'}} />
            <div className="group-cnt">
              <p className="group-title">Resor za nastavu i ispite</p>
              <p>Tumbas Luka</p>
              <p>lukatumbas25@gmail.com</p>
              <p style={{marginTop:"20px"}}><button className="button">LinkedIn</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="group-card">
          <img src={author4} alt="Jane" style={{width: '400px', height: '300px',marginBottom:'10px'}} />
            <div className="group-cnt">
              <p className="group-title">Resor za stručno usavršavanje</p>
              <p>Grković Miloš</p>
              <p>grmilos99@gmail.com</p>
              <p style={{marginTop:"20px"}}><button className="button">LinkedIn</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="group-card">
          <img src={author5} alt="Jane" style={{width: '400px', height: '300px',marginBottom:'10px'}} />
            <div className="group-cnt">
              <p className="group-title">Resor za studentski standard</p>
              <p>Danguzov Tamara</p>
              <p>example@example.com</p>
              <p style={{marginTop:"20px"}}><button className="button">LinkedIn</button></p>
            </div>
          </div>
        </div>
      </div>
  );
}
