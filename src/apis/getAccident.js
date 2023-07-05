import axios from "axios";

export const getAccident = (title, sort_type) => {
  const response = axios.get("/accidents/information", {
    params: {
      title,
      sort_type,
    },
  });
  return response;
};
