import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './styleh.css';
import Header from "../../Components/header";
import bgImg from "../../assets/f1.jpg"; 


const Home=(pros)=>{

    return(
        <>
        <Header/>
         <body style={{backgroundImage: `linear-gradient(rgba(252, 244, 131, 0.5), rgba(253, 253, 252, 0.5)), url(${bgImg})`,backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",width: "100%",
        height: "100vh",}}>
            <div className="home1" >
            <h1>Get help to plan your Beautiful Wedding</h1>
            Select packages as you want, and calculate the budget for Wedding
        </div>
         </body>
    </>
    );

};
export default Home;