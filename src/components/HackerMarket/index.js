import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../Home";
import Cart from "../Cart";
import products from "../../data/products";

function HackerMart() {
  const [cart, setCart] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  const addToCart = (product) => {
    if (!(cart ?? []).find(item => item.id === product.id)) {
      setCart([...(cart ?? []), product]);
      showToast(`${product.name} added to cart`);
    }
  };

  const removeFromCart = (id) => {
    const removed = cart.find(item => item.id === id);
    setCart(cart.filter(item => item.id !== id));
    showToast(`${removed?.name ?? "Item"} removed from cart`);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 2500);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>

      {toastMessage && (
        <div className="toast">
          {toastMessage}
        </div>
      )}
    </Router>
  );
}

export default HackerMart;
