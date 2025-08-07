import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#b0e4f4] text-black text-sm md:text-base">
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* KNOW */}
        <div>
          <h3 className="uppercase font-semibold border-b border-black pb-1 mb-3">Know</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link to="/about-store" className="hover:underline">About Earthbubs Store</Link>
            </li>
            <li>
              <Link to="/gifts" className="hover:underline">Bulk Purchase & Corporate Gifts</Link>
            </li>
          </ul>
        </div>

        {/* TERMS & CONDITIONS */}
        <div>
          <h3 className="uppercase font-semibold border-b border-black pb-1 mb-3">Terms & Conditions</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/shipping" className="hover:underline">Shipping & Return Policies</Link>
            </li>
            <li>
              <Link to="/policy" className="hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/#faq" className="hover:underline">FAQ’s</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT US */}
        <div>
          <h3 className="uppercase font-semibold border-b border-black pb-1 mb-3">Contact Us</h3>
          <ul className="space-y-2">
            <li>For Sale: <Link to="/contacts" className="hover:underline">Earthbubs@co.in</Link></li>
            <li>Call: <Link to="/contacts" className="hover:underline">+91 1234567890</Link></li>
            <li>
  For Complaints: <Link to="/contacts" className="hover:underline">1800 202 2222</Link>
</li>
            <li>
              Chat Time: Our Team is Available<br />
              From Monday to Saturday from<br />
              9.00AM to 8.00PM
            </li>
           <li className="inline-flex flex-row items-center gap-2 whitespace-nowrap">
  For Complaints: <Link to="/contacts" className="hover:underline">
    Ebcustomercare.com
  </Link>
</li>

          </ul>
        </div>

        {/* FOLLOW US */}
        <div>
          <h3 className="uppercase font-semibold border-b border-black pb-1 mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-lg hover:scale-110 transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-lg hover:scale-110 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-lg hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t border-black mx-4 md:mx-12" />

      <div className="text-center py-4 text-gray-700 text-sm md:text-base">
        Copyright © 2025 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
