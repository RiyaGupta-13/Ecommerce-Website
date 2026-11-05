require('dotenv').config({path:'./backend/.env'});
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const authRoutes = require("./routes/authRoutes")
dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: "http://127.0.0.1:8080", // or "*" during development
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

app.use("/api/auth",authRoutes)

app.get("/", (req, res) => {
  res.send("Seira Backend Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});