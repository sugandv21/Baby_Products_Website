import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import addToCart from "../assets/images/addToCart.png";
import login from "../assets/images/login1.jpg";
import { CartContext } from "../context/CartContext";



const productRoutes = [
  { to: "/products/pampers", label: "Pampers" },
  { to: "/products/boys-fashion", label: "Boy's Fashions" },
  { to: "/products/girls-fashion", label: "Girl's Fashions" },
  { to: "/products/soap", label: "Soap" },
  { to: "/products/stroller", label: "Stroller" },
  { to: "/products/bottle", label: "Bottle" },
];


const Navbar = () => {
  const dropdownRef = useRef(null);
  
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [showProducts, setShowProducts] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const productsRef = useRef(null);
  const mobileMenuRef = useRef(null);
const [showMobileProducts, setShowMobileProducts] = useState(false);

  const toggleProducts = () => setShowProducts((s) => !s);
  const toggleMobileMenu = () => setMobileMenuOpen((s) => !s);
const [notFoundMessage, setNotFoundMessage] = useState("");
 const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const cleaned = query.trim().toLowerCase();

    const match = productRoutes.find(({ label }) =>
      label.toLowerCase().includes(cleaned)
    );

    if (match) {
      navigate(match.to);
    } else {
const available = productRoutes.map((p) => `<li>${p.label}</li>`).join("");
setNotFoundMessage(
  `Product not found. Available products:<ul class="list-disc list-inside mt-1">${available}</ul>`
);

// Optional: auto-hide after 5s
setTimeout(() => setNotFoundMessage(""), 5000);


    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };
  

useEffect(() => {
    if (!showProducts) return;

    const handleOutside = (e) => {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setShowProducts(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") setShowProducts(false);
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showProducts]);




  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setShowProducts(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileMenuOpen]);


  const [user, setUser] = useState(null);
const [showDropdown, setShowDropdown] = useState(false);

useEffect(() => {
  const updateUser = () => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  };

  updateUser(); // Run once on mount

  // Listen for login/logout events
  window.addEventListener("userUpdated", updateUser);

  return () => {
    window.removeEventListener("userUpdated", updateUser);
  };
}, []);


// const handleLogout = () => {
//   localStorage.removeItem("user");
//   setUser(null);
//   setShowDropdown(false);
//   navigate("/login");
// };
const handleLogout = () => {
  localStorage.removeItem("user");
  window.dispatchEvent(new Event("userUpdated"));
  navigate("/"); 
};

const toggleDropdown = () => {
  setShowDropdown((prev) => !prev);
};

useEffect(() => {
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

const navLinkClass = ({ isActive }) =>
  `py-1 transition duration-300 
   ${
     isActive
       ? "bg-cyan-100 border-b-4 border-[#00B4D8] pb-2"
       : "hover:bg-cyan-100 hover:border-b-4 hover:border-[#00B4D8] hover:pb-2"
   }`;



  
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      {/* Top row */}
      <div className="container mx-auto flex justify-space-between items-center px-4 py-3">

        {/* Logo */}
        <div className="flex gap-2 ">
          <Link to="/" className="flex items-center gap-1">
            <img src={logo} className="h-8" alt="Logo" />
            <span className="text-sky-500 text-2xl font-bold">EarthBubs</span>
          </Link>
        </div>

        {/* Desktop nav + controls */}
        <div className="hidden lg:flex flex-1 items-center justify-between">
          <nav className="flex gap-10 text-gray-800 font-semibold relative text-xl mx-auto mr-18">
             <NavLink to="/" className={navLinkClass}>
  Home
</NavLink>




            {/* Products dropdown */}
            <div className="relative" ref={productsRef}>
      <button
        onClick={() => setShowProducts((s) => !s)}
        aria-expanded={showProducts}
        aria-haspopup="menu"
        className="hover:text-sky-500 py-1"
        type="button"
      >
        Products
      </button>
      {showProducts && (
        <div className="absolute top-full mt-2 border rounded shadow w-52 z-50 bg-[#B0E4F4]">
          <div className="flex flex-col gap-y-1 py-1 bg-[#boe4f4] border">
            {[
              { to: "/products/pampers", label: "Pampers" },
              { to: "/products/boys-fashion", label: "Boy's Fashions" },
              { to: "/products/girls-fashion", label: "Girl's Fashions" },
              { to: "/products/soap", label: "Soap" },
              { to: "/products/stroller", label: "Stroller" },
              { to: "/products/bottle", label: "Bottle" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setShowProducts(false)}
                className="block px-4 py-2 border  border-black rounded bg-white hover:bg-sky-30 hover:text-violet-800 text-base"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>

            <NavLink to="/offers" className={navLinkClass}>
  Offers
</NavLink>
<NavLink to="/about" className={navLinkClass}>
  About Us
</NavLink>
<NavLink to="/contacts" className={navLinkClass}>
  Contact
</NavLink>

          </nav>

          <div className="flex items-center gap-5">
             <div className="relative w-64">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border-2 rounded-md border-cyan-500 py-2 pl-3 pr-10 w-full focus:outline-none text-base"
      />
      <button
        onClick={handleSearch}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-sky-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.65z"
          />
        </svg>
      </button>

      {notFoundMessage && (
  <div
    className="mt-2 text-sm text-red-600 border border-red-300 bg-red-50 p-3 rounded"
    dangerouslySetInnerHTML={{ __html: notFoundMessage }}
  />
)}
    </div>

            <Link to="/cart" className="relative">
              <img src={addToCart} className="w-11" alt="add to cart" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            {/* <Link to="/login" aria-label="Login">
              <button className="cursor-pointer">
                <img src={login} className="w-6" alt="login" />
              </button>
            </Link> */}



            {user ? (
  <div className="relative" ref={dropdownRef}>
    <div
      onClick={toggleDropdown}
      className="flex items-center space-x-2 px-3 py-1 border border-cyan-500 rounded hover:bg-cyan-100 cursor-pointer"
    >
      <span>Hello, {user?.name || "User"}</span>
    </div>

   {showDropdown && (
  <div className="absolute right-0 top-full mt-2 bg-white border rounded shadow z-50 w-32">

        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
        >
          Logout
        </button>
      </div>
    )}
  </div>
) : (
  <Link to="/login" aria-label="Login">
    <button className="cursor-pointer">
      <img src={login} className="w-6" alt="login" />
    </button>
  </Link>
)}



          </div>
        </div>

        {/* Hamburger for tablet/mobile */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            className="p-2 flex"
          >
            <div className="space-y-1">
              <span
                className={`block w-6 h-0.5 bg-gray-800 transition-transform ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-800 transition-transform ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Second row on tablet/mobile: search, cart, login (always visible) */}
      <div className="lg:hidden bg-white border-t">
        <div className="container mx-auto flex flex-wrap gap-4 px-4 py-3 items-center">
          <div className="flex-1 min-w-[160px]">
            

             <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border-2 rounded-md border-cyan-500 py-2 pl-3 pr-10 w-full focus:outline-none text-base"
      />
      <button
        onClick={handleSearch}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-sky-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.65z"
          />
        </svg>
      </button>

      {notFoundMessage && (
  <div
    className="mt-2 text-sm text-red-600 border border-red-300 bg-red-50 p-3 rounded"
    dangerouslySetInnerHTML={{ __html: notFoundMessage }}
  />
)}
    </div>


          </div>

          <Link to="/cart" className="relative">
            <img src={addToCart} className="w-8" alt="cart" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/login" aria-label="Login">
            <button className="cursor-pointer">
              <img src={login} className="w-8" alt="login" />
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile/tablet menu links */}
      {mobileMenuOpen && (
  <div className="lg:hidden w-full bg-white border-t shadow z-40" ref={mobileMenuRef}>
    <div className="flex flex-col px-4 py-2 gap-2 text-gray-800 font-medium text-lg">
              <Link
                to="/"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowProducts(false);
                }}
                className="py-2 hover:text-sky-500"
              >
                Home
              </Link>

              {/* Products accordion */}
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setShowMobileProducts((prev) => !prev)}

                  className="py-2 text-left hover:text-sky-500"
                >
                  Products
                </button>
                {showMobileProducts && (

                  <div className="pl-4 flex flex-col gap-1">
                    {[
                      { to: "/products/pampers", label: "Pampers" },
                      { to: "/products/boys-fashion", label: "Boy's Fashions" },
                      { to: "/products/girls-fashion", label: "Girl's Fashions" },
                      { to: "/products/soap", label: "Soap" },
                      { to: "/products/stroller", label: "Stroller" },
                      { to: "/products/bottle", label: "Bottle" },
                    ].map(({ to, label }) => (
                      <Link
                        key={to}
                        to={to}
                        onClick={() => {
  setShowMobileProducts(false);
  setMobileMenuOpen(false);
}}

                        className="py-1"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/offers"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowProducts(false);
                }}
                className="py-2 hover:text-sky-500"
              >
                Offers
              </Link>

              <Link
                to="/about"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowProducts(false);
                }}
                className="py-2 hover:text-sky-500"
              >
                About Us
              </Link>
              <Link
                to="/contacts"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowProducts(false);
                }}
                className="py-2 hover:text-sky-500"
              >
                Contact
              </Link>
            </div>
  </div>
      )}

      <hr />
    </header>
  );
};

export default Navbar;

