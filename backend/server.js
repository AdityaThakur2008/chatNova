import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import chatWithGemini from "./utils/Gemini.js";
import threadRouter from "./routes/thread.router.js";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080;


app.use("/", threadRouter);

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
