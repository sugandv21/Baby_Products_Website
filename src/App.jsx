import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Offers from "./pages/Offers";
import Payment from "./pages/payment";
import Pampers from "./pages/Pampers";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import OrderComplete from "./pages/OrderComplete";
import BoysFashionPage from "./pages/BoysFashionPage";
import GirlsFashionPage from "./pages/GirlsFashionPage";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import SoapPage from "./pages/SoapPage";
import StrollerPage from "./pages/StrollerPage";
import BottlePage from "./pages/BottlePage";
import ContactPage from "./pages/ContactPage";
import AboutStore from "./pages/AboutStore";
import BulkCorporate from "./pages/BulkCorporate";
import ShippingReturns from "./pages/ShippingReturns";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToHashElement from "./components/ScrollToHashElement";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
     <CartProvider>
    <Router>
      <Navbar />
      <ScrollToTop />
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Product Detail Page */}
        <Route path="/offers" element={<Offers />} />
        <Route path="/products/pampers" element={<Pampers />} />
    <Route path="/products/boys-fashion" element={<BoysFashionPage />} />
    <Route path="/products/girls-fashion" element={<GirlsFashionPage />} />
    <Route path="/products/soap" element={<SoapPage />} />
    <Route path="/products/stroller" element={<StrollerPage />} />
    <Route path="/products/bottle" element={<BottlePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-complete" element={<OrderComplete />} />
        <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

<Route path="/about-store" element={<AboutStore />} />
<Route path="/gifts" element={<BulkCorporate />} />
<Route path="/shipping" element={<ShippingReturns />} />
<Route path="/policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
};

export default App;
