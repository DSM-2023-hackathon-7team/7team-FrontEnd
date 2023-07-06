import axios from "axios";

export const getAccidentList = async () => {
  const response = await axios.get("http://3.36.125.144:8080/accidents",
  {
      headers: {
      'Content-Type': `application/json`,
      'ngrok-skip-browser-warning': '69420',
    }
  }
  );
  return response;
};

