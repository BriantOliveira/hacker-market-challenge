// src/components/Cart/index.js
import React from "react";

const Cart = ({ cart = [], removeFromCart }) => {
  const total = (cart ?? []).reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div data-testid="shopping-cart">
      <div data-testid="cart">
        <h2 data-testid="cart-heading">Your Cart</h2>
        <table>
          <thead>
            <tr><th>Name</th><th>Description</th><th>Cost</th><th>Action</th></tr>
          </thead>
          <tbody>
            {(cart ?? []).map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <button
                    data-testid={`remove-from-cart-button-${product.id}`}
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove from Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 data-testid="cart-total">Total: ${total}</h3>
      </div>
    </div>
  );
};

export default Cart;
