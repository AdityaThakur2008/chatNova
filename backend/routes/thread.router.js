import express from "express";
import {
  createMessage,
  DeleteThread,
  getAllMessages,
  getAllThreads,
} from "../controllers/thread.controller.js";

const router = express.Router();

router.get("/threads", getAllThreads);
router.get("/threads/:threadId", getAllMessages);
router.post("/threads", createMessage);
router.delete("/threads/:threadId", DeleteThread);


export default router;