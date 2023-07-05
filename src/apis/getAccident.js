import axios from "axios";

export const getAccident = (title, sort_type) => {
  const response = axios.get("https://f130-119-203-74-86.ngrok-free.app/accidents/information", {headers: {
    'Content-Type': `application/json`,
    'ngrok-skip-browser-warning': '69420',
  }, params: {
      title,
      sort_type,
    },
  });
  return response;
};
