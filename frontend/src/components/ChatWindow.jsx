import Message from "./Message";
import style from "./chatWindow.module.css";
import Chat from "./Chat.jsx";
import { MyContext } from "../context/MyContext.jsx";
import { useContext } from "react";

import { apiClient } from "../config/index.js";

function ChatWindow() {
  const { prompt, setPrompt, reply, setReply } = useContext(MyContext);

  const sendMessage = async () => {
    const body = { message: prompt, threadId: null };

    try {
      const response = await apiClient.post("/new/threads", body);
      console.log("Message sent successfully:", response?.data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className={style.chatContainer}>
      {/* Top Navbar */}
      <div className={style.chatNavbar}>
        <div className={style.navLeft}>
          <span className={style.modelName}>ChatNova </span>
        </div>

        <div className={style.navRight}>
          <button className={style.navBtn}>New Chat</button>
        </div>
      </div>

      {/* Chat Area */}
      <Chat />

      {/* Input Area */}
      <div className={style.inputBox}>
        <div className={style.toolbar}></div>
        <div className={style.inputRow}>
          <input
            className={style.input}
            placeholder="Send a message..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button className={style.sendBtn} onClick={() => sendMessage()}>
            Send
          </button>
        </div>

        <div className={style.footer}>
          <p>ChatNova can make mistakes. Project by Aditya</p>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
