import React from "react";
import "./Header.css";
import banner from "../Assets/banner.png";

function Header() {
  return (
    <div className="header-container-wrapper">
      <div className="header-container">
        <div className="header-container-banner-content">
            <h5>SUMMER 2020</h5>
            <h1>NEW COLLECTION</h1>
            <h4>We know how large objects will act, but things on a smaller scale</h4>
            <button type="button">SHOP NOW</button>
        </div>
        <img src={banner} alt="banner"></img>
      </div>
    </div>
  );
}

export default Header;