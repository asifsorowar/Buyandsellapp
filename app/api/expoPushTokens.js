import client from "./client";

const apiEndPoint = "/pushTokens";

const postPushToken = (pushToken) => {
  return client.post(apiEndPoint, { token: pushToken });
};

export default {
  postPushToken,
};
