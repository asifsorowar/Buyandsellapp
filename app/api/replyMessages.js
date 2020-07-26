import client from "./client";

const apiEndPoint = "/replyMessages";

const getReplyMessages = (parentMessageId) => {
  return client.get(apiEndPoint + `/${parentMessageId}`);
};

const send = (message, parentMessageId, userId) => {
  return client.post(apiEndPoint, { parentMessageId, message, userId });
};

export default {
  getReplyMessages,
  send,
};
