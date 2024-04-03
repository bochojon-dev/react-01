import React from "react";
import "../footer/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_contents">
          <div className="links">
            <h3>SUPPORT</h3>
            <p>Contact us</p>
            <p>User guide</p>
            <p>Warranty</p>
            <p>International Warranty</p>
            <p>EU Declaration of Conformity</p>
            <p>Scooter Safety Notice</p>
            <p>Androin Enterprise Recommended</p>
            <p>Digital Services Act</p>
          </div>
          <div className="links">
            <h3>ABOUT US</h3>
            <p>Xiaomi</p>
            <p>Leadersip Team</p>
            <p>Privacy Policy</p>
            <p>Integrity & Compliance</p>
            <p>Investor Relation</p>
            <p>Sustainablity</p>
            <p>Trust Center</p>
            <p>Xiaomi Accesbility</p>
            <p>Xiaomi Hyper OS</p>
          </div>
          <div className="links">
            <h3>XIAOMI PROJECTS</h3>
            <p>Xiaomi Creators</p>
            <p>Xiaomi Studios </p>
            <p>Xiaomi Imagery</p>
            <p>Xiaomi Master Class</p>
            <p>Xiaomi Renovation</p>
          </div>
          <div className="links">
            <h3>Follow Xiami</h3>
            <div className="social_media">
              {/* <img src="" alt="" /> */}
              <h3>Let's stay in touch</h3>
              <form>
                <div className="form">
                  <input type="email" placeholder="Enter email address" />
                  {/* <img src="" alt="" /> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
