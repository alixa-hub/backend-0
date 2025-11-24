const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (clean version)
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mydb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Basic route
app.get("/", (req, res) => {
    res.send("Backend is working!");
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

