import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./makeup.css";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import make from "../../assets/make.webp";

const Makeup=(pros)=>{
    return(
        <>
        <Header/>
        <body style={{backgroundImage: `linear-gradient(rgba(252, 244, 131, 0),rgba(253, 253, 252, 0)), url(${make})`,
                            backgroundRepeat: "repeat",
                            backgroundSize: "60% auto",
                            backgroundPosition: "top center",
                            width: "100%",
                            minHeight: "100vh",
                      }}>
        <div className="makeup">
            <h1 style={{fontSize:"40px",color:"white"}}>Bridal Hairstyle and Makeup</h1>
            <div className="mk1">
                <div className="mk2">
                    <div className="mk3">
                        <h3 style={{fontSize:"30px"}}>Lowest Price Tier</h3>
                        <p>Basic Bridal Makeup: Rs 100,000</p>
                        <p>Basic Bridal Hairstyling: Rs 20,000</p>
                        <p>Basic Makeup Accessories: Rs 5,000</p>
                        <p>Total Basic Makeup Cost: Rs 125,000</p>

                    </div>
                    <div className="mk3">
                        <h3 style={{fontSize:"30px"}}>Lowest Price Tier</h3>
                        <p>Standard Bridal Makeup: Rs 200,000</p>
                        <p>Standard Bridal Hairstyling: Rs 40,000</p>
                        <p>Standard Makeup Accessories: Rs 10,000</p>
                        <p>Total Standard Makeup Cost: Rs 250,000</p>

                    </div>
                    <div className="mk3">
                        <h3 style={{fontSize:"30px"}}>Highest Price Tier</h3>
                        <p>Premium Bridal Makeup: Rs 300,000</p>
                        <p>Premium Bridal Hairstyling: Rs 50,000</p>
                        <p>Premium Makeup Accessories: Rs 10,000</p>
                        <p>Total Premium Makeup Cost: Rs 360,000</p>

                    </div>
                </div>
            </div>
        </div>
        </body>

        <Footer/>
        </>
    )

}
export default Makeup;