import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../../Components/header";
import "./music.css";
import Footer from "../../Components/footer";
import music from "../../assets/musicw.avif";


const Music=(pros)=>{
    return(
        <>
        <Header/>
        <body style={{backgroundImage: `linear-gradient(rgba(252, 244, 131, 0),rgba(253, 253, 252, 0)), url(${music})`,
                                    backgroundRepeat: "repeat",
                                    backgroundSize: "60% auto",
                                    backgroundPosition: "top center",
                                    width: "100%",
                                    minHeight: "100vh",
                              }}>
        <div className="music">
            <h1 style={{fontSize:"50px", color:"black"}}>Wedding Entertainment</h1>
            <h2 style={{fontSize:"20px", color:"white"}}>Select packages of entertainment, or Individual DJ Artist, or Band as you want, and get budget for Wedding</h2>
            <div className="mu1">
                <div className="mu2">
                    <h3 style={{fontSize:"30px"}}>Packages for Entertainment</h3>
                    <p>Budget Package LKR 15000/=</p>
                    <p>Silver Package LKR 20000/=</p>
                    <p>Gold Package LKR 25000/=</p>
                    <p>Platinum Package LKR 30000/=</p>
                </div>
                <div className="mu2">
                    <h3 style={{fontSize:"30px"}}>Individual DJ artists</h3>
                    <p>Low cost price averagely - LKR 40000/=</p>
                    <p>High cost price averagely - LKR 135000/=</p>
                </div>
                <div className="mu2">
                    <h3 style={{fontSize:"30px"}}>Wedding Bands</h3>
                    <p>Low cost price averagely - LKR 70000/=</p>
                    <p>High cost price averagely - LKR 300000/=</p>
                </div>

            </div>
        </div>
        </body>

        <Footer/>
        </>
    )

}
export default Music;