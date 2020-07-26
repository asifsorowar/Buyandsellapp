import client from "./client";

const apiEndPoint = "/messages";

const send = (message, listingId) =>
  client.post(apiEndPoint, {
    message,
    listingId,
  });

const getMessages = (sendTo, sendFrom) => {
  return client.get(apiEndPoint + `/user/${sendTo}/${sendFrom}`);
};

const getMessageInfo = (id) => {
  return client.get(apiEndPoint + `/${id}`);
};

const deleteMessage = (id) => {
  return client.delete(apiEndPoint + `/${id}`);
};

const getMessagesWithUser = (title) => {
  return client.get(apiEndPoint + `/users/${title}`);
};

export default {
  send,
  getMessages,
  getMessageInfo,
  deleteMessage,
  getMessagesWithUser,
};
