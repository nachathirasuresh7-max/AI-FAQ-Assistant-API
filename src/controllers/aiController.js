const { generateFAQ } = require("../services/geminiService");

const generateFAQController = async (req, res) => {
  try {
    const { topic } = req.body;

    if (!topic) {
      return res.status(400).json({
        message: "Topic is required"
      });
    }

    const result = await generateFAQ(topic);

    res.status(200).json({
      success: true,
      faq: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  generateFAQController
};