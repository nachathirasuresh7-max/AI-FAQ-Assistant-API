const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { generateFAQController } = require("../controllers/aiController");

const router = express.Router();
console.log("AI routes loaded");
router.get("/test", (req, res) => {
  res.json({ message: "AI route is working" });
});

router.post("/generate-faq", authMiddleware, generateFAQController);

module.exports = router;