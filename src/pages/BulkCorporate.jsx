import React from "react";
import {
  FaBoxOpen,
  FaGift,
  FaHandshake,
  FaBuilding,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const BulkCorporate = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-800">
          Bulk Purchase & Corporate Gifts
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Ideal solutions for businesses, institutions, and bulk gifting needs.
        </p>
      </div>

      {/* Info Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Bulk Purchase */}
        <div className="border border-cyan-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <FaBoxOpen className="text-cyan-600 text-3xl" />
            <h2 className="text-2xl font-semibold">Bulk Orders</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Looking to purchase baby care products in large quantities for hospitals, NGOs,
            daycare centers, or retail distribution? We offer special pricing and logistics support
            for bulk orders on diapers, soaps, strollers, feeding bottles, and more.
          </p>
        </div>

        {/* Corporate Gifts */}
        <div className="border border-cyan-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <FaGift className="text-cyan-600 text-3xl" />
            <h2 className="text-2xl font-semibold">Corporate Gifting</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Planning baby-themed gift hampers for employees, clients, or maternity celebrations?
            Customize thoughtful, safe, and elegant packages with EarthBubs. We curate gift
            bundles that leave lasting impressions — filled with baby essentials and love.
          </p>
        </div>

        {/* Partnership Opportunity */}
        <div className="border border-cyan-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <FaHandshake className="text-cyan-600 text-3xl" />
            <h2 className="text-2xl font-semibold">Partner With Us</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We collaborate with organizations, corporates, and institutions for long-term supply,
            maternity benefits, and wellness gifting. Let's build something meaningful together!
          </p>
        </div>

        {/* Custom Solutions */}
        <div className="border border-cyan-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <FaBuilding className="text-cyan-600 text-3xl" />
            <h2 className="text-2xl font-semibold">Tailored Solutions</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Every organization is unique. Whether you want branded packaging, delivery scheduling,
            or curated bundles — we’re flexible and happy to personalize the experience.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 text-center border-t pt-8 border-cyan-300">
        <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
        <p className="text-gray-600 mb-4">
          For inquiries, quotes, or collaborations, reach out to our corporate support team:
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-cyan-700 font-medium">
          <div className="flex items-center gap-2">
            <FaPhoneAlt /> <span>+91 1234567890</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope /> <span>corporate@earthbubs.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkCorporate;
