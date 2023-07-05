import instance from "./axios";

export const createQuiz = async (data) => {
  const response = await instance.post("/quiz", data, {
    headers: {
      "Content-Type": `application/json`,
      "ngrok-skip-browser-warning": "69420",
    },
  });
  return response;
};
