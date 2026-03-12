const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

router.post("/", async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.send("Appointment booked");
});

module.exports = router;