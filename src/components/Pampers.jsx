import React from 'react';
import { Link } from "react-router-dom";
import pamper from '../assets/images/mee-mee-breathable-premium-baby-diaper-pants-wetness-indicator-leak-proof-edges-s-96-pieces-product-images-orvu7oy8rid-p602697802-3-202306252316 1.png'
import arrow from "../assets/images/leftarrow.png";
const Pampers = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      
      <div className="flex flex-col lg:flex-row items-start justify-between gap-20 max-w-8xl mx-auto">
        
        <div className="w-full lg:w-1/2">
          <img
            src={pamper} 
            alt="Baby Stroller"
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:text-left">
          <h3 className="text-5xl font-bold text-gray-900 mb-4">Pampers</h3>
          <p className="text-gray-700 text-2xl mb-6 leading-relaxed">
            Keep your baby dry, comfy and smiling all day with our ultra-soft diapers. Designed with liak-lock technology and breathable layers for extra protection.
            Gentle on delicate skin, perfect for day and night comfort.
          </p>
          <Link to="/products/pampers">
   <button className="bg-[#B0E4F4] text-2xl text-gray-700 font-semibold py-3 px-6 rounded-full  hover:bg-[#a0d8ec] transition flex items-center gap-2">
    Buy Now
    <img src={arrow} alt="arrow" className="w-5 h-5" />
  </button>
</Link>
        </div>
      </div>
    </section>
  );
};

export default Pampers;


