import instance from "./axios";

export const getComments = async (id) => {
  const response = await instance.get(`/comments/accident-information/${id}`);
  return response;
};

