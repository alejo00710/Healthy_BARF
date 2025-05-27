// server/models/User.js
const db = require("../config/db");

const User = {
  create: (userData, callback) => {
    const sql = "INSERT INTO users (name, phone, email, address, password) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, userData, callback);
  },

  findByEmail: (email, callback) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], callback);
  }
};

module.exports = User;
