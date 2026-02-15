import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080;
const API_KEY = process.env.GEMINI_API_KEY;

export default async function chatWithGemini(message) {
  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        contents: [
          {
            role: "user",
            parts: [{ text: "Hello." }],
          },
          {
            role: "model",
            parts: [{ text: "Hello! How can I help you today?" }],
          },
          {
            role: "user",
            parts: [{ text: "my name is aditya." }],
          },
          {
            role: "model",
            parts: [{ text: "Hello aditya! How can I help you today?" }],
          },
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

    console.log(response.data.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}

app.post("/test", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await chatWithGemini(message);
    res.status(200).json({ response });
  } catch (err) {
    console.log(err);
  }
});

const Main = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("CONNECTED TO DB");
    app.listen(PORT, () => {
      console.log(`SERVER LISTENING ON PORT ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

Main();
