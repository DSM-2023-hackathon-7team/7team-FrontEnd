import axios from "axios";

export const SignIn = (data) => {
  const response = axios.post(
    "https://f130-119-203-74-86.ngrok-free.app/users/signin",
    data
  );
  return response;
};
