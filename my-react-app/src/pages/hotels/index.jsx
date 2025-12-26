const packages = [
  {
    id: 1,
    title: "Five Star Hotel Packages",
    details: [
      "Bronze - Rs.7 550/=",
      "Silver - Rs.8 100/=",
      "Gold - Rs.8 500/=",
      "Platinum - Rs.9 500/=",
    ],
  },
  {
    id: 2,
    title: "Four Star Hotel Packages",
    details: [
      "Bronze - Rs.6 500/=",
      "Silver - Rs.7 000/=",
      "Gold - Rs.7 500/=",
      "Platinum - Rs.8 000/=",
    ],
  },
  {
    id: 3,
    title: "Three Star Hotel Packages",
    details: [
      "Function menu 1 - Rs.5 500/=",
      "Function menu 2 - Rs.6 000/=",
      "Function menu 3 - Rs.6 200/=",
    ],
  },
  {
    id: 4,
    title: "Normal Hotel Packages",
    details: [
      "Bronze menu - Rs.2 800/=",
      "Silver menu - Rs.3 100/=",
      "Golden menu - Rs.3 500/=",
      "Platinum menu - Rs.4 000/=",
    ],
  },
];




import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./hotels.css";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import bgIm from "../../assets/wd.jpeg";

const Hotel=(pros)=>{

    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

  // 🔁 Auto change every 3 seconds
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % packages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);



    return(
        <>
        <Header/>
        <body  style={{backgroundImage: `linear-gradient(rgba(252, 244, 131, 0),rgba(253, 253, 252, 0)), url(${bgIm})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        width: "100%",
        minHeight: "100vh",
  }}>
        <div className="hotels">
            <h1 style={{color:"white", fontSize:"60px"}}>Packages of Venue</h1>
            <p style={{color:"black", fontSize:"30px"}}>Select Hotels' Packages as you want, and get budget for Wedding</p>

           

            <div className="Hotelp">
                <div className="AHP">

                <div className="HP">
                    <h2>{packages[activeIndex].title}</h2>

                    {packages[activeIndex].details.map((item, index) => (
                    <p key={index}>{item}</p>
                    ))}
                </div>

                 {/* RIGHT BUTTONS */}
                <div className="HP-b">
                {packages.map((pkg, index) => (
                <button
                    key={pkg.id}
                    className={activeIndex === index ? "active-btn" : ""}
                    onClick={() => {
                        setActiveIndex(index);
                        setIsAutoPlay(false);
                    }}
          >
                 
                 {pkg.title}
                </button>
                ))}
                </div>

                </div>

            </div>


        </div>
        </body>
        
        <Footer/>
        </>
    )

}
export default Hotel;
