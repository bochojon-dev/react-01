import React from "react";
import left from "../../components/assets/images/left-arrow.svg";
import right from "../../components/assets/images/right-arrow.svg";
import explore_img from "../../components/assets/images/explore_img.webp";
import "../explore/Explore.css";
function Explore() {
  return (
    <div className="explore">
      <div className="container">
        <div className="explore_contents">
          <div></div>
          <h2>Explore Xiaomi</h2>
          <div className="arrows">
            <img src={left} alt="left" />
            <img src={right} alt="right" />
          </div>
        </div>
        <div className="explore_cards">
          <div className="explore_card">
            <img src={explore_img} alt="img" />
            <h3>An action-packed mobile-filming experience</h3>
            <p>
              Watch as the Xiaomi 14 stanning cinematic visuals even in a
              challenging environment
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
