import axios from "axios";

export const getNews = (pages) => {
  const response = axios.get(
    `https://28ac-119-203-74-86.ngrok-free.app/news?pageNum=${pages}`,
    {
      headers: {
        "Content-Type": `application/json`,
        "ngrok-skip-browser-warning": "69420",
      },
    }
  );
  return response;
};
