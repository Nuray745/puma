import axiosInstance from "./axiosInstance";

export const register = (formData) => {
  return axiosInstance.post("/register", formData);
};

export const login = (formData) => {
  return axiosInstance.post("/login", formData);
};

export const verifyToken = () => {
  return axiosInstance.get("/660/users");
};
