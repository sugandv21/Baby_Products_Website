import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/images/arrow.png";
import diapersImg from "../assets/images/diapers.png";
import dressImg from "../assets/images/Frame 1171274995.png";
import soapImg from "../assets/images/Frame 1171275015.png";
import strollerImg from "../assets/images/Frame 14.png";

const categories = [
  {
    title: "Diapers & Pampers",
    image: diapersImg,
    path: "/products/pampers",
  },
  {
    title: "Baby Dress",
    image: dressImg,
    path: "/products/girls-fashion",
  },
  {
    title: "Baby Soap",
    image: soapImg,
    path: "/products/soap",
  },
  {
    title: "Baby Stroller & Prams",
    image: strollerImg,
    path: "/products/stroller",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Featured Categories</h2>
        <p className="text-lg md:text-2xl my-8 font-semibold">Everything Your Baby Needs</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white min-h-[400px] max-w-[280px] border-2 border-blue-200 rounded-xl shadow-md overflow-hidden flex flex-col items-center relative transition hover:scale-105 duration-300"
          >
            {/* Product Image */}
            <div className="w-full p-4 my-8">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg w-full h-[260px] object-cover mx-auto"
              />
            </div>

            {/* Arrow Link */}
            <Link
              to={item.path}
              aria-label={`Go to ${item.title}`}
              className="absolute top-[328px] -right-[35px] z-50 p-2 hover:scale-110 transition-transform duration-200"
            >
              <img src={arrow} alt="Navigate" className="w-[95px] h-[95px]" />
            </Link>

            {/* Bottom Info Box with Clip */}
            <div className="w-full bg-[#B0E4F4] flex justify-between items-center px-4 py-5 rounded-b-xl clip-bend1">
              <p className="text-lg md:text-lg font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
