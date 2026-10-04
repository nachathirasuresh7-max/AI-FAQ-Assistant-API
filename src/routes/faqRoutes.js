const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const validationMiddleware = require("../middleware/validationMiddleware");

const {
  getAllFAQs,
  searchFAQs,
  createFAQ
} = require("../controllers/faqController");

const router = express.Router();

// Search FAQs
router.get("/search", searchFAQs);

// Get all FAQs
router.get("/", getAllFAQs);

// Add FAQ - Protected
router.post("/", authMiddleware, validationMiddleware, createFAQ);

module.exports = router;