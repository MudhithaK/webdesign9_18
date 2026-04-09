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



function HotelDat() {
    const [hotels, setHotel] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/hotels')
            .then(hotels => setHotel(hotels.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Hotel Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {hotels.map((hotel) => (
                        <tr key={hotel._id}>
                            <td>{hotel.Htype}</td>
                            <td>{hotel.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const Footer=(pros)=>{

    
        

return(
    <>
    
    <footer class="site-footer">
        <div className="backend-data-display">
                </div>
    <div class="footer-content">
        <div class="footer-section about">
            <h3>About Us</h3>
            
            <p>We are a dedicated team focused on providing the best possible service and solutions to your Wedding.</p>
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        <div class="footer-section links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div class="footer-section contact-info">
            <h3>Contact</h3>
            <p><i class="fas fa-map-marker-alt"></i> Sri Lanka</p>
            <p><i class="fas fa-phone"></i> +94 (11)1234098</p>
            <p><i class="fas fa-envelope"></i> info@weddingplain.com</p>
        </div>
    </div>
    <div class="footer-bottom">
        &copy; 2025 WeddingPlaning | Designed by [wp]
    </div>
</footer>
    
    </>
)
}
export default Footer;