import React from "react";
import "./Order.css";

function Order({ customer, orderItems }) {
  return (
    <div className="order-page">
      <div className="order-container">
        <h2 className="order-title">การสั่งซื้อ</h2>
        <div className="customer-info">
          <h3>ข้อมูลลูกค้า</h3>
          <p>ชื่อ: {customer.name}</p>
          <p>อีเมล: {customer.email}</p>
          <p>โทร: {customer.phone}</p>
          <p>ที่อยู่: {customer.address}</p>
        </div>
        <div className="order-items">
          <h3>สินค้าในตะกร้า ({orderItems.length} รายการ)</h3>
          {orderItems.map((item) => (
            <div key={item.product_id} className="order-item">
              <img src={item.ImageURL} alt={item.product_name} className="order-item-img" />
              <div className="item-details">
                <h4>{item.ProductName}</h4>
                <p>แบรนด์: {item.Brand}</p>
                <p>จำนวน: {item.quantity} ชิ้น</p>
                <p>ราคาทั้งหมด: {item.price * item.quantity} บาท</p>
              </div>
            </div>
          ))}
        </div>
        <button className="confirm-btn">ยืนยันคำสั่งซื้อ</button>
      </div>
    </div>
  );
}

export default Order;
