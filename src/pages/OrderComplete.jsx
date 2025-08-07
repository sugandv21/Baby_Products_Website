import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import orderImage from '../assets/images/order.png';
import { Link } from 'react-router-dom';

const OrderComplete = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();

      // Calculate the center position of the image relative to the viewport
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 80,
        startVelocity: 40,
        spread: 100,
        origin: { x, y },
        scalar: 1.2,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="text-lg font-medium space-x-2 pl-10 pt-10">
        <Link to="/" className="hover:underline">Home</Link>
        <span>›</span>
        <span>Add to Cart</span>
        <span>›</span>
        <span>Payments</span>
        <span>›</span>
        <span>Order Complete</span>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
        {/* Image */}
        <img
          ref={imageRef}
          src={orderImage}
          alt="Order Complete"
          className="w-[500px] h-[500px] object-contain"
        />

        {/* Text */}
        <p className="mt-1 text-lg text-gray-600">
          Order ID: <strong>OCD1232</strong>
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          Your Order Is Completed!
        </h1>
        <p className="mt-4 text-gray-500 max-w-md">
          Thank you for your order! Your order is being processed and will be completed within 3–6 hours. You will receive an email confirmation when your order is completed.
        </p>
      </div>
    </>
  );
};

export default OrderComplete;
