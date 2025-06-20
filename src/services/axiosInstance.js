import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001", // Bütün istəklər bu əsas URL ilə başlayacaq
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;


