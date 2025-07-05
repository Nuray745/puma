import axiosInstance from "./axiosInstance";

async function getAllCategories() {
    const res = await axiosInstance.get(`/categories`);
    return res.data;
};

async function getAllProducts() {
    const res = await axiosInstance.get(`/products`);
    return res.data;
};

async function getProductById(id) {
    const res = await axiosInstance.get(`/products/${id}`);
    return {...res.data,count:1};
};

async function getProductsByCategoryId(categoryId) {
  const res = await axiosInstance.get(`/products?categoryId=${categoryId}`);
  return res.data;
}

async function getProductsBySubId(subcategoryId) {
  const res = await axiosInstance.get(`/products?subcategoryId=${subcategoryId}`);
  return res.data;
}

async function getProductsByItemId(clidrenID) {
  const res = await axiosInstance.get(`/products?clidrenID=${clidrenID}`);
  return res.data;
}


export {
    getAllCategories,
    getAllProducts,
    getProductById,
    getProductsByCategoryId,
    getProductsBySubId,
    getProductsByItemId
};
