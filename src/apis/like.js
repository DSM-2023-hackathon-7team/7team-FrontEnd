import instance from "./axios";

export const likeApi = (accident_information_id) => {
  const response = instance.patch(`/likes/${accident_information_id}`);
  return response;
};
