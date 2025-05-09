// src/components/Home/index.js
import React from "react";

const Home = ({ products, addToCart }) => (
  <div data-testid="home">
    <h2 data-testid="home-heading">Welcome to HackerMart</h2>
    <div data-testid="featured-products">
      <table data-testid="products">
        <thead>
          <tr><th>Name</th><th>Description</th><th>Cost</th><th>Action</th></tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td data-testid={`product-name-${product.id}`}>{product.name}</td>
              <td data-testid={`product-description-${product.id}`}>{product.description}</td>
              <td data-testid={`product-cost-${product.id}`}>${product.price.toFixed(2)}</td>
              <td>
                <button
                  data-testid={`add-to-cart-button-${product.id}`}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Home;
