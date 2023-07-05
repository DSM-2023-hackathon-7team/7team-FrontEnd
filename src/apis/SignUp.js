import axios from "axios";

export const SignUpApi = (data) => {
  const reseponse = axios.post(
    "https://f130-119-203-74-86.ngrok-free.app/users/signup",
    data
  );
  return reseponse;
};
