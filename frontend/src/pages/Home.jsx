import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import ChatWindow from "../components/ChatWindow.jsx";
import InputBox from "../components/InputBox";

function Home() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const userMsg = { text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    // API call here
    const botReply = { text: "AI response...", sender: "bot" };
    setMessages((prev) => [...prev, botReply]);
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="chat-area">
        <ChatWindow messages={messages} />
        <InputBox onSend={sendMessage} />
      </div>
    </div>
  );
}
export default Home;
