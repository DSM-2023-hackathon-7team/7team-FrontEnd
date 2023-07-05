import axios from "axios";

export const getAccident = (title, sort_type) => {
  const access_token = localStorage.getItem('access_token');
  const response = axios.get("https://f130-119-203-74-86.ngrok-free.app/accidents/information", {headers: {
    'Content-Type': `application/json`,
    'ngrok-skip-browser-warning': '69420',
    Authorization: `Bearer ${access_token}`
  }, params: {
      title,
      sort_type,
    },
  });
  return response;
};
