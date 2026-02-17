import Thread from "../models/thread.model.js";
import chatWithGemini from "../utils/Gemini.js";

export const getAllThreads = async (req, res) => {
  try {
    const threads = (await Thread.find({})).sort({ updatedAt: -1 });
    return res.status(200).json(threads);
  } catch (error) {
    console.log("Error fetching threads:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllMessages = async (req, res) => {
  const { threadId } = req.params;
  try {
    const thread = await Thread.findById(threadId);

    if (!thread) {
      return res.status(404).json({ message: "invalid thread id" });
    }
    return res.status(200).json(thread.messages);
  } catch (error) {
    console.log("Error fetching thread:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const DeleteThread = async (req, res) => {
  const { threadId } = req.params;
  try {
    const deletedthread = await Thread.findByIdAndDelete(threadId);

    if (!deletedthread) {
      return res
        .status(404)
        .json({ message: "invalid thread or thread not found" });
    }

    return res.status(200).json({ message: "thread deleted successfully" });
  } catch (error) {
    console.log("Error in deleting thread:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const createMessage = async (req, res) => {
  const { threadId, message } = req.body;

  if (!message) {
    return res.status(400).json({ message: "message is required" });
  }

  try {
    let thread = null;

    if (threadId) {
      thread = await Thread.findById(threadId);
    }

    if (!thread) {
      thread = new Thread({
        title: message.length > 50 ? message.substring(0, 50) : message,
        messages: [],
      });
    }

    thread.messages.push({
      role: "user",
      parts: [{ text: message }],
    });

    const GeminiResponse = await chatWithGemini(message);

    thread.messages.push({
      role: "model",
      parts: [{ text: GeminiResponse }],
    });

    await thread.save();

    return res.status(200).json(thread);
  } catch (error) {
    console.log("Error in creating message:", error);
    res.status(500).json({ message: "Server error" });
  }
};
