import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../../data/offersData";
import { FaStar } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const thumbnails = [product.image, product.image, product.image, product.image];

  if (!product) return <div>Product not found</div>;

  const handleBuy = () => {
    navigate(`/checkout/${product.id}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Images */}
      <div className="flex gap-4">
        {/* Thumbnails */}
        <div className="flex flex-col gap-4">
          {thumbnails.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="thumb"
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 object-cover border rounded-md cursor-pointer ${
                selectedImage === img ? "ring-2 ring-cyan-500" : ""
              }`}
            />
          ))}
        </div>
        {/* Main Image */}
        <div className="flex-1 bg-[#e0f7ff] p-4 rounded-xl">
          <img src={selectedImage} alt={product.title} className="w-full object-contain" />
        </div>
      </div>

      {/* Right: Info */}
      <div>
        <p className="text-cyan-600 font-bold">Coupon: EB55</p>
        <h1 className="text-2xl font-bold mt-2">{product.title}</h1>

        {/* Rating & Stock */}
        <div className="flex items-center gap-3 text-yellow-400 mt-1">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar key={i} className={i < product.rating ? "" : "text-gray-300"} />
          ))}
          <span className="text-gray-600 text-sm">(18 Reviews)</span>
          <span className="text-green-600 font-medium text-sm">| In Stock</span>
        </div>

        <p className="text-gray-600 mt-4">
          Give your baby the gentle care they deserve with EarthBubs Premium Baby Pampers...
        </p>

        {/* Colors & Size */}
        <div className="mt-4 flex gap-10 items-center">
          <div>
            <p className="text-sm font-semibold">Colours:</p>
            <div className="flex gap-2 mt-1">
              <span className="w-4 h-4 rounded-full bg-blue-500 inline-block"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500 inline-block"></span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">Size:</p>
            <p>Free Size</p>
          </div>
        </div>

        {/* Price */}
        <div className="mt-6 flex items-center gap-6">
          <span className="text-gray-400 line-through font-semibold">₹{product.mrp}</span>
          <span className="text-xl font-bold text-black">Sale Price ₹{product.price}</span>
        </div>

        {/* Quantity */}
        <div className="flex items-center mt-4">
          <button
            className="w-8 h-8 text-xl border rounded-md"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            className="w-8 h-8 text-xl border rounded-md"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </button>
        </div>

        {/* Buy Button */}
        <button
          className="mt-6 bg-cyan-600 text-white font-bold px-6 py-3 rounded-md hover:bg-cyan-700 transition"
          onClick={handleBuy}
        >
          Buy Now
        </button>

        {/* Delivery Info */}
        <div className="mt-6 text-sm text-gray-700 space-y-2">
          <div className="flex gap-2 items-center">
            🚚 <span>Free Delivery</span>
          </div>
          <div className="flex gap-2 items-center">
            🔁 <span>7 Days Easy Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
