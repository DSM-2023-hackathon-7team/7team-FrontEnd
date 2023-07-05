import instance from "./axios";

export const createInfoListComment = (accident_id, content) => {
  const response = instance.post(
    `/comments/accident-information/${accident_id}`,
    {
      content,
    }
  );
  return response;
};
