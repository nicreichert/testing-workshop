import React from "react";
import { ChatBox } from "./components/ChatBox";

function App() {
  const [chats, setChats] = React.useState([]);

  React.useEffect(() => {
    fetch("/chats")
      .then(response => response.json())
      .then(setChats);
  }, []);

  return (
    <div>
      {chats.map(chat => (
        <ChatBox key={chat.id} {...chat} />
      ))}
    </div>
  );
}

export default App;
