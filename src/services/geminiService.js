const { GoogleGenAI } = require("@google/genai");



const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

const generateFAQ = async (topic) => {
  const response = await ai.models.generateContent({
   model: "gemini-3.8-flash",
    contents: `Generate a useful FAQ question and answer about this topic: ${topic}`
  });

  return response.text;
};

module.exports = {
  generateFAQ
};