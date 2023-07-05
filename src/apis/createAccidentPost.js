import instance from "./axios";

export const createAccidentPost = (data) => {
  const response = instance.post("/accidents", data);
  return response;
};
