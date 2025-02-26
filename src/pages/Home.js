import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Home.css";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Use useNavigate

  // Fetch product data from API
  useEffect(() => {
    fetch("http://localhost:3000/api/products") // API to fetch products from server.js
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log the fetched data
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []); // useEffect will run when the component is first rendered

  // Filter products based on category_id (1 for Nike, 2 for New Balance)
  const nikeProducts = products.filter((product) => product.category_id === 1);
  const newBalanceProducts = products.filter((product) => product.category_id === 2);

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
    navigate("/cart"); // Navigate to the cart page
  };

  return (
    <div className="product-page">

      {/* NIKE Section */}
      <div className="banner-top">
        <div className="banner-container">
          <img src="/img/banner1.jpg" alt="Nike Promo" className="banner-image" />
          <button className="buy-button banner-buy-button">สั่งซื้อ</button>
        </div>
      </div>

      <div className="products-container">
        <h2 className="category-title">NIKE</h2>
        {nikeProducts.length === 0 ? (
          <p>No Nike products available.</p>
        ) : (
          <div className="product-grid">
            {nikeProducts.map((product) => (
              <div key={product.product_id} className="product-card">
                <img src={product.image_url} alt={product.product_name} />
                <h3 className="product-name">{product.product_name}</h3>
                <p className="price">${product.price}</p>
                <p className="category-name">หมวดหมู่: {product.category_name}</p>
                <button className="buy-btn" onClick={() => handleAddToCart(product)}>
                  สั่งซื้อ
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* New Balance Section */}
      <div className="promo-banner">
        <div className="banner-container">
          <img src="/img/banner2.jpg" alt="New Balance Promo" className="banner-image" />
          <button className="buy-button banner-buy-button">สั่งซื้อ</button>
        </div>
      </div>

      <div className="products-container">
        <h2 className="category-title">NEW BALANCE</h2>
        {newBalanceProducts.length === 0 ? (
          <p>No New Balance products available.</p>
        ) : (
          <div className="product-grid">
            {newBalanceProducts.map((product) => (
              <div key={product.product_id} className="product-card">
                <img src={product.image_url} alt={product.product_name} />
                <h3 className="product-name">{product.product_name}</h3>
                <p className="price">${product.price}</p>
                <p className="category-name">หมวดหมู่: {product.category_name}</p>
                <button className="buy-btn" onClick={() => handleAddToCart(product)}>
                  สั่งซื้อ
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
