import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./makeup.css";
import Header from "../../Components/header";

const Makeup=(pros)=>{
    return(
        <>
        <Header/>
        <div className="makeup">
            <h1>Bridal Hairstyle and Makeup</h1>
            <div className="mk1">
                <div className="mk2">
                    <div className="mk3">
                        <h3>Lowest Price Tier</h3>
                        <p>Basic Bridal Makeup: Rs 100,000</p>
                        <p>Basic Bridal Hairstyling: Rs 20,000</p>
                        <p>Basic Makeup Accessories: Rs 5,000</p>
                        <p>Total Basic Makeup Cost: Rs 125,000</p>

                    </div>
                    <div className="mk3">
                        <h3>Lowest Price Tier</h3>
                        <p>Standard Bridal Makeup: Rs 200,000</p>
                        <p>Standard Bridal Hairstyling: Rs 40,000</p>
                        <p>Standard Makeup Accessories: Rs 10,000</p>
                        <p>Total Standard Makeup Cost: Rs 250,000</p>

                    </div>
                    <div className="mk3">
                        <h3>Highest Price Tier</h3>
                        <p>Premium Bridal Makeup: Rs 300,000</p>
                        <p>Premium Bridal Hairstyling: Rs 50,000</p>
                        <p>Premium Makeup Accessories: Rs 10,000</p>
                        <p>Total Premium Makeup Cost: Rs 360,000</p>

                    </div>
                </div>
            </div>
        </div>
        </>
    )

}
export default Makeup;