import React from 'react'
import Header from '../../Components/header';
import "./abouts.css";
import Footer from '../../Components/footer';
import ab from "../../assets/abb.jpg";

const About = () => {
  return (
    <>
        <Header/>
        <body style={{backgroundImage: `linear-gradient(rgba(252, 244, 131, 0.5),rgba(253, 253, 252, 0)), url(${ab})`,
                            backgroundRepeat: "repeat",
                            backgroundSize: "100% auto",
                            backgroundPosition: "top center",
                            width: "100%",
                            minHeight: "50vh",
                      }}>

        <div class="about-col" >
            <h1>How can you get help from us to plan your Wedding </h1>
            <p>We provide the packages that need for a wedding with their cost.</p><p> You can easily find the details of those  wedding packages and plan your wedding with the best selections from given packages.  Select packages as you want, and get budget for Wedding
                </p>

        </div>
        </body>
        <Footer/>
    </>
  );
}
export default About;