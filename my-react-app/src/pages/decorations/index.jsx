import React from 'react'
import "./dec.css";
import Header from '../../Components/header';

const Decoration = () => {
  return (
    <>
    <Header/>
    <div className='dress'>
      <h1>Decorate your Wedding hall</h1>
      <p>packages for hall,table and chairs decoration</p>
      <div className='dc1'>
        <div className='dc2'>
          <h3>Basic package</h3>
          <div className='dc3'>
          
          <p>Floral arrangements-Rs 30 000</p>
          <p> basic lighting-Rs 20 000</p>
          <p>Sub Basic decor cost : Rs 50 000</p>
          <p>Table clothes and linen-Rs 1000</p>
          <p>Chair covers and sashes-Rs 500 per chair</p>
          <p>Centerpieces-3000 for each</p>
          </div>

        </div>

        <div className='dc2'>
          <h3>Standard Package</h3>
          <div className='dc3'>
          
          <p>Floral arrangements-Rs 100 000</p>
          <p>basic lighting-Rs 50 000</p>
          <p>banners and additional decor items-Rs 80 000</p>
          <p>Sub standard decor cost : Rs 230 000</p>
          <p>Chair covers and sashes-Rs 800 per chair</p>
          <p>Table clothes and linen-Rs 2000</p>
          <p>Centerpieces-5 000 for each</p>
          </div>
        </div>

        <div className='dc2'>
          <h3>Premium Package</h3>
          <div className='dc3'>
          
          <p>Luxury floral arrangements-Rs 300 000</p>
          <p>basic lighting-Rs 150 000</p>
          <p>banners and additional decor items-Rs 100 000</p>
          <p>Sub premium decor cost: Rs 550 000</p>
          <p>Centerpieces-8 000 for each</p>
          <p>Table clothes and linen-Rs 4000</p>
          <p>Chair covers and sashes-Rs 1500 per chair</p>
          </div>

        </div>

      </div>
    </div>
  
    </>
  )
}
export default Decoration;