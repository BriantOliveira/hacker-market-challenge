import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../Home';
import Cart from '../Cart';
import products from '../../data/products';
import React, { useState } from 'react';

function HackerMarket() {
  const [cart, setCart] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
      showToast(`${product.name} added to cart`);
    }
  };

  const removeFromCart = (id) => {
    const item = cart.find((p) => p.id === id);
    setCart(cart.filter((p) => p.id !== id));
    showToast(`${item?.name} removed from cart`);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 2000);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
      {toastMessage && <div className="toast">{toastMessage}</div>}
    </>
  );
}

export default HackerMarket;
