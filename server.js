const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const appointmentRoutes = require("./routes/appointments");
const reviewRoutes = require("./routes/reviews");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/dentalClinic", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use("/api/appointments", appointmentRoutes);
app.use("/api/reviews", reviewRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});