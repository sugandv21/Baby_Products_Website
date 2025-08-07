import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import offersData from "../data/offersData";
import pampersData from "../data/pampersData";
import girlsfasData from "../data/girlsfasData";
import soapData from "../data/soapData";
import strollerData from "../data/strollerData";
import bottleData from "../data/bottleData";
import boysfasData from "../data/boysfasData";
import deliveryIcon from "../assets/images/delivery.png";
import returnIcon from "../assets/images/return.png";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  useEffect(() => {
    document.title = 'EarthBubs | Check Out | Product Details';
  }, []);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();
  const allProducts = [...offersData, ...pampersData, ...girlsfasData, ...boysfasData, ...soapData, ...strollerData, ...bottleData];
  const product = allProducts.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleInputChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val > 0) {
      setQuantity(val);
    } else if (e.target.value === "") {
      setQuantity("");
    }
  };

  const handleBuyNow = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      image: mainImage,
      price: product.price,
      quantity,
    };

    addToCart(cartItem);
    navigate("/cart");
  };

  return (
     <div className="max-w-8xl mx-auto">
      <div className="text-lg font-medium space-x-2 p-10">
        <Link to="/" className="hover:underline">Home</Link>
        <span>›</span>
        <span className="">Products</span>
        <span>›</span>
        <Link to="" className="">CheckOut</Link>
      </div>
         <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 py-6 px-4 sm:px-6 lg:px-20">
      
      {/* LEFT SIDE */}
      <div className="w-full lg:w-[65%] rounded-xl p-4 flex flex-col items-center">
        {/* Thumbnails + Main Image */}
        <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-6 mt-6">
          {/* Thumbnails */}
          <div className="flex lg:flex-col flex-wrap gap-3 lg:gap-4 justify-center ">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumb ${index}`}
                onClick={() => setMainImage(img)}
                className={`w-[80px] h-[80px] sm:w-[90px] sm:h-[100px] lg:w-[120px] lg:h-[130px] object-cover rounded-xl border-2 border-amber-500 cursor-pointer ${
                  mainImage === img ? "border-5 border-amber-900" : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="relative flex-1 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border shadow-md flex justify-center items-center bg-[#B0E4F4]">
            <img
              src={mainImage}
              alt="Main product"
              className="w-[90%] h-full object-contain"
            />
            {/* Coupon Code */}
            <div className="absolute top-0 right-0 bg-[#00B4D8] px-3 py-2 rounded-bl-xl text-sm font-semibold">
              Coupon: EB55
            </div>
          </div>
        </div>

        {/* Dots Below Main Image */}
        <div className="flex gap-3 mt-6">
          {product.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setMainImage(img)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                mainImage === img ? "bg-[#00b4d8] border border-black scale-110" : "bg-[#00b4d8]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-[35%] space-y-4 lg:space-y-3 text-[16px] sm:text-[17px] leading-relaxed mt-8 lg:mt-0">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-2xl font-bold">
          New Born Pampers Active Baby Diapers, Small, 22 Count & Pampers Baby Dry Diapers
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-2 text-yellow-400">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar key={i} className={i < product.rating ? "" : "text-gray-300"} />
          ))}
          <span className="text-gray-600 text-sm font-medium">(18 Reviews)</span>
          <span className="text-green-500 text-sm font-medium border-l pl-2 border-gray-300">
            In Stock
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 font-semibold text-base">
          Give your baby the gentle care they deserve with EarthBubs Premium Baby Pampers, designed for
          all-day comfort and protection. Crafted with ultra-soft, breathable materials, these diapers keep
          your little one dry, happy, and rash-free. The super-absorbent core locks in moisture for up to 12
          hours of leak-free protection, while the flexible waistband ensures a snug yet comfy fit as your
          baby moves and plays. Plus, a built-in wetness indicator makes changing time easier than ever.
        </p>

        {/* Colors & Size */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-10 text-sm sm:text-base font-medium">
          <div className="flex items-center gap-4">
            <p className="mb-0">Colours:</p>
            <div className="flex gap-2">
              <span className="w-5 h-5 bg-cyan-400 rounded-full"></span>
              <span className="w-5 h-5 bg-pink-500 rounded-full"></span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <p className="mb-0">Size:</p>
            <span>Free Size</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6 mt-2">
          <span className="text-gray-400 font-bold line-through text-lg">
            MRP ₹{product.mrp.toFixed(2)}
          </span>
          <span className="text-2xl font-bold text-black">
            Sale Price ₹{product.price.toFixed(2)}
          </span>
        </div>

        {/* Quantity & Buy */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <div className="flex items-center gap-2 border px-3 py-2 rounded-xl shadow-sm">
            <button
              onClick={decrement}
              className="w-9 h-9 border rounded-lg flex items-center justify-center text-xl font-bold bg-[#b0e4f4]"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleInputChange}
              min="1"
              className="w-14 text-center rounded-lg py-1 text-base sm:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              onClick={increment}
              className="w-9 h-9 border rounded-lg flex items-center justify-center text-xl font-bold bg-[#b0e4f4]"
            >
              +
            </button>
          </div>

          <button
            onClick={handleBuyNow}
            className="bg-[#00b4d8] hover:bg-[#009ec2] text px-6 sm:px-8 py-2 rounded-xl font-semibold text-base shadow mt-2 sm:mt-0"
          >
            Buy Now
          </button>
        </div>

        {/* Delivery Info */}
        <div className="border border-cyan-500 mt-6 rounded-lg divide-y">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-3 px-4 py-3">
            <div className="flex items-center gap-3">
              <img src={deliveryIcon} alt="Delivery" className="w-6 sm:w-8 h-6 sm:h-8" />
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-sm text-gray-800 font-semibold underline">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-3 px-4 py-3">
            <div className="flex items-center gap-3">
              <img src={returnIcon} alt="Return" className="w-6 sm:w-8 h-6 sm:h-8" />
              <div>
                <p className="font-semibold">Return Delivery</p>
                <p className="text-sm text-gray-800 font-semibold">
                  Free 7 Days Delivery Returns.{" "}
                  <Link to="/shipping" className="underline cursor-pointer">Details</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     </div>
   
  );
};

export default ProductDetail;

