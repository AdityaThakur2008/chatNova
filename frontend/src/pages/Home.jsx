import { useState } from "react";
import Sidebar from "../components/sidebar";
import ChatWindow from "../components/ChatWindow";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="chat-area">
        <ChatWindow />
      </div>
    </div>
  );
}

export default Home;
