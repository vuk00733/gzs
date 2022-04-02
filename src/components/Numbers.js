import React, { useEffect } from "react";
import AnimatedNumbers from "react-animated-numbers";
import "./Numbers.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Numbers() {
  const num = [64, 2012, 9,2113948];
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div data-aos="fade-up" data-aos-once="true" className="wraper">
      <div>
        <AnimatedNumbers
          animateToNumber={num[0]}
          fontStyle={{ fontSize: 32, color: "#fff" }}
          configs={(number, index) => {
            return { mass: 1, tension: 230 * (index + 1), friction: 140 };
          }}
        ></AnimatedNumbers>
        <h2>Broj članova</h2>
      </div>
      <div>
        <div>
          <AnimatedNumbers
            animateToNumber={num[1]}
            fontStyle={{ fontSize: 32, color: "#fff" }}
            configs={(number, index) => {
              return { mass: 1, tension: 230 * (index + 1), friction: 140 };
            }}
          ></AnimatedNumbers>
          <h2>Godina osnivanja</h2>
        </div>
      </div>
      <div>
        <div>
          <AnimatedNumbers
            animateToNumber={num[2]}
            fontStyle={{ fontSize: 32, color: "#fff" }}
            configs={(number, index) => {
              return { mass: 1, tension: 230 * (index + 1), friction: 100 };
            }}
          ></AnimatedNumbers>
          <h2>Održanih projekata</h2>
        </div>
      </div>
      <div>
          <AnimatedNumbers
            animateToNumber={num[3]}
            fontStyle={{ fontSize: 32, color: "#fff" }}
            configs={(number, index) => {
              return { mass: 1, tension: 230 * (index + 1), friction: 100 };
            }}
          ></AnimatedNumbers>
          <h2>RSD donirano u humanitarne svrhe</h2>
        </div>
    </div>
  );
}

export default Numbers;
