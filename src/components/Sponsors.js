import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sponsors.css";

export default class Sponsors extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };
    return (
      <div className="container">
        <h1 className="title">{this.props.title}</h1>
        <Slider className="mobile-form" {...settings}>
          <div>
            <img src={this.props.img1} className="image" alt="" />
          </div>
          <div>
            <img src={this.props.img2} className="image" alt="" />
          </div>
          <div>
            <img src={this.props.img3} className="image" alt="" />
          </div>
          <div>
            <img src={this.props.img4} className="image" alt="" />
          </div>
          <div>
            <img src={this.props.img5} className="image" alt="" />
          </div>
          <div>
            <img src={this.props.img6} className="image" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
