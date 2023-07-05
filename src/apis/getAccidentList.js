import axios from "axios";

export const getAccidentList = async () => {
  const response = await axios.get("/accidents");
  return response;
};
