import axios from "axios";

export const getRank = () => {
  const response = axios.get(
    "https://f130-119-203-74-86.ngrok-free.app/quiz/rank",
    {
      headers: {
        "Content-Type": `application/json`,
        "ngrok-skip-browser-warning": "69420",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
  return response;
};
