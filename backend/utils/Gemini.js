import axios from "axios";

const API_KEY = process.env.GEMINI_API_KEY;

export default async function chatWithGemini(message) {
  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        contents: [
          {
            role: "user",
            parts: [{ text: message }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": API_KEY,
        },
      },
    );
    console.log("Gemini Response:", response.data);
    return response.data.candidates[0].content.parts[0].text;
    cons;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}
