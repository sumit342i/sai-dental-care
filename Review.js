const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  name: String,
  review: String,
  rating: Number
});

module.exports = mongoose.model("Review", ReviewSchema);