import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../../Components/header";
import "./music.css";

const Music=(pros)=>{
    return(
        <>
        <Header/>
        <div className="music">
            <h1>Wedding Entertainment</h1>
            <p>Select packages of entertainment, or Individual DJ Artist, or Band as you want, and get budget for Wedding</p>
            <div className="mu1">
                <div className="mu2">
                    <h3>Packages for Entertainment</h3>
                    <p>Budget Package LKR 15000/=</p>
                    <p>Silver Package LKR 20000/=</p>
                    <p>Gold Package LKR 25000/=</p>
                    <p>Platinum Package LKR 30000/=</p>
                </div>
                <div className="mu2">
                    <h3>Individual DJ artists</h3>
                    <p>Low cost price averagely - LKR 40000/=</p>
                    <p>High cost price averagely - LKR 135000/=</p>
                </div>
                <div className="mu2">
                    <h3>Wedding Bands</h3>
                    <p>Low cost price averagely - LKR 70000/=</p>
                    <p>High cost price averagely - LKR 300000/=</p>
                </div>

            </div>
        </div>
        </>
    )

}
export default Music;