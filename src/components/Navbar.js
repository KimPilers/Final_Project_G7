// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <h1>Namiko</h1>
      <nav>
        <Link to="/">หน้าหลัก</Link>
        <Link to="/cart">สินค้า</Link>
        <Link to="/brands">แบรนด์สินค้า</Link>
        <Link to="/contact">ติดต่อเรา</Link>
        <Link to="/login">เข้าสู่ระบบ</Link> {/* เพิ่มลิงค์ไปที่หน้า Login */}
      </nav>
      <a href="cart" className="order-btn">สั่งซื้อ</a>
    </header>
  );
}

export default Navbar;
