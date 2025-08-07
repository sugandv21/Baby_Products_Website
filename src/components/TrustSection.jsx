import React from "react";
import dermatologist from "../assets/images/7722240-512 1.png";
import natural from "../assets/images/7722322-512 1.png";
import loved from "../assets/images/6566888-512 1.png";
import eco from "../assets/images/7454483-512 1.png";
import shipping from "../assets/images/7769334-512 1.png";

const trustData = [
  {
    img: dermatologist,
    title: "Dermatologist Approved",
    description: "Every product is tested and safe for even the most sensitive baby skin.",
  },
  {
    img: natural,
    title: "Natural & Non-Toxic Ingredients",
    description: "We use only gentle, plant based formulas free from harsh chemicals.",
  },
  {
    img: loved,
    title: "Loved by Thousands of Parents",
    description: "Real reviews, real results trusted by families across the country.",
  },
  {
    img: eco,
    title: "Eco-Friendly Promise",
    description: "From biodegradable packaging to cruelty-free manufacturing, we care for the planet as much as your baby.",
  },
  {
    img: shipping,
    title: "Fast & Reliable Shipping",
    description: "We deliver your baby’s essentials swiftly and safely because every moment counts.",
  },
];

const TrustSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-2">Why Parents Trust Us</h2>
      <p className="font-semibold text-lg md:text-2xl my-8">Designed with Love. Backed by Science.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {trustData.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl py-6 px-2 flex flex-col items-center bg-white hover:shadow-md transition border border-[#B0E4F4]"
          >
            <img src={item.img} alt={item.title} className="w-36 h-36" />
            <div className="bg-[#B0E4F4] px-2 py-3 w-[90%] h-[25vh] rounded-xl w-full text-center shadow-xl border border-gray-400">
              <h3 className="font-bold text-md md:text-base mb-1">{item.title}</h3>
              <p className="text-sm md:text-lg text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSection;
