import React from "react";
import "./CardsHome.css";
import author1 from "../authors/author1.png";
import author2 from "../authors/author2.png";
import author3 from "../authors/author3.png";
import author4 from "../authors/author4.png";
import author5 from "../authors/author5.png";

function CardsHome() {
  return (
    <div>
      <section className="card-list">
        <article className="card">
          <header className="card-header">
            <h2 style={{ fontSize: "25px",marginTop:'50px'}}>Predsednik organizacije
            </h2>
          </header>

          <div className="card-author">
            <div className="author-avatar">
              <img src={author1} alt="" />
            </div>
            <div className="author-name">
              Šujica Branko
            </div>
          </div>
        </article>
        <article className="card">
          <header className="card-header">
            <h2 style={{ fontSize: "25px",marginTop:'30px'}}>Resor za stručno usavršavanje i prakse
            </h2>
          </header>

          <div className="card-author">
            <div className="author-avatar">
              <img src={author2} alt="" />
            </div>
            <div className="author-name">
              Grković Miloš
            </div>
          </div>
        </article>
        <article className="card">
          <header className="card-header">
            <h2 style={{ fontSize: "25px",marginTop:'50px'}}>Resor za nastavu i ispite
            </h2>
          </header>

          <div className="card-author">
            <div className="author-avatar">
              <img src={author3} alt="" />
            </div>
            <div className="author-name">
              Tumbas Luka
            </div>
          </div>
        </article>
        <article className="card">
          <header className="card-header">
            <h2 style={{ fontSize: "25px",marginTop:'50px'}}>Resor za marketing i PR
            </h2>
          </header>

          <div className="card-author">
            <div className="author-avatar">
              <img src={author4} alt="" />
            </div>
            <div className="author-name">
              Bukorović Mija
            </div>
          </div>
        </article>
        <article className="card">
          <header className="card-header">
            <h2 style={{ fontSize: "25px",marginTop:'50px'}}>Resor za studentski standard
            </h2>
          </header>

          <div className="card-author">
            <div className="author-avatar">
              <img src={author5} alt="" />
            </div>
            <div className="author-name">
              Danguzov Tamara
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default CardsHome;
