import React from "react";
import { fixMessages } from "../../utils";

export const ChatBox = ({ users, messages }) => {
  const adjustedMessages = fixMessages(messages);

  return (
    <div data-testid="chat-box">
      <div>
        {users.map(user => (
          <span>{user}</span>
        ))}
      </div>

      {adjustedMessages.map(message => (
        <div data-testid="message">
          <span>{message.from}</span>
          <br />
          <span>{message.body}</span>
        </div>
      ))}
    </div>
  );
};
