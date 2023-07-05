import axios from "axios";

export const getDetailAccident = async (id) => {
  const response = await axios.get(
    `https://f130-119-203-74-86.ngrok-free.app/accidents/information/${id}`,
    {
      headers: {
        "Content-Type": `application/json`,
        "ngrok-skip-browser-warning": "69420",
      },
    }
  );
  return response;
};
