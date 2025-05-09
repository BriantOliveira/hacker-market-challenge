// src/components/HackerMart/index.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../Home";
import Cart from "../Cart";
import products from "../../data/products";

function HackerMart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!(cart ?? []).find(item => item.id === product.id)) {
      setCart([...(cart ?? []), product]);
    }
  };

  const removeFromCart = (id) => {
    setCart((cart ?? []).filter(item => item.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default HackerMart;
