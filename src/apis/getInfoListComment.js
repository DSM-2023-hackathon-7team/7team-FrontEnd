import axios from "axios";

export const getInfoListComment = async (id) => {
  const response = await axios.get(
    `https://f130-119-203-74-86.ngrok-free.app/comments/accident-information/${id}`,
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
