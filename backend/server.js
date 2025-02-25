const express = require("express");
const cors = require("cors");
const db = require("./config/db");
 // ใช้ไฟล์เชื่อมต่อ MySQL ของคุณ

const app = express();
app.use(cors()); // ป้องกันปัญหา CORS
app.use(express.json());

// สร้าง API เพื่อดึงสินค้าจาก MySQL
app.get("/api/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Database error" });
    } else {
      res.json(results);
    }
  });
});

// ตั้งค่าให้เซิร์ฟเวอร์รันบนพอร์ต 5000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
