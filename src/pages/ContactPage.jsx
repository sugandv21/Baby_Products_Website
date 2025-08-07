import React, { useState } from "react";
import contactImage from "../assets/images/contact.png";
import { Link } from "react-router-dom";


const ContactPage = () => {
  useEffect(() => {
    document.title = 'EarthBubs | Contact';
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsSubmitted(true);
    }
  };

  const closeModal = () => setIsSubmitted(false);

  return (
    <div className="p-4 md:p-8 lg:px-20 lg:py-8">
<div className="text-base sm:text-lg font-medium flex flex-wrap items-center gap-1 my-8">
          <Link to="/" className="hover:underline">Home</Link>
          <span>›</span>
          <Link to="" className="">Contact</Link>
        </div>
      <div className="flex flex-col lg:flex-row gap-1">
        <div className="w-full lg:w-[50%]">
          <img
            src={contactImage}
            alt="Contact Info"
            className="w-full h-[100vh] object-contain rounded-xl max-h-[500px]"
          />
        </div>

        <form onSubmit={handleSubmit} className="w-full lg:w-[48%] mt-4 lg:mt-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                className="border-b-2 border-cyan-400 w-full p-2 focus:outline-none"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="border-b-2 border-cyan-400 w-full p-2 focus:outline-none"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="border-b-2 border-cyan-400 w-full p-2 focus:outline-none"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="border-b-2 border-cyan-400 w-full p-2 focus:outline-none"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-semibold mb-2">Select Subject?</label>
            <div className="flex flex-wrap gap-6">
              {["General Inquiry", "Call Request", "Complaint", "Information"].map((subj) => (
                <label key={subj} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subject"
                    value={subj}
                    checked={formData.subject === subj}
                    onChange={handleChange}
                    className="accent-cyan-400"
                  />
                  <span className="text-sm">{subj}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows={2}
              placeholder="Write your message.."
              className="border-b-2 border-cyan-400 w-full p-2 focus:outline-none"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-cyan-400 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-cyan-500 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-md w-full">
            <h2 className="text-2xl font-bold mb-2 text-cyan-500">Thank you!</h2>
            <p className="mb-4">Your message has been sent successfully.</p>
            <button
              onClick={closeModal}
              className="mt-2 bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;



