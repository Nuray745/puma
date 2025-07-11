import axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import { Cookies } from "react-cookie";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const cook = new Cookies();
const axiosInstance = setupCache(
  axios.create({
    baseURL: BASE_URL, 
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${cook.get("login-token")}`,
      "Content-Type": "Application/json",
    },
  })
);

export default axiosInstance;