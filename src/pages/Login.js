import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    console.log("🔍 กำลังส่งไป Backend:", email, password); // ✅ Debug ตรงนี้
  
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
  
      console.log("✅ Login response:", response.data);
      
      alert("Login successful");
      navigate(`/order/${response.data.customer_id}`);
  
    } catch (err) {
      console.error("❌ Error:", err.response?.data?.error || err.message);
      setError(err.response?.data?.error || "เกิดข้อผิดพลาด");
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>เข้าสู่ระบบ</h2>
        {error && <p className="error-msg">{error}</p>} {/* แสดง Error */}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">อีเมล</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="กรอกอีเมล"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="กรอกรหัสผ่าน"
            />
          </div>
          <button type="submit" className="login-btn">เข้าสู่ระบบ</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
