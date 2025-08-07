import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterMenu from "../components/FilterMenu";
import OffersGrid from "../components/OffersGrid";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Offers = () => {
     useEffect(() => {
    document.title = 'EarthBubs | Offers';
  }, []);
  const [selectedFilter, setSelectedFilter] = useState(null);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div className="text-base sm:text-lg font-medium flex flex-wrap items-center gap-1">
          <Link to="/" className="hover:underline">Home</Link>
          <span>›</span>
          <span>Products</span>
          <span>›</span>
          <Link to="" className="">Offers</Link>
        </div>

        <div className="w-full md:w-auto">
          <FilterMenu
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        </div>
      </div>

      <OffersGrid selectedFilter={selectedFilter} />

      <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
        <button className="border p-2 rounded-md text-sm hover:bg-gray-100">
          <FaChevronLeft />
        </button>
        {[1, 2, 3, 4, 5, 6, 7].map((page) => (
          <button
            key={page}
            className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100"
          >
            {page}
          </button>
        ))}
        <button className="border p-2 rounded-md text-sm hover:bg-gray-100">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Offers;


