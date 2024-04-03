import React from "react";
// import bgHero from "../../components/assets/images/bg.webp";
import "../../components/hero/Hero.css";
function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero_texts">
          <h2>
            <span>xiaomi</span> Pad 6S Pro <span className="12_4">12.4</span>
          </h2>
          <h3>Big ideas on bigger screen</h3>
          <p>12.4" 144Hz 3k crystal-clear display</p>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
