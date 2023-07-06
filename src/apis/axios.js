import axios from "axios";

const instance = axios.create({
  baseURL: `http://3.36.125.144:8080`,
  timeout: 2000,
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("access_token");
    accessToken &&
      (config.headers = { Authorization: `Bearer ${accessToken}` });
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
