import client from "./client";

const apiEndPoint = "/users";

const register = async (firstName, lastName, email, password) => {
  try {
    const result = await client.post(apiEndPoint, {
      firstName,
      lastName,
      email,
      password,
    });
    return result;
  } catch (error) {
    console.log("Error occur while registering user.");
  }
};

export default {
  register,
};
