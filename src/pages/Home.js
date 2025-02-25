import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products") // แก้ URL เป็น API ของคุณ
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const renderProductBlock = (title, brand) => (
    <div>
      <h2 className="section-title">{title}</h2>
      <div className="product-grid">
        {products
          .filter((product) => product.brand === brand)
          .map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <button className="buy-button">สั่งซื้อ</button>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div className="product-page">
      <h1 className="page-title">สินค้า</h1>
      {renderProductBlock("แบรนด์ NIKE", "Nike")}
      {renderProductBlock("แบรนด์ NEW BALANCE", "New Balance")}
      <div className="banner-container">
        <img src="/images/banner.jpg" alt="Promotion" className="banner-image" />
      </div>
      {renderProductBlock("สินค้าแนะนำ", "recommended")}
    </div>
  );
}

export default Home;
