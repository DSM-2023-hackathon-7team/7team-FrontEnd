import axios from "axios";

export const getQuiz = async () => {
  const response = await axios.get(
    "https://f130-119-203-74-86.ngrok-free.app/quiz",
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
