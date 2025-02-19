import React from "react";
import { useNavigate } from "react-router-dom";

function Order({ cart }) {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "20px" }}>
      <h1>Order Confirmation</h1>
      <button onClick={() => navigate("/payment")}>Confirm Order</button>
    </div>
  );
}

export default Order;
