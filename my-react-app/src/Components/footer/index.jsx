import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./footer.css";
import axios from 'axios';




function MyComponent() {
        const [data, setData] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get('http://localhost:5000/api/data'); // Replace with your backend URL
                    setData(response.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();
        }, []);


        return (
        <div>
            <h4>Data Status</h4>
            {data 
                ? <p>Backend Message: **{data.message}**</p> 
                : <p>Loading data from backend...</p>
            }
        </div>
    );

    
    }

const Footer=(pros)=>{
        

return(
    <>
    
    <footer class="site-footer">
        <div className="backend-data-display">
                <MyComponent />
                </div>
    <div class="footer-content">
        <div class="footer-section about">
            <h3>About Us</h3>
            
            <p>We are a dedicated team focused on providing the best possible service and solutions to our clients.</p>
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        <div class="footer-section links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div class="footer-section contact-info">
            <h3>Contact</h3>
            <p><i class="fas fa-map-marker-alt"></i> 123 Main Street, Anytown, USA</p>
            <p><i class="fas fa-phone"></i> +1 (555) 123-4567</p>
            <p><i class="fas fa-envelope"></i> info@example.com</p>
        </div>
    </div>
    <div class="footer-bottom">
        &copy; 2025 YourCompanyName | Designed by [Your Name]
    </div>
</footer>
    
    </>
)
}
export default Footer;