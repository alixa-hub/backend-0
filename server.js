// server.js (Final and Cleaned Code)

// 1. ENVIRONMENT AND PACKAGES
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

// 2. EXPRESS APP SETUP
const app = express();
// PORT 5000 ya 8000 use karein (Agar 5000 masla kare to 8000 kar dijiyega)
const PORT = process.env.PORT || 5000; 

// 3. MODEL DEFINITION
const PerfumeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: Number,
    image: String
}, { timestamps: true });
const Perfume = mongoose.model("Perfume", PerfumeSchema);

// 4. MIDDLEWARE
app.use(cors()); 
app.use(express.json()); 

// 5. ROUTES
// GET / route (Base URL)
app.get('/', (req, res) => {
    res.send('Perfume Portfolio Backend Running');
});

// GET /perfumes route (Data nikalne ke liye)
app.get('/perfumes', async (req, res) => {
    try {
        const perfumes = await Perfume.find();
        res.status(200).json(perfumes); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST /perfumes/add route (Data shamil karne ke liye)
app.post('/perfumes/add', async (req, res) => {
    try {
        const perfume = new Perfume(req.body);
        await perfume.save();
        res.json({ message: "Perfume added successfully", perfume });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// 6. DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// 7. SERVER START (Yeh zaroori hai)
app.listen(PORT, () => {
    console.log(`🚀 Server http://localhost:${PORT} par chal raha hai.`);
});