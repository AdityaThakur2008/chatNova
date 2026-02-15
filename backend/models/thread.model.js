import mongoose from "mongoose";

const partSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const messageSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["user", "model"],
    required: true,
  },
  parts: [partSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const threadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "New Chat",
  },
  messages: [messageSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

threadSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model("Thread", threadSchema);
