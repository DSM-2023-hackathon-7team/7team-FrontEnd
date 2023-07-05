import axios from "axios";

export const getDetailAccident = async (id) => {
  const response = await axios.get(`/accidents/information/${id}`);
  return response;
};
