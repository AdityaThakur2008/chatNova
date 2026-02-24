import React from "react";
import style from "./Chat.module.css";
import InputBox from "./InputBox";

export default function Chat() {
  return (
    <div className={style.chatWindow}>
      {/* Welcome */}
      <div className={style.welcome}>
        <h1>Welcome to ChatNova ✨</h1>
        <p>Your AI assistant is ready to help.</p>
      </div>

      {/* Example messages */}
      <div className={`${style.messageRow} ${style.botRow}`}>
        <div className={`${style.messageBubble} ${style.bot}`}>
          Hello 👋 I’m your AI assistant. How can I help you today?
        </div>
      </div>

      <InputBox />
    </div>
  );
}