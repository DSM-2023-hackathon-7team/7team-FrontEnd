import axios from "axios";

export const SignIn = (data) => {
  const response = axios.post("http://3.36.125.144:8080/users/signin", data);
  return response;
};
