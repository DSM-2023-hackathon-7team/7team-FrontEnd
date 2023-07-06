import axios from "axios";

export const getDetailAccidentPost = async (id) => {
  const response = await axios.get(`http://3.36.125.144:8080/accidents/${id}`, {
    headers: {
      "Content-Type": `application/json`,
      "ngrok-skip-browser-warning": "69420",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  return response;
};
