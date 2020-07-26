import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync(key, token);
  } catch (error) {
    console.log("Error occur while storing token.");
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error occur while getting token.");
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error occur while removing token.");
  }
};

const getUser = async () => {
  try {
    const token = await getToken();
    const user = jwtDecode(token);
    return user ? user : null;
  } catch (error) {
    console.log("Error occur while getting user.");
  }
};

export default { storeToken, getToken, removeToken, getUser };
