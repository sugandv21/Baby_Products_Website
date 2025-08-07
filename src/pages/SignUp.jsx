import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import babyImg from '../assets/images/Baby-img.png';

const Signup = () => {
   useEffect(() => {
    document.title = 'EarthBubs | Sign Up';
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const { name, email, password } = formData;

  // Validation
  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    alert("Please enter a valid name (letters and spaces only).");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Check if user already exists
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = existingUsers.some(user => user.email === email);

  if (userExists) {
    alert("User with this email already exists.");
    return;
  }

  //  Save new user to localStorage
  const updatedUsers = [...existingUsers, formData];
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  //Show success modal and redirect
  setShowModal(true);
  setTimeout(() => {
    setShowModal(false);
    navigate('/login');
  }, 2000);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8 relative">
      {/* Modal */}
      {showModal && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-2">Signup Completed</h2>
            <p className="text-gray-600">Redirecting to login...</p>
          </div>
        </div>
      )}

      {/* Main Signup Form */}
      <div className="flex flex-col md:flex-row bg-white rounded-[60px] overflow-hidden w-full max-w-6xl">

        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={babyImg}
            alt="Sleeping baby"
            className="w-full h-full object-cover rounded-[60px] md:rounded-l-[60px] md:rounded-r-none"
          />
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 w-full flex flex-col justify-center px-6 md:px-12 py-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sign up</h2>
          <p className="text-sm text-gray-700 mb-8">Enter your details below</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border-b border-gray-400 outline-none py-2 w-full placeholder-gray-500"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border-b border-gray-400 outline-none py-2 w-full placeholder-gray-500"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border-b border-gray-400 outline-none py-2 w-full placeholder-gray-500 pr-10"
              />
              <span
                className="absolute right-2 top-3 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button
              type="submit"
              className="bg-[#7ED6DF] hover:bg-[#70c2cb] text-black font-semibold py-2 mt-4 w-full rounded-md"
            >
              Create account
            </button>
          </form>

          {/* Google Sign Up (Optional) */}
          <button className="mt-4 w-full border border-black text-black font-medium py-2 rounded-md flex justify-center items-center gap-2 hover:bg-gray-50">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button>

          <p className="mt-10 text-center text-sm text-gray-700">
            Already have an account?
            <Link to="/login">
              <span className="text-[#489FB5] font-medium cursor-pointer ml-1 hover:underline">
                Log in
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

