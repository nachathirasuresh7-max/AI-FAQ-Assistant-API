const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const faqRoutes = require("./routes/faqRoutes");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/faqs", faqRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

app.get("/direct-test", (req, res) => {
  res.json({
    message: "Direct route working"
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "AI FAQ Assistant API is running"
  });
});


module.exports = app;