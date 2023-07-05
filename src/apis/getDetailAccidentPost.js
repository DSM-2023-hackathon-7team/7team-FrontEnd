import instance from "./axios";

export const getDetailAccidentPost = async (id) => {
  const response = await instance.get(`/accidents/${id}`);
  return response;
};
