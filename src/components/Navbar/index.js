// src/components/Navbar/index.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav data-testid="navigation-tabs">
    <Link data-testid="home-link" to="/">Home</Link> |{" "}
    <Link data-testid="cart-link" to="/cart">Cart</Link>
  </nav>
);

export default Navbar;
