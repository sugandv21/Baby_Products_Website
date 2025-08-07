import React, { useEffect } from "react";
import ContactImg from "../assets/images/contact.png";
import { Link } from "react-router-dom";


const Contact = () => {
     useEffect(() => {
    document.title = 'EarthBubs | Contact';
  }, []);
  return (
    <section className="flex flex-col md:flex-row items-center justify-around gap-10 px-6 py-12 md:px-16 bg-[#f3f3f3]">
      <div className="text-base sm:text-lg font-medium flex flex-wrap items-center gap-1">
          <Link to="/" className="hover:underline">Home</Link>
          <span>›</span>
          <Link to="" className="">About</Link>
        </div>
      {/* Left: Contact Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={ContactImg}
          alt="Contact Us"
          className="w-3/4 h-auto rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Right: Contact Form */}
      <div className="w-full md:w-1/2 flex justify-center">
        <form className="w-full max-w-xl space-y-6">
          
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="firstName" className="text-sm font-semibold text-black">First Name</label>
              <input
                id="firstName"
                type="text"
                className="w-full border-b-2 border-cyan-400 py-2 focus:outline-none focus:border-cyan-600"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="lastName" className="text-sm font-semibold text-black">Last Name</label>
              <input
                id="lastName"
                type="text"
                className="w-full border-b-2 border-cyan-400 py-2 focus:outline-none focus:border-cyan-600"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-black">Email</label>
              <input
                id="email"
                type="email"
                className="w-full border-b-2 border-cyan-400 py-2 focus:outline-none focus:border-cyan-600"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="phone" className="text-sm font-semibold text-black">Phone Number</label>
              <input
                id="phone"
                type="text"
                className="w-full border-b-2 border-cyan-400 py-2 focus:outline-none focus:border-cyan-600"
              />
            </div>
          </div>

          {/* Subject Options */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-black">Select Subject</label>
            <div className="flex flex-wrap gap-4">
              {["General Inquiry", "Call Request", "Complaint", "Information"].map((subject, index) => (
                <label key={index} className="flex items-center space-x-2 text-sm">
                  <input type="radio" name="subject" value={subject} className="accent-cyan-400" />
                  <span>{subject}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-black">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message..."
              className="w-full border-b-2 border-cyan-400 focus:outline-none focus:border-cyan-600 resize-none px-2 py-2"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-cyan-400 hover:bg-cyan-500 transition-colors px-8 py-3 rounded-md text-black font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

