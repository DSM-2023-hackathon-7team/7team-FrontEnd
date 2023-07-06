import axios from "axios";

export const imageUpload = async (file) => {
  const response = await axios.post("http://3.36.125.144:8080/files", file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};
