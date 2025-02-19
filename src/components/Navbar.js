import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <h1>Namiko</h1>
      <nav>
        <Link to="/">หน้าหลัก</Link>
        <Link to="/products">สินค้า</Link>
        <Link to="/brands">แบรนด์สินค้า</Link>
        <Link to="/contact">ติดต่อเรา</Link>
      </nav>
      <a href="Cart" className="order-btn">สั่งซื้อ</a>
    </header>
  );
}

export default Navbar;
