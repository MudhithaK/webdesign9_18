
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
           <a href="/hotels">Hotels</a>
           <a href="/dresses">Dress</a>
           <a href="/decorations">Decoration</a>
           <a href="/cake">Cakes</a>
           <a href="/makeup">Makeup</a>
           <a href="/music">Music</a>
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
