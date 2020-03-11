import React from "react";
import { fixMessages } from "../../utils";

export const ChatBox = ({ users, messages }) => {
  const adjustedMessages = fixMessages(messages);

  return (
    <div data-testid="chat-box">
      <div>
        {users.map(user => (
          <span key={user}>{user}</span>
        ))}
      </div>

      {adjustedMessages.map((message, index) => (
        <div data-testid="message" key={`${message}-${index}`}>
          <span>{message.from}</span>
          <br />
          <span>{message.body}</span>
        </div>
      ))}
    </div>
  );
};
