import axiosInstance from "./axiosInstance";
import { Cookies } from "react-cookie";

async function getAllCategories() {
  const res = await axiosInstance.get(`/categories`);
  return res.data;
}

async function getAllProducts() {
  const res = await axiosInstance.get(`/products`);
  return res.data;
}

async function getProductById(id) {
  const res = await axiosInstance.get(`/products/${id}`);
  return { ...res.data, count: 1 };
}

async function getProductsByCategoryId(categoryId) {
  const res = await axiosInstance.get(`/products?categoryId=${categoryId}`);
  return res.data;
}

async function getProductsBySubId(subcategoryId) {
  const res = await axiosInstance.get(
    `/products?subcategoryId=${subcategoryId}`
  );
  return res.data;
}

async function getProductsByItemId(clidrenID) {
  const res = await axiosInstance.get(`/products?clidrenID=${clidrenID}`);
  return res.data;
}

async function login(user) {
  const res = await axiosInstance.post(`/auth/login`, user);
  return res;
}

async function register(user) {
  const res = await axiosInstance.post(`/auth/register`, user);
  return res;
}

async function verifyToken() {
  const cook = new Cookies();
  const token = cook.get("login-token");

  return token === "dummy-token" ? { status: true } : { status: false };
}

async function searchProducts(name) {
  const res = await axiosInstance.get(`/products/search?name=${name}`);
  return res.data;
}

export {
  getAllCategories,
  getAllProducts,
  getProductById,
  getProductsByCategoryId,
  getProductsBySubId,
  getProductsByItemId,
  login,
  register,
  verifyToken,
  searchProducts,
};
