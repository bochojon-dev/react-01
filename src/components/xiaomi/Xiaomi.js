import React from "react";
import "../xiaomi/Xiaomi.css";
import customer from "../../components/assets/images/bx-headphone.svg";
import warranty from "../../components/assets/images/bx-check-shield.svg";
// import stacks from "../../components/assets/images/bx-headphone.svg";
import chat from "../../components/assets/images/bx-chat.svg";

function Xiaomi() {
  return (
    <div className="xiaomi">
      <div className="container">
        <div className="xiaomi_conents">
          <h2>Xiaomi Support</h2>
          <div className="icons">
            <div className="icon">
              <img src={customer} alt="customer" />
              <h3>Customer Support</h3>
              <p>Contact us via live-chat, email and phone call</p>
            </div>
            <div className="icon">
              <img src={warranty} alt="customer" />
              <h3>Warranty</h3>
              <p>Local warranty policy protection is provided</p>
            </div>
            <div className="icon">
              <img src={customer} alt="customer" />
              <h3>User Guides</h3>
              <p>Find and download your Xiaomi product user guide</p>
            </div>
            <div className="icon">
              <img src={chat} alt="customer" />
              <h3>FAQ</h3>
              <p>Search for hel about Xiaomi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Xiaomi;
