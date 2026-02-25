import Home from "./pages/Home";
import "./App.css";
import { MyContext } from "./context/MyContext";
import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);

  const providerValues = {
    prompt,
    setPrompt,
    reply,
    setReply,
  };

  return (
    <MyContext.Provider value={providerValues}>
      <Home />
    </MyContext.Provider>
  );
}

export default App;
