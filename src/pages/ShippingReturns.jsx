import React from "react";
import {
  FaTruck,
  FaUndo,
  FaCalendarCheck,
  FaShieldAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const ShippingReturns = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-800">
          Shipping & Return Policies
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Clear and trusted policies to support your seamless shopping journey.
        </p>
      </div>

      {/* Shipping Policy */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <FaTruck className="text-cyan-600 text-2xl" />
          <h2 className="text-2xl font-semibold">Shipping Policy</h2>
        </div>
        <ul className="list-disc ml-8 text-gray-700 space-y-2 text-base">
          <li>Orders are typically dispatched within 24–48 hours of confirmation.</li>
          <li>Standard delivery time is 3–6 business days depending on location.</li>
          <li>We offer **free shipping** on all prepaid orders above ₹499.</li>
          <li>Real-time order tracking is provided via email/SMS once shipped.</li>
        </ul>
      </div>

      {/* Return Policy */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <FaUndo className="text-cyan-600 text-2xl" />
          <h2 className="text-2xl font-semibold">Return & Replacement Policy</h2>
        </div>
        <ul className="list-disc ml-8 text-gray-700 space-y-2 text-base">
          <li>Returns accepted within 7 days for unused, sealed items only.</li>
          <li>Damaged or defective products can be replaced upon verification.</li>
          <li>Refunds will be processed within 7 working days to the original payment method.</li>
          <li>Return shipping is free for defective/damaged items.</li>
        </ul>
      </div>

      {/* Exceptions */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <FaShieldAlt className="text-cyan-600 text-2xl" />
          <h2 className="text-2xl font-semibold">Exceptions</h2>
        </div>
        <p className="text-gray-700 text-base leading-relaxed">
          For hygiene and safety reasons, certain items such as diapers, feeding bottles, soaps,
          and opened skincare products are **non-returnable** unless damaged or expired at delivery.
        </p>
      </div>

      {/* Delivery Timelines */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <FaCalendarCheck className="text-cyan-600 text-2xl" />
          <h2 className="text-2xl font-semibold">Delivery Timelines</h2>
        </div>
        <p className="text-gray-700 text-base leading-relaxed">
          Orders are processed every day except public holidays. You will receive email
          confirmation along with estimated delivery dates at checkout.
        </p>
      </div>

      {/* Support Section */}
      <div className="mt-12 text-center border-t border-cyan-300 pt-8">
        <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
        <p className="text-gray-600 mb-4">
          Reach out to our customer care for any shipping or return queries:
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 text-cyan-700 font-medium">
          <div className="flex items-center gap-2">
            <FaPhone /> <span>+91 1234567890</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope /> <span>support@earthbubs.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingReturns;
