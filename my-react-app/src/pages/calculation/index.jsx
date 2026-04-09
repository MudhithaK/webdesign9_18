import React, { useState, useEffect } from 'react';
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import "./WeddingCalculator.css";
import axios from 'axios';



const Cal = () => {
  const [hotels, setHotels] = useState([]);
  const [hotelType, setHotelType] = useState("");
  const [cakes, setCakes] = useState([]);
  const [cakeType, setCakeType] = useState("");
  const [wcakes, setWCakes] = useState([]);
  const [wcakeType, setWCakeType] = useState("");
  const [decorations, setDecorations] = useState([]);
  const [decorationType, setDecorationType] = useState("");
  const [dresses, setDresses] = useState([]);
  const [dressType, setDressType] = useState("");
  const [makeup, setMakeup] = useState([]);
  const [makeupType, setMakeupType] = useState("");
  const [music, setMusic] = useState([]);
  const [musicType, setMusicType] = useState("");
  const [costPerGuest, setCostPerGuest] = useState("");
  const [guests, setGuests] = useState("");
  const [decoration, setDecoration] = useState("");
  const [photography, setPhotography] = useState("");
  const [entertainment, setEntertainment] = useState("");
  const [cakeCost, setCakeCost] = useState("");
  const [wcakeCost, setWCakeCost] = useState("");
  const [decorationCost, setDecorationCost] = useState("");
  const [dressCost, setDressCost] = useState("");
  const [makeupCost, setMakeupCost] = useState("");
const [musicCost, setMusicCost] = useState("");
  const totalBudget =
    Number(guests * costPerGuest) +
    Number(decorationCost) +
    Number(cakeCost) +
    Number(dressCost)+
    Number(makeupCost)+
    Number(musicCost);
  const total = Number(guests) * Number(costPerGuest);


  useEffect(() => {
    axios.get('http://localhost:5000/api/hotels')
      .then(res => {
        console.log("HOTELS:", res.data); // debug
        setHotels(res.data);
      })
      .catch(err => console.log(err));
  }, []);


useEffect(() => {
    const selectedHotel = hotels.find(
      (hotel) => hotel.Htype === hotelType
    );

    if (selectedHotel) {
      setCostPerGuest(selectedHotel.price);
    } else {
      setCostPerGuest("");
    }
  }, [hotelType, hotels]);




  useEffect(() => {
    axios.get('http://localhost:5000/api/cakes')
      .then(res => {
        console.log("CAKES:", res.data); // debug
        setCakes(res.data);
      })
      .catch(err => console.log(err));
  }, []);


useEffect(() => {
    const selectedCake = cakes.find(
      (cake) => cake.Caketype === cakeType
    );

    if (selectedCake) {
      setCakeCost(selectedCake.price);
    } else {
      setCakeCost("");
    }
  }, [cakeType, cakes]);


  


// decoration data connection..

  useEffect(() => {
    axios.get('http://localhost:5000/api/decorations')
      .then(res => {
        console.log("DECORATIONS:", res.data); // debug
        setDecorations(res.data);
      })
      .catch(err => console.log(err));
  }, []);


useEffect(() => {
    const selectedDecoration = decorations.find(
      (decoration) => decoration.Decotype === decorationType
    );

    if (selectedDecoration) {
      setDecorationCost(selectedDecoration.price);
    } else {
      setDecorationCost("");
    }
  }, [decorationType, decorations]);



// dress data conection..

  useEffect(() => {
    axios.get('http://localhost:5000/api/dresses')
      .then(res => {
        console.log("DRESSES:", res.data); // debug
        setDresses(res.data);
      })
      .catch(err => console.log(err));
  }, []);


useEffect(() => {
    const selectedDress = dresses.find(
      (dress) => dress.Dresstype === dressType
    );

    if (selectedDress) {
      setDressCost(selectedDress.price);
    } else {
      setDressCost("");
    }
  }, [dressType, dresses]);












  useEffect(() => {
    axios.get('http://localhost:5000/api/makeup')
      .then(res => {
        console.log("MAKEUP:", res.data); // debug
        setMakeup(res.data);
      })
      .catch(err => console.log(err));
  }, []);


useEffect(() => {
    const selectedMakeup = makeup.find(
      (makeup) => makeup.MUtype === makeupType
    );

    if (selectedMakeup) {
      setMakeupCost(selectedMakeup.price);
    } else {
      setMakeupCost("");
    }
  }, [makeupType, makeup]);

/* <div className="form-group">
      <label>Cakes</label>
      <select onChange={(e) => setCakeType(e.target.value)}>
      <option value="">Select Cake</option>
      <option value="Bronze Package(2 x 2 x 0.75)">Bronze package</option>
      <option value="Silver Package(2 x 1.25 x 1)">Silver Package</option>
      <option value="Gold Package(2 x 1.25 x 1)">Gold Package</option>
      <option value="banquet">Simple Design</option>
      
  </select>
    </div>
    <div className="form-group">
      <label>Cost for Cake (LKR)</label>
      <input type="number"value={cakeCost || 0} readOnly />
    </div>
    
  */








  useEffect(() => {
    axios.get('http://localhost:5000/api/music')
      .then(res => {
        console.log("MUSIC:", res.data); // debug
        setMusic(res.data);
      })
      .catch(err => console.log(err));
  }, []);


useEffect(() => {
    const selectedMusic = music.find(
      (music) => music.Musictype === musicType
    );

    if (selectedMusic) {
      setMusicCost(selectedMusic.price);
    } else {
      setMusicCost("");
    }
  }, [musicType, music]);
  


  return (
    <>
      <Header />

      <div className="budget-section">
  <h1 className="title">Wedding Budget Calculator</h1>

  <form className="budget-form">
    <div className="form-group">
      <label>Hotel / Venue Type</label>
      <select onChange={(e) => setHotelType(e.target.value)}>
      <option value="">Select Hotel Type</option>
      <option value="5 Star Hotel(Bronze)">5 Stars Hotel(Bronze)</option>
      <option value="5 Stars Hotel (Silver)">5 Stars Hotel(Silver)</option>
      <option value="5 Stars Hotel (Gold)">5 Stars Hotel(Gold)</option>
      <option value="5 Stars Hotel (Platinum)">5 Star Hotel(Platinum)</option>
      <option value="4 Stars Hotel (Bronze)">4 Stars Hotel(Bronze)</option>
      <option value="4 Stars Hotel (Silver)">4 Stars Hotel(Silver)</option>
      <option value="4 Stars Hotel (Gold)">4 Stars Hotel(Gold)</option>
      <option value="4 Stars Hotel (Platinum)">4 Stars Hotel(Platinum)</option>
      <option value="3 Stars Hotel(function menu 1)">3 Stars Hotel(function menu 1)</option>
      <option value="3 Stars Hotel(function menu 2)">3 Stars Hotel(function menu 2)</option>
      <option value="3 Star Hotel(function menu 3)">3 Stars Hotel(function menu 3)</option>
      <option value="Normal Hotel(Bronze)">Normal Hotel(Bronze)</option>
      <option value="Normal Hotel(Silver)">Normal Hotel(Silver)</option>
      <option value="Normal Hotel(Gold)">Normal Hotel(Gold)</option>
      <option value="Normal Hotel(Platinum)">Normal Hotel(Platinum)</option>
      
      <option value="outdoor">Outdoor / Garden</option>
  </select>
    </div>
    <div className="form-group">
      <label>Cost per Guest</label>
      <input type="number" value={costPerGuest || 0} readOnly />
    </div>

    <div className="form-group">
      <label>Number of Guests</label>
      <input type="number" value={guests}
    onChange={(e) => setGuests(e.target.value)} />
    </div>
    <div className="form-group">
      <label>Total cost for Hotel (LKR)</label>
      <input type="number" value={total}/>
    </div>

    <div className="form-group">
      <label>Decoration Type</label>
      <select onChange={(e) => setDecorationType(e.target.value)}>
      <option value="">Select Decoration Type</option>
      <option value="Basic Package">Basic Package</option>
      <option value="Standard Package">Standard Package</option>
      <option value="Premium Packege">Premium Packege</option>
  </select>
    </div>
    <div className="form-group">
      <label>Cost for Decoration (LKR)</label>
      <input type="number" value={decorationCost || 0} readOnly />
    </div>

    <div className="form-group">
      <label>Photography & Videography packege</label>
      <select onChange={(e) => setPhotographyType(e.target.value)}>
      <option value="banquet">Banquet Hall</option>
      <option value="outdoor">Outdoor / Garden</option>
  </select>
    </div>
    <div className="form-group">
      <label>Cost for Photography (LKR)</label>
      <input type="number" />
    </div>

    <div className="form-group">
      <label>Dress Type</label>
      <select onChange={(e) => setDressType(e.target.value)}>
      <option value="">Select Dress Type</option>
      <option value="Luxury Wedding Planning">Luxury Wedding Planning</option>
      <option value="Middle class Planning">Middle class Planning</option>
      <option value="Simple budget Planning">Simple budget Planning</option>
      <option value="Very Simple budget Planning">Very Simple budget Planning</option>
      <option value="Traditional Planning">Traditional Planning</option>
      
  </select>
    </div>
    <div className="form-group">
      <label>Cost for Dressing (LKR)</label>
      <input type="number" value={dressCost || 0} readOnly />
    </div>

    
    <div className="form-group">
      <label>Wedding Cake</label>
      <select onChange={(e) => setCakeType(e.target.value)}>
      <option value="">Select Cake design</option>
      <option value="Simple one-layer cake">Simple one-layer cake</option>
      <option value="Simple two-layer cake">Simple two-layer cake</option>
      <option value="Three layers, moderately decorated">Three layers, moderately decorated</option>
      <option value="Sugar flower design">Sugar flower design</option>
      
  </select>
    </div>
    <div className="form-group">
      <label>Cost for Wedding Cake (LKR)</label>
      <input type="number" value={cakeCost || 0} readOnly/>
    </div>

    <div className="form-group">
      <label>Makeup</label>
      <select onChange={(e) => setMakeupType(e.target.value)}>
      <option value="">Select Makeup Type</option>
      <option value="Lowest Price Tier">Lowest Price Tier</option>
      <option value="Middle Price Tier">Middle Price Tier</option>
      <option value="Highest Price Tier">Highest Price Tier</option>
  </select>
    </div>
    <div className="form-group">
      <label>Cost for Makeup (LKR)</label>
      <input type="number" value={makeupCost || 0} readOnly />
    </div>

    <div className="form-group">
      <label>Entertainment / Music packege</label>
      <select onChange={(e) => setMusicType(e.target.value)}>
      <option value="">Select Music Package</option>
      <option value="Budget Package">Budget Package</option>
      <option value="Silver Package">Silver Package</option>
      <option value="Gold Package">Gold Package</option>
      <option value="Platinum Package">Platinum Package</option>
      <option value="Wedding Band(Low cost)">Wedding Band(Low cost)</option>
      <option value="Wedding Band(High cost)">Wedding Band(High cost)</option>
      <option value="DJ(Low cost)">DJ(Low cost)</option>
      <option value="DJ(High cost)">DJ(High cost)</option>
  </select>
    </div>
    <div className="form-group">
      <label>Cost for entertainment (LKR)</label>
      <input type="number" value={musicCost || 0} readOnly />
    </div>
  </form>

  <div className="total-budget" value={totalBudget || 0} readOnly >
    Total Budget: <span>LKR {totalBudget?.toLocaleString()}</span>
  </div>
</div>

      <Footer />
    </>
  );
};

export default Cal;
