import axios from "axios";

export const SignUpApi = (data) => {
  const reseponse = axios.post("http://3.36.125.144:8080/users/signup", data);
  return reseponse;
};
