import axios from "axios";

const API = axios.create({
  baseURL: "https://gorer-bazar.onrender.com",
  timeout: "20000",
  withCredentials: false,
});

export default API;
