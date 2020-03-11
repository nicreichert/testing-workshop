export const fixMessages = messages =>
  messages.reduce((acc, message) => {
    if (acc[acc.length - 1].from === message.from) {
      const lastMessage = acc.pop();
      lastMessage.body += message.body;
      return [...acc, lastMessage];
    }
    return [...acc, message];
  }, []);
