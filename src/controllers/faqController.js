const FAQ = require("../models/FAQ");

// Get all FAQs
const getAllFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find();

    res.json(faqs);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Search FAQs
const searchFAQs = async (req, res) => {
  try {
    const q = req.query.q;

    const faqs = await FAQ.find({
      $or: [
        { question: { $regex: q, $options: "i" } },
        { answer: { $regex: q, $options: "i" } }
      ]
    });

    res.json(faqs);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Add FAQ
const createFAQ = async (req, res) => {
  try {
    const faq = new FAQ({
      question: req.body.question,
      answer: req.body.answer,
      category: req.body.category
    });

    const savedFAQ = await faq.save();

    res.status(201).json(savedFAQ);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

module.exports = {
  getAllFAQs,
  searchFAQs,
  createFAQ
};