import axios from "axios";

export const getRank = () => {
  const response = axios.get(
    "http://3.36.125.144:8080/quiz/rank",
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
