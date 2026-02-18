require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

connectDB();

app.use(express.json());
app.use("/users", userRoutes);

app.get("/health", (req, res) => {
  res.json({ success: true, message: "Server running 🚀" });
});

module.exports = app;
