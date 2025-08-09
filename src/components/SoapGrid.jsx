import React from "react";
import ProductCard from "./ProductCard";
import { soapData } from "../data/products";

const SoapGrid = ({ selectedFilter }) => {
  const getFilteredProducts = () => {
    const soapOnly = soapData.filter((p) => p.id >= 401 && p.id <= 406);

    if (!selectedFilter) return soapOnly;

    if (selectedFilter.includes("Price")) {
      const numbers = selectedFilter.match(/\d+/g);
      if (numbers && numbers.length === 2) {
        const [min, max] = numbers.map(Number);
        return soapOnly.filter((p) => p.price >= min && p.price <= max);
      }
      return soapOnly;
    }

    if (selectedFilter.includes("Free Shipping")) {
      return soapOnly.slice(0, 6);
    }

    if (selectedFilter.includes("Discounts")) {
      return soapOnly.filter((p) => p.mrp > p.price);
    }

    return soapOnly;
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

export default SoapGrid;
