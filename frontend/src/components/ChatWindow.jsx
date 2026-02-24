import Message from "./Message";
import style from "./chatWindow.module.css";
import Chat from "./Chat.jsx";

function ChatWindow() {
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

      
    </div>
  );
}

export default ChatWindow;
