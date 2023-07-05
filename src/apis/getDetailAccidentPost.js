import axios from "axios";

export const getDetailAccidentPost = async (id) => {
  const response = await axios.get(`/accidents/${id}`, {
    headers: {
      "Content-Type": `application/json`,
      "ngrok-skip-browser-warning": "69420",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  return response;
};
