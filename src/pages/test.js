import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"; // นำ Navbar มาใช้
import "./Products.css";

function Products({ cartCount, user, setUser, addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.CategoryName]) {
      acc[product.CategoryName] = [];
    }
    acc[product.CategoryName].push(product);
    return acc;
  }, {});

  return (
    <div className="product-page">
      
      <div className="banner">
        <img src="/img/banner1.jpg" alt="Nike Banner" />
      </div>

      <div className="products-container">
        {Object.keys(groupedProducts).map((category) => (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="product-grid">
              {groupedProducts[category].map((product) => (
                <div key={product.ProductID} className="product-card">
                  <img src={product.ImageURL} alt={product.ProductName} />
                  <h3>{product.ProductName}</h3>
                  <p className="price">${product.Price}</p>
                  <button className="buy-btn" onClick={() => addToCart(product)}>
                    สั่งซื้อ
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
