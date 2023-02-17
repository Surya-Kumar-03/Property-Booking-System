import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.137.160:8000/api/",
  timeout: 1000,
  withCredentials: true,
});

export default instance;
