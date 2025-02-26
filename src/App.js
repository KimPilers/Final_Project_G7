import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Order from "./pages/Order"; // ✅ นำเข้า Order Page
import Navbar from "./components/Navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productID) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.ProductID !== productID));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order/:customerId" element={<Order />} /> {/* ✅ เพิ่ม Route สำหรับ Order */}
      </Routes>
    </Router>
  );
}

export default App;
