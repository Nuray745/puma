import axiosInstance from "./axiosInstance";

async function getAllCategories() {
    const res = await axiosInstance.get(`/categories`);
    return res.data;
};

export {
    getAllCategories
};
