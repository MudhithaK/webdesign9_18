
import React from "react";
import "./headers.css";

const Header = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        WEDDING COST <img src="" alt="logo" />
      </a>
      <div className="nav-links">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">PACKAGES</a></li>
          <li><a href="#">CALCULATION</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
