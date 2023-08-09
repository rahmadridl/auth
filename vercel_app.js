const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
const postgre = require("database.js");

const app = express();
app.use(bodyParser.json());

// API Register
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const sql =
      "INSERT INTO User(name, email, password) VALUES($1, $2, $3) RETURNING *";
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(user.password, salt);

    const { rows } = await postgre.query(sql, [name, email, password]);

    res.json({ message: "User registered successfully", data: rows[0] });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// API Login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // const user = await User.findOne({ where: { email } });
    const { rows } = await postgre.query(
      "select * from User where email = $1",
      [email]
    );

    if (!rows[0]) {
      return res.status(404).json({ message: "User not found" });
    } else {
      const isMatch = await bcrypt.compare(password, rows[0].password);
      if (!isMatch) {
        return res.status(401).json({ message: "Incorrect password" });
      }
    }

    const token = jwt.sign({ userId: rows[0].id }, "secretKey", {
      expiresIn: "1h",
    });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// API Get User Info
app.get("/api/me", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "secretKey");

    res.json("yes");
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
});

// Start the server
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
