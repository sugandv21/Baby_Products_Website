import React from "react";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const Testimonials = () => {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-2">Customer Testimonials</h2>
      <p className="text-2xl font-semibold my-8">Parent Favorites, Baby Approved</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl mx-auto mt-20">
        <img
          src={testimonial1}
          alt="Testimonial 1"
          className="w-[90%] mx-auto h-auto rounded-xl mt-5 lg:scale-100 hover:scale-105 transition duration-300"
        />
        <img
          src={testimonial2}
          alt="Testimonial 2"
          className="w-[90%] mx-auto h-auto rounded-xl lg:scale-110 z-10 hover:scale-[1.2] transition duration-300"
        />
        <img
          src={testimonial3}
          alt="Testimonial 3"
          className="w-[90%] mx-auto h-auto rounded-xl mt-5 lg:scale-100 hover:scale-105 transition duration-300"
        />
      </div>

      <div className="mt-10 flex justify-center gap-7">
        <span className="w-2.5 h-2.5 bg-[#00B4D8] rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-[#00B4D8] rounded-full"></span>
        <span className="w-4 h-4 bg-[#00B4D8] border border-black rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-[#00B4D8] rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-[#00B4D8] rounded-full"></span>
      </div>
    </section>
  );
};

export default Testimonials;


