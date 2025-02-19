import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import OrderTracking from "./pages/OrderTracking";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/order" element={<Order cart={cart} />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/tracking" element={<OrderTracking />} />
      </Routes>
    </Router>
  );
}

export default App;
