import axiosInstance from "./axiosInstance";

async function getAllCategories() {
    const res = await axiosInstance.get(`/categories`);
    return res.data;
};

async function getAllProducts() {
    const res = await axiosInstance.get(`/products`);
    return res.data;
};

export {
    getAllCategories,
    getAllProducts
};
