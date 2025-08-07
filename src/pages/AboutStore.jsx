import React from "react";
import logo from "../assets/images/logo.png";

const AboutStore = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Logo and Store Identity */}
        <div className="flex-shrink-0 flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="EarthBubs Logo"
            className="w-60 h-60 object-contain mb-4"
          />
          <h2 className="text-3xl font-bold">EarthBubs Store</h2>
        </div>

        {/* Store Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">Welcome to EarthBubs</h3>
          <p className="text-lg mb-4 leading-relaxed">
            EarthBubs is your trusted online destination for premium baby care essentials. Our
            store is built around the needs of modern parents who value quality, safety, and
            simplicity. Every product in our collection is handpicked to ensure your baby receives
            the gentlest care from day one.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Whether you're shopping for soft diapers, toxin-free skincare, feeding bottles,
            soothing soaps, comfy strollers, or adorable fashion for boys and girls — EarthBubs
            brings it all under one roof. We’re not just another baby store — we’re your parenting
            companion, helping you make confident choices with ease.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Backed by trusted brands, thoughtful product design, and a customer-first mindset, we
            aim to deliver a joyful, secure, and seamless shopping experience. EarthBubs is here to
            support your journey — one milestone at a time.
          </p>

          <h4 className="text-xl font-semibold mb-2">Why Shop with EarthBubs?</h4>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Curated collection of safe and reliable baby products</li>
            <li>Responsive, user-friendly website experience</li>
            <li>Exclusive offers and seasonal discounts</li>
            <li>Secure checkout with smooth order flow</li>
            <li>Fast delivery and responsive customer support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutStore;
