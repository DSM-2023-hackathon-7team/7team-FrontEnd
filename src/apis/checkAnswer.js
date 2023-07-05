import instance from "./axios";
import axios from "axios";

export const checkAnswer = (quizId, result) => {
  const response = axios.get(
    `https://f130-119-203-74-86.ngrok-free.app/quiz/answer`,
    {
      params: {
        quizId,
        result,
      },
      headers: {
        "Content-Type": `application/json`,
        "ngrok-skip-browser-warning": "69420",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
  return response;
};
