import axiosInstance from "./axiosInstance";

async function getAllCategories() {
    const res = await axiosInstance.get(`/categories`);
    return res.data;
};

async function getAllProducts() {
    const res = await axiosInstance.get(`/products`);
    return res.data;
};

async function getProductsById(id) {
    const res = await axiosInstance.get(`/products/${id}`);
    return {...res.data,count:1};
};

async function getProdBySubId(id, limit, page) {
    const res = await axiosInstance.get(`/products/subcategory/${id}?limit=${limit}&page=${page}`)
    return addCount(res.data)
};

export {
    getAllCategories,
    getAllProducts,
    getProductsById,
    getProdBySubId
};
