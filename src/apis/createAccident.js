import instance from "./axios";

export const createAccident = async (data) => {
  const response = await instance.post("/accidents/information", data);
  return response;
};

