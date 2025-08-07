import React from "react";
import ProductCard from "./ProductCard";
import offersData from "../data/offersData";

const OffersGrid = ({ selectedFilter }) => {
  const getFilteredProducts = () => {
    if (!selectedFilter) return offersData;

    if (selectedFilter.includes("Price")) {
      const [min, max] = selectedFilter
        .match(/\d+/g)
        .map((num) => parseInt(num));
      return offersData.filter((p) => p.price >= min && p.price <= max);
    }

    if (selectedFilter.includes("Free Shipping")) {
      return offersData.slice(0, 6); // Example logic
    }

    if (selectedFilter.includes("Discounts")) {
      return offersData.filter((p) => p.mrp > p.price);
    }

    return offersData;
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

export default OffersGrid;
