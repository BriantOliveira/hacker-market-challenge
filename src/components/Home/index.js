import React from "react";

const Home = ({ products, addToCart }) => (
  <div data-testid="home">
    <h2 data-testid="home-heading">Welcome to HackerMart</h2>
    <div className="product-grid" data-testid="featured-products">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 data-testid={`product-name-${product.id}`}>{product.name}</h3>
          <p data-testid={`product-description-${product.id}`}>{product.description}</p>
          <p data-testid={`product-cost-${product.id}`}>${product.price.toFixed(2)}</p>
          <button
            data-testid={`add-to-cart-button-${product.id}`}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
