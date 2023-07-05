import instance from "./axios";

export const createComment = (accident_id, content) => {
  const response = instance.post(`/comments/accident/${accident_id}`, {
    content,
  });
  return response;
};
