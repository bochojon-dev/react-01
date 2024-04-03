import React from "react";
import logo from "../../components/assets/images/logo.png";
import search from "../../components/assets/images/search.svg";
import user from "../../components/assets/images/user.svg";

import "../navbar/Navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <div className="container">
        <div className="navbar">
          <div className="left_side">
            <img className="logo" src={logo} alt="logo" />
            <ul className="links">
              <li>Phone</li>
              <li>Smart Home</li>
              <li>Life Style</li>
            </ul>
          </div>
          <div className="right_side">
            <ul className="icons">
              <li>Discover</li>
              <li>Support</li>
              <li>
                <img src={search} alt="search" />
              </li>
              <li>
                <img src={user} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
