import client from "./client";

const endPoint = "/auth";

const login = (email, password) => {
  return client.post(endPoint + "/login", { email, password });
};

export default {
  login,
};
