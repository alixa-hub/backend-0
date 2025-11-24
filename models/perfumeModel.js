const mongoose = require("mongoose");

const perfumeSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    price: Number
});

module.exports = mongoose.model("Perfume", perfumeSchema);


