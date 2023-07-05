import axios from "axios";

export const imageUpload = async (file) => {
  const response = await axios.post(
    "https://f130-119-203-74-86.ngrok-free.app/files",
    file,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};
