import React, { useMemo } from "react";
import ProductCard from "./ProductCard";
import { boysfasData } from "../data/products";

const BoysFashion = ({ selectedFilter }) => {
  const getFilteredProducts = () => {
    const products = boysfasData.filter((p) => p.id >= 201 && p.id <= 206);

    if (!selectedFilter) return products;

    if (selectedFilter.includes("Price")) {
      const numbers = selectedFilter.match(/\d+/g);
      if (numbers && numbers.length === 2) {
        const [min, max] = numbers.map(Number);
        return products.filter((p) => p.price >= min && p.price <= max);
      }
      return products;
    }

    if (selectedFilter.includes("Free Shipping")) {
      return products.slice(0, 6);
    }

    if (selectedFilter.includes("Discounts")) {
      return products.filter((p) => p.mrp > p.price);
    }

    return products;
  };

  const filtered = useMemo(() => getFilteredProducts(), [selectedFilter]);

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

export default BoysFashion;
