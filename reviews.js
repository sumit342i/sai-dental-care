const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

router.get("/", async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
});

router.post("/", async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.send("Review added");
});

module.exports = router;