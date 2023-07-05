import axios from "axios";

export const getAccidentList = async () => {
  const response = await axios.get("https://f130-119-203-74-86.ngrok-free.app/accidents",
  {
      headers: {
      'Content-Type': `application/json`,
      'ngrok-skip-browser-warning': '69420',
    }
  }
  );
  return response;
};

