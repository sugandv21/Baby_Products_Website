import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import babyImg from '../assets/images/Baby-img.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetSuccess, setResetSuccess] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email);

    if (!user) {
      setModalMessage('User not found. Redirecting to signup...');
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate('/signup');
      }, 2000);
    } else if (user.password !== password) {
      setModalMessage('Incorrect password.');
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2000);
    } else {
      localStorage.setItem('user', JSON.stringify(user));
      window.dispatchEvent(new Event("userUpdated"));
      setModalMessage('Login successful! Redirecting...');
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate('/');
      }, 2000);
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(user => user.email === forgotEmail);

    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      localStorage.setItem('users', JSON.stringify(users));
      setResetSuccess(true);
      setTimeout(() => {
        setShowForgotModal(false);
        setResetSuccess(null);
        navigate('/login');
      }, 2000);
    } else {
      setResetSuccess(false);
      setTimeout(() => {
        setShowForgotModal(false);
        setResetSuccess(null);
        navigate('/login');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8 relative">
      {/* General Modal */}
      {showModal && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2">{modalMessage}</h2>
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm relative">
            <h2 className="text-xl font-bold mb-4">Reset Password</h2>
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your registered email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                className="w-full border-b border-gray-400 outline-none py-2"
                required
              />
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border-b border-gray-400 outline-none py-2"
                required
              />
              <button
                type="submit"
                className="bg-[#7ED6DF] text-black font-semibold py-2 w-full rounded-md"
              >
                Reset Password
              </button>
              <button
                type="button"
                onClick={() => setShowForgotModal(false)}
                className="text-sm text-gray-500 hover:underline mt-2 block text-center w-full"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Reset Success Modal */}
      {resetSuccess === true && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-2">Password Updated</h2>
            <p className="text-gray-600">Redirecting to login...</p>
          </div>
        </div>
      )}

      {/* Reset Error Modal */}
      {resetSuccess === false && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-2 text-red-500">Email Not Found</h2>
          </div>
        </div>
      )}

      {/* Login UI */}
      <div className="flex flex-col md:flex-row bg-white rounded-[60px] overflow-hidden w-full max-w-6xl">
        {/* Left - Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={babyImg}
            alt="Baby Sleeping"
            className="w-full h-full object-cover rounded-[60px] md:rounded-l-[60px] md:rounded-r-none"
          />
        </div>

        {/* Right - Form */}
        <div className="md:w-1/2 w-full flex flex-col justify-center px-6 md:px-12 py-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Log in</h2>
          <p className="text-sm text-gray-700 mb-8">Enter your details below</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="text"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-gray-400 outline-none py-2 w-full placeholder-gray-500"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b border-gray-400 outline-none py-2 w-full placeholder-gray-500 pr-10"
                required
              />
              <span
                className="absolute right-2 top-3 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="bg-[#7ED6DF] hover:bg-[#70c2cb] text-black font-semibold py-2 px-6 rounded-md"
              >
                Log In
              </button>
              <span
                className="text-gray-400 text-sm cursor-pointer hover:text-black"
                onClick={() => setShowForgotModal(true)}
              >
                Forgot Password?
              </span>
            </div>
          </form>

          <p className="mt-12 text-center text-sm text-gray-700">
            Don’t have an account?
            <Link to="/signup">
              <span className="text-[#489FB5] font-medium cursor-pointer ml-1 hover:underline">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
