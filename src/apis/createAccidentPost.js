import instance from "./axios";

export const createAccidentPost = async (data) => {
  const response = await instance.post("/accidents", data);
  return response;
};
