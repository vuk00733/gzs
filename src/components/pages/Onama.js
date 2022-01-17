import React from "react";
import "./pages_css/Onama.css";
import Footer from "../Footer";
import CardsHome from "../CardsHome";
import Sponsors from "../Sponsors";
import { SponsorOne } from "../Data";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ProjectOne, ProjectTwo } from "../Data";
import { Link } from "react-router-dom";

export default function Onama() {
  const images = [
    {
      original: `../${ProjectOne.img1}`,
      thumbnail: `../${ProjectOne.img1}`,
    },
    {
      original: `../${ProjectOne.img2}`,
      thumbnail: `../${ProjectOne.img2}`,
    },
    {
      original: `../${ProjectOne.img3}`,
      thumbnail: `../${ProjectOne.img3}`,
    },
    {
      original: `../${ProjectTwo.img1}`,
      thumbnail: `../${ProjectTwo.img1}`,
  },
    {
        original: `../${ProjectTwo.img2}`,
        thumbnail: `../${ProjectTwo.img2}`,
    },
    {
      original: `../${ProjectTwo.img3}`,
      thumbnail: `../${ProjectTwo.img3}`,
  },
    {
        original: `../${ProjectOne.img10}`,
        thumbnail: `../${ProjectOne.img10}`,
    },
    {
      original: `../${ProjectOne.img12}`,
      thumbnail: `../${ProjectOne.img12}`,
  },
  ];
  return (
    <>
      <div class="stage">
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
      </div>
      <div className="grid">
      <h1>O nama</h1>
      <h1>Naša misija i vizija</h1>
      <p style={{textAlign:"center",margin:"50px"}}>
      Grupa za SPEKOF je najveća organizacija u Studentskom parlamentu Ekonomskog fakulteta, čiji se članovi aktivno bore za viši studentski standard od njenog osnivanja, 2012. godine. Naš osnovni zadatak jeste da donesemo nešto novo, unikatno, zanimljivo i pre svega korisno za studente. Kao konstantni nosioci promena na bolje, svoju ulogu najviše vidimo u poboljšanju kvaliteta studentskog života.
      </p>
      <p style={{textAlign:"center",margin:"50px"}}>
      Cilj nam je kreiranje mladih i sposobnih lidera, kako u našoj organizaciji tako i izvan nje. Podstičemo ljude kako na drugačija i kreativna razmišljanja, tako i na profesionalno usavršavanje. Pored mnogobrojnih aktivnosti na polju nastave i ispita, bavimo se i organizovanjem gostujućih predavanja, stručnih ekskurzija, poseta kompanijama, humanitarnih žurki, kurseva, obezbeđivanjem popusta za studente, kao i organizovanjem više konferencija, koje se održavaju na godišnjem nivou. Dok su neki projekti gotovo postali tradicija, mi konstantno radimo i na pripremi novih događaja.
      </p>
      <h1>Istorija</h1>
      <h1>Humanitarne akcije i ostale aktivnosti</h1>
      <p style={{textAlign:"center",margin:"50px"}}>
       
      </p>
      <p style={{textAlign:"center",margin:"50px"}}>
      Upravo posvećenošću i radom stekli smo veliku podršku studenata Ekonomskog fakulteta, koji redovno posećuju ne samo naše konferencije koje doprinose njihovom stručnom i ličnom usavršavanju, već i humanitarne žurke, koje organizujemo dva puta godišnje. Humanitarne žurke omogućile su nam da sakupimo sredstva i bolnicama donirama potrebne aparate u vrednosti od više hiljada evra. Pored toga, od 2016. godine, počeli smo i sa organizovanjem ekskurzija za studente, u saradnji sa turističkom agencijom.
      </p>
      </div>
      <div className="grid_mobile">
      <h1>O nama</h1>
      <p style={{textAlign:"center",marginLeft:"20px",marginRight:"20px",marginBottom:"50px",marginTop:"40px"}}>
      Grupa za SPEKOF je najveća organizacija u Studentskom parlamentu Ekonomskog fakulteta, čiji se članovi aktivno bore za viši studentski standard od njenog osnivanja, 2012. godine. Naš osnovni zadatak jeste da donesemo nešto novo, unikatno, zanimljivo i pre svega korisno za studente. Kao konstantni nosioci promena na bolje, svoju ulogu najviše vidimo u poboljšanju kvaliteta studentskog života.      </p>
      <h1>Naša misija i vizija</h1>
      <p style={{textAlign:"center",marginLeft:"20px",marginRight:"20px",marginBottom:"50px",marginTop:"40px"}}>
      Cilj nam je kreiranje mladih i sposobnih lidera, kako u našoj organizaciji tako i izvan nje. Podstičemo ljude kako na drugačija i kreativna razmišljanja, tako i na profesionalno usavršavanje. Pored mnogobrojnih aktivnosti na polju nastave i ispita, bavimo se i organizovanjem gostujućih predavanja, stručnih ekskurzija, poseta kompanijama, humanitarnih žurki, kurseva, obezbeđivanjem popusta za studente, kao i organizovanjem više konferencija, koje se održavaju na godišnjem nivou. Dok su neki projekti gotovo postali tradicija, mi konstantno radimo i na pripremi novih događaja.
      </p>
      <h1>Istorija</h1>
      <p style={{textAlign:"center",marginLeft:"20px",marginRight:"20px",marginBottom:"50px",marginTop:"40px"}}>
        orem Ipsum is simply dummy text of the printing and typesetting
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Lorem Ipsum. Why do we use it? It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolv
      </p>
      <h1>Humanitarne akcije i ostale aktivnosti</h1>
      <p style={{textAlign:"center",marginLeft:"20px",marginRight:"20px",marginBottom:"50px",marginTop:"40px"}}>
      Upravo posvećenošću i radom stekli smo veliku podršku studenata Ekonomskog fakulteta, koji redovno posećuju ne samo naše konferencije koje doprinose njihovom stručnom i ličnom usavršavanju, već i humanitarne žurke, koje organizujemo dva puta godišnje. Humanitarne žurke omogućile su nam da sakupimo sredstva i bolnicama donirama potrebne aparate u vrednosti od više hiljada evra. Pored toga, od 2016. godine, počeli smo i sa organizovanjem ekskurzija za studente, u saradnji sa turističkom agencijom.
      </p>
      </div>
      <div className="wrap">
        <div className="table basic">
          <div className="head_tab"><h2>Interviewing<br /> Week</h2></div>
          <div style={{marginTop:"20px"}} className="aj_p"><p>Grupa za SPEKOF</p></div>
          <div className="price-section">
            <div className="price-area">
              <div className="inner-area">
              <span className="price">19.02.2022<span style={{fontSize: '12px'}}></span></span>
              </div>
            </div>
          </div>
          <div className="package-name" />
          <ul className="features">
            <Link to={"/projekti"}><div className="btn"><button>Saznja Vise</button></div></Link>
            <li>
              <span className="list-name">Predavanja</span>
              <span className="icon check"><i className="fas fa-check" /></span>
            </li>
            <li>
              <span className="list-name">Radionice</span>
              <span className="icon check"><i className="fas fa-check" /></span>
            </li>
            <li>
              <span className="list-name">Simulacija intervjua</span>
              <span className="icon check"><i className="fas fa-check" /></span>
            </li>
          </ul>
        </div>
        <div className="table premium">
          <div className="head_tab"><h2>KONSEK <br />2022</h2></div>
          <div style={{marginTop:"20px"}} className="aj_p"><p>Grupa za SPEKOF</p></div>
          <div className="ribbon"><span>NOVI PROJEKAT</span></div>
          <div className="price-section">
            <div className="price-area">
              <div className="inner-area">
              <span className="price">27.03.2022<span style={{fontSize: '12px'}}></span></span>
              </div>
            </div>
          </div>
          <div className="package-name" />
          <ul className="features">
            <Link to={"/projekti"}><div className="btn"><button>Saznja Vise</button></div></Link>
            <li>
              <span className="list-name">Zlatibor</span>
              <span className="icon check"><i className="fas fa-check" /></span>
            </li>
            <li>
              <span className="list-name">Preko 450 prijavljenih</span>
              <span className="icon check"><i className="fas fa-check" /></span>
            </li>
            <li>
              <span className="list-name">Smeštaj i autobuski prevoz</span>
              <span className="icon check"><i className="fas fa-check" /></span>
            </li>
            <li>
              <span className="list-name">5 dana / 4 noći</span>
              <span className="icon check"><i className="fas fa-check" /></span>
            </li>
          </ul>
        </div>
        <div className="table ultimate">
          <div className="head_tab"><h2>IT <br />SPACE</h2></div>
          <div style={{marginTop:"20px"}} className="aj_p"><p>Grupa za SPEKOF</p></div>
          <div className="price-section">
            <div className="price-area">
              <div className="inner-area">
              <span className="price">11.12.2021<span style={{fontSize: '12px'}}></span></span>
              </div>
            </div>
          </div>
          <div className="package-name" />
          <ul className="features">
            <Link to={"/projekti"}><div className="btn"><button>Saznja Vise</button></div></Link>
            <li>
              <span className="list-name">Seminar o IT-u </span>
              <span className="icon check"><i className="fas fa-check" /></span>
            </li>
           <li>
              <span className="list-name">8. godina održavanja</span>
              <span className="icon check"><i className="fas fa-check" /></span>
            </li>
            <li>
              <span className="list-name">Primenjivanje znanja u praksi</span>
              <span className="icon check"><i className="fas fa-check" /></span>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: "100px" }}>
        <ImageGallery items={images}></ImageGallery>
      </div>

      <Sponsors {...SponsorOne} />
      <h1 style={{ marginTop: "100px" }}>Naši resori</h1>
      <CardsHome />
      <Footer />
    </>
  );
}
