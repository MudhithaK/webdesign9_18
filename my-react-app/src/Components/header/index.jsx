
import React from "react";
import "./headers.css";
import wed from "../../assets/Wedding.jpg";
import wedd from "../../assets/wedding1.jpeg";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
         <img src={wedd}/>
        <div className="logo1">
        WEDDING COST
        </div>

      </div>
      
      <div className="nav-links">
        <ul>
        
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">PACKAGES</a></li>
          <li><a href="#">CALCULATION</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
