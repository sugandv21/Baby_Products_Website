import React from "react";
import ProductCard from "./ProductCard";
import bottleData from "../data/bottleData";

const StollerGrid = ({ selectedFilter }) => {
  const getFilteredProducts = () => {
    const pampersOnly = bottleData.filter((p) => p.id >= 601 && p.id <= 606);

    if (!selectedFilter) return pampersOnly;

    if (selectedFilter.includes("Price")) {
      const numbers = selectedFilter.match(/\d+/g);
      if (numbers && numbers.length === 2) {
        const [min, max] = numbers.map((num) => parseInt(num));
        return pampersOnly.filter((p) => p.price >= min && p.price <= max);
      }
      return pampersOnly;
    }

    if (selectedFilter.includes("Free Shipping")) {
      return pampersOnly.slice(0, 6);
    }

    if (selectedFilter.includes("Discounts")) {
      return pampersOnly.filter((p) => p.mrp > p.price);
    }

    return pampersOnly;
  };

  const filtered = getFilteredProducts();

  return (
    <div className="flex flex-wrap justify-center gap-28 my-14">
      {filtered.length > 0 ? (
        filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-gray-500">No products match the selected filter.</p>
      )}
    </div>
  );
};

export default StollerGrid;

