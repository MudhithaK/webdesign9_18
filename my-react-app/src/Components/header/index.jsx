
import React from "react";
import "./headers.css";
import wed from "../../assets/Wedding.jpg";
import wedd from "../../assets/wedding1.jpeg";
import About from "../../pages/about";
import { Link } from "react-router-dom";
import Headerup from "./headerup";

const Header = () => {
  return (
    <>
    
    <nav className="navbar">
      <div className="logo">
               <img src={wedd}/>
              <div className="logo1">
              WEDDING COST
              </div>
      
            </div>
      
      <div className="nav-links">
        <ul>
        
          <li><div class="dropdown"><button class="dropbtn"><a href="/">HOME</a></button></div></li>
          <li><div class="dropdown"><button class="dropbtn"><a href="/about">ABOUT</a></button></div></li>
          <li>
          <div class="dropdown">
          <button class="dropbtn"><a href="/packages">PACKAGES</a></button>   
          <div class="dropdown-content">
           <a href="#">Hotels</a>
           <a href="#">Dress</a>
           <a href="#">Decoration</a>
           <a href="#">Cakes</a>
           <a href="#">Makeup</a>
           <a href="">Music</a>
          </div>
          </div> 
          </li>
          <li><div class="dropdown"><button class="dropbtn"><a href="#">CALCUATION</a></button></div></li>
          <li><div class="dropdown"><button class="dropbtn"><a href="#">CONTACT US</a></button></div></li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Header;
