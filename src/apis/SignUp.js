import axios from "axios";

export const SignUpApi = (data) => {
  const reseponse = axios.post("/users/signup", data);
  return reseponse;
};
