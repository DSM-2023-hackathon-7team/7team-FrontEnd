import axios from "axios";

export const getAccident = (title, sort_type) => {
  const access_token = localStorage.getItem('access_token');
  const response = axios.get("http://3.36.125.144:8080/accidents/information", {headers: {
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
