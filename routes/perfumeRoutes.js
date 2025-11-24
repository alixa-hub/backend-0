const express = require("express");
const router = express.Router();
const Perfume = require("../models/perfumeModel");




router.get("/", async (req, res) => {
    try {
        const perfumes = await Perfume.find();
        res.json(perfumes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const newPerfume = new Perfume(req.body);
        await newPerfume.save();
        res.json(newPerfume);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
