import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart({ cartItems, removeFromCart, clearCart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.Price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/order", { state: { cartItems, totalPrice } });
    }
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-title">ตะกร้าสินค้า</h2>

        {cartItems.length === 0 ? (
          <p>ตะกร้าของคุณว่างเปล่า</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.ProductID} className="cart-item">
                <img src={item.ImageURL} alt={item.ProductName} className="cart-item-img" />
                <div className="item-details">
                  <h3>{item.ProductName}</h3>
                  <p className="quantity">จำนวน {item.quantity} ชิ้น</p>
                  <p className="price">ราคา: {item.Price} บาท</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.ProductID)}>
                    <img src="/img/trash-icon.png" alt="Remove" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="cart-summary">
            <p>ราคาสินค้าทั้งหมด: {totalPrice} บาท</p>
            <button className="checkout-btn" onClick={handleCheckout}>ตกลง</button>
            <button className="clear-cart-btn" onClick={clearCart}>ยกเลิก</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
