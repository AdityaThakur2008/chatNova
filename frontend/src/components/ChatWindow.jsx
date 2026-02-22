import Message from "./Message";

function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} sender={msg.sender} />
      ))}
    </div>
  );
}
export default ChatWindow;