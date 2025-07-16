import axiosInstance from "./axiosInstance";

export const getAllProducts = () => {
  return axiosInstance.get("/products");
};

export const getProductsById = (id) => {
  return axiosInstance.get(`/products/${id}`);
};

export const getProductsByCategory = (categoryName) => {
  return axiosInstance.get(`/products/category/${categoryName}`);
};

export const getProductsBySearch = (searchTerm) => {
  return axiosInstance.get(`/products/search?q=${searchTerm}`);
};
