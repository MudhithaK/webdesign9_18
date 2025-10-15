import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./cake.css"
import Header from "../../Components/header";

const Cake=(pros)=>{
    return(
        <>
        <Header/>
        <div className="c1">
            <h1>Wedding cakes and structure</h1>
            <p>Select the packages as you want, and get budget for Wedding</p>
            <div className="c2">
                <div className="c3">
                    <h3>Bronze package</h3>
                    <p>Flour, Sugar, Butter, Eggs, Vanilla Extract, Baking Powder, Milk</p>
                    <p>2 x 1.25 x 0.75 inches =Rs 400</p>
                    <p>2 x 2 x 0.75 inches = Rs 500</p>
                    <p>2 x 1.25 x 1 inches = Rs 450</p>
                    <p>2 x 2 x 1 inches = Rs 550</p>
                </div>

                <div className="c3">
                    <h3>Silver Packages</h3>
                    <p>Bronze Package + Nuts, Spices, Dried Fruits, Kithul Pani</p>
                    <p>2 x 1.25 x 0.75 inches =Rs 600</p>
                    <p>2 x 2 x 0.75 inches = Rs 750</p>
                    <p>2 x 1.25 x 1 inches = Rs 650</p>
                    <p>2 x 2 x 1 inches = Rs 800</p>

                </div>

                <div className="c3">
                    <h3>Gold Packages</h3>
                    <p>Silver Package + Edible Gold Leaf or Gold Dust, Almonds or </p>
                       <p> Macadamia Nuts, Grand Marnier or Cognac, Vanilla Beans,</p> 
                        <p>Gold-Dusted Berries</p>
                    <p>2 x 1.25 x 0.75 inches =Rs 950</p>
                    <p>2 x 2 x 0.75 inches = Rs 1250</p>
                    <p>2 x 1.25 x 1 inches = Rs 1100</p>
                    <p>2 x 2 x 1 inches = Rs 1500</p>
                </div>

                <div className="c3">
                    <h3>Wedding Cake and Structure</h3>
                    <p>Simple Designs</p>
                    <p>Simple one-layer cakes:
                        Rs 3 000 , Rs 5 000 , Rs 10 000</p>
                    <p>Simple two-layer cakes:
                        Rs 10 000 , Rs 15 000 , Rs 20 000</p>
                    <p>Cakes coated in fondant and decorated simply:
                        Rs 15 000 , Rs 20 000 , Rs 25 000 , Rs 30 000</p>
                    <p>Cakes of three layers, moderately decorated:
                        Rs 20 000 , Rs 30 000 , Rs 40 000</p>
                    <p>Elaborate fondant or sugar flower designs:
                        Rs 50 000 , Rs 75 000 , Rs 90 000 , Rs 120 000 , Rs 150 000</p>
                </div>

            </div>

        </div>
        
        </>
    )

}
export default Cake;