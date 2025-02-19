import React from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "20px" }}>
      <h1>Payment</h1>
      <button onClick={() => navigate("/tracking")}>Complete Payment</button>
    </div>
  );
}

export default Payment;
