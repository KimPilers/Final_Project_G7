const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ดึงสินค้าทั้งหมด
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json(results);
  });
});

module.exports = router;
