import { useState, useEffect} from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {sliderData} from "./slider-data";
//import "./Slider.scss";
import "./ss.css"

// Define the autoplay interval in milliseconds (e.g., 3000ms = 3 seconds)
const autoScroll = true;
let slideInterval;
const intervalTime = 3000; // 5 seconds

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = sliderData.length;
    //slideLength = 1 2 3
    //currentSlide =0 1 2

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrentSlide(currentSlide => (currentSlide + 1) % slideLength);
    };

    // Function to move to the previous slide
    const prevSlide = () => {
        setCurrentSlide(currentSlide => 
            currentSlide === 0 ? slideLength - 1 : currentSlide - 1
        );
    };

    // Resets to the first slide on initial component mount (good practice)
    useEffect(()=>{
        setCurrentSlide(0)
    },[])

    // Function to auto-scroll, which will be called by setInterval
    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    // Autoplay implementation using useEffect
    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        // Cleanup function: This stops the interval when the component unmounts
        // or when the dependencies of this useEffect change (in this case, none).
        return () => clearInterval(slideInterval);
    }, [currentSlide, autoScroll, slideInterval, nextSlide]); // Added dependencies for safety and correct cleanup

    // The return statement remains the same
    return (
        <body>
        <div className='slider'>
            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide}/>

            {sliderData.map((Slide,index)=>{
                return(
                    <div className={index === currentSlide ?
                        "slide current":"slide"} key={index}>
                        {index === currentSlide &&(
                            <img src={Slide.image} alt="slide"/>
                        )}
                    </div>
                )
            })}
        </div>
        </body>
    )
}

export default Slider;