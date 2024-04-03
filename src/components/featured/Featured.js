import React from "react";
import "../../components/featured/Featured.css";
import featured_img from "../../components/assets/images/featured_image.webp";
import redmipro from "../../components/assets/images/13pro.webp";
import watch from "../../components/assets/images/watch.webp";
import budpro from "../../components/assets/images/5pro.webp";
import buds from "../../components/assets/images/buds.webp";
function featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="featured_contents">
          <h2>Featured Products</h2>
          <ul className="products">
            <li>Stay on Trend</li>
            <li>Latest Flagship</li>
            <li>Enjoy the Outdoors</li>
            <li>Gaming Essentials</li>
          </ul>
          <div className="redmi">
            <div className="redmi_note">
              <img src={featured_img} alt="image" />
              <div className="featured_texts">
                <h3>
                  Redmi Note <span>13</span> Pro +{" "}
                  <span className="5g">5G</span>
                </h3>
                <h4>Xiaomi Fan Festival Speial Edition</h4>
                <p>Limited Availability | Mystic Silver</p>
                <button>Learn more</button>
              </div>
            </div>
            <div className="cards">
              <div className="card">
                <img src={redmipro} alt="" />
                <h3>Redmi Note 13 5G</h3>
                <p>Super-clear 108MP triple camera</p>
                <button>Learn more</button>
              </div>
              <div className="card">
                <img src={watch} alt="" />
                <h3>Redmi Watch 4</h3>
                <p>Ultra-large 1.97" AMOLED display</p>
                <button>Learn more</button>
              </div>
              <div className="card">
                <img src={budpro} alt="" />
                <h3>Redmi Buds 5 Pro</h3>
                <p>High resoution, Hi-Fi sound quality</p>
                <button>Learn more</button>
              </div>
              <div className="card">
                <img src={buds} alt="" />
                <h3>Redmi Buds 5</h3>
                <p>AI noise reduction for calls</p>
                <button>Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default featured;
