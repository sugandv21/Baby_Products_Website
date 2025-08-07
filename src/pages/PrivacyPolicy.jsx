import React from "react";
import {
  FaLock,
  FaUserShield,
  FaInfoCircle,
  FaClock,
  FaUserSecret,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-800">
          Privacy Policy
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Your privacy is important to us. Learn how we handle your data.
        </p>
      </div>

      {/* Data Collection */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <FaInfoCircle className="text-cyan-600 text-2xl" />
          <h2 className="text-2xl font-semibold">1. What We Collect</h2>
        </div>
        <p className="text-base leading-relaxed text-gray-700">
          We collect personal data you provide, including:
        </p>
        <ul className="list-disc ml-8 mt-2 text-gray-700 space-y-1">
          <li>Name and contact information (email, phone)</li>
          <li>Shipping and billing address</li>
          <li>Purchase history and preferences</li>
          <li>Device and browser data (via cookies)</li>
        </ul>
      </div>

      {/* Use of Data */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <FaUserShield className="text-cyan-600 text-2xl" />
          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
        </div>
        <ul className="list-disc ml-8 text-gray-700 space-y-2 text-base">
          <li>To fulfill orders and process payments</li>
          <li>To improve user experience and product offerings</li>
          <li>To send order confirmations, updates, and promotional emails</li>
          <li>To personalize recommendations and site content</li>
        </ul>
      </div>

      {/* Data Protection */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <FaLock className="text-cyan-600 text-2xl" />
          <h2 className="text-2xl font-semibold">3. Data Protection & Security</h2>
        </div>
        <p className="text-base text-gray-700 leading-relaxed">
          We use encryption and secure protocols to protect your data. All transactions are processed via trusted third-party gateways. We do not store sensitive payment information on our servers.
        </p>
      </div>

      {/* Retention */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <FaClock className="text-cyan-600 text-2xl" />
          <h2 className="text-2xl font-semibold">4. Data Retention</h2>
        </div>
        <p className="text-base text-gray-700 leading-relaxed">
          We retain your data only as long as necessary to fulfill the purpose for which it was collected and as required by applicable laws.
        </p>
      </div>

      {/* Third-Party Sharing */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <FaUserSecret className="text-cyan-600 text-2xl" />
          <h2 className="text-2xl font-semibold">5. Sharing with Third Parties</h2>
        </div>
        <p className="text-base text-gray-700 leading-relaxed">
          We do not sell your personal information. Data may be shared with service providers (like shipping partners and payment processors) solely to fulfill your order or improve service quality.
        </p>
      </div>

      {/* Contact */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <FaEnvelopeOpenText className="text-cyan-600 text-2xl" />
          <h2 className="text-2xl font-semibold">6. Contact Us</h2>
        </div>
        <p className="text-base text-gray-700 leading-relaxed">
          For questions about our Privacy Policy or your personal data, contact us at:
        </p>
        <p className="text-cyan-700 mt-2 font-medium">
          Email: privacy@earthbubs.com
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
