import axios from "axios";

export const getDetailAccident = async (id) => {
  const response = await axios.get(
    `http://3.36.125.144:8080/accidents/information/${id}`,
    {
      headers: {
        "Content-Type": `application/json`,
        "ngrok-skip-browser-warning": "69420",
      },
    }
  );
  return response;
};
