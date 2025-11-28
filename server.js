import express from "express";
import cors from "cors";

const app = express();

// CORS allow frontend
app.use(cors());

// Home route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Perfumes API
app.get("/perfumes", (req, res) => {
  res.json([
    {
      name: "Rose Blast",
      description: "A soft floral fresh scent.",
      price: 30,
      image: "https://i.imgur.com/7yUvePI.jpeg"
    },
    {
      name: "Vanilla Mist",
      description: "Warm vanilla and amber notes.",
      price: 40,
      image: "https://i.imgur.com/h9WAO1l.jpeg"
    },
    {
      name: "Ocean Breeze",
      description: "Fresh aquatic scent with a hint of citrus.",
      price: 35,
      image: "https://i.imgur.com/5LrRkZL.jpeg"
    }
  ]);
});

// Export app for Vercel
export default app;

