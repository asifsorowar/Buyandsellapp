import { useContext } from "react";
import jwtDecode from "jwt-decode";
import AuthContext from "./../auth/context";
import authStorage from "../auth/storage";

export default () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    authStorage.removeToken();
    setUser(null);
  };

  const logIn = (token) => {
    const user = jwtDecode(token);
    setUser(user);
    authStorage.storeToken(token);
  };

  return { user, setUser, logIn, logOut };
};
