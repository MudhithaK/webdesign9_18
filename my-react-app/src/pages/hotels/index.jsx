import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./hotels.css";
import Header from "../../Components/header";

const Hotel=(pros)=>{
    return(
        <>
        <Header/>
        <div className="hotels">
            <h1>Packages of Venue</h1>
            <p>Select Hotels' Packages as you want, and get budget for Wedding</p>

            <div className="Hotelp">
                <div className="AHP">

                <div className="HP">
                    <h3>Five Star Hotel Packages</h3>
                    <p>Bronze - Rs.7 550/=</p>
                    <p>Silver - Rs.8 100/=</p>
                    <p>Gold - Rs.8 500/=</p>
                    <p>Platinum - Rs.9 500/=</p>
                </div>

                <div className="HP">
                    <h3>Four Star Hotel Packages</h3>
                    <p>Bronze - Rs.6 500/=</p>
                    <p>Silver - Rs.7 000/=</p>
                    <p>Gold - Rs.7 500/=</p>
                    <p>Platinum - Rs. 8 000/=</p>
                </div>

                <div className="HP">
                    <h3>Three Star Hotel Packages</h3>
                    <p>Function menu 1 - Rs.5 500/=</p>
                     <p>Function menu 2 - Rs.6 000/=</p>
                     <p>Function menu 3 - Rs.6 200/=</p>   
                </div>

                <div className="HP">
                    <h3>Two Star Hotel Packages</h3>
                    <p>Function menu 1 - Rs.4 800/=</p>
                    <p>Function menu 2 - Rs.5 200/=</p>
                    <p>Function menu 3- Rs.6 000/=</p>
                </div>

                
                <div className="HP">
                    <h3>Normal Hotel Packages</h3>
                    <p>Bronze menu- Rs.2 800/=</p>
                    <p>Silver menu - Rs.3 100/=</p>
                    <p>Golden menu -Rs.3 500/=</p>
                    <p>Platinum menu - Rs.4 000/=</p>
                </div>

                </div>

            </div>


        </div>
        
        
        </>
    )

}
export default Hotel;