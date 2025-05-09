import React from "react";

const Cart = ({ cart = [], removeFromCart }) => {
  const total = (cart ?? []).reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div data-testid="shopping-cart">
      <div data-testid="cart">
        <h2 data-testid="cart-heading">Your Cart</h2>
        <div className="cart-list">
          {(cart ?? []).map((product) => (
            <div key={product.id} className="cart-item">
              <img
                src={product.image}
                alt={product.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>${product.price.toFixed(2)}</p>
              </div>
              <button
                data-testid={`remove-from-cart-button-${product.id}`}
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <h3 data-testid="cart-total">Total: ${total}</h3>
      </div>
    </div>
  );
};

export default Cart;
