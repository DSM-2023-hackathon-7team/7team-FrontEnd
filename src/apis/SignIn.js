import axios from "axios";

export const SignIn = (data) => {
  const response = axios.post("/users/signin", data);
  return response;
};
