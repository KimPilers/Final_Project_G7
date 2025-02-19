import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart }) {
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty</p> : (
        cart.map((item, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
          </div>
        ))
      )}
      <h2>Total: ${total}</h2>
      <button onClick={() => navigate("/order")}>Checkout</button>
    </div>
  );
}

export default Cart;
